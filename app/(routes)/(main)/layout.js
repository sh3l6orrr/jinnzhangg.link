import Header from './Header'
import Sidebar from './Sidebar'
import Navbar from './Navbar'


export default function Frame({ children }) {


  return <>
    <Navbar />
    <Sidebar />
    <Header />
    <main className='bg-white dark:bg-black rounded-3xl w-full md:w-3/5 md:left-1/4 top-24 absolute min-h-96 p-8'>
      {children}
      <div className='h-12' />
    </main>
    
  </>
}
