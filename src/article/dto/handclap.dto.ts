import {
  IsEmail,
  IsNotEmpty,
  IsNumber,
  IsString,
  Max,
  Min,
} from 'class-validator';

export class HandClapDto {
  @IsNotEmpty()
  user_id: number;
  @IsNotEmpty()
  @IsNumber()
  article_id: number;

  count: number;
}
