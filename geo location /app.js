const btn = document.getElementById("btn");
const country_container = document.getElementById("country-container");
const map = document.getElementById("map");
const load=()=>{
    if('geolocation' in navigator){
       console.log( navigator.geolocation.getCurrentPosition((data)=>{
        const lat =data.coords.latitude;
        const long=data.coords.longitude;
        console.log(lat,long)
        map.innerHTML=`<iframe src="https://maps.google.com/maps?q=${lat},${long}&z=15&output=embed"
  width="100%"
  height="100%"
  frameborder="0"
  style="border:0"
  allowfullscreen ></iframe>`;
  display(lat,long);
    }))
}
}
async function display(lat,long){

    try{
        const response=await fetch(`http://api.positionstack.com/v1/forward?access_key =c6f8018fb80a60c9d073f91361d966e6&query =${lat},${long}`);
        const data= await response.json();
        console.log(data)

    }catch(error){
        console.error("'can't ne responded ");

    }
}
btn.addEventListener('click',load)