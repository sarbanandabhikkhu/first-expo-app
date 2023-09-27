import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import {
  View,
  Text,
  Button,
  Image,
  ScrollView,
  SafeAreaView,
  StyleSheet,
  Alert,
} from "react-native";
import { fontSize, scaleHeight } from "./utils/normalize";

export default function App() {
  const localImageSource = "./assets/icon.png";
  const LocalImage = ({ imageWidth }) => {
    // This solution works only for local images
    const imageHeight = scaleHeight({
      source: require(localImageSource),
      desiredWidth: imageWidth,
    });

    return (
      <Image
        source={require(localImageSource)}
        style={{
          borderWidth: 1,
          width: imageWidth,
          height: imageHeight,
        }}
      />
    );
  };

  const remoteImageSource = "https://reactnative.dev/img/homepage/phones.png";
  const RemoteImage = ({ uri, desiredWidth }) => {
    // This solution works for remote images
    const [desiredHeight, setDesiredHeight] = useState(0);

    Image.getSize(uri, (width, height) => {
      setDesiredHeight((desiredWidth / width) * height);
    });

    return (
      <Image
        source={{ uri }}
        style={{
          borderWidth: 1,
          width: desiredWidth,
          height: desiredHeight,
        }}
      />
    );
  };

  const Separator = () => <View style={styles.separator} />;

  function handleClick() {
    Alert.alert("Button clicked!");
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.view}>
        <LocalImage imageWidth={150} />
        <Text style={styles.text}>DhammaWheel</Text>
        <Separator />
        <Button
          onPress={handleClick}
          title="Button"
          accessibilityLabel="This is a button"
        />
      </View>
      <ScrollView style={styles.scroll} showsVerticalScrollIndicator={false}>
        <View style={styles.view}>
          <RemoteImage uri={remoteImageSource} desiredWidth={300} />
          <RemoteImage uri={remoteImageSource} desiredWidth={325} />
          <RemoteImage uri={remoteImageSource} desiredWidth={325} />
          <RemoteImage uri={remoteImageSource} desiredWidth={325} />
          <RemoteImage uri={remoteImageSource} desiredWidth={325} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#efefef",
  },
  view: {
    width: "100%",
    paddingVertical: 25,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#ffffff",
  },
  scroll: {
    width: "100%",
  },
  image: {
    width: "100%",
  },
  text: {
    color: "#00A398",
    fontSize: fontSize(20),
  },
  button: {
    color: "#841584",
  },
  title: {
    textAlign: "center",
    marginVertical: 8,
  },
  separator: {
    marginVertical: 10,
    borderBottomColor: "#737373",
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
});
