function Dog(args){
	this.name = args["name"] || "Potato monster";
	this.breed = args["breed"] || "Poodle";
	this.age = args.age || 1;

	// Don't do this
	// this.bark = function(){
	// 	console.log("bow wow");
	// }
}



Dog.prototype.bark = function(){
	console.log("Bow wow");
}

var dog = new Dog({name: "Skittles"});
console.log(dog);
dog.bark();