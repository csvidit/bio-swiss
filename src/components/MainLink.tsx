import { AnimatePresence, LayoutGroup, motion } from "framer-motion";
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
  const id = `button-${props.id}`;

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

  if (props.type == "SPOTLIGHT") {
    return (
      <motion.div
        layout
        initial="initial"
        whileHover="hover"
        onHoverStart={() => props.setHoveredButtonId(props.id)}
        onHoverEnd={() => props.setHoveredButtonId(null)}
        // onMouseEnter={() => props.setHoveredButtonId(props.id)}
        // onMouseLeave={() => props.setHoveredButtonId(null)}
        layoutId={"props.id"}
        variants={variants1}
        className={`main-link z-10 group overflow-hidden bg-transparent relative`}
      >
        <Link href={props.href} className="z-10 overflow-hidden w-full h-full">
          <motion.div className="z-10 flex flex-row justify-between space-x-4 items-center p-4 border-b border-b-stone-900 group hover:bg-stone-900 transition-all duration-300 ease-in-out">
            <div className="z-10 flex flex-col space-y-4">
              <div className="z-10 text-stone-500 text-xs group-hover:text-stone-300 transition-all duration-300 ease-in-out">
                SPOTLIGHT
              </div>
              <div className="z-10 group-hover:text-yellow-400 transition-all duration-300 ease-in-out">
                {props.label}
              </div>
            </div>
            <div className="z-10 p-2 rounded-full border-stone-900 group-hover:border-stone-100 group-hover:bg-yellow-400 transition-all duration-300 ease-in-out">
              <RxArrowTopRight />
            </div>
          </motion.div>
        </Link>
        {props.children}
      </motion.div>
    );
  }

  return (
    <motion.div
      layout
      initial="initial"
      whileHover="hover"
      onHoverStart={() => props.setHoveredButtonId(props.id)}
      onHoverEnd={() => props.setHoveredButtonId(null)}
      // onMouseEnter={() => props.setHoveredButtonId(props.id)}
      // onMouseLeave={() => props.setHoveredButtonId(null)}
      layoutId={"props.id"}
      variants={variants1}
      className={`main-link z-10 group overflow-hidden bg-transparent relative`}
    >
      <Link href={props.href} className="z-10 overflow-hidden w-full h-full">
        <motion.div
          layout
          className="flex flex-row justify-between p-4 space-x-0 items-center border-b border-b-stone-900 z-10"
        >
          <motion.div className="z-10">
            <motion.div className="flex flex-col space-y-2 z-10">
              <motion.div className="text-stone-500 text-xs group-hover:text-stone-300 transition-all duration-300 ease-in-out z-10">
                {props.type}
              </motion.div>
              <motion.div className="z-10 group-hover:text-stone-100 duration-300 ease-in-out">
                {props.label}
              </motion.div>
            </motion.div>
          </motion.div>
          <motion.div
            layout
            layoutId={"main-link-arrow-hover"}
            className="rounded-full p-2 z-10"
            variants={variants2}
          >
            <RxArrowTopRight />
          </motion.div>
        </motion.div>
      </Link>
      {props.children}
    </motion.div>
  );
};

export default MainLink;
