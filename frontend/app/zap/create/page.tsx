"use client"
import { AppBar } from "@/app/components/AppBar";
import { LinkButton } from "@/app/components/buttons/LinkButton";
import { ZapCell } from "@/app/components/ZapCell";
import { useState } from "react";

export default function () {
    const [selectedTrigger, setSelectedTrigger] = useState("");
    const [selectedActions, setSelectedActions] = useState<{
        availableActionId: string,
        availableActionName: string
    }[]>([]);

    const renderActions = (actions: typeof selectedActions) => {
        // Ensure at least two actions are rendered
        const minActions = 2;
        const filledActions = [...actions];

        while (filledActions.length < minActions) {
            filledActions.push({
                availableActionId: '',
                availableActionName: ' Action',
            });
        }

        return filledActions.map((action, index) => (
            <div className=" flex justify-center px-2 py-2">
                <ZapCell
                key={index}
                name={action.availableActionName ? action.availableActionName : " Action"}
                index={2 + index}
            />
            </div>
        ));
    };
    return <div>
        <AppBar />
        <div className="w-full min-h-screen bg-slate-200 flex flex-col justify-center">
            <div className="flex justify-center">
                <ZapCell name={selectedTrigger ? selectedTrigger : "Trigger"} index={1} />
            </div>
            <div className="flex flex-col justify-center px-4 py-4">
                    {renderActions(selectedActions)}
            </div>
            <div className="flex justify-center">
                <LinkButton onClick={() => {
                    setSelectedActions(a => [...a, {
                        availableActionId: "",
                        availableActionName: ''
                    }])}}> <div className="text-2xl">
                        +
                    </div> </LinkButton>
            </div>

        </div>
    </div>
}