import { Injectable } from '@nestjs/common';
import { INestApplication, OnModuleInit } from '@nestjs/common/interfaces';
import { PrismaClient } from '@pulzeup/db';

@Injectable()
export class DbService extends PrismaClient implements OnModuleInit {
  async onModuleInit() {
    await this.$connect();
  }

  async enableShutdownHooks(app: INestApplication) {
    // @ts-ignore
    this.$on('beforeExit', async () => {
      await app.close();
    });
  }
}
