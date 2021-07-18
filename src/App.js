import "./App.css";
import React, { useEffect, useState } from "react";
import { CardList } from "./components/card-list/list";
import { SearchBox } from "./components/search-box/search-box.component";

function App() {
  const [listMonsters, setListMonsters] = useState([]);
  const [searchField, setSearchField] = useState("");

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => response.json())
      .then(user => setListMonsters(user))
      .catch(err => console.log(err));
  }, []);

  const handleChange = event => {
    setSearchField(event.target.value);
  };

  const filterMonsters = () => {
    console.log("davao");
    return listMonsters.filter(monster =>
      monster.name.toLowerCase().includes(searchField.toLowerCase())
    );
  };

  return (
    <div className="App">
      <SearchBox
        placeholder={"search monster"}
        handleChange={event => handleChange(event)}
      />
      <CardList listMonsters={filterMonsters()} />
    </div>
  );
}

export default App;
