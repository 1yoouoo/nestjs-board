import { InjectRepository } from '@nestjs/typeorm';
import { Injectable } from '@nestjs/common';
import { AuthCredentialsDto } from './DTO/auth-credential.dto';
import { Repository } from 'typeorm';
import { User } from './user.entity';

@Injectable()
export class UserRepository {
  constructor(
    @InjectRepository(User)
    public db: Repository<User>
  ) {}

  async createUser(authCredentialDto: AuthCredentialsDto): Promise<void> {
    const { username, password } = authCredentialDto;
    const user = this.db.create({ username, password });

    await this.db.save(user);
  }
}
