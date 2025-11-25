import type { ReactElement } from "react";
import { FaGithub, FaLinkedinIn, FaTiktok, FaYoutube } from "react-icons/fa";

type SocialItem = {
  icon: ReactElement;
  path: string;
  label: string;
};

const socials: SocialItem[] = [
  {
    icon: <FaGithub />,
    path: "https://github.com/TRIANA115",
    label: "GitHub",
  },
  {
    icon: <FaLinkedinIn />,
    path: "https://www.linkedin.com/in/triana-garces",
    label: "LinkedIn",
  },
  {
    icon: <FaTiktok />,
    path: "https://www.tiktok.com/@triana_technology",
    label: "TikTok",
  },
  {
    icon: <FaYoutube />,
    path: "https://www.youtube.com/@triana_technology",
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
