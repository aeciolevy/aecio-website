const getResponse = async (response: Response) => {
  const contentType = response.headers.get("content-type");

  if (contentType && contentType.includes("application/json")) {
    return await response.json();
  } else if (contentType && contentType.includes("text/html")) {
    return await response.text();
  } else if (contentType && contentType.includes("text/xml")) {
    const textResponse = await response.text();
    return JSON.parse(textResponse);
  } else {
    return response;
  }
};

interface RequestOptions {
  headers?: Record<string, string>;
  // Add other options as needed
}

function objectToFormBody(data: Record<string, any>): string {
  return Object.entries(data)
    .map(([key, value]) => {
      return `${encodeURIComponent(key)}=${encodeURIComponent(value)}`;
    })
    .join("&");
}

export async function postFormData(
  url: string,
  data?: any,
  options?: RequestOptions,
): Promise<any> {
  const formDataBody = objectToFormBody(data);

  const response = await fetch(url, {
    method: "POST",
    body: formDataBody,
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
      ...options?.headers,
    },
  });

  if (!response.ok) {
    const data = await getResponse(response);
    throw { ...data, status: response.status, statusText: response.statusText };
  }
  const resolved = await getResponse(response);
  return resolved;
}

export async function post(
  url: string,
  data?: any,
  options?: RequestOptions,
): Promise<any> {
  const response = await fetch(url, {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
      ...options?.headers,
    },
  });

  if (!response.ok) {
    const data = await getResponse(response);
    throw { ...data, status: response.status, statusText: response.statusText };
  }
  const resolved = await getResponse(response);
  return resolved;
}

export async function put(
  url: string,
  data: any,
  options?: RequestOptions,
): Promise<any> {
  const response = await fetch(url, {
    method: "PUT",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
      ...options?.headers,
    },
  });

  if (!response.ok) {
    const data = await getResponse(response);
    throw { ...data, status: response.status, statusText: response.statusText };
  }
  const resolved = await getResponse(response);
  return resolved;
}

export async function del(
  url: string,
  data: any,
  options?: RequestOptions,
): Promise<any> {
  const response = await fetch(url, {
    method: "DELETE",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
      ...options?.headers,
    },
  });

  if (!response.ok) {
    const data = await getResponse(response);
    throw { ...data, status: response.status, statusText: response.statusText };
  }
  const resolved = await getResponse(response);
  return resolved;
}

export async function get(url: string, options?: RequestOptions): Promise<any> {
  const headers = {
    "Content-Type": "application/json",
    ...(options?.headers || {}),
  };
  const response = await fetch(url, {
    method: "GET",
    headers,
  });
  if (!response.ok) {
    const data = await getResponse(response);
    throw new Error(data?.error?.message);
  }
  const resolved = await getResponse(response);
  return resolved;
}

export async function patch(
  url: string,
  data: any,
  options?: RequestOptions,
): Promise<any> {
  const response = await fetch(url, {
    method: "PATCH",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
      ...options?.headers,
    },
  });

  if (!response.ok) {
    const data = await getResponse(response);
    throw { ...data, status: response.status, statusText: response.statusText };
  }
  const resolved = await getResponse(response);
  return resolved;
}
