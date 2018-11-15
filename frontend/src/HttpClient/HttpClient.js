let httpClient = null;

class HttpClient {

  async add(from, to, fee) {
    return fetch('http://localhost:8080/fees/', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        from: from,
        to: to,
        fee: fee
      })
    });
  }

  async getAll() {
    return fetch('http://localhost:8080/fees/')
    .then(result => result.json())
    .catch(error => console.log(error));
  }

  async remove(id) {
    return fetch(`http://localhost:8080/fees/${id}`, {
      method: 'DELETE',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
    })
    .then(result => result.json())
  }
}

export default function getHttpClient() {
  if (httpClient === null) {
    return httpClient = new HttpClient();
  }
  return httpClient;
}