import { Module } from '@nestjs/common';
import { PrismaModule } from 'src/prisma/prisma.module';
import { TestController } from './test.controller';
import { TestService } from './test.service';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  imports: [PrismaModule],
  controllers: [TestController],
  providers: [TestService, PrismaService],
  exports: [TestService],
})
export class TestModule {}
