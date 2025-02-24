/* eslint-disable react/react-in-jsx-scope */
import Image from "next/image";

interface MDXImageProps {
  src: string;
  alt?: string;
  width?: number;
  height?: number;
  [key: string]: unknown;
}

export default function MDXImage({
  src,
  alt = "",
  width = 700,
  height = 475,
  ...rest
}: MDXImageProps) {
  if (!src) {
    return null;
  }

  return (
    <Image
      src={src}
      alt={alt}
      layout="responsive"
      width={width} // Ajuste conforme necessário
      height={height} // Ajuste conforme necessário
      {...rest}
    />
  );
}
