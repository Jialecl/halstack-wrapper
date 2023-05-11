import React from "react";
import { DxcButton } from "@dxc-technology/halstack-react";

type Space =
  | "xxsmall"
  | "xsmall"
  | "small"
  | "medium"
  | "large"
  | "xlarge"
  | "xxlarge";
type Margin = {
  top?: Space;
  bottom?: Space;
  left?: Space;
  right?: Space;
};
type SVG = React.ReactNode & React.SVGProps<SVGSVGElement>;

type ButtonPropsType = {
  /**
   * Text to be placed in the button.
   */
  label?: string;
  /**
   * The available button modes.
   */
  mode?: "primary" | "secondary" | "text";
  /**
   * If true, the component will be disabled.
   */
  disabled?: boolean;
  /**
   * Whether the icon should appear after or before the label.
   */
  iconPosition?: "before" | "after";
  /**
   * 'type' html prop of the button.
   */
  type?: "button" | "reset" | "submit";
  /**
   * Element or path used as the icon that will be placed next to the label.
   */
  icon?: string | SVG;
  /**
   * This function will be called when the user clicks the button.
   */
  onClick?: () => void;
  /**
   * Size of the margin to be applied to the component ('xxsmall' | 'xsmall' | 'small' | 'medium' | 'large' | 'xlarge' | 'xxlarge').
   * You can pass an object with 'top', 'bottom', 'left' and 'right' properties in order to specify different margin sizes.
   */
  margin?: Space | Margin;
  /**
   * Size of the component.
   */
  size?: "small" | "medium" | "large" | "fillParent" | "fitContent";
  /**
   * Value of the tabindex attribute.
   */
  tabIndex?: number;
};

const Button = ({
  label = "defaultLabel",
  mode = "primary",
  disabled = false,
  iconPosition = "before",
  type = "button",
  icon,
  onClick = () => {},
  margin,
  size = "fillParent",
  tabIndex = 0,
}: ButtonPropsType) => (
  <DxcButton
    label={label}
    mode={mode}
    disabled={disabled}
    iconPosition={iconPosition}
    type={type}
    icon={icon}
    onClick={onClick}
    margin={margin}
    size={size}
    tabIndex={tabIndex}
  />
);

export { Button as default };
