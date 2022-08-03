export const responseHandler = async (response: Response) => {
  if (response.ok) {
    return await response.json()
  } else {
    return {
      status: response.status,
      statusText: response.statusText,
      url: response.url
    }
  }
}
