interface ShowModalProps {
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
}
const ViewContractModal = ({ setShowModal }: ShowModalProps) => {
  return (
    <div className='fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 '>
      <div className='bg-white rounded-3xl p-10 w-[30%] h-[50%]'>
        <div className='flex justify-between items-center'>
          <div>
            <h1 className='text-gray-900 text-2xl font-semibold'>Design Part-time Contract. pdf</h1>
            <p className='text-gray-600 text-sm'>Uploaded 21 hours ago 999KB</p>
          </div>

          <div className='bg-secondary-purple-10 rounded-lg p-3 cursor-pointer' onClick={() => setShowModal(false)}>
            <svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none'>
              <path
                d='M18 6L6 18M6 6L18 18'
                stroke='#EB5757'
                strokeWidth='2'
                strokeLinecap='round'
                strokeLinejoin='round'
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewContractModal;
