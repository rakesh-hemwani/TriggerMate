"use client";

import { ReactNode } from "react";

export const LinkButton = ({children, onClick} : {children : ReactNode, onClick : () => void} ) => {
    return <div className="px-2 py-1 font-light text-sm rounded cursor-pointer hover:bg-cyan-100" onClick={onClick}>
        {children}
    </div>
}   