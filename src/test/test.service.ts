import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { GetTestDTO } from './dto/get-test.dto';

@Injectable()
export class TestService {
  constructor(private readonly prisma: PrismaService) {}

  findAll() {
    const findAll = this.prisma.testUser.findMany() as unknown as GetTestDTO[];
    return findAll;
  }
}
