const ButtonLight = props => {
    return (
        <a className={`btn btn-primary mb-5 w-full z-1 relative ${props.class}`} href={props.goTo} target={props.target} rel={props.rel}>{props.children}</a>
    );
};

export default ButtonLight;
