//is assigned an initial value of ["Milo", "Otis", "Garfield"]
var cats = ["Milo", "Otis", "Garfield"]

//appends a cat to the end of the cats array
function destructivelyAppendCat(name) {
    cats.push(name)
    return cats
}

//prepends a cat to the beginning of the cats array
function destructivelyPrependCat(name) {
    cats.unshift(name)
    return cats
}

//removes the last cat from the cats array
function destructivelyRemoveLastCat(name) {
    cats.pop(name)
    return cats
}

//removes the first cat from the cats array
function destructivelyRemoveFirstCat(name) {
    cats.shift(name)
    return cats
}

//appends a cat to the cats array and returns a new array, leaving the cats array unchanged
function appendCat(name) {
    return [name, cats]
}

//prepends a cat to the cats array and returns a new array, leaving the cats array unchanged
function prependCat(name) {
    return [name, cats]
}

//removes the last cat in the cats array and returns a new array, leaving the cats array unchanged
function removeLastCat(name) {
    return cats.slice(0, cats.length -1)
}

//removes the first cat from the cats array and returns a new array, leaving the cats array unchanged
function removeFirstCat(name) {
    return cats.slice(1)
}


























































































