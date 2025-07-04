import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AutosModule } from './autos/autos.module';
import { PrismaModule } from './prisma/prisma.module';

@Module({
  imports: [AutosModule, PrismaModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
