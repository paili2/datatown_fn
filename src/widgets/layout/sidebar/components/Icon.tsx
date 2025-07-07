type IconProps = { src: string };

const Icon = ({ src }: IconProps) => {
  return (
    <div>
      <img src={src} alt="" />
    </div>
  );
};

export default Icon;
