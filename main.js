function clearCart(){
    localStorage.clear()
    document.getElementById('prod').innerHTML='Cart is empty';
    
}

function setProdOpts(){
    var prod_id = document.getElementById('prod_name').className;
    //alert("Setting prod opts for: " + prod_id);
    var opts = [];
    var opt1 = document.getElementById('option_1');
    var opt1_key = opt1.className;
    var opt1_val = opt1.value;
    opts.push(opt1_key + ": " + opt1_val);
    var opt2 = document.getElementById('option_2');
    var opt2_key = opt2.className;
    var opt2_val = opt2.value;
    opts.push(opt2_key + ": " + opt2_val);
    var opt3 = document.getElementById('option_3');
    var opt3_key = opt3.className;
    var opt3_val = opt3.value;
    opts.push(opt3_key + ": " + opt3_val);
    var price = document.getElementById('price').innerHTML;
    opts.push("Price: $" + price);
    localStorage.setItem(prod_id, JSON.stringify(opts));
    alert(prod_id + " has been added to the cart.");
    
}


function displayOpts(){
    if(typeof(Storage) === 'undefined'){
        alert('Local storage is not supported by browser')
    }
    var l = localStorage.length;
    if(l === 0){
        document.getElementById('prod').innerHTML='Cart is empty';
    }
    else{
        for(var item in localStorage){
            if(localStorage.hasOwnProperty(item)){
                //alert("prod: " + item);
                var prod_opts = localStorage[item];
                //alert("prod_opts: " + prod_opts);
                var opts = JSON.parse(localStorage.getItem(item));
                //alert("opts: " + opts);
                var newHead = document.createElement('h2');
                document.getElementById('prod').appendChild(newHead);
                newHead.innerHTML = ("Product: " + item);
                //alert("opts length: " + opts.length);
                for (var i = 0; i < opts.length; i++){
                    //alert("Creating para: " + opts[i]);
                    var para = document.createElement('p');
                    para.innerHTML = opts[i];
                    document.getElementById('prod').appendChild(para);
                }
            }
        }
    }
}