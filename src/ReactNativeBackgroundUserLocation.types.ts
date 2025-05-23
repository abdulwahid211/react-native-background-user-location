
export type ReactNativeBackgroundUserLocationModuleEvents = {
  onLocationUpdate: (params: LocationData) => LocationData;
};

export interface LocationData {
  latitude: number;
  longitude: number;
}
