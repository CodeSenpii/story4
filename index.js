window.addEventListener("load", activateReader);

function activateReader(){

// ------------------------------
  var counter = 0;
  var page = 0;// track p-tags elements
   // --------------------------------
  var gold = "white";
  var d = document.querySelectorAll('p');

  var buttons = document.querySelectorAll('button');


  buttons[0].addEventListener('click', function(e){
    if(counter < d.length - 1) {
    if(d[page].id && page < d.length - 1){
      document.getElementById(label_id[d[page].id]).checked = true;
    }

    // insert line pagination
    d[counter].classList.remove("prefix", "postfix");
    d[counter].style.background = "none";
    // add pagination to lines
    d[counter+1].classList.add("prefix", "postfix");
    d[counter+1].style.color = "black";
    d[counter+1].style.opacity = 1;
    d[counter+1].style.backgroundColor = gold;
    d[counter+1].style.opacity = 0.8;
    d[counter+1].style.borderRadius = '5px';
    counter ++;
    page ++;

    //back to page 1
    if(d[page].id === "end-page"){
      counter = 0;
      page = 0;
      d[page].style.opacity = 1;
      d[page].style.color = "black";
      d[page].style.backgroundColor = gold;
      d[page].style.opacity = 0.8;
      d[page].classList.add("prefix", "postfix");
      d[page].style.borderRadius = '5px';
    }
  }
}); // button
  buttons[1].addEventListener('click', function(e){
    if(counter != 0){
      // go to previous page - turn page back by checking previous box
      if(page_upId[d[page].classList[0]] != undefined){
        document.getElementById(page_upId[d[page].classList[0]]).checked = true;
        // console.log(page_upId[d[page].classList[0]]);
      }
      // remove pagination from line
      d[counter].classList.remove("prefix", "postfix");
      d[counter].style.background = "none";
      // add pagination to lines
      d[counter-1].classList.add("prefix", "postfix");
      // d[counter+1].style.color = "black";
      d[counter-1].style.backgroundColor = gold;
      d[counter-1].style.opacity = 0.8;
      d[counter-1].style.borderRadius = '5px';
      counter --;
      page --;
    }
  });

  var label_id = {p1:'s2', p2:'s3', p3:'s4', p4:'s5', p5:'s6', p6:'s7',p7:'s8', p8:'s9', p9:'s10', p10:'s11', p11:'s1'};
  var page_upId = {up11:'s10', up10:'s9', up9:'s8', up8:'s7',up7:'s6', up6:'s5', up5:'s4', up4:'s3', up3:'s2', up2:'s1'};

  // init the first line of the first page
  d[0].style.opacity = 1;
  d[0].style.color = "black";
  d[0].style.backgroundColor = gold;
  d[0].style.opacity = 0.8;
  d[0].classList.add("prefix", "postfix");
  d[0].style.borderRadius = '5px';

  document.addEventListener("keydown", function(e){

    // go to next page
    if (e.code === "Space"){


      if(counter < d.length - 1) {
      if(d[page].id && page < d.length - 1){
        document.getElementById(label_id[d[page].id]).checked = true;
      }


      // insert line pagination
      d[counter].classList.remove("prefix", "postfix");
      d[counter].style.background = "none";
      // add pagination to lines
      d[counter+1].classList.add("prefix", "postfix");
      d[counter+1].style.color = "black";
      d[counter+1].style.opacity = 1;
      d[counter+1].style.backgroundColor = gold;
      d[counter+1].style.opacity = 0.7;
      d[counter+1].style.borderRadius = '5px';
      counter ++;
      page ++;
      // back to page 1
      if(d[page].id === "end-page"){
        counter = 0;
        page = 0;
        d[page].style.opacity = 1;
        d[page].style.color = "black";
        d[page].style.backgroundColor = gold;
        d[page].style.opacity = 0.7;
        d[page].classList.add("prefix", "postfix");
        d[page].style.borderRadius = '5px';
      }

    }
  } else if(e.code === 'KeyU'){

      if(counter != 0){

        // go to previous page - turn page back by checking previous box
        if(page_upId[d[page].classList[0]] != undefined){
          document.getElementById(page_upId[d[page].classList[0]]).checked = true;
          // console.log(page_upId[d[page].classList[0]]);
        }

        // remove pagination from line
        d[counter].classList.remove("prefix", "postfix");
        d[counter].style.background = "none";
        // add pagination to lines
        d[counter-1].classList.add("prefix", "postfix");
        // d[counter+1].style.color = "black";
        d[counter-1].style.backgroundColor = gold;
        d[counter-1].style.opacity = 0.7;
        d[counter-1].style.borderRadius = '5px';
        counter --;
        page --;
      }
    }// end elif

  });
}
