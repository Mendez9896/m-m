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
router.route("/create").post(insertarRespuesta);

router.route("/find").get(buscarRespuestas);

router.route("/update").put(updateRespuesta);

router.route("/delete").delete(deleteRespuesta);

router.route("/getPuntaje/:idUsuario").get(getPuntaje);
export default router;
