const getData = async()=>{
    const callData = await fetch("data/data.json")
    const readableData = await callData.json()

    return readableData;
}

export {getData}