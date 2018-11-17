let httpClient = null;

const headers = {
  'Accept': 'application/json',
  'Content-Type': 'application/json'
};

const feesUrl = 'http://localhost:8080/api/v1/fees/';
const currenciesUrl = 'http://localhost:8080/api/v1/currencies/';
const convertUrl = 'http://localhost:8080/api/v1/convert/';

const POST = "POST";
const DELETE = "DELETE";
const GET = 'GET';

class HttpClient {

  async add(from, to, fee) {
    try {
      const response = await fetch(feesUrl, {
        method: POST,
        headers: headers,
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
      const response = await fetch(feesUrl, {
        method: GET
      });
      return await response.json();
    } catch (error) {
      console.log(error);
    }
  }

  async remove(id) {
    try {
      const response = await fetch(`${feesUrl}/${id}`, {
        method: DELETE,
        headers: headers
      });
      return await response.json();
    } catch (error) {
      console.log(error);
    }
  }

  async convert(amount, from, to) {
    try {
      const response = await fetch(convertUrl, {
        method: POST,
        headers: headers,
        body: JSON.stringify({
          amount: amount,
          from: from,
          to: to
        })
      });
      return await response.json();
    } catch (error) {
      console.log(error);
    }
  }

  async getCurrencies() {
    try {
      const response = await fetch(currenciesUrl);
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
