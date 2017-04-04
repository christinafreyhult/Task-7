let myVid = document.getElementById('myVideo');
let vidTime;
let highligtedList;

let text1 = document.getElementById("sub-1");
let text2 = document.getElementById("sub-2");
let text3 = document.getElementById("sub-3");
let text4 = document.getElementById("sub-4");
let text5 = document.getElementById("sub-5");
let text6 = document.getElementById("sub-6");
let text7 = document.getElementById("sub-7");
let text8 = document.getElementById("sub-8");
let text9 = document.getElementById("sub-9");
let text10 = document.getElementById("sub-10");
let text11 = document.getElementById("sub-11");
let text12 = document.getElementById("sub-12");
let text13 = document.getElementById("sub-13");
let text14 = document.getElementById("sub-14");
let text15 = document.getElementById("sub-15");
let text16 = document.getElementById("sub-16");

/* ---------- Run the function as long as the video is playing ---------- */

myVid.ontimeupdate = function() {myFunction()};


/*-- Remove any old highlights, either from the progress of the video or jumps in the timeline --*/

function clearHighlights(){ 
    highligtedList = document.getElementsByClassName("highlighted");
    if(highligtedList.length == 1){
        highligtedList[0].classList.remove("highlighted");
    }
}

/*-- Check what the current video time is and highlight the corresponding text --*/

function myFunction(){
       
    vidTime = myVid.currentTime;
    
        if(vidTime>0.0001 && vidTime<4.13){
            clearHighlights();
            text1.className = "highlighted";
        }
        if(vidTime>4.13 && vidTime<7.535){
            clearHighlights();
            text2.className = "highlighted";
        }
        if(vidTime>7.535 && vidTime<11.27){
            clearHighlights();
            text3.className = "highlighted";
        }
        if(vidTime>11.27 && vidTime<13.96){
            clearHighlights();
            text4.className = "highlighted";
        }
        if(vidTime>13.96 && vidTime<17.94){
            clearHighlights();
            text5.className = "highlighted";
        }
        if(vidTime>17.94 && vidTime<22.37){
            clearHighlights();
            text6.className = "highlighted";
        }
        if(vidTime>22.37 && vidTime<26.88){
            clearHighlights();
            text7.className = "highlighted";
        }
        if(vidTime>26.88 && vidTime<30.92){
            clearHighlights();
            text8.className = "highlighted";
        }
        if(vidTime>30.92 && vidTime<34.73){
            clearHighlights();
            text9.className = "highlighted";
        }
       if(vidTime>34.73 && vidTime<39.43){
            clearHighlights();
            text10.className = "highlighted";
        }
        if(vidTime>39.43 && vidTime<41.19){
            clearHighlights();
            text11.className = "highlighted";
        }
        if(vidTime>41.19 && vidTime<46.30){
            clearHighlights();
            text12.className = "highlighted";
        }
        if(vidTime>46.30 && vidTime<49.27){
            clearHighlights();
            text13.className = "highlighted";
        }
        if(vidTime>49.27 && vidTime<53.76){
            clearHighlights();
            text14.className = "highlighted";
        }
        if(vidTime>53.76 && vidTime<57.78){
            clearHighlights();
            text15.className = "highlighted";
        }
        if(vidTime>57.78 && vidTime<100.15){
            clearHighlights();
            text16.className = "highlighted";
        }
}