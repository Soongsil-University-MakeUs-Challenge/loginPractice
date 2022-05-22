import {
  HttpException,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { AuthService } from '../auth.service';
import { PassportStrategy } from '@nestjs/passport';
import { jwtConstants, JwtPayload } from './constants';
import { UserRepository } from 'src/router/user/user.repository';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(
    private readonly authService: AuthService,
    private readonly userRepository: UserRepository,
  ) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: true, // 일단은 무한하게 해둠
      secretOrKey: jwtConstants.secret,
    });
  }

  async validate(payload: JwtPayload) {
    const user = this.userRepository.fineUserById(payload.id);
    if (user) {
      return user; // request.user
    } else {
      throw new HttpException('인증되지 않은 사용자의 요청입니다..', 405);
    }
  }
}
