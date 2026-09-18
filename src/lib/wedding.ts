// Central wedding configuration — change names, dates, venues here.
export const wedding = {
  bride: { en: "Iresha", si: "ඉරේෂා" },
  groom: { en: "Prabath", si: "ප්‍රභාත්" },
  brideParents: {
    en: "Daughter of Mr. Dhammika Chaminda & Mrs. Nirosha Kumari",
    si: "ධම්මික චමින්ද මහතා සහ නිරෝෂා කුමාරි මහත්මියගේ ආදරණීය දියණිය",
  },
  groomParents: {
    en: "Son of Late Mr. K. Kulasinghe & Mrs. Jayalath Chandra Rajapaksha",
    si: "කේ. කුලසිංහ මහතා (මියගිය) සහ ජයලත් චන්ද්‍රා රාජපක්ෂ මහත්මියගේ ආදරණීය පුත්",
  },
  // 25 November 2026, Poruwa Ceremony at 09:00 AM (Sri Lanka time)
  date: new Date("2026-11-25T09:00:00+05:30"),
  hashtag: "#PrabathAndIresha2026",

  invitationHeader: { en: "Together with our families", si: "ශ්‍රී සුභ මංගලම්" },
  invitationWording: {
    en: "Cordially invite you to share the joy as they unite in marriage.",
    si: "සමග සෙනෙහසින් දැඟිලි බැඳෙන සොඳුරු නිමේෂයේ සුන්දර මතකය සැමරුම් තබන්නට",
  },
  invitedBy: {
    en: "To their wedding celebration.",
    si: "පැවැත්වෙන ප්‍රිය සම්භාෂණයට සහභාගි වන මෙන් ගෞරවයෙන් ආරාධනා කර සිටිමු.",
  },

  ceremony: {
    title: { en: "The Poruwa Ceremony", si: "පෝරුවේ චාරිත්‍ර" },
    time: "09:00 AM",
    timeSi: "පෙ.ව. 09.00",
    date: "Wednesday, November 25, 2026",
    dateSi: "2026 නොවැම්බර් මස 25 වන බදාදා",
    venue: "Ganga Addara Reception Hall",
    venueSi: "ගඟඇද්දර උත්සව ශාලාව",
    address: "Peradeniya",
    addressSi: "පේරාදෙණිය",
    mapsQuery: "Ganga+Addara+Reception+Hall+Peradeniya",
    mapsUrl: "https://maps.app.goo.gl/M97zKZbck8zhR1Ze7?g_st=ic",
  },
  reception: {
    title: { en: "Wedding Reception", si: "ප්‍රිය සම්භාෂණය" },
    time: "08:00 AM to 04:00 PM",
    timeSi: "පෙ.ව. 8.00 සිට ප.ව. 4.00 දක්වා",
    date: "Wednesday, November 25, 2026",
    dateSi: "2026 නොවැම්බර් මස 25 වන බදාදා",
    venue: "Ganga Addara Reception Hall",
    venueSi: "ගඟඇද්දර උත්සව ශාලාව",
    address: "Peradeniya",
    addressSi: "පේරාදෙණිය",
    mapsQuery: "Ganga+Addara+Reception+Hall+Peradeniya",
    mapsUrl: "https://maps.app.goo.gl/M97zKZbck8zhR1Ze7?g_st=ic",
  },
  dressCode: {
    en: "Traditional",
    si: "සාම්ප්‍රදායික ඇඳුම්",
  },
  contact: {
    name: "Iresha & Prabath",
    phone: "071 2180363 / 071 5944003",
  },

  story: [
    { year: "2019", title: { en: "How We Met", si: "අපි මුණගැහුණා" }, text: { en: "A chance meeting that turned one conversation into endless ones.", si: "එක් කතා බසක් අනන්ත කතාබස් බවට පත් වූ අහඹු හමුවීමක්." } },
    { year: "2021", title: { en: "First Trip Together", si: "පළමු ගමන" }, text: { en: "Watching the sunrise over the hills — that's when we knew.", si: "කඳුකරයේ හිරු උදාව බැලූ දින — එතැනදී අපි දැන ගත්තා." } },
    { year: "2024", title: { en: "The Proposal", si: "යෝජනාව" }, text: { en: "Under a sky full of stars, he asked. She said yes.", si: "තරු පිරුණු අහස යට, ඔහු ඇසුවා. ඇය එකඟ වුණා." } },
    { year: "2026", title: { en: "Forever Begins", si: "සදාකාලය ආරම්භ වේ" }, text: { en: "Today we begin our forever — surrounded by everyone we love.", si: "අද අපගේ සදාකාලය ආරම්භ වේ — අප ආදරය කරන සියල්ලන් මැද." } },
  ],
} as const;

export type Lang = "en" | "si";