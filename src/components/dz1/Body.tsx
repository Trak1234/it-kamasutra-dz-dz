import React  from 'react';

type BodyType = {
    title: string
}


const Body = (props:BodyType)=> {
    return (
            <div>
                Hello{props.title}
            </div>
        );

}


export default Body;