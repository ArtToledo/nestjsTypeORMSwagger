import { Body, Controller, Get, Post, Res } from '@nestjs/common';

import { User } from 'src/infra/entities';
import { CreateUserRequest } from './infra/request/createUserRequest';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  async create(@Body() body: CreateUserRequest, @Res() res): Promise<User> {
    const resultado = await this.usersService.create(body as User);
    return res.status(201).json(resultado);
  }

  @Get()
  async findAll(@Res() res): Promise<User[]> {
    const resultado = await this.usersService.findAll();
    return res.status(200).json(resultado);
  }
}
