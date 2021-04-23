import { io } from "../http";
import { ConnectionsServices } from "../services/ConnectionsService";
import { UsersService } from "../services/UsersService";
import { MessagesService } from "../services/MessagesService";

interface IParams{
    text: string;
    email: string;
}

io.on("connect", (socket) => {
  const connectionsService = new ConnectionsServices();
  const usersService = new UsersService();
  const messagesService = new MessagesService();

  socket.on("client_first_access", async (params) => {
    console.log("Params: ", params);

    const socket_id = socket.id;
    const { text, email } = params as IParams;
    let user_id = null;

    const userExist = await usersService.findByEmail(email);

    if (!userExist) {
      const user = await usersService.create(email);
      //Save the connection with socket_id, user_id
      await connectionsService.create({
        socket_id,
        user_id: user.id,
      });

      user_id = user.id;

    } else {

        user_id = userExist.id;

        const connection = await connectionsService.findByUserId(userExist.id);

        if (!connection) {
          await connectionsService.create({
            socket_id,
            user_id: userExist.id,
          });
        } else {
          connection.socket_id = socket_id;
          await connectionsService.create(connection);
        }
      }

    await messagesService.create({
        text,
        user_id
    })
  });
});
