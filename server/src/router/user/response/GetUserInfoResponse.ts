import { ApiProperty } from '@nestjs/swagger';
import { BaseResponse } from 'src/lib/ResponseBuilder';
import { User } from 'src/schema/user.schema';

export class GetUserInfoResponse extends BaseResponse {
  @ApiProperty()
  id: string;

  @ApiProperty()
  nickname: string;

  @ApiProperty()
  email: string;

  @ApiProperty()
  userInfo: User;

  @ApiProperty({ example: 200 })
  statusCode: number;

  @ApiProperty({ example: 'sign in success' })
  message: string;
}
