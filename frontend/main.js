windows.addEventListener('DOMContentloaded', (event) =>{
    getVisitCount();
})

const functionApi = "";

const getVisitCount = () => {
    let count = 30;
    fetch(functionApi).then(response => {
        retun response.json()
    }).then(response =>{
        console.log("Website called function API");
        count = response.count;
        document.getElementById("counter").innerText = count;
    }).catch(function(error){
        console.log(error);
    });
    retun count;


}