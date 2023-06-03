const SectionContainer = (props: {type: string, children: React.ReactNode}) => {
    if(props.type === "row")
    {
        return (<div className="flex flex-row space-x-4 p-4 items-center border-b border-b-stone-900">{props.children}</div>);
    }
    else
    {
        return (<div className="flex flex-col space-y-4 p-4 items-center border-b border-b-stone-900">{props.children}</div>);
    }
    
}

export default SectionContainer;