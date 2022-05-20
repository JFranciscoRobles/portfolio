import { styled, Button } from "@nextui-org/react";
import React from "react";

type Props = {};

const UiButton = styled(Button, {
  "&:hover": {
    backgroundColor: "$gray300",
  },
});

export default UiButton;
