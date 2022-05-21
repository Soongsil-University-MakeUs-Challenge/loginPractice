import { ApiProperty } from '@nestjs/swagger';
import { IsEmail } from 'class-validator';

export class UserSignUpBodyDto {
  @ApiProperty()
  id: string;

  @ApiProperty()
  password: string;

  @IsEmail()
  @ApiProperty()
  email?: string | null;

  @ApiProperty()
  nickname?: string | null;
}
