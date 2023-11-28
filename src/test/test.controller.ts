import { Controller, Body, Get, Post } from '@nestjs/common';
import { TestService } from './test.service';
import { GetTestDTO } from './dto/get-test.dto';
import { CreateTestDTO } from './dto/create-test.dto';

@Controller('test')
export class TestController {
  constructor(private readonly testService: TestService) {}

  @Get()
  findAll() {
    return this.testService.findAll();
  }

  @Post()
  create(@Body() createTestDTO: CreateTestDTO) {
    const createdTestUser = this.testService.create(createTestDTO);
    return createdTestUser;
  }
}
