import { Body, Controller, Get, Post, Request } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { AuthDto } from './auth.dto';
import { AuthService } from './auth.service';

@ApiTags('Auth') // supaya  dokumentasi tampil di swagger (auto generate)
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {

  }

  @Get()
  checkUserController(@Request() req) {
    return req.user
  }

  @Post()
  async loginController(@Body() authDto: AuthDto) {
    // console.log(authDto)
    let user = await this.authService.checkUser(authDto.username, authDto.password)
    return this.authService.generateToken({ // untuk generate token berdasarkan payload data (baca dokumentasi jwt terlebih dahulu, karena jwt mampu menyimpan payload (di enkripsi))
      id: user.id   // hanya kirim id saja  (jika butuh payload bnyk kirim payload yg di perlukan)
    })

  }

}
