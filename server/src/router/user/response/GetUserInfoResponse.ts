import { ApiProperty } from '@nestjs/swagger';
import { BaseResponse } from 'src/lib/ResponseBuilder';

export class GetUserInfoResponse extends BaseResponse {
  @ApiProperty()
  id: string;

  @ApiProperty()
  nickname: string;

  @ApiProperty()
  email: string;

  @ApiProperty({ example: 200 })
  statusCode: number;

  @ApiProperty({ example: 'success to get use info' })
  message: string;
}
