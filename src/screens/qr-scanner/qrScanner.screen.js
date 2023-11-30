// // QRCodeScanner.js
// import React, { useEffect, useState } from 'react';
// import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
// import { RNCamera } from 'react-native-camera';
// import { request, PERMISSIONS } from 'react-native-permissions';

// const QRCodeScanner = ({ onScan }) => {
//   const [isCameraAuthorized, setIsCameraAuthorized] = useState(false);

//   useEffect(() => {
//     requestCameraPermission();
//   }, []);

//   const requestCameraPermission = async () => {
//     try {
//       const result = await request(PERMISSIONS.IOS.CAMERA || PERMISSIONS.ANDROID.CAMERA);

//       if (result === 'granted') {
//         setIsCameraAuthorized(true);
//       } else {
//         console.log('Camera permission denied');
//       }
//     } catch (error) {
//       console.error('Error requesting camera permission:', error);
//     }
//   };

//   const handleBarCodeScanned = ({ data }) => {
//     onScan(data);
//   };

//   return (
//     <View style={styles.container}>
//       {isCameraAuthorized ? (
//         <RNCamera
//           style={styles.camera}
//           type={RNCamera.Constants.Type.back}
//           onBarCodeRead={handleBarCodeScanned}
//         />
//       ) : (
//         <Text>Camera permission not granted</Text>
//       )}

//       {/* Add any additional UI components or styles as needed */}
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     flexDirection: 'column',
//     justifyContent: 'center',
//   },
//   camera: {
//     flex: 1,
//   },
// });

// export default QRCodeScanner;
