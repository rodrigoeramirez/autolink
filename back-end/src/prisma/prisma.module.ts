import { Module } from '@nestjs/common';
import { PrismaService } from './prisma.service';

// Patron Singleton: Es el encargado de crear una instancia singleton de PrismaService, esto va permitir compartir el servicio atraves de toda la aplicacion
@Module({
  providers: [PrismaService],
  exports: [PrismaService], // De esta manera cualquier modulo que importe el PrismaModule, va a poder hacer uso del PrismaService
})
export class PrismaModule {}
