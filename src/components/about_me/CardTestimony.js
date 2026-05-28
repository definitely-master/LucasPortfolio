const CardTestimony = props => {
    return (
        <div className="card text-center shadow-2xl max-w-xs bg-white">
            <div data-theme="mytheme" className="w-full h-36 bg-gray-200 flex items-center justify-around neutral">
                <img src={props.image} className="h-24 w-24" alt="" />
                <div className="text-left w-44">
                    <p className="font-bold neutral">{props.personName}</p>
                    <div className="text-sm font-light mt-2">
                        {props.jobPosition}

                    </div>
                </div>
            </div>
            <div className="card-body text-left justify-between">
                {props.children}
                <div className="justify-center card-actions">
                    <a href={props.goTo} target="_blank" rel="noreferrer" className="btn btn-outline">Read it on LinkedIn</a>
                </div>
            </div>
        </div>
    );
};

export default CardTestimony;
