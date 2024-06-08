import { Dimensions, FlexAlignType, ViewStyle } from "react-native";

export const screenHeight = Dimensions.get("window").height;
export const screenWidth = Dimensions.get("window").width;
export const headingHeight = screenHeight * 0.05;
export const topPadding = screenHeight * 0.06;
export const navPadding = 60;
export const contentHeightWithHeadingAndNavPadding =
  screenHeight - (topPadding + headingHeight + navPadding);

export const width = {
  95: screenWidth * 0.95,
  90: screenWidth * 0.9,
  85: screenWidth * 0.85,
  80: screenWidth * 0.8,
  75: screenWidth * 0.75,
  70: screenWidth * 0.7,
  65: screenWidth * 0.65,
  60: screenWidth * 0.6,
  55: screenWidth * 0.55,
  50: screenWidth * 0.5,
  45: screenWidth * 0.45,
  40: screenWidth * 0.4,
  35: screenWidth * 0.35,
  30: screenWidth * 0.3,
  25: screenWidth * 0.25,
  20: screenWidth * 0.2,
  15: screenWidth * 0.15,
  10: screenWidth * 0.1,
  5: screenWidth * 0.05,
  4: screenWidth * 0.04,
  3: screenWidth * 0.03,
  2: screenWidth * 0.02,
  1: screenWidth * 0.01,
};

export const height = {
  95: screenHeight * 0.95,
  90: screenHeight * 0.9,
  85: screenHeight * 0.85,
  80: screenHeight * 0.8,
  75: screenHeight * 0.75,
  70: screenHeight * 0.7,
  65: screenHeight * 0.65,
  60: screenHeight * 0.6,
  55: screenHeight * 0.55,
  50: screenHeight * 0.5,
  45: screenHeight * 0.45,
  40: screenHeight * 0.4,
  35: screenHeight * 0.35,
  30: screenHeight * 0.3,
  25: screenHeight * 0.25,
  20: screenHeight * 0.2,
  15: screenHeight * 0.15,
  10: screenHeight * 0.1,
  5: screenHeight * 0.05,
  4: screenHeight * 0.04,
  3: screenHeight * 0.03,
  2: screenHeight * 0.02,
  1: screenHeight * 0.01,
};

export const fullCenteredFlex = {
  flex: 1,
  display: "flex" as "flex",
  flexDirection: "column" as "column",
  alignItems: "center" as FlexAlignType,
  width: "100%" as ViewStyle["width"],
  height: "100%" as ViewStyle["height"],
};
