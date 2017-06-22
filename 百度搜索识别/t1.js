function ajaxFunc(json){
  var obj = json;
  var content = document.getElementById("content");
  while(content.hasChildNodes()){
    content.removeChild(content.firstChild);
  }
  for(var i = 0; i < json.s.length; i ++){
    let j = document.createElement("p");
    j.innerText = json.s[i];
    content.appendChild(j);
  }
}

function clickBtn(){
  var text = document.getElementById("search").value;
  var a = document.createElement("script");
  var body = document.getElementsByTagName("body")[0];
  var a_arr = document.getElementsByTagName("script");
  for(var i = 0; i < a_arr.length ; i ++){
    if(a_arr[i].tag === "1"){
      body.removeChild(a_arr[i]);
    }
  }
  a.tag = "1";
  a.src = "https://sp0.baidu.com/5a1Fazu8AA54nxGko9WTAnF6hhy/su?wd=" + text + "&cb=ajaxFunc";
  body.appendChild(a);
}














// function keyChange(){
//   var xhr;
//   if (window.XMLHttpRequest)
//   {// code for IE7+, Firefox, Chrome, Opera, Safari
//   xhr = new XMLHttpRequest();
//   }
// else
//   {// code for IE6, IE5
//   xhr = new ActiveXObject("Microsoft.XMLHTTP");
//   }
//   xhr.onreadystatechange = function(){
//     if(xhr.readyState == 4 && xhr.status == 0){
//       document.getElementById("info").innerHTML = xhr.responseText;
//     }
//   }
//   xhr.open("GET","t1.txt",true);
//   xhr.send();
// }
