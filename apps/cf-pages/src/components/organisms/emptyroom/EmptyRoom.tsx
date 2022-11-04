import { ArticleSection } from "@/components/molecules/ArticleSection";
import Image from "next/image";
import Link from "next/link";

export const EmptyRoom = () => {
  return (
    <ArticleSection>
      <h2>板橋駅前桜ビル401号室　内見受付中</h2>
      <Image
        alt="sakura building living room"
        src="sakura-building-livingroom.jpg"
        width={480}
        height={640}
        layout={"responsive"} />
      <p>板橋駅から徒歩1分の駅近物件です！部屋はフルリニューアル、大きなウオーキングクローゼットとワーキングスペースがあります。</p>
      <p>内見をお待ちしております。</p>
      <ul>
        <li>電話番号：<Link href={"tel:090-1663-4538"}>090-1663-4538</Link></li>
      </ul>
    </ArticleSection>
  );
};