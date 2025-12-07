
//Esse componente simula o recebimento de dados de uma API usando o Axios
import axios from 'axios';
let request;


/*async function consult() {
*/

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


function consult() {


    request = {
  "1": {
    "id_compressor": 1,
    "packageDischargePressure": 6.3,
    "sumpPress": 7.8,
    "inletVacuum": 0.04,
    "coolantFilterInPressure": 5.1,
    "coolantFilterOutPressure": 4.9,
    "afterCoolerDischargePressure": 5.7,
    "separatorPressure": 6.0,
    "coolantFilterPressureDrop": 0.2,
    "injectedCoolantTemp": 62,
    "airendTemp": 89,
    "afterCoolerDischargeTemp": 42,
    "inletTemp": 27,
    "coolerOutTemp": 31,
    "percentCapacity": 78,
    "motorSpeed": 4450,
    "motorCurrent": 86,
    "dcBusVoltage": 540,
    "motorVoltage": 387,
    "packageKW": 45.6,
    "kWh": 184,
    "inputVoltage": 398,
    "runningHours": 4231,
    "afterCoolerDischargePress": 23
  },

  "2": {
    "id_compressor": 2,
    "packageDischargePressure": 6.9,
    "sumpPress": 7.5,
    "inletVacuum": 0.02,
    "coolantFilterInPressure": 5.3,
    "coolantFilterOutPressure": 5.0,
    "afterCoolerDischargePressure": 5.8,
    "separatorPressure": 6.1,
    "coolantFilterPressureDrop": 0.3,
    "injectedCoolantTemp": 58,
    "airendTemp": 91,
    "afterCoolerDischargeTemp": 41,
    "inletTemp": 25,
    "coolerOutTemp": 30,
    "percentCapacity": 64,
    "motorSpeed": 4310,
    "motorCurrent": 79,
    "dcBusVoltage": 538,
    "motorVoltage": 389,
    "packageKW": 44.1,
    "kWh": 172,
    "inputVoltage": 397,
    "runningHours": 3980,
    "afterCoolerDischargePress": 26
  },

  "3": {
    "id_compressor": 3,
    "packageDischargePressure": 7.1,
    "sumpPress": 7.9,
    "inletVacuum": 0.03,
    "coolantFilterInPressure": 5.6,
    "coolantFilterOutPressure": 5.3,
    "afterCoolerDischargePressure": 6.0,
    "separatorPressure": 6.4,
    "coolantFilterPressureDrop": 0.3,
    "injectedCoolantTemp": 64,
    "airendTemp": 94,
    "afterCoolerDischargeTemp": 43,
    "inletTemp": 26,
    "coolerOutTemp": 32,
    "percentCapacity": 83,
    "motorSpeed": 4520,
    "motorCurrent": 92,
    "dcBusVoltage": 542,
    "motorVoltage": 390,
    "packageKW": 46.2,
    "kWh": 201,
    "inputVoltage": 401,
    "runningHours": 4410,
    "afterCoolerDischargePress": 28
  }
}

    return request

}
consult();



export default consult;
