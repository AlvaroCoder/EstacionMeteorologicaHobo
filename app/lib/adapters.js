 function SplitDataByTag(data=[], tagName='') {
    return data.filter(elem=>elem['sensor_measurement_type'] === tagName)
}
function extraerHora(fechaString) {
    const fechaObjeto = new Date(fechaString);

    const horas = fechaObjeto.getHours();
    const minutos = fechaObjeto.getMinutes();
    const segundos = fechaObjeto.getSeconds();

    const horaFormateada = `${horas.toString().padStart(2,"0")}:${minutos.toString().padStart(2,"0")}:${segundos.toString().padStart(2,"0")}`
    return horaFormateada;
}
 function SplitDataByTimeValues(data=[]) {
    const tiempo = data.map(item=>extraerHora(item['timestamp']));
    const valores_si = data.map(item=>item['si_value']);
    const valores_us = data.map(item=>item['us_value']);

    return {
        tiempo,
        valores_si,
        valores_us
    }
}
export function SplitData(data=[]){
    const listObservada = data
    const valoresUnicos = new Set()
    const nombreSensores = listObservada.map((item)=>{
        if (!valoresUnicos.has(item)) {
            valoresUnicos.add(item)
        }
    }).filter(item=>item !== "Battery")
    const objetoResultado = {}
    for(const sensor of nombreSensores){
        const dataSeparadaPorTag = SplitDataByTag(sensor);
        const {tiempo, valores_si, valores_us} = SplitDataByTimeValues(dataSeparadaPorTag);
        objetoResultado[sensor] = {"si":valores_si, "us":valores_us, "time":tiempo}
    }
}