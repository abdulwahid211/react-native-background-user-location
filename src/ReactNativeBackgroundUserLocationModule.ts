import { NativeModule, requireNativeModule } from 'expo';

import { LocationData, ReactNativeBackgroundUserLocationModuleEvents } from './ReactNativeBackgroundUserLocation.types';

declare class ReactNativeBackgroundUserLocationModule extends NativeModule<ReactNativeBackgroundUserLocationModuleEvents> {

  startUpdatingLocationAsync(): Promise<void>;
  
  /**
   * Stops continuous location updates
   */
  stopUpdatingLocationAsync(): Promise<void>;
  
  /**
   * Gets the current position once
   */
  getCurrentPositionAsync(): Promise<LocationData>;
}

// This call loads the native module object from the JSI.
export default requireNativeModule<ReactNativeBackgroundUserLocationModule>('ReactNativeBackgroundUserLocation');
