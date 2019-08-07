

// var searchform = document.querySelector("form")
// var location= document.querySelector('input')
// searchform.addEventListener('submit',(e)=>{
//     e.preventDefault()
//     console.log("chal ja bhaiya")
//     fetch("http://localhost:3000/weather?address="+location.value).then((response) =>{
//     response.json().then((data)=>{
//         if(data.error){
//             console.log(data.error)
//         }
//         else{
//             console.log(data)
//         }
//     })
//     })
//     })
const weatherForm = document.querySelector('form')
const search = document.querySelector('input')
const firstpara = document.querySelector("#first")
const secondpara = document.querySelector("#second")

weatherForm.addEventListener('submit', (e) => {
    secondpara.textContent=" "
    firstpara.textContent="Loading...!"
    
    e.preventDefault()
    

    //const locatio = search.value

    fetch('http://localhost:3000/weather?address=' + search.value).then((response) => {
        response.json().then((data) => {
            if (data.error) {
                console.log(data.error)
            } else {
               firstpara.textContent = "Longitude : " + data.Location.longitude + ", " + "Latitude" + data.Location.latitude +", " + data.Location.place
            secondpara.textContent=data.data
                }
        })
    })
})