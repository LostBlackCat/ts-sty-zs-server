var fs = require("fs")
var file_path = 'C:\\Users\\54943\\Desktop\\项目&研究\\风数据\\中P雷达数据\\20171001';
categories = 'file'
function Iteration(){
  var dirlist = fs.readdirSync(file_path)
  filename = []
  if(dirlist.length == 0){
    none
  }
  else{
    dirlist.forEach(function(dirname){
      var new_path = file_path + '\\' + dirname;
      var stat = fs.statSync(new_path);//检查是否为文件夹
      if(categories == 'file'){
        if(stat && stat.isFile()){
          filename.push(dirname)
        }
      }
      else{
        if(stat && stat.isDirectory()){
          filename.push(dirname)
        }
      }
      
    });
  }
  HTMLcontent = ''
  for(var i=0;i<filename.length;i++){
    HTMLcontent += '<option>' + filename[i] + '</option>'
  }
  console.log(HTMLcontent)
  select = document.getElementById('allfile')
  select.innerHTML = HTMLcontent
}
Iteration()

