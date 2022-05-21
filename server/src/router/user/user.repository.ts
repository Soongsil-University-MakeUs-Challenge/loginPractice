import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { UserSignUpBodyDto } from './dto/userSignUpBodyDto';
import { User } from './schema/user.schema';

@Injectable()
export class UserRepository {
  constructor(
    @InjectModel(User.name) private readonly userModel: Model<User>,
  ) {}

  async createUser(user: UserSignUpBodyDto) {
    return await this.userModel.create(user);
  }

  async duplicateCheck(id: UserSignUpBodyDto['id']) {
    const duplicateResult = await this.userModel.exists({ id });

    return duplicateResult;
  }

  async fineUserByEmail(email: UserSignUpBodyDto['email']) {
    const user = await this.userModel.findOne({ email });
    return user;
  }

  async fineUserById(id: UserSignUpBodyDto['id']) {
    const user = await this.userModel.findOne({ id });
    return user;
  }
}
