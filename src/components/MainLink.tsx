import { motion } from "framer-motion";
import Link from "next/link";
import { UrlObject } from "url";
import { RxArrowTopRight } from "react-icons/rx";

const MainLink = (props: {
  href: string | UrlObject;
  children: React.ReactNode;
}) => {
  return (
    <Link href={props.href} className="z-10 group overflow-hidden">
      <motion.div
        layout
        className="relative flex flex-row justify-between p-4 space-x-0 items-center border-b border-b-stone-900 group-hover:text-stone-100 transition-all duration-300 ease-in-out z-10"
      >
        <div className="z-10">{props.children}</div>
        <div className="rounded-full p-2 border-transparent group-hover:border-stone-100 group-hover:bg-blue-700 duration-300 ease-in-out z-10"><RxArrowTopRight/></div>
        <motion.div layout className="z-0 absolute h-full w-full left-0 opacity-0 bg-stone-900 group-hover:bottom-0 group-hover:opacity-100 group-hover:w-full group-hover:rounded-none transition-all duration-300 ease-in-out"></motion.div>
      </motion.div>
    </Link>
  );
};

export default MainLink;
