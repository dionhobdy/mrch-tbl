import { StyleSheet, TouchableOpacity, View } from 'react-native';
import { useState } from 'react';
import { Ionicons } from '@expo/vector-icons';
import ParallaxScrollView from '@/components/parallax-scroll-view';
import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';

export default function SettingsScreen() {
  const [accountExpanded, setAccountExpanded] = useState(true);
  const [applicationExpanded, setApplicationExpanded] = useState(false);

  return (
    <ParallaxScrollView
      headerImage={<ThemedView style={{ height: 200, backgroundColor: 'transparent' }} />}
      headerBackgroundColor={{ light: '#dfdfdfff', dark: '#f1f1f1ff' }}
      scrollEnabled={false}
    >
      <ThemedView style={styles.titleContainer}>
      </ThemedView>
      <ThemedText type="title" style={styles.settingsHeader}>SETTINGS</ThemedText>
      <ThemedView style={styles.stepContainer}>
        <ThemedView style={styles.sectionContainer}>
          {/* Account Settings */}
          <View style={styles.settingSection}>
            <TouchableOpacity
              style={styles.settingHeader}
              onPress={() => {
                if (!accountExpanded) {
                  setAccountExpanded(true);
                  setApplicationExpanded(false);
                }
              }}
            >
              <ThemedText style={styles.settingTitle}>User</ThemedText>
              <ThemedText style={styles.arrow}>{accountExpanded ? '—' : '+'}</ThemedText>
            </TouchableOpacity>
            {accountExpanded && (
              <View style={styles.settingContent}>
                <ThemedText style={styles.settingItem}>Account</ThemedText>
                <ThemedView style={styles.divider} />
                <ThemedText style={styles.settingItem}>Billing</ThemedText>
                <ThemedView style={styles.divider} />
                <ThemedText style={styles.settingItem}>Privacy</ThemedText>
              </View>
            )}
          </View>

          {/* Divider between User and App */}
          <ThemedView style={styles.sectionDivider} />

          {/* Application Settings */}
          <View style={styles.settingSection}>
            <TouchableOpacity
              style={styles.settingHeader}
              onPress={() => {
                if (!applicationExpanded) {
                  setApplicationExpanded(true);
                  setAccountExpanded(false);
                }
              }}
            >
              <ThemedText style={styles.settingTitle}>App</ThemedText>
              <ThemedText style={styles.arrow}>{applicationExpanded ? '—' : '+'}</ThemedText>
            </TouchableOpacity>
            {applicationExpanded && (
              <View style={styles.settingContent}>
                <ThemedText style={styles.settingItem}>Permissions</ThemedText>
                <ThemedView style={styles.divider} />
                <ThemedText style={styles.settingItem}>Notifications</ThemedText>
                <ThemedView style={styles.divider} />
                <ThemedText style={styles.settingItem}>Language</ThemedText>
                <ThemedView style={styles.divider} />
                <ThemedText style={styles.settingItem}>Theme</ThemedText>
              </View>
            )}
          </View>
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
  settingsHeader: {
    textAlign: 'right',
    color: '#ffffff',
    fontSize: 63,
    fontWeight: '200',
    width: '100%',
    marginBottom: -10,
    marginTop: -62.25,
    marginLeft: 30,
    paddingRight: 0,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  sectionContainer: {
    gap: 12,
    marginBottom: 16,
  },
  header: {
    marginBottom: 10,
  },
  title: {
    marginBottom: 30,
  },
  settingSection: {
    marginBottom: 15,
    borderRadius: 8,
    overflow: 'hidden',
  },
  settingHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
    paddingLeft: 0,
    paddingRight: 0,
  },
  settingTitle: {
    alignSelf: 'flex-start',
    fontSize: 50,
    padding: 15,
    paddingLeft: 0,
    fontWeight: '400',
  },
  arrow: {
    fontSize: 50,
    fontWeight: '200',
    opacity: 0.15,
  },
  settingContent: {
    padding: 25,
    borderTopColor: '#ffffff',
  },
  settingItem: {
    fontSize: 35,
    paddingTop: 15,
    paddingBottom: 25,
    fontWeight: '300',
    opacity: 0.8,
  },
  divider: {
    width: '30%',
    height: 1,
    backgroundColor: '#e2e2e220',
    opacity: 0.25,
  },
  sectionDivider: {
    width: '100%',
    height: 1,
    backgroundColor: '#e2e2e220',
    opacity: 0.5,
    marginVertical: 10,
  },
});