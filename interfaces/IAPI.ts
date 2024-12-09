import { Product } from "./iproduct";

export interface ApiRequestOptions {
  action: string;
  identifier: string;
  secret: string;

  pid?: string;
  responseType: "json" | string;
}

export interface ApiResponse {
  result: "success" | "error";
  totalresults: number;
  startnumber: number;
  numreturned: number;
  products: {
    product: Product[];
  };
}
