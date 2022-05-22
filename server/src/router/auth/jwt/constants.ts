export const jwtConstants = {
  secret: 'ssumcLoginPractice',
};

export interface JwtPayload {
  id: string;
  password: string;
  nickname: string;
  email: string;
}
