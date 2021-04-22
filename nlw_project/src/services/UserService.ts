import { getCustomRepository } from "typeorm";
import { UsersRepository } from "../repositories/UsersRepository";

interface IUserCreate {
    email: string
}

class UsersService {
  async create({ email }: IUserCreate) {
      const usersRepository = getCustomRepository(UsersRepository);
    
    //verify if the user exist
    const userExists = await usersRepository.findOne({
        email
    })
    // if yes, return user
    if(userExists){
        return userExists;
    }

    // if not, save it on DB
    const user = usersRepository.create({
        email
    })

    await usersRepository.save(user);

    return user;

  }
}

export { UsersService };
