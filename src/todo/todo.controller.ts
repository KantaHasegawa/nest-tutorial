import { CreateTodoDto } from './createTodo.dto';
import { Todo } from './todo.entity';
import { TodoService } from './todo.service';
import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { UpdateDoneTodoDto } from './updateDoneTodo.dto';

@Controller('todo')
export class TodoController {
  constructor(private todoService: TodoService) {}
  @Get('list')
  async getList() {
    return await this.todoService.findAll();
  }

  @Post('')
  async createTodo(@Body() todo: CreateTodoDto) {
    const todoEntity = new Todo(todo.title, new Date().toISOString(), false);
    return await this.todoService.create(todoEntity);
  }

  @Post(':id/done')
  async done(@Param() param: UpdateDoneTodoDto) {
    return await this.todoService.done(param.id);
  }
}
