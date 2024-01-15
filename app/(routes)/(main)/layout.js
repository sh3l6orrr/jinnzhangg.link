import Header from './Header'
import Sidebar from './Sidebar'
import Navbar from './Navbar'


export default function Frame({ children }) {


  return <div>
    <Navbar />
    <Sidebar />
    <Header />
    <div className='md:h-24 h-12' />
    <main className='bg-white dark:bg-black rounded-3xl md:mr-32 md:ml-80 p-12 shadow-lg dark:md:border'>
      {children}

    </main>
    <div className='h-12' />
    
  </div>
}
