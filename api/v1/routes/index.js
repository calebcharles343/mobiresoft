import { Router } from "express";

const router = new Router();

router.use("/users", userRoute);

export default router;
