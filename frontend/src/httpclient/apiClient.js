function apiFetch(url, {body, ...options}) {
  return fetch(url, {
    ...options,
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(body)
  })
}

export async function feeGetAll() {
  return [];
}

export async function feeDelete(id) {
  return true;
}

export async function feeCreate(from, to, fee) {
  return {
    // ...
  };
}