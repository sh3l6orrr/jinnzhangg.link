import Header from './Header'
import Sidebar from './Sidebar'
import Navbar from './Navbar'


export default function Frame({ children }) {


  return <div>
    <Navbar />
    <Sidebar />
    <Header />
    <div className='lg:h-24 h-12' />
    <main className='bg-white dark:bg-black rounded-3xl lg:mr-32 lg:ml-80 p-12 lg:border'>
      {children}

    </main>
    <div className='h-12' />
    
  </div>
}
