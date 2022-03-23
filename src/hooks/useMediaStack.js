import { useEffect, useState } from "react";
import api from "../api";

export const useMediaStack = () => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState(null);
  const [filteredData, setFilteredData] = useState([]);

  const fetchNews = async () => {
    api({ method: "GET" })
      .then(({ data }) => {
        setData(data.data);
        setFilteredData(data.data);
        setLoading(false);
      })
      .catch((err) => console.error(err));
  };

  const search = (text) => {
    if (text.length === 0) {
      setFilteredData(data);
    } else {
      const filteredData = data.filter((news) => {
        return news.title.toLowerCase().includes(text.toLowerCase());
      });
      setFilteredData(filteredData);
    }
  };

  useEffect(() => {
    fetchNews();
  }, []);
  return { loading, data, search, filteredData };
};
