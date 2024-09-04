import { SpaceXLaunch, SpaceXPayload, SpaceXRocket } from './launch.interface';

export function mapToSpaceXLaunch(launch: any): SpaceXLaunch {
  return {
    flight_number: launch.flight_number,
    mission_name: launch.mission_name,
    rocket: {
      rocket_id: launch.rocket.rocket_id,
      rocket_name: launch.rocket.rocket_name,
      second_stage: {
        payloads: launch.rocket.second_stage.payloads.map(
          (payload: any): SpaceXPayload => ({
            payload_id: payload.payload_id,
            manufacturer: payload.manufacturer,
            payload_type: payload.payload_type,
          }),
        ),
      },
    },
  };
}

export function mapToSpaceXRocket(rocket: any): SpaceXRocket {
  const { rocket_id, rocket_name, description, flickr_images } = rocket;
  return {
    rocket_id,
    rocket_name,
    description,
    flickr_images,
  };
}
