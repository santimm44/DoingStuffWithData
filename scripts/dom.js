import { getData } from "./fetch.js";

const ascendingId = document.getElementById("ascendingId")
const ascendingFirstName = document.getElementById("ascendingFirstName")
const ascendingLastName = document.getElementById("ascendingLastName")
const ascendingHeight = document.getElementById("ascendingHeight")
const ascendingAge = document.getElementById("ascendingAge")

const descendingId = document.getElementById("descendingId")
const descendingFirstName = document.getElementById("descendingFirstName")
const descendingLastName = document.getElementById("descendingLastName")
const descendingHeight = document.getElementById("descendingHeight")
const descendingAge = document.getElementById("descendingAge")

const listOutput = document.getElementById("listOutput")
const nameSection = document.createElement("section")

const previousBtn = document.getElementById("previousBtn")
const nextBtn = document.getElementById("nextBtn")

nameSection.className = "bg-[#5f8ca0] w-[75vw] p-4 rounded-2xl"
listOutput.appendChild(nameSection)

let determinedSortMethod = ""
let page = 0;
let amountOfPeople=0;
let totalAmountOfPeople=0;

previousBtn.addEventListener("click", ()=>{
    if(page ==0){
        page = Math.floor(totalAmountOfPeople/amountOfPeople)
        createList(amountOfPeople)
        console.log(page)
    }
    else{
        --page
        console.log(page)

        createList(amountOfPeople)
    }
})

nextBtn.addEventListener("click", ()=>{
    if(page ==Math.floor(totalAmountOfPeople/amountOfPeople)){
        page = 0
        createList(amountOfPeople)
        console.log(page)
    }
    else{
        ++page
        console.log(page)

        createList(amountOfPeople)
    }
})
ascendingId.addEventListener("click", () => {
    determinedSortMethod = "ascendingId"
    createList(20)
})
descendingId.addEventListener("click", () => {
    determinedSortMethod = "descendingId"
    createList(20)
})
ascendingFirstName.addEventListener("click", () => {
    determinedSortMethod = "ascendingFirstName"

    createList(30)
})
descendingFirstName.addEventListener("click", () => {
    determinedSortMethod = "descendingFirstName"

    createList(40)
})
ascendingLastName.addEventListener("click", () => {
    determinedSortMethod = "ascendingLastName"

    createList(50)
})
descendingLastName.addEventListener("click", () => {
    determinedSortMethod = "descendingLastName"

    createList(50)
})
ascendingHeight.addEventListener("click", () => {
    determinedSortMethod = "ascendingHeight"

    createList(50)
})
descendingHeight.addEventListener("click", () => {
    determinedSortMethod = "descendingHeight"

    createList(50)
})
ascendingAge.addEventListener("click", () => {
    determinedSortMethod = "ascendingAge"
    createList(50)
})
descendingAge.addEventListener("click", () => {
    determinedSortMethod = "descendingAge"
    createList(50)
})



