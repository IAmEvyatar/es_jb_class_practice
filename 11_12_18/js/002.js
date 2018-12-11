var childOne = {
    name: 'Chris',
    hug:function(child) {console.log(this.name,'Hugs', child.name)}
}
var childTwo = {
    name: 'Raymond',
    hug:function(child) {console.log(this.name,'Hugs', child.name)}
}
childOne.hug(childTwo);
