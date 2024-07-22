import { IsString, IsNotEmpty, IsEmail, MinLength } from 'class-validator';

export class SignUpDto {
  @IsNotEmpty()
  @IsString()
  readonly username: string;

  @IsNotEmpty()
  @IsEmail({}, { message: 'Enter correct email' })
  readonly email: string;

  @IsNotEmpty()
  @IsString()
  @MinLength(8, { message: 'Password should be more than 8 characters' })
  readonly password: string;
}
