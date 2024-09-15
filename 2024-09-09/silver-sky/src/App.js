import React, { useState } from "react"
import "./App.css"
import Name from "./components/Name"
import Counter from "./components/Counter"
import PropDrilling from "./components/PropDrilling"
import Show from "./components/Show"
import Context from "./components/Context"


function App() {
  const [show, setShow] = useState(true)

  const toggleShow = () => setShow(prevShow => !prevShow)

  const pic1 = {
    name:"Flowers",
    src:"/2.jpg",
    imageSize:90,
  };

  const people = [
    { title: 'ME', is: true, id: 1 },
    { title: 'YOU', is: false, id: 2 },
    { title: 'US', is: true, id: 3 },
  ];

  const listItems = people.map(people =>
    <li
      key={people.id}
      style={{
        color: people.is ? 'magenta' : 'darkgreen'
      }}
    >
      {people.title}
    </li>
  );

  return (
    <>
      <Context />
      <Show
        show={show}
        toggleShow={toggleShow}
      />
      <PropDrilling />
      <Counter />
      <Name title="Egle" />
      <Name />
      <img
        className="avatar"
        src={"2.jpg"}
        alt={'Photo of ' + pic1.name}
       />
      <ul>{listItems}</ul>
    </>
  )
}

export default App