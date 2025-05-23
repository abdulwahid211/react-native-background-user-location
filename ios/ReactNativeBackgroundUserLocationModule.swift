import ExpoModulesCore
import CoreLocation

public class ReactNativeBackgroundUserLocationModule: Module {
  // Each module class must implement the definition function. The definition consists of components
    private var locationManager: LocationManager?
  // that describes the module's functionality and behavior.
  // See https://docs.expo.dev/modules/module-api for more details about available components.
  public func definition() -> ModuleDefinition {
    // Sets the name of the module that JavaScript code will use to refer to the module. Takes a string as an argument.
    // Can be inferred from module's class name, but it's recommended to set it explicitly for clarity.
    // The module will be accessible from `requireNativeModule('ReactNativeBackgroundUserLocation')` in JavaScript.
    Name("ReactNativeBackgroundUserLocation")

    OnCreate {
      // Initialize the location manager and set up the location update callback
      self.locationManager = LocationManager()

    self.locationManager?.onLocationUpdate = { [weak self] locationData in
    print("Sending location from native:", locationData) // Verify this prints
    self?.sendEvent("onLocationUpdate", locationData)
     }
        }

    // Defines event names that the module can send to JavaScript.
    Events("onLocationUpdate")  // Must match sendEvent() name

    // Defines a JavaScript synchronous function that runs the native code on the JavaScript thread.
    Function("hello") {
      return "Hello IOS World! 👋"
    }

      AsyncFunction("startUpdatingLocationAsync") { (promise: Promise) in
      // Start continuous location tracking
      self.locationManager?.startUpdatingLocation()
      promise.resolve(nil)
    }

    AsyncFunction("stopUpdatingLocationAsync") { (promise: Promise) in
      // Stop continuous location tracking
      self.locationManager?.stopUpdatingLocation()
      promise.resolve(nil)
    }

    AsyncFunction("getCurrentPositionAsync") { (promise: Promise) in
      // Return the current location once
      guard let location = self.locationManager?.manager.location else {
        promise.reject("NO_LOCATION", "No location available")
        return
      }

      promise.resolve([
        "latitude": location.coordinate.latitude,
        "longitude": location.coordinate.longitude
      ])
    }
  }
}
