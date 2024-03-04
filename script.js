var index = 0;
function changeColors(){
    var colors = ["red" , "blue" , "black" ,"yellow" , "orange" ,"purple" , "brown" ,"pink", "green" , "maroon" ];

    document.getElementsByTagName("body")[0].
    style.background = colors[index++];
    /*as we have only one body tag so we wrote body here . Otherwise we were suppose to mention the specific tag in the body. */

    if(index > colors.length -1)
    index = 0;

}