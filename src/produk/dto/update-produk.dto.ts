import { PartialType } from '@nestjs/swagger';
// import { CreateProdukDto } from './create-produk.dto';
import {  ProdukDto } from './create-produk.dto';

// export class UpdateProdukDto extends PartialType(CreateProdukDto) {}
export class UpdateProdukDto extends PartialType(ProdukDto) {} // kenapa menggunakan ProdukDto, agar memiliki id , sedangkan CreateProdukDto tidak memilki Id