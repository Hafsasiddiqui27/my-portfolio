"use client"
import ContactForm from "@/components/shared/Form"
import Wrapper from "@/components/shared/Wrapper"
const Contact = () => {

  return (
    <Wrapper>
    <main className="max-w-screen-xl mx-auto px-2 flex flex-col md:flex-row py-14 space-x-10">
    <div className="flex-1 max-w-xl items-center">
        <h2 className="font-bold text-3xl sm:text-5xl text-slate-700">Lets Create Something Amazing Together</h2>
        <p className="mt-5 text-md text-slate-600">If you are looking for a web developer who is passionate about creating exceptional digital experiences, I would love to hear from you! Whether you need a brand-new website or a redesign of an existing one, I am here to help you build a solution that is perfect for your business.</p>
         <p className="mt-4 text-md text-slate-600">Feel free to contact me through the form below, or reach out directly via</p>
         <h4 className='font-bold text-lg text-slate-800 mt-3'>Email:</h4>
         <p className=' text-slate-600 font-bold'>hafsasiddiqui27@gmail.com</p>

         <h4 className='font-bold text-lg text-slate-800 mt-3'>LinkedIn:</h4>
         <p className=' text-slate-600 font-bold'>hafsasiddiqui27</p>
    </div>
          
              
<div className="flex-1 space-x-3">
    <ContactForm />
    </div>
        </main>
        </Wrapper>
  )
      }

export default Contact