export const jwtConstants = {
  secret: 'ssumcLoginPractice',
};

export interface JwtPayload {
  uid: number;
  username: string;
  clientId: number;
  regionCode: string;
  appVersion: string;
  createdAt: number;
  expireAt: number | null;
}
