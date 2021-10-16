import { Module } from '@nestjs/common';
import { KonsumenService } from './konsumen.service';
import { KonsumenController } from './konsumen.controller';

@Module({
  controllers: [KonsumenController],
  providers: [KonsumenService]
})
export class KonsumenModule {}
