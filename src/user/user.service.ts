import { Inject, Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { Repository } from 'typeorm';
import { User } from './entities/user.entity';

@Injectable()
export class UserService {

  constructor(
    @Inject('USER_REPOSITORY')
    private userRepository : Repository<User>
  ){}
  async create(createUserDto: CreateUserDto) {
    await this.userRepository.save(createUserDto);
  }

  async findAll() {
    return await this.userRepository.find();
  }

  async findOneById(id: number) {
    return await this.userRepository.findOneBy({id})
  }

  async findOneByLogin(login: string) {
    return await this.userRepository.findOneBy({login})
  }


  async update(id: number, updateUserDto: UpdateUserDto) {
    await this.userRepository.update(id,updateUserDto);
  }

 async remove(id: number) {
    await this.userRepository.delete(id);
  }
}
