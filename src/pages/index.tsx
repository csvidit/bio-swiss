import MainContainer from "@/components/MainContainer";
import MainContent from "@/components/MainContent";
import Title from "@/components/Title";
import Image from "next/image";
import { MdOutlineWorkOutline } from "react-icons/md";
import { TbLocation } from "react-icons/tb";
import { RxArrowTopRight } from "react-icons/rx";
import Link from "next/link";

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
          <Link href="https://linkedin.com/in/viditkhandelwal" className="flex flex-row space-x-1 text-xs items-center">
            <div className="text-stone-600">LINKEDIN</div>
            <div className="text-sm text-stone-500">
              <RxArrowTopRight />
            </div>
          </Link>
          <Link href="https://read.cv/viditkhandelwal" className="flex flex-row space-x-1 text-xs items-center">
            <div className="text-stone-600">RÉSUME</div>
            <div className="text-sm text-stone-500">
              <RxArrowTopRight />
            </div>
          </Link>
          <Link href="mailto:viditkhandelwal_2023@depauw.edu" className="flex flex-row space-x-1 text-xs items-center">
            <div className="text-stone-600">EMAIL</div>
            <div className="text-sm text-stone-500">
              <RxArrowTopRight />
            </div>
          </Link>
        </div>
      </MainContent>
    </MainContainer>
  );
};

export default Index;
