import { IsEmail, IsNotEmpty, IsString, Max, Min } from 'class-validator';


export class AuthDto {
  @IsNotEmpty()
  @Min(10000000)
  @Max(99999999)
  phone: number;

  @IsEmail()
  @IsNotEmpty()
  email: string;

  @IsString()
  @IsNotEmpty()

  password: string;
}
