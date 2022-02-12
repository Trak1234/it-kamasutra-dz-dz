import React from 'react';

type topCarsType = {
    topCars: Array<{
        id: number,
        manufacturer: string,
        model: string
    }>
}


type PropsType = {
    students: Array<{
        id: number,
        name: string,
        age: number
    }>

}

// type PropsType2 = {
//     students: Array<StudentProps2>
// }
//
// type StudentProps2 = {
//     id: number,
//     name: string,
//     age: number
// }

const NewComponent = (props: topCarsType) => {

    return (

        <table>
            <tbody>
            {props.topCars.map((TopCarsMapType, index) => {
                return (
                    <tr key={index}>
                        <td><span>{TopCarsMapType.manufacturer}{TopCarsMapType.model}</span>
                            </td>
                    </tr>
            )
            })}
            </tbody>


            </table>


            )
            }


                export default NewComponent;


