import { UserEntity } from '../../domain/auth/entities/user.entity';

export abstract class UserRepository {
  abstract findByEmail(email: string): Promise<UserEntity | null>;
}
