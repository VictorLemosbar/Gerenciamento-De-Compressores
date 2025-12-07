
//Esse componente simula o recebimento de dados de uma API usando o Axios
import axios from 'axios';
let request;


/*async function consult() {
*/
function consult() {


    request = {

        "1": {
            "id_compressor": 1,
            "packageDischargePressure": 0,
            "sumpPress": 0,
            "inletVacuum": 0,
            "coolantFilterInPressure": 0,
            "coolantFilterOutPressure": 0,
            "afterCoolerDischargePressure": 0,
            "separatorPressure": 0,
            "coolantFilterPressureDrop": 0,
            "injectedCoolantTemp": 0,
            "airendTemp": 0,
            "afterCoolerDischargeTemp": 0,
            "inletTemp": 0,
            "coolerOutTemp": 0,
            "percentCapacity": 0,
            "motorSpeed": 0,
            "motorCurrent": 0,
            "dcBusVoltage": 0,
            "motorVoltage": 0,
            "packageKW": 0,
            "kWh": 0,
            "inputVoltage": 0,
            "runningHours": 0
        },
        "2": {
            "id_compressor": 1,
            "packageDischargePressure": 0,
            "sumpPress": 0,
            "inletVacuum": 0,
            "coolantFilterInPressure": 0,
            "coolantFilterOutPressure": 0,
            "afterCoolerDischargePressure": 0,
            "separatorPressure": 0,
            "coolantFilterPressureDrop": 0,
            "injectedCoolantTemp": 0,
            "airendTemp": 0,
            "afterCoolerDischargeTemp": 0,
            "inletTemp": 0,
            "coolerOutTemp": 0,
            "percentCapacity": 0,
            "motorSpeed": 0,
            "motorCurrent": 0,
            "dcBusVoltage": 0,
            "motorVoltage": 0,
            "packageKW": 0,
            "kWh": 0,
            "inputVoltage": 0,
            "runningHours": 0
        },
        "3": {
            "id_compressor": 1,
            "packageDischargePressure": 0,
            "sumpPress": 0,
            "inletVacuum": 0,
            "coolantFilterInPressure": 0,
            "coolantFilterOutPressure": 0,
            "afterCoolerDischargePressure": 0,
            "separatorPressure": 0,
            "coolantFilterPressureDrop": 0,
            "injectedCoolantTemp": 0,
            "airendTemp": 0,
            "afterCoolerDischargeTemp": 0,
            "inletTemp": 0,
            "coolerOutTemp": 0,
            "percentCapacity": 0,
            "motorSpeed": 0,
            "motorCurrent": 0,
            "dcBusVoltage": 0,
            "motorVoltage": 0,
            "packageKW": 0,
            "kWh": 0,
            "inputVoltage": 0,
            "runningHours": 0
        }
    };

}
/*
try {
   const path = '';
    request = (await axios.get(path)).data
    console.log(request)
    
    return request
} catch (error) {
    console.log("Não foi possivel acessar a url")
    request = "Não foi possivel identificar"
}
return request
}

*/
consult();



export default consult;
