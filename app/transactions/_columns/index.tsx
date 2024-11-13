"use client";

import { Transaction } from "@prisma/client";
import { ColumnDef } from "@tanstack/react-table";
import { TransactionTypeBadge } from "../_components/type-badge";
import { Button } from "@/app/_components/ui/button";
import { TrashIcon } from "lucide-react";
import EditTransactionButton from "../_components/edit-transaction-button";

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

export const transactionColumns: ColumnDef<Transaction>[] = [
  {
    accessorKey: "name",
    header: "Nome",
  },
  {
    accessorKey: "type",
    header: "Tipo",
    cell: ({ row: { original: transaction } }) => (
      <TransactionTypeBadge transaction={transaction} />
    ),
  },
  {
    accessorKey: "category",
    header: "Categoria",
    cell: ({ row: { original: transaction } }) =>
      TRANSACTION_CATEGORY_LABEL[transaction.category],
  },
  {
    accessorKey: "paymentMethod",
    header: "Método de pagamento",
    cell: ({ row: { original: transaction } }) =>
      TRANSACTION_PAYMENT_METHOD_LABEL[transaction.paymentMethod],
  },
  {
    accessorKey: "date",
    header: "Data",
    cell: ({ row: { original: transaction } }) =>
      new Date(transaction.date).toLocaleDateString("pt-BR", {
        day: "2-digit",
        month: "long",
        year: "numeric",
      }),
  },
  {
    accessorKey: "amout",
    header: "Valor",
    cell: ({ row: { original: transaction } }) =>
      new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL",
      }).format(Number(transaction.amout)),
  },
  {
    accessorKey: "actions",
    header: "Ações",
    cell: ({ row: { original: transaction } }) => (
      <div className="space-x-1">
        <EditTransactionButton transaction={transaction} />
        <Button
          variant={"ghost"}
          size={"icon"}
          className="text-muted-foreground"
        >
          <TrashIcon />
        </Button>
      </div>
    ),
  },
];
