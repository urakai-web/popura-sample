export type Job = {
  id: string;
  title: string;
  image: string;
  type: string;
  salary: string;
  hours: string;
  qualifications: string[];
  description: string;
  location: string;
  benefits: string[];
  bonus: string;
  holidays: string;
  allowances: string[];
  raise: string;
  probation: string;
  contact: string;
  note: string;
};

export const jobs: Job[] = [
  {
    id: "jidou-shidouin",
    title: "児童デイサービス指導員",
    image: "/job-jidou.png",
    type: "パート",
    salary: "時給1,200円〜1,260円",
    hours:
      "平日 9:00〜18:00 / 13:00〜18:00 の間で週30時間以上。シフト制、家庭による調整可能。",
    qualifications: [
      "未経験者歓迎・学歴不問",
      "普通自動車運転免許（AT限定可）",
      "児童指導員・保育士・教員免許・社会福祉士のいずれか",
    ],
    description:
      "放課後や学校のお休みの日に施設を利用されるお子様の支援、外出時の支援、活動の補助、おやつの提供、送迎業務（ワゴン車または軽四）。",
    location:
      "児童デイサービスぽぷらきらら（内灘町）/ ぽぷらなぎさ（羽咋市）",
    benefits: [
      "社会保険・雇用保険・労災保険加入",
      "車通勤可・交通費支給（上限700円/日）",
      "育児休暇実績あり",
    ],
    bonus: "年2回（前年度実績）",
    holidays:
      "土曜・日曜・夏季休暇・冬期休暇・シフト制（有給休暇あり）※なぎさは土曜営業",
    allowances: ["安全運転手当 100円/送迎1件（上限4,000円）"],
    raise: "〜50円（業績による）",
    probation: "3ヵ月",
    contact:
      "TEL：076-239-1022　採用担当：木村・渡辺（平日 9:00〜17:00）",
    note: "随時見学可能です。お気軽にお問い合わせください。",
  },
  {
    id: "houmon-kaigo",
    title: "訪問介護ヘルパー",
    image: "/job-houmon.png",
    type: "パート",
    salary: "時給1,400円〜1,460円",
    hours:
      "8:00〜18:00の間で1時間〜、週1日〜OK。シフト制、家庭による調整可能。",
    qualifications: [
      "未経験者歓迎・学歴不問・60代以上も歓迎",
      "普通自動車運転免許（AT限定可）",
      "介護職員初任者研修修了者 or ヘルパー2級",
    ],
    description:
      "内灘・金沢方面への生活援助や身体介護の訪問介護。自家用車で訪問、直行直帰も可能。",
    location: "石川県河北郡内灘町向粟ヶ崎3-43",
    benefits: [
      "車通勤可",
      "育児休暇実績あり",
      "勤務時間によって社会保険加入可能",
    ],
    bonus: "年2回（処遇改善手当）",
    holidays: "日曜・夏季休暇・冬期休暇・シフト制",
    allowances: [
      "営業時間外手当 275〜300円/時",
      "報告書手当 150円/件",
      "ガソリン手当 50〜700円/日",
    ],
    raise: "〜50円（業績による）",
    probation: "3ヵ月",
    contact:
      "TEL：076-239-1022　採用担当：埴崎・渡辺（平日 9:00〜17:00）",
    note: "週1日からでもOK！随時見学可能です。",
  },
  {
    id: "kaigo-hojo",
    title: "介護補助スタッフ",
    image: "/job-kaigo.png",
    type: "パート",
    salary: "時給1,204円〜",
    hours: "8:45〜12:15、週3〜5日。午後勤務等も相談可能。",
    qualifications: [
      "普通自動車運転免許（AT限定可）",
      "介護福祉士・初任者研修・ヘルパー2級があれば尚可",
    ],
    description:
      "デイサービスを利用される高齢者のリハビリ・トレーニングマシンのトレーナー補助、外出支援、レクリエーション、入浴介助、送迎業務。",
    location: "リハビリステーション金沢きらら（内灘町向粟ヶ崎3-41）",
    benefits: ["労災保険", "車通勤可・交通費支給（上限700円/日）"],
    bonus: "年2回（前年度実績）",
    holidays: "土・日／有給休暇／8/15〜8/16・12/31〜1/3",
    allowances: [
      "介護福祉士資格手当 60円/時",
      "安全運転手当 100円/件（上限4,000円）",
    ],
    raise: "〜50円/時（業績による）",
    probation: "3ヵ月",
    contact:
      "TEL：076-239-1022　採用担当：木村・渡辺（平日 9:00〜17:00）",
    note: "随時見学可能です。お気軽にお問い合わせください。",
  },
];
