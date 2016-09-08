# Ejercicios-lección 20

###Ejercicio 1

**Modificar el siguiente script usando closures para que se ejecute sin problemas.**

![Sin titulo](http://i66.tinypic.com/zit5vm.png)

+ Solución

Con el código inicial obteniamos el número 2 en cada iteración(ya que como variable global su valor asignado era cero), sin embargo para poder obtener los resultados solicitados era necesario eliminar la variabe global y ponerla como paràmetro de la función anónima; de esta manera se obtienen los resultados deseados.


![Sin titulo](http://i67.tinypic.com/j5jspw.png)

![Sin titulo](http://i67.tinypic.com/2liedlg.png)

###Ejercicio 2

**Modificar el siguiente script para que muestre el resultado correcto.**

![Sin titulo](http://i64.tinypic.com/2pza5w1.png)

+ Solución

Debido al hoisting obtenemos que la variable feature esta indefinida(es por ello que la condicional se ejecuta). Para poder obtener el resultado correcto eliminamos "var"  a la variable local y al no estar declarada, el alcance (scope) pasa a ser la variable global por lo tanto se define como "closures". 

###Ejercicio 3

**Desarrollar un script que lea la cantidad de segundos y el número inicial desde el HTML, luego, mostrar en el HTML un contador que incremente la cantidad de segundos desde el número inicial ingresado.**

+ Solución

Para desarrollar este ejercicio primero tenemos que crear un form en html en el que asignemos dos inputs (segundos e inicio) y crear un boton para poder enviar los datos obtenidos, una vez hecho esto podemos trabajar con nuestro main.js(en mi caso). En el main.js ingresamos dos variables (segundos e inicio) para obtener los datos ingresados por el usuario, tambien creamos nuestra función en la cual tenemos como parametros los nombres de las variables mencionadas además utilizamos la función setInterval para mostrar el intervalo entre segundos indicados por el usuario. 

###Ejercicio 4

**Desarrollar un script que lea la cantidad de segundos que ingrese el usuario, luego, al dar click en un botón, generar un color random que sea asignado como fondo de la página.**

+ Solución

Para desarrollar este ejercicio primero creamos un form en el html, de esta manera el usuario puede enviar el intervalo de tiempo que quiere que pase entre cada color, luego en nuestro main.js creamos nuestros eventos load  y click, tambien creamos nuestras variables boton e intervalo. Luego llamamos a la función setInterval con los parametros changeColor e intervalo*1000 (esto nos devuelve el valor de los segundos) Por ultimo declaramos la función changeColor donde hay una variable "colorHex" a la que asignamos el método: 

![Sin titulo](http://i63.tinypic.com/b6y0d0.png)

y la propiedad: 

![Sin titulo](http://i68.tinypic.com/34hyop3.png)

con lo cual conseguimos que el código comprendido entre "n" y multiplicado por 16777215, nos devuelva un color en base hexadecimal(16) y lo imprima en la ventana. 

