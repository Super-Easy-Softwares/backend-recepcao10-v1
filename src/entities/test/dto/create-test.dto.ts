import { IsString, IsNotEmpty } from 'class-validator';
import { Test } from '../entity/test.entity';

export class CreateTestDTO extends Test {
  @IsString()
  @IsNotEmpty()
  name: string;
}
