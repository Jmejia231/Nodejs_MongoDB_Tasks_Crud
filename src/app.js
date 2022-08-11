import express from "express";
import { create } from "express-handlebars";
import indexRoutes from "./routes/index.routes";
import res from "express/lib/response";
import path from "path";
import morgan from "morgan";

const app = express();

//Localizar la Carpeta Views
app.set("views", path.join(__dirname, "views"));

//Motor de Plantilla que se esta Utilizando
app.engine(
  ".hbs",
  create({
    layoutsDir: path.join(app.get("views"), "layouts"),
    partialsDir: path.join(app.get("views"), "partials"),
    defaultLayout: "main",
    extname: ".hbs",
  }).engine
);

//Utilizar Layout de Motor de Plantilla
app.set("view engine", ".hbs");

//middlewares
app.use(morgan("dev"));
app.use(express.urlencoded({ extended: false }));

//Routes
app.use(indexRoutes);

//static files
app.use(express.static(path.join(__dirname, "Public")));
export default app;
