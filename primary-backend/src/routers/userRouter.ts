import { Router } from "express";
import { authMiddleWare } from "../middleware";
import { SigninSchema, SignupSchema } from "../types/types";
import { prismaClient } from "../db";
import jwt from "jsonwebtoken";
import { JWT_PASSWORD } from "../config";

const router = Router();

router.post("/signup", async (req, res) => {
    const body = req.body;
    const parsedData = SignupSchema.safeParse(body);

    if(!parsedData.success)
        return res.status(411).json({
            message : "Invalid Credentials"
        })
    
    const userExist = await prismaClient.user.findFirst({
        where :{
            email : parsedData.data.username
        }
    })
    
    if(userExist){
        return res.status(403).json({
            message : "User already exists"
        })
    }

    await prismaClient.user.create({
        data : {
            email : parsedData.data.username,
            //TODO : hash the password
            password : parsedData.data.password, 
            name : parsedData.data.name
        }
    })
    //await sendMail( )
    return res.json({
        message : " Please Verify Your email"
    })
})

router.post("/signin", async (req, res) => {
    const body = req.body;
    const parsedData = SigninSchema.safeParse(body);

    if(!parsedData.success)
        return res.status(411).json({
            message : "Invalid Credentials"
        })

    const user = await prismaClient.user.findFirst({
        where :{
            email : parsedData.data.username,
            password : parsedData.data.password
        }
    })

    if(!user){
        return res.status(403).json({
            message : "Invalid Credentials"
        })
    }

    //Sign the JWT
    const token = jwt.sign({
        id : user.id
    }, JWT_PASSWORD);

    res.json({
        token : token
    })
})

router.get("/profile", authMiddleWare, async(req, res) => {
    //TODO : Correct the Type
    //@ts-ignore
    const id = req.id;

    const user = await prismaClient.user.findFirst({
        where : {
            id : id
        },
        select : {
            name : true,
            email : true
        }
    })

    return res.json({
        user
    })
})


export const userRouter = router;