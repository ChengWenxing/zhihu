/**
 * Created by qingyun on 16/8/31.
 */
var bar =document.querySelector('#bar');
var zhuce =document.querySelector('#zhuce');
var denglu =document.querySelector('#denglu');
var footer =document.querySelector('#footer');
var form1=document.querySelector('#form1');
var form2=document.querySelector('#form2');
var qita=document.querySelector(".qita");
var shejiao=document.querySelector(".shejiao");

denglu.onclick=function () {
    form2.style.display="block";
    form1.style.display="none";
    denglu.style.color="#0f88eb";
    bar.style.left="90px";
    zhuce.style.color="#555";

};
zhuce.onclick=function () {
    form2.style.display="none";
    form1.style.display="";
    zhuce.style.color="#0f88eb";
    bar.style.left="14px";
    denglu.style.color="#555";
};
shejiao.onclick=function () {

    if(qita.style.display=="inline-block"){
        qita.style.display="none";
    }else{
        qita.style.display="inline-block";
    }

}
window.onresize=function () {
    var H=document.body.offsetHeight;
    if(H<=620){
        footer.style.display="none";
    }else{
        footer.style.display="";
    }
}