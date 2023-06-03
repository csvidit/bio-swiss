import MainContainer from "@/components/MainContainer";
import MainContent from "@/components/MainContent";
import Title from "@/components/Title";
import Image from "next/image";
import { MdOutlineWorkOutline } from "react-icons/md";
import { TbLocation } from "react-icons/tb";
import { RxArrowTopRight } from "react-icons/rx";
import Link from "next/link";
import { motion } from "framer-motion";
import ExternalLink from "@/components/ExternalLink";
import AnimatedCursor from "react-animated-cursor";
import MainLink from "@/components/MainLink";
import SpotlightLink from "@/components/SpotlightLink";
import Spotlight from "@/components/Spotlight";
import SectionContainer from "@/components/SectionContainer";

const Index = () => {
  return (
    <MainContainer>
      <MainContent>
        <div className="flex flex-row space-x-2 p-4 items-center">
          <Image
            src="/vidit-grad.png"
            className="rounded-full"
            width={100}
            height={100}
            alt="Vidit Khandelwal Graduation"
          ></Image>
          <div className="flex flex-col space-y-1 text-lg lg:text-xl">
            <Title>VIDIT KHANDELWAL</Title>
            <div className="text-stone-500 text-base">
              Software engineer and recent graduate of DePauw University
            </div>
          </div>
        </div>

        <SectionContainer type="row">
          <div className="flex flex-row space-x-1 text-xs items-center">
            <div className="text-sm text-stone-500">
              <MdOutlineWorkOutline />
            </div>
            <div className="text-emerald-600">Open To Work</div>
          </div>
          <div className="flex flex-row space-x-1 text-xs items-center">
            <div className="text-sm text-stone-500">
              <TbLocation />
            </div>
            <div className="">Indianapolis, United States</div>
          </div>
        </SectionContainer>
        <SectionContainer type="row">
          <ExternalLink href="https://linkedin.com/in/viditkhandelwal">
            LINKEDIN
          </ExternalLink>
          <ExternalLink href="https://read.cv/viditkhandelwal">
            RÉSUME
          </ExternalLink>
          <ExternalLink href="mailto:viditkhandelwal_2023@depauw.edu">
            EMAIL
          </ExternalLink>
        </SectionContainer>
        <Spotlight href="https://github.com/csvidit">
          Squawk Social, a fun and unserious social media platform with quirky,
          Gen-Z reactions
        </Spotlight>
        <MainLink href="https://xz.viditkhandelwal.com">
          <div className="flex flex-col space-y-2">
            <div className="text-stone-500 text-xs group-hover:text-stone-300 transition-all duration-300 ease-in-out">
              WEB DEV PROJECT
            </div>
            <div className="z-10">Xzayvian GPT</div>
          </div>
        </MainLink>
        <MainLink href="https://github.com/csvidit/snapshot">
          <div className="flex flex-col space-y-2">
            <div className="text-stone-500 text-xs group-hover:text-stone-300 transition-all duration-300 ease-in-out">
              WEB DEV PROJECT
            </div>
            <div className="z-10">Snapshot</div>
          </div>
        </MainLink>
        
      </MainContent>
    </MainContainer>
  );
};

export default Index;
