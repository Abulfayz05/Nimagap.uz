import React from "react";
import styles from "../styles/Yangilik.module.css";
import { useRouter } from "next/router";
import Image from "next/image";
import { getAssetURL } from "../utils/get-asset-url";
import Link from "next/link";

export default function Yangilik({ data }) {
  const { locale } = useRouter();

  return (
    <div className={styles.news}>
      <div className={styles.today_news}>
        <div className={styles.head}>
          <h3>Welcome to nimagap.uz</h3>
          <h4>Thursday, 22 September</h4>
        </div>

        <div className={styles.gridmain}>
          <div className={styles.main}>
            <Image
              layout="fill"
              src="/imagemain.webp"
              objectFit="cover"
              alt="main"
            />
            <div className={styles.title}>
              <h3>Russia begins drafting new troops to fight in Ukraine</h3>
              <p>
                The Kremlin is continuing with plans to call up reservists to
                shore up its war effort in Ukraine, even as young men try to
                flee.
              </p>
            </div>
          </div>
          <div className={styles.card_1}>
            <Image
              layout="fill"
              src="/urush.jpg"
              objectFit="cover"
              alt="main"
            />
            <div className={styles.title}>
              <h4>Russia begins drafting new troops to fight in Ukraine</h4>
            </div>
          </div>
          <div className={styles.card_2}>
            <Image
              layout="fill"
              src="/russia.jpg"
              objectFit="cover"
              alt="main"
            />
            <div className={styles.title}>
              <h4>Russia begins drafting new troops to fight in Ukraine</h4>
            </div>
          </div>
          <div className={styles.card_3}>
            <Image
              layout="fill"
              src="/chipta.jpg"
              objectFit="cover"
              alt="main"
            />
            <div className={styles.title}>
              <h4>Moskvadan Toshkent, Istanbul, Ervan va Bokuga reyslar </h4>
            </div>
          </div>
          <div className={styles.card_4}>
            <Image layout="fill" src="/zoir.jpg" objectFit="cover" alt="main" />
            <div className={styles.title}>
              <h4>Zoir Mirzayev Toshkent viloyati hokimi etib tayinlandi</h4>
            </div>
          </div>
        </div>
      </div>


<h6>News</h6>
      <div className={styles.section}>
        
      <div className={styles.grid}>
        {data
          .filter((p) => p.news_id)
          .map(({ news_id, news_image, news_title, news_content }) => (
            <div key={news_id} className={styles.card}>
              <div className={styles.image}>
                <Image
                  src={getAssetURL(news_image)}
                  layout="responsive"
                  width={350}
                  height={210}
                  alt="Image"
                />
              </div>

              <div className={styles.item}>
                <Link href={`/news/${news_id}`}>
                  <a>{news_title}</a>
                </Link>
                <p
                  dangerouslySetInnerHTML={{
                    __html: news_content.split(" ", 15).join(" "),
                  }}
                ></p>
              </div>
            </div>
          ))}
      </div>
        <div className={styles.ads}></div>
      </div>

      
    </div>
  );
}
