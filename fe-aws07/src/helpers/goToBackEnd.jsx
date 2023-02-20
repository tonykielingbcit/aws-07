const goToBackEnd = async ({method, param, data}) => {
    // console.log("going to BE::::::::::=====", method, param, data);
    
    try {
        let url = "/api/items";
        if (param) url += `/${param}`;
// console.log("URLLLLLLLL:", url)

        const body = (method !== "GET") 
            ? JSON.stringify(
                {
                    "itemIdToBeDelete": data,
                    "newItem": data,
                    "id": data.id,
                    "updateItem": data.newName
                })
            : undefined;

        const result = await fetch(url, {
            method,
            headers: {
                "Content-Type": "application/json",
            },
            body
        })
            .then((res) => res.json());
    
        if (result.error) 
            throw (result.error);

        // console.log("result::", result.message);
        return ({ message: result.message});

      } catch(err) {
        console.log("###ERROR ON goToBackEnd - try/catch");
        return ({error: err.message || err})
      }
}

export default goToBackEnd;