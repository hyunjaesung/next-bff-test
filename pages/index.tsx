import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>예약 랜드</title>
      </Head>
      <main className={styles.main}>
          <nav>
              <div className="nav_wrap">
                  <div className="logo"/>
                  <div className="info">
                      <div>
                          <div className="info_item profile_item">
                            <div className="profile"/>
                            <div className="profile_name">
                              <span>라이언</span>
                            </div>
                          </div>
                          <div className="info_item">
                              <span>포인트:</span>
                              <span>100000</span>
                          </div>
                          <div className="info_item">
                              <span>쿠폰:</span>
                              <span>1장</span>
                          </div>

                      </div>
                      <div className="welcome">
                        <span>오늘 그랜드 하얏트 방문 예정입니다.</span>
                      </div>
                  </div>
              </div>
          </nav>
          <section>
              <h1 className={styles.title}>
                  예약랜드에 오신 여러분 환영헙니다.
              </h1>
          </section>
      </main>
    </div>
  )
}

export default Home
