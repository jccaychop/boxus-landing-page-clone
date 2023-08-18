import { HOCProps } from "../../interfaces";

export const Section: React.FC<HOCProps> = ({
  id = "",
  className = "",
  children,
  style = {},
}) => {
  return (
    <section
      id={id}
      style={style}
      className={`relative pb-[9.375rem] m-0 mx-auto min-h-[calc(100vh-64px)] max-[1020px]:pb-[150px] scroll-mt-[3.75rem] md:scroll-mt-16 ${className}`}
    >
      {children}
    </section>
  );
};
