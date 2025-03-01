import { NextPage } from 'next';
import ContractCard from './contractCard';

const ContractInfo: NextPage = () => {
  return (
    <div className='flex flex-wrap gap-5'>
      <ContractCard />
      <ContractCard />
    </div>
  );
};

export default ContractInfo;
