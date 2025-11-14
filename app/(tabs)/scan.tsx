import { StyleSheet } from 'react-native';

import ParallaxScrollView from '@/components/parallax-scroll-view';
import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';

export default function ScanScreen() {
  return (
    <ParallaxScrollView
      headerImage={<ThemedView style={{ height: 200, backgroundColor: 'transparent' }} />}
      headerBackgroundColor={{ light: '#dfdfdfff', dark: '#f1f1f1ff' }}
    >
      <ThemedView style={styles.container}>
        <ThemedText type="title">Scan</ThemedText>
        <ThemedText>Scanner screen coming soon...</ThemedText>
      </ThemedView>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
});
