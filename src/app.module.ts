import { Module } from '@nestjs/common';
import InfrastructureModule from './shared/infrastructure/infrastructure.module';

@Module({
  imports: [InfrastructureModule]
})
export class AppModule {}
