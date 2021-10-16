import { Module } from '@nestjs/common';
import { RekeningService } from './rekening.service';
import { RekeningController } from './rekening.controller';

@Module({
  controllers: [RekeningController],
  providers: [RekeningService]
})
export class RekeningModule {}
