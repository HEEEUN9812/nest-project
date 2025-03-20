import { Injectable } from '@nestjs/common';
import { User, UserDocument } from './user.entity';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { UserCredentialsDto } from './user.credentials.dto';

@Injectable()
export class UserService {
  constructor(
    @InjectModel(User.name) private userEntity: Model<UserDocument>,
  ) {}

  async createUser(userCredentialsDto: UserCredentialsDto): Promise<User> {
    const { email, password } = userCredentialsDto;
    const newUser = new this.userEntity({
      email,
      password,
    });
    await newUser.save();

    return newUser;
  }
}
