import React, { useMemo, useState } from "react";
import { useLocation } from "react-router-dom";
import CardItem from "./CardItem";
import "./Home.css";
import { Button, Dropdown } from "react-bootstrap";

const Home = () => {
  const [articles, setArticles] = useState([]);
  const [filter, setFilter] = useState("");
  const [sort, setSort] = useState("");

  const { state } = useLocation();

  const fetchData = async () => {
    const url = "https://jsonplaceholder.typicode.com/users";
    let data = await fetch(url);
    let cardData = await data.json();
    setArticles(cardData);
  };

  const filteredNotes = useMemo(() => {
      return articles.filter((e) => {
        return (filter === "" ||
            e.username.toLowerCase().includes(filter.toLowerCase())
        ) 
  })}, [articles, filter]);

  function compare( a, b ) {
      if ( a.username < b.username ){
          return -1;
    }
    if ( a.username > b.username ){
        return 1;
    }
    return 0;
}
const handleSort = () => {
    filteredNotes.sort(compare)
    setSort("Sorted")
}

  const handleSortReverse = () => {
    filteredNotes.reverse(compare)
    setSort("Sorted Reverse")
  }


  return (
    <div>
      <h1 className="my-5">Welcome {state.name}</h1>
      <div className="rowinput">
        <span>
          <div className="d-grid mx-5 gap-2">
            <Button onClick={fetchData} variant="info" size="lg">
              Fetch Data
            </Button>{" "}
          </div>
          <input id='myFilter' value={filter} onChange={(e) => setFilter(e.target.value)} className="filter" type="text" placeholder="Filter According To UserName" />
          <Dropdown className="my-1">
            <Dropdown.Toggle variant="danger" id="dropdown-basic">
              Sort Cards
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item defaultValue={sort} onClick={handleSort}>Sort A-Z</Dropdown.Item>
              <Dropdown.Item defaultValue={sort} onClick={handleSortReverse}>Sort Z-A</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </span>
      </div>

      <div className="mx-5 mt-5">
        <div className="row">
          {filteredNotes.map((e) => {
            return (
              <div key={e.id} className="col-md-4 my-1">
                <CardItem
                  name={e.name}
                  username={e.username}
                  email={e.email}
                  address={e.address}
                  phone={e.phone}
                  website={e.website}
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Home;
