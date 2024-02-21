import { IsEmail, IsString, MinLength } from 'class-validator';

export class AuthDto {
  @IsEmail({
    message: 'Error',
  })
  email: string;
  @MinLength(6, {
    message: 'Password incorrect, please check you password length',
  })
  @IsString()
  password: string;
}
