import React, { useMemo, useState } from "react";
import {
  Layers,
  MapPin,
  Rocket,
  Building2,
  Cpu,
  Camera,
  Cloud,
  Database,
  GitBranch,
  Gauge,
  Filter,
  Calendar,
  ArrowUpRight,
  BarChart3,
  Search,
  X,
} from "lucide-react";

/**
 * PortfolioShowcase
 * - A polished, production-ready portfolio page for a Drone & IT company.
 * - TailwindCSS styling. Uses shadcn/ui primitives via classNames (drop-in friendly).
 * - Features: Hero, Search + Filters, Category Tabs, KPI badges, responsive grid cards,
 *   Case Study drawer, Testimonial strip, and CTA footer.
 * - Replace sampleData with your real projects (images, metrics, links).
 */

const sampleData = {
  drone: [
    {
      id: "rail-lidar",
      title: "Rail Corridor LiDAR & Topo Survey",
      client: "Indian Railways (Sr. DEN/HQ/LIN)",
      sector: "Transport Infra",
      location: "Jharkhand, India",
      period: "Jan–Mar 2025",
      thumbnail:
        "https://images.unsplash.com/photo-1520975922299-c7c1b727a5c0?q=80&w=1400&auto=format&fit=crop",
      summary:
        "100 m wide corridor mapping with LiDAR, GCPs & DGPS. Generated classified point clouds and 0.5 m contours for alignment design.",
      tags: ["LiDAR", "Topographic Survey", "GCP", "Point Cloud"],
      metrics: [
        { label: "Area", value: "126 km", icon: <Gauge size={16} /> },
        { label: "Accuracy", value: "±3 cm", icon: <BarChart3 size={16} /> },
        { label: "Deliverables", value: "DTM, DSM, Contours", icon: <Layers size={16} /> },
      ],
      outcomes: [
        "Cut design turnaround by 35% vs legacy methods.",
        "Improved alignment clash detection across utilities.",
      ],
      link: "#",
    },
    {
      id: "lulc-iran",
      title: "LULC Mapping – Multi‑temporal",
      client: "RGODS Pune (International)",
      sector: "Environment & Planning",
      location: "Kermanshah, Iran",
      period: "Jul–Oct 2024",
      thumbnail:
        "https://images.unsplash.com/photo-1464802686167-b939a6910659?q=80&w=1400&auto=format&fit=crop",
      summary:
        "556.674 sq km supervised classification using Sentinel‑2 & Landsat 8; accuracy assessed with stratified random sampling.",
      tags: ["LULC", "Sentinel‑2", "ENVI", "Accuracy Assessment"],
      metrics: [
        { label: "OA", value: "93.4%", icon: <BarChart3 size={16} /> },
        { label: "Kappa", value: "0.90", icon: <BarChart3 size={16} /> },
        { label: "Classes", value: "8", icon: <Layers size={16} /> },
      ],
      outcomes: [
        "Supported ecological zoning & agri policy decisions.",
        "Reusable pipeline for rapid regional updates.",
      ],
      link: "#",
    },
    {
      id: "iwt-wb",
      title: "Inland Water Transport – Spatial Dev Plan",
      client: "WBIWT Dept.",
      sector: "Logistics & Ports",
      location: "West Bengal, India",
      period: "Feb–Jun 2025",
      thumbnail:
        "https://images.unsplash.com/photo-1518684079-3c830dcef090?q=80&w=1400&auto=format&fit=crop",
      summary:
        "Geodatabase design, bathymetry integration, and navigational hazard mapping; proposed jetty locations with MCDA.",
      tags: ["MCDA", "Bathymetry", "Network Analysis", "ArcGIS Pro"],
      metrics: [
        { label: "Reach", value: "387 km", icon: <Gauge size={16} /> },
        { label: "Layers", value: "42", icon: <Layers size={16} /> },
        { label: "Time Saved", value: "28%", icon: <BarChart3 size={16} /> },
      ],
      outcomes: [
        "Prioritized 12 high‑impact sites for jetty upgrades.",
        "Reduced transit time sensitivity by 18% in simulations.",
      ],
      link: "#",
    },
  ],
  it: [
    {
      id: "urpayroll",
      title: "URPayroll – Attendance & HR Suite",
      client: "Techmapperz Product",
      sector: "HRTech / SaaS",
      location: "Kolkata & Remote",
      period: "2024–2025",
      thumbnail:
        "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?q=80&w=1400&auto=format&fit=crop",
      summary:
        "Flutter mobile app + Laravel backend. Face recognition attendance, WhatsApp Cloud API notifications, payroll & payslip engine.",
      tags: ["Flutter", "Laravel", "WhatsApp API", "Face ID"],
      metrics: [
        { label: "DAU", value: "3.1k", icon: <Gauge size={16} /> },
        { label: "Uptime", value: "99.95%", icon: <Cloud size={16} /> },
        { label: "Latency", value: "<220 ms", icon: <Gauge size={16} /> },
      ],
      outcomes: [
        "Cut payroll prep time by 70%.",
        "Compliance exports for GST/TDS in 1 click.",
      ],
      link: "#",
    },
    {
      id: "aaheli-erp",
      title: "Aaheli Publishers – E‑commerce + ERP",
      client: "Aaheli Publishers",
      sector: "E‑commerce",
      location: "Kolkata, India",
      period: "Aug–Dec 2024",
      thumbnail:
        "https://images.unsplash.com/photo-1557825835-70d97c4aa2d7?q=80&w=1400&auto=format&fit=crop",
      summary:
        "WooCommerce storefront with custom order‑tracking plugin and ERP connectors. Role‑based dashboards and fulfilment SLAs.",
      tags: ["WooCommerce", "ERP", "Order Tracking", "Analytics"],
      metrics: [
        { label: "GMV Lift", value: "+47%", icon: <BarChart3 size={16} /> },
        { label: "AOV", value: "+22%", icon: <BarChart3 size={16} /> },
        { label: "Returns", value: "−15%", icon: <BarChart3 size={16} /> },
      ],
      outcomes: [
        "Real‑time order status & invoice sync.",
        "Reduced stock‑outs with demand alerts.",
      ],
      link: "#",
    },
    {
      id: "logistics-portal",
      title: "Shri L.N. Logistics – Client Portal",
      client: "Shri L.N. Logistics",
      sector: "Logistics",
      location: "India",
      period: "Apr–Sep 2025",
      thumbnail:
        "https://images.unsplash.com/photo-1501706362039-c06b2d715385?q=80&w=1400&auto=format&fit=crop",
      summary:
        "Next.js portal with shipment tracking, vendor payouts, and PowerBI‑style analytics using Recharts. Secure role‑based access.",
      tags: ["Next.js", "Recharts", "RBAC", "PostgreSQL"],
      metrics: [
        { label: "On‑time", value: "+18%", icon: <BarChart3 size={16} /> },
        { label: "NPS", value: "+24", icon: <BarChart3 size={16} /> },
        { label: "Tickets", value: "−31%", icon: <BarChart3 size={16} /> },
      ],
      outcomes: [
        "Live shipment ETA & exception workflows.",
        "Unified vendor ledger with auto‑recon.",
      ],
      link: "#",
    },
  ],
};

