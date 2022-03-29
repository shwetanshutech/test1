
var i = 0;
var pricebuy1 = [i];
var energyresourcesbuy1 = [i];
var Totalforbuyorder1 = [i];
var new_rowi = [i];

var j = 0;
var pricesell1 = [j];
var energyresourcessell1 = [j];
var Totalforsellorder1 = [j];


$(document).ready(function(){

    $('#btn-buy').click(function() {
		if(energyresourcesbuy ==null && pricebuy==null){
			alert("Value Not Entered");
			return false;
		}
		else{
			document.getElementById('buydash').reset();
			
			new_row = "<tr><td>" + pricebuy + " symbol" + "</td><td>" +energyresourcesbuy + " vagabond" + "</td><td>" + Totalforbuyorder + " symbol" + "</td></tr>";
			$('#buyordertable tbody').append(new_row);		
			
			pricebuy1[i] = pricebuy;
			energyresourcesbuy1[i] = energyresourcesbuy;
			Totalforbuyorder1[i] = Totalforbuyorder;

			new_rowi[i] = 
			"<tr><td>" + pricebuy1[i] + " symbol" + "</td><td>" + energyresourcesbuy1[i] + " vagabond" + "</td><td>" + Totalforbuyorder1[i] + " symbol" + "</td><td><a href='#' class='new_trader_sell'>BUY</button></td></tr>";
			$('#traderselltable tbody').prepend(new_rowi[i]);
				
			console.log("BUY:","no.",i,"\nprice:",pricebuy1[i],"energy:",energyresourcesbuy1[i],"Total:",Totalforbuyorder1[i]);
	
			saveData();	
			i++;
			
			$('.new_trader_sell').click(function() {				
				window.open('file:///C:/Users/zheng/Downloads/Final%20Year%20Project/FYP%201/Login%20Page/usertransactionpagebuy.html','popUpWindow','height=500,width=400,left=100,top=100,scrollbars=yes,toolbar=yes,menubar=no,location=no,directories=no,status=no,resizable=yes');			
			});		
			
			pricebuy=null;
			energyresourcesbuy=null;
			
			return false;
		}
	});
});
 
function saveData(){
	sessionStorage.setItem("buyingpricefixed",pricebuy1[i]);
	sessionStorage.setItem("energyamountfixed",energyresourcesbuy1[i]);
	sessionStorage.setItem("totalcostfixed",Totalforbuyorder1[i]);
}


$(document).ready(function(){
    $('#btn-sell').click(function() {
		if(energyresourcessell==null && pricesell==null){
			alert("Value Not Entered");
			return false;
		}
		else{
			document.getElementById('selldash').reset();
			
			var new_row = "<tr><td>" + pricesell + " symbol" + "</td><td>" +energyresourcessell + " vagabond" + "</td><td>" + Totalforsellorder + " symbol" + "</td></tr>";
			$('#sellordertable tbody').append(new_row);
			
			pricesell1[j] = pricesell;
			energyresourcessell1[j] = energyresourcessell;
			Totalforsellorder1[j] = Totalforsellorder;
			
			var new_rowj = "<tr><td>" + pricesell1[j] + " symbol" + "</td><td>" + energyresourcessell1[j] + " vagabond" + "</td><td>" + Totalforsellorder1[j] + " symbol" + "</td><td><a href='#' class='new_trader_buy'>SELL</a></td></tr>";
			$('#traderbuytable tbody').append(new_rowj);		

			console.log("SELL","No.",j,"energy:",energyresourcessell1[j],"Total:",Totalforsellorder1[j]);
			j++;	
			
			pricesell=null;
			energyresourcessell=null;
	
			return false;
		}
	});
});


/* THIS IS THE TEST AREA */
/*------------------------------------------------------------------------
			
			
			$('.new_trader_sell').click(function() {
				var $row = $(this).closest('tr');
				var $tds = $row.find("td");
				$.each($tds, function(){
					console.log($(this).text());
				});
				
			});			
				window.open('file:///C:/Users/zheng/Downloads/Final%20Year%20Project/FYP%201/Login%20Page/usertransactionpagebuy.html','popUpWindow','height=500,width=400,left=100,top=100,scrollbars=yes,toolbar=yes,menubar=no,location=no,directories=no,status=no,resizable=yes');			
-------------------------------------------------------------------------*/