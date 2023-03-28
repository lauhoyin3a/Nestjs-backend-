import { Order_Status, Order_type, Payment_Method } from '@prisma/client';
import {
  IsEmail,
  IsNotEmpty,
  IsNumber,
  IsString,
  Max,
  Min,
} from 'class-validator';

export class OrderUpdateDto {
  status: Order_Status;

  type: Order_type;

  payment_method: Payment_Method;

  redeem_coupon_id: number;

  total_amount: number;
}