const categories = [
  { key: "drone", label: "Drone & GIS", icon: <Camera className="w-4 h-4" /> },
  { key: "it", label: "IT & Software", icon: <Cpu className="w-4 h-4" /> },
];

function Badge({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center gap-1 rounded-full border px-2.5 py-1 text-xs font-medium">
      {children}
    </span>
  );
}

function Metric({ icon, label, value }: any) {
  return (
    <div className="flex items-center gap-2">
      <div className="flex size-6 items-center justify-center rounded-md border">{icon}</div>
      <div className="leading-tight">
        <div className="text-xs text-muted-foreground">{label}</div>
        <div className="text-sm font-semibold">{value}</div>
      </div>
    </div>
  );
}

function Card({ item, onOpen }: any) {
  return (
    <div className="group relative overflow-hidden rounded-2xl border bg-white shadow-sm">
      <div className="aspect-[16/9] w-full overflow-hidden bg-gray-100">
        <img
          src={item.thumbnail}
          alt={item.title}
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      <div className="p-4 lg:p-5">
        <div className="mb-1 flex items-center gap-2 text-xs text-muted-foreground">
          <MapPin className="h-3.5 w-3.5" /> {item.location}
          <span className="mx-2 h-1 w-1 rounded-full bg-muted-foreground/40" />
          <Calendar className="h-3.5 w-3.5" /> {item.period}
        </div>
        <h3 className="mb-2 line-clamp-2 text-base font-semibold lg:text-lg">
          {item.title}
        </h3>
        <p className="mb-3 line-clamp-2 text-sm text-muted-foreground">{item.summary}</p>
        <div className="mb-3 flex flex-wrap gap-2">
          {item.tags.map((t: string) => (
            <Badge key={t}>#{t}</Badge>
          ))}
        </div>
        <div className="mb-4 grid grid-cols-3 gap-3">
          {item.metrics.map((m: any, idx: number) => (
            <Metric key={idx} {...m} />
          ))}
        </div>
        <div className="flex items-center justify-between">
          <div className="text-xs text-muted-foreground">{item.client}</div>
          <button
            onClick={() => onOpen(item)}
            className="inline-flex items-center gap-1 rounded-xl border px-3 py-1.5 text-sm font-medium hover:bg-gray-50"
          >
            View case <ArrowUpRight className="h-4 w-4" />
          </button>
        </div>
      </div>
    </div>
  );
}

