import { PartialType } from '@nestjs/swagger';
import { CreateRekeningDto } from './create-rekening.dto';

export class UpdateRekeningDto extends PartialType(CreateRekeningDto) {}
