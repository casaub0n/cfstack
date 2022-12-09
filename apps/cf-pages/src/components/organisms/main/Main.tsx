import { ArticleSection } from "@/components/molecules/ArticleSection";
import Image, { ImageLoaderProps } from "next/image";
// import { myLoader } from "@/utils/myLoader";

const myLoader = ({ src, width, quality }: ImageLoaderProps) => {
  return `https://res.cloudinary.com/dycpos4uc/image/upload/v1662198231/${src}?w=${width}&q=${quality || 75}`
}

export const Main = () => {
  return (
    <ArticleSection>
      <h2>エーワンハウジング吉田</h2>
      <p>
        <b>お部屋をお探しの方、こんにちは！吉田と申します。</b>
        <br />
        <b>自社物件を中心に賃貸・管理・仲介業・火災保険代理店をしております。</b>
        <br />
        <br />
        寛ぎの住空間をご提供できればと、建物の手入れやお部屋のリフォームにと日々取り組んでおります。
        <br />
        <br />
        また、各建物エントランスは「行ってらっしゃい！お帰りなさい！」の気持ちを込めて、清潔感と温かみのある空間を心がけております。
        <br />
        <br />
        単身者用物件が多いので学生から社会人へそして結婚へと、人生の大きなターニングポイントの数年を私どもの物件でお過ごし頂く方が多くいらっしゃいます。 結婚・就職等がきっかけとなり笑顔で退去された時は、心から「どうぞ末永くお幸せに・・・、がんばって～！」という気持ちで一杯です。
        <br />
        <br />
        これからもお客様が少しでも快適にお過ごし頂けるよう努めて参りたいと思います。
        <br />
        <br />
        そして、私どもの物件でお過ごし頂いた月日が、思い出の一こまとして残れば幸いに思います。
      </p>
      <h3>会社情報</h3>
      <ul>
        <li>有限会社エーワンハウジング吉田</li>
        <li>代表取締役 吉田 美三子</li>
        <li>〒171-0042 東京都豊島区高松1-16-1</li>
        <li>TEL. 03-3957-0093</li>
        <li>FAX. 03-3957-8442</li>
        <li>mail. a.one.housing@gmail.com</li>
      </ul>
    </ArticleSection>
  );
};