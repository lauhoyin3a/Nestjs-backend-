import { Period } from '@prisma/client';
import { IsEmail, IsNotEmpty, IsString, Max, Min } from 'class-validator';

export class SubscriptionDto {
  @IsString()
  name: string;
  @IsString()
  content: string;
  price: number;
  period: Period;
}
