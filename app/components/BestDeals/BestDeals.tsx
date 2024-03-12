'use client'

import React from 'react'
import styles from './best_deals.module.scss'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

export default function BestDeals() {
  const MySwal = withReactContent(Swal)

  function handleShowSucsess() {
    Swal.fire({
      icon: 'success',
      title:
        'Thanks for submating your email we gonna let you know the best deals as soon as possiable',
      showConfirmButton: false,
      showCloseButton: true,
    })
    console.log('fuck')
  }

  return (
    <section id={styles.best_deals}>
      <div className={styles.best_deals_container}>
        <div className={styles.best_deals_text_content}>
          <h1>GET THE BEST ONLINE DEALS ON YOUR MAILBOX</h1>
          <p>
            Signup for our Newsletter and receive Periodic Info And Alerts on the Best
            Online Deals on the Internet
          </p>
          <div className={styles.best_deals_form}>
            {/* <form> */}
            <input type="email" required placeholder="input your email here" />
            <button onClick={handleShowSucsess}>SUBMIT</button>
            {/* </form> */}
          </div>
        </div>
      </div>
    </section>
  )
}
