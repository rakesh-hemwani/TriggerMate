"use client"
import { Router } from "next/router"
import { PrimaryButton } from "./buttons/PrimaryButton"
import { SecondaryButton } from "./buttons/SecondaryButton"
import { Feautres } from "./Features"
import { useRouter } from "next/navigation"

export const Hero = () => {
    const router = useRouter();
    return <div>
        <div className="flex justify-center">
            <div className="text-5xl font-semibold text-center pt-8 max-w-xl">
                Automate as fast as you can type 
            </div>
        </div>
        <div className="flex justify-center pt-2">
            <div className="text-xl font-normal text-center pt-8 max-w-2xl">
                AI gives you automation superpowers, and Zapier puts them to work. Pairing AI and Zapier helps you turn ideas into workflows and bots that work for you.
            </div>
        </div>
        <div className="flex pt-4 justify-center">
            <PrimaryButton onClick={() => {
                console.log("hii")
            }} size="big">Get started free</PrimaryButton>
            <div className="pl-4">
                <SecondaryButton onClick={() => {
                    router.push('/signup')
                }} size="big">Contact Us</SecondaryButton>
            </div>
        </div>
        <div className="flex justify-center">
            <Feautres title={"Free forever"} subtitle ={" for core features"}></Feautres>
            <Feautres title={"More apps"} subtitle ={" than any other platform"}></Feautres>
            <Feautres title={"Cutting-edge "} subtitle ={" AI features"}></Feautres>
        </div>
    </div>
}