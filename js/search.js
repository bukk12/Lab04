function numberCars(){
    var order = prompt('what car would you like to see').toLowerCase();
    var item;
    
    while (order !== '350z' && order !== '370z' && order !== 'r32' && order !== 'r34' && order !== 's13' && order !== 's14'){
         order = prompt('please enter a car: 350z, 370z, r32, r34, s13, or s14')

}
    if (order == '350z'){
         item = '<img src="images/350z.jpg" width= "500"';
    }if (order == '370z'){
         item = '<img src="images/370z.jpg" width= "500">';
    }if (order === 'r32'){
         item = '<img src="images/r32.jpg" width= "500">';
    }if (order === 'r34'){
         item = '<img src="images/r34.jpg" width= "500">';
    }if (order === 's13'){
         item = '<img src="images/s13.png" width= "500">';
    }if (order === 's14'){
         item ='<img src="images/s14.jpg" width= "500">';
    }

    return item

}

var howMany = function(){
    var Amount = prompt('How Many cars would you like to see?');

    while (Amount === '' || isNaN(Amount)){
         Amount = prompt('Please enter a number! How many would you like to see?');
    }

    return Number(Amount);
}

var showOrder = function(){
    var item = numberCars();
    var total = howMany();

    var result = '';
    for(var i = 0; i < total; i++){
         result = result + '<p>' + ' ' + item + '</p>';
    }
    return result;

}