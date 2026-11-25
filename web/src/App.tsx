import { Invoice } from "./invoiceType.ts";
import InvoiceTable from "./InvoviceTable.tsx";
import { useState, useEffect } from 'react';

const invoices: Invoice[] = [
  {
    id: 1,
    amount: 100,
    status: "pending",
    issueDate: "2026-10-03",
    dueDate: "2026-11-05",
    customer: {
      id: 1,
      name: "Construtora Meridiano",
      email: "contato@meridiano.com.br",
    },
  },
  {
    id: 2,
    amount: 2642245,
    status: "pending",
    issueDate: "2026-08-02",
    dueDate: "2026-12-02",
    customer: {
      id: 2,
      name: "Telebras",
      email: "contato@telebras.com.br",
    },
  },
  {
    id: 3,
    amount: 10253256,
    status: "pending",
    issueDate: "2025-10-07",
    dueDate: "2025-10-07",
    customer: {
      id: 3,
      name: "Petobras",
      email: "contato@Petobras.com.br",
    },
  },
];

 

export default function App() {
  const [invoices, setInvoices] = useState<Invoice[]>([])
  const [error, setError] = useState<null | string>(null)
  const [loading, setLoading] = useState<boolean>(true)

  useEffect(() => {
    async function getInvoices() {
      try {
        const response = await fetch('/api/invoices');
        if (!response.ok) throw new Error(`HTTP ${response.status}`);
        const datas = await response.json();
        setInvoices(datas)
      } catch {
        setError('Falha ao buscar relação de faturas')
      } finally {
        setLoading(false)
      }
    }

    getInvoices()
  }, []);

  return <>
    <h1>Faturas</h1>
    {loading ? <p>Carregando faturas...</p> : (
      error ? <p>{error}</p> : <InvoiceTable datas={invoices}/>
    )}
  </>;
}
