import { ReactNode } from "react";

export const DarkButton = ({children, onClick, size = 'small'} : 
    {children : ReactNode, 
    onClick : () => void,
    size? : 'big' | 'small'}) => {

        return <div onClick={onClick} className= {` flex flex-col justify-center px-8 py-2 bg-purple-800 text-white rounded cursor-pointer hover: shadow-md text-center`}>
            {children}
        </div>
}