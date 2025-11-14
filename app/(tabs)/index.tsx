import { Image } from 'expo-image';
import { Platform, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import QRCode from 'react-native-qrcode-svg';
import { useState } from 'react';

import ParallaxScrollView from '@/components/parallax-scroll-view';
import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { Link } from 'expo-router';

export default function HomeScreen() {
  const [activeTab, setActiveTab] = useState<'cart' | 'recent'>('cart');
  return (
    <ParallaxScrollView
        headerImage={<ThemedView style={{ height: 200, backgroundColor: 'transparent' }} />}
        headerBackgroundColor={{ light: '#dfdfdfff', dark: '#f1f1f1ff' }}
      >
        <ThemedView style={styles.titleContainer}>
        </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedView style={styles.sectionContainer}>
          <ThemedView style={styles.toggleContainer}>
            <TouchableOpacity onPress={() => setActiveTab('cart')}>
              <ThemedText 
                type="subtitle" 
                style={[styles.toggleText, activeTab === 'cart' && styles.activeToggleText]}
              >
                CART
              </ThemedText>
            </TouchableOpacity>
            <ThemedView style={styles.divider} />
            <TouchableOpacity onPress={() => setActiveTab('recent')}>
              <ThemedText 
                type="subtitle" 
                style={[styles.toggleText, activeTab === 'recent' && styles.activeToggleText]}
              >
                RECENT
              </ThemedText>
            </TouchableOpacity>
          </ThemedView>
          
          {activeTab === 'cart' ? (
            <ThemedView style={styles.emptyStateContainer}>
              <ThemedText style={styles.emptyStateText}>No recent purchases were made</ThemedText>
            </ThemedView>
          ) : (
            <ThemedView style={styles.emptyStateContainer}>
              <ThemedText style={styles.emptyStateText}>No recent purchases were made</ThemedText>
            </ThemedView>
          )}
        </ThemedView>
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
      </ThemedView>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  sectionContainer: {
    gap: 12,
    marginBottom: 16,
  },
  whiteSquare: {
    width: 250,
    height: 350,
    backgroundColor: '#ffffff',
    borderRadius: 2,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 3,
  },
  qrContainer: {
    padding: 8,
    backgroundColor: '#ffffff',
    borderRadius: 4,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 3,
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: 320,
  },
  squareRow: {
    flexDirection: 'row',
    gap: 10,
    flexWrap: 'wrap',
  },
  scrollView: {
    height: 370,
  },
  scrollContent: {
    flexDirection: 'row',
    gap: 10,
    paddingHorizontal: 5,
  },
  emptyStateContainer: {
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: 320,
  },
  emptyStateText: {
    fontSize: 16,
    opacity: 0.6,
  },
  toggleContainer: {
    flexDirection: 'row',
    gap: 20,
    marginBottom: 8,
    alignItems: 'center',
  },
  toggleText: {
    opacity: 0.4,
  },
  activeToggleText: {
    opacity: 1,
  },
  divider: {
    width: 1,
    height: 20,
    backgroundColor: '#00000020',
  },
});
