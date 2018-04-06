  //senthatic sugar
  function $(id){
   return document.getElementById(id);
  }
  let chart = new Highcharts.Chart({

      chart: {
          renderTo: 'chart',
          animation: false
      },

      title: {
          text: "chart draggable points "
      },

      xAxis: {
          categories: [-2.5,-2,-1.5,-1]
      },

      plotOptions: {
          series: {
              point: {
                  events: {

                      drag: function (e) {
                          // Returning false stops the drag and drops. Example:
                          /*
                          if (e.newY > 300) {
                              this.y = 300;
                              return false;
                          }
                          */
//                          $('#drag').html(
  //                            'Dragging <b>' + this.series.name + '</b>, <b>' + this.category + '</b> to <b>' + Highcharts.numberFormat(e.y, 2) + '</b>');
                      },
                      drop: function () {
    //                      $('#drop').html(
      //                        'In <b>' + this.series.name + '</b>, <b>' + this.category + '</b> was set to <b>' + Highcharts.numberFormat(this.y, 2) + '</b>');
                      }
                  }
              },
              stickyTracking: false
          },
          column: {
              stacking: 'normal'
          },
          line: {
              cursor: 'pointer'
          }
      },

      tooltip: {
          yDecimals: 2
      },

      series: [ {
          data: [-1,-0.8,-1,-0.8],
          draggableY: true,
          draggableX: true,
      }]

  });

  let btnSubmit = document.getElementById('submit');
  btnSubmit.onclick = function (){
    show_div();
  }
  let btnCancel = document.getElementById('cancel');
  btnCancel.onclick = function(){

    hide_div();
    printdata(chart.series[0].data)
  }
  //print data object to HTML
  function printdata(data){
    console.log(data)
    document.getElementsByClassName("data")[0].innerHTML = '';
    data.map((value,index)=>{
      let i = document.createElement("span");
      i.innerText = "point"+(index+1);
      let k = document.createElement("span");
      k.innerText = "["+data[index]["category"]+","+data[index]["y"]+"]";

      let dataTableElement = document.getElementsByClassName("data")[0];
      dataTableElement.appendChild(i);
      dataTableElement.appendChild(k);
    })
  }
  //function to dispaly popup
  function show_div(){
    document.getElementById("container").style.display = "block";
  }
  //fucntion to hide div
  function hide_div(){
    document.getElementById("container").style.display = "none";
  }
