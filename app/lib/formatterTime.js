export function formatearFecha(fecha) {
    // Convertir la fecha a un objeto Date
    const fechaObjeto = new Date(fecha);
  
    // Obtener el año, el mes y el día
    const año = fechaObjeto.getFullYear();
    const mes = fechaObjeto.getMonth() + 1; // Los meses en JavaScript van de 0 a 11, por lo que hay que sumar 1
    const dia = fechaObjeto.getDate();
  
    // Completar con ceros a la izquierda si es necesario
    const añoStr = año.toString().padStart(4, "0");
    const mesStr = mes.toString().padStart(2, "0");
    const diaStr = dia.toString().padStart(2, "0");
  
    // Formatear la fecha en el formato deseado
    const fechaFormateada = `${añoStr}-${mesStr}-${diaStr}`;
  
    return fechaFormateada;
  }
export function formatearFechaHora(fecha) {
    // Convertir la fecha a un objeto Date
    const fechaObjeto = new Date(fecha);
  
    // Obtener el año, el mes, el día, las horas, los minutos y los segundos
    const año = fechaObjeto.getFullYear();
    const mes = fechaObjeto.getMonth() + 1; // Los meses en JavaScript van de 0 a 11, por lo que hay que sumar 1
    const dia = fechaObjeto.getDate();
    const horas = fechaObjeto.getHours();
    const minutos = fechaObjeto.getMinutes();
    
    // Completar con ceros a la izquierda si es necesario
    const añoStr = año.toString().padStart(4, "0");
    const mesStr = mes.toString().padStart(2, "0");
    const diaStr = dia.toString().padStart(2, "0");
    const horasStr = horas.toString().padStart(2, "0");
    const minutosStr = minutos.toString().padStart(2, "0");

    // Formatear la fecha y la hora en el formato deseado
    const fechaHoraFormateada = `${añoStr}-${mesStr}-${diaStr} ${horasStr}:${minutosStr}:00`;
  
    return fechaHoraFormateada;
  }