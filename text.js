/* 文本题交互js
 * tid: 题干id
 * sid: 文本id
 */

function unparse_text(tid){
    var sid = document.getElementById(tid).getAttribute("text_id");
    var text = "["+document.getElementById(sid).value+"]";
    return "text="+text;
}

document.getElementById("unparse").onclick = function(){
    console.log(unparse_text("test_text"));
}
