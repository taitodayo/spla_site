import { useState } from "react";
import { BrowserRoute, Routes, Route, Link } from "react-router-dom";

import Home from "./pages/Home";
import Random from "./pages/Random"

function Header() {
  return (
    <header className="site-header">
      <a className="logo" href="#" aria-label="ホーム">スプラトゥーン３便利サイト<span>(煽りの会専用)</span></a>
      <nav aria-label="メインナビゲーション">
        <a href="#features">特徴</a>
        <a href="#about">このサイトについて</a>
      </nav>
    </header>
  );
}

function Button({ children, onClick, variant = "primary" }) {
  return (
    <button className={`button button-${variant}`} onClick={onClick}>
      {children}
    </button>
  );
}

function FeatureCard({ number, title, description }) {
  return (
    <article className="feature-card">
      <span className="feature-number">{number}</span>
      <h3>{title}</h3>
      <p>{description}</p>
    </article>
  );
}

export default function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="app-shell">
      <Header />

      <main>
        <section className="hero">
          <p className="eyebrow">REACT STARTER TEMPLATE</p>
          <h1>アイデアを、<br /><span>Webサイトに。</span></h1>
          <p className="hero-description">
            ここから自分だけのWebサイトを作ろう。<br />
            文章・色・機能を自由にカスタマイズできます。
          </p>
          <div className="hero-actions">
            <Button onClick={() => document.querySelector("#features")?.scrollIntoView({ behavior: "smooth" })}>
              はじめる
            </Button>
            <Button variant="secondary" onClick={() => setCount((current) => current + 1)}>
              クリック回数：{count}
            </Button>
          </div>
          <p className="hint">ボタンを押すと、Reactの動作を確認できます。</p>
        </section>

        <section className="features section" id="features">
          <div className="section-heading">
            <p className="eyebrow">BASIC COMPONENTS</p>
            <h2>使い回せる基本パーツ</h2>
            <p>必要なパーツをコピーして、新しいページでも利用できます。</p>
          </div>
          <div className="feature-grid">
            <FeatureCard
              number="01"
              title="Reactコンポーネント"
              description="ヘッダーやカードを部品として分け、何度でも使えます。"
            />
            <FeatureCard
              number="02"
              title="まとめたデザイン"
              description="色・文字・余白などはCSSファイルで一括して調整できます。"
            />
            <FeatureCard
              number="03"
              title="スマホにも対応"
              description="画面の幅に合わせてレイアウトが切り替わります。"
            />
          </div>
        </section>

        <section className="about section" id="about">
          <div>
            <p className="eyebrow">YOUR PROJECT</p>
            <h2>ここを自分のサイトに変えよう。</h2>
          </div>
          <p>
            `src/App.jsx` の文章やパーツを変更し、`src/styles.css` で見た目を整えてください。
            新しい機能はコンポーネントとして追加すると管理しやすくなります。
          </p>
        </section>
      </main>

      <footer className="site-footer">
        <span>© {new Date().getFullYear()} MySite</span>
        <span>Built with React + Vite</span>
      </footer>
    </div>
  );
}