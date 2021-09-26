import { PartialType } from '@nestjs/swagger';
import { CreateProdukDto } from './create-produk.dto';

export class UpdateProdukDto extends PartialType(CreateProdukDto) {}
