import { Body, Controller, Post, Res } from '@nestjs/common';
import { SignUpDto } from './dto/signup.dto';
import { AuthService } from './auth.service';
import { LoginDto } from './dto/login.dto';
import { Response } from 'express';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('/signup')
  async signUp(
    @Body() signUpDto: SignUpDto,
    @Res() res: Response,
  ): Promise<void> {
    await this.authService.signUp(signUpDto, res);
    res.send({ message: 'Registration successful' });
  }

  @Post('/login')
  async login(@Body() loginDto: LoginDto, @Res() res: Response): Promise<void> {
    await this.authService.login(loginDto, res);
    res.send({ message: 'Login successful' });
  }
}
