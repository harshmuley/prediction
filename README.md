# Project Setup and Release Guide

## Getting Started

To start the project, you need to have Node.js and npm installed on your machine. If you haven't installed them yet, you can download and install them from [Node.js official website](https://nodejs.org/).

Once you have Node.js and npm installed, follow these steps to start the project:

1. Clone the repository:
   ```sh
   git clone https://github.com/your-username/your-repo-name.git
   cd your-repo-name
   ```

2. Install the project dependencies:
   ```sh
   npm install
   ```

3. Start the React Native development server:
   ```sh
   npx react-native start
   ```

4. Open a new terminal window and run the project on your desired platform (iOS or Android):

   For iOS:
   ```sh
   npx react-native run-ios
   ```

   For Android:
   ```sh
   npx react-native run-android
   ```

## Publishing a Release Build

To publish a release build, follow these steps:

### Android

1. Generate a release APK:
   ```sh
   cd android
   ./gradlew assembleRelease
   ```

2. You can find the generated APK at:
   ```
   android/app/build/outputs/apk/release/app-release.apk
   ```

### iOS

1. Open the iOS project in Xcode:
   ```sh
   cd ios
   open YourProjectName.xcworkspace
   ```

2. In Xcode, select the target device and set the build configuration to `Release`.

3. Archive the project by going to `Product` > `Archive`.

4. Once the archive is created, you can find it in the Xcode Organizer. From there, you can export the build for distribution.

For more detailed instructions on publishing a release build, refer to the official React Native documentation:
- [Publishing to Google Play Store](https://reactnative.dev/docs/signed-apk-android)
- [Publishing to Apple App Store](https://reactnative.dev/docs/publishing-to-app-store)
