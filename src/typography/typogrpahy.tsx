import styled from "@emotion/styled";
import { FC, ReactElement, ReactNode } from "react";
interface TypographyType {
  variant: "web" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "body" | "span";
  children: ReactNode;
  className?: string;
}
const Typography: FC<TypographyType> = ({
  variant = "web",
  children,
  className,
}): ReactElement => {
  let fz = {
    web: "500 36px / 122%",
    h1: "500 32px / 125%",
    h2: "500 24px / 117%",
    h3: "500 20px / 130%",
    h4: "500 17px / 141%",
    h5: "500 15px / 133%",
    h6: "500 15px / 133%",
    body: "400 15px / 133%",
    span: "400 12px / 133%",
  };
  let Web = styled.h1`
    font: ${fz[variant]} var(--font-family);
  `;
  let H1 = styled.h1`
    font: ${fz[variant]} var(--font-family);
  `;
  let H2 = styled.h2`
    font: ${fz[variant]} var(--font-family);
  `;
  let H3 = styled.h3`
    font: ${fz[variant]} var(--font-family);
  `;
  let H4 = styled.h4`
    font: ${fz[variant]} var(--font-family);
  `;
  let H5 = styled.h5`
    font: ${fz[variant]} var(--font-family);
  `;
  let H6 = styled.h6`
    font: ${fz[variant]} var(--font-family);
  `;
  let Body = styled.span`
    font: ${fz[variant]} var(--font-family);
  `;
  switch (variant) {
    case "h1":
      return <H1 className={className}>{children}</H1>;
    case "h2":
      return <H2 className={className}>{children}</H2>;
    case "h3":
      return <H3 className={className}>{children}</H3>;
    case "h4":
      return <H4 className={className}>{children}</H4>;
    case "h5":
      return <H5 className={className}>{children}</H5>;
    case "h6":
      return <H6 className={className}>{children}</H6>;
    case "body":
      return <Body className={className}>{children}</Body>;
    default:
      return <Web className={className}>{children}</Web>;
  }
};

export default Typography;
