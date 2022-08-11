var bandera = true;
//descuentosss


var  dscm = 80, dscmx = 100, dscmd = 60, dscmnm= 0, dscvip= 10;
var dsc1= Math.floor(Math.random() * dscmx - dscm +1) + dscm;
var dsc2 = Math.floor(Math.random() * + dscm - dscmd  +1) + dscmd;
var dsc3 = Math.floor(Math.random() * + dscmd - dscmnm + 1)+dscmnm;
var tt, calculodsc, totalf, porc;

do{
	var nombre = prompt('Digite sus nombre: ');
	var total = parseInt( prompt('Hola ' + nombre + ', puedes escribir tu total a pagar: '));
	var vip = prompt('¿Eres cliente VIP? (Digite s/n)');
	var cumple = prompt('¿Hoy es tu cumpleaños? (Digite s/n) ');

	if(cumple =='n' || cumple == 'N'){
	
	
	if(total < 20){
		if(vip == 's' || vip == 'S'){
			tt= dsc1 + dscvip;
			porc = tt/100; 
			calculodsc = total * porc;
			totalf = total - calculodsc;
			
			
		}else{
			tt= dsc1;
			porc = tt/100; 
			calculodsc = total * porc;
			totalf = total - calculodsc;

			

		}
		

	}else if(total >= 20 || total <=100){
		if(vip == 's' || vip == 'S'){
			tt= dsc2 + dscvip;
			porc = tt/100; 
			calculodsc = total * porc;
			totalf = total - calculodsc;

			
		}else{
			tt= dsc2;
			porc = tt/100; 
			calculodsc = total * porc;
			totalf = total - calculodsc;

			
		}

	}else if(total > 100){
		if(vip == 's' || vip == 'S'){
			tt= dsc3 + dscvip;
			porc = tt/100; 
			calculodsc = total * porc;
			totalf = total - calculodsc;

			
		}else{
			tt= dsc3 + dscvip;
			porc = tt/100; 
			calculodsc = total * porc;
			totalf = total - calculodsc;

			
		}
	}

	}else{
		tt= dsc1;
			porc = tt/100; 
			calculodsc = total * porc;
			totalf = total - calculodsc;

	};

	document.write("<table>");
	document.write("<thead>");
	document.write("<tr><th>Nombre: </th>");
	document.write("<th>Total a pagar: </th>");
	document.write("<th>Descuento obtenido: </th>");
	document.write("<th>Monto de descuento: </th>");
	document.write("<th>Nuevo total a pagar</th></tr>");
	document.write("</thead>");
	document.write("<tbody>");
	document.write("<tr><td>" + nombre + " </td><td >$ " + total + "</td>");
	document.write("<td >" + tt + " %</td><td >$ " + calculodsc.toFixed(2) + "</td><td>$ " + totalf.toFixed(2) +"<td></tr>");
	document.write("</tbody>");
	document.write("</table>");
	 

	bandera = confirm('Deseas intentarlo otra vez? (s/n)');
	

}while(bandera == true);





