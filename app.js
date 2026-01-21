import express from "express";
import moviesRouter from "./routers/movies.js";
import errorHandler from "./middlewares/errorHandler.js";
import notFound from "./middlewares/notFound.js";

const app = express();
const port = process.env.SERVER_PORT;


app.use("/api/movies", moviesRouter)

app.use(errorHandler);
app.use(notFound);

app.listen(port, (error) => {
    if (error) {
        console.log(error);
    } else {
        console.log(`Example app listening on port ${port}`);
    }

})