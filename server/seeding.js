const pool = require("./connection");
const data = require("./menu.json");

let newData = data.map((el) => {
    return `('${el.title}', '${el.imageUrl}', '${el.price}', '${el.description}')`
});

let newDataToInsert = newData.join(",");

let seedDataQuery = `
INSERT INTO menu ("title", "imageUrl", "price", "description")
VALUES ${newDataToInsert}
`;

async function runSeed() {
    try{
        await pool.query(seedDataQuery);
        console.log("Success seed table menu");
    } catch(error){
    console.log(error);
    }
}

runSeed();