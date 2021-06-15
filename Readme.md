
## Expo workflow 📖

As we are using the expo managed workflow, the entirety of our application is just a JS bundle. This JS bundle then operates within the native ecosystem of the Expo app.
The expo app contains all the native code we require and so there is no need to compile it ourselves.

During development you use the Expo [client](https://expo.io/tools) which is available from the app store.
You will also require the [expo-cli](https://expo.io/tools#cli) to be installed in your terminal.
The expo client listens to the JS bundle server on your machine, which is run using the command `expo start`.

As you make changes to the code it automatically hot reloads within the client.

## Getting Started 🏁

#### Computer 💻

1.  `npm install expo-cli --global` (yarn also possible)
2.  `git clone https://github.com/cybersemics/em-webview-app.git`
3.  `cd em-webview-app`
4.  `yarn && yarn start`
5.  If a simulator or connected with adb press `a` to run on Android or `i` for iOS

#### Mobile device (not simulator or connected with adb) 📲

1. Download expo client
2. Ensure the wifi is connected to the same network as the computer
3. Scan the barcode at [http://localhost:19002/](http://localhost:19002/) (expo server ui)

## Release to stores 🚀

[Expo build - Read More](https://docs.expo.io/distribution/building-standalone-apps/)

The package.json has helper scripts to run, publish, build and upload each variant of the application.

You will need to login to your Expo account before you build or upload.

```shell
# build ios ipa
yarn build-ios-prod
```
or

```shell
# build android apk/abb
yarn build-android-prod
```


