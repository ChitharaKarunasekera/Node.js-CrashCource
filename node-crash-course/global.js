//Global Objects

//Global object in Node is different from the global object in Window

// console.log(global);

// global.setTimeout(() => {
//     console.log('in the timeout');
//     clearInterval(int); //After 3secs clearInterval function is called and it will stop the int function which runs every second.
// }, 3000);// after 3secs the massage 'in the timeout' will be printed
//
// const int = setInterval(() => {
//     console.log('in the interval')
// }, 1000); //This function runs every 1sec

console.log(__dirname);//Gets teh absolute path of the current folder
console.log(__filename);//Gets teh absolute path of the current folder WITH the file name too.