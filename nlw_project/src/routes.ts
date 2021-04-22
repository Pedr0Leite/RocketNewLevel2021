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

const routes = Router();

const settingsController = new SettingsController();
const usersController = new UsersController();

routes.post("/settings", settingsController.create);
routes.post("/users", usersController.create);

export { routes };
