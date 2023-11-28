import { Controller, Get, Post } from '@nestjs/common';
import { TestService } from './test.service';
import { GetTestDTO } from './dto/get-test.dto';

@Controller('test')
export class TestController {
  constructor(private readonly testService: TestService) {}

  @Get()
  findAll() {
    return this.testService.findAll();
  }
}
