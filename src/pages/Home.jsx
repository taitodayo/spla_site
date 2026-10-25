import { Link } from "react-router-dom";
import "../styles.css";

const categories = [
  {
    title: "武器ランダム",
    description: "ランダムな武器を選ぼう！",
    path: "/random",
    icon: "🎲",
  },
  {
    title: "お気に入り",
    description: "お気に入りの武器を管理しよう！",
    path: "/favorites",
    icon: "⭐",
  },
];

function Home() {
  return (
    <main className="home">
      <header className="home-header">
        <p className="site-label">WEAPON RANDOM</p>
        <h1>カテゴリを選択</h1>
        <p className="home-description">
          遊びたいモードを選んでください。
        </p>
      </header>

      <section className="category-grid">
        {categories.map((category) => (
          <Link
            to={category.path}
            className="category-card"
            key={category.path}
          >
            <span className="category-icon">{category.icon}</span>

            <h2>{category.title}</h2>

            <p>{category.description}</p>

            <span className="card-arrow">→</span>
          </Link>
        ))}
      </section>
    </main>
  );
}

export default Home;