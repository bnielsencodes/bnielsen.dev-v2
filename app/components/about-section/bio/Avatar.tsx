import Image from "next/image";
import AvatarImg from "/public/assets/images/avatar.jpeg";

export default function Avatar() {
  return (
    <div className="relative">
      <div className="avatar-border"></div>
      <Image
        className="avatar-img"
        src={AvatarImg}
        alt="Close up black and white portrait of Brandon Nielsen."
        width="0"
        height="0"
        sizes="100vw"
      />
    </div>
  );
}
