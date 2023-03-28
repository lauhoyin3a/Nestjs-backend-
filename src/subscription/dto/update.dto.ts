import { Period } from '@prisma/client';
import { IsEmail, IsNotEmpty, IsString, Max, Min } from 'class-validator';

export class UpdateDto {
  name: string;

  content: string;
  price: number;
  period: Period;
}
