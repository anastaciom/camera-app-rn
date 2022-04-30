import React, { useState, useEffect, useRef } from "react";
import {
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  Modal,
  Image,
} from "react-native";

import { Camera } from "expo-camera";
import { StatusBar } from "expo-status-bar";
import { FontAwesome } from "@expo/vector-icons";
import * as MediaLibrary from 'expo-media-library';
import styles from './styles'

export default function App() {

  const camRef = useRef(null);
  const [hasPermission, setHasPermission] = useState(null);
  const [type, setType] = useState(Camera.Constants.Type.back);
  const [capturedPhoto, setCapturedPhoto] = useState(null);
  const [open, setOpen] = useState(false);

  async function takePicture() {
    if (camRef) {
      const data = await camRef.current.takePictureAsync();
      setCapturedPhoto(data.uri);
      setOpen(true);
    }
  }

  async function savePicture(){
    const assets = await MediaLibrary.createAssetAsync(capturedPhoto).then(()=>{alert("saved")}).catch(err=> console.log(err))
     
  }

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      setHasPermission(status === "granted");
    })();
    (async () => {
      const { status } = await MediaLibrary.requestPermissionsAsync();
      setHasPermission(status === "granted");
    })();

  }, []);

  if (hasPermission === null) {
    return <View />;
  }
  if (hasPermission === false) {
    return <Text>Camera access denied!</Text>;
  }
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="light"/>
      <Camera style={styles.camera} type={type} ref={camRef} ratio={"16:9"}>
        <View style={styles.btnActions}>
          <TouchableOpacity
            style={styles.btnFlip}
            onPress={() =>
              setType(
                type === Camera.Constants.Type.back
                  ? Camera.Constants.Type.front
                  : Camera.Constants.Type.back
              )
            }
          >
            <FontAwesome name="exchange" size={23} color={"red"} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.btnTakePicture} onPress={takePicture}>
            <FontAwesome name="camera" size={23} color={"white"} />
          </TouchableOpacity>
        </View>
      </Camera>

      {capturedPhoto && (
        <Modal animationType="slide" transparent={true} visible={open}>
          <View style={styles.contentModal}>
          <TouchableOpacity style={styles.closeBtn} onPress={()=> setOpen(false)}>
            <FontAwesome name="close" size={50} color={"#fff"}/>
          </TouchableOpacity>
          <TouchableOpacity style={styles.uploadBtn} onPress={savePicture}>
            <FontAwesome name="upload" size={50} color={"#fff"}/>
          </TouchableOpacity>
            <Image source={{uri: capturedPhoto}} style={styles.imgPhoto} />
          </View>
        </Modal>
      )}
    </SafeAreaView>
  );
}

