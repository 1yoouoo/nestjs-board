import { AuthCredentialsDto } from './DTO/auth-credential.dto';
import { AuthService } from './auth.service';
import { Body, Controller, Post } from '@nestjs/common';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('/signup')
  signUp(@Body() authcredentialsDto: AuthCredentialsDto): Promise<void> {
    return this.authService.signUp(authcredentialsDto);
  }
}
