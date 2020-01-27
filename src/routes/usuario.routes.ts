import { Router } from "express";
import {
  createUsuario,
  getUsuario,
  getUsuarios,
  updateUsuario,
  deleteUsuario,
  login,
  listUsuarios
} from "../controllers/usuario.controller";
import { TokenValidation } from "../libs/verifyToken";

const router = Router();

router.route("/create").post(createUsuario);
router.route("/").get(TokenValidation,getUsuarios);
router.route("/:id").get(TokenValidation,getUsuario);
router.route("/update/:id").put(TokenValidation,updateUsuario);
router.route("/delete/:id").delete(TokenValidation,deleteUsuario);
//router.route("/getAll").get(listUsuarios);

router.route("/login").post(login);

export default router;
