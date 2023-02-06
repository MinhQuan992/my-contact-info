import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faLinkedin,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";
import React, { ReactNode } from "react";

interface FieldIconProp {
  icon: ReactNode;
}

export const FieldIcon: React.FC<FieldIconProp> = ({ icon }) => {
  return (
    <div className="bg-white rounded-lg w-11 h-11 flex items-center justify-center shadow-lg shadow-dark-500">
      {icon}
    </div>
  );
};

export interface SocialIconProps {
  type: "facebook" | "linkedin" | "github";
  link: string;
}

export const SocialIcon: React.FC<SocialIconProps> = ({ type, link }) => {
  let icon: ReactNode;
  switch (type) {
    case "facebook":
      icon = (
        <FontAwesomeIcon className="text-[#1773EA] text-xl" icon={faFacebook} />
      );
      break;
    case "linkedin":
      icon = (
        <FontAwesomeIcon className="text-[#1773EA] text-xl" icon={faLinkedin} />
      );
      break;
    default:
      icon = <FontAwesomeIcon className="text-black text-xl" icon={faGithub} />;
  }
  return (
    <a
      className="bg-[#F4F6F6] rounded-lg w-11 h-11 flex items-center justify-center"
      href={link}
      target="_blank"
      rel="noreferrer"
    >
      {icon}
    </a>
  );
};
