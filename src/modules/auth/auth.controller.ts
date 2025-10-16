import { AuthService } from './auth.service';
import { LoginDto } from '../../application/dto/login.dto';
import { ApiBody, ApiOkResponse, ApiOperation, ApiTags } from '@nestjs/swagger';
import { Body, Controller, Post } from '@nestjs/common';

@ApiTags('Auth')
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('login')
  @ApiOperation({ summary: 'Login de usuário' })
  @ApiBody({ type: LoginDto })
  @ApiOkResponse({ description: 'Token de autenticação' })
  async login(@Body() body: LoginDto) {
    return this.authService.login(body.email, body.password);
  }
}
