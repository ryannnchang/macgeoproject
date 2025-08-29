export default function Health({ health, maxHealth }) {

  const currentHealthPercentage = (health / maxHealth) * 100;

  return (
    <div className='bg-mcmaster w-85 h-10 flex flex-col items-center justify-center rounded-xl'>
      <div className='relative w-80 h-5 bg-mcmasterred rounded-lg'>
        <div className='absolute w-80 h-5 bg-mcmastergreen flex justify-center rounded-lg text-s text-white font-bold items-center right-0' style={{ width: `${currentHealthPercentage}%` }}> 
          {health}
        </div>
      </div>
    </div>
  );
}
