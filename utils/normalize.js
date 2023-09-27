import { Dimensions, Platform, PixelRatio, Image } from "react-native";

function fontSize(size) {
  const { width: SCREEN_WIDTH } = Dimensions.get("window");
  const scale = SCREEN_WIDTH / 320; // based on iphone 5s's scale
  const newSize = size * scale;
  if (Platform.OS === "ios") {
    return Math.round(PixelRatio.roundToNearestPixel(newSize));
  } else {
    return Math.round(PixelRatio.roundToNearestPixel(newSize)) - 2;
  }
}

function scaleHeight({ source, desiredWidth }) {
  const { width, height } = Image.resolveAssetSource(source);
  return (desiredWidth / width) * height;
}

export { fontSize, scaleHeight };
