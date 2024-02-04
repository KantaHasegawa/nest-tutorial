import { Column, Entity } from 'typeorm';

@Entity({ name: 'todos' })
export class Todo {
  @Column({
    primary: true,
    generated: 'uuid',
  })
  id: string;

  @Column({ unique: true })
  title: string;

  @Column({
    name: 'due_on',
    type: 'datetime',
    nullable: true,
  })
  dueOn: string;

  @Column({
    name: 'is_done',
    type: 'boolean',
    default: false,
  })
  isDone: boolean;

  constructor(title: string, dueOn: string, isDone: boolean) {
    this.title = title;
    this.dueOn = dueOn;
    this.isDone = isDone;
  }
}
