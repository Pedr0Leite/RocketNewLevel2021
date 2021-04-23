import { getCustomRepository, Repository } from "typeorm";
import { ConnectionsRepository } from "../repositories/ConnectionsRepository";
import { Connection } from "../entities/Connection";

interface IConnectionCreate{
    socket_id: string;
    user_id: string;
    admin_id?:string;
    id?:string;
}

class ConnectionsServices{

    private connectionsServices: Repository<Connection>

    constructor(){
        this.connectionsServices = getCustomRepository(ConnectionsRepository);
    }

    async create({socket_id, user_id, admin_id, id}: IConnectionCreate){
        const connection = this.connectionsServices.create({
            socket_id,
            user_id,
            admin_id,
            id
        });

        await this.connectionsServices.save(connection);

        return connection;

    }

    async findByUserId(user_id:string){
        const connection = await this.connectionsServices.findOne({
            user_id
        });
        return connection;
    }

}

export { ConnectionsServices }