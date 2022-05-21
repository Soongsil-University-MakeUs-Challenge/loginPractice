import { ApiProperty } from '@nestjs/swagger';
import { BaseResponse } from 'src/lib/ResponseBuilder';

export class SignUpResponse extends BaseResponse {
  @ApiProperty()
  id: string;

  @ApiProperty()
  email: string;

  @ApiProperty()
  nickname: string;

  @ApiProperty({ example: 200 })
  statusCode: number;

  @ApiProperty({ example: 'success in getting emoticon packs' })
  statusMsg: string;
}
