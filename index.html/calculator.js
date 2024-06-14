function Solve(val) {
   var v = document.getElementById('res');
   v.value += val;
}

function Result() {
   var input = document.getElementById('res').value;
   var result = eval(input);
       document.getElementById('res').value = input + '=' + result;
}

function Clear() {
   var inp = document.getElementById('res');
   inp.value = '';
}

function Back() {
   var v = document.getElementById('res');
   v.value = v.value.slice(0, -1);
}