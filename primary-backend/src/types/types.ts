import z, { string } from "zod";

export const SignupSchema = z.object({
    name : z.string(),
    username : z.string(),
    password : z.string().min(8)
})


export const SigninSchema = z.object({
    username : z.string(),
    password : z.string().min(8)
})

export const ZapCreateSchema = z.object({
    availableTriggerId : z.string(),
    triggerMetaData : z.any().optional(),
    actions : z.array(z.object({
        availableActionId : z.number(),
        actionMetaData : z.any().optional()
    }))
})