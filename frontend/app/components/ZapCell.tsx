export const ZapCell = ({
    name,
    index
}: {
    name?: string;
    index: number
}) => {
    return <div className="border rounded justify-center border-black py-8 px-8 flex max-w-lg w-full cursor-pointer">
        <div className="flex text-xl">
            <div className="font-bold">
                {index}. 
            </div>
            <div>
                {name}
            </div>
        </div>
    </div>
}