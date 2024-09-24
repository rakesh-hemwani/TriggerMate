"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ZapCreateSchema = exports.SigninSchema = exports.SignupSchema = void 0;
const zod_1 = __importDefault(require("zod"));
exports.SignupSchema = zod_1.default.object({
    name: zod_1.default.string(),
    username: zod_1.default.string(),
    password: zod_1.default.string().min(8)
});
exports.SigninSchema = zod_1.default.object({
    username: zod_1.default.string(),
    password: zod_1.default.string().min(8)
});
exports.ZapCreateSchema = zod_1.default.object({
    availableTriggerId: zod_1.default.string(),
    triggerMetaData: zod_1.default.any().optional(),
    actions: zod_1.default.array(zod_1.default.object({
        availableActionId: zod_1.default.number(),
        actionMetaData: zod_1.default.any().optional()
    }))
});
