import { useState, useEffect } from "react"
export default function CountButton(){
    let [countOne, setCountOne] = useState(0) //count1
    let [countTwo, setCountTwo] = useState(0) //count2
    const [backgroundColor, setBackgroundColor] = useState("#fff");

    function handleCountOne(){
        setCountOne(countOne + 1)
        setBackgroundColor("#FF0000");   
    }
    function rollOverCountOne(){
        if(countOne >10){
            setCountOne(0)
        }
    }
    function handleCountTwo(){
        setCountTwo(countTwo + 2)
        setBackgroundColor("#00FF00");
    }
    function rollOverCountTwo(){
        if(countTwo >10){
            setCountTwo(0)
        }
    }
    useEffect(rollOverCountOne, [countOne])
    useEffect(rollOverCountTwo, [countTwo])
    
    return(
        <div style={{ backgroundColor: backgroundColor }}>
        <button onClick={handleCountOne}>+1</button>
        <div>{countOne}</div>
        <button onClick={handleCountTwo}>+2</button>
        <div>{countTwo}</div>
        </div>
    )
}