// ╔══════════════════════════════════════════════════════════════════════╗
// ║  AURUM MOTORS — cars.js  (Single source for ALL pages)              ║
// ║                                                                      ║
// ║  USED BY:  prototype.html · inventory.html · car-detail.html         ║
// ║                                                                      ║
// ║  IMAGE GUIDE per car:                                                ║
// ║  ─────────────────────────────────────────────────────────────────   ║
// ║  image          → Card / Hero (section 01) — main portrait shot      ║
// ║  detail.identityImg  → Section 02 Identity — side/beauty angle       ║
// ║  detail.gallery[0-7] → Section 04 Gallery  — up to 8 images          ║
// ║  detail.story01.images[0-2] → Section 05 Triptych (3 vertical slices)║
// ║  detail.story02.images[0-2] → Section 05 Collage  (1 large + 2 small)║
// ╚══════════════════════════════════════════════════════════════════════╝

const CARS = [

  // ════════════════════════════════════════════════════════════════════
  //  CAR 1 — Toyota GR86
  // ════════════════════════════════════════════════════════════════════
  {
    // ── CARD DATA (used on homepage + inventory) ──────────────────────
    id:       1,
    brand:    "Toyota",
    model:    "GR86",
    fullName: "GR86",
    subModel: "Gazoo Racing · 2.4L Boxer NA",
    badge:    "Driver's Car",
    label:    "Sports Coupe",
    price:    296000,
    year:     2023,
    region:   "JP",
    reverse:  true,

    // ── [IMAGE 01] HERO / CARD ────────────────────────────────────────
    // Used on: homepage card, inventory card, hero section (section 01)
    // Style:   rotated top-down portrait, transparent/white background
    image: "images/86.png",

    specs: {
      hp:       "237",
      sprint:   "6.3s",
      topSpeed: "226",
      gearbox:  "6-MT / AT"
    },
    desc: "Pure rear-wheel-drive joy. The GR86 packs a 2.4L naturally aspirated boxer engine with perfectly balanced chassis dynamics — lightweight, nimble, and endlessly rewarding to drive.",

    // ── DETAIL PAGE DATA (used on car-detail.html only) ───────────────
    detail: {

      tagline: "One of the last true driver's cars.",
      quote:   "A car built not for the masses, but for the few who truly <em>feel</em>.",

      // ── [IMAGE 02] IDENTITY ─────────────────────────────────────────
      // Section 02 — full left-panel image, side/rear beauty shot
      identityImg: "images/86sideback.png",

      // ── STORY 01 — Driving Experience ──────────────────────────────
      story01: {
        eyebrow: "Driving Experience",
        heading: "Built for the Road,<br>Tuned for the <em>Soul</em>",
        body:    "The GR86 communicates through every surface — the steering, the pedals, the seat. Its 53:47 weight distribution and ultra-low centre of gravity deliver a balance that no modern car assistance system can replicate. It simply talks to you.",

        // ── [IMAGE 03-05] TRIPTYCH (3 vertical slices, section 05 left side)
        // Best: close-up detail shots — suspension, brakes, exhaust, engine
        images: [
          "images/86absorber.png",   // [03] slice 1 — e.g. suspension/absorber
          "images/86disc.png",       // [04] slice 2 — e.g. brake disc
          "images/86exhaust.png"     // [05] slice 3 — e.g. exhaust tip
        ]
      },

      // ── STORY 02 — Modification Potential ──────────────────────────
      story02: {
        eyebrow: "Modification Potential",
        heading: "Your Vision,<br><em>Amplified</em>",
        body:    "A blank canvas for enthusiasts. Every system engineered to accept — even welcome — further development.",

        // ── [IMAGE 06-08] COLLAGE (1 large top + 2 small bottom, section 05 right side)
        // Best: modified car shots, widebody, stance, aero, interior build
        images: [
          "images/modi1.png",    // [06] large top image — full car mod shot
          "images/modi2.png",    // [07] bottom left — detail/wheel/aero
          "images/modi3.webp"     // [08] bottom right — interior/cockpit
        ],
        mods: [
          "Widebody & aero kits",
          "Turbo / Supercharger builds",
          "Exhaust & intake upgrades",
          "Coilover & stance setups",
          "Forged wheel packages",
          "Roll cage & track prep"
        ]
      },

      // ── [IMAGE 09-16] GALLERY (section 04) — up to 8 images ────────
      // Thumbnails + full viewer. Mix of exterior, interior, detail angles.
      gallery: [
        "images/86front.jpeg",     // [09] front 3/4
        "images/86side.jpg",       // [10] side profile
        "images/86back.jpg",       // [11] rear 3/4
        "images/86back2.jpeg",     // [12] rear straight
        "images/86int1.webp",      // [13] interior dashboard
        "images/86int2.jpeg",      // [14] interior cockpit
        "images/86seat.png",       // [15] seats
        "images/86rim.jpeg"        // [16] wheel / rim close-up
      ],

      ownership: [
        { icon: "⛽", title: "Fuel Economy",    val: "~9L/100km city · ~7L/100km highway" },
        { icon: "🔧", title: "Maintenance",     val: "Toyota dealer network · Affordable intervals · Parts widely available" },
        { icon: "🛣️", title: "Daily Usability", val: "Comfortable 2-seat daily · Minimal rear seats · 237L boot" },
        { icon: "📋", title: "Insurance",       val: "Sports car class · Agreed value policy recommended" },
        { icon: "🏆", title: "Resale Value",    val: "Strong GR lineage · High enthusiast demand" },
        { icon: "⚙️", title: "Warranty",        val: "3-year / 100,000 km standard · Extended available" }
      ],

      specTable: [
        ["Engine",             "2.4L Boxer FA24 · Naturally Aspirated"],
        ["Power",              "237 PS @ 7,000 rpm"],
        ["Torque",             "250 Nm @ 3,700 rpm"],
        ["0–100 km/h",         "6.3 seconds"],
        ["Top Speed",          "226 km/h"],
        ["Transmission",       "6-speed Manual / 6-speed Automatic"],
        ["Drivetrain",         "Rear-Wheel Drive"],
        ["Weight Distribution","53:47 (Front:Rear)"],
        ["Kerb Weight",        "1,278 kg"],
        ["Dimensions",         "4,265 × 1,775 × 1,310 mm"],
        ["Wheelbase",          "2,575 mm"],
        ["Fuel Type",          "RON 95 / RON 97 recommended"]
      ]
    }
  },

  // ════════════════════════════════════════════════════════════════════
  //  CAR 2 — Porsche 911 GT3 RS
  // ════════════════════════════════════════════════════════════════════
  {
    id:       2,
    brand:    "Porsche",
    model:    "991.2 GT3 RS",
    fullName: "991.2 GT3 RS",
    subModel: "992 Gen · 4.0L Flat-Six NA",
    badge:    "Track Weapon",
    label:    "Track Edition",
    price:    2630000,
    year:     2019,
    region:   "DE",
    reverse:  false,

    image: "images/991.2.png",          // [01] Hero / Card

    specs: {
      hp:       "525",
      sprint:   "3.2s",
      topSpeed: "296",
      gearbox:  "7-PDK"
    },
    desc: "525 PS, active DRS aerodynamics, and 860 kg of downforce at 285 km/h. The 992 GT3 RS is a road-legal race car — the most aerodynamically advanced 911 ever built.",

    detail: {
      tagline: "The most extreme 911 ever homologated for the road.",
      quote:   "Where aerodynamics become <em>art</em>, and the road becomes a racetrack.",

      identityImg: "images/991sideback.png",   // [02] Identity — replace with your side shot

      story01: {
        eyebrow: "Driving Experience",
        heading: "Born on the Track,<br>Delivered to the <em>Street</em>",
        body:    "At speed, the GT3 RS generates 860 kg of downforce at 285 km/h. The DRS system actively manages aerodynamic drag. Every input is surgical, every response immediate — this is not a car you drive, it is a car you become one with.",
        images: [
          "images/991drive.jpg",       // [03] triptych 1 — e.g. rear wing / aero
          "images/991disc.jpg",      // [04] triptych 2 — e.g. PCCB brakes
          "images/991exhaust.png"     // [05] triptych 3 — e.g. exhaust / diffuser
        ]
      },

      story02: {
        eyebrow: "Track Potential",
        heading: "Race Spec,<br><em>Road Legal</em>",
        body:    "Already at the limit of road car homologation, the GT3 RS rewards track preparation with lap times that embarrass purpose-built race cars.",
        images: [
          "images/GT3RS_track.png",      // [06] collage large — on-track action
          "images/GT3RS_cockpit.png",    // [07] collage bottom-left — cockpit/cage
          "images/GT3RS_wheel.png"       // [08] collage bottom-right — wheel detail
        ],
        mods: [
          "Full roll cage conversion",
          "Cup 2R tyre fitment",
          "Weissach package upgrades",
          "Race exhaust & OPF delete",
          "Data logging & telemetry",
          "Livery & exterior wraps"
        ]
      },

      gallery: [
        "images/991front.jpg",     // [09] front 3/4
        "images/991side.jpg",     // [10] side profile
        "images/991back.jpg",     // [11] rear 3/4
        "images/991back2.jpg",     // [12] rear straight
        "images/991int1.jpg",     // [13] interior
        "images/991int2.jpg",     // [14] steering wheel
        "images/991seat.jpg",     // [15] engine bay
        "images/991rim.png"      // [16] on track / action
      ],

      ownership: [
        { icon: "⛽", title: "Fuel Economy",    val: "~20L/100km · 98 RON required" },
        { icon: "🔧", title: "Maintenance",     val: "Porsche Centre Malaysia · Annual service recommended" },
        { icon: "🛣️", title: "Daily Usability", val: "Firm ride · Not ideal for daily · 2 seats only" },
        { icon: "📋", title: "Insurance",       val: "Agreed value policy strongly recommended" },
        { icon: "🏆", title: "Resale Value",    val: "Exceptional · GT cars appreciate · Collector status" },
        { icon: "⚙️", title: "Warranty",        val: "2-year Porsche warranty · Approved Used programme" }
      ],

      specTable: [
        ["Engine",       "4.0L Flat-Six · Naturally Aspirated"],
        ["Power",        "525 PS @ 9,000 rpm"],
        ["Torque",       "465 Nm @ 6,300 rpm"],
        ["0–100 km/h",   "3.2 seconds"],
        ["Top Speed",    "296 km/h"],
        ["Transmission", "7-speed PDK"],
        ["Drivetrain",   "Rear-Wheel Drive"],
        ["Downforce",    "860 kg @ 285 km/h"],
        ["Kerb Weight",  "1,450 kg"],
        ["Brakes",       "Carbon-Ceramic PCCB standard"],
        ["Dimensions",   "4,573 × 1,901 × 1,280 mm"],
        ["Fuel Type",    "98 RON required"]
      ]
    }
  },

  // ════════════════════════════════════════════════════════════════════
  //  CAR 3 — Mitsubishi Evo IX MR
  // ════════════════════════════════════════════════════════════════════
  {
    id:       3,
    brand:    "Mitsubishi",
    model:    "Evo IX MR",
    fullName: "Evo IX MR",
    subModel: "RalliArt · 2.0L 4G63T AWD",
    badge:    "JDM Icon",
    label:    "Rally Legend",
    price:    168000,
    year:     2006,
    region:   "JP",
    reverse:  true,

    image: "images/EVO9.png",            // [01] Hero / Card

    specs: {
      hp:       "280",
      sprint:   "5.4s",
      topSpeed: "AWD",
      gearbox:  "6-MT"
    },
    desc: "Liquid Silver Metallic with Carbon Composite panels and Brembo brakes. The CT9A Evo IX MR is the purest expression of Mitsubishi's WRC rally pedigree — a true legend of the tarmac stages.",

    detail: {
      tagline: "The purest expression of Mitsubishi's rally DNA.",
      quote:   "Born on the stages of the WRC — <em>forged</em> in competition, delivered to the street.",

      identityImg: "images/e9backside.png",     // [02] Identity

      story01: {
        eyebrow: "Driving Experience",
        heading: "Rally DNA,<br>Street <em>Weapon</em>",
        body:    "The CT9A Evo IX MR places you at the centre of a mechanical symphony. The 4G63T turbocharged engine, Brembo brakes, and active yaw control create a connection between driver and machine that modern electronics cannot replicate.",
        images: [
          "images/e9disc.png",      // [03] triptych 1 — Brembo brakes
          "images/e9gear.png",      // [04] triptych 2 — 4G63T engine
          "images/EVO9_exhaust.png"      // [05] triptych 3 — exhaust/intercooler
        ]
      },

      story02: {
        eyebrow: "Modification Potential",
        heading: "Build Without<br><em>Limits</em>",
        body:    "The 4G63 engine is one of the most developed platforms in tuning history. From mild bolt-ons to full 800 PS race builds — the canvas is almost limitless.",
        images: [
          "images/EVO9_mod1.png",        // [06] collage large — built/modified car
          "images/EVO9_mod2.png",        // [07] collage bottom-left
          "images/EVO9_mod3.jpg"         // [08] collage bottom-right
        ],
        mods: [
          "Big turbo kits (Garrett, Borg Warner)",
          "Full engine builds 400–800+ PS",
          "Wide arch conversion",
          "Air suspension / Tarmac spec setups",
          "Sequential gearbox conversion",
          "Roll cage & CAMS/FIA prep"
        ]
      },

      gallery: [
        "images/e9front.png",      // [09]
        "images/e9side.png",      // [10]
        "images/e9back.png",      // [11]
        "images/e9back2.png",      // [12]
        "images/e9ext.png",      // [13]
        "images/e9int.png",      // [14]
        "images/e9seat.png",      // [15]
        "images/e9rim.png"       // [16]
      ],

      ownership: [
        { icon: "⛽", title: "Fuel Economy",    val: "~13L/100km · 97 RON required" },
        { icon: "🔧", title: "Maintenance",     val: "Specialist recommended · JDM parts still available" },
        { icon: "🛣️", title: "Daily Usability", val: "Firm but liveable · 4 full seats · Practical boot" },
        { icon: "📋", title: "Insurance",       val: "Agreed value essential · Declare all modifications" },
        { icon: "🏆", title: "Resale Value",    val: "Rising collector value · Low global supply" },
        { icon: "⚙️", title: "Warranty",        val: "As-is · Full AURUM inspection report provided" }
      ],

      specTable: [
        ["Engine",         "2.0L 4G63T · Turbocharged · MIVEC"],
        ["Power",          "280 PS (factory) · Derestricted higher"],
        ["Torque",         "392 Nm @ 4,000 rpm"],
        ["0–100 km/h",     "~5.4 seconds"],
        ["Top Speed",      "250+ km/h"],
        ["Transmission",   "6-speed Manual"],
        ["Drivetrain",     "All-Wheel Drive · ACD/AYC"],
        ["Brakes",         "Brembo 4-pot (front)"],
        ["Kerb Weight",    "1,400 kg"],
        ["Year",           "2005–2007 (CT9A Generation)"],
        ["Special Edition","MR — Carbon panels · Bilstein dampers"]
      ]
    }
  },

  // ════════════════════════════════════════════════════════════════════
  //  CAR 4 — Audi R8 V10
  // ════════════════════════════════════════════════════════════════════
  {
    id:       4,
    brand:    "Audi",
    model:    "R8 V10",
    fullName: "R8 V10",
    subModel: "5.2L FSI V10 NA · Quattro AWD",
    badge:    "V10 Supercar",
    label:    "Supercar",
    price:    650000,
    year:     2022,
    region:   "DE",
    reverse:  false,

    image: "images/R8.png",             // [01] Hero / Card

    specs: {
      hp:       "570",
      sprint:   "3.4s",
      topSpeed: "324",
      gearbox:  "7-S Tronic"
    },
    desc: "A naturally aspirated 5.2L V10 revving to 8,700 rpm with Quattro all-wheel drive. The R8 is Audi's most direct link to its Le Mans-winning motorsport heritage — intoxicating to drive.",

    detail: {
      tagline: "A naturally aspirated V10 symphony on four wheels.",
      quote:   "Ten cylinders. No turbo. No compromise. Just <em>pure</em> mechanical theatre.",

      identityImg: "images/R8backside.png",       // [02] Identity

      story01: {
        eyebrow: "Driving Experience",
        heading: "Mid-Engine<br><em>Masterpiece</em>",
        body:    "The R8's 5.2L V10 revs to 8,700 rpm with a sound that rivals any supercar on the planet. Quattro AWD plants every one of those 570 horses with absolute confidence. It is exotic performance made daily-driveable.",
        images: [
          "images/R8_engine.png",        // [03] triptych 1 — V10 engine bay
          "images/R8_abs.png",        // [04] triptych 2 — intake/engine detail
          "images/R8_exhaust.png"        // [05] triptych 3 — quad exhaust
        ]
      },

      story02: {
        eyebrow: "Upgrade Potential",
        heading: "Audi Sport,<br><em>Elevated</em>",
        body:    "The R8 platform responds well to ECU tuning and exhaust work. For those wanting more drama without sacrificing reliability, the options are well-proven.",
        images: [
          "images/R8_mod1.png",          // [06] collage large
          "images/R8_mod2.png",          // [07] collage bottom-left
          "images/R8_mod3.png"           // [08] collage bottom-right
        ],
        mods: [
          "ECU remap (600+ PS achievable)",
          "Exhaust system upgrades",
          "Coilover suspension",
          "Carbon ceramic brake upgrade",
          "Forged wheel packages",
          "Aero body kit options"
        ]
      },

      gallery: [
        "images/R8front.png",        // [09]
        "images/R8side.png",        // [10]
        "images/R8back.png",        // [11]
        "images/R8back2.png",        // [12]
        "images/R8int1.png",        // [13]
        "images/R8int2.png",        // [14]
        "images/R8seat.png",        // [15]
        "images/R8rim.png"         // [16]
      ],

      ownership: [
        { icon: "⛽", title: "Fuel Economy",    val: "~18L/100km · 98 RON required" },
        { icon: "🔧", title: "Maintenance",     val: "Audi Centre Malaysia · 10,000 km service intervals" },
        { icon: "🛣️", title: "Daily Usability", val: "Surprisingly liveable · 2+2 seating · AC frunk" },
        { icon: "📋", title: "Insurance",       val: "Agreed value recommended · Supercar class" },
        { icon: "🏆", title: "Resale Value",    val: "Stable · Last of the NA V10 — collector appeal rising" },
        { icon: "⚙️", title: "Warranty",        val: "Audi warranty transferable · Approved Used available" }
      ],

      specTable: [
        ["Engine",       "5.2L FSI V10 · Naturally Aspirated"],
        ["Power",        "570 PS @ 8,000 rpm"],
        ["Torque",       "550 Nm @ 6,500 rpm"],
        ["0–100 km/h",   "3.4 seconds"],
        ["Top Speed",    "324 km/h"],
        ["Transmission", "7-speed S Tronic"],
        ["Drivetrain",   "Quattro AWD"],
        ["Kerb Weight",  "1,695 kg"],
        ["Rev Limit",    "8,700 rpm"],
        ["Dimensions",   "4,426 × 1,944 × 1,240 mm"],
        ["Fuel Type",    "98 RON required"]
      ]
    }
  },

  // ════════════════════════════════════════════════════════════════════
  //  CAR 5 — Audi TT RS
  // ════════════════════════════════════════════════════════════════════
  {
    id:       5,
    brand:    "Audi",
    model:    "TT RS",
    fullName: "TT RS",
    subModel: "2.5L TFSI 5-Cyl Turbo · Quattro",
    badge:    "5-Cyl Turbo",
    label:    "Performance Coupe",
    price:    320000,
    year:     2021,
    region:   "DE",
    reverse:  true,

    image: "images/TTRS.png",           // [01] Hero / Card

    specs: {
      hp:       "400",
      sprint:   "3.7s",
      topSpeed: "250",
      gearbox:  "7-S Tronic"
    },
    desc: "The iconic 5-cylinder turbo delivers 400 PS with an unmistakable exhaust note. Compact, sharp, and devastatingly quick — the TT RS is Audi's most focused everyday sports car.",

    detail: {
      tagline: "Five cylinders. One unforgettable sound.",
      quote:   "The five-cylinder note is not just heard — it is <em>felt</em>, deep in the chest at every rev.",

      identityImg: "images/TTRS_side.png",     // [02] Identity

      story01: {
        eyebrow: "Driving Experience",
        heading: "Small Package,<br><em>Violent</em> Performance",
        body:    "The 2.5L five-cylinder TFSI engine is one of the most award-winning powerplants in the world. Its staggered firing order creates a sound unlike any other turbo car — a baritone rumble that escalates to a scream at the redline.",
        images: [
          "images/TTRS_engine.png",      // [03] triptych 1 — 5-cyl engine
          "images/TTRS_turbo.png",       // [04] triptych 2 — turbo detail
          "images/TTRS_exhaust.png"      // [05] triptych 3 — dual exhaust
        ]
      },

      story02: {
        eyebrow: "Modification Potential",
        heading: "Five Cylinders,<br><em>Infinite</em> Potential",
        body:    "The 2.5 TFSI engine has a massive aftermarket. Stage 1 ECU maps push output past 500 PS with no hardware changes — one of the most tune-friendly platforms in its class.",
        images: [
          "images/TTRS_mod1.png",        // [06] collage large
          "images/TTRS_mod2.png",        // [07] collage bottom-left
          "images/TTRS_mod3.png"         // [08] collage bottom-right
        ],
        mods: [
          "Stage 1–3 ECU mapping (500+ PS)",
          "Downpipe & exhaust system",
          "Intercooler upgrade",
          "Suspension & anti-roll bars",
          "Brake caliper & disc upgrade",
          "Widebody conversion kits"
        ]
      },

      gallery: [
        "images/TTRS_g1.png",      // [09]
        "images/TTRS_g2.png",      // [10]
        "images/TTRS_g3.png",      // [11]
        "images/TTRS_g4.png",      // [12]
        "images/TTRS_g5.png",      // [13]
        "images/TTRS_g6.png",      // [14]
        "images/TTRS_g7.png",      // [15]
        "images/TTRS_g8.png"       // [16]
      ],

      ownership: [
        { icon: "⛽", title: "Fuel Economy",    val: "~14L/100km · 97–98 RON recommended" },
        { icon: "🔧", title: "Maintenance",     val: "Audi Centre · 10,000 km intervals" },
        { icon: "🛣️", title: "Daily Usability", val: "Excellent daily · 2 seats · Practical for its class" },
        { icon: "📋", title: "Insurance",       val: "Sports car class · Declare mods if tuned" },
        { icon: "🏆", title: "Resale Value",    val: "Strong — last-gen TT is the final body style" },
        { icon: "⚙️", title: "Warranty",        val: "Transferable Audi warranty · Approved Used option" }
      ],

      specTable: [
        ["Engine",       "2.5L TFSI Inline-5 · Turbocharged"],
        ["Power",        "400 PS @ 5,850 rpm"],
        ["Torque",       "480 Nm @ 1,700–5,850 rpm"],
        ["0–100 km/h",   "3.7 seconds"],
        ["Top Speed",    "250 km/h (limited)"],
        ["Transmission", "7-speed S Tronic"],
        ["Drivetrain",   "Quattro AWD"],
        ["Kerb Weight",  "1,500 kg"],
        ["Dimensions",   "4,191 × 1,832 × 1,350 mm"],
        ["Fuel Type",    "97–98 RON recommended"]
      ]
    }
  },

  // ════════════════════════════════════════════════════════════════════
  //  CAR 6 — Mitsubishi Evo X
  // ════════════════════════════════════════════════════════════════════
  {
    id:       6,
    brand:    "Mitsubishi",
    model:    "Evo X",
    fullName: "Evo X",
    subModel: "2.0L 4B11T MIVEC · AWD SST",
    badge:    "Last Evo",
    label:    "Final Evolution",
    price:    220000,
    year:     2013,
    region:   "JP",
    reverse:  false,

    image: "images/EVO10.png",          // [01] Hero / Card

    specs: {
      hp:       "295",
      sprint:   "5.0s",
      topSpeed: "AWD",
      gearbox:  "6-SST"
    },
    desc: "The final chapter of Mitsubishi's legendary Evolution lineage. Twin-clutch SST, Super All-Wheel Control, and the 4B11 turbocharged engine — performance that defined an era.",

    detail: {
      tagline: "The last Evolution. The end of a legend.",
      quote:   "Every generation pushed the limit further. The Evo X is where <em>Mitsubishi reached the edge</em> and stayed.",

      identityImg: "images/EVO10_side.png",    // [02] Identity

      story01: {
        eyebrow: "Driving Experience",
        heading: "The Final<br><em>Evolution</em>",
        body:    "The Evo X SST twin-clutch gearbox fires off shifts faster than a human can think. Super All-Wheel Control redistributes torque with millimetre precision. The result is a car that feels alive — constantly adjusting, always planted, always hunting the apex.",
        images: [
          "images/EVO10_sst.png",        // [03] triptych 1 — SST gearbox
          "images/EVO10_diff.png",       // [04] triptych 2 — AWD/diff
          "images/EVO10_engine.png"      // [05] triptych 3 — 4B11 engine
        ]
      },

      story02: {
        eyebrow: "Modification Potential",
        heading: "4B11,<br><em>Unleashed</em>",
        body:    "The 4B11 engine block is stronger than the legendary 4G63 it replaced, and responds even better to forced induction upgrades. 600 PS builds on stock internals are well documented.",
        images: [
          "images/EVO10_mod1.png",       // [06] collage large
          "images/EVO10_mod2.png",       // [07] collage bottom-left
          "images/EVO10_mod3.png"        // [08] collage bottom-right
        ],
        mods: [
          "Big turbo kits (Borg Warner EFR, Garrett GTX)",
          "Engine builds to 600+ PS",
          "SST tune & TCU flash",
          "Full coilover & geometry setup",
          "Wide arch & aero conversion",
          "Motec / Link ECU conversion"
        ]
      },

      gallery: [
        "images/EVO10_g1.png",     // [09]
        "images/EVO10_g2.png",     // [10]
        "images/EVO10_g3.png",     // [11]
        "images/EVO10_g4.png",     // [12]
        "images/EVO10_g5.png",     // [13]
        "images/EVO10_g6.png",     // [14]
        "images/EVO10_g7.png",     // [15]
        "images/EVO10_g8.png"      // [16]
      ],

      ownership: [
        { icon: "⛽", title: "Fuel Economy",    val: "~13L/100km · 97 RON required" },
        { icon: "🔧", title: "Maintenance",     val: "SST service critical every 40,000 km · Specialist recommended" },
        { icon: "🛣️", title: "Daily Usability", val: "Very liveable · 4 seats · Last Evo refinement" },
        { icon: "📋", title: "Insurance",       val: "Agreed value policy recommended" },
        { icon: "🏆", title: "Resale Value",    val: "Final generation — collector value rising steadily" },
        { icon: "⚙️", title: "Warranty",        val: "As-is · Full AURUM pre-purchase inspection" }
      ],

      specTable: [
        ["Engine",         "2.0L 4B11T · Turbocharged · MIVEC"],
        ["Power",          "295 PS @ 6,500 rpm"],
        ["Torque",         "366 Nm @ 4,000 rpm"],
        ["0–100 km/h",     "~5.0 seconds"],
        ["Top Speed",      "240+ km/h"],
        ["Transmission",   "6-speed Twin-Clutch SST"],
        ["Drivetrain",     "Super All-Wheel Control (S-AWC)"],
        ["Kerb Weight",    "1,590 kg"],
        ["Year",           "2008–2016 (CZ4A Generation)"],
        ["Special Feature","S-AWC · ACD · AYC · Sport ABS"]
      ]
    }
  },

  // ════════════════════════════════════════════════════════════════════
  //  CAR 7 — Porsche 718 GT4 RS
  // ════════════════════════════════════════════════════════════════════
  {
    id:       7,
    brand:    "Porsche",
    model:    "718 GT4 RS",
    fullName: "718 GT4 RS",
    subModel: "4.0L Flat-Six NA · PDK",
    badge:    "Mid-Engine GT",
    label:    "Mid-Engine GT",
    price:    1660000,
    year:     2023,
    region:   "DE",
    reverse:  true,

    image: "images/718.png",            // [01] Hero / Card

    specs: {
      hp:       "500",
      sprint:   "3.4s",
      topSpeed: "315",
      gearbox:  "PDK"
    },
    desc: "Inheriting the GT4 RS engine in a mid-engine chassis, the 718 GT4 RS delivers 500 PS with near-telepathic handling. The purest driver's Porsche under RM 2 million.",

    detail: {
      tagline: "Mid-engine perfection. The driver's Porsche.",
      quote:   "The GT4 RS engine, the mid-engine advantage — in one package, <em>nothing is compromised</em>.",

      identityImg: "images/718backside.png",      // [02] Identity

      story01: {
        eyebrow: "Driving Experience",
        heading: "Mid-Engine<br><em>Telepathy</em>",
        body:    "The 718 GT4 RS places its engine directly behind the driver, achieving near-perfect weight balance. Combined with Weissach-developed aerodynamics and the GT3 RS flat-six screaming to 9,000 rpm, every corner becomes a conversation between driver and machine.",
        images: [
          "images/718_engine.png",       // [03] triptych 1 — flat-six engine
          "images/718_aero.png",         // [04] triptych 2 — front aero / splitter
          "images/718_exhaust.png"       // [05] triptych 3 — exhaust / diffuser
        ]
      },

      story02: {
        eyebrow: "Track Potential",
        heading: "GT Track<br><em>Ready</em>",
        body:    "The GT4 RS is already one of the fastest road cars at the Nürburgring. Further preparation focuses on tyres, data, and setup rather than power — it already has enough.",
        images: [
          "images/718_track.png",        // [06] collage large — on track
          "images/718_cockpit.png",      // [07] collage bottom-left — cockpit
          "images/718_wheel.png"         // [08] collage bottom-right — wheel
        ],
        mods: [
          "Cup 2R tyre fitment",
          "Cage & harness conversion",
          "Brake bias bar installation",
          "Aero fine-tuning (front splitter)",
          "Data logging & telemetry",
          "Suspension corner weight setup"
        ]
      },

      gallery: [
        "images/718_g1.png",       // [09]
        "images/718_g2.png",       // [10]
        "images/718_g3.png",       // [11]
        "images/718_g4.png",       // [12]
        "images/718_g5.png",       // [13]
        "images/718_g6.png",       // [14]
        "images/718_g7.png",       // [15]
        "images/718_g8.png"        // [16]
      ],

      ownership: [
        { icon: "⛽", title: "Fuel Economy",    val: "~18L/100km · 98 RON required" },
        { icon: "🔧", title: "Maintenance",     val: "Porsche Centre Malaysia · Annual inspection critical" },
        { icon: "🛣️", title: "Daily Usability", val: "Track-focused · Firm ride · 2 seats · Limited storage" },
        { icon: "📋", title: "Insurance",       val: "Agreed value strongly recommended" },
        { icon: "🏆", title: "Resale Value",    val: "GT cars historically appreciate · Low production numbers" },
        { icon: "⚙️", title: "Warranty",        val: "2-year Porsche warranty" }
      ],

      specTable: [
        ["Engine",       "4.0L Flat-Six · NA (GT3 RS unit)"],
        ["Power",        "500 PS @ 8,500 rpm"],
        ["Torque",       "450 Nm @ 6,100 rpm"],
        ["0–100 km/h",   "3.4 seconds"],
        ["Top Speed",    "315 km/h"],
        ["Transmission", "7-speed PDK"],
        ["Drivetrain",   "Rear-Wheel Drive"],
        ["Downforce",    "Active aerodynamics — DRS"],
        ["Kerb Weight",  "1,415 kg"],
        ["Dimensions",   "4,404 × 1,852 × 1,281 mm"],
        ["Fuel Type",    "98 RON required"]
      ]
    }
  },

  // ════════════════════════════════════════════════════════════════════
  //  CAR 8 — Porsche 918 Spyder
  // ════════════════════════════════════════════════════════════════════
  {
    id:       8,
    brand:    "Porsche",
    model:    "918 Spyder",
    fullName: "918 Spyder",
    subModel: "4.6L V8 + Hybrid · 887 PS Total",
    badge:    "Holy Trinity",
    label:    "Hybrid Hypercar",
    price:    8500000,
    year:     2015,
    region:   "DE",
    reverse:  false,

    image: "images/918.png",            // [01] Hero / Card

    specs: {
      hp:       "887",
      sprint:   "2.6s",
      topSpeed: "345",
      gearbox:  "7-PDK"
    },
    desc: "One of only 918 ever built. The 918 Spyder fuses a 4.6L V8 with two electric motors for 887 PS total — a member of the Holy Trinity alongside LaFerrari and McLaren P1.",

    detail: {
      tagline: "One of 918. One of a kind.",
      quote:   "Three cars defined the hypercar era. The 918 Spyder was <em>Porsche's answer to perfection</em>.",

      identityImg: "images/918_side.png",      // [02] Identity

      story01: {
        eyebrow: "Driving Experience",
        heading: "Hybrid Power,<br><em>Pure Soul</em>",
        body:    "887 PS of combined combustion and electric power. Four-wheel torque vectoring. Active aerodynamics. The 918 Spyder set the Nürburgring lap record for a production car at 6:57 — then walked away on electric power alone.",
        images: [
          "images/918_v8.png",           // [03] triptych 1 — V8 engine
          "images/918_hybrid.png",       // [04] triptych 2 — hybrid system
          "images/918_exhaust.png"       // [05] triptych 3 — top-exit exhaust
        ]
      },

      story02: {
        eyebrow: "Ownership & Legacy",
        heading: "A Collector's<br><em>Investment</em>",
        body:    "All 918 examples were built between 2013–2015. Values have doubled since new. This is not merely a car — it is a museum piece with a racing soul. Preservation is the philosophy.",
        images: [
          "images/918_show.png",         // [06] collage large — concours/show
          "images/918_interior.png",     // [07] collage bottom-left — cockpit
          "images/918_plaque.png"        // [08] collage bottom-right — VIN/plaque
        ],
        mods: [
          "Weissach package (if not already fitted)",
          "Matching numbers documentation",
          "Professional inspection & service",
          "Climate-controlled storage",
          "Track day experience (owner only)",
          "Certificate of authenticity"
        ]
      },

      gallery: [
        "images/918_g1.png",       // [09]
        "images/918_g2.png",       // [10]
        "images/918_g3.png",       // [11]
        "images/918_g4.png",       // [12]
        "images/918_g5.png",       // [13]
        "images/918_g6.png",       // [14]
        "images/918_g7.png",       // [15]
        "images/918_g8.png"        // [16]
      ],

      ownership: [
        { icon: "⛽", title: "Fuel Economy",    val: "3.1L/100km hybrid · V8 only ~30L/100km · 98 RON" },
        { icon: "🔧", title: "Maintenance",     val: "Porsche factory service only · Major service every 2 years" },
        { icon: "🛣️", title: "Daily Usability", val: "Can be daily driven · Electric-only urban mode available" },
        { icon: "📋", title: "Insurance",       val: "Specialist agreed value · Limited use policy recommended" },
        { icon: "🏆", title: "Resale Value",    val: "Values doubled since new · All 918 are appreciating assets" },
        { icon: "⚙️", title: "Warranty",        val: "As-is · Full AURUM provenance report · Factory records included" }
      ],

      specTable: [
        ["Engine",         "4.6L V8 NA + 2× Electric Motors"],
        ["Combined Power", "887 PS"],
        ["Combined Torque","1,280 Nm"],
        ["0–100 km/h",     "2.6 seconds"],
        ["Top Speed",      "345 km/h"],
        ["Transmission",   "7-speed PDK"],
        ["Drivetrain",     "Hybrid AWD · Torque Vectoring"],
        ["Nürburgring",    "6:57.000 (production car record at time)"],
        ["Units Built",    "918 worldwide"],
        ["Electric Range", "~30 km zero emission"],
        ["Kerb Weight",    "1,674 kg"],
        ["Fuel Type",      "98 RON required"]
      ]
    }
  },

  // ════════════════════════════════════════════════════════════════════
  //  CAR 9 — Toyota GR Supra
  // ════════════════════════════════════════════════════════════════════
  {
    id:       9,
    brand:    "Toyota",
    model:    "GR Supra",
    fullName: "GR Supra",
    subModel: "Gazoo Racing · 3.0L B58 Turbo",
    badge:    "JDM Legend",
    label:    "Legend Reborn",
    price:    568000,
    year:     2024,
    region:   "JP",
    reverse:  true,

    image: "images/supra.png",          // [01] Hero / Card

    specs: {
      hp:       "387",
      sprint:   "4.3s",
      topSpeed: "250",
      gearbox:  "8-AT"
    },
    desc: "The iconic Supra reborn with BMW-sourced 3.0L turbocharged straight-six power. 387 PS, rear-wheel drive, and a soundtrack that makes every journey a memory.",

    detail: {
      tagline: "A legend reborn. The Supra is back.",
      quote:   "Some names carry weight beyond metal and engineering. <em>Supra</em> is one of them.",

      identityImg: "images/supra_side.png",    // [02] Identity

      story01: {
        eyebrow: "Driving Experience",
        heading: "The Name<br><em>Returns</em>",
        body:    "The GR Supra's BMW B58 straight-six is one of the finest engines in the world — turbocharged, silky smooth, and endlessly tunable. Rear-wheel drive with a near-perfect 50:50 weight split makes every corner an event.",
        images: [
          "images/supra_engine.png",     // [03] triptych 1 — B58 engine
          "images/supra_turbo.png",      // [04] triptych 2 — turbo/intake
          "images/supra_exhaust.png"     // [05] triptych 3 — dual exhaust
        ]
      },

      story02: {
        eyebrow: "Modification Potential",
        heading: "Built to<br><em>Be Modified</em>",
        body:    "The B58 engine is one of the most modification-friendly platforms of the modern era. With a simple Stage 1 tune, output jumps from 387 to 450+ PS. The aftermarket is vast and well-proven.",
        images: [
          "images/supra_mod1.png",       // [06] collage large — modded Supra
          "images/supra_mod2.png",       // [07] collage bottom-left
          "images/supra_mod3.png"        // [08] collage bottom-right
        ],
        mods: [
          "Stage 1–3 ECU tune (450–600+ PS)",
          "Downpipe & exhaust system",
          "Intercooler & charge pipe upgrade",
          "Widebody conversion (GR style)",
          "Coilover suspension",
          "Manual gearbox conversion kit"
        ]
      },

      gallery: [
        "images/supra_g1.png",     // [09]
        "images/supra_g2.png",     // [10]
        "images/supra_g3.png",     // [11]
        "images/supra_g4.png",     // [12]
        "images/supra_g5.png",     // [13]
        "images/supra_g6.png",     // [14]
        "images/supra_g7.png",     // [15]
        "images/supra_g8.png"      // [16]
      ],

      ownership: [
        { icon: "⛽", title: "Fuel Economy",    val: "~12L/100km · RON 97 recommended" },
        { icon: "🔧", title: "Maintenance",     val: "UMW Toyota / BMW Centre · 10,000 km intervals" },
        { icon: "🛣️", title: "Daily Usability", val: "Excellent daily · 2 seats · Good visibility · Large boot" },
        { icon: "📋", title: "Insurance",       val: "Sports car class · Declare modifications if tuned" },
        { icon: "🏆", title: "Resale Value",    val: "Strong — GR badge holds value · Limited supply in MY" },
        { icon: "⚙️", title: "Warranty",        val: "3-year / 100,000 km Toyota warranty" }
      ],

      specTable: [
        ["Engine",       "3.0L B58 Inline-6 · Turbocharged"],
        ["Power",        "387 PS @ 5,800 rpm"],
        ["Torque",       "500 Nm @ 1,800–5,000 rpm"],
        ["0–100 km/h",   "4.3 seconds"],
        ["Top Speed",    "250 km/h (limited)"],
        ["Transmission", "8-speed Automatic"],
        ["Drivetrain",   "Rear-Wheel Drive"],
        ["Kerb Weight",  "1,570 kg"],
        ["Dimensions",   "4,380 × 1,865 × 1,294 mm"],
        ["Wheelbase",    "2,470 mm"],
        ["Fuel Type",    "RON 97 recommended"]
      ]
    }
  }

  // ════════════════════════════════════════════════════════════════════
  //  ADD NEW CAR — copy template below, paste above this comment
  // ════════════════════════════════════════════════════════════════════
  //
  // ,{
  //   id:       10,
  //   brand:    "BMW",
  //   model:    "M4 Competition",
  //   fullName: "M4 Competition",
  //   subModel: "3.0L S58 Biturbo",
  //   badge:    "Sports Sedan",
  //   label:    "M Performance",
  //   price:    750000,
  //   year:     2024,
  //   region:   "DE",
  //   reverse:  false,
  //   image:    "images/m4.png",            // [01] Hero / Card
  //   specs:    { hp:"510", sprint:"3.9s", topSpeed:"290", gearbox:"8-AT" },
  //   desc:     "Your 2-line card description here.",
  //   detail: {
  //     tagline:     "One-line hero tagline.",
  //     quote:       "Editorial quote with optional <em>italic</em>.",
  //     identityImg: "images/m4_side.png",  // [02] Identity
  //     story01: {
  //       eyebrow: "Driving Experience",
  //       heading: "Heading<br><em>Here</em>",
  //       body:    "Paragraph text here.",
  //       images: [
  //         "images/m4_detail1.png",        // [03] triptych 1
  //         "images/m4_detail2.png",        // [04] triptych 2
  //         "images/m4_detail3.png"         // [05] triptych 3
  //       ]
  //     },
  //     story02: {
  //       eyebrow: "Modification Potential",
  //       heading: "Heading<br><em>Here</em>",
  //       body:    "Paragraph text here.",
  //       images: [
  //         "images/m4_mod1.png",           // [06] collage large top
  //         "images/m4_mod2.png",           // [07] collage bottom-left
  //         "images/m4_mod3.png"            // [08] collage bottom-right
  //       ],
  //       mods: ["Mod 1","Mod 2","Mod 3","Mod 4","Mod 5","Mod 6"]
  //     },
  //     gallery: [
  //       "images/m4_g1.png",               // [09] gallery image 1
  //       "images/m4_g2.png",               // [10] gallery image 2
  //       "images/m4_g3.png",               // [11] gallery image 3
  //       "images/m4_g4.png",               // [12] gallery image 4
  //       "images/m4_g5.png",               // [13] gallery image 5
  //       "images/m4_g6.png",               // [14] gallery image 6
  //       "images/m4_g7.png",               // [15] gallery image 7
  //       "images/m4_g8.png"                // [16] gallery image 8
  //     ],
  //     ownership: [
  //       { icon:"⛽", title:"Fuel Economy",    val:"~14L/100km · 98 RON" },
  //       { icon:"🔧", title:"Maintenance",     val:"BMW Centre Malaysia" },
  //       { icon:"🛣️", title:"Daily Usability", val:"Excellent daily driver" },
  //       { icon:"📋", title:"Insurance",       val:"Agreed value recommended" },
  //       { icon:"🏆", title:"Resale Value",    val:"Strong BMW M demand" },
  //       { icon:"⚙️", title:"Warranty",        val:"BMW warranty included" }
  //     ],
  //     specTable: [
  //       ["Engine",       "3.0L S58 Twin-Turbo Inline-6"],
  //       ["Power",        "510 PS"],
  //       ["0–100 km/h",   "3.9 seconds"],
  //       ["Transmission", "8-speed AT"],
  //       ["Drivetrain",   "RWD / xDrive"],
  //       ["Fuel Type",    "98 RON"]
  //     ]
  //   }
  // }

];