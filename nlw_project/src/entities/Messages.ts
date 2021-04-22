import { Entity, Column, CreateDateColumn, PrimaryColumn, ManyToOne, JoinColumn } from "typeorm";

import { v4 as uuid } from "uuid"; //random number for uuid
import { User } from "./User";

@Entity("messages") //name of the table
class Message{
    @PrimaryColumn()
    id: string;

    @Column()
    admin_id: string;

    @Column()
    text: string;

    @JoinColumn({name: "user_id"})
    @ManyToOne(() => User)
    user:User;

    @Column()
    user_id: boolean;

    @CreateDateColumn()
    created_at: Date;

    constructor(){
        if(!this.id){
            this.id = uuid();
        }
    }

}

export { Message };