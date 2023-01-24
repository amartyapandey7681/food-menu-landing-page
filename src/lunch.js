import { useState } from "react";
function Lunch({d}){

    let data = d.filter((val)=>{

        return val.category === 'lunch'
    })


    return <>
    <div className="whole">
    {data.map((val)=>{



        return <div  className="item" key={val.id}>
            <img src = {val.img} title = {val.title}/>
            <hr />
            <h3>{val.title}</h3>
            <h3>{val.price}</h3>
            <p>{val.desc}</p>
        </div>
    })}
    </div></>;
}
export default Lunch;