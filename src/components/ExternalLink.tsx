import { motion } from "framer-motion";
import Link from "next/link";
import { RxArrowTopRight } from "react-icons/rx";
import { UrlObject } from "url";

const ExternalLink = (props: {href: string | UrlObject, children: React.ReactNode}) => {
  return (
    <div className="flex flex-row space-x-1 items-center group text-stone-500">
      <div className="flex flex-col relative">
        <Link
          href={props.href}
          className="flex flex-row space-x-1 text-xs items-center"
        >
          <div className="text-stone-900">{props.children}</div>
        </Link>
        <motion.div
          layout
          className="absolute -bottom-2 w-full border-t border-t-stone-900 opacity-0 group-hover:opacity-100 group-hover:bottom-0 duration-300 ease-in-out"
        ></motion.div>
      </div>
      <div className="group-hover:rotate-45 transition-all duration-300 ease-in-out group-hover:text-blue-700">
        <RxArrowTopRight />
      </div>
    </div>
  );
};

export default ExternalLink;