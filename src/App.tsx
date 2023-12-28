import { useState } from 'react'
import faqData from 'Data/data.json'
import { StarIcon } from 'Icons'

function App() {
  const [data, setData] = useState(faqData)

  const setActive = (id: number) => setData((e) => ({ ...e, active: data.active == id ? -1 : id }))

  return (
    <main className='main'>
      <section className='main__top-section'>
        <StarIcon />
        <h2>FAQs</h2>
      </section>

      <div className='main__faq'>

        {data.faqs.map((faq) => (
          <div key={faq.id} className='main__faq__dropdown'>
            <div className='main__faq__dropdown__wrapper'>
              <h5 className='main__faq__dropdown__wrapper_question'>{faq.question}</h5>
              <button
                onClick={() => setActive(faq.id)}
                className={`main__faq__dropdown__wrapper_button ${faq.id == data.active ? 'main__faq__dropdown__wrapper_button--active' : ''}`}/>
            </div>

            {faq.id == data.active ? (
              <p className='main__faq__dropdown_answer'>{faq.answer}</p>
            ) : null}

          </div>
        ))}

      </div>
    </main>
  )
}

export default App
