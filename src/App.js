import React from 'react';
//import logo from './logo.svg';
import './App.css';
//import Potato from './Potato';


function Potato({name, picture}) {
  //console.log({name}{image});
  return (
    <div className="family-list">
      <h2>{name}</h2>
      <img src={picture} />
    </div>
  );
}


//array 함수
const familyName = [
  {
    name: "Jintae kim",
    image:
      "https://search.pstatic.net/common/?src=http%3A%2F%2Fimgnews.naver.net%2Fimage%2F082%2F2019%2F08%2F09%2F0000931264_001_20190809212814986.jpg"
  },
  {
    name: "Nayoung huh",
    image:
      "https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAxODAzMDJfMTg3%2FMDAxNTE5OTk2OTA1ODc0.L7CttHXT60962LWh7udJkMXWENdDAcU4OHq-q9TkLxkg.3huviaM3gC6M6wYTPSe8jYcdLs5xjT4RLiBS4rYKM2Yg.JPEG.foriman3%2F%25B6%25F3%25BA%25D52_00004.jpg"
  },
  {
    name: "Jiwoo kim",
    image:
      "https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAxNjEyMDVfMTQ0%2FMDAxNDgwODcxMTgyMDY5.RsvPnnzCMxuLixs2jQq2gZzVqcLIvXpIUaJcPoU_zhsg.gYYK3iCgCFntkhdMJWoFUxuePVQQVTihlryzpN6U4p8g.JPEG.myvely828%2F%25C4%25E1%25BC%25F8%25C0%25CC120582.jpg"
  }
]

function App() {
  return (
    <div className="App">
      <h1>Jintae family</h1>
      {familyName.map(dish => (
        <Potato name={dish.name} picture={dish.image} />
      ))}
      {/* <Potato 
        fav="jiwoo"
        age="5"
      />

      <Potato 
        fav="nayoung" 
        age="45"
      />

      <Potato 
        fav="jintae" 
        age="45"
      /> */}
    </div>
  );
}

export default App;
