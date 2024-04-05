import React from "react";

interface Props {
    name: string;
    img: string;
}

const Main: React.FC<Props> = ({ name }) => {
    return (
        <div>
            Hello, {name}!
            <img src="" alt="" />
        </div>
    );
};

export default Main;
