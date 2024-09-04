import { Injectable } from '@nestjs/common';
import {
  FormattedRocket,
  LaunchResponse,
  SpaceXLaunch,
  SpaceXRocket,
} from './launch.interface';
import axios from 'axios';
import { mapToSpaceXLaunch, mapToSpaceXRocket } from './launch.mapper';

@Injectable()
export class LaunchService {
  constructor() {}
  async getAll(): Promise<LaunchResponse[]> {
    const responseLaunches = await axios.get(
      'https://api.spacexdata.com/v3/launches',
    );
    const responseRockets = await axios.get(
      'https://api.spacexdata.com/v3/rockets',
    );

    const spaceXLaunches: SpaceXLaunch[] =
      responseLaunches.data.map(mapToSpaceXLaunch);
    const spaceXRockets: SpaceXRocket[] =
      responseRockets.data.map(mapToSpaceXRocket);

    const rocketMap = new Map<string, FormattedRocket>();
    spaceXRockets.forEach((rocket) =>
      rocketMap.set(rocket.rocket_id, {
        rocket_id: rocket.rocket_id,
        rocket_name: rocket.rocket_name,
        description: rocket.description,
        images: rocket.flickr_images,
      }),
    );

    const launchResponse: LaunchResponse[] = spaceXLaunches.map((launch) => {
      return {
        flight_number: launch.flight_number,
        mission_name: launch.mission_name,
        rocket: rocketMap.get(launch.rocket.rocket_id) || null,
        payloads: launch.rocket.second_stage.payloads.map((payload) => ({
          payload_id: payload.payload_id,
          manufacturer: payload.manufacturer,
          type: payload.payload_type,
        })),
      };
    });

    return launchResponse;
  }
}
