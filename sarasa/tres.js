function mostrar() {
  let juguete;
  let origen;
  let precio;
  let juguete_mas_vendido;
  let cont_muñeca=0;
  let acum_muñeca=0;
  let cont_pelota=0;
  let acum_pelota=0;
  let cont_rompecabezas=0;
  let acum_rompecabezas=0;
  let acum_recaudado=0;
  let rompe_nacional_mBarato;
  let valor_iva;
  let cont_importados=0;
  let acum_importados=0;
  let promedio_importados=0;
  let flagImportados=1;
  let flagNacional=1;
  let flagMuñeca=1;
  let flagPelota=1;
  let flagRompecabezas=1;
  let seguir;

  do{
        juguete=prompt("Ingrese el tipo de juguete(nuñeca, rompecabezas, pelota)");
          while(!(juguete=="muñeca" || juguete=="rompecabezas" || juguete=="pelota")){
            juguete=prompt("Su opcion no existe. Ingrese el tipo de juguete(nuñeca, rompecabezas, pelota)");
          }
        origen=prompt("Ingrese el origen(nacional o importado");
          while(!(origen=="nacional" || origen=="importado")){
            origen=prompt("Error. Ingrese el origen(nacional o importado");
          }
        precio=parseInt(prompt("Ingrese el precio del juguete"));
          while(precio<1000 || precio>5000){
            precio=parseInt(prompt("El valor esta fuera del rango. Ingrese el valor del juguete"));
          }

          if(juguete=="muñeca" && flagMuñeca){
            cont_muñeca++;
            acum_muñeca=precio
            flagMuñeca=0;
          } else if(juguete=="muñeca"){
            cont_muñeca++;
            acum_muñeca+=precio;
          }
           if(juguete=="pelota" && flagPelota){
            cont_pelota++;
            acum_pelota=precio;
            flagPelota=0;
          } else if(juguete=="pelota"){
            cont_pelota++;
            acum_pelota+=precio
          }
          if(juguete=="rompecabezas" && flagRompecabezas){
            cont_rompecabezas++;
            acum_rompecabezas=precio;
          } else if(juguete=="rompecabezas"){
            cont_rompecabezas++;
            acum_rompecabezas+=precio;
          }

          if(origen=="importado" && flagImportados){
              cont_importados++;
              acum_importados=precio;
              flagImportados=0;
          } else if(origen=="importado"){
              cont_importados++;
              acum_importados+=precio;
          }
         if(origen=="nacional" && flagNacional){
              rompe_nacional_mBarato=precio;
              flagNacional=0;
         } else if (origen=="nacional" && rompe_nacional_mBarato>precio){
              rompe_nacional_mBarato=precio;
         }

        seguir=prompt("Desea ingresar otro juguete?");
      }while(seguir=="si");

      promedio_importados= acum_nacional / cont_importados;
      acum_recaudado=acum_rompecabezas + acum_muñeca + acum_pelota;
      valor_iva=acum_recaudado - (acum_recaudado * 0.21);
      

    if(cont_muñeca>cont_pelota && cont_muñeca>cont_rompecabezas){
      juguete_mas_vendido="Muñecas";
    } else if(cont_pelota>cont_muñeca && cont_pelota>cont_rompecabezas){
      juguete_mas_vendido="Pelotas";
    } else {
      juguete_mas_vendido="rompecabezas";
    }

    document.write("a) El tipo de juguete mas vendido es " + juguete_mas_vendido );
    document.write("b) El promedio del precio de los juguetes importados es de " + promedio_importados);
    document.write("c) El recaudo total es de " + acum_recaudado);
    document.write("d) El precio del rompecabezas nacional mas barato es de " + rompe_nacional_mBarato);
    document.write("e) El iva del total, que es del 21%, es de " + valor_iva);

  }