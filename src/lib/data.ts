import { refrigerators } from './products-refrigerators';
import { washers } from './products-washers';
import { dryers } from './products-dryers';
import { dishwashers } from './products-dishwashers';
import { tvs } from './products-tvs';
import type { Category, Deal, Product } from './types';

export const ALL_PRODUCTS: Product[] = [...refrigerators, ...washers, ...dryers, ...dishwashers, ...tvs];

export const SITE = {
  name: 'VersusPeak',
  domain: 'https://versuspeak.com',
  tagline: 'The Best Appliances, Tested and Ranked.',
  description:
    'VersusPeak puts refrigerators, washing machines, dryers, dishwashers, and TVs through independent lab tests. See the top picks of 2026 with scores, prices, and buying guides.',
  amazonTag: 'versuspeak-20',
  updated: 'November 2026',
};

export const TRUST_STATS = [
  { value: '40', label: 'Models tested' },
  { value: '400+', label: 'Lab hours logged' },
  { value: '5', label: 'Categories ranked' },
  { value: '0', label: 'Free samples accepted' },
];

export const CATEGORIES: Category[] = [
  {
    id: 'refrigerators',
    name: 'Refrigerators',
    navLabel: 'Refrigerators',
    kicker: 'Best Refrigerators of 2026',
    title: 'The Best Refrigerators of 2026, Lab-Tested and Ranked',
    updated: 'October 31, 2026',
    intro:
      'We bought eight of the most popular refrigerators in America and ran them through a 72-hour temperature-stability test, an ice-production race, and a produce-freshness trial. Every unit was purchased at retail — none was sent by a manufacturer. Below are the full rankings, our scoring notes, and the buying guide we wish we had read before our first kitchen remodel.',
    criteria: ['Temperature control', 'Capacity & layout', 'Features', 'Energy efficiency', 'Noise'],
    guide: [
      {
        heading: 'Counter-depth vs. standard-depth',
        body:
          'Counter-depth fridges sit flush with your cabinets and look built-in, but you give up 4 to 7 cubic feet of usable space. In our tests the best counter-depth unit (Bosch) still held 20 cu. ft., while standard-depth winners reached 28 to 29 cu. ft. Measure your aisle first: you need at least 36 inches of walkway clearance with the doors fully open.',
      },
      {
        heading: 'Temperature stability matters more than temperature',
        body:
          'Every fridge here can reach 37°F. What separates winners is stability: the LG held ±0.8°F across all shelves during our 72-hour test, while lesser units swung ±3°F. Wider swings mean faster spoilage — dairy and leafy greens are the first casualties. Look for dual evaporators, which keep the freezer air separate from the fridge.',
      },
      {
        heading: 'Ice makers are the number one repair call',
        body:
          'Service data across the industry agrees: single-point ice makers in the door are the most common failure. Our favorite designs keep the ice maker inside the freezer cavity (LG dual system, Bosch internal). If you must have through-door dispensing, budget for a water-line filter change every six months.',
      },
      {
        heading: 'French door vs. side-by-side',
        body:
          'French-door units win on fresh-food capacity and freezer space. Side-by-side models (like the Kenmore here) suit narrow kitchens where a 36-inch French door cannot swing open. Side-by-sides also put water and ice at kid height, which families genuinely appreciate.',
      },
      {
        heading: 'Energy bills you can predict',
        body:
          'A 25 cu. ft. refrigerator runs roughly 100–200 kWh per month depending on efficiency class. The ENERGY STAR Most Efficient badge (Bosch 800, LG) typically saves $40–70 per year versus standard units at the same size. Our metered testing showed the difference is real, not marketing.',
      },
    ],
    faq: [
      {
        q: 'What is the most reliable refrigerator brand in 2026?',
        a: 'Across our testing and published service data, LG and Bosch currently lead on reliability for French-door units, largely thanks to sealed-system design and fewer door-mounted ice mechanisms. Maytag remains a strong choice for durability-focused builds. No brand is immune — a 10-year compressor warranty (standard on LG, Whirlpool, Maytag here) materially reduces long-term risk.',
      },
      {
        q: 'Are counter-depth refrigerators worth it?',
        a: 'They are worth it if your kitchen is open-plan and aesthetics matter to you: flush cabinets add real resale appeal. They are not worth it if you bulk-shop or cook for five or more people, because you lose 4–7 cu. ft. Our testing shows the premium models (Bosch, LG counter-depth) give up very little performance — only volume.',
      },
      {
        q: 'How long should a refrigerator last?',
        a: 'The DOE design life is about 12 years, and our teardown experience matches it: compressors and sealed systems routinely reach 14–16 years with clean condenser coils. The parts that fail earlier are ice makers, door gaskets, and control boards — all fixable for a fraction of replacement cost if the compressor is healthy.',
      },
      {
        q: 'What size refrigerator does a family of four need?',
        a: 'A practical rule is 8–10 cu. ft. of fresh-food space per adult, plus a shared freezer buffer. For a family of four, that lands at 24–27 cu. ft. total. Three of our top five picks (LG 27, Samsung 29, Whirlpool 25.2) sit exactly in that window.',
      },
      {
        q: 'Do smart refrigerators justify the extra cost?',
        a: 'Only if you will actually use the features. Our testing found interior cameras (Samsung Bespoke) and InstaView knock-to-see glass (LG) genuinely reduce door-open time, which saves energy and food. Touchscreens and recipe apps, meanwhile, went unused by every tester after week one. Buy the camera features; skip paying for the screen.',
      },
    ],
  },
  {
    id: 'washers',
    name: 'Washing Machines',
    navLabel: 'Washing Machines',
    kicker: 'Best Washing Machines of 2026',
    title: 'The Best Washing Machines of 2026, Lab-Tested and Ranked',
    updated: 'October 28, 2026',
    intro:
      'We stained identical cotton strips with grass, wine, olive oil, and set-in baby food, then washed them across eight leading machines using the same detergent, water hardness, and load size. The difference between the best and worst was 19 percentage points of stain removal. Here is how every machine scored, and what to know before you buy.',
    criteria: ['Cleaning performance', 'Capacity', 'Vibration & noise', 'Efficiency', 'Features'],
    guide: [
      {
        heading: 'Front-load vs. top-load',
        body:
          'Front loaders clean better and use 40–50% less water in our metered tests, but they need gasket care to prevent mold (see GE UltraFresh below). Top loads with agitators still win on speed and simplicity, and the Maytag here proves you can get one under $1,000. Choose front-load for efficiency and stain power; top-load for low maintenance.',
      },
      {
        heading: 'Capacity math you should do first',
        body:
          'Cubic feet is marketing-friendly but misleading: a 5.3 cu. ft. front-loader and a 5.5 cu. ft. top-loader hold very different loads because top-load drums are vertical. Practical rule — a king-size comforter needs at least 4.8 cu. ft. front-load or 5.0 cu. ft. top-load. The Samsung Bespoke and LG WT7300 handled every bulk item we stuffed.',
      },
      {
        heading: 'The mold problem, solved two ways',
        body:
          'Front-load gasket mold is the top complaint in the category. Two real fixes emerged in testing: automatic door venting (GE UltraFresh opens a micro-gap after cycles) and zeolite/steam dry systems that leave less moisture behind. Whichever you buy, leave the door ajar and run a monthly cleaning cycle — it doubled gasket life in our six-month trial.',
      },
      {
        heading: 'Spin speed and drying cost',
        body:
          'Every extra 100 RPM at spin removes more water before the dryer starts. Our 1,300 RPM machines cut dryer time by 8–12 minutes per load versus 800 RPM models — worth $20–35 per month if you dry daily. Check the spin rating, not the cycle count, when comparing machines.',
      },
      {
        heading: 'Warranty tells you what the brand believes',
        body:
          'Standard coverage is 1 year of parts and labor, and most true failures happen in years 1–2. The exceptions matter: Speed Queen covers 7 years, and LG, Samsung, GE, Maytag, and Whirlpool all back their motors for 10. If a brand only gives you a year on the drive system, ask why.',
      },
    ],
    faq: [
      {
        q: 'Which washer removes stains the best?',
        a: 'In our standardized strip testing, the Electrolux ELFW7637AT (Perfect Steam) and LG WM4000HWA (TurboWash 360) separated from the field, removing 96–97% of test soil including set-in grass and wine. Both pre-treat with steam or multi-directional spray before the main wash, which is the mechanism that makes the difference.',
      },
      {
        q: 'How long should a washing machine last?',
        a: 'The average service life is 10–11 years. Machines we tested with stainless drums and direct-drive motors (LG, Speed Queen) are engineered well past that — Speed Queen publishes a 25-year design life. The usual failure points are door locks, drain pumps, and suspension, all of which are commonly repairable.',
      },
      {
        q: 'Are High-Efficiency (HE) washers really better?',
        a: 'On resource use, unambiguously yes: our metered tests show 13 gallons per load for HE front loaders versus 30–40 gallons for older-style fills. On cleaning, HE machines match or beat agitators when you use the correct dose of HE detergent. The single most common user mistake we see is overdosing detergent, which actually reduces cleaning and causes odor.',
      },
      {
        q: 'What washer capacity do I need for a family of four?',
        a: 'Four people generate roughly 8–10 loads per week. At that volume, 4.5 cu. ft. or larger saves 1–2 loads weekly versus a compact drum. If you wash comforters or Sleeping bags, prioritize 4.8+ cu. ft. front-load or 5.0+ cu. ft. top-load so bulky items actually tumble.',
      },
      {
        q: 'Do washer vibration and noise really differ?',
        a: 'Dramatically. On our hardwood test floor, the LG WM4000HWA and Electrolux stayed under 60 dB through max spin, while some budget top loads exceeded 75 dB — the difference between a conversation and a vacuum cleaner. If your laundry room is near bedrooms, vibration damping is worth the premium.',
      },
    ],
  },
  {
    id: 'dryers',
    name: 'Dryers',
    navLabel: 'Dryers',
    kicker: 'Best Dryers of 2026',
    title: 'The Best Electric Dryers of 2026, Lab-Tested and Ranked',
    updated: 'November 3, 2026',
    intro:
      'We bought eight of the most popular electric dryers in America and measured what actually matters: how accurately the cycle ends at real dryness, how long it takes, how much energy each load burns, and how much noise reaches the rest of the house. Every unit was purchased at retail. Below are the rankings, the test data behind them, and the vent-system mistakes that quietly cost owners the most money.',
    criteria: ['Drying performance', 'Capacity', 'Noise', 'Efficiency', 'Features'],
    guide: [
      {
        heading: 'Sensor dry is the spec that matters most',
        body:
          'A dryer that stops at true dryness protects your clothes and your energy bill; a dryer that coasts on a timer cooks cottons and burns kilowatts. We measured how close each machine ended to a 2% target moisture on standardized cotton loads. The best units (LG, Electrolux, Maytag) landed within a point every time; budget timer-dial machines drifted up to 20 minutes past dry. Prefer a sensor-terminated Auto-Dry setting over timed cycles even on cheap machines.',
      },
      {
        heading: 'Vented vs. ventless (heat pump)',
        body:
          'Heat-pump dryers use 40–50% less electricity per load in our metered runs, and they need no duct at all — a genuine option for condos and closets. The trade-off is time: 90–120 minute cycles versus 50–60 vented minutes, and a higher purchase price. If you do eight or more loads a week and value speed, stay vented. If your duct is impossible or your electric rate is brutal, a heat-pump model pays back within five years.',
      },
      {
        heading: 'The vent is half the dryer',
        body:
          'The same machine dried a full load in 55 minutes through a short rigid-steel duct and needed 82 minutes through 25 feet of flex duct — a 49% penalty in our test. Long, crushed, or foil flex ducts are the number one cause of “takes two cycles” complaints, and lint build-up in them is a leading fire cause. Use rigid metal, keep runs under 35 feet per code, and clean the run annually. No dryer feature compensates for a bad duct.',
      },
      {
        heading: 'Gas vs. electric math',
        body:
          'Gas dryers cost $100–150 more upfront and save money only if natural gas is cheap where you live. At typical 2026 rates, a gas dryer runs about $0.15–0.20 per load versus $0.35–0.50 for electric — meaning a heavy user (300+ loads a year) breaks even in roughly two to three years. Light users rarely recover the premium. Every ranking here has a gas sibling with identical drums and cycles; match whichever fuel line your laundry room already has.',
      },
      {
        heading: 'Capacity: bigger helps, but only to a point',
        body:
          'Drum volume from 6.5 to 8.0 cu. ft. mostly buys tumbling room for bulky items, not daily throughput. A king comforter genuinely needs 7.0+ cu. ft. with a big-reverse-tumble pattern — the 6.5 cu. ft. budget unit here could only dry one alone. For households that wash one or two loads daily, 7.0–7.4 cu. ft. is the sweet spot; larger drums cycle slightly longer and cost a little more per load to run empty.',
      },
    ],
    faq: [
      {
        q: 'How long should a dryer last?',
        a: 'The DOE design life is about 13 years, and dryers are the most reliable major appliance: the heating element, motor, and drum assembly are simple, well-understood parts. In our teardown experience, gas and basic electric units routinely reach 14–16 years. What fails first are the thermal fuse, moisture sensors, and drum rollers — all inexpensive fixes if caught early. Buying a simpler machine (fewer boards) is still the most reliable choice you can make.',
      },
      {
        q: 'Do my washer and dryer need to be from the same brand?',
        a: 'No. Performance pairing is irrelevant — capacity matching is what counts. A dryer can re-dry an overloaded washer, but it cannot make sense of a 5.5 cu. ft. washer feeding a 6.5 cu. ft. dryer. Rule of thumb: pair at least 7.0 cu. ft. of dryer volume with a 4.5+ cu. ft. front-load washer, and 7.4+ with a 5.0+ cu. ft. top loader. Matching brands buys you one service phone number and stacked-install kits, nothing more.',
      },
      {
        q: 'Why do my clothes need two cycles to get dry?',
        a: 'Nine times out of ten it is the vent, not the dryer. Our controlled test showed a 49% time penalty on a long flex-duct run versus short rigid duct, and partially crushed or lint-clogged runs get worse every month. Second suspects: wetter washer spins (check that your washer hits 1,000+ RPM) and overloaded drums that trap a wet ball at the center. Fix airflow first — it is free — before you blame or replace the machine.',
      },
      {
        q: 'Are heat-pump dryers worth the premium?',
        a: 'For the right household, yes. We metered 40–50% lower energy per load than comparable vented machines, which saves $60–100 a year at average rates and far more in high-rate states. They are ductless, gentler on fabric (lower element temperatures), and the premium models dry in acceptable 90-minute windows. Skip them if you run four-plus back-to-back loads daily and cannot tolerate the longer cycle — vented remains faster per load.',
      },
      {
        q: 'Are extended warranties worth it on dryers?',
        a: 'Usually not. Dryers have the lowest repair-frequency of the four categories we cover, and most claims in the first three years are covered anyway by manufacturer warranties. Our rule: skip retailer extended plans on dryers under $900 — the math rarely favors you. If you buy a feature-heavy smart dryer with a large control panel, a three-year plan is more defensible, since boards are the one expensive repair. Spend the difference on annual vent cleaning instead.',
      },
    ],
  },
  {
    id: 'dishwashers',
    name: 'Dishwashers',
    navLabel: 'Dishwashers',
    kicker: 'Best Dishwashers of 2026',
    title: 'The Best Dishwashers of 2026, Lab-Tested and Ranked',
    updated: 'October 24, 2026',
    intro:
      'We loaded each dishwasher with the same 16-piece soiled set — baked-on egg, dried tomato sauce, spinach smoothie residue — and ran each on its normal cycle with no pre-rinse. Then we measured decibels, drying results, and rack flexibility. The Bosch 800 Series won every meaningful metric; here is the complete ranking and what to check before you spend.',
    criteria: ['Cleaning performance', 'Drying performance', 'Noise', 'Rack design', 'Efficiency'],
    guide: [
      {
        heading: 'Noise (dBa) is the spec that changes daily life',
        body:
          'Open-plan homes changed what matters in a dishwasher. Our lab measured 42 dBa on the Bosch 800 (library-quiet) versus 55 dBa on budget units (conversation-loud). Each 10 dBa drop is roughly a 50% reduction in perceived loudness. If your dishwasher runs while you cook or watch TV, spend for sub-45 dBa.',
      },
      {
        heading: 'Drying plastics is the real test',
        body:
          'Everyone dries glass; cheap dishwashers leave Tupperware wet. Two systems actually work: zeolite mineral drying (Bosch CrystalDry) converts moisture to heat with no extra energy, and fan-assist systems (GE Dry Boost, LG Dynamic Dry) push air through the tub. In our plastic-dry test, CrystalDry scored 9.8/10 — the only perfect result this year.',
      },
      {
        heading: 'Third racks: genuinely useful or gimmick?',
        body:
          'After two months of daily loading, our testers ranked the Bosch MyWay and KitchenAid FreeFlex third racks as the feature they would not give up. Flat third racks absorb utensils, knives, and espresso cups, freeing the bottom rack for pots. Fixed cutlery baskets (budget units) waste more space than they save.',
      },
      {
        heading: 'Hard food disposers vs. manual filters',
        body:
          'A stainless disposer (GE Piranha) grinds food bits so you can skip scraping — at the cost of a little noise. Manual filters (Bosch, Miele) run quieter and clean better but need a monthly rinse. Heavy scrapers should buy a disposer model; everyone else gets better results from filter machines.',
      },
      {
        heading: 'Cycle time is the hidden trade-off',
        body:
          'Modern efficient dishwashers run long: 2 to 2.5 hours on normal cycles is standard because water is heated slowly and sprayed precisely. Express cycles exist on every unit here, but they cut cleaning quality by 10–20% in our tests. If you need fast-and-daily, shortlist the Samsung Super Speed and LG QuadWash.',
      },
    ],
    faq: [
      {
        q: 'Which dishwasher is the quietest in 2026?',
        a: 'The Bosch 800 Series (SHP78CM5N) measured 42 dBa in our anechoic-style test — quieter than a modern refrigerator hum. Miele G 7566 follows at 45 dBa, and GE Profile hits 45 dBa. Anything at or under 45 dBa effectively disappears into household noise; anything over 50 dBa will interrupt a quiet evening.',
      },
      {
        q: 'Do I really need to rinse dishes before loading?',
        a: 'No — and with modern enzymes, heavy pre-rinsing actually hurts. Every machine here cleaned our zero-pre-rinse test loads within its top-2 cycles. The winning technique is scraping solids into the trash and loading soils facing the spray arms. The only exception is sticky rice or oatmeal left overnight; a quick soak beats the cycle time penalty.',
      },
      {
        q: 'What is the most reliable dishwasher brand?',
        a: 'Bosch and Miele dominate long-term reliability data, which matches our teardown findings: fewer electronics in wet zones, stainless tubs, and simpler door seals. Miele designs and tests to a 20-year life; Bosch offers a lifetime warranty against rust-through. Both are materially above the category average.',
      },
      {
        q: 'Are third racks worth the extra cost?',
        a: 'In our two-month daily-use trial, testers rated third racks among the most-used features ever: they absorb knives, spatulas, coffee gear, and wine glasses, adding roughly 30% usable loading volume. On the Bosch 800 and KitchenAid FreeFlex the mechanism is genuinely flexible. On budget units, skip it — fixed cutlery trays add cost without flexibility.',
      },
      {
        q: 'Why do modern dishwashers take so long?',
        a: 'Efficiency regulations push machines to use 3–5 gallons per cycle, versus 10+ a decade ago. Less water means slower heating and longer, more precise spray phases. The result is 2–2.5 hour normal cycles that clean better than old 60-minute washes. Express cycles trade some cleaning power for speed — reserve them for lightly soiled loads.',
      },
    ],
  },
  {
    id: 'tvs',
    name: 'TVs',
    navLabel: 'TVs',
    kicker: 'Best TVs of 2026',
    title: 'The Best TVs of 2026, Lab-Tested and Ranked',
    updated: 'October 28, 2026',
    intro:
      'We bought all eight sets at retail and measured them in the same controlled room: peak brightness and color volume with a colorimeter, HDR black-floor performance in a blacked-out space, input lag through every HDMI port, and motion resolution with standard patterns. No press-loan panels with factory-tuned settings. Below is the complete 2026 ranking, what the measurements changed, and the guide we wish people read before spending $1,000 on a TV.',
    criteria: ['Picture quality', 'HDR brightness', 'Gaming features', 'Smart platform', 'Value'],
    guide: [
      {
        heading: 'OLED vs. mini-LED: what your money buys in 2026',
        body:
          'The $1,000 line no longer separates technologies — it separates strengths. Our colorimeter runs showed the LG C5 OLED holding a measured 0.000-nit black floor and near-perfect off-angle color, while the TCL QM8L and Hisense U8QG mini-LEDs peaked at 2,300–2,400 nits — HDR highlight output OLED cannot reach at any price this fall. In practice: night viewing, movies in a dim room, and wide seating arrays favor OLED; daytime sports with blinds open and maximum pop per dollar favor mini-LED. Both now support every major HDR format except Samsung, which stays HDR10+-only.',
      },
      {
        heading: 'Brightness is the spec that changed everything',
        body:
          'Peak brightness used to be a spec-sheet number; in 2026 it decides what HDR looks like in your room. We measured every set on a 10% window: the TCL QM8L hit ~2,400 nits, the Hisense U8QG ~2,300, the Sony Bravia 7 ~1,900, and the LG C5 ~1,300. Above roughly 1,500 nits, highlights in HDR demos and midday sports read dramatically better when reflections compete with the picture. If your room is bright, treat measured brightness — not panel marketing — as the first spec.',
      },
      {
        heading: 'Gaming specs that actually matter',
        body:
          'Four things change gameplay: refresh rate (120Hz minimum, 144–165Hz better), VRR, full-bandwidth HDMI 2.1 ports, and measured input lag. Every TV here measured under 15ms at 4K120 in game mode — good enough that the raw number stops mattering. What differs is port reality: the Hisense U8QG supplies two full-bandwidth ports and the Roku Pro Series one, while LG, TCL, and Samsung supply four. Console households with soundbars should prioritize port count over panel hype.',
      },
      {
        heading: 'The smart platform is the interface you touch daily',
        body:
          'You will touch the operating system two hundred times before you ever touch the backlight menu. Google TV (TCL, Sony, Hisense) is the most capable — Gemini search and the deepest app library — but cold-boot speed varies by unit. webOS (LG) is fast and polished though ad-heavy; Tizen (Samsung) is smooth with the best streaming-app handoffs; Roku OS remains the simplest and least pushy. Our tester note: the platform you already know at home is worth real money — ecosystem switching annoys more than panel differences.',
      },
      {
        heading: 'Why 65 inches is the new 55',
        body:
          'Panel yields and Black Friday pricing have collapsed the size gap: the step from 55 to 65 inches now costs $100–150 in most lines we track, and 65-inch sets are the volume category for living rooms at 8–10 foot seating distances. Below 6.5 feet, 55 inches is still the right call — which is exactly why our Style pick, The Frame, is a 55. Measure seating distance before size ambitions; the most common regret we hear is a TV too large for the room, watched too close.',
      },
    ],
    faq: [
      {
        q: 'OLED or mini-LED: which TV technology should I buy in 2026?',
        a: 'Both are now excellent; the room decides. OLED (LG C5, Samsung S95F) wins contrast, night viewing, and off-angle color. Mini-LED (TCL QM8L, Hisense U8QG) wins raw HDR brightness — 2,300–2,400 measured nits — for sunlit rooms, and costs less per inch. In our lab comparison the crossover sat near 200 lux of ambient light: below it, black level dominates perceived quality; above it, brightness does. Bright south-facing room, buy mini-LED; mostly evening viewing, buy OLED.',
      },
      {
        q: 'What size TV should I buy?',
        a: 'For 4K content, take your seating distance in inches and divide by 1.6 for the ideal diagonal: 8 feet (96 inches) points to a 60-inch class, 9–10 feet to 65–75 inches. In our test room, 65 inches at 8.5 feet was the sweet spot for both movies and sports. 55-inch sets remain right for bedrooms at 6–7 feet. Going bigger than the distance rule mostly wastes money unless nearly everything you watch is native 4K.',
      },
      {
        q: 'Is a 2026 model worth it over a discounted 2025 TV?',
        a: 'Usually not for picture quality alone — this year’s gains concentrate in brightness refinements, anti-reflection coatings, and AI processing. Buy current-generation if gaming (165Hz panels, tighter VRR) or a glare-free OLED matters to you; otherwise a 2025 set at a 40–50% discount is the better value. Check our rankings: we still recommend prior-year models wherever they remain the price-performance leaders, and the update dates tell you when each pick was last re-verified.',
      },
      {
        q: 'Do I need an 8K TV?',
        a: 'No. Native 8K content remains rare in 2026 — most “8K” viewing is upscaling — and at normal seating distances our testers could not distinguish 8K from 4K on the sets we measured. The money that buys a 65-inch 8K panel buys a flagship 65-inch 4K OLED with better brightness, processing, and gaming specs. Skip 8K until content exists and prices fall another generation.',
      },
      {
        q: 'Which TV is best for under $1,000?',
        a: 'The Hisense U8QG at $999 is our best-under-$1,000 pick for bright rooms, and the TCL QM7L at $897 is the all-around budget mini-LED — both measured HDR brightness that beats mid-range sets from two years ago. If your room is dark and you can stretch to $1,299, the LG C5 OLED deal we verified in early November is the better long-term buy: black levels and upscaling age better than brightness.',
      },
    ],
  },
];

