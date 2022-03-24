import debounce from "lodash.debounce";
import { useCallback, useEffect, useState } from "react";
import api from "../api";

export const useMediaStack = () => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState(null);

  const fetchNews = async () => {
    api({ method: "GET" })
      .then(({ data }) => {
        setData(data.data);
        setLoading(false);
      })
      .catch((err) => console.error(err));
  };

  const search = useCallback(
    debounce((value) => {
      api({
        method: "GET",
        params: {
          keywords: value,
        },
      })
        .then(({ data }) => {
          setData(data.data);

          setLoading(false);
        })
        .catch((err) => console.error(err));
    }, 500),
    []
  );

  useEffect(() => {
    fetchNews();
  }, []);
  return { loading, data, search };
};
