// Tomando asistencia en clase

// Usuario ingresa total de alumnos
let cantidad = prompt("¿cuantos alumnos son?");
let alumnosTotales = [];

// Usuario ingresa nombre de alumnos 
for (i = 0; i < cantidad; i++) {
	alumnosTotales[i] = [prompt("Nombre del alumno " + (i+1)),0];
}

// Usuario ingresa "p" presente o "a" ausente 
const tomarAsistencia = (nombre,p)=>{
	let presencia = prompt(nombre);
	if (presencia == "p" || presencia == "P") {
	    alumnosTotales[p][1]++;
	}
}


for (i = 0; i < 10; i++) {
	for (alumno in alumnosTotales) {
	tomarAsistencia(alumnosTotales[alumno][0],alumno);
	}
}

// muestra total asistencia y ausencias - si tiene mas de 5 muestra cartel de reprobado 
for (alumno in alumnosTotales) {
	let resultado = `${alumnosTotales[alumno][0]}:<br>
    ________Presentes: <b>${alumnosTotales[alumno][1]}</b> <br>
    ________Ausencias: <b>${10 - alumnosTotales[alumno][1]} </b>`;
	if (10 - alumnosTotales[alumno][1] > 5) {
	resultado+= "<b style='color:red'>REPROBADO POR INASISTENCIAS</b><br><br>";
	} else {
	resultado+= "<br><br>"
	}
	document.write(resultado)
}