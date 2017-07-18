const ajax = ({
  url,
  method,
  params = {},
  responseType = 'json',
  headers = {},
  sync,
  timeout = 300 * 1000,
  success = () => {},
  error = () => {},
}) => {
  const client = new XMLHttpRequest();
  let reqPrams = null;
  let reqUrl = url;
  if (method === 'get') {
    const temp = [];
    // const keys = Object.keys(params);
    for (const key in params) {
      if (!key) {
        continue;
      }
      let value = params[key];
      if (value === null || value === undefined) {
        value = '';
      }
      if (typeof value === 'object') {
        value = JSON.stringify(value);
      }
      temp.push(`${key}=${encodeURIComponent(value)}`);
    }
    if (temp.length) {
      reqUrl = reqUrl + (reqUrl.indexOf('?') !== -1 ? '&' : '?') + temp.join('&');
    }
  }
  client.open(method, reqUrl, !sync);
  if (!sync) {
    client.responseType = responseType;
    client.timeout = timeout;
  }

  // const keys = Object.keys(headers);
  let hasContentType = false;
  let jsonMode = false;
  for (const key in headers) {
    if (key.toString().toLowerCase() === 'content-type') {
      hasContentType = true;
      if (headers[key] === 'application/json') {
        jsonMode = true;
      }
      if (headers[key] === 'multipart/form-data') {
        continue;
      }
    }
    client.setRequestHeader(key, headers[key]);
  }

  if (method !== 'get') {
    if (!hasContentType) {
      client.setRequestHeader('Content-Type', 'application/json');
      jsonMode = true;
    }
    if (jsonMode) {
      reqPrams = JSON.stringify(params);
    }
  }

  client.onreadystatechange = () => {
    if (client.readyState !== 4) {
      return;
    }
    if (client.status === 200) {
      let response = client.response;
      if (responseType === 'json') {
        try {
          response = JSON.parse(client.response);
        } catch (e) {
          response = client.response;
        }
      }
      success(response);
    } else {
      error(new Error(client.statusText));
    }
  };
  client.send(reqPrams);
};

const get = ({url,method, params, responseType, headers, sync, timeout,success,error }) =>
  ajax({
    url,
    method: 'get',
    params,
    responseType,
    headers,
    sync,
    timeout,
    success,
    error,
  });


const post = ({url, method, params, responseType, headers, sync,timeout,success,error }) =>
  ajax({
    url,
    method: 'post',
    params,
    responseType,
    headers,
    sync,
    timeout,
    success,
    error,
  });

export {ajax, get, post}
