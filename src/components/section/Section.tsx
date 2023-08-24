import React, { ReactNode } from "react";

interface Props {
  id: string | undefined;
  style?: React.CSSProperties | undefined;
  className?: string | undefined;
  children: ReactNode;
}

export const Section = React.forwardRef<HTMLDivElement, Props>((props, ref) => {
  const { id, style, children, className } = props;

  return (
    <section
      id={id}
      ref={ref}
      style={style}
      className={`relative pb-[9.375rem] m-0 mx-auto min-h-[calc(100vh-64px)] max-[1020px]:pb-[150px] scroll-mt-[3.75rem] md:scroll-mt-16 clearfix ${className}`}
    >
      {children}
    </section>
  );
});
