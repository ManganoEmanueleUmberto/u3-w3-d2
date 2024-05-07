import { useParams } from "react-router-dom";

export const ADD_TO_FAVOURITES = "ADD_TO_FAVOURITES";
export const REMOVE_FROM_FAVOURITES = "REMOVE_FROM_FAVOURITES";
export const GET_JOBS = "GET_JOBS";
export const GET_COMPANY = "GET_COMPANY";

const baseEndpoint = "https://strive-benchmark.herokuapp.com/api/jobs?search=";

export const addToFavourites = (data) => {
  return {
    type: "ADD_TO_FAVOURITES",
    payload: data,
  };
};

export const removeFromFavorites = (companyId) => {
  return {
    type: "REMOVE_FROM_FAVOURITES",
    payload: companyId,
  };
};

export const getJobs = (data) => {
  return {
    type: GET_JOBS,
    payload: data,
  };
};
export const getCompany = () => {
  return async (dispatch) => {
    try {
      const params = useParams();
      const response = await fetch(baseEndpoint + params.company);
      if (response.ok) {
        const { data } = await response.json();
        dispatch({ type: GET_COMPANY, payload: data });
      } else {
        alert("Error fetching results");
      }
    } catch (error) {
      console.log(error);
    }
  };
};
