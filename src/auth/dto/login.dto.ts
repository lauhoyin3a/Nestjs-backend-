import { IsEmail, IsNotEmpty, IsString, Max, Min } from 'class-validator';


export class LoginDto {
 

  @IsEmail()
  @IsNotEmpty()
  email: string;

  @IsString()
  @IsNotEmpty()

  password: string;
}
