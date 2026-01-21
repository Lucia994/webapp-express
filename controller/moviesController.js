import connection from "../database/dbConnection.js";



function index(req, res, next){
    const query = "SELECT * FROM `movies`";

    connection.query(query, (err, result) => {
        if(err) return next(err);
        return res.join({
            results: result,
        });
    });

}

function show(req, res, next){
    const id = req.params.id;
    const query = "SELECT * FROM `movies` WHERE `id` = ?";

    connection.query(query, [id], (err, results)=> {
        if(err) return next(err);

        if(results.length === 0){
            res.status(404);
            return res.json({
                error: "NOT FOUND",
                message: "Movie not found"
            });
        }
        const movie = results[0];

        const reviewsQuery = "SELECT * FROM `reviews` WHERE  `movies_id` = ?"

        connection.query(reviewsQuery, [id], (err, reviewsResult) =>{
            if (err) return next(err);
            res.json({
                ...movie,
                reviews: reviewsResult,
            });
        })
    });

}

const moviesController =  {index, show};
export default moviesController; 

