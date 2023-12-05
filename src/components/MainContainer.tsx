import { useFollowPointer } from "@/hooks/useFollowPointer";
import { useRef } from "react";
import {motion} from "framer-motion"
import {Plus_Jakarta_Sans} from "next/font/google"

const pjs = Plus_Jakarta_Sans({subsets: ["latin"]})

const MainContainer = (props: { children: React.ReactNode }) => {
  const ref = useRef(null);
  const { x, y } = useFollowPointer(ref);
  return (
    <main className={`flex flex-col bg-stone-100 text-stone-900 min-w-screen min-h-screen border border-stone-900 z-10 ${pjs.className}`}>
      {/* <motion.div
        ref={ref}
        className="rounded-full w-4 h-4 bg-blue-700 z-50"
        animate={{ x, y }}
        transition={{
          type: "tween"
          
        }}
      /> */}
      {props.children}
    </main>
  );
};

export default MainContainer;
