// let person = { 
//     name: "Brian", 
//     age: 38 
// };

// console.log(person.age);
// console.log(person["age"]);

// let offer = "none";
// let time = 1600;

// const cafe = {
//     name: "Whitesheep",
//     seatingCapacity: 100,
//     hasSpecialOffers: true,
//     drinks: [
//         "Cappuccino",
//         "Latte",
//         "Filter Coffee",
//         "Tea",
//         "Hot Chocolate"
//     ],
//     breakfastOffer: "Free croissant with coffee",
//     lunchOffer: "Free drink with sandwich",
//     noOffer: "Sorry! No offer available"
// };

// if (time < 1100) {
//     offer = cafe.breakfastOffer;    
// } else if (time < 1500) {
//     offer = cafe.lunchOffer;    
// };

// console.log(offer);

// let day = "Sunday";
// let message = "";

// let alarm = {
//     weekendAlarm: "No alarm needed",
//     weekdayAlarm: "Get up at 7am"
// };

// if (day == "Saturday" || day == "Sunday"){
//     message = alarm.weekendAlarm;
// } else {
//     message = alarm.weekdayAlarm;
// };

// console.log(message);

let offer = "none";
let time = 1600;

const cafe = {
    name: "Whitesheep",
    seatingCapacity: 100,
    hasSpecialOffers: true,
    drinks: [ "Cappuccino","Latte", "Filter Coffee", "Tea", "Hot Chocolate"],
    breakfastOffer: "Free croissant with coffee",
    lunchOffer: "Free drink with sandwich",
    noOffer: "Sorry! No offer available",
    openCafe(){
        if (this.hasSpecialOffers) {
            return "Come on in.";
        }
        
    },
    closeCafe(){
        return "We are closed";
    }
};

console.log(cafe.openCafe());
console.log(cafe.closeCafe());