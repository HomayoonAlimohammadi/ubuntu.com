import { marketplace } from "../../PurchaseModal/utils/utils";

export type Item = {
  allowance: number;
  id: string;
  name: string;
  price: number;
};

export type Offer = {
  actionable: boolean;
  created_at: string;
  id: string;
  items: Item[];
  marketplace: marketplace;
  total: number;
};
