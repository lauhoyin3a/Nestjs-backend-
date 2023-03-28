import { Education_level, Gender } from '@prisma/client';
import {
  IsEmail,
  IsNotEmpty,
  IsNumber,
  IsString,
  Max,
  Min,
} from 'class-validator';

export class UserProfileDto {
  @IsNotEmpty()
  @IsNumber()
  user_id: number;
  @IsNotEmpty()
  photo: string;
  @IsNotEmpty()
  last_name: string;
  @IsNotEmpty()
  first_name: string;
  @IsNotEmpty()
  last_name_chi: string;
  @IsNotEmpty()
  first_name_chi: string;
  @IsNotEmpty()
  gender: Gender;
  @IsNotEmpty()
  birthday: string;
  @IsNotEmpty()
  @IsNumber()
  profession_id: number;
  @IsNotEmpty()
  education_level: Education_level;
  cv: string;
}
