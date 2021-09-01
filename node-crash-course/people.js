//modules and require

const people = ['Chanu', 'Chithi', 'ryu', 'mario'];//An array of Strings
const ages = [14, 18, 30, 35];

console.log(people);//log to console

module.exports = {
    people : people,// now xyz is = to people
    ages: ages
};//With this command people and ages both are exported
