import express from "express"
import { getBook } from "../Controllers/book_controllers.js"
const router=express.Router()

router.get("/",getBook)
export default router;
