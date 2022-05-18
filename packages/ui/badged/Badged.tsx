import { styled } from "@nextui-org/react";

export const Badged = styled("span", {
  borderRadius: "0",
  position: "relative",
  overflow: "hidden",
  border: "none",
  pe: "auto",
  py: "$space$1",
  px: "$space$2",
  fontSize: "$tiny",
  width: "fit-content",
  lineHeight: "$sm",
  fontWeight: "$medium",
  boxSizing: "border-box",

  variants: {
    color: {
      primary: {
        backgroundColor: "$primary",
        color: "$primarySolidContrast",
      },
      secondary: {
        backgroundColor: "$secondary",
        color: "$primarySolidContrast",
      },
      success: {
        backgroundColor: "$success",
        color: "$primarySolidContrast",
      },
      error: {
        backgroundColor: "$error",
        color: "$primarySolidContrast",
      },
      warning: {
        backgroundColor: "$warning",
        color: "$primarySolidContrast",
      },
    },
    size: {
      xs: {
        height: "$10",
        lh: "$space$10",
        width: "auto",
        minWidth: "$20",
        fontSize: "$tiny",
      },
      sm: {
        height: "$12",
        lh: "$space$14",
        width: "auto",
        minWidth: "$36",
        fontSize: "$xs",
      },
      md: {
        height: "$14",
        lh: "$space$14",
        width: "auto",
        minWidth: "$48",
        fontSize: "$xs",
      },
      lg: {
        height: "$15",
        lh: "$space$15",
        width: "auto",
        minWidth: "$60",
        fontSize: "$base",
      },
      xl: {
        height: "$17",
        lh: "$space$17",
        width: "auto",
        minWidth: "$72",
        fontSize: "$sm",
      },
    },
    rounded: {
      true: {
        borderRadius: "$rounded",
      },
    },
    flat: {
      true: {
        color: "$text",
      },
    },
  },
});

export default Badged;
