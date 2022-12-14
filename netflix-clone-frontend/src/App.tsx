import { MantineProvider, Text } from '@mantine/core';

export default function App() {
  return (
    <MantineProvider withGlobalStyles withNormalizeCSS>
      <Text>Hola :D </Text>
    </MantineProvider>
  );
}