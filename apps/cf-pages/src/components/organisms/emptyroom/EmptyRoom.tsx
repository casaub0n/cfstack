import Image from "next/image";
import styles from "./styles.module.css";

export const EmptyRoom = () => {
  return (
    <section className={styles.card}>
      {/* img */}
      <div className={styles.container}>
        <h2><b>板橋駅前桜ビル401号室</b></h2>
        <Image
          alt="sakura building living room"
          src="sakura-building-livingroom.jpg"
          width={256}
          height={171}
          layout={"responsive"} />
        <p>板橋駅前桜ビル401号室</p>
      </div>
    </section>
  );
};