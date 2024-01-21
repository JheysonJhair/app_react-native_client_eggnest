export const dataHumedad = async (cantidad) => {
    try {
      const response = await fetch(`https://eggnest.ccontrolz.com/temperatura/reporteHumedad/${cantidad}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      if (!response.ok) {
        throw new Error('Error al obtener datos de reporte humedad.');
      }
  
      const responseData = await response.json();
  
      return responseData;
    } catch (error) {
      throw new Error('Error en la llamada a la API: ' + error.message);
    }
  };
  