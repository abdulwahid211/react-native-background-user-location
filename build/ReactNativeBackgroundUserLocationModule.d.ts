import { NativeModule } from 'expo';
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
declare const _default: ReactNativeBackgroundUserLocationModule;
export default _default;
//# sourceMappingURL=ReactNativeBackgroundUserLocationModule.d.ts.map