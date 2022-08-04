import { Router } from "express";
import { testpasser } from "../services/dataservices";

export const router: Router = Router();


router.post("/", testpasser.newData);

router.delete("/:id", testpasser.removeData);

router.get("/", testpasser.findAllData);

router.get("/:id",  testpasser.findDataById);

