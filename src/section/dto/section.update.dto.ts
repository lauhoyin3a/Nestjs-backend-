import { Order_Status, Order_type, Payment_Method, Type } from '@prisma/client';
import {
  IsEmail,
  IsNotEmpty,
  IsNumber,
  IsString,
  Max,
  Min,
} from 'class-validator';

export class SectionUpdateDto {
  name: Order_Status;

  type: Type;

  content: string;

  order: number;

  is_locked: boolean;
}
