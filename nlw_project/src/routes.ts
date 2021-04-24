/**
 * types of parameters
 * Routes params => Routing paramet
 * http://localhost:1337/settings/1
 * 
 * Query params => Filter and Search
 *  http://localhost:1337/settings/1?search=something
 * 
 * Body params => {
 * OBJECTS
 * }
 */

import { Router } from "express";
import { SettingsController } from "./controllers/SettingsController";
import { UsersController } from "./controllers/UsersController";
import { MessagesController } from "./controllers/MessagesController";

const routes = Router();

const settingsController = new SettingsController();
const usersController = new UsersController();
const messagesController = new MessagesController();

routes.post("/settings", settingsController.create);
routes.get("/settings/:username", settingsController.findByUserName);
routes.put("/settings/:username", settingsController.update);

routes.post("/users", usersController.create);

routes.post("/messages", messagesController.create);
routes.get("/messages/:id", messagesController.showByUser);

export { routes };
