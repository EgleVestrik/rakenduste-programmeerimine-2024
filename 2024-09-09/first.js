const arr=[1,2,3,4,5,6];
//prindi suuremad kui 4
const filteredArray=arr.filter((element) => element > 4);

//node first.js

//console.log({filteredArray}); //sama asi key : value
//console.log({filteredArr: filteredArray}); //sama asi key : value
//console.log(filteredArray);

//
const names = ["annie","Peeter","Mati","Juku"];

//map jookseb listist läbi
const objectifiedNames = names.map((name) =>{
    return{
        name: name,
        age: name.length+name.length,
        email:name+"@gmail.com",
        aadress:name+"pa"+" Street",
        username:name.split("").reverse().join(""),
    };
});

//console.log({List_of_names:objectifiedNames});

let egle = {
    name:"Egle",
    school: "TLÜ",
    birthday: 17.10,     
}
//...et kõik jääks alles ja saaks juurde lisada, muidu kirjutab üle
egle={...egle,height:174}

//console.log({egle});

//mis vahe on == ja ===
console.log(1=="1"); //true
console.log(1==="1"); //false


//MYPROMISE
const myPromise = () =>{
    return new Promise((resolve)=>setTimeout(()=>resolve("done"),1000));
}

const runPromise = async () => {
    console.log(await myPromise());
};

runPromise();