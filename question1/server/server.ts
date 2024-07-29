"use server";

export const types = [
  {
    type: "p",
    number: "primes",
  },
  {
    type: "e",
    number: "even",
  },
  {
    type: "f",
    number: "fibo",
  },
  {
    type: "r",
    number: "rand",
  },
];

export const Server = async (type: string) => {
  const number = types.find((type) => {
    return type.number;
  });

  try {
    const res = await fetch(`http://20.244.56.144/test/${number?.number}`, {
      method: "GET",
      headers: {
        "content-type": "application/json",
        Authorization:
          "Bearer " +
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiZXhwIjoxNzIyMjQ2MzkyLCJpYXQiOjE3MjIyNDYwOTIsImlzcyI6IkFmZm9yZG1lZCIsImp0aSI6IjYyZThkYzIzLWU5ZTItNDFmYy1hMDIwLTRlYTA0ZWNkMTBjZCIsInN1YiI6Imd1cHRhLnByYW5qYWxAcy5hbWl0eS5lZHUifSwiY29tcGFueU5hbWUiOiJBZmZvcmRtZWQiLCJjbGllbnRJRCI6IjYyZThkYzIzLWU5ZTItNDFmYy1hMDIwLTRlYTA0ZWNkMTBjZCIsImNsaWVudFNlY3JldCI6IlhkZ3JhZmVvRVZ0a3J3eW0iLCJvd25lck5hbWUiOiJQcmFuamFsIEd1cHRhIiwib3duZXJFbWFpbCI6Imd1cHRhLnByYW5qYWxAcy5hbWl0eS5lZHUiLCJyb2xsTm8iOiJBMjMwNTIyMTUzOSJ9.KE7jY8dnsxEhWQOyPtngMafmhsJ9mOzGgg-Zlrn8Lrw",
      },
    });

    const data = await res.json();
    console.log(data);
    return data;
  } catch (err) {
    console.error(err);
    return null;
  }
};