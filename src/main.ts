import { BadRequestException, ValidationError, ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe({
    whitelist: true, // validasi berdasarkan DTO
    forbidUnknownValues: true,
    transform: true, //  supaya ada message errornya.
    validateCustomDecorators: true, // karena ada validasi buatan sendiri, IsExist src/etc/validator/exist-validator, pada src\user\dto\create-user.dto.ts
    transformOptions: {  // karena ada validasi buatan sendiri, sda
      enableImplicitConversion: true  // karena ada validasi buatan sendiri, sda
    }
    //=============== ERROR MESSAGE TO OBJECT DETAIL VALIDATION
    // import { BadRequestException, ValidationError, ValidationPipe } from '@nestjs/common';
    // exceptionFactory: (validationErrors: ValidationError[] = []) => {
    //   return new BadRequestException(validationErrors);
    // },
    //=============== /ERROR MESSAGE TO OBJECT DETAIL VALIDATION

  })) // middleware
  await app.listen(3000);
}
bootstrap();
