const unlist = document.getElementById("un_list")
console.log(unlist);

const ask = prompt('inserisci un numero');
console.log(typeof ask);



for(let i = 1; i <= ask; i++){
    
    const listitem = document.createElement("li");
    
    unlist.append(listitem);

    listitem.classList.add("box");

    listitem.innerHTML = i;

    if(i % 3 == 0 && i % 5 == 0){
        
        listitem.classList.add("fizzbuzz")

        listitem.innerHTML = "fizzbuzz"
    
    }else if(i % 3 == 0){

        listitem.classList.add("fizz")

        listitem.innerHTML = "fizz"

    }else if(i % 5 == 0){

        listitem.classList.add("buzz")

        listitem.innerHTML = "buzz"
    }
}