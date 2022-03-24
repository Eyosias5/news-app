import React, { useState } from "react";
import Card from "../../components/Card";
import { useMediaStack } from "../../hooks/useMediaStack";
const Home = () => {
  const { loading, data, search } = useMediaStack();

  const [searchWord, setSearchWord] = useState("");

  const handleChange = (e) => {
    setSearchWord(e.target.value);
    search(e.target.value);
  };

  return (
    <div className="border h-fit px-12 py-10">
      <input
        value={searchWord}
        onChange={handleChange}
        placeholder="Search..."
        className="border mb-5 rounded p-2 text-lg "
      />
      <div className="card-container py-8 border flex  justify-center h-fit min-h-[850px]">
        {loading ? (
          <p>Loading ... </p>
        ) : (
          <div className="flex flex-col gap-4 mx-8">
            {data.length === 0 && (
              <h2 className="text-gray-500">Sorry, Item is not found.</h2>
            )}
            {data.map((news, index) => (
              <a
                key={index}
                className="cursor-pointer "
                href={news.url}
                target="_blank"
                rel="noreferrer"
              >
                <Card
                  title={news.title}
                  image={news.image}
                  source={news.source}
                  date={news.published_at}
                >
                  {news.description}
                </Card>
              </a>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;
