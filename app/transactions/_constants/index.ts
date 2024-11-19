import { TransactionPaymentMethod } from "@prisma/client";

export const TRANSACTION_CATEGORY_LABEL = {
  EDUCATION: "EDUCAÇÃO",
  ENTERTAINMENT: "ENTRETENIMENTO",
  FOOD: "ALIMENTAÇÃO",
  HEALTH: "SAUDE",
  HOUSING: "MORADIA",
  OTHER: "OUTROS",
  SALARY: "SALÁRIO",
  TRANSPORTATION: "TRANSPORTE",
  UTILITY: "UTILIDADES",
};

export const TRANSACTION_PAYMENT_METHOD_LABEL = {
  BANK_TRANSFER: "TRANSFERÊNCIA BANCÁRIA",
  BANK_SLIP: "BOLETO BANCÁRIO",
  CASH: "DINHEIRO",
  CREDIT_CARD: "CARTÃO DE CRÉDITO",
  DEBIT_CARD: "CARTÃO DE DÉBITO",
  OTHER: "OUTROS",
  PIX: "PIX",
};

export const TRANSACTION_PAYMENT_METHOD_ICONS = {
  [TransactionPaymentMethod.CREDIT_CARD]: "credit-card.svg",
  [TransactionPaymentMethod.DEBIT_CARD]: "debit-card.svg",
  [TransactionPaymentMethod.BANK_TRANSFER]: "bank-transfer.svg",
  [TransactionPaymentMethod.BANK_SLIP]: "bank-slip.svg",
  [TransactionPaymentMethod.CASH]: "money.svg",
  [TransactionPaymentMethod.PIX]: "pix.svg",
  [TransactionPaymentMethod.OTHER]: "other.svg",
};
