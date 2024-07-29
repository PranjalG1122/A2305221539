"use server";

import { ProductTypes } from "@/lib/types";

export const CallAPI = async (
  selectedCategory: string,
  selectedCompany: string,
  minValue: number,
  maxValue: number
): Promise<ProductTypes[] | null> => {
  try {
    const res = await fetch(
      `http://20.244.56.144/test/companies/${selectedCompany}/categories/${selectedCategory}/products?top=10&minPrice=${minValue}&maxPrice=${maxValue}`,
      {
        method: "GET",
        headers: {
          "content-type": "application/json",
          Authorization:
            "Bearer " +
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiZXhwIjoxNzIyMjQ0MzM5LCJpYXQiOjE3MjIyNDQwMzksImlzcyI6IkFmZm9yZG1lZCIsImp0aSI6IjYyZThkYzIzLWU5ZTItNDFmYy1hMDIwLTRlYTA0ZWNkMTBjZCIsInN1YiI6Imd1cHRhLnByYW5qYWxAcy5hbWl0eS5lZHUifSwiY29tcGFueU5hbWUiOiJBZmZvcmRtZWQiLCJjbGllbnRJRCI6IjYyZThkYzIzLWU5ZTItNDFmYy1hMDIwLTRlYTA0ZWNkMTBjZCIsImNsaWVudFNlY3JldCI6IlhkZ3JhZmVvRVZ0a3J3eW0iLCJvd25lck5hbWUiOiJQcmFuamFsIEd1cHRhIiwib3duZXJFbWFpbCI6Imd1cHRhLnByYW5qYWxAcy5hbWl0eS5lZHUiLCJyb2xsTm8iOiJBMjMwNTIyMTUzOSJ9.LTEnrwFkQaXOeKhVDI8qU5v9MOo-N2yZAcaIDfdoyWI",
        },
      }
    );

    const data: ProductTypes[] = await res.json();
    if (!data || data.length < 1) return null;
    return data;
  } catch (err) {
    console.error(err);
    return null;
  }
};
