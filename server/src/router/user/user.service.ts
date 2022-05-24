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
  async EditUserInfo({
    id,
    email,
    nickname,
  }: Partial<Omit<UserSignUpBodyDto, 'passowrd'>>) {
    nickname ?? this.nicknameValidate(nickname);
    email ?? this.emailValidate(email);
    const editedUserInfo = this.userRepository.editUserInfo({
      id,
      email,
      nickname,
    });
    return editedUserInfo;
  }

  private nicknameValidate(nickname: UserSignUpBodyDto['nickname']) {
    if (nickname === '욕') {
      throw new HttpException('이메일 입력값이 잘못됐습니다.', 405);
    } else return;
  }

  private emailValidate(email: UserSignUpBodyDto['email']) {
    const emailRegExp =
      /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;

    if (emailRegExp.test(email)) {
      return;
    } else {
      throw new HttpException('이메일 입력값이 잘못됐습니다.', 405);
    }
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
