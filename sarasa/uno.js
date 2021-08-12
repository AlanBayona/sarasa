function mostrar() {
  let nombre_mascota;
  let tipo;
  let sangre;
  let edad;
  let sexo;
  let flag=1;
  let flagEdad=1;
  let porc_aves=0;
  let contador_aves=0;
  let contador_reptil=0;
  let acumulador_edad_reptiles=0;
  let promedio_edad_rep=0;
  let contador_mamifero=0;
  let tipo_mas_joven;
  let sexo_masc_joven;
  let edad_mas_joven=0;
  let tipo_mayoritario;
  let seguir;

  do{
    nombre_mascota=prompt("Ingrese el nombre de la mascota, porfavor");
      while(!(nombre_mascota.length>3 && nombre_mascota.length<8))
      {
        nombre_mascota=prompt("Nombre fuera del rango. Intente de nuevo. Ingrese nombre de la mascota porfavor");
      }
    tipo=prompt("Ingrese el tipo de invertebrado que es la mascota(reptil, ave, mamifero");
       while(!(tipo=="mamifero" || tipo=="ave" || tipo=="reptil")){
        tipo=prompt("Error. Ingrese el tipo de vertebrado de la mascota");
      }
      if(tipo=="reptil"){
          sangre="fria";
      } else {
        sangre=prompt("Ingrese si la mascota es de sangre fria o calida");
        while( sangre!="fria" || sangre!="calida"){
            sangre=prompt("Solo puede elegir entre fria o calida. Intente de nuevo.");
        }
      }
      edad=parseInt(prompt("Ingrese la edad de la mascota"));
      while(isNaN(edad) || !(edad>0)){
        edad=parseInt(prompt("Invalido. Ingrese de nuevo la edad de la mascota"));
      }
      sexo=prompt("Ingrese el sexo de la mascota(m/h).");
      while(!(sexo=="m" || sexo=="h")){
        sexo=prompt("Utilice las opciones que se le dio. Ingrese el sexo de la mascota");
      }

      if(flagEdad){
        edad_mas_joven=edad;
        tipo_mas_joven=tipo;
        sexo_masc_joven=sexo;
        flagEdad=0;
      } else if(edad_mas_joven<edad){
        edad_mas_joven=edad;
        tipo_mas_joven=tipo;
        sexo_masc_joven=sexo;
      }

      switch(tipo){
        case "reptil":
          if(flag){
              acumulador_edad_reptiles=edad;
              contador_reptil++;
              flag=0;
          } else {
              acumulador_edad_reptiles+=edad;
              contador_reptil++;
          } break;

        case "ave":
          contador_aves++;
          break;
        case "mamifero":
          contador_mamifero++;
          break;
      }

    seguir=prompt("Desea ingresar otra mascota?");
  }while(seguir=="si");

  porc_aves= (contador_aves * 100) / (contador_aves + contador_mamifero + contador_reptil);

  if(contador_reptil>contador_mamifero && contador_reptil>contador_aves){
      tipo_mayoritario="reptiles";
  } else if(contador_mamifero>contador_reptil && contador_mamifero>contador_aves){
    tipo_mayoritario="mamiferos";
  } else {
    tipo_mayoritario="aves";
  }

  if(acumulador_edad_reptiles!=0){
  promedio_edad_rep=acumulador_edad_reptiles/contador_reptil;
  document.write("a) El promedio de la edad de los reptiles es " + promedio_edad_rep);
} else {
  document.write("a) El promedio de la edad de los reptiles es " + promedio_edad_rep + " ya que no se ingreso ningun reptil");
}

document.write("b) La mascota mas joven es de tipo " + tipo_mas_joven + " con un sexo de " + sexo_masc_joven);
document.write("c) El porcentaje de aves es de " + porc_aves + "%");
document.write("d) El tipo de mascota que mas cantidad hay el de " + tipo_mayoritario); 

}
