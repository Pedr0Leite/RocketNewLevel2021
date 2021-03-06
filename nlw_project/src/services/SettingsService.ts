import { getCustomRepository, Repository } from "typeorm";
import { Settings } from "../entities/Setting";
import { SettingsRepository } from "../repositories/SettingsRepository";

interface ISettingsCreate {
  chat: boolean;
  username: string;
}

class SettingsService {

  private settingsRepository: Repository<Settings>;

    constructor(){
        this.settingsRepository = getCustomRepository(SettingsRepository);
    }

  async create({ chat, username }: ISettingsCreate) {

    //Select * from settings where username = "username" limit 1
    const userAlreadyExists = await this.settingsRepository.findOne({
        username
    })

    if(userAlreadyExists){
        throw new Error("User already exist!")
    }
    
    const settings = this.settingsRepository.create({
      chat: chat,
      username: username,
    });

    await this.settingsRepository.save(settings);

    return settings;
  }

  async findByUserName(username: string){
    const settings = await this.settingsRepository.findOne({
      username
    })
    return settings;
  }

  async update(username: string, chat: boolean){
    await this.settingsRepository.createQueryBuilder()
    .update(Settings)
    .set({ chat })
    .where("username = :username",{//: means its a param
      username
    })
    .execute(); 
  }

}

export { SettingsService };
