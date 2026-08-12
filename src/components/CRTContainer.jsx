export default function CRTContainer({ children }) {
  return (
    <div className="crt-overlay relative min-h-screen w-full border-4 border-slate-900 bg-purple p-6 font-mono shadow-[inset_0_0_100px_rgba(0,0,0,0.9)]">
      <div className="crt-noise"></div>
      <div className="crt-rolling-bar"></div>
      
      <div className="relative z-10 flex min-h-[calc(100dvh-3rem)] w-full flex-col">
        {children}
      </div>
    </div>
  );
}