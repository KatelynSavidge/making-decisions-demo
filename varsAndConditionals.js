/*
    In this file, we'll be using variables, conditionals,
    and loops to play out a fight between Jon Snow and
    Jamie Lannister.
*/ 

let jonSnowAttack = 25
let jamielannisterAttack = 35

if (jonSnowAttack > jamielannisterAttack) {
    console.log("Jon Snow has better attack than Jamie Lannister")
 } else if (jamielannisterAttack > jonSnowAttack) {
    console.log("Jamie Lannister has better attack than Jon Snow")
 } else {
    console.log("Jamie Lannister has the same attack than Jon Snow")
}

let jonSnowHealth = 100
let JonSnowDefense = 0

// Jamie Lannister has been attacked

if (jonSnowHealth <= jamielannisterAttack) {
    //jonSnowHealth = 0
    console.log("Jon Snow has been geen slain.")
} else {
    jonSnowHealth = jonSnowHealth - jamielannisterAttack
    console.log(`Jon Snow"s Health is down to ${jonSnowHealth}`)
    // console.log(`here is health )
}

//Jon picks up a sheild in defense
JonSnowDefense += 25
// Jamie attacks again!

if (jonSnowHealth <= jamielannisterAttack - JonSnowDefense) {
    console.log("Jon Snow has been slain")
} else {
    jonSnowHealth -= (jamielannisterAttack - JonSnowDefense)
    console.log(`Jon Snow"s Health is down to ${jonSnowHealth}`)
}

