import { Router } from "express";
import {
  addMessage,
  getChannelById,
  getUserChannels,
} from "../../controllers/channelController.js";
import { uploadMessagesToS3 } from "../../middleware/upload.js";

const router = Router();

router.get("/", getUserChannels);

router.get("/:cid", getChannelById);

router.post("/:cid/msg", uploadMessagesToS3.single("file"), addMessage);

export default router;
