import { Module } from '@nestjs/common';
import { AutosService } from './autos.service';
import { AutosController } from './autos.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  imports:[PrismaModule], // ¡Esto trae el PrismaService al contexto!
  controllers: [AutosController],
  providers: [AutosService],
})
export class AutosModule {}
