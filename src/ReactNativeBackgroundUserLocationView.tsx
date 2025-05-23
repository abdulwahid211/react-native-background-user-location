import { requireNativeView } from 'expo';
import * as React from 'react';

import { ReactNativeBackgroundUserLocationViewProps } from './ReactNativeBackgroundUserLocation.types';

const NativeView: React.ComponentType<ReactNativeBackgroundUserLocationViewProps> =
  requireNativeView('ReactNativeBackgroundUserLocation');

export default function ReactNativeBackgroundUserLocationView(props: ReactNativeBackgroundUserLocationViewProps) {
  return <NativeView {...props} />;
}
