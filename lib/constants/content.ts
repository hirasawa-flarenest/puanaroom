import type {
  PhotoItem,
  Activity,
  Announcement,
  FAQ,
  MonthSchedule,
  SectionContent,
} from "../types";

/**
 * コンテンツデータ定数
 */

export const PHOTO_GALLERY_PHOTOS: PhotoItem[] = [
  {
    src: "/images/gallery/LINE_ALBUM_ホームページ用写真_251015_1.jpg",
    alt: "ひろばの様子1",
  },
  {
    src: "/images/gallery/LINE_ALBUM_ホームページ用写真_251015_2.jpg",
    alt: "ひろばの様子2",
  },
  {
    src: "/images/gallery/LINE_ALBUM_ホームページ用写真_251015_5.jpg",
    alt: "ひろばの様子3",
  },
  {
    src: "/images/gallery/LINE_ALBUM_ホームページ用写真_251015_6.jpg",
    alt: "ひろばの様子4",
  },
  {
    src: "/images/gallery/LINE_ALBUM_ホームページ用写真_251015_9.jpg",
    alt: "ひろばの様子5",
  },
  {
    src: "/images/gallery/LINE_ALBUM_ホームページ用写真_251015_11.jpg",
    alt: "ひろばの様子6",
  },
  {
    src: "/images/gallery/LINE_ALBUM_ホームページ用写真_251015_14.jpg",
    alt: "ひろばの様子7",
  },
  {
    src: "/images/gallery/LINE_ALBUM_ホームページ用写真_251015_17.jpg",
    alt: "ひろばの様子8",
  },
  {
    src: "/images/gallery/LINE_ALBUM_ホームページ用写真_251015_19.jpg",
    alt: "ひろばの様子9",
  },
  {
    src: "/images/gallery/LINE_ALBUM_ホームページ用写真_251015_20.jpg",
    alt: "ひろばの様子10",
  },
];

export const ACTIVITIES: Activity[] = [
  {
    date: "2025.03.15",
    title: "春のお花見会を開催しました",
    description:
      "近くの公園でお花見会を開催しました。親子でお弁当を食べながら、桜の下で楽しい時間を過ごしました。",
    content: `
      <p>3月15日（土）、春の陽気の中、<strong>近隣の公園</strong>でお花見会を開催しました。今年は満開の桜に恵まれ、素晴らしいお花見日和となりました。</p>

      <h3>イベントの様子</h3>
      <p>参加してくださった親子は<strong>12組</strong>。それぞれお気に入りのお弁当を持参し、桜の木の下でピクニックを楽しみました。</p>

      <h3>プログラム内容</h3>
      <ol>
        <li><strong>お花見散歩</strong><br>公園内を散策しながら、桜の花びらを観察しました。</li>
        <li><strong>ピクニックタイム</strong><br>レジャーシートを広げて、みんなでランチタイム。お弁当の交換も楽しみました。</li>
        <li><strong>春の歌遊び</strong><br>「さくらさくら」や「ちょうちょ」など、春の歌をみんなで歌いました。</li>
        <li><strong>記念撮影</strong><br>満開の桜をバックに、グループごとに記念撮影を行いました。</li>
      </ol>

      <hr />

      <h3>参加者の声</h3>
      <blockquote>
        <p>「初めてのお花見で、子どもも大興奮でした。他の親子とも交流できて楽しかったです。」</p>
      </blockquote>
      <blockquote>
        <p>「桜の花びらを手に取って喜んでいる姿を見られて、参加して良かったです。」</p>
      </blockquote>

      <h3>スタッフより</h3>
      <p>今年も無事にお花見会を開催することができました。天候にも恵まれ、子どもたちの<em>嬉しそうな笑顔</em>をたくさん見ることができました。</p>
      <p>来年も春の訪れとともに、楽しいお花見会を企画したいと思います。</p>

      <h3>次回のお知らせ</h3>
      <p>次回の屋外イベントは<strong>5月の新緑ピクニック</strong>を予定しています。詳細が決まり次第、お知らせいたします。</p>
    `,
    image: "/images/gallery/LINE_ALBUM_ホームページ用写真_251015_3.jpg",
  },
  {
    date: "2025.03.10",
    title: "ベビーマッサージ講座",
    description:
      "助産師さんを講師にお迎えして、ベビーマッサージ講座を実施しました。赤ちゃんもママもリラックスした時間になりました。",
    content: `
      <p>3月10日（月）、経験豊富な<strong>助産師さん</strong>を講師にお迎えして、ベビーマッサージ講座を実施しました。</p>

      <h3>講座の概要</h3>
      <table>
        <tr>
          <th>参加組数</th>
          <td>8組（生後2ヶ月〜8ヶ月の赤ちゃんと保護者）</td>
        </tr>
        <tr>
          <th>講師</th>
          <td>山田先生（助産師・ベビーマッサージインストラクター）</td>
        </tr>
        <tr>
          <th>所要時間</th>
          <td>約90分</td>
        </tr>
      </table>

      <h3>講座の流れ</h3>
      <ol>
        <li><strong>ベビーマッサージの効果について</strong><br>赤ちゃんとママの心身への良い影響についてお話がありました。</li>
        <li><strong>基本の手技</strong><br>足、お腹、背中など、部位ごとのマッサージ方法を実践しました。</li>
        <li><strong>実践タイム</strong><br>オイルを使って、実際に赤ちゃんにマッサージを行いました。</li>
        <li><strong>質疑応答</strong><br>日々の育児の悩みなども相談できる時間となりました。</li>
      </ol>

      <h3>ベビーマッサージの効果</h3>
      <ul>
        <li>赤ちゃんの<strong>リラックス効果</strong>と安眠促進</li>
        <li>親子の<em>スキンシップ</em>による絆の深まり</li>
        <li>血行促進による免疫力アップ</li>
        <li>便秘解消やガス抜きの効果</li>
        <li>ママのストレス軽減</li>
      </ul>

      <hr />

      <h3>参加されたママの感想</h3>
      <blockquote>
        <p>「マッサージ中、赤ちゃんがとても気持ちよさそうにしていて、私も癒されました。家でも続けたいと思います。」</p>
      </blockquote>
      <blockquote>
        <p>「先生が優しく丁寧に教えてくださり、初めてでも安心して参加できました。」</p>
      </blockquote>

      <h3>今後の予定</h3>
      <p><mark>大変好評をいただいたため、次回は6月に開催予定です。</mark>詳細が決まり次第、お知らせいたします。</p>

      <p><small>※ベビーマッサージは赤ちゃんの体調が良い時に行ってください。予防接種後24時間以内は避けることをお勧めします。</small></p>
    `,
    image: "/images/gallery/LINE_ALBUM_ホームページ用写真_251015_4.jpg",
  },
  {
    date: "2025.03.05",
    title: "絵本の読み聞かせ会",
    description:
      "毎週定期開催の絵本読み聞かせ会。今回は春をテーマにした絵本を楽しみました。",
    image: "/images/gallery/LINE_ALBUM_ホームページ用写真_251015_7.jpg",
  },
  {
    date: "2025.02.28",
    title: "ひなまつりイベント",
    description:
      "ひな人形の飾り付けをみんなで楽しみました。手作りのひな飾りを制作して記念撮影も行いました。",
    image: "/images/gallery/LINE_ALBUM_ホームページ用写真_251015_8.jpg",
  },
  {
    date: "2025.02.20",
    title: "親子ヨガ教室",
    description:
      "インストラクターをお招きして、親子で参加できるヨガ教室を開催しました。",
    image: "/images/gallery/LINE_ALBUM_ホームページ用写真_251015_10.jpg",
  },
  {
    date: "2025.02.15",
    title: "節分の豆まきイベント",
    description:
      "節分に合わせて豆まきイベントを実施。鬼のお面を作って、みんなで豆まきを楽しみました。",
    image: "/images/gallery/LINE_ALBUM_ホームページ用写真_251015_12.jpg",
  },
];

