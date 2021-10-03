/** ```javascript
function printKotak(num){
    // code here

}
// Result: Input : 5
printKotak(5);

xxxxx
x   x
x   x
x   x
xxxxx
```
*/
var bintang='';
function printKotak(num){
    for (var i=0; i<num; i++){
        if(i===0 || i===num-1){
            for(var j=0; j<num; j++){
                bintang +='*';
            }
        } else {
            for(var j=0; j<num; j++){
                if(j===0 || j===num-1){
                    bintang += '*';
                } else {
                    bintang += ' ';
                }
            }      
        }
        console.log(bintang);
        bintang ='';
}}
printKotak(5);
