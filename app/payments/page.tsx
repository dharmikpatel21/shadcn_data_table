import { Payment, columns } from "./columns";
import { DataTable } from "./data-table";

async function getData(): Promise<Payment[]> {
  try {
    const loadData = await fetch("http://localhost:3000/data");
    const data = await loadData.json();
    return data;
  } catch (error) {
    return [];
  }
}

export default async function DemoPage() {
  const data = await getData();
  return (
    <div className="container mx-auto py-10">
      <DataTable columns={columns} data={data} />
    </div>
  );
}
