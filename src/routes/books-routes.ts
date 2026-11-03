import { Router } from "express";
import type { Request, Response } from "express";
import booksData from "../data/books.json" with { type: "json" };

const router = Router();

router.get("/", (_req: Request, res: Response) => {
  res.send("Bienvenido a la API de libros");
});

export default router;
