
function getStorageById(){

    var keys=new Array();
    var values=new Array();
    var len= localStorage.length;
    for(var i=0; i<len; i++){
        keys[i]= localStorage.key(i);
        values[i]=localStorage.getItem(localStorage.key(i));
    }

    document.getElementById('keys1').innerHTML= "id:"+keys[0];
    document.getElementById('values1').innerHTML="Local storage value:" + values[0];
    document.getElementById('keys2').innerHTML="id:" + keys[1];
    document.getElementById('values2').innerHTML="Local storage value:" + values[1];

    //this.preventDefault();
    return false;
}
