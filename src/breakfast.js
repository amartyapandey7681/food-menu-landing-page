import { useState } from "react";

function Breakfast({d}){

    let data = d.filter((val)=>{

        return val.category === 'breakfast'
    })


    return <>
    <div className="whole">
    {data.map((val)=>{



        return <>
        <div  key={val.id} className="item">
            <img  src = {val.img} title = {val.title}/>
            <hr />
            <h3>{val.title}</h3>
            <h3>{val.price}</h3>
            <p>{val.desc}</p>
        </div>
        </>
    })}
    </div></>;
}
export default Breakfast;