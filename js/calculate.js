function submit_by_id() {
  var form_weight = document.getElementById("form_weight").value;

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

  if (form_weight < 2) {
    startDose = '-'
    numStartDose = '-'
    conDose = '-'
    numConDose = '-'
    total = '-'
  }
  else if (form_weight < 2.5) {
    startDose = 70
    numStartDose = '70mg (ครึ่งเม็ด ผสมน้ำ 2 ซีซี กิน 1.4 ซีซี)'
    conDose = 30
    numConDose = '30mg (ครึ่งเม็ด ผสมน้ำ 2 ซีซี กิน 0.6 ซีซี)'
    total = 5
  } else if (form_weight < 3.5) {
    startDose = 105
    numStartDose = 0.5
    conDose = 40
    numConDose = '40mg (ครึ่งเม็ด ผสมน้ำ 2 ซีซี กิน 0.8 ซีซี)'
    total = 5
  } else if (form_weight < 4.5) {
    startDose = 140
    numStartDose = 0.75
    conDose = '60'
    numConDose = '60mg (ครึ่งเม็ด ผสมน้ำ 2 ซีซี กิน 1.2 ซีซี)'
    total = 6
  } else if (form_weight < 5.5) {
    startDose = '175'
    numStartDose = '175mg (1 เม็ด ผสมน้ำ 4 ซีซี กิน 3.5 ซีซี)'
    conDose = 70
    numConDose = '70mg (ครึ่งเม็ด ผสมน้ำ 2 ซีซี กิน 1.4 ซีซี)'
    total = 6
  } else if (form_weight >= 50 && form_weight <= 90) {
    startDose = 1800
    numStartDose = 9
    conDose = 800
    numConDose = 4
    total = 50
  } else if (form_weight > 90) {
    startDose = 2400
    numStartDose = 12
    conDose = 1000
    numConDose = 5
    total = 64
  }
  
  
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