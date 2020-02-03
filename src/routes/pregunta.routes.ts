import { Router } from "express";

import {
  buscarPreguntas,
  busquedaEspecifica,
  insertarPregunta,
  getInfoPregunta,
  deletePregunta,
  updatePregunta,
  filtrarPregunta,
  getPreguntas
} from "../controllers/pregunta.controller";

import { TokenValidation } from "../libs/verifyToken";
import {getPuntaje} from "../controllers/respuesta.controller";
const router = Router();
router.route("/create").post(TokenValidation, insertarPregunta);

router.route("/find").get(TokenValidation,buscarPreguntas);

router.route("/findEs").post(TokenValidation, busquedaEspecifica);

router.route("/findInf").get(TokenValidation, getInfoPregunta);

router.route("/update").put(TokenValidation, updatePregunta);

router.route("/delete/:idPreg").delete(TokenValidation, deletePregunta);

router.route("/search").post(TokenValidation, filtrarPregunta);

router.route("/getPreguntas/:idUsuario").get(TokenValidation, getPreguntas);

export default router;
