import { Link } from "react-router-dom";
import { businesses } from "../data/businesses";

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-b from-popura-green-light to-popura-cream">
        <div className="max-w-5xl mx-auto px-4 py-12 md:py-20 text-center">
          <p className="text-popura-green font-bold text-sm tracking-widest mb-3">
            石川県河北郡内灘町
          </p>
          <h1 className="text-3xl md:text-5xl font-bold text-popura-brown leading-tight mb-4">
            住み慣れた地域で
            <br />
            安心して暮らせる
            <br />
            お手伝いをします
          </h1>
          <p className="text-popura-brown/70 text-base md:text-lg max-w-md mx-auto mb-8">
            訪問介護・通所介護・児童デイサービス・相談支援。
            <br className="hidden md:block" />
            地域に根ざした福祉サービスを提供しています。
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href="tel:076-239-1022"
              className="inline-flex items-center justify-center gap-2 bg-popura-orange text-white font-bold px-6 py-3 rounded-full text-base no-underline hover:bg-popura-orange/90 transition-colors shadow-lg shadow-popura-orange/20"
            >
              📞 076-239-1022
            </a>
            <a
              href="#businesses"
              className="inline-flex items-center justify-center gap-2 bg-white text-popura-green font-bold px-6 py-3 rounded-full text-base no-underline hover:bg-popura-green-light transition-colors border border-popura-green/20"
            >
              事業所を見る ↓
            </a>
          </div>
        </div>
      </section>

      {/* About */}
      <section className="py-10 md:py-16">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-center text-2xl md:text-3xl font-bold text-popura-brown mb-2">
            ぽぷらって？
          </h2>
          <div className="w-12 h-1 bg-popura-green rounded-full mx-auto mb-6" />
          <div className="max-w-2xl mx-auto text-center text-popura-brown/80 leading-relaxed space-y-4">
            <p>
              有限会社ぽぷらは、2004年の設立以来、石川県内灘町を拠点に
              地域の皆さまの暮らしを支えてきました。
            </p>
            <p>
              訪問介護や通所介護、児童デイサービス、相談支援など
              幅広い福祉サービスを通じて、
              お子さまからご高齢の方まで安心して暮らせる地域づくりに取り組んでいます。
            </p>
          </div>
          <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-xl mx-auto text-center">
            <Stat label="設立" value="2004年" />
            <Stat label="従業員数" value="30名" />
            <Stat label="事業所" value="5拠点" />
            <Stat label="施設" value="3施設" />
          </div>
        </div>
      </section>

      {/* News */}
      <section className="py-10 md:py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-center text-2xl md:text-3xl font-bold text-popura-brown mb-2">
            お知らせ
          </h2>
          <div className="w-12 h-1 bg-popura-green rounded-full mx-auto mb-6" />
          <ul className="max-w-2xl mx-auto space-y-3">
            <NewsItem date="2026.03" text="R7年度 評価結果を掲載しました" />
            <NewsItem
              date="2023.01"
              text="入浴介助サービスを開始しました"
            />
          </ul>
        </div>
      </section>

      {/* Business cards */}
      <section id="businesses" className="py-10 md:py-16 scroll-mt-16">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-center text-2xl md:text-3xl font-bold text-popura-brown mb-2">
            事業所一覧
          </h2>
          <div className="w-12 h-1 bg-popura-green rounded-full mx-auto mb-8" />
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {businesses.map((biz) => (
              <Link
                key={biz.id}
                to={`/business/${biz.id}`}
                className="group block bg-white rounded-2xl p-5 no-underline shadow-sm hover:shadow-md border border-gray-100 transition-all hover:-translate-y-0.5 active:scale-[0.98]"
              >
                <div className="flex items-start gap-3">
                  <span className="text-3xl shrink-0 mt-0.5">{biz.icon}</span>
                  <div className="min-w-0">
                    <span className="inline-block text-xs font-bold text-popura-green bg-popura-green-light px-2 py-0.5 rounded-full mb-1.5">
                      {biz.category}
                    </span>
                    <h3 className="text-base font-bold text-popura-brown leading-snug mb-1 group-hover:text-popura-green transition-colors">
                      {biz.name}
                    </h3>
                    <p className="text-sm text-popura-brown/60 leading-relaxed">
                      {biz.summary}
                    </p>
                  </div>
                </div>
                <div className="mt-3 text-right">
                  <span className="text-xs text-popura-green font-bold group-hover:underline">
                    詳しく見る →
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Recruit CTA */}
      <section className="py-10 md:py-16 bg-popura-orange-light">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-popura-brown mb-2">
            採用情報
          </h2>
          <div className="w-12 h-1 bg-popura-orange rounded-full mx-auto mb-6" />
          <p className="text-popura-brown/70 mb-6 max-w-md mx-auto">
            「楽しく・健康に・安全に」をモットーに、
            未経験の方も安心して働ける環境です。
          </p>
          <div className="flex flex-wrap gap-2 justify-center mb-6">
            {[
              "児童デイサービス指導員",
              "訪問介護ヘルパー",
              "リハビリ介護補助",
              "居宅介護支援専門員",
              "相談支援専門員",
            ].map((job) => (
              <span
                key={job}
                className="text-xs bg-white text-popura-brown px-3 py-1.5 rounded-full"
              >
                {job}
              </span>
            ))}
          </div>
          <a
            href="tel:076-239-1022"
            className="inline-flex items-center justify-center gap-2 bg-popura-orange text-white font-bold px-6 py-3 rounded-full text-base no-underline hover:bg-popura-orange/90 transition-colors"
          >
            📞 採用のお問い合わせ
          </a>
        </div>
      </section>

      {/* Company info */}
      <section className="py-10 md:py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-center text-2xl md:text-3xl font-bold text-popura-brown mb-2">
            会社概要
          </h2>
          <div className="w-12 h-1 bg-popura-green rounded-full mx-auto mb-6" />
          <dl className="max-w-lg mx-auto space-y-3 text-sm">
            <InfoRow label="社名" value="有限会社ぽぷら" />
            <InfoRow label="代表" value="木村裕司" />
            <InfoRow
              label="所在地"
              value="〒920-0274 石川県河北郡内灘町字向粟崎3丁目43番地"
            />
            <InfoRow label="TEL" value="076-239-1022" />
            <InfoRow label="FAX" value="076-239-1029" />
            <InfoRow label="設立" value="2004年12月24日" />
            <InfoRow label="従業員数" value="30名" />
            <InfoRow label="営業時間" value="平日 8:00〜17:00（土日祝定休）" />
          </dl>
        </div>
      </section>
    </>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <p className="text-2xl md:text-3xl font-bold text-popura-green">
        {value}
      </p>
      <p className="text-xs text-popura-brown/60 mt-0.5">{label}</p>
    </div>
  );
}

function NewsItem({ date, text }: { date: string; text: string }) {
  return (
    <li className="flex items-start gap-3 py-3 border-b border-gray-100 last:border-0">
      <span className="text-xs font-bold text-popura-green bg-popura-green-light px-2 py-0.5 rounded-full shrink-0 mt-0.5">
        {date}
      </span>
      <span className="text-sm text-popura-brown/80">{text}</span>
    </li>
  );
}

function InfoRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex border-b border-gray-100 pb-3">
      <dt className="w-24 shrink-0 font-bold text-popura-brown">{label}</dt>
      <dd className="text-popura-brown/80">{value}</dd>
    </div>
  );
}
