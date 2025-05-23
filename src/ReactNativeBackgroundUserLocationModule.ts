import { NativeModule, requireNativeModule } from 'expo';

import { ReactNativeBackgroundUserLocationModuleEvents } from './ReactNativeBackgroundUserLocation.types';

declare class ReactNativeBackgroundUserLocationModule extends NativeModule<ReactNativeBackgroundUserLocationModuleEvents> {
  PI: number;
  hello(): string;
  setValueAsync(value: string): Promise<void>;
}

// This call loads the native module object from the JSI.
export default requireNativeModule<ReactNativeBackgroundUserLocationModule>('ReactNativeBackgroundUserLocation');
