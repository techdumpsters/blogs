import { useState, useMemo } from 'react';

// Data Dummy Artikel
const DUMMY_POSTS = [
  {
    id: '1',
    title: 'Optimasi YOLOv8 di Edge AI untuk Klasifikasi Sampah',
    category: 'software',
    pubDate: '2026-04-12',
    description: 'Eksperimen deployment model YOLO di komputer papan tunggal dengan resource terbatas.'
  },
  {
    id: '2',
    title: 'Desain ADC 12-Bit dan Filter Pasif ECG',
    category: 'embedded',
    pubDate: '2026-05-02',
    description: 'Merancang perkabelan bio-instrumentasi dan reduksi noise 50Hz dari jaringan listrik.'
  },
  {
    id: '3',
    title: 'Kustomisasi PipeWire dan Kernel Linux untuk Audio Low Latency',
    category: 'software',
    pubDate: '2025-11-20',
    description: 'Catatan tuning audio server Linux untuk pemrosesan sinyal waktu nyata.'
  },
  {
    id: '4',
    title: 'Rangkaian Driver Motor Servo pada Smart Chair',
    category: 'embedded',
    pubDate: '2025-08-15',
    description: 'Sistem kendali posisi dan pembacaan sensor beban berbasis ESP32.'
  }
];

export default function BlogFilter() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedYear, setSelectedYear] = useState('all');

  // 1. Ekstrak daftar kategori unik secara otomatis
  const categories = useMemo(() => {
    const cats = new Set(DUMMY_POSTS.map((p) => p.category));
    return ['all', ...Array.from(cats)];
  }, []);

  // 2. Ekstrak daftar tahun unik secara terbatas dari data (Dropdown tidak membengkak)
  const availableYears = useMemo(() => {
    const years = new Set(
      DUMMY_POSTS.map((p) => new Date(p.pubDate).getFullYear().toString())
    );
    return ['all', ...Array.from(years).sort((a, b) => b - a)]; // Urutkan dari tahun terbaru
  }, []);

  // 3. Logika penyaringan gabungan (Search + Kategori + Tahun)
  const filteredPosts = useMemo(() => {
    return DUMMY_POSTS.filter((post) => {
      const postYear = new Date(post.pubDate).getFullYear().toString();
      
      const matchesSearch =
        post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.description.toLowerCase().includes(searchQuery.toLowerCase());

      const matchesCategory =
        selectedCategory === 'all' || post.category === selectedCategory;

      const matchesYear =
        selectedYear === 'all' || postYear === selectedYear;

      return matchesSearch && matchesCategory && matchesYear;
    });
  }, [searchQuery, selectedCategory, selectedYear]);

  return (
    <div className="space-y-6 font-mono">
      {/* BARIS FILTER & SEARCH */}
      <div className="flex flex-col md:flex-row gap-3 items-stretch md:items-center justify-between bg-slate-900/80 p-4 border border-purple/40 rounded-lg">
        
        {/* Input Search */}
        <div className="flex-1">
          <input
            type="text"
            placeholder="[SEARCH_LOGS...] "
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-slate-950 text-turquoise placeholder-slate-500 text-xs sm:text-sm px-3 py-2 border border-purple/40 rounded focus:outline-none focus:border-turquoise transition"
          />
        </div>

        {/* Filter Kategori & Dropdown Tahun */}
        <div className="flex flex-wrap items-center gap-2">
          
          {/* Tombol Kategori */}
          <div className="flex items-center gap-1 bg-slate-950 p-1 border border-purple/40 rounded">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-2 py-1 text-[11px] uppercase font-bold rounded transition ${
                  selectedCategory === cat
                    ? 'bg-turquoise text-slate-950'
                    : 'text-slate-400 hover:text-turquoise'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Dropdown Tahun (Terbatas pada tahun yang ada data saja) */}
          <select
            value={selectedYear}
            onChange={(e) => setSelectedYear(e.target.value)}
            className="bg-slate-950 text-turquoise text-xs font-bold px-3 py-2 border border-purple/40 rounded focus:outline-none focus:border-turquoise cursor-pointer"
          >
            <option value="all">SEMUA TAHUN</option>
            {availableYears
              .filter((y) => y !== 'all')
              .map((year) => (
                <option key={year} value={year}>
                  TAHUN {year}
                </option>
              ))}
          </select>

        </div>
      </div>

      {/* LIST DAFTAR ARTIKEL HASIL FILTER */}
      <div className="space-y-3">
        {filteredPosts.length > 0 ? (
          filteredPosts.map((post) => (
            <article
              key={post.id}
              className="p-4 bg-slate-950/60 border border-purple/30 hover:border-turquoise/60 rounded transition group"
            >
              <div className="flex items-center justify-between gap-2 text-xs text-slate-500 mb-1">
                <span className="uppercase text-pink font-semibold">
                  [{post.category}]
                </span>
                <span>{post.pubDate}</span>
              </div>

              <h3 className="text-base font-bold text-turquoise group-hover:text-pink transition">
                {post.title}
              </h3>

              <p className="text-xs text-slate-400 mt-2 line-clamp-2">
                {post.description}
              </p>
            </article>
          ))
        ) : (
          <div className="p-8 text-center border border-dashed border-purple/30 rounded text-slate-500 text-xs">
            [0_LOGS_FOUND] Tidak ada catatan yang sesuai dengan filter.
          </div>
        )}
      </div>
    </div>
  );
}