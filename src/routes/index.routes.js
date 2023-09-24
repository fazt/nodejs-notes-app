import { Router } from "express";
import { renderIndex, renderContact } from "../controllers/index.controller.js";

const router = Router();

router.get("/", renderIndex);
router.get("/contact", renderContact);

router.get("/proyect", (req,res)=>{
    let proyect = {"title":"Pokedex","URI":"http://asdasd.com","description":"Pokedex de pokemon"}
    console.log(proyect)
    
    
 res.render("proyect", { proyect });    
    }
    )


export default router;
