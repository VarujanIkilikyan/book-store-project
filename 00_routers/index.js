import  {Router} from "express";

import views from "../01_controllers/views.js";

const SelectorRouter = Router();

SelectorRouter.get('/',views.viewRender('index'))

export default SelectorRouter;