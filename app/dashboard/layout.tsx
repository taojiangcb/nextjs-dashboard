import SideNav from "../ui/dashboard/sidenav";

// This is a workaround for a bug in Next.js 13.4.4 that prevents the page from being prerendered.  
// export const experimental_ppr = true;

export default function Layout({ children }: { children: React.ReactNode }) {
  return <div className="flex h-screen flex-col md:flex-row md:overflow-hidden">
    <div className="w-full flex-none md:w-64">
      <SideNav />
    </div>
    <div className="flex-grow p-6 md:overflow-y-auto md:p-12">{children}</div>
  </div>
}