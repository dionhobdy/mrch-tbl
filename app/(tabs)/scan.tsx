import { CameraView, useCameraPermissions } from 'expo-camera';
import { useState } from 'react';
import { Button, StyleSheet, Text, View, Alert } from 'react-native';

import ParallaxScrollView from '@/components/parallax-scroll-view';
import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';

export default function ScanScreen() {
    const [facing, setFacing] = useState<'back' | 'front'>('back');
    const [permission, requestPermission] = useCameraPermissions();
    const [scanned, setScanned] = useState(false);
    if (!permission) {
        // if camera permissions are still loading
        return <View style={styles.container} />;
    }

    if (!permission.granted) {
        // camera permissions are not granted
        return (
            <View style={styles.container}>
                <Text style={styles.message}>Camera permission is needed to use the scanner.</Text>
                <Button onPress={requestPermission} title="Grant Permission" />
            </View>
        );
    }

    function codeScanned({ type, data }: { type: string; data: string }) {
        if (scanned) return;
        setScanned(true);
        Alert.alert(
            'Scan successful',
            `Type: ${type}\nData: ${data}`,
            [
                {
                    text: 'Scan Again',
                    onPress: () => setScanned(false),
                },
                {
                    text: 'OK',
                    onPress: () => setScanned(false),
                },
            ],
        );

        // todo: handle the scanned data here
        console.log('Scanned QR Code:', data);
    }
    return (
        <View style={styles.container}>
            <CameraView
                style={styles.camera}
                facing={facing}
                onBarcodeScanned={scanned ? undefined : codeScanned}
                barcodeScannerSettings={{
                    barcodeTypes: ['qr']
                }}
            >
                <View style={styles.overlay}>
                    <View style={styles.scanArea}>
                        <View style={[styles.corner, styles.topLeft]} />
                        <View style={[styles.corner, styles.topRight]} />
                        <View style={[styles.corner, styles.bottomLeft]} />
                        <View style={[styles.corner, styles.bottomRight]} />
                    </View>

                    <Text style={styles.instructionText}>
                         {scanned ? 'QR Code Scanned!' : 'Align QR Code within frame to scan'}
                    </Text>
                </View>
            </CameraView>
        </View>
    )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
  },
  message: {
    textAlign: 'center',
    paddingBottom: 20,
    color: '#ffffff',
    fontSize: 18,
  },
  camera: {
    flex: 1,
    width: '100%',
  },
  overlay: {
    flex: 1,
    backgroundColor: 'transparent',
    justifyContent: 'center',
    alignItems: 'center',
  },
  scanArea: {
    width: 250,
    height: 250,
    position: 'relative',
  },
  corner: {
    position: 'absolute',
    width: 30,
    height: 30,
    borderColor: '#ffffff',
  },
  topLeft: {
    top: 0,
    left: 0,
    borderTopWidth: 4,
    borderLeftWidth: 4,
  },
  topRight: {
    top: 0,
    right: 0,
    borderTopWidth: 4,
    borderRightWidth: 4,
  },
  bottomLeft: {
    bottom: 0,
    left: 0,
    borderBottomWidth: 4,
    borderLeftWidth: 4,
  },
  bottomRight: {
    bottom: 0,
    right: 0,
    borderBottomWidth: 4,
    borderRightWidth: 4,
  },
  instructionText: {
    position: 'absolute',
    bottom: 100,
    color: '#ffffff',
    fontSize: 18,
    padding: 10,
    borderRadius: 8,
  },
});
