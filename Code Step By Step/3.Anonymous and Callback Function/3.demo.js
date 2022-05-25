// Example-1
// function sum(a,b)
// {
//     return a+b;
// }
// console.log(sum(10,20));

// Example-2
// var add=function(a,b)
// {
//     return a+b;
// }

// function complexExp(add)
// {
//     console.warn(add(200,300));
// }

// complexExp(add);

// Example-3
function complexExp(add)
{
    console.warn(add(200,300));
}

complexExp(function(a,b)
{
    return a+b;
});