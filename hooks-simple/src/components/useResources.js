import { useState, useEffect } from 'react';
import axios from 'axios';

const useResources = (resource) => {
  const [resources, setResources] = useState([]);

  // const fetchResource = async (resource) => {
  //   const response = await axios.get(`https://jsonplaceholder.typicode.com/${resource}`);
  //   setResources(response.data);
  // }

  useEffect(() => {
    (async (resource) => {
      const response = await axios.get(`https://jsonplaceholder.typicode.com/${resource}`);
      setResources(response.data);
    })(resource);
  }, [resource]);
  // defining and running the function at the same time

  // =
  // useEffect(() => {
  //   fetchResource(resource)
  // }, [resource]);

  // useEffect(() => {}, ['posts'])
  // or
  // useEffect(() => {}, ['todos'])
  // if !=, then execute the function
  // else nothing

  // useEffect(() => {}, [])
  // = to componentDidMount()

  // useEffect(() => {}, [{ color: 'red'}])
  // = called again if rerender,
  // as objects are not equal in memory

  return resources;
};

export default useResources;