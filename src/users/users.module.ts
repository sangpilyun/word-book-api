import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from '../entities/user.entity';
import { Authority } from 'src/entities/authority.entity';
import { AuthorizationModule } from './authorization/authorization.module';
import { EmailService } from './email.service';

@Module({
  imports: [TypeOrmModule.forFeature([User, Authority]), AuthorizationModule],
  controllers: [UsersController],
  providers: [UsersService, EmailService],
  exports: [UsersService],
})
export class UsersModule {}
