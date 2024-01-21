export const dataTemperatura = async (cantidad) => {
    try {
      const response = await fetch(`https://eggnest.ccontrolz.com/temperatura/reporteTemperatura/${cantidad}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      if (!response.ok) {
        throw new Error('Error al obtener datos de reporte temperatura.');
      }
  
      const responseData = await response.json();
  
      return responseData;
    } catch (error) {
      throw new Error('Error en la llamada a la API: ' + error.message);
    }
  };
  