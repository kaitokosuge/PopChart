import organisms from "../../assets/css/organisms.module.css";

export default function Footer() {
  return (
    <footer className={organisms.footer}>
      <small>&copy; popchart</small>
      <p className={organisms.footer_text}>
        データは<a href="https://opendata.resas-portal.go.jp/">RESAS API</a>
        から取得しています
      </p>
    </footer>
  );
}
