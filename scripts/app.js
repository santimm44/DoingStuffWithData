import { createList } from "./dom.js";

createList(20)

const show10Btn = document.getElementById("show10Btn")
const show20Btn = document.getElementById("show20Btn")
const show30Btn = document.getElementById("show30Btn")
const show40Btn = document.getElementById("show40Btn")
const show50Btn = document.getElementById("show50Btn")

show10Btn.addEventListener("click", () => {
    createList(10)
})
show20Btn.addEventListener("click", () => {
    createList(20)
})
show30Btn.addEventListener("click", () => {
    createList(30)
})
show40Btn.addEventListener("click", () => {
    createList(40)
})
show50Btn.addEventListener("click", () => {
    createList(50)
})