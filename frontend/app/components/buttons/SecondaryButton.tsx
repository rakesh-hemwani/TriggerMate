import { ReactNode } from "react";

export const SecondaryButton = ({children, onClick, size = 'small'} : 
    {children : ReactNode, 
    onClick : () => void,
    size? : 'big' | 'small'}) => {

        return <div onClick={onClick} className= {`${size === 'small' ? "text-sm" : "text-lg"} 
        ${size === 'small' ? "px-8 py-2" : "px-10 py-4"}  text-black rounded-full border-black cursor-pointer hover: shadow-md`}>
            {children}
        </div>
}