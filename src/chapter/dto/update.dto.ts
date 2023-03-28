import {
  IsEmail,
  IsNotEmpty,
  IsString,
  Max,
  Min,
  IsNumber,
} from 'class-validator';

export class ChapterUpdateDto {
  name: string;
  order: number;
}
