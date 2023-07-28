import express from "express"
import { PCController } from "./pc.controller"

const router = express.Router()

router.get('/',PCController.getALLPC)
router.get('/:id',PCController.getSinglePC)
router.delete('/:id',PCController.deletePC)
export const  PCRouter = router