// Interface for the pricing object
interface Pricing {
  suffix: string;
  msetupfee: string;
  qsetupfee: string;
  ssetupfee: string;
  asetupfee: string;
  bsetupfee: string;
  tsetupfee: string;
  monthly: string;
  quarterly: string;
  semiannually: string;
  annually: string;
  biennially: string;
  triennially: string;
}

interface CurrencyPricing {
  IRR: Pricing;
  USD: Pricing;
}

interface ConfigOptions {
  configoption: any[]; // You can replace 'any' with a more specific type if needed
}

interface CustomFields {
  customfield: any[]; // You can replace 'any' with a more specific type if needed
}

export interface Product {
  pid: number;
  gid: number;
  type: string;
  name: string;
  description: string;
  module: string;
  paytype: string;
  pricing: CurrencyPricing;
  product_url: string;
  slug: string;
  configoptions: ConfigOptions;
  customfields: CustomFields;
}
