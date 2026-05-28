const TechStackElement = props => {
    return (
        <div className="flex flex-col items-center"><img src={props.icon} className="h-8 w-8 inline mb-1 mr-1 turn-white" alt="" /><span className="text-xs text-center">{props.children}</span></div>
    );
};

export default TechStackElement;
