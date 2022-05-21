import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UserRepository } from '../user/user.repository';
import { SignInRequestDto } from './dto/signIn.requestdto';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    private readonly userRepository: UserRepository,
    private readonly jwtService: JwtService,
  ) {}

  async jwtSignIn(data: SignInRequestDto) {
    const { id, password } = data;

    console.log(1);
    const user = await this.userRepository.fineUserById(id);

    if (!user) {
      throw new UnauthorizedException('이메일과 비밀번호를 확인해주세요.');
    }

    //* password가 일치한지
    const isPasswordValidated: boolean = await bcrypt.compare(
      password,
      user.password,
    );

    if (!isPasswordValidated) {
      throw new UnauthorizedException('이메일과 비밀번호를 확인해주세요.');
    }

    const payload = { id: id, sub: user.id };

    return {
      token: this.jwtService.sign(payload),
    };
  }
}
