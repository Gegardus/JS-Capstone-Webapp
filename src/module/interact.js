export const baseURL = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/';
// export const appId = '5Ap1XN8WUsuZk6doKhi8';
// export const appId = 'C9D2Jvn3t0ESEwoSdhCF';
// export const appId = 'LpwpP44p6vm5v1pisyeV';
   export const appId = "byg3KtvqOhmd3Xt9Axu5";

export const addLike = async (itemId) => {
  fetch(`${baseURL}apps/${appId}/likes`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ item_id: itemId }),
  });
};

export const getLikes = async () => {
  const response = await fetch(`${baseURL}apps/${appId}/likes`,
    {
      headers: {
        'Content-Type': 'application/json',
      },
    });
  return response.json();
};



