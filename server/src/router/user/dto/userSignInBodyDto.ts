import { ApiProperty } from '@nestjs/swagger';

export class UserSignInBodyDto {
  @ApiProperty()
  id: string;

  @ApiProperty()
  password: string;
}
