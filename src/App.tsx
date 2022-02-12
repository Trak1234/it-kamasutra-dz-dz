import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import Accordion from "./components/Accordion/Accordion";
import {Rating} from "./components/Rating/Rating";
import Body from './components/dz1/Body';
import NewComponent from "./components/dz1/NewComponent";
import {Button} from "./components/dz1/Button";

export type student = {

}

export const students = [
    {id: 1, name: "James", age: 8},
    {id: 2, name: "Robert", age: 18},
    {id: 3, name: "John", age: 28},
    {id: 4, name: "Michael", age: 38},
    {id: 5, name: "William", age: 48},
    {id: 6, name: "David", age: 58},
    {id: 7, name: "Richard", age: 68},
    {id: 8, name: "Joseph", age: 78},
    {id: 9, name: "Thomas", age: 88},
    {id: 10, name: "Charles", age: 98},
    {id: 11, name: "Christopher", age: 100},
]

export const topCars = [
    {id: 1, manufacturer:'BMW', model:'m5cs'},
    {id: 2, manufacturer:'Mercedes', model:'e63s'},
    {id: 3, manufacturer:'Audi', model:'rs6'}
]




const Clickk= (name:string) => {
    // if( name == 'Vasya') {
    //     console.log('Vasya')
    // } else if (name == 'Ivan') {
    //     console.log('Ivan')
    // }
    console.log(name);
}

// const Clickk2= () => {
//     console.log('Ivan');
// }


const Butoon1Foo = (subscriber:string, age:number, addres:string) => {
    return (
        console.log(subscriber, age, addres)
    )
}

const Butoon2Foo = ( subscriber:string) => {
    return (
        console.log(subscriber)
    )
}

const Butoon3Foo = () => {
    return (
        console.log('im stupid button')
    )
}

let [a, setA] = useState(1)

const onClickHundler = ()=>{
    setA(++a)
    console.log(a)
}



const unClick = () => {
    return setA(0)
}



function App() {

    const [money, setMoney] = useState([
        { banknots: 'Dollars', value: 100, number: ' a1234567890' },
        { banknots: 'Dollars', value: 50, number: ' z1234567890' },
        { banknots: 'RUBLS', value: 100, number: ' w1234567890' },
        { banknots: 'Dollars', value: 100, number: ' e1234567890' },
        { banknots: 'Dollars', value: 50, number: ' c1234567890' },
        { banknots: 'RUBLS', value: 100, number: ' r1234567890' },
        { banknots: 'Dollars', value: 50, number: ' x1234567890' },
        { banknots: 'RUBLS', value: 50, number: ' v1234567890' },
    ])







    return (

    <div className="App">
        <h1>{a}</h1>
        <button onClick={onClickHundler}>number</button>
        <button onClick={unClick}>0</button>
      {/*<input type={"date"}/>*/}
      {/*<input value ="to" type ="password"/>*/}
      {/*<HeadTitle title={'The App component'}/>*/}
      {/*<HeadTitle title={''}/>*/}
      {/*<Accordion titleValue={'Menu'} collapsed={false}/>*/}
      {/*<Accordion titleValue={'Users'} collapsed={false}/>*/}
      {/*<Body title={'New Body'}/>*/}
      {/*<NewComponent topCars={topCars} />*/}
      {/*  <button onClick={(event)=>{alert('Hello')}}>MyYoutubeChannel-1</button>*/}
      {/*  <button onClick={(event)=>Clickk('Vasya')}>name</button>*/}
      {/*  <button onClick={(event)=>Clickk('Ivan')}>name</button>*/}
        <Button name={'MyYoutubeChanel-l'} callback={()=>Butoon1Foo('im Vasya', 21, 'live in Minsk')}/>
        <Button name={'MyYoutubeChanel-2'} callback={()=>Butoon2Foo('im Ivan')}/>
        <Button name={'MyYoutubeChanel-3'} callback={Butoon3Foo}/>


      {/*<Rating value={1}/>*/}
      {/*<Rating value={2}/>*/}
      {/*<Rating value={3}/>*/}
      {/*<Rating value={4}/>*/}
      {/*<Rating value={5}/>*/}
      {/*<Rating value={6}/>*/}
    </div>
  );
}
export default App;
{/*type PageTitleProps = {*/}
{/*    title: string*/}
{/*}*/}

{/*function HeadTitle(props: PageTitleProps) {*/}
{/*    return <h1>{props.title}</h1>*/}
{/*}*/}

{/*export default App;*/}


