import { useState } from "react";
import Body from "./component/Body/Body"
import Header from "./component/Header/Header"
import Footer from "./component/Footer/Footer";


function App() {
  const [redTime,setReadTime]=useState("")
  
  function handleAddToBookMark(time) {
    const PreviousReadTime = JSON.parse(localStorage.getItem("readTime"))
    if (PreviousReadTime) {
      const sum = PreviousReadTime + time;
      localStorage.setItem("readTime", sum);
      setReadTime(sum);
    }
    else {
      localStorage.setItem("readTime", time);
      setReadTime(time);
    }
  }





  return (
    <div className="App">
      <Header></Header>
      <Body handleAddToBookMark={handleAddToBookMark} redTime={redTime}></Body>
      <Footer></Footer>
    </div>

  )
}

export default App
