import { StatusBar } from "expo-status-bar";
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
import normalize from "./utils/normalize";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 10,
    marginHorizontal: 10,
  },
  view: {
    width: "100%",
    padding: 50,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#efefef",
  },
  scroll: {
    width: "100%",
  },
  text: {
    color: "#00A398",
    fontSize: normalize.fontSize(20),
  },
  button: {
    color: "#841584",
  },
  title: {
    textAlign: "center",
    marginVertical: 8,
  },
  fixToText: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  separator: {
    marginVertical: 8,
    borderBottomColor: "#737373",
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
});

const Separator = () => <View style={styles.separator} />;

const logo = {
  uri: "https://reactnative.dev/img/tiny_logo.png",
  width: 100,
  height: 100,
};

function handleClick() {
  Alert.alert("Button clicked!");
}

function App() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.view}>
        <Text style={styles.text}>Hello world!</Text>
        <Separator />
        <Button
          onPress={handleClick}
          title="Button"
          accessibilityLabel="This is a button"
        />
      </View>
      <ScrollView style={styles.scroll}>
        <Image source={logo} />
        <Image source={logo} />
        <Image source={logo} />
        <Image source={logo} />
        <Image source={logo} />
        <Image source={logo} />
        <Image source={logo} />
        <Image source={logo} />
        <Image source={logo} />
        <Image source={logo} />
        <Image source={logo} />
        <Image source={logo} />
        <Image source={logo} />
        <Image source={logo} />
        <Image source={logo} />
        <Image source={logo} />
        <Image source={logo} />
        <Image source={logo} />
        <Image source={logo} />
        <Image source={logo} />
        <Image source={logo} />
        <Image source={logo} />
        <Image source={logo} />
        <Image source={logo} />
        <Image source={logo} />
      </ScrollView>
    </SafeAreaView>
  );
}

export default App;
