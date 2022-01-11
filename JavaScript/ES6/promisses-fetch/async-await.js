// Uma maneira de lidar com promises de maneira mais simples.
const asyncTimer = () => {
    new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(12345);
        }, 1000);
    });
}

const simpleFunc = async () => {
    const data = await asyncTimer();
    const dataJSON = await fetch('/data.json').then( resStream => {
        resStream.json;
    });

    return dataJSON;
}

simpleFunc()
    .then(data => {
        console.log(data);
    })
    .catch(
        err => {
            console.log("Error: ", err);
        }
    );