import React from "react";
import "./Main.scss";
import { useEffect, useState } from "react";
import axios from "axios";
import Modal from "../Components/Modal/Modal";
import { BASE_URL } from "../utils/constants";
import Card from "../Components/Card/Card";

const Main = () => {
  const [article, setArticle] = useState();
  const [modalData, setmodalData] = useState();
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredArticles, setfilteredArticles] = useState();

  useEffect(() => {
    Articles().then((res) => setArticle(res));
  }, []);

  async function Articles() {
    const response = await axios.get(
      `${BASE_URL}/customers/resources/articles/list?page=1&limit=10`
    );
    return response.data.data;
  }

  async function fetchSlugData(slug) {
    const response = await axios.get(`${BASE_URL}/blogdetail/${slug}`);
    setmodalData(response.data.blog);
  }

  const handleClick = (slug) => {
    fetchSlugData(slug);
  };

  const handleSearch = (event) => {
    setSearchQuery(event.target.value);
  };

  useEffect(() => {
    const filterdata = article?.filter((item) =>
      item.title.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setfilteredArticles(filterdata);
  }, [searchQuery]);

  return (
    <div className="main">
      <div className="header">
        <h1>
          {filteredArticles
            ? `Search results for:${searchQuery}`
            : "All articles"}
        </h1>
        <div className="input">
          <input
            type="text"
            placeholder="Search articles"
            value={searchQuery}
            onChange={handleSearch}
          />
          <i className="fa-solid fa-magnifying-glass fa-lg"></i>
        </div>
      </div>
      <div className="articles">
        {filteredArticles
          ? filteredArticles?.map((element) => {
              return (
                <div key={element.id} onClick={() => handleClick(element.slug)}>
                  <Card
                    image={element.thumb}
                    title={element.title}
                    description={element.short_description}
                  />
                </div>
              );
            })
          : article?.map((element) => {
              return (
                <div key={element.id} onClick={() => handleClick(element.slug)}>
                  <Card
                    image={element.thumb}
                    title={element.title}
                    description={element.short_description}
                  />
                </div>
              );
            })}
      </div>
      <Modal
        image={modalData?.thumb}
        title={modalData?.title}
        description={modalData?.body}
      />
    </div>
  );
};

export default Main;
