"use client"
import { useRouter } from "next/navigation"
import { LinkButton } from "./buttons/LinkButton"
import { PrimaryButton } from "./buttons/PrimaryButton";

export const AppBar = () =>{
    const router = useRouter();
    return <div className="flex border-b justify-between p-2">
        <div className="pl-6 p-2">
            <div className="flex flex-col justify-center text-2xl font-extrabold">
                Zapier
            </div>
        </div>
        <div className="flex p-2">
            <div className="pr-4 pt-1">
                <LinkButton onClick={() => {}}>Contact Sales</LinkButton>
            </div>
            <div className="pr-4 pt-1">
                <LinkButton onClick={() => {
                    router.push("/login")
                }}>Log in</LinkButton>
            </div>
            <div className="pr-4 ">
                <PrimaryButton onClick={() => {
                    router.push('signup')
                }}>
                    SignUp
                </PrimaryButton>
            </div>
        </div>
    </div>
}