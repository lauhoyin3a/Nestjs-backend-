import { Education_level, Gender } from '@prisma/client';
import {
  IsEmail,
  IsNotEmpty,
  IsNumber,
  IsString,
  Max,
  Min,
} from 'class-validator';

export class UserProfileUpdateDto {
  photo: string;
  last_name: string;

  first_name: string;

  last_name_chi: string;

  first_name_chi: string;

  gender: Gender;

  birthday: string;

  profession_id: number;

  education_level: Education_level;
  cv: string;
}
