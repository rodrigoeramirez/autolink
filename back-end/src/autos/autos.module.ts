import { Module } from '@nestjs/common';
import { AutosService } from './autos.service';
import { AutosController } from './autos.controller';

@Module({
  controllers: [AutosController],
  providers: [AutosService],
})
export class AutosModule {}
