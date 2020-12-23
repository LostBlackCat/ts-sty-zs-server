var param_num = 7
var parameters = []
box = document.getElementById("bomb_box")
buttoninfor = box.innerHTML
inner_content = '<div class="block-header">'
inner_content += '<h4 style="font-size:24px;">装备参数选择'
inner_content += '<div class="close">'
inner_content += '<a href="javascript:void(0)" onclick="closewindow()"></a>'
inner_content += '</div>'
inner_content += '</h4>'
inner_content += '</div>'
inner_content += '<div class="box-block">'
inner_content += '<div class="box-splite">'
inner_content += '<label>参数名称</label>'
inner_content += '</div>'
inner_content += '<div class="box-splite">'
inner_content += '<label>参数值</label>'
inner_content += '</div>'
inner_content += '</div>'
for (var i = 0; i < 7; i++) {
    if(i%2==0){
        inner_content += '<div class="box-block" style="background:none">'
    }
    else{
        inner_content += '<div class="box-block">'
    }
    inner_content += '<div class="box-splite">'
    inner_content += '<label>参数'+(i+1)+'</label>'
    inner_content += '</div>'
    inner_content += '<div class="box-splite">'
    if(parameters.length == 0){
        inner_content += '<input type="text" id="param' + i + '"></input>'
    }
    else if(parameters.length == 7){
        inner_content += '<input type="text" id="param' + i + ' value='+parameters[i]+'"></input>'
    }
    inner_content += '</div>'
    inner_content += '</div>'
}
box.innerHTML = inner_content + buttoninfor
function closewindow() {
    document.getElementById("bomb_box").style.display = "none";
    document.getElementById("popLayer").style.display = "none"
}
function fileselect() {
    document.getElementById("taskfile").click();
}
function showfile() {
    filepath = document.getElementById("taskfile").value
    document.getElementById("refile").style.background = "#98FB98"
    document.getElementById("refile").style.color = "#0d325f"
    task_contents = document.getElementById("task_content").value
    time = getTime()
    task_contents += '\n已选择文件：' + filepath + "--" + time
    document.getElementById("task_content").value = task_contents
}
function taskselect() {
    document.getElementById("tasks").style.background = "#98FB98"
    document.getElementById("tasks").style.color = "#0d325f"
    task_contents = document.getElementById("task_content").value
    time = getTime()
    task_contents += '\n触发任务选择功能--' + time
    document.getElementById("task_content").value = task_contents
}
function equipment() {
    document.getElementById("equip").style.background = "#98FB98"
    document.getElementById("equip").style.color = "#0d325f"
    task_contents = document.getElementById("task_content").value
    time = getTime()
    task_contents += '\n触发装备参数功能--' + time
    document.getElementById("task_content").value = task_contents
    document.getElementById("bomb_box").style.display = 'none'
    document.getElementById("popLayer").style.display = "none"
}
function atmosparam() {
    document.getElementById("atmos").style.background = "#98FB98"
    document.getElementById("atmos").style.color = "#0d325f"
    task_contents = document.getElementById("task_content").value
    time = getTime()
    task_contents += '\n触发大气参数功能--' + time
    document.getElementById("task_content").value = task_contents
}
function inputarea() {
    document.getElementById("inarea").style.background = "#98FB98"
    document.getElementById("inarea").style.color = "#0d325f"
    task_contents = document.getElementById("task_content").value
    time = getTime()
    task_contents += '\n触发输入区功能--' + time
    document.getElementById("task_content").value = task_contents
}
function hidden_menu() {
    show = document.getElementById('menu')
    console.log(show.style.display)
    if (show.style.display == "") {
        show.style.display = "none"
        document.getElementById('button_show').title = '显示属性栏'
    }
    else {
        show.style.display = ""
        document.getElementById('button_show').title = '隐藏属性栏'
    }
}
function equipparam() {
    //console.log(123)
    document.getElementById("bomb_box").style.display = "block"
    document.getElementById("popLayer").style.display = "block"

}