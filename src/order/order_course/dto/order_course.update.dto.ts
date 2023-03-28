import { Order_Status, Order_type, Payment_Method } from '@prisma/client';
import {
  IsEmail,
  IsNotEmpty,
  IsNumber,
  IsString,
  Max,
  Min,
} from 'class-validator';

export class OrderCourseUpdateDto {
  course_status: string;

  course_name: string;

  course_price: number;
}
