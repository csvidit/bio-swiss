import MainContainer from "@/components/MainContainer";
import MainContent from "@/components/MainContent";
import Title from "@/components/Title";
import Image from "next/image";
import { MdOutlineWorkOutline } from "react-icons/md";
import { TbLocation } from "react-icons/tb";
import { RxArrowTopRight } from "react-icons/rx";
import Link from "next/link";
import {
  AnimatePresence,
  AnimateSharedLayout,
  LayoutGroup,
  motion,
} from "framer-motion";
import ExternalLink from "@/components/ExternalLink";
import MainLink from "@/components/MainLink";
import Spotlight from "@/components/Spotlight";
import SectionContainer from "@/components/SectionContainer";
import { useState } from "react";

const Index = () => {
  const [hoveredButtonId, setHoveredButtonId] = useState(null);

  const mainLinks = [
    {
      href: "https://github.com/csvidit/xz-gpt",
      type: "WEB DEV PROJECT",
      label: "Xzayvian GPT",
      id: "1",
    },
    {
      href: "https://github.com/csvidit/snapshot",
      type: "WEB DEV PROJECT",
      label: "Snapshot",
      id: "2",
    },
  ];

  const variants3 = {
    initial: {
      opacity: 0,
      transition: {
        type: "tween",
        duration: 0.3,
        ease: "easeInOut",
      },
    },
    hover: {
      opacity: 100,
      transition: {
        type: "tween",
        duration: 0.3,
        ease: "easeInOut",
      },
    },
  };
  return (
    <MainContainer>
      <MainContent>
        <div className="flex flex-row space-x-2 p-4 items-center">
          <Image
            src="/vidit-grad-bw.png"
            className="grayscale rounded-full"
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
          <ExternalLink href="https://cs.viditkhandelwal.com">
            CS PORTFOLIO
          </ExternalLink>
          <ExternalLink href="mailto:viditkhandelwal_2023@depauw.edu">
            EMAIL
          </ExternalLink>
        </SectionContainer>
        <Spotlight href="https://github.com/csvidit">
          Squawk Social, a fun and unserious social media platform with quirky,
          Gen-Z reactions
        </Spotlight>
        <LayoutGroup id="button-group">
          {mainLinks.map((x) => (
            <AnimatePresence key={x.id}>
              <MainLink
                label={x.label}
                key={x.id}
                type={x.type}
                href={x.href}
                id={x.id}
                hoveredButtonId={hoveredButtonId}
                setHoveredButtonId={setHoveredButtonId}
              >
                {/* <AnimatePresence>
              {hoveredButtonId && (
                <motion.div
                  layoutId={`button-${hoveredButtonId}`}
                  initial={{
                    opacity: 0,
                  }}
                  transition={{
                    type: "tween",
                    duration: 0.3,
                    ease: "easeInOut",
                  }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="absolute top-0 z-0 h-full w-full bg-stone-900"
                />
              )}
            </AnimatePresence> */}
              </MainLink>
            </AnimatePresence>
          ))}
          {/* <MainLink href="https://xz.viditkhandelwal.com">
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
          </MainLink> */}
        </LayoutGroup>
      </MainContent>
    </MainContainer>
  );
};

export default Index;
