const MainContent = (props: {
  setHoveredButtonId: any;
  children: React.ReactNode;
}) => {
  return (
    <div className="min-h-screen w-screen lg:w-2/3 self-center lg:border-l lg:border-r lg:border-l-stone-900 lg:border-r-stone-900">
      {props.children}
    </div>
  );
};

export default MainContent;
