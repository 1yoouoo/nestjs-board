import { AuthCredentialsDto } from './DTO/auth-credential.dto';
import { AuthService } from './auth.service';
import { Body, Controller, Post, ValidationPipe } from '@nestjs/common';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('/signup')
  signUp(
    @Body(ValidationPipe) authcredentialsDto: AuthCredentialsDto
  ): Promise<void> {
    return this.authService.signUp(authcredentialsDto);
  }
  @Post('/signin')
  signIn(@Body(ValidationPipe) authcredentialsDto: AuthCredentialsDto) {
    return this.authService.signIn(authcredentialsDto);
  }
}
