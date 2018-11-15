let httpClient = null;

class HttpClient {

  async add(from, to, fee) {
    try {
      const response = await fetch('http://localhost:8080/fees/', {
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
      return await response.json();
    } catch (error) {
      console.log(error);
    }
  }

  async getAll() {
    try {
      const response = await fetch('http://localhost:8080/fees/');
      return await response.json();
    } catch (error) {
      console.log(error);
    }
  }

  async remove(id) {
    try {
      const response = await fetch(`http://localhost:8080/fees/${id}`, {
        method: 'DELETE',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
      });
      return await response.json();
    } catch (error) {
      console.log(error);
    }
  }
}

export default function getHttpClient() {
  if (httpClient === null) {
    return httpClient = new HttpClient();
  }
  return httpClient;
}