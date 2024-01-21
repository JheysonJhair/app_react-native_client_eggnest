export const loginUser = async (username, password) => {
    try {
      const response = await fetch('https://eggnest.ccontrolz.com/user/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          Email: username, 
          Password: password, 
        }),
      });
  
      if (!response.ok) {
        throw new Error('Credenciales inválidas');
      }
  
      const responseData = await response.json(); 
  
      return responseData;
    } catch (error) {
      throw new Error('Error en la llamada a la API: ' + error.message);
    }
  };