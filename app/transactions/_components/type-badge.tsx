import { Badge } from "@/app/_components/ui/badge";
import { Transaction, TransactionType } from "@prisma/client";
import { CircleIcon } from "lucide-react";

interface TransactionTypeBadgeProps {
  transaction: Transaction;
}

export function TransactionTypeBadge({
  transaction,
}: TransactionTypeBadgeProps) {
  if (transaction.type === TransactionType.DEPOSIT) {
    return (
      <Badge className="bg-muted text-green-500 hover:bg-muted">
        <CircleIcon className="mr-2 fill-green-500" size={10} />
        GANHO
      </Badge>
    );
  }
  if (transaction.type === TransactionType.EXPENSE) {
    return (
      <Badge className="bg-red-500 bg-opacity-10 text-red-500 hover:bg-muted">
        <CircleIcon className="mr-2 fill-red-500" size={10} />
        DESPESA
      </Badge>
    );
  }
  if (transaction.type === TransactionType.INVESTMENT) {
    return (
      <Badge className="bg-white bg-opacity-10 text-white hover:bg-muted">
        <CircleIcon className="mr-2 fill-white" size={10} />
        INVESTIMENTO
      </Badge>
    );
  }
}
