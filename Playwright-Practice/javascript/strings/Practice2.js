let str= "playwright play";
let count= {}

for (let ch of str){
    count[ch]=(count[ch] || 0)+1
}

console.log(count)


let count2 = [...str2].reduce((map, ch) => {
    map.set(ch, (map.get(ch) || 0) + 1);
    return map;
}, new Map());

console.log(count2);
/////////////////////////////////////////


//practicin the same 

/**
 * Take one character
       ↓
Have I seen this character before?
       ↓
    Yes       No
     ↓         ↓
 increment    start at 1
 * 
 */

 let str3= "omnamassivaya gutty"

 //create an empty js objt and intilize 
 let count4= {} // we use this object as dictionary , is it present not present. 
 //count ["p"]= 1
//{p:1}
 //to interace character by char, we started loop 
//we are using for of to iterate over value or items 
 for (let ch of str3){
    //console.log(ch)
    count4[ch]=(count4[ch] || 0)+1; 
    //count4 is a object, in side, it will store key o : value 1
    // we are fetching count4[m]= first time it say undefined nothing is there , so it will take right valud 0 and then add 1 
    // second time coun4[m] will return 1, so it use left value 1 and then add 1
    // we are assing this count to count4 [m]= so the number will be assinged to m= 2
//"Give me the existing count for this character. If there isn't one, use 0. Then add 1."
 }

 console.log(count4)
 

 //approch 2 

 let str4= "omnamassivaya gutty"

 //create an empty js objt and intilize 
 let count5= {} 
 for (let ch of str4){
    if (count5[ch]){
        count5[ch]++
    }else{
        count5[ch]=1
    }
 }

 console.log(count5)

 //third approch reduce() + map 
let str5= "omnamassivaya gutty"
let count6 =[...str5].reduce((map, cha)=>{
    map.set(cha, (map.get(cha)||0)+1)
    return map
}, new Map()) 

console.log(count6)

