import { Slot } from "expo-router";
import { NativeBaseProvider, Box } from "native-base";

export default function Root() {
  return (
    // Setup the auth context and render our layout inside of it.
    <NativeBaseProvider>
      <Slot />
    </NativeBaseProvider>
  );
}
