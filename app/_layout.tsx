import { Stack } from 'expo-router';

export default function Layout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerShown: false }} />
      <Stack.Screen name="SportSelection" options={{ headerShown: false }} />
      <Stack.Screen name="badmintonKickStart" options={{ headerShown: false }} />
      <Stack.Screen name="TeamMembers" options={{ headerShown: false }} />
      <Stack.Screen name="Fixtures" options={{ headerShown: false }} />
    </Stack>
  );
}
