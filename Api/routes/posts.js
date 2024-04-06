import express from "express"
const router= express.Router();
import {getPost,getPosts,deletePost,updatePost,addPost} from "../controllers/posts.js"

router.get("/",getPosts);
router.get("/:id",getPost);
router.post("/",addPost);
router.delete("/:id",deletePost);
router.put("/:id",updatePost);

export default router;