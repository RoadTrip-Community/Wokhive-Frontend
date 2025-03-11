'use client';
import { useState } from 'react';
import ApprovedInvoice from './approved';
import PendingInvoice from './pending';
import InactiveInvoice from './inactive';

interface Invoice {
  id: string;
  image: string;
  title: string;
  name: string;
  profile: string;
  status: string;
}

const invoices: Invoice[] = [
  {
    id: '1',
    image: '/assets/images/invoice.png',
    title: 'Design invoice',
    name: 'John doe',
    profile: 'Graphic designer',
    status: 'approved',
  },
  {
    id: '1',
    image: '/assets/images/invoice.png',
    title: 'Technical writing invoice',
    name: 'John doe',
    profile: 'Technical writer',
    status: 'pending',
  },
];

const Invoice = () => {
  const [activeTab, setActiveTab] = useState('approved');

  const filteredInvoices = invoices.filter((invoice) => invoice.status === activeTab);
  return (
    <div className='p-5'>
      <select
        className=''
        style={{
          color: '#101828',
          fontFamily: 'Whyte Inktrap',
          fontSize: '30px',
          fontStyle: 'normal',
          fontWeight: 500,
          lineHeight: '38px',
        }}
        onChange={(e) => setActiveTab(e.target.value)}
        value={activeTab}
      >
        <option value='approved'>Approved invoice</option>
        <option value='pending'>Pending invoice</option>
        <option value='inactive'>Inactive invoice</option>
      </select>

      <div className='mt-5'>
        {activeTab === 'approved' && <ApprovedInvoice invoices={filteredInvoices} />}
        {activeTab === 'pending' && <PendingInvoice invoices={filteredInvoices} />}
        {activeTab === 'inactive' && <InactiveInvoice invoices={filteredInvoices} />}
      </div>
    </div>
  );
};

export default Invoice;
