export const baseURL = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/';
export const appId = '5Ap1XN8WUsuZk6doKhi8';
// export const appId = 'C9D2Jvn3t0ESEwoSdhCF';

export const getLikes = async () => {
  const response = await fetch(`${baseURL}apps/${appId}/likes`,
    {
      headers: {
        'Content-Type': 'application/json',
      },
    });
  return response.json();
};



