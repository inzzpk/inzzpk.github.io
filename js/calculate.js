function submit_by_id() {
  var form_weight = document.getElementById("form_weight").value;
  console.log('form_weight >>>',form_weight)

  var startDose = parseFloat(form_weight)*35
  var baseStartDose = Math.round(startDose/50,0)*50
  var numStartDose = baseStartDose/200

  var conDose = parseFloat(form_weight)*15
  var baseConDose = Math.round(conDose/50,0)*50
  var numConDose = baseConDose/200

  var totalStart = numStartDose*2
  var totalCon = numConDose*8

  if (baseStartDose%200 >=150 ){
    totalStart = (numStartDose+0.25)*2
  }
  if (baseConDose%200 >=150 ){
    totalCon = (numConDose+0.25)*8
  }
  

  var total = Math.ceil(totalStart + totalCon)

  console.log("numStartDose>>>",numStartDose)
  console.log("numConDose>>>",numConDose)
  console.log("totalStart",totalStart)
  console.log("totalCon",totalCon)
  console.log('total>>>',total)
  
  document.getElementById("start_dose").value = startDose;
  document.getElementById("num_start_dose").value = numStartDose;

  document.getElementById("con_dose").value = conDose;
  document.getElementById("num_con_dose").value = numConDose;

  document.getElementById("total").value = total;


}

const node = document.getElementById("form_weight");
node.addEventListener("keyup", function(event) {
    if (event.key === "Enter") {
      submit_by_id()
    }
});