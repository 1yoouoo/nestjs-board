import { AuthCredentialsDto } from './DTO/auth-credential.dto';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UserRepository } from './user.repository';
import * as bcrypt from 'bcryptjs';

@Injectable()
export class AuthService {
  constructor(private userRepository: UserRepository) {}

  async signUp(authCredentialsDto: AuthCredentialsDto): Promise<void> {
    return this.userRepository.createUser(authCredentialsDto);
  }
  async signIn(authCredentialsDto: AuthCredentialsDto): Promise<string> {
    const { username, password } = authCredentialsDto;
    const user = await this.userRepository.db.findOne({ username });

    if (user && (await bcrypt.compare(password, user.password))) {
      return 'Login Success';
    } else {
      throw new UnauthorizedException('Login Failed');
    }
  }
}
