
function diagnose() {
  var kaka = document.getElementById('kaka').value;
  var omos = document.getElementById('omos').value;
  var cpuse=document.getElementById('cpuse').value;
  var cpu = document.getElementById('cpu').value;
  var ref = document.getElementById('ref').value;
  var memo = document.getElementById('memo').value;
  var suto = document.getElementById('suto').value;
  var resultText = "";
  
  if(kaka === "" && omos === ""&&cpu===""&&memo===""&&suto===""&&cpuse==="") {
    resultText = "いずれかの質問に答えてください。";
  }else{
    window.open('https://kakaku.com/pc/note-pc/itemlist.aspx?pdf_Spec101='+cpu+'&pdf_Spec113='+cpuse+'&pdf_Spec303='+omos+'&pdf_Spec307='+suto+'&pdf_Spec308='+memo+'&pdf_Spec312='+ref+'&pdf_pr='+kaka+'', '_blank');
  }
  

  document.getElementById('result').style.display = 'block';
  document.getElementById('result').innerHTML = resultText;
}

function diagnose2() {
  var youto = document.getElementById('youto').value;
  var resultText = "";

if(youto === ""){
  resultText = "質問に答えてください。";
}
if(youto === "gaku"){
  window.open('https://kakaku.com/pc/note-pc/itemlist.aspx?pdf_Spec101=39,40,63&pdf_Spec303=0-2&pdf_Spec307=512&pdf_Spec308=16', '_blank');
}
else if (youto === "job"){
  window.open('https://kakaku.com/pc/note-pc/itemlist.aspx?pdf_Spec101=39,52,53&pdf_Spec105=29,30&pdf_Spec303=0-2&pdf_Spec307=512-&pdf_Spec308=16-', '_blank');
}
else if (youto === "gemu"){
  window.open('https://kakaku.com/pc/note-pc/itemlist.aspx?pdf_Spec070=1', '_blank');
}
else if (youto === "douga"){
  window.open('https://kakaku.com/pc/note-pc/itemlist.aspx?pdf_Spec101=39&pdf_Spec119=24,26,35,36,39,40,42,43,45,60,61,62,63&pdf_Spec308=32-', '_blank');
}
document.getElementById('result2').style.display = 'block';
  document.getElementById('result2').innerHTML = resultText;
}
