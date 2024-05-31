import {
  imageExample1,
  imageExample2,
  imageExample3,
  imageExample4,
} from "@/assets/imageExports";
import { GradientFour } from "@/constants/Gradients";
import { screenHeight, screenWidth } from "@/constants/variousConstants";
import { CenterHorizontalFull } from "@/custom-components/containers";
import ShiftingImages from "@/custom-components/shiftingImages";

export default function Testing() {
  const imagesArray = [
    imageExample1,
    imageExample2,
    imageExample3,
    imageExample4,
  ];
  return (
    <GradientFour>
      <CenterHorizontalFull style={{ height: screenHeight }}>
        <ShiftingImages imageArray={imagesArray} />
      </CenterHorizontalFull>
    </GradientFour>
  );
}
