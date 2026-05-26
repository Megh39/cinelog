import {
  searchMoviesTMDB,
  getMovieDetailsTMDB,
} from "../services/tmdbService.js";

export const searchMovies = async (req, res) => {
  try {
    const query = req.query.q;

    if (!query) {
      return res.status(400).json({
        success: false,
        message: "Query is required",
      });
    }

    const movies = await searchMoviesTMDB(query);

    res.status(200).json({
      success: true,
      results: movies,
    });
  } catch (error) {
    console.log(error);

    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

export const getMovieDetails = async (req, res) => {
  try {
    const { tmdbId } = req.params;

    const movie = await getMovieDetailsTMDB(tmdbId);

    res.status(200).json({
      success: true,
      movie,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};