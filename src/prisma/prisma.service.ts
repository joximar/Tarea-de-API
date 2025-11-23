import { Injectable, Logger, OnModuleDestroy, OnModuleInit } from '@nestjs/common';
import { PrismaClient } from 'generated/prisma/client';

@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit, OnModuleDestroy {

    private readonly logger = new Logger(PrismaClient.name);

    async onModuleInit() {
        await this.$connect();
        this.logger.log('Database Connectd');
        
    }

    async onModuleDestroy() {
        await this.$disconnect();
    }
}