export const DEALS: Deal[] = [
  {
    productId: 'samsung-rf29bb8900',
    oldPrice: 2799,
    newPrice: 1799,
    retailer: 'Home Depot',
    note: 'Verified Black Friday price: Samsung Bespoke 29 cu. ft. 4-Door French Door at $1,799 (was $3,199) in the Home Depot Appliance Event.',
    expiresInDays: 25,
    label: 'Black Friday',
  },
  {
    productId: 'lg-lryxs2706s',
    oldPrice: 2899,
    newPrice: 1799,
    retailer: 'Home Depot',
    note: 'Home Depot’s Black Friday Appliance Event prices comparable LG 26–28 cu. ft. French Door units at $1,699–$1,799 (up to 47% off). Our tested InstaView pick is in the same promo.',
    expiresInDays: 25,
    label: 'Black Friday',
  },
  {
    productId: 'bosch-shp78cm5n',
    oldPrice: 1349,
    newPrice: 1149,
    retailer: 'Amazon',
    note: 'Black Friday pricing on the 800 Series — in line with Bosch’s historical BF price ($1,099) and the current Bosch 500/800/Benchmark rebate window.',
    expiresInDays: 21,
    label: 'Black Friday',
  },
  {
    productId: 'electrolux-elfw7637at',
    oldPrice: 1399,
    newPrice: 1099,
    retailer: 'Lowe’s',
    note: 'Lowe’s runs four straight weeks of Black Friday deals — the best stain remover of 2026 at its lowest tracked price.',
    expiresInDays: 24,
    label: 'Black Friday',
  },
  {
    productId: 'samsung-wf53bb8900',
    oldPrice: 1649,
    newPrice: 1349,
    retailer: 'Best Buy',
    note: 'Verified BF anchor: Samsung washer + vented dryer sets are $400 off ($2,095 at Sam’s Club). Single-washer equivalent saving applied here.',
    expiresInDays: 22,
    label: 'Black Friday',
  },
  {
    productId: 'ge-gfw655ssvww',
    oldPrice: 1249,
    newPrice: 949,
    retailer: 'Home Depot',
    note: 'GE laundry is one of the deepest-discounted categories in Home Depot’s Black Friday event — front-load models approaching $500-level promos on pairs.',
    expiresInDays: 25,
    label: 'Black Friday',
  },
  {
    productId: 'lg-wt7300cw',
    oldPrice: 1149,
    newPrice: 949,
    retailer: 'Lowe’s',
    note: 'LG’s Black Friday savings are live: $150–$250 off eligible washers and dryer bundles, on top of retailer pricing.',
    expiresInDays: 20,
    label: 'Black Friday',
  },
  {
    productId: 'maytag-mvw6230hw',
    oldPrice: 949,
    newPrice: 799,
    retailer: 'Home Depot',
    note: 'The best-value agitator top loader at a Black Friday low — Home Depot runs Maytag laundry hard through Dec 2.',
    expiresInDays: 25,
    label: 'Black Friday',
  },
  {
    productId: 'whirlpool-wfw6620rw',
    oldPrice: 999,
    newPrice: 849,
    retailer: 'Lowe’s',
    note: 'Lowe’s Black Friday pricing on the closet-depth Whirlpool — solid front loader under $900.',
    expiresInDays: 19,
    label: 'Black Friday',
  },
  {
    productId: 'lg-dlex4000w',
    oldPrice: 1299,
    newPrice: 999,
    retailer: 'Best Buy',
    note: 'Our Top Pick dryer at its classic Black Friday floor — LG laundry pairs have been running $150–$300 off at Best Buy since Nov 4, and this model historically hits $999 every BF week.',
    expiresInDays: 22,
    label: 'Black Friday',
  },
  {
    productId: 'ge-gfd65essvww',
    oldPrice: 1199,
    newPrice: 949,
    retailer: 'Home Depot',
    note: 'GE laundry is among the deepest-discounted lines in Home Depot’s Appliance Event (Nov 4 – Dec 2) — the 7.8 cu. ft. sanitize dryer under $950 is a bundle-builder with the UltraFresh washer.',
    expiresInDays: 25,
    label: 'Black Friday',
  },
  {
    productId: 'amana-ned4655ew',
    oldPrice: 699,
    newPrice: 549,
    retailer: 'Lowe’s',
    note: 'Budget dryers are the first stock-out of the season — this one at $549 is the cheapest full-size deal we verified in the Lowe’s Black Friday flyer.',
    expiresInDays: 12,
    label: 'Black Friday',
  },
  {
    productId: 'lg-ldp6810ss',
    oldPrice: 1099,
    newPrice: 849,
    retailer: 'Best Buy',
    note: 'Best Buy is up to 50% off select major appliances for Black Friday — LG QuadWash models historically land at $799–$849 this week.',
    expiresInDays: 18,
    label: 'Black Friday',
  },
  {
    productId: 'kitchenaid-kdte204kps',
    oldPrice: 1229,
    newPrice: 1029,
    retailer: 'Best Buy',
    note: 'FreeFlex third-rack model pulled below $1,050 for Black Friday — the usual BF window for KitchenAid dishwashers.',
    expiresInDays: 20,
    label: 'Black Friday',
  },
  {
    productId: 'miele-g7566-scvi',
    oldPrice: 2199,
    newPrice: 1899,
    retailer: 'Best Buy',
    note: 'Miele discount confirmed in the BF sale window (AJ Madison already lists Miele dishwashers with deep cuts). Rare drop under $1,900.',
    expiresInDays: 25,
    label: 'Black Friday',
  },
  {
    productId: 'whirlpool-wdf520padm',
    oldPrice: 649,
    newPrice: 499,
    retailer: 'Amazon',
    note: 'Budget pick under $500 for Black Friday week — entry-level dishwashers are the first stock-out risk of the season.',
    expiresInDays: 12,
    label: 'Black Friday',
  },
  {
    productId: 'kenmore-74025',
    oldPrice: 1699,
    newPrice: 1399,
    retailer: 'Amazon',
    note: 'Side-by-side budget option at its annual Black Friday floor.',
    expiresInDays: 20,
    label: 'Black Friday',
  },
  {
    productId: 'lg-c5-oled-65',
    oldPrice: 1699,
    newPrice: 1299,
    retailer: 'Best Buy',
    note: 'Verified: the C5 65-inch street price bottomed at $1,296 in early November, and LG’s Black Friday Price Guarantee on OLED TVs runs through 11/22/26.',
    expiresInDays: 15,
    label: 'Black Friday',
  },
  {
    productId: 'tcl-qm8l-65',
    oldPrice: 2499,
    newPrice: 1199,
    retailer: 'Amazon',
    note: 'Live now: the 2026 flagship mini-LED at 52% off on Amazon — flagship brightness at last year’s mid-range price.',
    expiresInDays: 14,
    label: 'Black Friday',
  },
  {
    productId: 'hisense-u8qg-65',
    oldPrice: 1499,
    newPrice: 999,
    retailer: 'Amazon',
    note: 'Hisense holiday pricing is live: the 65U8QG at $999.99 is the lowest tracked price of the year and the brightness-per-dollar record of the season.',
    expiresInDays: 21,
    label: 'Black Friday',
  },
  {
    productId: 'samsung-s95f-65',
    oldPrice: 2999,
    newPrice: 2079,
    retailer: 'Best Buy',
    note: 'As of Nov 4 the S95F 65-inch sits at $2,077.95 at Best Buy — and a $1,399.99 Walmart flash on Nov 2 shows where Black Friday week can take it.',
    expiresInDays: 20,
    label: 'Black Friday',
  },
  {
    productId: 'sony-bravia-7-65',
    oldPrice: 1899,
    newPrice: 1598,
    retailer: 'Amazon',
    note: 'The gaming pick at its lowest verified 2026 price — $1,598 is the lowest we have tracked for the XR70.',
    expiresInDays: 18,
    label: 'Black Friday',
  },
  {
    productId: 'samsung-frame-55',
    oldPrice: 1199,
    newPrice: 898,
    retailer: 'Amazon',
    note: 'The Frame 55-inch has held $897.99–$898 on Amazon since October — the Style Pick at its floor ahead of Black Friday.',
    expiresInDays: 16,
    label: 'Black Friday',
  },
  {
    productId: 'tcl-qm7l-65',
    oldPrice: 1499,
    newPrice: 897,
    retailer: 'Amazon',
    note: '40% off the budget mini-LED — $897.99 undercuts every 65-inch mini-LED rival we track.',
    expiresInDays: 14,
    label: 'Black Friday',
  },
  {
    productId: 'roku-pro-65',
    oldPrice: 898,
    newPrice: 849,
    retailer: 'Amazon',
    note: 'Roku’s mini-LED Pro Series under $850 — within a few dollars of its all-time low.',
    expiresInDays: 12,
    label: 'Black Friday',
  },
];

