//  function palin(str){
//     var palind = true;
//     var len = str.length
//     for(let i=0;i<=len/2;i++){
//         if(str[i] !== str[len-i-1]){
//             palind = false;
//             break;
//         }
//         console.log(i);
//     }
//     return palind;

//  }

// console.log(palin(" "));

// for(let i = 0; i < 5; i++) {
//     setTimeout(function() { console.log(i);}, i * 1000);
// }

// function doSetTimeout(i) {
//     setTimeout(function() { console.log(i); }, 100);
//   }
  
//   for (var i = 1; i <= 2; ++i)
//     doSetTimeout(i);

// var num = 10;
// console.log(0/0);

// var number=20004;  
// var num2 =10;
// if(number.toString() === "10") 
// console.log(num2.toExponential(2));  
// else  
// // console.log("f");
// console.log(number.toPrecision(5));   


// var string1 = "40";  
// var num=50.45;  
// console.log(string1 + num);


// var text ="testing: 1, 2, 3";  
// var pattern =/\d+/g//;
// if(text.equals(pattern))
// console.log("true");
// else
// console.log("false");


// const car = { make: 'Honda', model: 'Accord', year: 1998 };
// const a = [1,2,3,4];
// console.log(2 in a); // should be index no and not data i.e 0-3 index
// expected output: true

// delete car.make;
// if ('make' in car === false) {
//   car.make = 'Suzuki';
// }
// console.log(car.make);


// function display1(option)  
// {  
//     return(option ?  "true" :  "false");  
// }  
//     var ans = true;  
// console.log(display1(ans));  


// var  obj=  
// {  
//     length:20,  
//     height:35,  
// }  
// if('breadth' in obj === false)   
// {  
//     obj.breadth = 12;  
// }  
   
// console.log(obj.breadth);
// console.log(obj);



// function height()  
// {     
// var  height=123.56;  
// var type =(height>=190)?"Taller":"Little short";  
// return type;  
// }
// var response = height();
// console.log(response);


// function outputfun(object)  
// {  
//     console.log(object);
//     var place=object ?object.place: "Italy";  
//     return "clean:"+ place;  
// }  
// console.log(outputfun({place: "India"}));


// console.log(Math.abs(-7.25));
// console.log(Math.cbrt(792)); //cube root
// console.log(Math.acos(0.5)); // inverse cosine range -1 to 1

// console.log("one">"8");

// console.log(8 !== 8);

// var a,b;
// console.log(a===b);

// function displayArray(x)  
//     {  
//         var len=x.length,i=0;  
//             if(len==0)  
//                 // console.log(x);
//                 console.log("empty");  
//             else  
//             {  
//             do  
//             {  
//                 console.log(x[i]);
//                 console.log("Not empty"); 
//             } while (++i<len);  
//             }  
//     }
//     var a = [ ];
// displayArray(a);  

// function fun(o)  
// {  
// for(;o.next; oo =o.next);  
// return o;  
// }  
// var a = [12,11,11,1]
// console.log(fun(a));

// {
//     out:
//     for(var i=1; i<=5; i++)
//     {
//       console.log("outer");
//       for(var j=1; j<=5; j++)
//       {
//         console.log("nested");
//         if(j==2)
//         {
//         // continue; this will skip second(j==2) iteration of inner for loop only
//         continue out; // this will skip current iteration of both for loops
//         }
//       }
//     }
// }

// {
// first:
// for (var i = 1; i < 5; ++i) {

//   // inner loop
//   for (var j = 1; j < 5; ++j) {
//     if (i == 3 || j == 2)
//       // skips the current iteration of outer loop
//       continue first;

//     console.log("i = " + i + "; j = " + j);
//   }
// }
// }

// var a=0;  
// var b =0;  
// while (a <3)  
// {  
//     a++;  
//     b += a;  
//     console.log(b);  
// }

// var size=5;  
// var x=5;  
// var size=7;  
// for(var j=size;j>=0;j--)  
// {  
//     console.log(x);  
//     x=x-2;  
// } 

// function fun(a){  
//     if(0===undefined)  
//         debugger;  
//         console.log("inside")
      
// } 

// console.log(fun(0));

// const obj ={prop:12};  
// Object.preventExtensions(obj);  
// console.log(Object.isExtensible(obj)); 

// const obj1 ={ property1:'15'};  
// const obj2 =Object.freeze(obj1);  
// obj2.property1='20';  
// console.log(obj2.property1); 

// const object1 ={  
//     property1:20  
//   };  
//   console.log(Object.is(object1)); 

