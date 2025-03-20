import { Body, Controller, Post } from '@nestjs/common';
import { UserService } from './user.service';
import { User } from './user.entity';
import { UserCredentialsDto } from './user.credentials.dto';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post('/signup')
  signup(@Body() createUserDto: UserCredentialsDto): Promise<User> {
    return this.userService.createUser(createUserDto);
  }
}
