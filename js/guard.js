var ls_num;

function test(e)
{

var x = e.clientX;  
var y = e.clientY ; 
ls_num = x + y;

if (ls_num > 1900) // 鼠标没有动静了
{

window.location.href  = './second.html'; // 
}

}


// 禁用右键
function stop(){ 
return false; 
} 
document.oncontextmenu=stop; 