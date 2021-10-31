import { PartialType } from '@nestjs/swagger';
import { CreatePenjualanDto } from './create-penjualan.dto';

export class UpdatePenjualanDto extends PartialType(CreatePenjualanDto) {}
