import React from 'react';

function Header({category, title}) {
    return (
        <div>
            <p className={"text-gray-400"}>
                {category}
            </p>
            <p className={"text-3xl font-extrabold tracking-tight text-slate-900 uppercase dark:text-gray-100"}>{title}</p>
        </div>
    );
}

export default Header;