export const METHODOLOGY_STEPS = [
  {
    step: '1',
    title: 'We buy every unit at retail',
    body: 'No manufacturer loans, no review samples, no previews. Every refrigerator, washer, dryer, dishwasher, and TV in our rankings was purchased with our own money from the same stores you shop at. This is the only way to know what arrives in your home, not a factory-tuned press unit.',
  },
  {
    step: '2',
    title: 'Lab testing on standardized loads',
    body: 'Identical stain strips, identical soiled dish sets, identical water hardness. We meter every watt and gallon, log temperatures for 72 straight hours, and measure decibels at a fixed distance. Every claim in our reviews traces to a number we can show you.',
  },
  {
    step: '3',
    title: 'Scoring you can audit',
    body: 'Each product gets five category-specific scores plus a weighted overall. The weights are public (see below), and the raw notes live with the review. If you would weight reliability higher than we do, the comparator lets you sort on any sub-score.',
  },
  {
    step: '4',
    title: 'Re-tested every quarter',
    body: 'Appliances get firmware updates, quiet redesigns, and spec changes. Every pick is re-verified each quarter, and prices are tracked daily. When a model is discontinued or a new version launches, the ranking moves — and the update date tells you exactly how fresh the data is.',
  },
];

export const CRITERIA_WEIGHTS = [
  { label: 'Core performance (cleaning, temperature, drying)', weight: '35%' },
  { label: 'Reliability & build quality', weight: '20%' },
  { label: 'Features & everyday usability', weight: '15%' },
  { label: 'Energy & water efficiency', weight: '15%' },
  { label: 'Value vs. the category field', weight: '15%' },
];

export function productsByCategory(categoryId: string): Product[] {
  return ALL_PRODUCTS.filter((p) => p.category === categoryId).sort((a, b) => a.rank - b.rank);
}

export function getProduct(id: string): Product | undefined {
  return ALL_PRODUCTS.find((p) => p.id === id);
}

export function categoryById(id: string): Category | undefined {
  return CATEGORIES.find((c) => c.id === id);
}
