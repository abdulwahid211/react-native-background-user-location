import { NativeModule } from 'expo';
import { ReactNativeBackgroundUserLocationModuleEvents } from './ReactNativeBackgroundUserLocation.types';
declare class ReactNativeBackgroundUserLocationModule extends NativeModule<ReactNativeBackgroundUserLocationModuleEvents> {
    PI: number;
    hello(): string;
    setValueAsync(value: string): Promise<void>;
}
declare const _default: ReactNativeBackgroundUserLocationModule;
export default _default;
//# sourceMappingURL=ReactNativeBackgroundUserLocationModule.d.ts.map