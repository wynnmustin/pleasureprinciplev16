
function init() {

    document.getElementById("data1-link").addEventListener('click',function(){
      //  var categorySelected;
        var category = document.getElementsByName('category');
var selectedCategory;
for(var i = 0; i < category.length; i++){
    if(category[i].checked){
        selectedCategory = category[i].value;
   // }
     if (selectedCategory == 'tobacco') {
        // // do something
         document.getElementById("logopages1").innerHTML = "<img src='img/tobaccolrg.png'>" ;
        document.getElementById("logopages2").innerHTML = "<img src='img/tobaccolrg.png'>" ;
        document.getElementById("logopages3").innerHTML = "<img src='img/tobaccolrg.png'>" ;
         document.getElementById("logopages4").innerHTML = "<img src='img/tobaccolrg.png'>" ;
         document.getElementById("logopagestimeline").innerHTML = "<img src='img/minilogo.png'>" + "<img src='img/tobaccolrg.png'>" + "<img src='img/minilogo.png'>";
             }
    else if (selectedCategory == 'alcohol') {
        // // do something else
         document.getElementById("logopages1").innerHTML = "<img src='img/alcohol.png'>" ;
        document.getElementById("logopages2").innerHTML = "<img src='img/alcohol.png'>";
        document.getElementById("logopages3").innerHTML = "<img src='img/alcohol.png'>" ;
         document.getElementById("logopages4").innerHTML = "<img src='img/alcohol.png'>";
        document.getElementById("logopagestimeline").innerHTML = "<img src='img/minilogo.png'>" + "<img src='img/alcohol.png'>" + "<img src='img/minilogo.png'>";
   
             }  
    else if (selectedCategory == 'snacks') {
        // // do something else
         document.getElementById("logopages1").innerHTML = "<img src='img/snacks.png'>" ;
        document.getElementById("logopages2").innerHTML = "<img src='img/snacks.png'>" ;
        document.getElementById("logopages3").innerHTML = "<img src='img/snacks.png'>";
         document.getElementById("logopages4").innerHTML = "<img src='img/snacks.png'>";
        document.getElementById("logopagestimeline").innerHTML = "<img src='img/minilogo.png'>" + "<img src='img/snacks.png'>" + "<img src='img/minilogo.png'>";

     }  
      else if (selectedCategory == 'other') {
        // // do something else
        document.getElementById("logopages1").innerHTML = "<img src='img/other.png'>" ;
        document.getElementById("logopages2").innerHTML = "<img src='img/other.png'>";
        document.getElementById("logopages3").innerHTML = "<img src='img/other.png'>" ;
         document.getElementById("logopages4").innerHTML = "<img src='img/other.png'>";
        document.getElementById("logopagestimeline").innerHTML = "<img src='img/minilogo.png'>" + "<img src='img/other.png'>" + "<img src='img/minilogo.png'>";
         }  
    }
}
        // var theForm = document.forms['habitSelection'];
        // var radios = theForm.elements['category'];
        //     window.rdValue; //

        // function loadHabitLogo() {
        // getRadioValue('category');
        //
        // else if (rdValue == 'alcohol') {
        // // do something else
        //  document.getElementById("imgBox").innerHTML = "<img src='../img/alcohol.png'>";
        //     }  
        // else if (rdValue == 'snacks') {
        // // do something else
        //  document.getElementById("imgBox").innerHTML = "<img src='../img/snacks.png'>";
        //     }  
        //  else if (rdValue == 'other') {
        // // do something else
        //  document.getElementById("imgBox").innerHTML = "<img src='../img/other.png'>";
        //     }  
        // } 
    });

     document.getElementById("data3-link").addEventListener('click',function(){


       function formatDate(date1){
        var dd= date1.getDate()
        if (dd<10 ) dd = '0' + dd

        var mm = date1.getMonth() + 1
        if (mm < 10) mm = '0' + mm

        var yy = date1.getFullYear() % 100
        if (yy < 10 ) yy= '0' + yy

        return mm + '.' + dd + '.' + yy
 
       }

        var date1=new Date();
        var startDate = document.getElementById("problemDate").value;// for current date
        var date2 =new Date(startDate);

      
         // for other date you can get the another date from a textbox by
         // var Newdate=document.getElementById('<%=textBox1.ClientID%>').value;
         // convert Newdate to dateTime by......   var date2=New Date(Newdate);

        var yearDiff=date1.getFullYear()-date2.getFullYear();// for year difference
        var y1=date1.getFullYear();
        var y2=date2.getFullYear();
        var monthDiff=(date1.getMonth() + y1*12)-(date2.getMonth() +y2*12);
        var day1=parseInt(date1.getDate());
        var day2=parseInt(date2.getDate());
        var dayDiff= (day1-day2)+ (monthDiff * 30);
        var weeksSince = dayDiff/7; 

        var habitCostPerWeek,
            getItemCost,
            getFrequency;

        getItemCost = document.getElementById("cost").value;
        getFrequency = document.getElementById("purchFrequency").value;   
    

        habitCostPerWeek = getItemCost * getFrequency;

        var costSinceStart;
            costSinceStart= habitCostPerWeek * weeksSince;
         var result=Math.round(costSinceStart*100)/100  //returns 28.45
   // document.write("Number of day difference : "+dayDiff);
   var divobj = document.getElementById('timeline3');
    divobj.style.display='block';
     divobj.innerHTML = "today, "+ formatDate(date1);
      var divobj = document.getElementById('calculation3');
    divobj.style.display='block';
     divobj.innerHTML = "There would be $ "+ result + " extra dollars in your checking account today if it hadn't gone to the pleasure principle";
    // divobj.innerHTML = "Number of weeks since "+ weeksSince;
    });

    document.getElementById("data3-link").addEventListener('click',function(){
        
    var habitCostPerWeek,
       getItemCost,
       getFrequency;

       var date1=new Date();

       function formatDate(date2){
        var dd= date2.getDate()
        if (dd<10 ) dd = '0' + dd

        var mm = date2.getMonth() + 1
        if (mm < 10) mm = '0' + mm

        var yy = date2.getFullYear() % 100
        if (yy < 10 ) yy= '0' + yy

        return mm + '.' + dd + '.' + yy
 
       }
        var startDate = document.getElementById("problemDate").value;// for current date
        var date2 =new Date(startDate);


      

    getItemCost = document.getElementById("cost").value;
    getFrequency = document.getElementById("purchFrequency").value;   
    

    habitCostPerWeek = getItemCost * getFrequency;
 var divobj = document.getElementById('timeline1');
    divobj.style.display='block';
     divobj.innerHTML = ""+ formatDate(date2);
     // divobj.innerHTML = ""+ startDate;
    var divobj = document.getElementById('calculation1');
    divobj.style.display='block';
    divobj.innerHTML = "DAY ZERO: Date on which you started spending a weekly average of $"+ habitCostPerWeek + " to chase the pleasure principle";
   // alert(habitCostPerWeek);

    });


   

    document.getElementById("data4-link").addEventListener('click',function(){
        var date1=new Date();
        var startDate = document.getElementById("problemDate").value;// for current date
        var date2 =new Date(startDate);

         // for other date you can get the another date from a textbox by
         // var Newdate=document.getElementById('<%=textBox1.ClientID%>').value;
         // convert Newdate to dateTime by......   var date2=New Date(Newdate);

        var yearDiff=date1.getFullYear()-date2.getFullYear();// for year difference
        var y1=date1.getFullYear();
        var y2=date2.getFullYear();
        var monthDiff=(date1.getMonth() + y1*12)-(date2.getMonth() +y2*12);
        var day1=parseInt(date1.getDate());
        var day2=parseInt(date2.getDate());
        var dayDiff= (day1-day2)+ (monthDiff * 30);
        var weeksSince = dayDiff/7; 



        var habitCostPerWeek,
            getItemCost,
            getFrequency;

        getItemCost = document.getElementById("cost").value;
        getFrequency = document.getElementById("purchFrequency").value;   
    

        habitCostPerWeek = getItemCost * getFrequency;

        var costSinceStart;
            costSinceStart= habitCostPerWeek * weeksSince;
         var result=Math.round(costSinceStart*100)/100  //returns 28.

         var getTargetCost,
         adjustedCost,
           weeksTilTarget;

            getTargetCost=document.getElementById("targetCost").value;
            adjustedCost= getTargetCost - result;
            weeksTilTarget= adjustedCost / habitCostPerWeek;
            var result2=Math.round(weeksTilTarget*10)/10  //returns 28.5

            var monthsFromStart = result2/4;
            var monthsFromStartRounded = Math.round(monthsFromStart*10)/10  

             var divobj = document.getElementById('timeline2');
    divobj.style.display='block';
     divobj.innerHTML = monthsFromStartRounded + " months later";
      var divobj = document.getElementById('calculation2');
    divobj.style.display='block';
         divobj.innerHTML = ""+ monthsFromStartRounded + " months from Day 0 is when the target could have been purchased if spending towards your vice never began";
     // divobj.innerHTML = "you've spent $"+ result + "" + "since your habit became problematic";
    });

    document.getElementById("data4-link").addEventListener('click',function(){
        var date1=new Date();
        var startDate = document.getElementById("problemDate").value;// for current date
        var date2 =new Date(startDate);

         // for other date you can get the another date from a textbox by
         // var Newdate=document.getElementById('<%=textBox1.ClientID%>').value;
         // convert Newdate to dateTime by......   var date2=New Date(Newdate);

        var yearDiff=date1.getFullYear()-date2.getFullYear();// for year difference
        var y1=date1.getFullYear();
        var y2=date2.getFullYear();
        var monthDiff=(date1.getMonth() + y1*12)-(date2.getMonth() +y2*12);
        var day1=parseInt(date1.getDate());
        var day2=parseInt(date2.getDate());
        var dayDiff= (day1-day2)+ (monthDiff * 30);
        var weeksSince = dayDiff/7; 



        var habitCostPerWeek,
            getItemCost,
            getFrequency;

        getItemCost = document.getElementById("cost").value;
        getFrequency = document.getElementById("purchFrequency").value;   
    

        habitCostPerWeek = getItemCost * getFrequency;

        // var costSinceStart;
        //     costSinceStart= habitCostPerWeek * weeksSince;
        //  var result=Math.round(costSinceStart*100)/100  //returns 28.

         var getTargetCostWithHabit,
           weeksTilTargetWithHabit;

            getTargetCostWithHabit=document.getElementById("targetCost").value;
            weeksTilTargetWithHabit= getTargetCostWithHabit / habitCostPerWeek;
            var result2=Math.round(weeksTilTargetWithHabit*10)/10  //returns 28.5

            var monthsFromToday = result2/4;
             var monthsFromTodayRounded = Math.round(monthsFromToday*10)/10  

             var divobj = document.getElementById('timeline4');
    divobj.style.display='block';
     divobj.innerHTML = monthsFromTodayRounded + " months from today";
      var divobj = document.getElementById('calculation4');
    divobj.style.display='block';
         divobj.innerHTML = "The target purchase becomes affordable "+ monthsFromTodayRounded + " months from today if problematic spending continues";
     // divobj.innerHTML = "you've spent $"+ result + "" + "since your habit became problematic";
    });
};


window.onload = init;
