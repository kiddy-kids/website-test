// pages/index.js
import Head from 'next/head';
import Image from 'next/image';
import { useState } from 'react';
import styles from '../../styles/Home.module.css';

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>KIDDY KIDS - KYOTO UNIVERSITY</title>
        <meta name="description" content="京都大学公認テニスサークル KIDDY KIDS" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div className={styles.header}>
          <div className={styles.logo}>TOP</div>
          <button className={styles.menuButton} onClick={toggleMenu}>メニュー</button>
        </div>

        {isMenuOpen && (
          <div className={styles.menuOverlay}>
            <ul className={styles.menuList}>
              <li>TOP</li>
              <li>スタッフ紹介</li>
              <li>新歓情報</li>
              <li>年間イベント</li>
              <li>戦績</li>
              <li>Interview</li>
              <li>アンケート結果</li>
            </ul>
          </div>
        )}

        <div className={styles.content}>
          <div className={styles.logo}>
            <Image 
              src="/logo.png" 
              alt="KIDDY KIDS Logo" 
              width={200} 
              height={50} 
            />
            <div className={styles.socialIcons}>
              <div className={styles.socialIcon}>X</div>
              <div className={styles.socialIcon}>Inst</div>
            </div>
          </div>

          <div className={styles.mainImage}>
            <Image 
              src="/tennis-ball.jpg" 
              alt="Tennis Ball" 
              width={500} 
              height={300} 
              layout="responsive"
            />
            <div className={styles.title}>
              <h1>KYOTO UNIVERSITY</h1>
              <h2>KIDDY KIDS</h2>
            </div>
          </div>

          <div className={styles.aboutButton}>
            <button>About us</button>
          </div>

          <div className={styles.aboutText}>
            <p>はじめまして！京都大学公認テニスサークルKIDDY KIDSです！</p>
            <p>私たちは平日の夜や休日に活動する京都大学のテニスサークルです。テニス初心者から経験者まで、様々なレベルの部員が在籍しています。日々の練習や合宿、イベントを通して楽しくテニスをしながら、大学生活を充実させています。</p>
          </div>

          <div className={styles.sections}>
            <div className={styles.section}>
              <Image src="/staff.jpg" alt="スタッフ紹介" width={400} height={100} />
              <p>スタッフ紹介</p>
            </div>
            <div className={styles.section}>
              <Image src="/shinkan.jpg" alt="新歓情報" width={400} height={100} />
              <p>新歓情報</p>
            </div>
            <div className={styles.section}>
              <Image src="/events.jpg" alt="年間イベント" width={400} height={100} />
              <p>年間イベント</p>
            </div>
            <div className={styles.section}>
              <Image src="/results.jpg" alt="戦績" width={400} height={100} />
              <p>戦績</p>
            </div>
            <div className={styles.section}>
              <Image src="/interview.jpg" alt="Interview" width={400} height={100} />
              <p>Interview</p>
            </div>
            <div className={styles.section}>
              <Image src="/survey.jpg" alt="アンケート結果" width={400} height={100} />
              <p>アンケート結果</p>
            </div>
          </div>
        </div>
      </main>

      <footer className={styles.footer}>
        <p> 2025 KIDDY KIDS - KYOTO UNIVERSITY</p>
      </footer>
    </div>
  );
}