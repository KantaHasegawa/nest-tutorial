import { IsNotEmpty, IsUUID } from 'class-validator';

export class UpdateDoneTodoDto {
  @IsNotEmpty()
  @IsUUID()
  id: string;
}
