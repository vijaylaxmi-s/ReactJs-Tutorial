import { useEffect, useState } from "react";
import axios from 'axios'; 

axios.defaults.baseURL = "http://localhost:4000";

export const useMyAxios = (axiosParams) => {
  const [response, setResponse] = useState([]);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    processRequest(axiosParams);
  }, []); // execute only once

  const processRequest = async (params) => {
    try {
      const result = await axios.request(params);
      setResponse(result.data);
      console.log("useMyAxios : Result : ", result.data);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  return{response, error, loading};

};
