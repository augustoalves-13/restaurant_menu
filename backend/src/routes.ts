import { Request, Response, Router } from "express";
import { CreateUserController } from "./controllers/user/CreateUserController";
import { AuthUserController } from "./controllers/user/AuthUserController";
import { DetailsUserController } from "./controllers/user/DetailsUserController";
import { isAuthenticated } from "./middlewares/isAuthenticated";

const router = Router() 

// --- USERS
router.post('/users', new CreateUserController().handle)
router.get('/users', isAuthenticated, new DetailsUserController().handle)

// --- LOGIN
router.post('/session', new AuthUserController().handle)

export default router