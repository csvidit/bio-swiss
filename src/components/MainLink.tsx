import { motion } from "framer-motion";
import Link from "next/link";
import { UrlObject } from "url";
import { RxArrowTopRight } from "react-icons/rx";

const MainLink = (props: {
  href: string | UrlObject;
  label: React.ReactNode;
  children?: React.ReactNode;
  key: any;
  type: React.ReactNode;
  id: any;
  hoveredButtonId: any;
  setHoveredButtonId: any;
}) => {
  const variants1 = {
    initial: {
      textColor: "#f5f5f4",

      transition: { type: "tween", duration: 0.3, ease: "easeInOut" },
    },
    hover: {
      textColor: "#1c1917",
      transition: {
        type: "tween",
        duration: 0.3,
        ease: "easeInOut",
      },
    },
  };

  const variants2 = {
    initial: {
      borderColor: "rgba(0, 0, 0, 0)",
      backgroundColor: "rgba(0, 0, 0, 0)",
    },
    hover: { borderColor: "#f5f5f4", backgroundColor: "#1d4ed8" },
  };

  return (
    <motion.div
      initial="initial"
      whileHover="hover"
      layout
      onMouseEnter={() => props.setHoveredButtonId(props.id)}
      onMouseLeave={() => props.setHoveredButtonId(null)}
      layoutId={`button-${props.id}`}
      variants={variants1}
      className={`z-10 group overflow-hidden relative ${
        props.hoveredButtonId === props.id ? "bg-stone-900" : ""
      }`}
    >
      <Link href={props.href} className="z-10 overflow-hidden">
        <motion.div
          layout
          className="flex flex-row justify-between p-4 space-x-0 items-center border-b border-b-stone-900 z-10"
        >
          <motion.div className="z-10">
            <motion.div className="flex flex-col space-y-2">
              <motion.div className="text-stone-500 text-xs group-hover:text-stone-300 transition-all duration-300 ease-in-out">
                {props.type}
              </motion.div>
              <motion.div className="z-10 hover:text-stone-100">
                {props.label}
              </motion.div>
            </motion.div>
          </motion.div>
          <motion.div className="rounded-full p-2 z-10" variants={variants2}>
            <RxArrowTopRight />
          </motion.div>
        </motion.div>
      </Link>
      {props.children}
    </motion.div>
  );
};

export default MainLink;
