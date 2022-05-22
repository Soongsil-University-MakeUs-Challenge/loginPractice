import { Injectable } from '@nestjs/common';
import { PickType } from '@nestjs/swagger';
import { User } from 'src/schema/user.schema';

@Injectable()
export class SignInRequestDto extends PickType(User, [
  'id',
  'password',
] as const) {}
