import Image from "next/image";

type LogoProps = {
  color?: "default" | "white";
  format?: "svg" | "png";
  className?: string;
  width?: number;
  height?: number;
};

const logos = {
  default: {
    svg: "/image/logo/logo.svg",
    png: "/image/logo/logo.png",
  },
  white: {
    svg: "/image/logo/logo-white.svg",
    png: "",
  },
};

export const Logo = ({
  width = 135,
  height = 32,
  color = "default",
  format = "svg",
  className,
}: LogoProps) => {
  const logo = logos[color];
  const src = !logo[format] ? logos["default"]["svg"] : logo[format];
  return (
    <Image
      src={src}
      alt="Logo"
      width={width}
      height={height}
      className={className}
    />
  );
};
