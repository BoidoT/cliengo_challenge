import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LaunchController } from './launch/launch.controller';
import { LaunchService } from './launch/launch.service';

@Module({
  imports: [],
  controllers: [AppController, LaunchController],
  providers: [AppService, LaunchService],
})
export class AppModule {}
