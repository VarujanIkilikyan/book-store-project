import  {Router} from "express";

import views from "../controllers/views.js";

const SelectorRouter = Router();

SelectorRouter.get('/',await views.viewRender('index'))

export default SelectorRouter;