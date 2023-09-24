const {log}=console;
log("Grouping Array Elements");

// for using group, groupToMap method we have to use core-js for chrome browser

const MY_EATABLES=[
    {food:"🍆",type:"Vegetables",count:1},
    {food:"🍋",type:"Fruits",count:1},
    {food:"🍅",type:"Vegetables",count:3},
    {food:"🥚",type:"Non-Vegs",count:5},
    {food:"🍗",type:"Non-Vegs",count:4},
    {food:"🥒",type:"Vegetables",count:1},
    {food:"🐡",type:"Non-Vegs",count:3},
    {food:"🥭",type:"Fruits",count:4},
    {food:"🥑",type:"Fruits",count:1},
]

// const grouped=MY_EATABLES.group((item)=>{
//     return item.type;
// });

// log(grouped);

// const groupedByCount=MY_EATABLES.group((item)=>{
//     return item.count>1?"On-Track":"Needs-Improvement";
// })

// log(groupedByCount);

const grouped=MY_EATABLES.groupToMap((item)=>{
    return item.type;
})

// log(grouped);  //it will return map object
const vegetablesItem=grouped.get("Vegetables")
const fruitsItem=grouped.get("Fruits")
log(vegetablesItem);
log(fruitsItem);