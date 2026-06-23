import { businesses } from "../data/businesses";
import { jobs } from "../data/jobs";

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/hero.jpg')" }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/60" />
        <div className="relative max-w-5xl mx-auto px-4 py-16 md:py-28 text-center">
          <p className="text-white/90 font-bold text-sm tracking-widest mb-3">
            石川県河北郡内灘町
          </p>
          <h1 className="text-3xl md:text-5xl font-bold text-white leading-tight mb-4 drop-shadow-lg">
            住み慣れた地域で
            <br />
            安心して暮らせる
            <br />
            お手伝いをします
          </h1>
          <p className="text-white/80 text-base md:text-lg max-w-md mx-auto mb-8">
            訪問介護・通所介護・児童デイサービス・相談支援。
            <br className="hidden md:block" />
            地域に根ざした福祉サービスを提供しています。
          </p>
          <a
            href="#businesses"
            className="inline-flex items-center justify-center gap-2 bg-white/90 text-popura-green font-bold px-6 py-3 rounded-full text-base no-underline hover:bg-white transition-colors backdrop-blur-sm"
          >
            事業所を見る ↓
          </a>
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
        </div>
      </section>

      {/* Business cards - horizontal swipe */}
      <section id="businesses" className="py-10 md:py-16 scroll-mt-16">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-center text-2xl md:text-3xl font-bold text-popura-brown mb-2">
            事業一覧
          </h2>
          <div className="w-12 h-1 bg-popura-green rounded-full mx-auto mb-8" />
        </div>
        <div className="flex gap-4 overflow-x-auto scroll-smooth px-4 pb-4 -mx-0 scrollbar-hide md:max-w-5xl md:mx-auto">
          {businesses.map((biz) => (
            <div
              key={biz.id}
              className="group shrink-0 w-[280px] bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden"
            >
              <div className="relative h-40 overflow-hidden">
                <img
                  src={biz.image}
                  alt={biz.name}
                  className="w-full h-full object-cover"
                />
                <span className="absolute top-3 left-3 text-xs font-bold text-white bg-popura-green/90 px-2.5 py-1 rounded-full backdrop-blur-sm">
                  {biz.category}
                </span>
              </div>
              <div className="p-4">
                <h3 className="text-base font-bold text-popura-brown leading-snug mb-1">
                  {biz.name}
                </h3>
                <p className="text-sm text-popura-brown/60 leading-relaxed">
                  {biz.summary}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Recruit cards - horizontal swipe */}
      <section className="py-10 md:py-16 bg-popura-orange-light">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-center text-2xl md:text-3xl font-bold text-popura-brown mb-2">
            採用情報
          </h2>
          <div className="w-12 h-1 bg-popura-orange rounded-full mx-auto mb-2" />
          <p className="text-center text-popura-brown/70 mb-8 max-w-md mx-auto text-sm">
            「楽しく・健康に・安全に」をモットーに、
            未経験の方も安心して働ける環境です。
          </p>
        </div>
        <div className="flex gap-4 overflow-x-auto scroll-smooth px-4 pb-4 scrollbar-hide md:max-w-5xl md:mx-auto">
          {jobs.map((job) => (
            <div
              key={job.id}
              className="shrink-0 w-[300px] bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden"
            >
              <div className="relative h-44 overflow-hidden">
                <img
                  src={job.image}
                  alt={job.title}
                  className="w-full h-full object-cover"
                />
                <span className="absolute top-3 left-3 text-xs font-bold text-white bg-popura-orange/90 px-2.5 py-1 rounded-full backdrop-blur-sm">
                  {job.type}
                </span>
              </div>
              <div className="p-4 space-y-3">
                <h3 className="text-base font-bold text-popura-brown leading-snug">
                  {job.title}
                </h3>
                <p className="text-sm text-popura-brown/60 leading-relaxed">
                  {job.description}
                </p>
                <div className="flex items-baseline gap-1">
                  <span className="text-xs text-popura-brown/50">給与</span>
                  <span className="text-sm font-bold text-popura-orange">
                    {job.salary}
                  </span>
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {job.qualifications.map((q) => (
                    <span
                      key={q}
                      className="text-[11px] bg-popura-orange-light text-popura-brown/70 px-2 py-0.5 rounded-full"
                    >
                      {q}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
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



function InfoRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex border-b border-gray-100 pb-3">
      <dt className="w-24 shrink-0 font-bold text-popura-brown">{label}</dt>
      <dd className="text-popura-brown/80">{value}</dd>
    </div>
  );
}
