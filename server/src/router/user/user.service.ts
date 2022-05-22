import { HttpException, Injectable } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { UserSignUpBodyDto } from './dto/userSignUpBodyDto';
import { UserRepository } from './user.repository';

@Injectable()
export class UserService {
  constructor(private readonly userRepository: UserRepository) {}

  async SignUp(signUpBody: UserSignUpBodyDto) {
    const { email, id, password, nickname } = signUpBody;
    try {
      await this.checkDuplicate(id);
    } catch (error) {
      return {
        statusCode: error.status,
        statusMsg: error.message,
      };
    }
    const encryptedPassword = await this.passwordEncrypt(password);
    const user = await this.userRepository.createUser({
      id,
      email,
      password: encryptedPassword,
      nickname,
    });
    return user;
  }

  private async checkDuplicate(id: UserSignUpBodyDto['id']) {
    const isExist = await this.userRepository.duplicateCheck(id);
    if (isExist) {
      throw new HttpException('해당 id는 이미 사용중입니다.', 405);
    }
  }

  private async passwordEncrypt(password: UserSignUpBodyDto['password']) {
    const salt = await bcrypt.genSalt(10);
    return await bcrypt.hash(password, salt);
  }
}
