import {showError} from '../util/notification';

const feesUrl = 'http://localhost:8080/api/v1/fees/';
const currenciesUrl = 'http://localhost:8080/api/v1/currencies/';
const convertUrl = 'http://localhost:8080/api/v1/convert/';

const POST = "POST";
const DELETE = "DELETE";

async function apiRequest(url, {body, ...options} = {}) {
  try {
    const response = await fetch(url, {
      ...options,
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: body ? JSON.stringify(body) : undefined
    });

    if (!response.ok) {
      const responseText = await response.text();
      throw new Error("Request failed: [" + responseText + "]")
    }

    return response;
  } catch (e) {
    showError(`API Request failed: ${e.message}`);
  }
}

class HttpClient {

  async add(from, to, fee) {
    const response = await apiRequest(feesUrl, {
      method: POST,
      body: {
        from: from,
        to: to,
        fee: fee
      }
    });
    return await response.json();

  }

  async getAll() {
    const response = await apiRequest(feesUrl);
    return await response.json();

  }

  async remove(id) {
    const response = await apiRequest(`${feesUrl}/${id}`, {
      method: DELETE
    });
    return await response.json();

  }

  async convert(amount, from, to) {
    const response = await apiRequest(convertUrl, {
      method: POST,
      body: {
        amount: amount,
        from: from,
        to: to
      }
    });
    return await response.json();
  }

  async getCurrencies() {
    const response = await apiRequest(currenciesUrl);
    return await response.json();
  }
}

let httpClient = null;

export default function getHttpClient() {
  if (httpClient === null) {
    return httpClient = new HttpClient();
  }
  return httpClient;
}
