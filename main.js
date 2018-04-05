  //senthatic sugar
  function $(id){
   return document.getElementById(id);
  }
  let btnSubmit = document.getElementById('submit');
  btnSubmit.onclick = function (){
    show_div();
  }
  let btnCancel = document.getElementById('cancel');
  btnCancel.onclick = function(){
    hide_div();
  }
  //for storing user input data we use object for now
  let data = {};
  let prevFrom ;
  let prevHeader ;
   function addFirstFrom() {
    $("popup-header").innerHTML = prevHeader;
    $("form").innerHTML = prevFrom;
    $("ok").setAttribute("onclick","onClick_Ok()")
    $("cancel").setAttribute("onclick","hide_div()")
   }
   function onClick_Ok(){
     //store the data to object
     if( $("input-port-sizes").value === ""
        || $("output-port-sizes").value ===""
        || $("input-event-ports-sizes").value === ""
        || $("output-events-ports-sizes").value === ""
        || $("initial-continuous-state").value ===""
        || $("initial-discrete state").value ===""
        || $("system-parm-vector").value ===""
        || $("firing-vector").value===""
        || $("block-always-active").value ===""){
          alert("please enter valid input")
        }
        else{
           //if input is going to above 10 then we can use for each loop
           data["input ports sizes"] =  $("input-port-sizes").value;
           data["output port sizes"] = $("output-port-sizes").value;
           data["input event ports sizes"] = $("input-event-ports-sizes").value;
           data["output events ports sizes"] = $("output-events-ports-sizes").value;
           data["initial continuous state"] = $("initial-continuous-state").value;
           data["initial discrete state"] = $("initial-discrete state").value;
           data["System parameters vector"] = $("system-parm-vector").value;
           data["initial firing vector (<0 for no firing)"] = $("firing-vector").value;
           data["is block always active():no,1:yes)"] = $("block-always-active").value;

           //covert to another popup
          const header = document.getElementById("popup-header");
          let form = document.getElementById("form");
          //stroe the first form
          prevFrom = header.innerHTML;
          prevFrom = form.innerHTML;
          form.innerHTML = "";
          header.innerHTML = "Define function which computes the output<br><br>"
                            +"Enter Scilab instructions defining<br>"
                            +"y1(size:1)<br>"
                            +"as a function of t,u1,n_evi,<br>";
          //remove the form
          let input = document.createElement("input");
          input.setAttribute("type", "text");
          input.setAttribute("id", "f-input");
          form.append(input) ;
          $("ok").setAttribute("onclick","nextSubmitOk()")
          $("cancel").setAttribute("onclick","nextSubmitCancel()")
        }
  }

  //on next submission of another pop up
  function nextSubmitOk(){
    if($("f-input").value === ""){
      alert("please enter valid input")
    }else{
      data["scilab instruction fucntion"] = $("f-input").value;
      addFirstFrom();
      printdata();
      hide_div();

    }
  }
  function nextSubmitCancel(){
    addFirstFrom();
    printdata();
    hide_div();
  }
  //print data object to HTML
  function printdata(){
    document.getElementsByClassName("data")[0].innerHTML = '';
    let keys = Object.keys(data);
    keys.map((key)=>{
      let i = document.createElement("span");
      i.innerText = key;
      let k = document.createElement("span");
      k.innerText = data[key];

      let dataTableElement = document.getElementsByClassName("data")[0];
      dataTableElement.appendChild(i);
      dataTableElement.appendChild(k);
    })
    data = {};
  }
  //function to dispaly popup
  function show_div(){
    document.getElementById("container").style.display = "block";
  }
  //fucntion to hide div
  function hide_div(){
    document.getElementById("container").style.display = "none";
  }
