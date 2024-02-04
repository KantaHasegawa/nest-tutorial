import { Controller, Get } from '@nestjs/common';

@Controller('todo')
export class TodoController {
  @Get('list')
  getList() {
    return ['todo 1', 'todo 2'];
  }
}
