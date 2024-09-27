"use client"
import { useEffect, useState } from "react";
import { AppBar } from "../components/AppBar";
import { DarkButton } from "../components/buttons/DarkButton";
import { BACKEND_URL } from "../config";
import axios from "axios";
import { LinkButton } from "../components/buttons/LinkButton";
import { useRouter } from "next/navigation";

interface Zap {
    "id": string
    "triggerId": string,
    "userId": number,
    "action":
    {
        "id": number,
        "actionId": number,
        "zapId": string,
        "sortingOrder": number,
        "type": {
            "id": number,
            "name": string
        }
    }[],
    "trigger": {
        "id": string,
        "zapId": string,
        "triggerId": string,
        "type": {
            "id": string,
            "name": string
        }
    }
}
function useZaps() {
    const [loading, setLoading] = useState(true);
    const [zaps, setZaps] = useState<Zap[]>([]);

    useEffect(() => {
        const res = axios.get(`${BACKEND_URL}/app/v1/zap/all`, {
            headers: {
                "Authorization": localStorage.getItem('token')
            }
        })
            .then(res => {
                setZaps(res.data.zaps)
                setLoading(false);
            })
    }, []);

    return {
        loading, zaps
    }
}

export default function DashBoard() {
    const { loading, zaps } = useZaps();
    const router = useRouter();

    return <div>
        <AppBar />
        <div className="flex justify-center pt-8">
            <div className="max-w-screen-lg w-full">
                <div className="flex justify-between pr-8">
                    <div className="text-2xl font-bold">
                        My Zaps
                    </div>
                    <DarkButton onClick={() => {
                        router.push('/zap/create')
                    }}>Create </DarkButton>
                </div>
            </div>
        </div>
        {loading ? "Loading......" : <div className="flex justify-center"> <ZapTable zaps={zaps} /></div>}
    </div>
}

function ZapTable({ zaps }: { zaps: Zap[] }) {
    const router = useRouter();

    return <div className="p-8 max-w-screen-lg w-full">
        <div className="flex">
            <div className="flex-1">Type</div>
            <div className="flex-1">Name</div>
            <div className="flex-1">Last Edit</div>
            <div className="flex-1">GO</div>
        </div>
        {zaps.map(z => <div className="flex border-b border-t py-4">
            <div className="flex-1">{z.trigger.type.name} {z.action.map(x => x.type.name + " ")}</div>
            <div className="flex-1">{z.id}</div>
            <div className="flex-1">Nov 12, 2023</div>
            <div className="flex-1"><LinkButton onClick={() => {
                router.push("/zap/" + z.id)
            }}>GO</LinkButton>
            </div>
        </div>)}
    </div>
}