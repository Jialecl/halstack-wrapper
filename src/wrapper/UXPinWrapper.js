import { HalstackProvider } from "@dxc-technology/halstack-react";
import React from "react";

export default function UXPinWrapper({ children, theme }) {
  return <HalstackProvider theme={theme}>{children}</HalstackProvider>;
}
