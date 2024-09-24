import { Router } from "express";
import { authMiddleWare } from "../middleware";
import { ZapCreateSchema } from "../types/types";
import { prismaClient } from "../db";

const router = Router();

router.get("/all", authMiddleWare, async(req, res) => {
    //@ts-ignore
    const id = req.id
    const zaps = await prismaClient.zap.findMany({
        where : {
            userId : id,
        },
        include :{
            action :{
                include :{
                    type : true
                }
            },
            trigger : {
                include : {
                    type :true
                }
            }
        }
    })

    return res.json({
        zaps
    })
})

router.post("/create", authMiddleWare, async (req, res) => {
    //@ts-ignore
    const id = req.id;
    const body = req.body;
    const parsedData = ZapCreateSchema.safeParse(body);

    if(!parsedData.success){
        return res.status(403).json({
            message : "Please Log in "
        })
    }

    const zapId = await prismaClient.$transaction( async tx => {
        const zap = await tx.zap.create({
            data :{ 
                userId : id,
                triggerId :"",
                action : {
                    create : parsedData.data.actions.map((x, index) => ({
                        actionId : x.availableActionId,
                        sortingOrder : index
                    })),
                }
            }
        })

        const trigger = await tx.trigger.create({
            data :{
                triggerId :parsedData.data.availableTriggerId,
                zapId: zap.id
            }
        });

        await tx.zap.update({
            where: {
                id : zap.id
            },
            data :{
                triggerId :trigger.id
            }
        })
        return zap.id;
    })

    return res.json({
        zapId
    })
})

router.get("/:zapId", authMiddleWare, async(req, res) => {
    //@ts-ignore
    const id = req.id;
    const zapId = req.params.zapId;

    const zaps = await prismaClient.zap.findFirst({
        where : {
            id : zapId,
            userId : id,
        },
        include :{
            action :{
                include :{
                    type : true
                }
            },
            trigger : {
                include : {
                    type :true
                }
            }
        }
    })

    return res.json({
        zaps
    })
})
export const zapRouter = router;