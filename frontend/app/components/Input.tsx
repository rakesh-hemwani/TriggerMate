"use client";

export const Input = ({label, placeholder, onchange, type = "text"} : {
    label : string;
    placeholder : string;
    onchange : (e: any) => void;
    type?: 'text' | 'password'
}) => {
    return <div className="pt-4">
        <div className="text-sm pb-1">
            * <label>{label}</label>
        </div>
        <input className="w-full border rounded px-4 py-2 border-black"type={type} placeholder={placeholder} onChange={onchange}/>
    </div>
}