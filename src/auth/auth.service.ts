import { AuthCredentialsDto } from './DTO/auth-credential.dto';
import { Injectable } from '@nestjs/common';
import { UserRepository } from './user.repository';

@Injectable()
export class AuthService {
  constructor(private userRepository: UserRepository) {}

  async signUp(authCredentialsDto: AuthCredentialsDto): Promise<void> {
    return this.userRepository.createUser(authCredentialsDto);
  }
}
