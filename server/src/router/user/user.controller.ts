import { Body, Controller, Post, UseGuards } from '@nestjs/common';
import { ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { ApiResponseDecoratorFactory } from 'src/lib/ResponseBuilder';
import { UserSignUpBodyDto } from './dto/userSignUpBodyDto';
import { SignUpResponse } from './response/SignUpResponse';
import { UserService } from './user.service';

@ApiTags('users')
@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @ApiResponseDecoratorFactory(ApiOkResponse, SignUpResponse)
  @UseGuards()
  @Post('/signUp')
  async SignUp(@Body() body: UserSignUpBodyDto) {
    return await this.userService.SignUp(body);
  }

  //TODO : APIOKReesponse 뒤에 response data type 넣어줘야됨
  //   @ApiResponseDecoratorFactory(ApiOkResponse)
  //   @UseGuards()
  //   @Post('/signUp')
  //   async signIn(@Body() body: UserSignInBodyDto) {
  //     return body;
  //   }
}
