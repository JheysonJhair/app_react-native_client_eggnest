export const sendFormDataToApi = async (formData) => {
    try {
      const response = await fetch('https://eggnest.ccontrolz.com/user/insert', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
  
      if (!response.ok) {
        throw new Error('Error al enviar los datos a la API');
      }
  
      const responseData = await response.json();
      return responseData;
    } catch (error) {
      throw new Error('Error en la llamada a la API: ' + error.message);
    }
  };
  