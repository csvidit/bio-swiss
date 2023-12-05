import { motion } from "framer-motion";

const MainContent = (props: { setHoveredButtonId: any, children: React.ReactNode }) => {

    console.log("RE-RENDER");

  return (
    <motion.div className="min-h-screen w-screen lg:w-2/3 self-center lg:border-l lg:border-r lg:border-l-stone-900 lg:border-r-stone-900">
      {props.children}
    </motion.div>
  );
};

export default MainContent;
