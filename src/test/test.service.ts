import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { GetTestDTO } from './dto/get-test.dto';
import { CreateTestDTO } from './dto/create-test.dto';

@Injectable()
export class TestService {
  constructor(private readonly prisma: PrismaService) {}

  async create(data: CreateTestDTO) {
    const { name } = data;
    const createdTestUser = await this.prisma.testUser.create({ data });
    return createdTestUser;
  }

  async findAll() {
    const findAll = this.prisma.testUser.findMany() as unknown as GetTestDTO[];
    return findAll;
  }
}
