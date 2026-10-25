import { Link } from "react-router-dom";
import "../styles.css"

const categories = [
    {
        title: "ブキランダム",
        description: "ブキランダムはココ",
        path: "/random",
    },
];


function Home() {
    return (
        <main className="home">
            <header className="home_header">
                <p className="site_label">ブキランダム</p>
                <h1>カテゴリを選択</h1>
                <p className="home_description">カテゴリを選択してください</p>
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