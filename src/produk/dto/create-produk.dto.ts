import { ApiProperty, OmitType, PickType } from "@nestjs/swagger"
import { IsDate, IsNotEmpty, IsNumber, IsObject, IsString } from "class-validator"
import { IsExist } from "src/etc/validator/exist-validator"
import { IsUnique } from "src/etc/validator/unique-validator"
import { UserDto } from "src/user/dto/create-user.dto"
import { Produk } from "../entities/produk.entity"

export class ProdukDto {
    @ApiProperty() //swagger
    @IsExist([Produk,'id'])
    @IsNumber()
    id: number

    @ApiProperty() 
    @IsUnique([Produk,'barcode'])
    @IsString()
    @IsNotEmpty()
    barcode: string

    @ApiProperty() 
    @IsString()
    @IsNotEmpty()
    deskripsi_produk: string

    @ApiProperty() 
    @IsNumber()
    @IsNotEmpty()
    harga_beli: number

    @ApiProperty() 
    @IsNumber()
    @IsNotEmpty()
    harga_jual: number

    @ApiProperty() 
    @IsString()
    @IsNotEmpty()
    foto: string

    @ApiProperty() 
    @IsDate()
    create_at: Date

    @ApiProperty() 
    @IsDate()
    update_at: Date

    // @ApiProperty() // gak perlu di input 
    @IsObject() //datanya harus object (karena relasi dari user)
    user: UserDto // pake fieldnya mengikuti UserDto
} 
export class CreateProdukDto extends OmitType(ProdukDto, ['id']){} //OmitType dari swagger & buang id nya  // OmitType = buang sebagian
export class ProdukIdDto extends PickType(ProdukDto, ['id']){} //PickType dari swagger & hanya ambil id nya  // PickType = ambil sebagian



//==============  default 
// export class CreateProdukDto {}
//==============  /default 