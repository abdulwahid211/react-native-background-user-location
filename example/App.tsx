import { useEvent } from 'expo';
import ReactNativeBackgroundUserLocation, { LocationData } from 'react-native-background-user-location';
import { Button, SafeAreaView, ScrollView, Text, View } from 'react-native';
import { useEffect, useState } from 'react';

export default function App() {
  const [location, setLocation] = useState<LocationData | null>(null);

  const fetchCurrentPosition = async () => {
    try {
      const pos = await ReactNativeBackgroundUserLocation.getCurrentPositionAsync();
      console.log('Current position:', pos);
      setLocation({ latitude: pos.latitude, longitude: pos.longitude });
    } catch (err) {
      console.warn('Error fetching location:', err);
    }
  };


const liveTracking = async () => {
  const subscription = ReactNativeBackgroundUserLocation.addListener(
    'onLocationUpdate',
    (payload: any) => {
      setLocation(payload);
      console.log('location:', payload);
      return payload; // Return LocationData to match expected signature
    }
  );

  return () => {
    console.log('Cleaning up location tracking...');
    subscription.remove();
    ReactNativeBackgroundUserLocation.stopUpdatingLocationAsync();
  };
}

// Usage in component
useEffect(() => {
  // const cleanupPromise = liveTracking();
  // return () => {
  //   cleanupPromise.then(cleanup => cleanup?.());
  // };
}, []);

  const startTracking = async () => {
    try {
      await ReactNativeBackgroundUserLocation.startUpdatingLocationAsync();
      await liveTracking();
    } catch (err) {
      console.warn('Error starting tracking:', err);
    }
  };

  const stopTracking = async () => {
    try {
      await ReactNativeBackgroundUserLocation.stopUpdatingLocationAsync();
      setLocation(null);
    } catch (err) {
      console.warn('Error stopping tracking:', err);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.container}>
        <Text style={styles.header}>Backgrouund User Location Test</Text>
        <Group name="Controls">
          <Button title="Start Tracking" onPress={startTracking} />
          <Button title="Stop Tracking" onPress={stopTracking} />
          <Button title="Get Current Position" onPress={fetchCurrentPosition} />
        </Group>

        <Group name="Location Data">
          <Text>Latitude: {location?.latitude ?? 'N/A'}</Text>
          <Text>Longitude: {location?.longitude ?? 'N/A'}</Text>
        </Group>
      </ScrollView>
    </SafeAreaView>
  );
}

function Group(props: { name: string; children: React.ReactNode }) {
  return (
    <View style={styles.group}>
      <Text style={styles.groupHeader}>{props.name}</Text>
      {props.children}
    </View>
  );
}

const styles = {
  header: {
    fontSize: 30,
    margin: 20,
  },
  groupHeader: {
    fontSize: 20,
    marginBottom: 20,
  },
  group: {
    margin: 20,
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 20,
  },
  container: {
    flex: 1,
    backgroundColor: '#eee',
  },
  view: {
    flex: 1,
    height: 200,
  },
};
