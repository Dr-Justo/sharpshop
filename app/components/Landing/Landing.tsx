import React from 'react'
import styles from './landing.module.scss'
import Link from 'next/link'
import Image from 'next/image'

export default function Landing() {
  return (
    <header id={styles.landing}>
      <div className={styles.landing_container}>
        <div className={styles.landing_gradient}></div>
        <div className={styles.landing_text_content}>
          <h1>
            Experience Shopping Like Never Before with{' '}
            <span className={styles.shopxpress_text}>SharpShop</span>{' '}
          </h1>
          <p>
            Welcome to SharpShop, your one-stop destination for all your
            shopping needs. Discover the latest trends, high-quality products,
            and unbeatable deals that will leave you thrilled. From fashion and
            electronics to home essentials, we have got it all. Start your
            journey with SharpShop today and redefine the way you shop!
          </p>
          <Link href="/products">See the products</Link>
        </div>
        <div className={styles.landing_img_content}>
          <Image
            src="/landing_store.png"
            height={600}
            width={1000}
            alt="landing image"
            quality={80}
          />
        </div>
      </div>
    </header>
  )
}
