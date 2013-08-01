Local-Storage-and-EPUB-3
========================
##Overview

This EPUB 3 project illustrates usage of HTML5's local storage and contenteditable features in EPUB 3 publications. 
Also, it can be used as a template to get start an ebook.


##Structure of the EPUB 3 file 

     ▾ /localStorage_example
      ▾ META-INF/
        ▪ container.xml
      ▪ mimetype
      ▾ OPS/ (Open Publishing Structure)
        ▾ book/
          ▪ cover.xhtml
          ▪ s002.xhtml
          ▪ s003.xhtml
          ▪ s004.xhtml
          ▾ css/
            ▪ local.css
           ▾ images/
            ▪ yenicover.png
        ▪ package.opf
        ▪ TOC.xhtml


##Code Examples 

To store and display an item using localStorage: 

    <!DOCTYPE html>
    <html xmlns="http://www.w3.org/1999/xhtml" xmlns:epub="http://www.idpf.org/2007/ops" lang="en">
    <head>
    <meta http-equiv="default-style" content="text/html; charset=utf-8"/>
    <title>Page 2</title>
    <meta name="viewport" content="width=1024, height=748"/>
    <link rel="stylesheet" href="css/local.css" type="text/css"/>
    

       <script type="text/javascript">
        var pageId="Page2";
        
        //STORE ITEM IN LOCAL STORAGE USING A KEY/ID
        function storeNote(id) {
            var note = document.getElementById('note').innerHTML;
            localStorage.setItem(pageId,note);
        }
        //GET ITEM FROM LOCAL STORAGE USING ITS OWN KEY/ID
        function getNote() {
            if ( localStorage.getItem(pageId)) {
                var note = localStorage.getItem(pageId);
            }
            else {
                var note = 'Take Note!';
            }
            document.getElementById('note').innerHTML = note; //DISPLAY ITEM STORED IN LOCAL STORAGE BEFORE ON THE CONTENTEDITABLE "NOTE" DIV
        }
    </script>
    </head>
    <body style="margin:0.00em; text-align:center; background:#A3FBD6;">
    <h1>Page 2</h1>
    <div id="note_area">
    <pre id="note" contenteditable="true" onkeyup="storeNote(this.id);">Take Note!</pre><!-- CONTENTEDITABLE ATTRIBUTE -->
    <br></br>
    </div>
    <script>
      getNote(); 
    </script>
    </body>
    </html>


To clear the localStorage item on a definite page, add the function below to the script. 

    function clearLocalStorage(id) {
        localStorage.removeItem(pageId); 
        document.getElementById('note').innerHTML='Take Note!'
    }
    
And add the code below to body. 

    <a href='' onclick='clearLocalStorage();'>Clear local storage on this page</a>
    
If you want to clear all of the localStorage items, you can use "localStorage.clear();" without using any key/id. 
