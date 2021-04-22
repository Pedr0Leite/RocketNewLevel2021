import { getCustomRepository, Repository } from "typeorm";
import { User } from "../entities/User";
import { UsersRepository } from "../repositories/UsersRepository";

interface IUserCreate {
    email: string
}

class UsersService {
    private usersRepository: Repository<User>;

    constructor(){
        this.usersRepository = getCustomRepository(UsersRepository);
    }

  async create({ email }: IUserCreate) {
    //verify if the user exist
    const userExists = await this.usersRepository.findOne({
        email
    })
    // if yes, return user
    if(userExists){
        return userExists;
    }

    // if not, save it on DB
    const user = this.usersRepository.create({
        email
    })

    await this.usersRepository.save(user);

    return user;

  }
}

export { UsersService };
