"use client";

import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { RxArrowTopRight } from "react-icons/rx";

const MainLink = (props: {
  href: string;
  children: React.ReactNode;
  key: any;
  type: React.ReactNode;
  id: number;
  hoveredButtonId: any;
  setHoveredButtonId: any;
}) => {

  return (
    <Link href={props.href} className="z-10 overflow-hidden w-full h-full">
      <motion.div
        layout
        initial="initial"
        whileHover="hover"
        onHoverStart={() => props.setHoveredButtonId(props.id)}
        onHoverEnd={() => props.setHoveredButtonId(null)}
        layoutId={"props.id"}
        className={`main-link z-10 group overflow-hidden bg-transparent relative`}
      >
        <motion.div
          layout
          className="flex flex-row justify-between p-4 space-x-0 items-center border-b border-b-stone-900 z-10"
        >
          <motion.div className="z-10">
            <motion.div className="flex flex-col space-y-2 z-10">
              <motion.div className="text-stone-500 text-xs group-hover:text-stone-300 transition-all duration-300 ease-in-out z-10">
                {props.type}
              </motion.div>
              <motion.div className={`z-10 ${props.type === "SPOTLIGHT" ? "group-hover:text-yellow-400" : "group-hover:text-stone-100"}  duration-300 ease-in-out`}>
                {props.children}
              </motion.div>
            </motion.div>
          </motion.div>
          <motion.div
            layout
            layoutId={"main-link-arrow-hover"}
            className={`rounded-full p-2 z-10 bg-transparent ${props.type === "SPOTLIGHT" ? "group-hover:bg-yellow-400" : "group-hover:bg-blue-700" }  transition-all duration-300 ease-in-out`}
          >
            <RxArrowTopRight />
          </motion.div>
        </motion.div>
        <AnimatePresence>
          {props.hoveredButtonId == props.id && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              layoutId={"button-hover-background"}
              transition={{
                type: "tween",
                duration: 0.3,
              }}
              className={`absolute top-0 left-0 right-0 z-0 h-full w-full bg-stone-900`}
            />
          )}
        </AnimatePresence>
      </motion.div>
    </Link>
  );
};

export default MainLink;
