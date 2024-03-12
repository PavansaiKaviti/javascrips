const container = document.querySelector(".container");
const title = document.querySelector(".title");
const btn = document.querySelector("#btn");
//Making http request
async function upload(){
url='https://jsonplaceholder.typicode.com/photos';
fetch(url).then(response=>response.json()).then(data=>{
const newarray=data.map((element)=>{
   return `
   <div class="card">
    <div class="card-title">
      <h2>Post :${element.title}</h2>
    </div>
    <div class="card-body">
      <a
         href='${element.thumbnailUrl}' >click me</a>
    </div>
  </div> `;
})
container.innerHTML=newarray;
})
}
btn.addEventListener('click',()=>{upload()})