const createList = async (ceiling) => {
    nameSection.innerHTML = ""
    amountOfPeople = ceiling;

    const originalList = await getData()
    let newList = []
    totalAmountOfPeople = originalList.People.length;

    switch (determinedSortMethod) {
        case "ascendingId":
            newList = ascendingById(originalList.People);
            break;

        case "descendingId":
            newList = descendingById(originalList.People);
            break;
        case "ascendingFirstName":
            newList = ascendingByFirstName(originalList.People);
            break;
        case "descendingFirstName":
            newList = descendingByFirstName(originalList.People);
            break;
        case "ascendingLastName":
            newList = ascendingByLastName(originalList.People);
            break;
        case "descendingLastName":
            newList = descendingByLastName(originalList.People);
            break;
        case "ascendingHeight":
            newList = ascendingByHeight(originalList.People);
            break;
        case "descendingHeight":
            newList = descendingByHeight(originalList.People);
            break;
        case "ascendingAge":
            newList = ascendingByAge(originalList.People);
            break;
        case "descendingAge":
            newList = descendingByAge(originalList.People);
            break;
        default:
            newList = [...originalList.People]
            break;
    }

    let amountOfgroups = newList.length / ceiling;
    let groups = []
    let index = 0;
    

    if (ceiling > 0) {

        //Default list viewing
        // newList.forEach((element, index) => {
        //     newList[index] = "ID: " + element.Id + ", FN: " + element.FirstName + ", LN: " + element.LastName + ", Age: " + element.Age + ", Ht: " + element.Height + ", Email: " + element.Email
        // });



        for (let i = 0; i < amountOfgroups; i++) {
            groups.push(newList.slice(index, index + ceiling))
            index += ceiling;

        }

        console.log(groups[0][0])

        groups[page].forEach((element,index) => {
            let parentDiv = document.createElement("div")
            parentDiv.className = "flex bg-[#000000a4] rounded-2xl mt-4 ps-8 pe-8 place-items-baseline justify-between"
            nameSection.appendChild(parentDiv)
            
            let nameText = document.createElement("p")
            nameText.innerText = "Person's Information";
            parentDiv.appendChild(nameText)


            let idNumber = document.createElement("p")
            idNumber.className="flex bg-[#000000a4] rounded-2xl mt-4 ps-8 pe-8 place-items-baseline justify-between"
            idNumber.innerText="ID: "+ element.Id
            parentDiv.appendChild(idNumber)

            let nameFirst = document.createElement("p")
            nameFirst.className="flex bg-[#000000a4] rounded-2xl mt-4 ps-8 pe-8 place-items-baseline justify-between"
            nameFirst.innerText="FN: "+element.FirstName
            parentDiv.appendChild(nameFirst)

            let nameLast = document.createElement("p")
            nameLast.className="flex bg-[#000000a4] rounded-2xl mt-4 ps-8 pe-8 place-items-baseline justify-between"
            nameLast.innerText="LN: "+element.LastName
            parentDiv.appendChild(nameLast)

            let height = document.createElement("p")
            height.className="flex bg-[#000000a4] rounded-2xl mt-4 ps-8 pe-8 place-items-baseline justify-between"
            height.innerText="HT: "+element.Height
            parentDiv.appendChild(height)

            let age = document.createElement("p")
            age.className="flex bg-[#000000a4] rounded-2xl mt-4 ps-8 pe-8 place-items-baseline justify-between"
            age.innerText="Age: "+ element.Age
            parentDiv.appendChild(age)

            // element.forEach(innerObject => {
            //     nameText.innerText += innerObject.Id + " " + innerObject.FirstName+ " " + innerObject.LastName+ " " + innerObject.Height+ " " + innerObject.Age;
            // });

        });

        //may need to delete after finishing
        // groups.forEach((element, index) => {
        //     let parentDiv = document.createElement("div")
        //     parentDiv.className = "flex bg-[#000000a4] rounded-2xl mt-4 ps-8 pe-8 place-items-baseline justify-between"
        //     nameSection.appendChild(parentDiv)


        //     let nameText = document.createElement("p")
        //     nameText.innerText = "Group#" + (index + 1) + " \n\n" + element.join("\n\n");

        //     // element.forEach(innerObject => {
        //     //     nameText.innerText += innerObject.Id + " " + innerObject.FirstName+ " " + innerObject.LastName+ " " + innerObject.Height+ " " + innerObject.Age;
        //     // });
        //     parentDiv.appendChild(nameText)

        // });

    }

}

const ascendingById = (arrayValue) => {
    arrayValue.sort((firstElement, secondElement) => firstElement.Id - secondElement.Id)

    return arrayValue
}

const descendingById = (array) => {
    array.sort((firstElement, secondElement) => secondElement.Id - firstElement.Id)

    return array
}

const ascendingByAge = (arrayValue) => {
    arrayValue.sort((firstElement, secondElement) => firstElement.Age - secondElement.Age)

    return arrayValue
}

const descendingByAge = (array) => {
    array.sort((firstElement, secondElement) => secondElement.Age - firstElement.Age)

    return array
}

const ascendingByHeight = (arrayValue) => {
    arrayValue.sort((firstElement, secondElement) => {
        const firstElementNumber = parseInt(firstElement.Height.match(/\d+/)[0])
        const secondElementNumber = parseInt(secondElement.Height.match(/\d+/)[0])

        return firstElementNumber - secondElementNumber
    })

    return arrayValue
}

const descendingByHeight = (array) => {

    array.sort((firstElement, secondElement) => {
        const firstElementNumber = parseInt(firstElement.Height.match(/\d+/)[0])
        const secondElementNumber = parseInt(secondElement.Height.match(/\d+/)[0])

        return secondElementNumber - firstElementNumber
    })

    return array
}

const ascendingByFirstName = (arrayValue) => {
    arrayValue.sort((firstElement, secondElement) => firstElement.FirstName.localeCompare(secondElement.FirstName))

    return arrayValue
}

const descendingByFirstName = (array) => {

    array.sort((firstElement, secondElement) => secondElement.FirstName.localeCompare(firstElement.FirstName))

    return array
}
const ascendingByLastName = (arrayValue) => {
    arrayValue.sort((firstElement, secondElement) => firstElement.LastName.localeCompare(secondElement.LastName))

    return arrayValue
}

const descendingByLastName = (array) => {

    array.sort((firstElement, secondElement) => secondElement.LastName.localeCompare(firstElement.LastName))

    return array
}

export { createList }