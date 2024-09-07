import { Request, Response, Router } from "express";
import { CreateUserController } from "./controllers/user/CreateUserController";
import { AuthUserController } from "./controllers/user/AuthUserController";
import { DetailsUserController } from "./controllers/user/DetailsUserController";
import { isAuthenticated } from "./middlewares/isAuthenticated";
import { CreateCategoryController } from "./controllers/category/CreateCategoryController";
import { ListCategoryController } from "./controllers/category/ListCategoryController";
import { CreateProductController } from "./controllers/product/CreateProductController";
import multer from "multer";
import multerSetup from './core/config/multer'

const router = Router() 
const upload = multer(multerSetup.upload('storage'))

// --- USERS
router.post('/users', new CreateUserController().handle)
router.get('/users', isAuthenticated, new DetailsUserController().handle)

// --- LOGIN
router.post('/session', new AuthUserController().handle)

// --- CATEGORY
router.post('/category', isAuthenticated, new CreateCategoryController().handle)
router.get('/category', isAuthenticated, new ListCategoryController().handle)

// --- PRODUCTS
router.post('/product', isAuthenticated, upload.single('product-banner'),   new CreateProductController().handle)

export default router