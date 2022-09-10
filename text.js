// let input = document.querySelector('input');
//let textarea = document.querySelector('textarea');
//input.addEventListener('change', () => {
    //let files = input.files;
   // if(files.length == 0) return;
   // const file = files[0];
  //  let reader = new FileReader();
  //  reader.onload = (e) => {
   //     const file = e.target.result;
   //     const lines = file.split(/\r\n|\n/);
   //     textarea.value = lines.join('\n');
   // };
   // reader.onerror = (e) => alert(e.target.error.name);
  //  reader.readAsText(file); 
    
//});


function read()  
{  
     var txtFile = new XMLHttpRequest();  
     txtFile.open("GET", "http://192.168.56.1:8000/text.txt", true);  
     txtFile.onreadystatechange = function()   
     {  
          if (txtFile.readyState === 4)   
          {  
               // Makes sure the document is ready to parse.  
               if (txtFile.status === 200)   
               {  
                    // Makes sure it's found the file.  
                    document.getElementById("div").innerHTML = txtFile.responseText;  
               }  
          }  
     }  
     txtFile.send(null)  
}  