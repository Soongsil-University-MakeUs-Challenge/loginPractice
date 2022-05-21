import { HttpException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import * as bcrypt from 'bcrypt';
import { UserSignUpBodyDto } from './dto/userSignUpBodyDto';
import { User, UserDocument } from './schema/user.schema';

@Injectable()
export class UserService {
  constructor(@InjectModel(User.name) private catModel: Model<UserDocument>) {}

  async SignUp(signUpBody: UserSignUpBodyDto) {
    const { email, id, password, nickname } = signUpBody;
    try {
      await this.checkIdExist(id);
    } catch (error) {
      return {
        statusCode: error.status,
        statusMsg: error.message,
      };
    }
    const encryptedPassword = await this.passwordEncrypt(password);
    const user = await this.catModel.create({
      id,
      email,
      password: encryptedPassword,
      nickname,
    });

    return user;
  }

  private async checkIdExist(id: UserSignUpBodyDto['id']) {
    const isExistId = await this.catModel.exists({ id });
    if (isExistId) {
      throw new HttpException('해당 id는 이미 사용중입니다.', 405);
    }
  }

  private async passwordEncrypt(password: UserSignUpBodyDto['password']) {
    const salt = await bcrypt.genSalt(10);
    return await bcrypt.hash(password, salt);
  }
}
