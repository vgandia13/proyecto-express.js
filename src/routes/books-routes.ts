import { Router } from "express";
import type { Request, Response } from "express";
import booksData from "../data/books.json" with { type: "json" };

const router = Router();

router.get("/", (req: Request, res: Response) => {
  const contains = req.query.contains;

  if (contains === undefined) {
    res.json(booksData);
    return;
  }

  const query = String(contains).toLowerCase();
  const filteredBooks = booksData.filter((book) => {
    return book.title.toLowerCase().includes(query);
  });
  res.json(filteredBooks);
});

export default router;
