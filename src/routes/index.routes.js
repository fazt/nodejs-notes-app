import { Router } from "express";
import { renderIndex, renderContact } from "../controllers/index.controller.js";

const router = Router();

router.get("/", renderIndex);
router.get("/contact", renderContact);
// Array de proyectos
const projects = [
    {
      title: "Pokedex",
      URI: "https://pokedex-u2jj.onrender.com",
      description: "Pokedex de Pokemon"
    },
    {
      title: "App de la galleta de la fortuna ",
      URI: "https://galleta.onrender.com",
      description: "Cuentas con una galleta que te alegreada el dia con tu fortuna"
    },
    // Agrega más proyectos aquí...
  ];
  
  router.get('/proyect', (req, res) => {
    res.render('proyect', { projects });
  });


export default router;
