function mostrar() {
  let nombre;
  let carrera;
  let sexo;
  let cantidad_materias;
  let nota_promedio;
  let edad;
  let mPromedio_fisica=0;
  let nom_mPromedio_fisica;
  let contador_fisica=0;
  let contador_quimica=0;
  let contador_sistemas=0;
  let alumnaMas_joven;
  let nom_alum_mas_joven;
  let porc_quimica=0;
  let porc_fisica=0;
  let porc_sistemas=0;
  let alumno_muchas_materias;
  let nombre_alum_mMaterias;
  let edad_alum_mMaterias;
  let flag_promedio=1;
  let flag_alumna=1;
  let flag_materias=1;

  for(let i=0; i<500; i++)
  {
    nombre=prompt("Ingrese nombre del estudiante");
    carrera=prompt("Ingrese la carrera del estudiante");
       while(!(carrera=="Quimica" || carrera=="Fisica" || carrera=="Sistemas")){
        carrera=prompt("Error. Intente de nuevo ingresar la carrera que esta cursando el estudiante.");
      }
    sexo=prompt("Ingrese el sexo del estudiante");
       while(!(sexo=="masculino" || sexo=="femenino" || sexo=="no binario")){
         sexo=prompt("Invalido. Utilice una de las opciones correspondientes. Ingreso el sexo");
       }
    cantidad_materias=parseInt(prompt("Ingrese la cantidad de materias que cursa el estudiante"));
       while(cantidad_materias<1 || cantidad_materias>5){
        cantidad_materias=parseInt(prompt("Invalido. Ingrese la cantidad de materias que cursa el estudiante"));
       }
    nota_promedio=parseInt(prompt("Ingrese el promedio del estudiante"));
       while(nota_promedio<0 ||nota_promedio>10){
         nota_promedio=parseInt(prompt("Invalido. Ingrese el promedio del estudiante"));
       }
    edad=parseInt(prompt("Ingrese la edad del estudiante"));
       while(isNaN(edad || edad<=0)){
        edad=parseInt(prompt("Invalido. Ingrese la edad del estudiante."));
       }
       if(sexo== "femenino" && flag_alumna){
         alumnaMas_joven=edad;
         nom_alum_mas_joven=nombre;
         flag_alumna=0;

       } else if(sexo=="femenino" && alumnaMas_joven<edad){
          alumnaMas_joven=edad;
          nom_alum_mas_joven=nombre;
       }
  
       switch(carrera){
         case "Fisica":
           contador_fisica++;
            if(flag_promedio){
              mPromedio_fisica=nota_promedio;
              nom_mPromedio_fisica=nombre;
              flag_promedio=0;
            } else if(nota_promedio>mPromedio_fisica){
                mPromedio_fisica=nota_promedio;
                nom_mPromedio_fisica=nombre;
            } break;
          case "Quimica":
            contador_quimica++;
            break;
          case "Sistemas":
            contador_sistemas++;
            break;

            if(carrera!="Quimica" && flag_materias){
              alumno_muchas_materias=cantidad_materias;
              edad_alum_mMaterias=edad;
              nombre_alum_mMaterias=nombre;
              flag_materias=0;
            } else if(carrera!="Quimica" && alumnaMas_joven<cantidad_materias){
              alumno_muchas_materias=cantidad_materias;
              edad_alum_mMaterias=edad;
              nombre_alum_mMaterias=nombre;
            } 

       }
       porc_fisica=(contador_fisica *100) / (contador_sistemas + contador_quimica + contador_fisica);
       porc_quimica=(contador_quimica *100) / (contador_sistemas + contador_quimica + contador_fisica);
       porc_sistemas=(contador_sistemas *100) / (contador_sistemas + contador_quimica + contador_fisica);
       document.write("a) El nombre del mejor promedio de fisica es " + nom_mPromedio_fisica);
       document.write("b) El nombre de la alumna mas joven es " + nom_alum_mas_joven);
       document.write("c) Los porcentajes de estudiante por materia son; Quimica " + contador_quimica + " Fisica: " + contador_fisica + " Sistemas: " + contador_sistemas );
       document.write("d) El estudiante que cursa mas materias(sin contar a la rama de la Quimica) es " + nombre_alum_mMaterias + " con una edad de " + edad_alum_mMaterias);



}

/*Realizar el algoritmo que permita ingresar los datos de los 500 alumnos de la UTN FRA, los datos solicitados son:
nombre,
carrera("Quimica";"Fisica";"Sistemas"),
sexo (masculino - femenino -no binario),
cantidad de materias(entre 1 y 5),
Nota promedio del alumno(entre 0 y 10),
edad (validar).
Se debe informar de existir, o informar que no existe , en el caso que corresponda.
a) El nombre del mejor promedio de los alumnos que estudian Fisica. (Sin importar el sexo).
b) El nombre de la alumna mas joven.
c) Porcentaje de estudiantes que estudia cada carrera.
//d) La edad y nombre del estudiante que cursa mas materias exceptuando la carrera de Quimica */}
