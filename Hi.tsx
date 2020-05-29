import React from "react";
import classes from "./Hi.module.css";

type NameType={
    name:string
    surname:string
}

function Hi(props:NameType) {
    return <div className={classes.nameStyle}>
        <h2>{props.name} {props.surname}</h2>

    </div>
}


export default Hi;