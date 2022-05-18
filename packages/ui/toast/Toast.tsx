import * as React from "react";
import { styled, keyframes } from "@nextui-org/react";
import * as ToastPrimitive from "@radix-ui/react-toast";

const VIEWPORT_PADDING = 25;

const hide = keyframes({
  "0%": { opacity: 1 },
  "100%": { opacity: 0 },
});

const slideIn = keyframes({
  from: { transform: `translateX(calc(100% + ${VIEWPORT_PADDING}px))` },
  to: { transform: "translateX(0)" },
});

const swipeOut = keyframes({
  from: { transform: "translateX(var(--radix-toast-swipe-end-x))" },
  to: { transform: `translateX(calc(100% + ${VIEWPORT_PADDING}px))` },
});

const StyledViewport = styled(ToastPrimitive.Viewport, {
  position: "fixed",
  bottom: 0,
  right: 0,
  display: "flex",
  flexDirection: "column",
  padding: VIEWPORT_PADDING,
  gap: 10,
  width: 390,
  maxWidth: "100vw",
  margin: 0,
  listStyle: "none",
  zIndex: 2147483647,
  outline: "none",
});

const StyledToast = styled(ToastPrimitive.Root, {
  backgroundColor: "$green600",
  borderRadius: 6,
  boxShadow:
    "hsl(206 22% 7% / 35%) 0px 10px 38px -10px, hsl(206 22% 7% / 20%) 0px 10px 20px -15px",
  padding: 15,
  display: "grid",
  gridTemplateAreas: '"title action" "description action"',
  gridTemplateColumns: "auto max-content",
  columnGap: 15,
  alignItems: "center",

  "@media (prefers-reduced-motion: no-preference)": {
    '&[data-state="open"]': {
      animation: `${slideIn} 150ms cubic-bezier(0.16, 1, 0.3, 1)`,
    },
    '&[data-state="closed"]': {
      animation: `${hide} 100ms ease-in forwards`,
    },
    '&[data-swipe="move"]': {
      transform: "translateX(var(--radix-toast-swipe-move-x))",
    },
    '&[data-swipe="cancel"]': {
      transform: "translateX(0)",
      transition: "transform 200ms ease-out",
    },
    '&[data-swipe="end"]': {
      animation: `${swipeOut} 100ms ease-out forwards`,
    },
  },
});

const StyledTitle = styled(ToastPrimitive.Title, {
  gridArea: "title",
  marginBottom: 5,
  fontWeight: 500,
  color: "$gray900",
  fontSize: 15,
});

const StyledDescription = styled(ToastPrimitive.Description, {
  gridArea: "description",
  margin: 0,
  color: "$gray900",
  fontSize: 13,
  lineHeight: 1.3,
});

const StyledAction = styled(ToastPrimitive.Action, {
  gridArea: "action",
});

// Exports
export const ToastProvider = ToastPrimitive.Provider;
export const ToastViewport = StyledViewport;
export const Toast = StyledToast;
export const ToastTitle = StyledTitle;
export const ToastDescription = StyledDescription;
export const ToastAction = StyledAction;
export const ToastClose = ToastPrimitive.Close;

// Your app...
const Box = styled("div", {});
const Button = styled("button", {
  all: "unset",
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  borderRadius: 4,
  padding: "0 15px",
  fontSize: 15,
  lineHeight: 1,
  fontWeight: 500,
  height: 35,

  variants: {
    size: {
      small: {
        fontSize: 12,
        padding: "0 10px",
        lineHeight: "25px",
        height: 25,
      },
    },
    variant: {
      violet: {
        backgroundColor: "white",
        color: "$purple800",
        boxShadow: `0 2px 10px $black`,
        "&:hover": { backgroundColor: "$purple400" },
        "&:focus": { boxShadow: `0 0 0 2px black` },
      },
    },
  },

  defaultVariants: {
    variant: "violet",
  },
});

const ToastDemo = () => {
  const [open, setOpen] = React.useState(false);

  const timerRef = React.useRef(0);

  return (
    <ToastProvider swipeDirection="left">
      <Button
        onClick={() => {
          setOpen(true);
        }}
      >
        Add to calendar
      </Button>

      <Toast open={open} onOpenChange={setOpen}>
        <ToastTitle>Notificación</ToastTitle>
        <ToastDescription asChild>asdsadsadsad</ToastDescription>
        <ToastAction asChild altText="Goto schedule to undo">
          <Button variant="violet" size="small">
            Cerrar
          </Button>
        </ToastAction>
      </Toast>
      <ToastViewport />
    </ToastProvider>
  );
};

export default ToastDemo;
