import { ApiProperty, PartialType } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';
// import { CreateProdukDto } from './create-produk.dto';
import { ProdukDto } from './create-produk.dto';

// export class UpdateProdukDto extends PartialType(CreateProdukDto) {}
// export class UpdateProdukDto extends PartialType(ProdukDto) {} // kenapa menggunakan ProdukDto, agar memiliki id , sedangkan CreateProdukDto tidak memilki Id
export class UpdateProdukDto extends PartialType(ProdukDto) {
    // @ApiProperty({required:false})
    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    barcode: string
    // BUG FIX update menghilangkan IsUnique
    // {
    //     "statusCode": 400,
    //     "message": [
    //       "barcode test sudah digunakan"
    //     ],
    //     "error": "Bad Request"
    // }
}