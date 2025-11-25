import type { ReactElement } from "react";
import { FaGithub, FaInstagram, FaLinkedinIn, FaYoutube } from "react-icons/fa";

type SocialItem = {
  icon: ReactElement;
  path: string;
  label: string;
};

const socials: SocialItem[] = [
  {
    icon: <FaGithub />,
    path: "https://github.com/DarkCode21",
    label: "GitHub",
  },
  {
    icon: <FaLinkedinIn />,
    path: "https://www.linkedin.com/in/deyvi-villegas/",
    label: "LinkedIn",
  },
  {
    icon: <FaInstagram />,
    path: "https://www.instagram.com/deyvi_v_/",
    label: "Instagram",
  },
  {
    icon: <FaYoutube />,
    path: "https://www.youtube.com/@deyvillegas",
    label: "YouTube",
  },
];

type SocialProps = {
  containerStyles?: string;
  iconStyles?: string;
};

const Social = ({ containerStyles, iconStyles }: SocialProps) => {
  return (
    <div className={containerStyles}>
      {socials.map((item) => (
        <a
          key={item.path}
          href={item.path}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={item.label}
          className={iconStyles}
          title={item.label}
        >
          {item.icon}
        </a>
      ))}
    </div>
  );
};

export default Social;
