import React, { ReactNode, SVGProps } from "react";
import { DxcAccordionGroup } from "@dxc-technology/halstack-react";

type Space =
  | "xxsmall"
  | "xsmall"
  | "small"
  | "medium"
  | "large"
  | "xlarge"
  | "xxlarge";
type Padding = {
  top?: Space;
  bottom?: Space;
  left?: Space;
  right?: Space;
};
type SVG = ReactNode & SVGProps<SVGSVGElement>;

type AccordionPropsType = {
  /**
   * The panel label.
   */
  label: string;
  /**
   * Element or path used as the icon that will be placed next to panel label.
   */
  icon?: string | SVG;
  /**
   * Assistive text to be placed on the right side of the panel.
   */
  assistiveText?: string;
  /**
   * If true, the component will be disabled.
   */
  disabled?: boolean;
  /**
   * @deprecated This prop will be removed shortly, consider using the Inset component for this purpose.
   * Size of the padding to be applied to the custom area ('xxsmall' | 'xsmall' | 'small' | 'medium' | 'large' | 'xlarge' | 'xxlarge').
   * You can pass an object with 'top', 'bottom', 'left' and 'right' properties in order to specify different padding sizes.
   */
  padding?: Space | Padding;
  /**
   * The expanded panel of the accordion. This area can be used to render
   * custom content.
   */
  children: ReactNode;
};

const AccordionGroupItem = ({
  label = "Default Label",
  icon,
  assistiveText = "Assistive text",
  disabled = false,
  padding,
  children,
}: AccordionPropsType) => (
  <DxcAccordionGroup.Accordion
    label={label}
    icon={icon}
    assistiveText={assistiveText}
    disabled={disabled}
    padding={padding}
    children={children}
  />
);

export { AccordionGroupItem as default };
