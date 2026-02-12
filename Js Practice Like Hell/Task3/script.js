let form = document.querySelector("#form");
let inp1 = document.querySelector("#input1");
let inp2 = document.querySelector("#input2");
form.addEventListener("submit",function(dets){
    dets.preventDefault();
    if(inp1.value === "" || inp2.value === ""){
        document.querySelector("h4").textContent = "Error Some Fields are blank"
    }
    else{
        document.querySelector("h4").textContent = "Submitted Successfully Sir";
    }
});
