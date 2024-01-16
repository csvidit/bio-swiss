"use client"

import MainContainer from "@/components/Containers/MainContainer";
import MainContent from "@/components/Containers/MainContent";
import Image from "next/image";
import { MdOutlineWorkOutline } from "react-icons/md";
import { TbLocation } from "react-icons/tb";
import {
  AnimatePresence, LayoutGroup,
  motion
} from "framer-motion";
import ExternalLink from "@/components/Links/ExternalLink";
import MainLink from "@/components/Links/MainLink";
import SectionContainer from "@/components/Containers/SectionContainer";
import { useState } from "react";

const IndexRoute = () => {
  const [hoveredButtonId, setHoveredButtonId] = useState(null);

  const mainLinks = [
    {
      href: "https://github.com/csvidit/squawk",
      type: "SPOTLIGHT",
      label: `Squawk Social, a fun and unserious social media platform with quirky,
      Gen-Z reactions`,
    },
    {
      href: "https://github.com/csvidit/xz-gpt",
      type: "WEB DEV PROJECT",
      label: "Xzayvian GPT",
    },
    {
      href: "https://github.com/csvidit/snapshot",
      type: "WEB DEV PROJECT",
      label: "Snapshot",
    },
  ];
  return (
    <MainContainer>
      <MainContent setHoveredButtonId={setHoveredButtonId}>
        <div className="flex flex-row space-x-2 p-4 items-center">
          <Image
            src="/vidit-grad.png"
            className="rounded-full"
            width={100}
            height={100}
            alt="Vidit Khandelwal Graduation"
          ></Image>
          <div className="flex flex-col space-y-1 text-lg lg:text-xl">
            <h1>Vidit Khandelwal</h1>
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
          <ExternalLink href="/vidit-khandelwal-vcard.vcf">
            CONTACT CARD
          </ExternalLink>
        </SectionContainer>
        <motion.div className="w-full h-max" onChange={() => setHoveredButtonId(null)}>
          <LayoutGroup id="button-group">
            {mainLinks.map((x, index) => (
              <AnimatePresence key={index}>
                <MainLink
                  key={index}
                  type={x.type}
                  href={x.href}
                  id={index}
                  hoveredButtonId={hoveredButtonId}
                  setHoveredButtonId={setHoveredButtonId}
                >
                  {x.label}
                </MainLink>
              </AnimatePresence>
            ))}
          </LayoutGroup>
        </motion.div>
      </MainContent>
    </MainContainer>
  );
};

export default IndexRoute;
