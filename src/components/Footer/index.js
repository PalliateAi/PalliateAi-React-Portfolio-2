import React from "react";
import { animateScroll as scroll } from "react-scroll";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import {
  FooterContainer,
  FooterWrap,
  FooterLinksContainer,
  FooterLinksWrapper,
  FooterLinkItems,
  FooterLinkTitle,
  FooterLink,
  SocialMedia,
  SocialMediaWrap,
  SocialLogo,
  WebsiteRights,
  SocialIcons,
  SocialIconLink,
} from "./FooterElements";

const Footer = () => {
  const toggleHome = () => {
    scroll.scrollToTop();
  };
  return (
    <>
      <FooterContainer>
        <FooterWrap>
          <FooterLinksContainer>
            <FooterLinksWrapper>
              <FooterLinkItems>
                <FooterLinkTitle>About Us</FooterLinkTitle>

                <FooterLink
                  to={"//www.eddyku.com/"}
                  target="_blank"
                  aria-label="CV Website"
                >
                  About Us
                </FooterLink>
                <FooterLink
                  to={"//www.eddyku.com/"}
                  target="_blank"
                  aria-label="CV Website"
                >
                  How it Works
                </FooterLink>
                <FooterLink
                  to={"//www.eddyku.com/"}
                  target="_blank"
                  aria-label="CV Website"
                >
                  Testimonials
                </FooterLink>
                <FooterLink
                  to={"//www.eddyku.com/"}
                  target="_blank"
                  aria-label="CV Website"
                >
                  Careers
                </FooterLink>
                <FooterLink
                  to={"//www.eddyku.com/"}
                  target="_blank"
                  aria-label="CV Website"
                >
                  Investors
                </FooterLink>
                <FooterLink
                  to={"//www.eddyku.com/"}
                  target="_blank"
                  aria-label="CV Website"
                >
                  Terms of Service
                </FooterLink>
              </FooterLinkItems>
              <FooterLinkItems>
                <FooterLinkTitle>Contact Us</FooterLinkTitle>

                <FooterLink
                  to={"//www.eddyku.com/"}
                  target="_blank"
                  aria-label="CV Website"
                >
                  Contact
                </FooterLink>
                <FooterLink
                  to={"//www.eddyku.com/"}
                  target="_blank"
                  aria-label="CV Website"
                >
                  Support
                </FooterLink>
                <FooterLink
                  to={"//www.eddyku.com/"}
                  target="_blank"
                  aria-label="CV Website"
                >
                  Testimonials
                </FooterLink>
                <FooterLink
                  to={"//www.eddyku.com/"}
                  target="_blank"
                  aria-label="CV Website"
                >
                  Sponsorships
                </FooterLink>
                <FooterLink
                  to={"//www.eddyku.com/"}
                  target="_blank"
                  aria-label="CV Website"
                >
                  Destinations
                </FooterLink>
              </FooterLinkItems>
            </FooterLinksWrapper>
            <FooterLinksWrapper>
              <FooterLinkItems>
                <FooterLinkTitle>Videos</FooterLinkTitle>

                <FooterLink
                  to={"//www.eddyku.com/"}
                  target="_blank"
                  aria-label="CV Website"
                >
                  Submit Videos
                </FooterLink>
                <FooterLink
                  to={"//www.eddyku.com/"}
                  target="_blank"
                  aria-label="CV Website"
                >
                  Ambassadors
                </FooterLink>
                <FooterLink
                  to={"//www.eddyku.com/"}
                  target="_blank"
                  aria-label="CV Website"
                >
                  Testimonials
                </FooterLink>
                <FooterLink
                  to={"//www.eddyku.com/"}
                  target="_blank"
                  aria-label="CV Website"
                >
                  Influencers
                </FooterLink>
                <FooterLink
                  to={"//www.eddyku.com/"}
                  target="_blank"
                  aria-label="CV Website"
                >
                  Agency
                </FooterLink>
              </FooterLinkItems>
              <FooterLinkItems>
                <FooterLinkTitle>Social Media</FooterLinkTitle>

                <FooterLink
                  to={"//www.eddyku.com/"}
                  target="_blank"
                  aria-label="CV Website"
                >
                  Instagram
                </FooterLink>
                <FooterLink
                  to={"//www.eddyku.com/"}
                  target="_blank"
                  aria-label="CV Website"
                >
                  Youtube
                </FooterLink>
                <FooterLink
                  to={"//www.eddyku.com/"}
                  target="_blank"
                  aria-label="CV Website"
                >
                  Facebook
                </FooterLink>
                <FooterLink
                  to={"//www.eddyku.com/"}
                  target="_blank"
                  aria-label="CV Website"
                >
                  Twitter
                </FooterLink>
              </FooterLinkItems>
            </FooterLinksWrapper>
          </FooterLinksContainer>
          <SocialMedia>
            <SocialMediaWrap>
              <SocialLogo to="/" onClick={toggleHome}>
                Fintech
              </SocialLogo>
              <WebsiteRights>
                Fintech &copy; {new Date().getFullYear()}
                All rights reserved.
              </WebsiteRights>
              <SocialIcons>
                <SocialIconLink
                  href={"//www.eddyku.com/"}
                  target="_blank"
                  aria-label="Facebook"
                >
                  <FaFacebook />
                </SocialIconLink>
                <SocialIconLink
                  href={"//www.eddyku.com/"}
                  target="_blank"
                  aria-label="Instagram"
                >
                  <FaInstagram />
                </SocialIconLink>
                <SocialIconLink
                  href={"//www.eddyku.com/"}
                  target="_blank"
                  aria-label="Youtube"
                >
                  <FaYoutube />
                </SocialIconLink>
                <SocialIconLink
                  href={"//www.eddyku.com/"}
                  target="_blank"
                  aria-label="Twitter"
                >
                  <FaTwitter />
                </SocialIconLink>
                <SocialIconLink
                  href={"//www.eddyku.com/"}
                  target="_blank"
                  aria-label="LinkedIn"
                >
                  <FaLinkedin />
                </SocialIconLink>
              </SocialIcons>
            </SocialMediaWrap>
          </SocialMedia>
        </FooterWrap>
      </FooterContainer>
    </>
  );
};

export default Footer;
