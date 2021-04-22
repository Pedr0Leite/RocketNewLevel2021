import { Request, Response } from "express";
import { MessagesService } from "../services/MessagesService";

class MessageController {
  async create(req: Request, res: Response) {
    const {  } = req.body;

    const messagesService = new MessagesService();

    try{
    const messages = await messagesService.create({  });

    return res.json(messages);

    }catch(err){
    return res.status(400).json({
        message: err.message,
    })
    }
        
  }
}

export { MessageController };
