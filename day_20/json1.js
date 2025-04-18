/*//js object 
let obj1={
    "name":"Pratiksha",
    "age":20,
    "city":"New York",
}

// convert js object to json
let json1=JSON.stringify(obj1);

console.log(obj1);
console.log(json1);

// convert js object to json
let json2='{"name":"Prati","age":30,"city":"New York"}';
let obj2 = JSON.parse(json2);
console.log(obj2);
console.log(json2); */
/*
const json1={
    "name":"Pratiksha",
    "age":20,
    "city":"New York",

} 
// json formate
console.log(JSON.stringify(json1));

// json format of array

const json_list=[1,2,3,4,5,6,7,8,9,10]
console.log(JSON.stringify(json_list));

const json_list2=[
    {"name":"Patu","age":30,"city":"New York"},
    {"name":"Janju","age":30,"city":"New York"},
]
console.log(JSON.stringify(json_list2));

/*

//nested jeson 

const nested_object={
    "name":"Prati",
    "age":30,
    "city":"New York",
    "skills":["Javascript","Python","Java"],
    "address":{
        "street":"123 Main St",
        "City":"Any town",

    }
};
let nested_json=JSON.stringify(nested_object);
console.log(nested_json);


// accessing data from json object
console.log(nested_object.name);
console.log(nested_object["age"]);


/*

// fake api to featch data

async function featchData() {
    const response =await fetch(`https://jsonplaceholder.typicode.com/users/1`)
    const data= await response.json();
    console.log(data);
    console.log(data.name);
    console.log(data.company.name);
    console.log(data.address["street"]);

    //featch the keys ,values, entries only 
    console.log(Object.keys(data));//key of the object
    console.log(Object.values(data)); // values of the object
    console.log(Object.entries(data)); // entries(key-value)of the object



    
}
featchData();  */

/*
const json3={
    "nav":"Pratiksha",
    
    "city":"kasegaon",


}

const json2={
    "name":"Pri-sha",
    "age":200,
    "gav":"New York",


}
console.log(json3);
console.log(json2);



//merge
//const merged_json=Object.assign(json3,json2);
//const merged_json={...json3,...json2}
//console.log(merged_json);

// add json properties

json3.name="sona";
json1["gav"]=json2.name;

// delete json3 
delete json2.gav;
delete []


*/


//iterate the json object 

const user={
    "name":"Pri-sha",
    "age":200,
    "gav":"New York",
    "skills":["javascript","python","java"],


}
/*
//for(let key in json1);
console.log(json1);

for(let key in json1){
    console.log(key+" : "+json1[key]);
}

Object.keys(json1).forEach(key =>{
    console.log(key+" : "+json1[key]);

});

Object.values(json1).forEach(value =>{
    console.log(value);

});

Object.entries(json1).forEach(key =>{
    console.log(key+" : "+json1[key]);

});

*/

// destrucuring the object

const {name,age}=user;
console.log(name);
console.log(age);;
//console.log(gav);
//console.log(skills);


//destructing and renaming the object

const{name:userName , age:userAge}=user;
console.log(userName);



//destructing and adding default value to the object

const{country="India"}=user;
console.log(country);

console.log(user);



