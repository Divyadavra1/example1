let table = document.getElementById("tableBody");
let num = 0;     
function addRow() {
num++
       table.insertAdjacentHTML('beforeend',`<tr>
       <td>${num}</td> 
       <td><input type="text" class="w-75 p-0"/></td>
       <td><input type="text"  onchange="findTotal(${num})" name="input_a" class="math${num} w-75" /></td>
       <td><input type="text" onchange="findTotal(${num})" name="input_b" class="science${num} w-75" /></td>
       <td><input type="text" onchange="findTotal(${num})" name="input_d" class="sst${num} w-75"/></td>
       <td id = "total${num}">00</td>
       <td id = "per${num}">00</td>
       </tr>`)
       // table.insertAdjacentHTML('beforeend','<tr><td>1</td> <td><input type="text"/></td><td><input type="text" id="eng" ></td><td><input type="text" id="mathss" ></td><td><input type="text" id="physs" ></td></td><td><input type="button"  id="getavg" value="SUBMIT" readonly /></td><td><input type="button" id="getavg"  value="SUBMIT" onClick="return getReport()"></td></tr>')
} 
     
function findTotal(num){
      
const math =  document.querySelector(`.math${num}`).value
const science = document.querySelector(`.science${num}`).value
const sst = document.querySelector(`.sst${num}`).value
const total = document.querySelector(`#total${num}`)
const per = document.querySelector(`#per${num}`)

const sum = Number(math) + Number(science) + Number(sst); 
total.innerHTML=sum;

const percentage =(sum/300*100);
per.innerHTML=percentage;

array = [total];
minValue = Math.min(...array);
maxValue = Math.max(...array);
document.querySelector('.min').textContent = minValue;
document.querySelector('.max').textContent = maxValue;

}




// document.getElementById('Total').innerHTML=Total;



// console.log(parseInt(math+science+sst));


// document.getElementById('add${num}').innerHTML = add;


// var add = document.getElementsByClassName((`math${num}`)+(`science${num}`)+(`sst${num}`))


       // document.getElementById('totalordercost${num}').value = tot;
       // document.getElementById('percentage${num}').value=percentage;
       // var arr = document.getElementsByClassName('amount${num}');

       // var tot=0;

       // for(var i=0;i<arr.length;i++){
       //     if(parseFloat(arr[i].value))
       //         tot =tot + parseFloat(arr[i].value);
       //         var percentage =(tot/300*100);
       // }




