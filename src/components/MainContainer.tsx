const MainContainer = (props: {children: React.ReactNode}) => {
    return (<main className="flex flex-col bg-stone-100 text-stone-900 min-w-screen min-h-screen">{props.children}</main>)
}

export default MainContainer;