let table = $("#tableBody");
let table1 = $("#tableBody1");
let num = 0;     
$(document).ready(function() {
$(".addRow").click(function() {
num++       
       $("#tableBody").append(`<tr>
       <td id = "rollno">${num}</td> 
       <td><input type="text" class="w-75 p-0"/></td>
       <td><input type="text"  onchange="findTotal(${num})" name="input_a" class="math${num} w-75" /></td>
       <td><input type="text" onchange="findTotal(${num})" name="input_b" class="science${num} w-75" /></td>
       <td><input type="text" onchange="findTotal(${num})" name="input_d" class="sst${num} w-75"/></td>
       <td id = "total${num}" class="totalmarks">00</td>
       <td id = "per${num}">00</td>
       </tr>`)
});
});

       $("#tableBody1").append(`<tr>
       <td id="realClasssName"></td>
       <td id="high"></td>
       <td id="low"></td>
       <td id="average"></td>
       `)
       // table.insertAdjacentHTML('beforeend','<tr><td>1</td> <td><input type="text"/></td><td><input type="text" id="eng" ></td><td><input type="text" id="mathss" ></td><td><input type="text" id="physs" ></td></td><td><input type="button"  id="getavg" value="SUBMIT" readonly /></td><td><input type="button" id="getavg"  value="SUBMIT" onClick="return getReport()"></td></tr>')

function findTotal(num){

const math =  $(`.math${num}`).val()
const science = $(`.science${num}`).val()
const sst = $(`.sst${num}`).val()
const total = $(`#total${num}`)
const per = $(`#per${num}`)
const totalmarks = $('.totalmarks')     

const sum = Number(math) + Number(science) + Number(sst); 
$(total).text(sum)

const percentage =(sum/300*100);
$(per).text(percentage)

var iRowCount = rollno.length;
$("#realClasssName").html(iRowCount);

const totalMarkArray = [];
// totalmarks.forEach(el=>{
// totalMarkArray.push(el.innerHTML)
// })  
$.each(totalmarks, function(){
       totalMarkArray.push($(this).html());
})    

totalMarkArray.sort(function(a, b){return b-a})
$("#high").html(totalMarkArray[0]);

totalMarkArray.sort(function(a, b){return a-b})
$("#low").html(totalMarkArray[0]);

const initialValue = 0;
const avg = totalMarkArray.reduce((a,b)=>
        Number(a)+Number(b),initialValue)/
      (totalMarkArray.length);
$("#average").text(avg);
}      




