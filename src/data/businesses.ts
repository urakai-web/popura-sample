export type Business = {
  id: string;
  name: string;
  category: string;
  icon: string;
  summary: string;
  description: string;
  address?: string;
  zip?: string;
  tel?: string;
  fax?: string;
  hours?: string;
  closedDays?: string;
  services: string[];
};

export const businesses: Business[] = [
  {
    id: "rehabili-kirara",
    name: "リハビリステーション金沢きらら",
    category: "通所介護",
    icon: "🏋️",
    summary: "専用マシンと理学療法士による個別機能訓練",
    description:
      "教育を受けたスタッフが専用のマシンを用いた運動、集団での体操、理学療法士による個別機能訓練等を提供しています。要介護度の改善・維持を目指し、介護予防・日常生活支援総合事業、自費サービスにも対応しています。",
    address: "石川県河北郡内灘町向粟崎3丁目43番地",
    zip: "920-0274",
    tel: "076-239-1022",
    fax: "076-239-1029",
    hours: "平日 8:00〜17:00",
    closedDays: "土日祝",
    services: ["通所介護", "介護予防・日常生活支援総合事業", "自費サービス"],
  },
  {
    id: "helper-popura",
    name: "ヘルパーステーション ぽぷら",
    category: "訪問介護",
    icon: "🏠",
    summary: "ご自宅での身体介護と生活援助",
    description:
      "ホームヘルパーがご自宅を訪問し、身体介護と生活援助を提供いたします。介護予防・日常生活支援総合事業・自費サービスも実施しています。",
    address: "石川県河北郡内灘町向粟崎3丁目43番地",
    zip: "920-0274",
    tel: "076-239-1022",
    fax: "076-239-1022",
    hours: "平日 8:00〜17:00",
    closedDays: "土日祝",
    services: ["訪問介護", "介護予防・日常生活支援総合事業", "自費サービス"],
  },
  {
    id: "jidou-day",
    name: "児童デイサービス",
    category: "放課後等デイサービス・児童発達支援",
    icon: "🧒",
    summary: "18歳未満の障がいのあるお子様への支援",
    description:
      "18歳未満の障がいのあるお子様を対象に、送迎、入浴、宿題支援、おやつ作り、公共交通利用体験、買い物体験などを提供しています。3施設（きらら・なぎさ・かがやき）で展開中です。",
    services: [
      "放課後等デイサービス",
      "児童発達支援",
      "送迎",
      "入浴支援",
      "生活体験活動",
    ],
  },
  {
    id: "nagisa-soudan",
    name: "ぽぷらなぎさ相談支援事業所",
    category: "相談支援",
    icon: "💬",
    summary: "障がいのある方とご家族の相談窓口",
    description:
      "障がいのある方やそのご家族向けの相談窓口です。サービス等利用計画の作成と事業者連携を実施しています。",
    address: "石川県羽咋市島出町上1番16",
    zip: "925-0051",
    tel: "0767-23-4800",
    fax: "0767-23-4803",
    hours: "平日 8:00〜17:00",
    closedDays: "土日祝",
    services: ["特定相談支援", "障害児相談支援", "サービス等利用計画作成"],
  },
  {
    id: "kyotaku-kaigo",
    name: "ぽぷら居宅介護支援事業所",
    category: "居宅介護支援",
    icon: "📋",
    summary: "ケアマネージャーによるケアプラン作成",
    description:
      "ケアマネージャーがケアプランを作成し、利用者様が可能な限り住み慣れたご自宅や地域で自立した日常生活を送ることができるよう支援いたします。",
    address: "石川県河北郡内灘町向粟崎3丁目43番地",
    zip: "920-0274",
    tel: "076-239-1022",
    fax: "076-239-1029",
    hours: "平日 8:00〜17:00",
    closedDays: "土日祝",
    services: ["居宅介護支援", "ケアプラン作成", "介護サービス調整"],
  },
];
