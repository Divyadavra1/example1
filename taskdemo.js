let table = document.getElementById("tableBody");
let table1 = document.getElementById("tableBody1")
let num = 0;     
function addRow() {
num++
       table.insertAdjacentHTML('beforeend',`<tr>
       <td id = "rollno">${num}</td> 
       <td><input type="text" class="w-75 p-0"/></td>
       <td><input type="text"  onchange="findTotal(${num})" name="input_a" class="math${num} w-75" /></td>
       <td><input type="text" onchange="findTotal(${num})" name="input_b" class="science${num} w-75" /></td>
       <td><input type="text" onchange="findTotal(${num})" name="input_d" class="sst${num} w-75"/></td>
       <td id = "total${num}" class="totalmarks">00</td>
       <td id = "per${num}">00</td>
       </tr>`)
}
       table1.insertAdjacentHTML('beforeend',`<tr>
       <td id="realClasssName"></td>
       <td id="high"></td>
       <td id="low"></td>
       <td id="average"></td>
       `)
       // table.insertAdjacentHTML('beforeend','<tr><td>1</td> <td><input type="text"/></td><td><input type="text" id="eng" ></td><td><input type="text" id="mathss" ></td><td><input type="text" id="physs" ></td></td><td><input type="button"  id="getavg" value="SUBMIT" readonly /></td><td><input type="button" id="getavg"  value="SUBMIT" onClick="return getReport()"></td></tr>')

function findTotal(num){
      
const math =  document.querySelector(`.math${num}`).value
const science = document.querySelector(`.science${num}`).value
const sst = document.querySelector(`.sst${num}`).value
const total = document.querySelector(`#total${num}`)
const per = document.querySelector(`#per${num}`)
const totalmarks = document.querySelectorAll('.totalmarks')     

const sum = Number(math) + Number(science) + Number(sst); 
total.innerHTML=sum;

const percentage =(sum/300*100);
per.innerHTML=percentage;

var iRowCount = rollno.length;
document.getElementById("realClasssName").innerHTML = iRowCount;

const totalMarkArray = [];
totalmarks.forEach(el=>{
totalMarkArray.push(el.innerHTML)
})    

totalMarkArray.sort(function(a, b){return b-a})
document.getElementById("high").innerHTML = totalMarkArray[0];

totalMarkArray.sort(function(a, b){return a-b})
document.getElementById("low").innerHTML = totalMarkArray[0];

const initialValue = 0;
const avg = totalMarkArray.reduce((a,b)=>
        Number(a)+Number(b),initialValue)/
      (totalMarkArray.length);
document.getElementById("average").innerHTML=avg;
}      




