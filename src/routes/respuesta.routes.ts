import { Router } from "express";
import {
  insertarRespuesta,
  buscarRespuestas,
  updateRespuesta,
  deleteRespuesta,
  getPuntaje
} from "../controllers/respuesta.controller";
import { TokenValidation } from "../libs/verifyToken";
const router = Router();
router.route("/create").post(TokenValidation, insertarRespuesta);

router.route("/find").get(TokenValidation, buscarRespuestas);

router.route("/update").put(TokenValidation, updateRespuesta);

router.route("/delete").delete(TokenValidation, deleteRespuesta);

router.route("/getPuntaje/:idUsuario").get(TokenValidation, getPuntaje);
export default router;
