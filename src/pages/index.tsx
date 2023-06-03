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

const Index = () => {
  return (
    <MainContainer>
      <MainContent>
        <div className="flex flex-row space-x-2 p-4 items-center">
          <Image
            src="/vidit-grad.png"
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
        <div className="flex flex-row space-x-4 p-4 items-center border-t border-t-stone-900">
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
            <div className="">United States</div>
          </div>
        </div>
        <div className="flex flex-row space-x-4 p-4 items-center border-t border-t-stone-900">
          <ExternalLink href="https://linkedin.com/in/viditkhandelwal">
            LINKEDIN
          </ExternalLink>
          <ExternalLink href="https://read.cv/viditkhandelwal">
            RÉSUME
          </ExternalLink>
          <ExternalLink href="mailto:viditkhandelwal_2023@depauw.edu">
            EMAIL
          </ExternalLink>
        </div>
        <Link
          href="https://github.com/csvidit/squawk"
          className="flex flex-row justify-between space-x-4 items-center p-4 border-t border-t-stone-900 group hover:bg-stone-900 transition-all duration-300 ease-in-out"
        >
          <div className="flex flex-col space-y-4">
            <div className="text-stone-500 text-xs group-hover:text-stone-300 transition-all duration-300 ease-in-out">
              SPOTLIGHT
            </div>
            <div className="group-hover:text-yellow-400 transition-all duration-300 ease-in-out">
              A fun and unserious social media platform with quirky, Gen-Z
              reactions
            </div>
          </div>
          <div className="p-2 rounded-full border-stone-900 group-hover:border-stone-100 group-hover:bg-yellow-400 transition-all duration-300 ease-in-out">
            <RxArrowTopRight />
          </div>
        </Link>
        <MainLink href="https://xz.viditkhandelwal.com">
          <div className="z-10">Xzayvian GPT</div>
        </MainLink>
        <MainLink href="https://drive.google.com/file/d/1Tn6whB4hZ2w13NZiZGQXtPZUwrfkWpyQ/view">
          <div className="z-10">Singapore&apos;s Economic Miracle</div>
        </MainLink>
      </MainContent>
    </MainContainer>
  );
};

export default Index;
