import { BadRequestException, ConflictException, HttpException, Injectable, InternalServerErrorException } from '@nestjs/common';
import { CreateAutoDto } from './dto/create-auto.dto';
import { UpdateAutoDto } from './dto/update-auto.dto';
import {PrismaService} from "src/prisma/prisma.service"
import { Logger } from '@nestjs/common';

@Injectable()
export class AutosService {
  private readonly logger = new Logger(AutosService.name);
  constructor(private prisma: PrismaService){
    // Inyecto una instancia de la clase PrismaService, para interactuar con la BD y poder realizar operaciones (CRUD, transacciones, consultas complejas, etc.) dentro de la clase GimnasioService.
}
async  create(createAutoDto: CreateAutoDto) {

  // Si patenteDisponible devuelve false, quiere decir que la patente no está disponible para ser creada.
  if ((await this.patenteDisponible(createAutoDto.patente))===false){
    throw new ConflictException("La patente ingresada ya se encuentra registrada en la base de datos."); // Conflict se usa para error en datos duplicados.
  } // Lo pongo afuera del try, asi le muestra el ConflictException al cliente. Si lo pongo dentro del try se pisa con el catch.

  const errores = this.validarPatente(createAutoDto.patente);
  if (errores.length > 0) {
    throw new BadRequestException ({
      message:"Patente invalida, debe tener el siguiente formato: ABC123 o AB123CD",
      errors: errores
    });
  }

  try {

      const nuevoAuto = await this.prisma.auto.create({
        data: createAutoDto,
      });
      return nuevoAuto;
    } catch (error) {
      
      // Para ver el error en la terminal
      this.logger.error(`Error al crear auto: ${error.message}`, error.stack);

      // Solo lanza InternalServerError para errores desconocidos y los muestra en el body al cliente
      throw new InternalServerErrorException('Error desconocido en el servidor.');
    }
  }

  async findAll() {
    try {
      const autos = await this.prisma.auto.findMany(
        {where:{fechaBaja: null},
         select:{modelo:true,
                 marca:true,
                 año:true,
                 precio:true,
                 estado:true 
         } 
        });
      if (autos) {
        return autos;
      } else {
        return "No existen autos disponibles";
      }
    } catch (error) {
      console.error("Error al obtener los autos desde la BD:"+error.message);
      throw new InternalServerErrorException("Error al obtener los autos desde la BD.");
    }
  }

  findOne(id: number) {
    return `This action returns a #${id} auto`;
  }

  update(id: number, updateAutoDto: UpdateAutoDto) {
    return `This action updates a #${id} auto`;
  }

  remove(id: number) {
    return `This action removes a #${id} auto`;
  }
  // Este metodo valida que la patente no se encuentre en la BD. Si devuelve true significa que esta disponible y si devuelve false quiere decir que la patente ya está en uso.
  async patenteDisponible(patente:string): Promise <boolean> {
    try {
      const auto = await this.prisma.auto.findUnique({
        where:{patente},
      });

      if (auto) {
        return false; // Si encontró un auto entonces devuelve false, porque la patente no está disponible.
      } else {
        return true; // Si no encontró un auto con esa patente, entonces devuelvo true ya que esa patente está disponible para ser creada.
      }
    } catch (error) {
      console.error("Error al verificar si la patente está disponible:" + error.message);
      throw new InternalServerErrorException("Error al verificar si la patente está disponible"); // Internal es para falla en la base de datos.
    }
  }

  // Este metodo valida que el formato de la patente sea la correcta. Valida patentes viejas (Ejemplo: ABC123) y nuevas (Ejemplo: AB123CD)sss
  validarPatente(patente:string):string[]{
    let errores:string[]=[];
    
      if (patente.length===6){
        const primerosTres=patente.substring(0,3); //Toma por indices el inicio, pero no toma explicitam,ente el fin por ejemplo acá toma 0,1,2
        if (!/^[A-Za-z]{3}$/.test(primerosTres)) {
          errores.push("Los primeros 3 caracteres deben ser letras.")
        }
        const ultimosTres = patente.substring(3,6); // Toma 3,4,5
        if (!/^\d{3}$/.test(ultimosTres)) {
            errores.push("Los últimos 3 caracteres deben ser números.");
        }

      } else if (patente.length===7) {
        const primerosDos=patente.substring(0,2) //toma 0,1
        if (!/^[A-Za-z]{2}$/.test(primerosDos)) {
          errores.push("Los primeros 2 caracteres deben ser letras.");
        }
        const medioTres=patente.substring(2,5) // toma 2,3,4
        if (!/^\d{3}$/.test(medioTres)) {
          errores.push("Los 3 caracteres del medio deben ser números.");
        }
        const ultimosDos=patente.substring(5,7) //toma 5
        if (!/^[A-Za-z]{2}$/.test(ultimosDos)) {
          errores.push("Los ultimos 2 caracteres deben ser letras.");
        }
        
      } else {
        errores.push("La longitud de la patente debe ser de 6 o 7 caracteres.");
      }
      return errores;
  }
}
