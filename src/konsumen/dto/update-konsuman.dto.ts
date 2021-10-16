import { PartialType } from '@nestjs/swagger';
import { CreateKonsumanDto } from './create-konsuman.dto';

export class UpdateKonsumanDto extends PartialType(CreateKonsumanDto) {}
