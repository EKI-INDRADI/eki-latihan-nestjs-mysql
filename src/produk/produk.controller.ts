import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, UseInterceptors, UploadedFile } from '@nestjs/common';
import { ProdukService } from './produk.service';
import { CreateProdukDto } from './dto/create-produk.dto';
import { UpdateProdukDto } from './dto/update-produk.dto';
import { ApiBearerAuth, ApiBody, ApiConsumes, ApiTags } from '@nestjs/swagger';
import { JwtGuard } from 'src/auth/jwt.guard';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { InjectUser } from 'src/etc/decorator/inject-user.decorator';
// import { extname } from 'path/posix'; // rename 'path/posix' to 'path'
import { extname } from 'path';

@ApiTags('Produk')
@ApiBearerAuth()
@UseGuards(JwtGuard)
@Controller('produk')
export class ProdukController {
  constructor(private readonly produkService: ProdukService) { }

  @Post() // (INI BUKAN JSON, INI MULTIPART) menggunakan multer dan memanfaatkan fungsi dari interceptor
  @UseInterceptors(FileInterceptor('foto', {   // file interceptor dengan name foto
    storage: diskStorage({ // custom bawaan multer
      destination: './assets/produk',
      filename: (req: any, file, cb) => { // customize filename 
        //  const fileName = [req.user.id, Date.now()].join('-') // contohnya menggunakan array
        let number_user_id = Number(req.user.id)
        let eki_auto_generate = "PD"
          + new Date().getFullYear() //+ "-"
          + ("0" + (new Date().getMonth() + 1)).slice(-2) //+ "-"
          + ("0" + new Date().getDate()).slice(-2) + "-"
          + "USR" + number_user_id.toString().padStart((String(number_user_id).length > 4) ? String(number_user_id).length : 4, '0') + "-"
          + Date.now()

        // cb(null, eki_auto_generate + '.' + fileName + extname(file.originalname)) //  extname(file.originalname) = original filename (termasuk .)
        cb(null, eki_auto_generate + extname(file.originalname))
      }
    })
  }))
  @ApiConsumes('multipart/form-data') // agr swagger merubah format default (JSON) , menjadi multipart/form-data
  @ApiBody({ type: CreateProdukDto }) // karena swagger ada perubahan multipart maka Request Body nya perlu disesuaikan lagi
  // create(@Body() createProdukDto: CreateProdukDto, @UploadedFile() foto: Express.Multer.File) { // SEBELUM INJECT USER
  create(@InjectUser() createProdukDto: CreateProdukDto, @UploadedFile() foto: Express.Multer.File) { // SETELAH INJECT USER
    createProdukDto.foto = foto.filename
    return this.produkService.create(createProdukDto);
  }

  @Get()
  findAll() {
    return this.produkService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.produkService.findOne(+id);
  }

  @Patch(':id')
  //==============================COPY FROM POST CONTROLLER
  @UseInterceptors(FileInterceptor('foto', {
    storage: diskStorage({
      destination: './assets/produk',
      filename: (req: any, file, cb) => {
        let number_user_id = Number(req.user.id)
        let eki_auto_generate = "PD"
          + new Date().getFullYear()
          + ("0" + (new Date().getMonth() + 1)).slice(-2)
          + ("0" + new Date().getDate()).slice(-2) + "-"
          + "USR" + number_user_id.toString().padStart((String(number_user_id).length > 4) ? String(number_user_id).length : 4, '0') + "-"
          + Date.now()
        cb(null, eki_auto_generate + extname(file.originalname))
      }
    })
  }))
  @ApiConsumes('multipart/form-data') // agr swagger merubah format default (JSON) , menjadi multipart/form-data
  @ApiBody({ type: CreateProdukDto })
  //==============================/COPY FROM POST CONTROLLER
  // @ApiBody({ type: UpdateProdukDto }) 

  // update(@Param('id') id: string, @Body() updateProdukDto: UpdateProdukDto) { // sebelum  update upload file
  update(@Param('id') id: string, @InjectUser() updateProdukDto: UpdateProdukDto, @UploadedFile() foto: Express.Multer.File) {
    if (foto) {
      updateProdukDto.foto = foto.filename
    }
    return this.produkService.update(+id, updateProdukDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.produkService.remove(+id);
  }
}
