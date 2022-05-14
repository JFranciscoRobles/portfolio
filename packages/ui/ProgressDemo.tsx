import React from "react";
import { styled } from "@nextui-org/react";
import * as ProgressPrimitive from "@radix-ui/react-progress";

const StyledProgress = styled(ProgressPrimitive.Root, {
  position: "relative",
  overflow: "hidden",
  background: "$black",
  borderRadius: "99999px",
  width: 300,
  height: 25,
});

const StyledIndicator = styled(ProgressPrimitive.Indicator, {
  backgroundColor: "white",
  width: "100%",
  height: "100%",
  transition: "transform 660ms cubic-bezier(0.65, 0, 0.35, 1)",
});

const Progress = StyledProgress;
const ProgressIndicator = StyledIndicator;

// Your app...
const ProgressDemo = () => {
  const [progress, setProgress] = React.useState(13);

  React.useEffect(() => {
    const timer = setTimeout(() => setProgress(66), 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <Progress value={66}>
      <ProgressIndicator
        style={{ transform: `translateX(-${100 - progress}%)` }}
      />
    </Progress>
  );
};

export default ProgressDemo;
