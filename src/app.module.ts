import { Module } from '@nestjs/common';
import { DriversModule } from './drivers/drivers.module';
import { VehiclesModule } from './vehicles/vehicles.module';
import { PrismaModule } from './prisma/prisma.module';

@Module({
  imports: [DriversModule, VehiclesModule, PrismaModule],
  controllers: [],
  providers: [],
})
export class AppModule { }
