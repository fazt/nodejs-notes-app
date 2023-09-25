import { Router } from "express";
import { renderIndex, renderContact } from "../controllers/index.controller.js";

const router = Router();

router.get("/", renderIndex);
router.get("/contact", renderContact);
// Array de proyectos
const projects = [
    {
      title: "Pokedex",
      URI: "http://asdasd.com",
      description: "Pokedex de Pokemon"
    },
    {
      title: "Proyecto 2",
      URI: "http://proyecto2.com",
      description: "Descripción del Proyecto 2"
    },
    // Agrega más proyectos aquí...
  ];
  
  router.get('/proyect', (req, res) => {
    res.render('proyect', { projects });
  });


export default router;
