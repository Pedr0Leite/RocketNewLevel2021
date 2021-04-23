import { getCustomRepository, Repository } from "typeorm";
import { User } from "../entities/User";
import { UsersRepository } from "../repositories/UsersRepository";

// interface IUserCreate {
//     email: string
// }

class UsersService {
    private usersRepository: Repository<User>;

    constructor(){
        this.usersRepository = getCustomRepository(UsersRepository);
    }

    //Create method
  async create(email : string) {
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

  //FindByEmail method
  async findByEmail(email: string) {
    const user = await this.usersRepository.findOne({ email });
  
    return user;
  }

}

export { UsersService };
