var currentTab = 0;
showTab(currentTab);
function showTab(n) {
  var x = document.getElementsByClassName("tab");
  x[n].style.display = "block";
  if (n == 0) {
    document.getElementById("prevBtn").style.display = "none";
  } else {
    document.getElementById("prevBtn").style.display = "inline";
  }
  if (n == x.length - 1) {
    document.getElementById("nextBtn").innerHTML = "Submit";
  } else {
    document.getElementById("nextBtn").innerHTML = "Next";
  }
  fixStepIndicator(n);
}
function nextPrev(n) {
  var x = document.getElementsByClassName("tab");
  if (n == 1 && !validateForm()) return false;
  x[currentTab].style.display = "none";
  currentTab = currentTab + n;
  if (currentTab >= x.length) {
    document.getElementById("regForm").submit();
    return false;
  }
  showTab(currentTab);
}
function validateForm() {
  var q = document.getElementById("user").value;
  var r = document.getElementById("last").value;
  var s = document.getElementById("exampleInputEmail1").value;
  var x, y,i,
    valid = true;
  x = document.getElementsByClassName("tab");
  y = x[currentTab].getElementsByClassName("form-control");
  for (i = 0; i < y.length; i++) {
    if (y[i].value == "") {
      y[i].className += " invalid";
      valid = false;
    }
  }
  if (r ==""){
    document.getElementById("Message2").innerHTML = "Enter your lastname"
    valid = false;
  }
  if(q.length<3){
    document.getElementById("Message").innerHTML = 'name must be greater than 5 words'
    valid =  false;
  }
  if(s.length<12){
    document.getElementById("Message3").innerHTML = 'Email length should be 12 words'
    valid =  false;
  }
  if (valid) {
    document.getElementsByClassName("step")[currentTab].className += " finish";
  }
  return valid;
}
function fixStepIndicator(n) {
  // This function removes the "active" class of all steps...
  var i,
    x = document.getElementsByClassName("step");
  for (i = 0; i < x.length; i++) {
    x[i].className = x[i].className.replace(" active", "");
  }
  //... and adds the "active" class on the current step:
  x[n].className += " active";
}
function validate(){
  var z = document.getElementById("user3").value;
  if(z.length<10){
    document.getElementById("Message4").innerHTML = "Phone number should be of 10 digits";
    return false;
  }
}
function fun(){
  var t = document.getElementById("street").value;
   if (t.length<5){
    document.getElementById("Message5").innerHTML = "street name should be atleast 5 words"
    valid = false;
  }
  var u = document.getElementById("number").value;
   if (u.length<5){
    document.getElementById("Message6").innerHTML = "It should be 5 numbers"
    valid = false;
  }
  var w = document.getElementById("city").value;
   if (w.length<5){
    document.getElementById("Message7").innerHTML = "Enter your city name"
    valid = false;
  }
}


// 
// let children = document.querySelector('ul').children;
// let i = 0;
// children[i].classList.add('selected');
// function resetClass() {
//   for (let j = 0; j < children.length; j++) {
//       children[j].classList.remove('selected');
//   }
// }
// function nextPrev() {
//   if (i >= children.length - 1) {
//       return false;
//   }
//   resetClass();
//   i++;
//   children[i].classList.add('selected')
// }

// function nextPrev() {
//   if (i <= 0) {
//       return false;
//   }
//   resetClass();
//   i--;
//   children[i].classList.add('selected')
// }


