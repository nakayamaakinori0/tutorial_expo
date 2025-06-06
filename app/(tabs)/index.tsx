import { View, StyleSheet } from "react-native";

import Button from "@/components/Button";
import ImageViewer from "@/components/ImageViewer";

import * as ImagePicker from "expo-image-picker";
import { useState } from "react";

const PlaceholderImage = require("@/assets/images/background-image.png");

export default function Index() {
  const [selectedImage, setSelectedImage] = useState<string | undefined>(undefined);

  const pickImageAsync = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ['images'],
      allowsEditing: true,
      quality: 1,
    });
    if (!result.cancelled) {
      setSelectedImage(result.assets[0].uri);
    } else {
      alert('You did not select any image.')
    }
  };


  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <ImageViewer imgSource={PlaceholderImage} selectedImage={selectedImage}></ImageViewer>
      </View>
      <View style={styles.footerContainer}>
        <Button theme="primary" label="Use a sticker" onPress={pickImageAsync}></Button>
        <Button label="Use a photo"></Button>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#25292e",
    alignItems: "center",
  },
  imageContainer: {
    flex: 1,
  },
  image: {
    width: 320,
    height: 440,
    borderRadius: 18,
  },
  footerContainer: {
    flex: 1/3,
    aliginItems: 'center',
  }
});
