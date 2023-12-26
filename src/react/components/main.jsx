import mainImg from "../../assets/images/illustration-article.svg";
import profile from "../../assets/images/image-avatar.webp";

export default function Main() {
  return (
    <main>
      <div className="container">
        <picture>
          <img src={mainImg} alt="style" />
        </picture>
        <section>
          <button>Learning</button>
          <div>Published 21 Dec 2023</div>
          <h1>HTML & SCSS foundation</h1>
          <p>
            These languages are the backbone of every website, defining
            structure, content, and presentation
          </p>
          <div className="flex">
            <img src={profile} alt="user_profile" />
            <span>Greg hooper</span>
          </div>
        </section>
      </div>
    </main>
  );
}
