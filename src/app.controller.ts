import { Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  /*
  constructor(private readonly appService: AppService) {}

  @Get('users')
  getUsersList() {
    return this.appService.getUsers();
  }

  @Post('create-user')
  createUser() {
    return this.appService.createUser();
  } */
}
