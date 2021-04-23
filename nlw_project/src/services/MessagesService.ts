import { getCustomRepository, Repository } from "typeorm";
import { Message } from "../entities/Message";
import { MessagesRepository } from "../repositories/MessagesRepository";

interface IMessageCreate {
    admin_id?: string; //the ? means that could not come with a value at all
    text: string;
    user_id: string;
}

class MessagesService {
    private messagesRepository: Repository<Message>;

    constructor(){
        this.messagesRepository = getCustomRepository(MessagesRepository);
    }
  async create({ admin_id, text, user_id }: IMessageCreate) {

      const message = this.messagesRepository.create({
          admin_id,
          text,
          user_id
      });

      await this.messagesRepository.save(message);

      return message;
  }

  async listByUser(user_id: string){

    const list = await this.messagesRepository.find({
        where: { user_id },
        relations: ["user"], // the same name that we gave to the entity "Many to One" relationship
    });

    return list;

  }

}

export { MessagesService };