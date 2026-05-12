import  {Router} from "express";

import views from "../01_controllers/views.js";
import authRouter from "./auth.js"

const SelectorRouter = Router();

SelectorRouter.get('/',views.viewRender('index'))
SelectorRouter.use('/auth',authRouter)

export default SelectorRouter;