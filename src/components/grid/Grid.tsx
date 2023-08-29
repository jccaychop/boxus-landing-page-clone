import React, { ReactNode } from "react";

interface Props {
  className: string;
  children: ReactNode;
}

export const Grid = React.forwardRef<HTMLDivElement, Props>((props, ref) => {
  const { className, children } = props;
  return (
    <div ref={ref} className={`grid ${className}`}>
      {children}
    </div>
  );
});
