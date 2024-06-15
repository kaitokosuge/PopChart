import organisms from "../../assets/css/organisms.module.css";

export default function Header() {
  return (
    <header className={organisms.header}>
      <div className={organisms.header_inner}>
        <h1 className={organisms.header_title}>
          PopChart
          <span className={organisms.header_subTitle}>
            &ensp;都道府県でみる人口データ
          </span>
        </h1>
      </div>
    </header>
  );
}