// 月間スケジュールデータはmicroCMSから取得するため空配列
export const MONTHLY_SCHEDULES: MonthSchedule[] = [];

// お知らせデータはmicroCMSから取得するため空配列
export const ANNOUNCEMENTS: Announcement[] = [];

// よくあるご質問データはmicroCMSから取得するため空配列
export const FAQS: FAQ[] = [];

export const SECTIONS: SectionContent[] = [
  {
    id: "guide",
    title: "ご利用案内",
    summary:
      "初めて利用する方が安心できるように、利用方法や料金、注意事項をまとめる実務的な内容です。",
    groups: [
      {
        title: "押さえておきたいポイント",
        items: [
          {
            label: "利用方法（登録制／自由利用）",
            description:
              "初回来館時の登録手順と、予約が不要な自由利用枠の案内を分かりやすく記載します。",
          },
          {
            label: "開館日時・利用時間",
            description:
              "平日・土曜の開館時間、休館日、混雑しやすい時間帯などをタイムテーブル形式で掲載予定です。",
          },
          {
            label: "利用料金",
            description:
              "ひろば利用料、イベント参加費、親子セット料金などの目安を表にまとめます。",
            note: "料金改定の可能性があるため、最新情報更新日も併記します。",
          },
          {
            label: "一時預かり／予約制サービス",
            description:
              "一時預かりの利用枠や予約フォームへの導線。キャンセルポリシーもここで案内します。",
          },
          {
            label: "注意事項（持ち物・安全面）",
            description:
              "必要な持ち物、アレルギー対応、体調不良時のお願いなど安全面のガイドラインを箇条書きで掲載します。",
          },
          {
            label: "LINE／電話での予約案内",
            description:
              "公式LINEの友だち追加QRコードや、予約専用電話番号の受付時間を記載する予定です。",
          },
        ],
      },
    ],
  },
  {
    id: "news",
    title: "最新情報・お知らせ",
    summary:
      "イベントや休館情報など、最新のトピックスを更新するニュースエリアです。",
    groups: [
      {
        title: "更新予定のトピック",
        items: [
          {
            label: "新着イベント",
            description:
              "申し込み受付中のイベントをカード形式で3件ほど表示し、詳細ページへ誘導予定です。",
          },
          {
            label: "休館日・特別開館日",
            description:
              "祝日やメンテナンスによる休館情報、講座前後の特別開館時間をカレンダーと連動させます。",
          },
          {
            label: "お知らせ一覧",
            description:
              "ブログ形式の記事一覧を作成し、カテゴリーやタグで絞り込みできる仕様を想定しています。",
          },
        ],
      },
    ],
  },
];
