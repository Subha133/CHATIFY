import express from 'express';
import { signup , login, logout, updateProfile } from '../controllers/auth.controller.js';
import { arcjetProtection } from '../middleware/arcjet.middleware.js';
import { protectRoute } from "../middleware/auth.middleware.js";

const router = express.Router();

router.post("/signup",signup);

router.post("/login",login);

router.post("/logout",logout);

router.put("/updateProfile",protectRoute,updateProfile);

router.get("/test",arcjetProtection,(req,res)=> {
    res.status(200).json({message : "test route"})
})
 

export default router;