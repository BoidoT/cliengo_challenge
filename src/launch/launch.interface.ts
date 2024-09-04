export interface FormattedRocket {
  rocket_id: string;
  rocket_name: string;
  description: string;
  images: string[];
}

export interface FormattedPayload {
  payload_id: string;
  manufacturer: string;
  type: string;
}

export interface LaunchResponse {
  flight_number: number;
  mission_name: string;
  rocket: FormattedRocket;
  payloads: FormattedPayload[];
}

export interface SpaceXPayload {
  payload_id: string;
  manufacturer: string;
  payload_type: string;
}

interface SpaceXSecondStage {
  payloads: SpaceXPayload[];
}

interface SpaceXLaunchRocket {
  rocket_id: string;
  rocket_name: string;
  second_stage: SpaceXSecondStage;
}

export interface SpaceXLaunch {
  flight_number: number;
  mission_name: string;
  rocket: SpaceXLaunchRocket;
}

export interface SpaceXRocket {
  rocket_id: string;
  rocket_name: string;
  flickr_images: string[];
  description: string;
}
