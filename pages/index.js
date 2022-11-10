import Head from "next/head";
import Image from "next/image";
import { useState } from "react";
import styles from "../styles/Home.module.css";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { IoAlertCircle } from "react-icons/io5";
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
  var CurrencyFormat = require("react-currency-format");

  return (
    <div className={styles.container}>
      <NextSeo title="Dollar kursi bugun" description="Dollar kursi bugun" />
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Image src="/partner.svg" width={220} height={100} />
        <h1 className={styles.title}>
          Dollar kursi bugungi narxi,100 dollar kursi bugun toshkent, dollar
          kurs o&apos;zbekiston
        </h1>

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
                    so&apos;{" "}
                  </p>
                </>
              ))}
          </div>
        </div>
        <h4>Manba: O&apos;zbekiston Respublikasi Markaziy banki </h4>
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
