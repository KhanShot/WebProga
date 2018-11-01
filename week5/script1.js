function onClick(){
  let a = parseInt(document.querySelector("#s11").value);
  let b = parseInt(document.querySelector("#s22").value);
  let c = parseInt(document.querySelector("#s33").value);
  let d = parseInt(document.querySelector("#s12").value);
  let e = parseInt(document.querySelector("#s23").value);
  let f = parseInt(document.querySelector("#s31").value);
  let g = parseInt(document.querySelector("#s21").value);
  let h = parseInt(document.querySelector("#s32").value);
  let i = parseInt(document.querySelector("#s13").value);
  document.querySelector("#result").textContent=a*b*c+d*e*f+g*h*i - i*b*f-d*g*c-e*h*a;
}