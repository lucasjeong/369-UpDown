let i = 1;
let num369 = 0;
const inputtag = document.getElementById("input");
const btn = document.getElementById("btn");

btn.onclick = (event) => {
    const input = Number(inputtag.value);
    
    for(i=1 ; i<=input ; i++) {
        let element = document.createElement('div');
        document.body.append(element);
        let temp = i;
        while(temp!=0){
            if((temp%10===3)|(temp%10===6)|(temp%10===9)){
                num369++;
            }
            temp = Math.floor(temp/10);
        }
    
        if(num369===0){
            element.textContent = i;
        }
        else{
            element.textContent = '짝'.repeat(num369);
        }
        num369=0;
    }
    event.preventDefault();
}

