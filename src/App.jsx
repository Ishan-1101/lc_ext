import React from "react";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Contest from "./Components/Contest";
import './Style/App.css';

function App() {
  const [contest, setContest] = React.useState([]);

  const fetchData = async () => {
    const response = await fetch("https://kontests.net/api/v1/leet_code")
    const data = await response.json()
    console.log(data)
    setContest(data)
  }

  React.useEffect(() => {
    fetchData()
  }, [])

  return (
    <div className="main-wrapper">
      <Header />
      <div className="main-page">
        {contest.map((data) => {
          return (
            <div className="contest-wrapper" key={data.start_time}>
              <Contest name={data.name} url={data.url} starts_in={data.in_24_hours}/>
            </div>
          )
        })}
      </div>
      {/* <Footer /> */}
    </div>
  );
}

export default App;