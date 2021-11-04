import { ApiHideProperty, ApiProperty, OmitType } from "@nestjs/swagger"
import { IsArray, IsDate, IsNumber, IsObject, IsString, ValidateNested } from "class-validator"
import { IsExist } from "src/etc/validator/exist-validator"
import { IsUnique } from "src/etc/validator/unique-validator"
import { KonsumenId } from "src/konsumen/dto/create-konsuman.dto"
import { UserIdDto } from "src/user/dto/create-user.dto"
import { Column, PrimaryGeneratedColumn } from "typeorm"
import { Penjualan } from "../entities/penjualan.entity"
import { PenjualanBayarDto } from "./penjualan-bayar.dto"
import { PenjualanItemDto } from "./penjualan-item.dto"

export class PenjualanDto {
    @ApiProperty()
    @IsExist([Penjualan, 'id'])
    id: number

    @ApiProperty()
    @IsString()
    @IsUnique([Penjualan, 'no_faktur'])
    no_faktur: string

    @ApiProperty()
    @IsDate()
    tanggal: Date

    @ApiHideProperty() //jangan munculkan pada swagger
    @IsNumber()
    total_transaksi: number

    @ApiHideProperty() //jangan munculkan pada swagger
    @IsNumber()
    total_potongan: number

    @ApiHideProperty() //jangan munculkan pada swagger
    @IsNumber()
    total_bayar: number

    @ApiProperty({ type: KonsumenId })// hanya perlu konsumen id nya saja
    @ValidateNested() // api ini akan memvalidasi dto konsumen ( src\konsumen\dto\create-konsuman.dto.ts), untuk keperluan IsExist ID nya (sudah ada atau tdk)
    @IsObject()
    konsumen: KonsumenId // hanya ambil id nya

    @ApiProperty({ type: [PenjualanItemDto] })  // keperluan untuk data berupa array, menggunakan type : [...], perlu buat DTO nya
    @IsArray()
    @ValidateNested({ each: true }) // karena array maka perlu di each true (untuk loop data) & setiap arraynya akan di validasi
    item: PenjualanItemDto[] //ini array

    @ApiProperty({ type: [PenjualanBayarDto] })  // keperluan untuk data berupa array, menggunakan type : [...], perlu buat DTO nya
    @ValidateNested()
    @ValidateNested({ each: true }) // karena array maka perlu di each true (untuk loop data) & setiap arraynya akan di validasi
    bayar: PenjualanBayarDto[] //ini array

    @ApiHideProperty() //jangan munculkan pada swagger
    user: UserIdDto

}

// export class CreatePenjualanDto { }
export class CreatePenjualanDto extends OmitType(PenjualanDto, ['id']) { }
