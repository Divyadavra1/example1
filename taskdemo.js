  let table = document.getElementById("tableBody");
  let num = 0     
function addRow() {
num++
       table.insertAdjacentHTML('beforeend',`<tr><td>${num}</td> <td><input type="text" class="w-75 p-0"/></td><td><input type="text"  onblur="findTotal()" name="input_a" class="amount w-75" /></td><td><input type="text" onblur="findTotal()" name="input_b" class="amount w-75" /></td><td><input type="text" onblur="findTotal()" name="input_d" class="amount w-75"/></td></td><td><input type="text" name="sum" id="totalordercost" class="w-75" readonly /></td><td><input type="text" name="per" id="percentage" class="w-75"/></td></tr>`)
       // table.insertAdjacentHTML('beforeend','<tr><td>1</td> <td><input type="text"/></td><td><input type="text" id="eng" ></td><td><input type="text" id="mathss" ></td><td><input type="text" id="physs" ></td></td><td><input type="button"  id="getavg" value="SUBMIT" readonly /></td><td><input type="button" id="getavg"  value="SUBMIT" onClick="return getReport()"></td></tr>')
} 
     
function findTotal(){
       var arr = document.getElementsByClassName('amount');
       var tot=0;

       for(var i=0;i<arr.length;i++){
           if(parseFloat(arr[i].value))
               tot =tot + parseFloat(arr[i].value);
               var percentage =(tot/300*100);
       }
       document.getElementById('totalordercost').value = tot;
       document.getElementById('percentage').value=percentage;
       document.getElementById('amount').value=amount;
}



