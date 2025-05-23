// Reexport the native module. On web, it will be resolved to ReactNativeBackgroundUserLocationModule.web.ts
// and on native platforms to ReactNativeBackgroundUserLocationModule.ts
export { default } from './ReactNativeBackgroundUserLocationModule';
export * from  './ReactNativeBackgroundUserLocation.types';
