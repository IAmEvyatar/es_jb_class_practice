function createFrog(c,ls) {
    return {
	color: c,
    location: 0,
    leapDistance: ls,
    jump : function() {return this.location += this.leapDistance}
	}
}
yellowFrog = createFrog('yellow', 6);
console.log(yellowFrog);
yellowFrog.jump();
redFrog = createFrog('red', 3);
yellowFrog.jump();
console.log(yellowFrog, redFrog);
redFrog.jump();
console.log(yellowFrog, redFrog);