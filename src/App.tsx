import React from 'react';
import logo from './logo.svg';
import './App.css';
import Accordion from "./components/Accordion/Accordion";
import {Rating} from "./components/Rating/Rating";

function App() {
  return (
    <div className="App">
      <input type={"date"}/>
      <input value ="to" type ="password"/>
      <HeadTitle title={'The App component'}/>
      <HeadTitle title={''}/>
      <Accordion titleValue={'Menu'} collapsed={false}/>
      <Accordion titleValue={'Users'} collapsed={false}/>
      <Rating value={1}/>
      <Rating value={2}/>
      <Rating value={3}/>
      <Rating value={4}/>
      <Rating value={5}/>
      <Rating value={6}/>
    </div>
  );
}

type PageTitleProps = {
    title: string
}

function HeadTitle(props: PageTitleProps) {
    return <h1>{props.title}</h1>
}

export default App;


