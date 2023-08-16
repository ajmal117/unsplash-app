import { useState } from "react";
import "./App.css";

function App() {
  const [value, setValue] = useState("");
  const [record, setRecord] = useState([]);

  const handleSubmit =  () => {
    fetch(
      `https://api.unsplash.com/search/photos/?client_id=ge_ibnzzKE2mOPqbhwfBO796f8pPw5XoJNywqRP7ljY&query=${value}&orientation=squarish`
    )
      .then((responce) => responce.json())
      .then((data) => {
        console.log(data);
        setRecord(data.results);
      });
  };

  return (
    <div className="App">
      <div className="myDiv">
        <span>Search </span>
        <input
          style={{ width: "55%" }}
          type="text"
          placeholder="write item name"
          onChange={(e) => setValue(e.target.value)}
        />
        <button onClick={() => handleSubmit()}>Find</button>
      </div>
      <div className="gallery">
        {record.map((item) => {
          return (
            <>
              <img className="item" key={item.id} src={item.urls.regular} alt='images'/>
            </>
          );
        })}
      </div>
    </div>
  );
}

export default App;
