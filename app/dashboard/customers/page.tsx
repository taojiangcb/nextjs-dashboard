import CustomersTable from "@/app/ui/customers/table";
import { lusitana } from "@/app/ui/fonts";
import Search from "@/app/ui/search";
import { InvoicesTableSkeleton } from "@/app/ui/skeletons";
import { Metadata } from "next";
import { Suspense } from "react";

export const metadata: Metadata = {
  title: 'Customers'
}
export default async function CustomersPage(
  props: {
    searchParams?: Promise<{
      query?: string;
      page?: string;
    }>
  }) {

  const searchParams = await props.searchParams;
  return <div>
    <h1 className={`${lusitana.className} mb-8 text-xl md:text-2xl`}>
      Customers
    </h1>
    <Search placeholder="Search customers..." />
    <Suspense fallback={<InvoicesTableSkeleton />}>
      <CustomersTable searchParams={searchParams || {}} />
    </Suspense>

  </div>
}