export default function Home() {
  return (
    <div className='flex items-center justify-center w-[100vw] h-[100vh]'>
      <p className='absolute top-5 left-5 text-2xl font-semibold'>Studytime</p>
      <div className='text-center'>
        <div className='text-left'>
          <p className='font-bold text-9xl'>00:55:59</p>
          <span className='font-bold text-4xl text-gray-300'>/01:00:00</span>
        </div>
      </div>
    </div>
  )
}
