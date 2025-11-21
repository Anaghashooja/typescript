import React from "react";

function Exercise() {
    function multiply(a:number, b:number): number   {
        return a * b;
    } 
     const name:string[] = ["shooj","anju","anju"];
     name.push("asha");
     
     name.shift();
     name.unshift("father");
     let tuple1: [number, string, boolean];
     tuple1 = [25, "hello", true];
     console.log(tuple1);
     
    
    return (
        <div>
            <h1>Multiply Two Numbers</h1>
            <p>5 multiplied by 10 is: {multiply(5, 10)}</p>
            <p>names {name}</p>
        </div>
    );
        }
        export default Exercise;