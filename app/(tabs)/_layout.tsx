import { Tabs } from 'expo-router';
import React from 'react';
import { Image } from 'react-native';

import { HapticTab } from '@/components/haptic-tab';
import { IconSymbol } from '@/components/ui/icon-symbol';
import { Colors } from '@/constants/theme';
import { useColorScheme } from '@/hooks/use-color-scheme';

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
        headerShown: false,
        tabBarButton: HapticTab,
        tabBarStyle: {
          justifyContent: 'center',
          paddingTop: 8,
        },
        tabBarIconStyle: {
          alignItems: 'center',
          justifyContent: 'center',
          marginTop: 4,
          marginBottom: 0,
        },
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: '',
          tabBarIcon: () => <Image source={require('@/assets/images/menu-bar/home.png')} style={{ width: 28, height: 28, alignSelf: 'center' }} />,
        }}
      />
      <Tabs.Screen
        name="scan"
        options={{
          title: '',
          tabBarIcon: () => <Image source={require('@/assets/images/menu-bar/scan.png')} style={{ width: 28, height: 28, alignSelf: 'center' }} />,
        }}
      />
      <Tabs.Screen
        name="explore"
        options={{
          href: null,
        }}
      />
      <Tabs.Screen
        name="settings"
        options={{
          title: '',
          tabBarIcon: () => <Image source={require('@/assets/images/menu-bar/account.png')} style={{ width: 28, height: 28, alignSelf: 'center' }} />,
        }}
      />
    </Tabs>
  );
}
