import { ApiProperty } from '@nestjs/swagger';
import { BaseResponse } from 'src/lib/ResponseBuilder';

export class EditUserInfoResponse extends BaseResponse {
  @ApiProperty()
  nickname: string;

  @ApiProperty()
  email: string;

  @ApiProperty({ example: 200 })
  statusCode: number;

  @ApiProperty({ example: 'edit success' })
  message: string;
}
