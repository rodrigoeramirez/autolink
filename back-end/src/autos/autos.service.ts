import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { CreateAutoDto } from './dto/create-auto.dto';
import { UpdateAutoDto } from './dto/update-auto.dto';
import {PrismaService} from "src/prisma/prisma.service"
import { Logger } from '@nestjs/common';

@Injectable()
export class AutosService {

  constructor(private prisma: PrismaService){
    // Inyecto una instancia de la clase PrismaService, para interactuar con la BD y poder realizar operaciones (CRUD, transacciones, consultas complejas, etc.) dentro de la clase GimnasioService.
}
async  create(createAutoDto: CreateAutoDto) {
    try {
      const nuevoAuto = await this.prisma.auto.create({
        data: createAutoDto,
      });
      return nuevoAuto;
    } catch (error) {
      // console.error("Error al crear el auto:"+ error.message) 
      Logger.error("Error al crear el auto:"+ error.message)
      throw new InternalServerErrorException('Error al crear el auto');
    }
  }

  findAll() {
    return `This action returns all autos`;
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
}
