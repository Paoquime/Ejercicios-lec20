# Ejercicios-lección 20

###Ejercicio 1

**Modificar el siguiente script usando closures para que se ejecute sin problemas.**

![Sin titulo](http://i66.tinypic.com/zit5vm.png)

**Solución**

Con el código inicial obteniamos el número 2 en cada iteración(ya que como variable global su valor asignado era cero), sin embargo para poder obtener los resultados solicitados era necesario eliminar la variabe global y ponerla como paràmetro de la función anónima; de esta manera se obtienen los resultados deseados.


![Sin titulo](http://i67.tinypic.com/j5jspw.png)

![Sin titulo](http://i67.tinypic.com/2liedlg.png)

###Ejercicio 2

**Modificar el siguiente script para que muestre el resultado correcto.**

![Sin titulo](http://i64.tinypic.com/2pza5w1.png)

**Solución**

Debido al hoisting obtenemos que la variable feature esta indefinida es por ello que la condicional se ejecuta. Para poder obtener el resultado correcto basta eliminar el "var" local; al no estar declarada la variable local, la que obtiene mayor precedencia es la variable global por lo tanto esta  pasa a ejecutarse.

###Ejercicio 3

**Desarrollar un script que lea la cantidad de segundos y el número inicial desde el HTML, luego, mostrar en el HTML un contador que incremente la cantidad de segundos desde el número inicial ingresado.**

**Solución**

Para desarrollar este ejercicio primero tenemos que crear un form en html en el que asignemos dos inputs (segundos e inicio) y crear un boton para poder enviar los datos obtenidos, una vez hecho esto podemos trabajar con nuestro main.js(en mi caso). En el main.js ingresamos dos variables (segundos e inicio) para obtener los datos ingresados por el usuario, tambien creamos nuestra función en la cual tenemos como parametros los nombres de las variables mencionadas además utilizamos la función setInterval para mostrar el intervalo entre segundos indicados por el usuario. 



