const ButtonDark = props => {
    return (
        <a className="btn mb-5 w-full z-1 relative" href={props.goTo} target={props.target} rel={props.rel}>{props.children}</a>
    );
};

export default ButtonDark;
