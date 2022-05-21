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
    console.log(signUpBody);
    const { email, id, password, nickname } = signUpBody;
    console.log(1);
    console.log(password);
    console.log(id);
    const isExistId = await this.catModel.exists({ id });
    console.log(2);
    console.log(password);
    if (isExistId) {
      console.log(3);
      console.log(password);
      throw new HttpException('해당 id는 이미 사용중입니다..', 405);
    }
    console.log(4);
    console.log(password);
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    console.log(hashedPassword);
    const user = await this.catModel.create({
      id,
      email,
      password: hashedPassword,
      nickname,
    });
  }
}
