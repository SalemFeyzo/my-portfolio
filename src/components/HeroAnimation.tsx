import Lottie from "lottie-react";
import heroAnimation from "../animationsFiles/heroAnimation2.json";

const HeroAnimation = () => {
  return <Lottie animationData={heroAnimation} loop={true} />;
};

export default HeroAnimation;
