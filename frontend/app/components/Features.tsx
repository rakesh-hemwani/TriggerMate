export const Feautres = ({ title, subtitle }: {
    title: string,
    subtitle: string
}) => {
    return <div className="flex pt-3 p-2">
        <CheckMark/>
        <div className="flex  flex-col justify-center">
            <div className="pl-1 font-bold text-sm">
                {title}
            </div>
            <div className="pl-1 text-sm">
                {subtitle}
            </div>
        </div>
    </div>
}
const CheckMark = () => {
    return <div>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-5">
            <path stroke-linecap="round" stroke-linejoin="round" d="m2.5 14.75 6 6 9-13.5" />
        </svg>

    </div>
}