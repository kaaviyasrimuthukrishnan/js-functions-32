//Functions
//Add
let num1=6;
let num2=8;
let result;
function fun(num1,num2)
{
result=num1+num2;
return result;
}
result=fun(num1,num2);
console.log(result);
//output:14


//Sub
let num1=8;
let num2=6;
let result;
function fun(num1,num2)
{
result=num1-num2;
return result;
}
result=fun(num1,num2);
console.log(result);
//output:2


//Multiplication
let num1=6;
let num2=8;
let result;
function fun(num1,num2)
{
result=num1*num2;
return result;
}
result=fun(num1,num2);
console.log(result);
//output:48

//Division
let num1=64;
let num2=8;
let result;
function fun(num1,num2)
{
result=num1/num2;
return result;
}
result=fun(num1,num2);
console.log(result);
//output:8


//Modulus
let num1=15;
let num2=7;
let result;
function fun(num1,num2)
{
result=num1%num2;
return result;
}
result=fun(num1,num2);
console.log(result);
//output:1

//Power
let num1=6;
let num2=2;
let result;
function fun(num1,num2)
{
result=Math.pow(num1,num2);
return result;
}
result=fun(num1,num2);
console.log(result);
//output:36


//compare string
let str1="hello";
let str2="hello";
function fun(str1,str2)
{
  return str1===str2;
}
fun(str1,str2);
//output:yes


//compare number
let num1=7;
let num2=5;
function fun(num1,num2)
{
return num1===num2
}
fun(num1,num2);
//output:no

//compare values
let str1=123;
let str2="123";
function fun(str1,str2)
{
  return str1===str2
}
fun(str1,str2);
//output:no

//gradefinder
let num1=98;
gradefinder(num1);
function gradefinder(num1)
{
  if(num1>=90)
  console.log("grade A");
  
  else if(num1>=80 && num1<90) 
  console.log("grade B");
  
 else if(num1>=70 && num1<80)
  console.log("grade C");

  
  else if(num1>=60 && num1<70)
  console.log("grade E");
}

//check vowels
let str1="hello"
checkvowel(str1);
function checkvowel(str1)
{
if(str1.includes('a'))
console.log('a')

if(str1.includes('e'))
console.log('e')

if(str1.includes('i'))
console.log('i')

if(str1.includes('o'))
console.log('o')

if(str1.includes('u'))
console.log('u')
}


//find prime
let num1=24;
let count=0;
let i;
function prime(num1)
{
  for(i=0;i<num1;i++)
  {
    if(num1%i==0)
    count++;
  }
  if(count==2)
  console.log("yes");
  else
  console.log("no");
}
prime(num1,count);
//output:no