import {
  Behance,
  Dribbble,
  Facebook,
  Instagram,
  Linkedin,
  Medium,
  Twitter,
  Youtube,
} from "@styled-icons/boxicons-logos";
import React from "react";
import SavvycomCompanyLogo from "../Svg/Icons/SavvycomCompanyLogo";
import { FooterRoot } from "./styles";
import { FooterProps } from "./types";

const socialList: { icon: React.ReactNode; href: string; title: string }[] = [
  {
    icon: <Linkedin size={18} color="#ffffffa5" />,
    href: "",
    title: "LinkedIn",
  },
  {
    icon: <Medium size={18} color="#ffffffa5" />,
    href: "",
    title: "Medium",
  },
  {
    icon: <Facebook size={18} color="#ffffffa5" />,
    href: "",
    title: "Facebook",
  },
  {
    icon: <Twitter size={18} color="#ffffffa5" />,
    href: "",
    title: "Twitter",
  },
  {
    icon: <Instagram size={18} color="#ffffffa5" />,
    href: "",
    title: "Instagram",
  },
  {
    icon: <Youtube size={18} color="#ffffffa5" />,
    href: "",
    title: "Youtube",
  },
  {
    icon: <Behance size={18} color="#ffffffa5" />,
    href: "",
    title: "Behance",
  },
  {
    icon: <Dribbble size={18} color="#ffffffa5" />,
    href: "",
    title: "Dribbble",
  },
];

const MenuItem: React.FC<FooterProps> = () => {
  return (
    <FooterRoot>
      <div className="logo">
        <SavvycomCompanyLogo />
      </div>

      <div className="description">
        <p>
          Savvycom is a leading Software Development, Technology Consulting and Software Outsourcing Services Company.
          We&apos;re specialized in End-to-End Software Development, Technology Consulting Services and Cloud Devops.
        </p>
      </div>

      <div className="social">
        <div className="social-content">
          {socialList.map((item, index) => (
            <div className="social-item" key={`social-${item.title}`}>
              {item.icon}
              {item.title}
            </div>
          ))}
        </div>
      </div>
    </FooterRoot>
  );
};

export default MenuItem;
