const invoices = [
    {
        id: 1,
        amount: 100,
        status: 'pending',
        issueDate: '07-10-2026',
        dueDate: '05-11-2026',
        customer: {
            name: 'Construtora Meridiano',
            email: 'contato@meridiano.com.br'
        }
    },
    {
        id: 2,
        amount: 2642245,
        status: 'pending',
        issueDate: '02-08-2026',
        dueDate: '02-12-2026',
        customer: {
            name: 'Telebras',
            email: 'contato@telebras.com.br'
        }
    },
    {
        id: 3,
        amount: 10253256,
        status: 'pending',
        issueDate: '07-10-2025',
        dueDate: '07-10-2026',
        customer: {
            name: 'Petobras',
            email: 'contato@Petobras.com.br'
        }
    }
];

export function findAllInvoices() {
   return invoices
}

export function findInvoiceById(id: number) {
    return invoices.find(element => element.id === id);

    
}