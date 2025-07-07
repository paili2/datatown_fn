import Image from "next/image";

type IconProps = { src: string };

const Icon = ({ src }: IconProps) => {
  return (
    <div>
      <Image src={src} alt="" />
    </div>
  );
};

export default Icon;