function Drawer({ open, onClose, item }: any) {
  if (!open || !item) return null;
  return (
    <div className="fixed inset-0 z-50 flex">
      <div
        className="fixed inset-0 bg-black/40 backdrop-blur-sm"
        onClick={onClose}
      />
      <div className="ml-auto h-full w-full max-w-3xl overflow-y-auto rounded-l-2xl bg-white shadow-xl">
        <div className="sticky top-0 z-10 flex items-center justify-between border-b bg-white/80 p-4 backdrop-blur">
          <div>
            <div className="text-xs text-muted-foreground">{item.client}</div>
            <h3 className="text-lg font-semibold">{item.title}</h3>
          </div>
          <button
            onClick={onClose}
            className="rounded-lg border p-2 hover:bg-gray-50"
            aria-label="Close"
          >
            <X className="h-5 w-5" />
          </button>
        </div>
        <div className="p-5 lg:p-8">
          <div className="mb-5 grid gap-4 md:grid-cols-2">
            <div className="aspect-video overflow-hidden rounded-xl bg-gray-100">
              <img src={item.thumbnail} alt={item.title} className="h-full w-full object-cover" />
            </div>
            <div className="space-y-3">
              <div className="flex flex-wrap items-center gap-2 text-sm text-muted-foreground">
                <Badge><Building2 className="mr-1 h-3.5 w-3.5" /> {item.sector}</Badge>
                <Badge><MapPin className="mr-1 h-3.5 w-3.5" /> {item.location}</Badge>
                <Badge><Calendar className="mr-1 h-3.5 w-3.5" /> {item.period}</Badge>
              </div>
              <p className="text-sm leading-relaxed text-muted-foreground">{item.summary}</p>
              <div className="grid grid-cols-2 gap-4">
                {item.metrics.map((m: any, idx: number) => (
                  <div key={idx} className="rounded-xl border p-3">
                    <Metric {...m} />
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="mb-6">
            <h4 className="mb-2 text-sm font-semibold tracking-wide text-muted-foreground">Key Outcomes</h4>
            <ul className="list-disc space-y-1 pl-5 text-sm">
              {item.outcomes.map((o: string, i: number) => (
                <li key={i}>{o}</li>
              ))}
            </ul>
          </div>

          <div className="flex items-center justify-between rounded-2xl border p-4">
            <div>
              <div className="text-xs text-muted-foreground">Need a similar solution?</div>
              <div className="text-sm font-medium">Book a free scoping call</div>
            </div>
            <a
              href={item.link}
              className="inline-flex items-center gap-2 rounded-xl bg-black px-4 py-2 text-sm font-medium text-white hover:opacity-90"
            >
              Get in touch <Rocket className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function PortfolioShowcase() {
  const [active, setActive] = useState("drone");
  const [query, setQuery] = useState("");
  const [open, setOpen] = useState(false);
  const [current, setCurrent] = useState<any>(null);

  const data = useMemo(() => sampleData[active], [active]);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return data;
    return data.filter((d: any) =>
      [d.title, d.client, d.summary, d.tags.join(" "), d.location, d.sector]
        .join(" ")
        .toLowerCase()
        .includes(q)
    );
  }, [data, query]);

  const openCase = (item: any) => {
    setCurrent(item);
    setOpen(true);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* HERO */}
      <header className="relative mx-auto max-w-7xl px-4 pb-10 pt-12 sm:pt-16 lg:px-6">
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border bg-white px-3 py-1 text-xs text-muted-foreground">
          <Filter className="h-3.5 w-3.5" /> Portfolio Samples for Drone & IT Companies
        </div>
        <div className="grid items-end gap-6 md:grid-cols-2">
          <div>
            <h1 className="text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl">
              Project Portfolio
              <span className="block text-muted-foreground">Showcase results, not features.</span>
            </h1>
            <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted-foreground">
              Reusable, metrics‑driven case studies for Drone/GIS and IT/Software projects. Plug your images, numbers, and links—ship in minutes.
            </p>
            <div className="mt-6 flex flex-wrap gap-2 text-sm">
              <Badge><Camera className="mr-1 h-3.5 w-3.5" /> Drone & GIS</Badge>
              <Badge><Cpu className="mr-1 h-3.5 w-3.5" /> IT & Software</Badge>
              <Badge><Database className="mr-1 h-3.5 w-3.5" /> Analytics‑first</Badge>
            </div>
          </div>
          <div className="flex items-end justify-start md:justify-end">
            <div className="flex items-center gap-2 rounded-2xl border bg-white p-2 shadow-sm">
              {categories.map((c) => (
                <button
                  key={c.key}
                  onClick={() => setActive(c.key)}
                  className={`inline-flex items-center gap-2 rounded-xl px-3 py-2 text-sm font-medium transition ${
                    active === c.key
                      ? "bg-black text-white"
                      : "hover:bg-gray-50"
                  }`}
                >
                  {c.icon} {c.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Search */}
        <div className="mt-6 flex items-center gap-3">
          <div className="relative w-full max-w-xl">
            <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder={Search ${active === "drone" ? "Drone/GIS" : "IT/Software"} case studies…}
              className="w-full rounded-xl border bg-white py-2.5 pl-9 pr-3 text-sm outline-none focus:ring-2 focus:ring-black/10"
            />
          </div>
        </div>
      </header>

      {/* KPI STRIP */}
      <section className="mx-auto max-w-7xl px-4 lg:px-6">
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          <div className="rounded-2xl border bg-white p-4">
            <div className="text-xs text-muted-foreground">Projects Delivered</div>
            <div className="text-2xl font-bold">120+</div>
          </div>
          <div className="rounded-2xl border bg-white p-4">
            <div className="text-xs text-muted-foreground">Avg. CSAT</div>
            <div className="text-2xl font-bold">4.8/5</div>
          </div>
          <div className="rounded-2xl border bg-white p-4">
            <div className="text-xs text-muted-foreground">Sectors Served</div>
            <div className="text-2xl font-bold">15+</div>
          </div>
          <div className="rounded-2xl border bg-white p-4">
            <div className="text-xs text-muted-foreground">Avg. TAT Reduction</div>
            <div className="text-2xl font-bold">28%</div>
          </div>
        </div>
      </section>

      {/* GRID */}
      <main className="mx-auto max-w-7xl px-4 pb-16 pt-8 lg:px-6">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((item: any) => (
            <Card key={item.id} item={item} onOpen={openCase} />
          ))}
          {filtered.length === 0 && (
            <div className="col-span-full rounded-2xl border bg-white p-10 text-center text-sm text-muted-foreground">
              No matches. Try another keyword.
            </div>
          )}
        </div>

        {/* Testimonial strip */}
        <div className="mt-12 grid gap-4 md:grid-cols-3">
          {[1, 2, 3].map((i) => (
            <div key={i} className="rounded-2xl border bg-white p-5">
              <div className="mb-2 text-sm font-semibold">Client Testimonial</div>
              <p className="text-sm text-muted-foreground">
                “The team delivered exactly what we needed, ahead of schedule. The data quality and dashboards helped us take faster decisions.”
              </p>
              <div className="mt-3 text-xs text-muted-foreground">— Project Sponsor, Enterprise Client</div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 rounded-2xl border bg-gradient-to-br from-white to-gray-50 p-6 sm:flex-row">
          <div>
            <div className="text-xs uppercase tracking-wide text-muted-foreground">Ready to plan your project?</div>
            <div className="text-sm font-medium">Share a brief and get a tailored proposal within 48 hours.</div>
          </div>
          <a
            href="#"
            className="inline-flex items-center gap-2 rounded-xl bg-black px-4 py-2 text-sm font-medium text-white hover:opacity-90"
          >
            Start a project <ArrowUpRight className="h-4 w-4" />
          </a>
        </div>
      </main>

      <Drawer open={open} onClose={() => setOpen(false)} item={current} />
    </div>
  );
}