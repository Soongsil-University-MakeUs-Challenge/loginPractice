import { Injectable } from '@nestjs/common';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { AuthService } from '../auth.service';
import { PassportStrategy } from '@nestjs/passport';
import { jwtConstants } from './constants';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(private readonly authService: AuthService) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: true, // 일단은 무한하게 해둠
      secretOrKey: jwtConstants.secret,
    });
  }

  //controller에 @UseGuards(JwtAuthGuard) 붙은 메서드들은 여기를 사전에 거쳐서 검증을 한다.
  //   async validate(payload: JwtPayload): Promise<AuthenticatedUser> {
  //     const account = await this.authService.validateAccount(payload);
  //     if (!account) throw new UnauthorizedException();
  //     return account;
  //   }
}
