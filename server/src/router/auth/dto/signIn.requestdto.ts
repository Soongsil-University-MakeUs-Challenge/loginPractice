import { Injectable } from '@nestjs/common';
import { PickType } from '@nestjs/swagger';
import { User } from 'src/router/user/schema/user.schema';

@Injectable()
export class SignInRequestDto extends PickType(User, [
  'id',
  'password',
] as const) {}
