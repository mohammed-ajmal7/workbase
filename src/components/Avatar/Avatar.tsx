import React from "react";
import Image from "next/image";
export default function Avatar() {
  const avatarImg = "https://i.pravatar.cc/150?img=3";

  return (
    <Image
      src={avatarImg}
      alt="avatar-image"
      className="rounded-full"
      width={32}
      height={32}
    />
  );
}
