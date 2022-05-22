import { AuthenticatedUser } from '../router/auth/auth.service';
declare global {
  namespace Express {
    // See the supertype from `node_modules/@types/passport/index.d.ts`.
    // eslint-disable-next-line @typescript-eslint/no-empty-interface
    interface User extends AuthenticatedUser {}
  }
}
