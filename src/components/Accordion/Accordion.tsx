import React from "react";


type AccordionProps = {
    titleValue: string
    collapsed: boolean
}


function Accordion(props: AccordionProps) {
    if (props.collapsed === true ) {
        return <div> <AccordionHead title={props.titleValue}/></div>
    } else  {
        return <div> <AccordionBody title={props.titleValue}/>
            <AccordionBody title={props.titleValue}/>
        </div>
    }

}

type AccordionHeadProps = {
    title: string
}

function AccordionHead(props: AccordionHeadProps) {
    return <h3>{props.title}</h3>
}

function AccordionBody(props: AccordionHeadProps) {
    return <ul>
        <li>1</li>
        <li>2</li>
        <li>3</li>
    </ul>
}


export default Accordion;