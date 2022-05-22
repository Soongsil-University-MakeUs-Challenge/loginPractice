import { Body, Controller, Get, Post, Req, UseGuards } from '@nestjs/common';
import { ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { ApiResponseDecoratorFactory } from 'src/lib/ResponseBuilder';
import { AuthService } from '../auth/auth.service';
import { JwtAuthGuard } from '../auth/jwt/jwt.guard';
import { UserSignInBodyDto } from './dto/userSignInBodyDto';
import { UserSignUpBodyDto } from './dto/userSignUpBodyDto';
import { SignInResponse } from './response/SignInResponse';
import { SignUpResponse } from './response/SignUpResponse';
import { UserService } from './user.service';

@ApiTags('users')
@Controller('users')
export class UserController {
  constructor(
    private readonly userService: UserService,
    private readonly authService: AuthService,
  ) {}

  @ApiResponseDecoratorFactory(ApiOkResponse, SignUpResponse)
  @UseGuards()
  @Post('/signUp')
  async SignUp(@Body() body: UserSignUpBodyDto) {
    return await this.userService.SignUp(body);
  }

  //TODO : APIOKReesponse 뒤에 response data type 넣어줘야됨
  @ApiResponseDecoratorFactory(ApiOkResponse, SignInResponse)
  @UseGuards()
  @Post('/signIn')
  async signIn(@Body() body: UserSignInBodyDto) {
    return this.authService.jwtSignIn(body);
  }

  @ApiResponseDecoratorFactory(ApiOkResponse, SignInResponse)
  @UseGuards(JwtAuthGuard)
  @Get('')
  async UserIfno(@Req() req: Express.AuthenticatedRequest) {
    console.log(req);
  }
}
