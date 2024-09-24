"use client";
import { useState } from "react";
import { AppBar } from "../components/AppBar"
import { PrimaryButton } from "../components/buttons/PrimaryButton";
import { CheckFeature } from "../components/CheckFeature"
import { Input } from "../components/Input"
import { BACKEND_URL } from "../config";
import axios from "axios";
import { useRouter } from "next/navigation";

export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const router = useRouter();

    return <div>
        <AppBar />
        <div className = "flex pt-8 px-10 max-w-8xl">
            <div className="flex-1 pt-20 px-8">
                <div className="font-bold text-3xl">
                    Join millions worldwide who automate their work using Zapier.
                </div>
                <CheckFeature label="Easy setup, no coding required"></CheckFeature>
                <CheckFeature label="Free forever for core features"></CheckFeature>
                <CheckFeature label="14-day trial of premium features & apps"></CheckFeature>
            </div>
            <div className="pt-12 flex-1 px-10 pl-20">
                <div className="py-6 md-12 px-6 border rounded max-w-md">
                    <Input type='text' label="Work Email" onchange={(e)=>{
                        setEmail(e.target.value);
                    }} placeholder="Your Email "></Input>
                    <Input type='password' label="Password" onchange={(e)=>{
                        setPassword(e.target.value);
                    }} placeholder="**************"></Input>
                    <div className="pt-6">
                        <PrimaryButton onClick={ async() => {
                            const res = await axios.post(`${BACKEND_URL}/app/v1/user/signin`, {
                                username : email,
                                password
                            })
                            localStorage.setItem("token", res.data.token);
                            router.push('/dashboard');
                        }} size="big"> Login</PrimaryButton>
                    </div>
            </div>
        </div>
    </div>
    </div>
}