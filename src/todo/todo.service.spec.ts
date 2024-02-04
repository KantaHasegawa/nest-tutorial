import { Test, TestingModule } from '@nestjs/testing';
import { TodoService } from './todo.service';
import { getRepositoryToken } from '@nestjs/typeorm';
import { TodoController } from './todo.controller';
import { Todo } from './todo.entity';

const mockTodoRepositoryFactory = jest.fn(() => ({
  find: jest.fn().mockReturnValue([]),
}));

describe('TodoService', () => {
  let service: TodoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TodoController],
      providers: [
        TodoService,
        {
          provide: getRepositoryToken(Todo),
          useValue: mockTodoRepositoryFactory(),
        },
      ],
    }).compile();

    service = module.get<TodoService>(TodoService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('list', async () => {
    expect(await service.findAll()).toEqual([]);
  });
});
