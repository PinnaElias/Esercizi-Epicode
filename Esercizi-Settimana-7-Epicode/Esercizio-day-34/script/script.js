let getImg = document.getElementById('loadImg');
const link = `https://api.pexels.com/v1/search?query=${yourQuery}`
const apiKey = "WiRIQ1p28ZypyA5uGw8XPJyuLUCWM9w8N2VHXpcFiu258bTRSr9qrjk0"
const loadButton = document.getElementById('loadImg')
/*
const loader = async () => {
    const get = await fetch(link, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Authorization": "WiRIQ1p28ZypyA5uGw8XPJyuLUCWM9w8N2VHXpcFiu258bTRSr9qrjk0",
    },
    });
*/  

const request = {
    method: 'GET', 
    headers: {
        "Authorization": "WiRIQ1p28ZypyA5uGw8XPJyuLUCWM9w8N2VHXpcFiu258bTRSr9qrjk0",
    }
  };

fetch(link, request)
.then(response => {
    if (!response.ok) {
      throw new Error('Errore nella richiesta fetch');
    }
    return response.json();
  })
  .then(data => {
    console.log(data);
  })
  .catch(error => {
    console.error('Si è verificato un errore:', error);
  });

  async function search() {
    
  }