const SectionHeader = props => {

    const h2Classes = `${props.headerGradientStyle} text-5xl font-bold font-poppins text-center w-max subpixel-antialiased mx-auto p-2 pt-20`;

    return (
        <div className={`text-secondary ${props.class}`}>
            <h2 className={h2Classes}>
                {props.text}
            </h2>
        </div>
    );
};

export default SectionHeader;
