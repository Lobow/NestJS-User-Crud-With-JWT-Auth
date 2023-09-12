import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { DatabaseModule } from 'src/database/database.module';
import { UserModule } from 'src/user/user.module';

@Module({
  imports:[DatabaseModule,UserModule],
  controllers:[AuthController],
  providers: [AuthService],
  exports: [AuthService]
})
export class SecurityModule {}