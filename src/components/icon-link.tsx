import { IconProps } from "@radix-ui/react-icons/dist/types";
import Link from "next/link";
import React from "react";

interface IconLinkProps {
  Icon: React.ForwardRefExoticComponent<IconProps & React.RefAttributes<SVGSVGElement>>;
  height?: number;
  width?: number;
  href: string;
}

function IconLink({ Icon, href, height = 20, width = 20 }: IconLinkProps) {
  return (
    <Link href={href} passHref>
      <Icon
        height={height}
        width={width}
        className="hover:scale-110 hover:text-primary duration-200 hover:cursor-pointer mx-2 text-primary/50"
      />
    </Link>
  );
}

export default IconLink;
