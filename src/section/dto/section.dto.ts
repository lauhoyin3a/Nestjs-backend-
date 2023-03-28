import { Order_Status, Order_type, Payment_Method, Type } from '@prisma/client';
import {
  IsEmail,
  IsNotEmpty,
  IsNumber,
  IsString,
  Max,
  Min,
} from 'class-validator';

export class SectionDto {
  @IsNotEmpty()
  @IsNumber()
  chapter_id: number;

  @IsNotEmpty()
  name: Order_Status;

  @IsNotEmpty()
  type: Type;

  @IsNotEmpty()
  content: string;

  @IsNotEmpty()
  @IsNumber()
  order: number;

  @IsNotEmpty()
  @IsNumber()
  is_locked: boolean;
}
