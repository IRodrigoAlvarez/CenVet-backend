import { Router } from "express";
import { MascotaController } from "../controllers/mascota.controller";
import { Auth } from "../middleware/auth.middleware";

const router: Router = Router();

router.post(
  "/",
  Auth.accessControl,
  Auth.allowIfLoggedIn,
  MascotaController.crear
);
router.get(
  "/:mascotaId",
  Auth.accessControl,
  Auth.allowIfLoggedIn,
  MascotaController.obtener
);
router.get(
  "/cliente/:clienteId",
  Auth.accessControl,
  Auth.allowIfLoggedIn,
  MascotaController.obtenerPorCliente
);
router.put(
  "/:mascotaId",
  Auth.accessControl,
  Auth.allowIfLoggedIn,
  MascotaController.actualizar
);

export default router;
