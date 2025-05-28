import { Injectable } from '@nestjs/common';
import { CreateAutoDto } from './dto/create-auto.dto';
import { UpdateAutoDto } from './dto/update-auto.dto';
import {PrismaService} from "src/pri"

@Injectable()
export class AutosService {

  constructor(private prisma: PrismaService){
    // Inyecto una instancia de la clase PrismaService, para interactuar con la BD y poder realizar operaciones (CRUD, transacciones, consultas complejas, etc.) dentro de la clase GimnasioService.
}
  create(createAutoDto: CreateAutoDto) {
    return 'This action adds a new auto';
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
