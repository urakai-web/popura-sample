import { useParams, Link } from "react-router-dom";
import { businesses } from "../data/businesses";

export default function BusinessDetailPage() {
  const { id } = useParams<{ id: string }>();
  const biz = businesses.find((b) => b.id === id);

  if (!biz) {
    return (
      <div className="max-w-5xl mx-auto px-4 py-20 text-center">
        <p className="text-lg text-popura-brown/60 mb-4">
          事業所が見つかりませんでした
        </p>
        <Link
          to="/"
          className="text-popura-green font-bold no-underline hover:underline"
        >
          ← トップに戻る
        </Link>
      </div>
    );
  }

  return (
    <>
      <div className="bg-popura-green-light">
        <div className="max-w-5xl mx-auto px-4 py-4">
          <Link
            to="/"
            className="text-sm text-popura-green no-underline hover:underline"
          >
            ← トップに戻る
          </Link>
        </div>
      </div>

      <section className="bg-popura-green-light pb-10 pt-2">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <span className="text-5xl mb-3 block">{biz.icon}</span>
          <span className="inline-block text-xs font-bold text-popura-green bg-white px-3 py-1 rounded-full mb-3">
            {biz.category}
          </span>
          <h1 className="text-2xl md:text-3xl font-bold text-popura-brown leading-snug">
            {biz.name}
          </h1>
        </div>
      </section>

      <section className="py-8 md:py-12">
        <div className="max-w-2xl mx-auto px-4 space-y-8">
          {/* Description */}
          <div>
            <h2 className="text-lg font-bold text-popura-brown mb-3 flex items-center gap-2">
              <span className="w-1 h-5 bg-popura-green rounded-full inline-block" />
              サービス内容
            </h2>
            <p className="text-sm text-popura-brown/80 leading-relaxed">
              {biz.description}
            </p>
          </div>

          {/* Services */}
          <div>
            <h2 className="text-lg font-bold text-popura-brown mb-3 flex items-center gap-2">
              <span className="w-1 h-5 bg-popura-green rounded-full inline-block" />
              提供サービス
            </h2>
            <div className="flex flex-wrap gap-2">
              {biz.services.map((s) => (
                <span
                  key={s}
                  className="text-xs bg-popura-green-light text-popura-green font-bold px-3 py-1.5 rounded-full"
                >
                  {s}
                </span>
              ))}
            </div>
          </div>

          {/* Info */}
          {(biz.address || biz.tel) && (
            <div>
              <h2 className="text-lg font-bold text-popura-brown mb-3 flex items-center gap-2">
                <span className="w-1 h-5 bg-popura-green rounded-full inline-block" />
                事業所情報
              </h2>
              <div className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100">
                <dl className="space-y-3 text-sm">
                  {biz.address && (
                    <Row
                      label="所在地"
                      value={`〒${biz.zip} ${biz.address}`}
                    />
                  )}
                  {biz.tel && <Row label="TEL" value={biz.tel} />}
                  {biz.fax && <Row label="FAX" value={biz.fax} />}
                  {biz.hours && <Row label="営業時間" value={biz.hours} />}
                  {biz.closedDays && (
                    <Row label="定休日" value={biz.closedDays} />
                  )}
                </dl>
              </div>
            </div>
          )}

          {/* CTA */}
          <div className="text-center pt-4">
            <a
              href={`tel:${biz.tel ?? "076-239-1022"}`}
              className="inline-flex items-center justify-center gap-2 bg-popura-orange text-white font-bold px-6 py-3 rounded-full text-base no-underline hover:bg-popura-orange/90 transition-colors shadow-lg shadow-popura-orange/20"
            >
              📞 お問い合わせ
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

function Row({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex border-b border-gray-100 pb-3 last:border-0 last:pb-0">
      <dt className="w-20 shrink-0 font-bold text-popura-brown">{label}</dt>
      <dd className="text-popura-brown/80">{value}</dd>
    </div>
  );
}
