import { LoginDto } from './dto/login.dto';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from 'src/schemas/user.schema';
import * as bcrypt from 'bcryptjs';
import { JwtService } from '@nestjs/jwt';
import { SignUpDto } from './dto/signup.dto';
import { Response } from 'express';

@Injectable()
export class AuthService {
  constructor(
    @InjectModel(User.name)
    private userModel: Model<User>,
    private jwtService: JwtService,
  ) {}

  async login(loginDto: LoginDto, res: Response): Promise<{ token: string }> {
    const { email, password } = loginDto;

    const user = await this.userModel.findOne({ email });

    if (!user) {
      throw new UnauthorizedException('Invalid Email or Password');
    }

    const isPasswordMatched = await bcrypt.compare(password, user.password);

    if (!isPasswordMatched) {
      throw new UnauthorizedException('Invalid Email or Password');
    }

    const token = this.jwtService.sign({
      id: user._id,
      username: user.username,
      email: user.email,
    });

    res.cookie('auth_token', token, {
      httpOnly: true,
      secure: true, // ensure this is true in production
      sameSite: 'strict',
    });

    return { token };
  }
  async signUp(
    signUpDto: SignUpDto,
    res: Response,
  ): Promise<{ token: string }> {
    const { username, email, password } = signUpDto;

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await this.userModel.create({
      username,
      email,
      password: hashedPassword,
    });

    const token = this.jwtService.sign({
      id: user._id,
      username: user.username,
      email: user.email,
    });

    res.cookie('auth_token', token, {
      httpOnly: true,
      secure: true, // ensure this is true in production
      sameSite: 'strict',
    });

    return { token };
  }
}
