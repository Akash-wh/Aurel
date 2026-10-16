
import type { ReactNode } from "react";
import { Link } from "react-router-dom";

interface AccountLayoutProps {
  children: ReactNode;
}

export default function AccountLayout({
  children,
}: AccountLayoutProps) {
  return (
    <div className="min-h-screen bg-[#f7f5f1] text-[#292923]">
      <header className="border-b border-[#e5e1d9] px-5 py-6 text-center">
        <Link
          to="/"
          className="font-serif text-3xl tracking-[0.25em]"
        >
          AUREL
        </Link>
      </header>

      <main>{children}</main>

      <footer className="border-t border-[#e5e1d9] px-5 py-6 text-center">
        <p className="text-xs text-[#807c74]">
          © {new Date().getFullYear()} AUREL. All rights reserved.
        </p>
      </footer>
    </div>
  );
}
