var ls_num;

function test(e)
{

var x = e.clientX;  
var y = e.clientY ; 
ls_num = x + y;

if (ls_num > 1900) // ���û�ж�����
{

window.location.href  = './second.html'; // 
}

}


// �����Ҽ�
function stop(){ 
return false; 
} 
document.oncontextmenu=stop; 