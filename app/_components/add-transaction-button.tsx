"use client";

import { ArrowDownUpIcon } from "lucide-react";
import { Button } from "./ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";
import { z } from "zod";
import {
  TransactionCategory,
  TransactionPaymentMethod,
  TransactionType,
} from "@prisma/client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./ui/form";
import { Input } from "./ui/input";
import { MoneyInput } from "./money-input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";

const TRANSACTION_TYPE_OPTIONS = [
  {
    value: TransactionType.EXPENSE,
    label: "Despesa",
  },
  {
    value: TransactionType.DEPOSIT,
    label: "Depósito",
  },
  {
    value: TransactionType.INVESTMENT,
    label: "Investimento",
  },
];

const TRANSACTION_PAYMENT_METHOD_OPTIONS = [
  {
    value: TransactionPaymentMethod.BANK_SLIP,
    label: "Boleto bancário",
  },
  {
    value: TransactionPaymentMethod.BANK_TRANSFER,
    label: "Transferência Bancária",
  },
  {
    value: TransactionPaymentMethod.PIX,
    label: "Pix",
  },

  {
    value: TransactionPaymentMethod.CASH,
    label: "Dinheiro",
  },

  {
    value: TransactionPaymentMethod.CREDIT_CARD,
    label: "Cartão de crédito",
  },

  {
    value: TransactionPaymentMethod.DEBIT_CARD,
    label: "Cartão de débito",
  },

  {
    value: TransactionPaymentMethod.OTHER,
    label: "Outros",
  },
];

const TRANSACTION_CATEGORY_OPTIONS = [
  {
    value: TransactionCategory.EDUCATION,
    label: "Educação",
  },
  {
    value: TransactionCategory.ENTERTAINMENT,
    label: "Entretenimento",
  },
  {
    value: TransactionCategory.FOOD,
    label: "Alimentação",
  },

  {
    value: TransactionCategory.HEALTH,
    label: "Saúde",
  },

  {
    value: TransactionCategory.HOUSING,
    label: "Moradia",
  },

  {
    value: TransactionCategory.OTHER,
    label: "Outros",
  },

  {
    value: TransactionCategory.SALARY,
    label: "Salário",
  },
  {
    value: TransactionCategory.TRANSPORTATION,
    label: "Transporte",
  },
  {
    value: TransactionCategory.UTILITY,
    label: "Ultilidades",
  },
];

const formSchema = z.object({
  name: z.string().min(1, {
    message: "o nome é obrigatório",
  }),
  amout: z.string().trim().min(1, {
    message: "o valor é obrigatório",
  }),
  type: z.nativeEnum(TransactionType, {
    required_error: "o tipo é obrigatório",
  }),
  category: z.nativeEnum(TransactionCategory, {
    required_error: "a categória é obrigatória",
  }),
  paymentMethod: z.nativeEnum(TransactionPaymentMethod, {
    required_error: "o metodo de pagamento é obrigatório",
  }),
  date: z.date({
    required_error: "a data é obrigatória",
  }),
});

export default function AddTransactionButton() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      amout: "",
      category: TransactionCategory.OTHER,
      type: TransactionType.DEPOSIT,
      paymentMethod: TransactionPaymentMethod.OTHER,
      name: "",
      date: new Date(),
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="rounded-full font-bold">
          Adicionar transação
          <ArrowDownUpIcon />
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Adicionar transação</DialogTitle>
          <DialogDescription>Insira as informações abaixo:</DialogDescription>
        </DialogHeader>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Nome</FormLabel>
                  <FormControl>
                    <Input placeholder="Digite o nome..." {...field} />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="amout"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Valor</FormLabel>
                  <FormControl>
                    <MoneyInput placeholder="Digite o valor..." {...field} />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="type"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Tipo</FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select a verified email to display" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {TRANSACTION_TYPE_OPTIONS.map((option) => (
                        <SelectItem key={option.value} value={option.value}>
                          {option.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="category"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Forma de pagamento</FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select a verified email to display" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {TRANSACTION_PAYMENT_METHOD_OPTIONS.map((option) => (
                        <SelectItem key={option.value} value={option.value}>
                          {option.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="category"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Categoria</FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select a verified email to display" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {TRANSACTION_PAYMENT_METHOD_OPTIONS.map((option) => (
                        <SelectItem key={option.value} value={option.value}>
                          {option.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="category"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Categoria</FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select a verified email to display" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {TRANSACTION_CATEGORY_OPTIONS.map((option) => (
                        <SelectItem key={option.value} value={option.value}>
                          {option.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />

            <DialogFooter>
              <Button variant={"outline"}>Cancelar</Button>
              <Button>Adicionar</Button>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}
