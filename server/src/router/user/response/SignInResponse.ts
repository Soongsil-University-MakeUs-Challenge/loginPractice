import { ApiProperty } from '@nestjs/swagger';
import { BaseResponse } from 'src/lib/ResponseBuilder';

export class SignInResponse extends BaseResponse {
  @ApiProperty()
  token: string;

  @ApiProperty({ example: 200 })
  statusCode: number;

  @ApiProperty({ example: 'sign in success' })
  message: string;
}
