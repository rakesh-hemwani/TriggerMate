"use client"
import { useEffect, useState } from "react";
import { AppBar } from "../components/AppBar";
import { DarkButton } from "../components/buttons/DarkButton";
import { BACKEND_URL } from "../config";
import axios from "axios";

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
}
function useZaps() {
    const [loading, setLoading] = useState(true);
    const [zaps, setZaps] = useState<Zap[]>([]);

    useEffect(() => {
        const res = axios.get(`${BACKEND_URL}/app/v1/zap/all`)
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
    return <div>
        <AppBar />
        <div className="flex justify-center pt-8">
            <div className="max-w-screen-lg w-full">
                <div className="flex justify-between pr-8">
                    <div className="text-2xl font-bold">
                        My Zaps
                    </div>
                    <DarkButton onClick={() => {
                    }}>Create </DarkButton>
                </div>
            </div>
        </div>
        {loading ? "Loading......" : <ZapTable zaps={zaps} />}
    </div>
}

function ZapTable({ zaps }: { zaps: Zap[] }) {
    return <table className="table-auto">
        <thead>
            <tr>
                <th>Song</th>
                <th>Artist</th>
                <th>Year</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>The Sliding Mr. Bones (Next Stop, Pottersville)</td>
                <td>Malcolm Lockyer</td>
                <td>1961</td>
            </tr>
            <tr>
                <td>Witchy Woman</td>
                <td>The Eagles</td>
                <td>1972</td>
            </tr>
            <tr>
                <td>Shining Star</td>
                <td>Earth, Wind, and Fire</td>
                <td>1975</td>
            </tr>
        </tbody>
    </table>

}