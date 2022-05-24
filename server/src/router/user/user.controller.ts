import { Body, Controller, Get, Post, Req, UseGuards } from '@nestjs/common';
import { ApiBearerAuth, ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { ApiResponseDecoratorFactory } from 'src/lib/ResponseBuilder';
import { AuthService } from '../auth/auth.service';
import { JwtAuthGuard } from '../auth/jwt/jwt.guard';
import { UserSignInBodyDto } from './dto/userSignInBodyDto';
import { UserSignUpBodyDto } from './dto/userSignUpBodyDto';
import { EditUserInfoResponse } from './response/EditUserInfoResponse';
import { GetUserInfoResponse } from './response/GetUserInfoResponse';
import { SignInResponse } from './response/SignInResponse';
import { SignUpResponse } from './response/SignUpResponse';
import { UserService } from './user.service';

@ApiTags('user')
@Controller('user')
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

  @ApiResponseDecoratorFactory(ApiOkResponse, GetUserInfoResponse)
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth('Authorization')
  @Get()
  async UserInfo(@Req() req: Express.AuthenticatedRequest) {
    const { id, nickname, email } = req.user;
    return { id, nickname, email };
  }

  @ApiResponseDecoratorFactory(ApiOkResponse, EditUserInfoResponse)
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth('Authorization')
  @Post()
  async EditUserInfo(
    @Req() req: Express.AuthenticatedRequest,
    @Body() body: Partial<Omit<UserSignUpBodyDto, 'password' | 'id'>>,
  ) {
    const { id } = req.user;
    const { nickname, email } = body;
    const editedUserInfo = this.userService.EditUserInfo({
      id,
      nickname,
      email,
    });
    return editedUserInfo;
  }
}
