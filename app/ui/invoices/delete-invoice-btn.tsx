'use client';

import { deleteInvoice } from "@/app/lib/actions";
import { TrashIcon } from "@heroicons/react/24/outline";

export default function DeleteInvoice({ id }: { id: string }) {
  const deleteInvoiceWithId = deleteInvoice.bind(null, id);
  return (
    <form action={async () => { await deleteInvoiceWithId() }}>
      <button className="rounded-md border p-2 hover:bg-gray-100">
        <span className="sr-only">Delete</span>
        <TrashIcon className="w-5" />
      </button>
    </form >
  );
}
