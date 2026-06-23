import { Outlet, Link, useLocation } from "react-router-dom";

export default function Layout() {
  const { pathname } = useLocation();
  const isHome = pathname === "/";

  return (
    <div className="min-h-dvh flex flex-col">
      <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-popura-green/10">
        <div className="max-w-5xl mx-auto px-4 h-14 flex items-center justify-between">
          <Link to="/" className="flex items-center no-underline">
            <img src="/logo.png" alt="有限会社ぽぷら" className="h-10" />
          </Link>
        </div>
      </header>

      <main className="flex-1">
        <Outlet />
      </main>

      <footer className="bg-popura-green text-white">
        <div className="max-w-5xl mx-auto px-4 py-8">
          <div className="flex flex-col items-center gap-4 text-center text-sm">
            <div>
              <img src="/logo.png" alt="有限会社ぽぷら" className="h-12 mx-auto mb-2 brightness-0 invert" />
              <p className="font-bold text-base mb-1">有限会社ぽぷら</p>
              <p className="opacity-80">
                〒920-0274 石川県河北郡内灘町字向粟崎3丁目43番地
              </p>
              <p className="opacity-80 mt-1">
                TEL{" "}
                <a href="tel:076-239-1022" className="text-white underline">
                  076-239-1022
                </a>{" "}
                / FAX 076-239-1029
              </p>
            </div>
            <div className="flex gap-4 text-xs opacity-60">
              <Link to="/" className="text-white no-underline hover:opacity-100">
                ホーム
              </Link>
              <span>|</span>
              <span>サイトポリシー</span>
            </div>
            <p className="text-xs opacity-40">
              © 2004-{new Date().getFullYear()} 有限会社ぽぷら
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

function NavLink({
  to,
  active,
  children,
}: {
  to: string;
  active: boolean;
  children: React.ReactNode;
}) {
  return (
    <Link
      to={to}
      className={`text-sm px-3 py-1.5 rounded-full no-underline transition-colors ${
        active
          ? "bg-popura-green-light text-popura-green font-bold"
          : "text-popura-brown hover:bg-gray-100"
      }`}
    >
      {children}
    </Link>
  );
}
