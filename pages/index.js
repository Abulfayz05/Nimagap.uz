import Head from "next/head";
import Image from "next/image";
import { useState } from "react";
import styles from "../styles/Home.module.css";
import { getAssetURL } from "../utils/get-asset-url";

import { NextSeo } from "next-seo";
import Script from "next/script";
import CurrencyFormat from "react-currency-format";

export async function getServerSideProps() {
  const res = await fetch("https://cbu.uz/uz/arkhiv-kursov-valyut/json");

  const data = await res.json();

  return {
    props: {
      data,
    },
  };
}

export default function Home({ data }) {
  const [curs, setCurs] = useState("1");
  console.log(curs);

  return (
    <div className={styles.container}>
      <NextSeo
        title="Dollar kursi bugun"
        description="Dollar kursi bugungi narxi,100 dollar kursi bugun toshkent, dollar
          kurs o'zbekiston"
      />
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Image src="/partner.svg" width={220} height={100} alt="bank"/>
        <h1 className={styles.title}>Dollar kursi bugungi narxi</h1>

        <div className={styles.grid}>
          <div className={styles.box}>
            {data
              .filter((c) => c.Ccy === "USD")
              .map(({ Rate, Date }) => (
                <>
                  <p>{Date}</p>
                  <h3>USD</h3>
                  <input
                    type="text"
                    value={curs}
                    onChange={(e) => setCurs(e.target.value)}
                  />
                  <p className={styles.usz}>
                    {" "}
                    <CurrencyFormat
                      value={curs * Math.floor(Rate)}
                      displayType={"text"}
                      thousandSeparator={true}
                    />{" "}
                    so&apos;m{" "}
                  </p>
                </>
              ))}
          </div>
        </div>
        <h4>Manba: O&apos;zbekiston Respublikasi Markaziy banki </h4>
        <video
            poster={getAssetURL("edd4112e-68fe-405f-87c2-d78113465d54")}
            src={getAssetURL("70b7a076-a578-4ef6-9ae3-4958da12bc24")}
            controls
            muted
            loop

            // autoPlay
          ></video>
               <video
            poster={getAssetURL("edd4112e-68fe-405f-87c2-d78113465d54")}
            src="/socail.mp4"
            controls
            muted
            loop

            // autoPlay
          ></video>

      </main>

      <footer className={styles.footer}>
        {/* <a href="https://www.digitalocean.com/?refcode=e0d3b5e9461e&utm_campaign=Referral_Invite&utm_medium=Referral_Program&utm_source=badge">
          <img
            src="https://web-platforms.sfo2.digitaloceanspaces.com/WWW/Badge%203.svg"
            alt="DigitalOcean Referral Badge"
          />
        </a> */}
      </footer>
    </div>
  );
}
