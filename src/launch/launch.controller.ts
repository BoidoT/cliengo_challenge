import { Controller, Get } from '@nestjs/common';
import { LaunchResponse } from './launch.interface';
import { LaunchService } from './launch.service';

@Controller('launches')
export class LaunchController {
  constructor(private readonly launchService: LaunchService) {}
  @Get()
  async getAll(): Promise<LaunchResponse[]> {
    return this.launchService.getAll();
  }
}
