const service = require("./theaters.service");
const asyncErrorBoundary = require("../errors/asyncErrorBoundary");

async function list(request, response) {
  // TODO: Add your code here

  // This is available from the movies router from using mergeParams:true
  const movieId = Number(request.params.movieId);
  
  // If there is a movieId list only theaters for that movie
  // Otherwise list all theaters
  if(movieId) {
    const data = await service.listMovie(movieId);
    response.json({ data });
  } else {
    const data = await service.list();
    response.json({ data });
  }
}

module.exports = {
  list: asyncErrorBoundary(list),
};
