import type { NextPage } from 'next'
import Head from 'next/head'
import Navigation from "../components/Navigation";
import {Suspense} from "react";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>예약 랜드</title>
      </Head>
      <main>
          <Suspense fallback={"loading"}>
            <Navigation/>
          </Suspense>
          <section>
              <h1>
                  예약랜드에 오신 여러분 환영헙니다.
              </h1>
          </section>
      </main>
    </div>
  )
}

export default Home
