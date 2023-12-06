import Link from "next/link";
import { RxArrowTopRight } from "react-icons/rx";
import { UrlObject } from "url";

const Spotlight = (props: {href: string | UrlObject, children: React.ReactNode}) => {
  return (
    <Link
      href={props.href}
      className="flex flex-row justify-between space-x-4 items-center p-4 border-b border-b-stone-900 group hover:bg-stone-900 transition-all duration-300 ease-in-out"
    >
      <div className="flex flex-col space-y-4">
        <div className="text-stone-500 text-xs group-hover:text-stone-300 transition-all duration-300 ease-in-out">
          SPOTLIGHT
        </div>
        <div className="group-hover:text-yellow-400 transition-all duration-300 ease-in-out">
          {props.children}
        </div>
      </div>
      <div className="p-2 rounded-full border-stone-900 group-hover:border-stone-100 group-hover:bg-yellow-400 transition-all duration-300 ease-in-out">
        <RxArrowTopRight />
      </div>
    </Link>
  );
};

export default Spotlight
