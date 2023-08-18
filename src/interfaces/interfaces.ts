import { CSSProperties, ReactNode } from "react";

interface ComponentBaseProps {
  className?: string;
  style?: CSSProperties;
  id?: string;
  onClick?: () => void;
}

export interface HOCProps extends ComponentBaseProps {
  children: ReactNode;
}

export interface ComponentProps extends ComponentBaseProps {
  children?: ReactNode;
}
