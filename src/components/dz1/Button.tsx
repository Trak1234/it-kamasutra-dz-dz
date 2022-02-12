import React from 'react';


type ButtonTypeProps ={
    name: string
    callback: () => void
}

export const Button = (props: ButtonTypeProps) => {
    const onClickHandler = () => {
        props.callback()
    }
    return (
        <div>
            <button onClick={(onClickHandler)}>{props.name}</button>

        </div>

    )
}