// const obj1 =  
// {  
//     property1:21  
// }  
// const descriptor1 =Object.getOwnPropertyDescriptor(obj1,'property1');  
// console.log(descriptor1.configurable);  
// console.log(descriptor1.enumerable); 

// const object1 ={};  
// a = Symbol('a');  
// b =Symbol.for('b');  
// object1[a]='harry';  
// object1[b]='derry';  
// const objectSymbols=Object.getOwnPropertySymbols(object1);  
// console.log(objectSymbols.length);


// o = {x:1, y:{z:[false,null,""]}};   
// s = JSON.stringify(o);   //Object to String
// p = JSON.parse(s);       //String to Object

// var article = {  
//     "main title": "How to learn JavaScript",   
//     'sub-title': "The Definitive Guide",   
//     "for": "all audiences",   
//     author: {   
// firstname: "Scott",   
//                surname: "McCall"   
//             }  
//  }
//  console.log(article); 


// var a =[];  
// a.unshift(5); //Add element at the start 
// a.unshift(22);  
// a.shift();  //Delete element from the start
// a.unshift(3,[4,5]);  
// a.shift();  
// a.shift();  
// a.shift();
// a.unshift(1);
// console.log(a);


// var sum=0;   
// var arr=[101,150,201,30];  
   
// arr.forEach(function myFunction(element)  
// {  
//     sum=sum+element; 
// }); 

// console.log(sum);


// var arr=[4,3,2,1];  
// var rev=arr.reverse();
// console.log(arr);


// var values=[4,5,6,7]  
// var ans=values.slice(1);
// console.log("values: "+values);  
// console.log("answer: "+ans);

 
// var fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
// var myBest = fruits.slice(-3, -1);
// console.log("fruits: "+fruits);
// console.log("answer: "+myBest);


// var x1 =[,,,];  
// var x2 =new Array(10);
// x2 = [1,2];  
// console.log(0 in x1);
// console.log(0 in x2);   



// var arr=[4,3,,1];    
//   for(i=0;i<4;i++){  
// console.log(arr[i]);  
// }



// function printprops(o)  
// {  
// for(var a in o)  
// console.log(a+": "+ o[a]+"\n");  
// }

// var arr = [5,4,1,2];
// printprops(arr);



// var arr=[1, 33, 5, 8 ,11];  
// var value =Math.max.apply(null,arr);
// console.log(value);


// var person =  
// {  
//       name: "James",  
// getName:function()  
// {  
// return this.name;  
// }  
// }  
// var unboundName=person.getName;  
// console.log(unboundName());
// var boundName=unboundName.bind(person);
// console.log(boundName());  



// function code(id,name)  
// {  
//         this.id= id;  
//         this.name= name;  
// }  
// function pcode(id,name)  
// {  
//         code.call(this.id,name);  
// }  
// console.log(new pcode(004,"James Deo").id); 



// var pow=new Function("num1","num2","return Math.pow(num1,num2)");  
// console.log(pow(2,3));  


// function constfun()  
// {  
// var fun =[];  
// for(var i=0;i<=10;i++){  
//         fun[i]=function(){return i;};
// }          
// return fun;  
// }  
// var fun =constfun();  
// console.log(fun[0]());  


// var tensquared=(function(x){return x*x;}(10)); //function without name bt work perfectly fine
// console.log(tensquared);



// var string2Num=parseInt("123abc"); 
// console.log(string2Num);



// var obj1,obj2;
// console.log(obj1);
// console.log(!!(obj1 && obj2));
// console.log((obj1 && obj2)); 



// var addition=new Function("number1","number2","return number1+number2");
// console.log(addition(10,5));  



// var scope ="global scope";  
// console.log(scope); // global scope
// console.log(checkingscope()()); //local scope
// function checkingscope()  
// {  
// var scope ="local scope";  
// function f()  
// {  
// return scope;  
// }  
// return f;  
// }



// const obj1 =  
// {  
//     a:10,  
//     b:15,  
//     c:18  
// };  
// console.log(obj1.c, obj1.d, obj1.a);
// const obj2 =Object.assign(obj1,{c:7, d:1});  //assign(target, source);
// console.log(obj2.c, obj2.d, obj2.a); 
// console.log(obj1.c, obj1.b, obj1.a);


// console.log(20+30+"10");

// console.log(navigator.appVersion);
  

// a=5;
// console.log(a);


// var a = [1,2,3,4,5];
// var b = ["hh","jj","sdf"];
// for(var i=0;i<b.length;i++){
//     console.log(b[i]);
// }