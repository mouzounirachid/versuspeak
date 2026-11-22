export type CatalogOffer = { listingModel: string; variant: string; locationContext: string; seller: string; url: string; price: number; currency: "USD"; checkedAt: string; availability: string; terms: string };
export type CatalogProduct = { id: string; category: string; brand: string; name: string; originalModel: string; status: "verified" | "pending"; specs: {label:string;value:string}[]; sourceUrl: string | null; sourceTitle: string; checkedAt: string; note: string; offers: CatalogOffer[] };
export const CATALOG: CatalogProduct[] = [
  {
    "id": "lg-lryxs2706s",
    "category": "refrigerators",
    "brand": "LG",
    "name": "LG LRYXS2706S",
    "originalModel": "LRYXS2706S",
    "status": "pending",
    "specs": [],
    "sourceUrl": null,
    "sourceTitle": "Manufacturer documentation",
    "checkedAt": "2026-11-22",
    "note": "Exact LRYXS2706S could not be confirmed. Search returned LRSXS2706S, a different side-by-side model. No substitution made.",
    "offers": []
  },
  {
    "id": "samsung-rf29bb8900",
    "category": "refrigerators",
    "brand": "Samsung",
    "name": "Samsung RF29BB8900",
    "originalModel": "RF29BB8900",
    "status": "verified",
    "specs": [
      {
        "label": "Design",
        "value": "4-door French door"
      },
      {
        "label": "Published capacity",
        "value": "28.6 cu. ft. (29 class)"
      }
    ],
    "sourceUrl": "https://image-us.samsung.com/SamsungUS/home/home-appliances/refrigerators/bespoke/09262023/RF29BB8900_V17.pdf",
    "sourceTitle": "Manufacturer documentation",
    "checkedAt": "2026-11-22",
    "note": "",
    "offers": [
      {
        "seller": "Lowe's",
        "url": "https://www.lowes.com/pd/-/5013377689",
        "price": 3899,
        "currency": "USD",
        "checkedAt": "2026-11-22T22:36:40Z",
        "availability": "Stock and delivery not verified",
        "terms": "Public US page snapshot. Tax, delivery, installation and location-specific pricing are not included. Confirm the exact model and final offer at the seller. Door panels sold separately. This is not the charcoal-glass RF29BB89008M variant.",
        "listingModel": "RF29BB8900AW",
        "variant": "Custom panel ready",
        "locationContext": "No ZIP supplied; seller-page location not established"
      },
      {
        "seller": "Home Depot",
        "url": "https://www.homedepot.com/p/Samsung-Bespoke-29-cu-ft-4-Door-French-Door-Smart-Refrigerator-with-Family-Hub-in-Charcoal-Glass-Matte-Black-Standard-Depth-RF29BB89008M/319923566",
        "price": 3779,
        "currency": "USD",
        "checkedAt": "2026-11-22T22:36:40Z",
        "availability": "Stock and delivery not verified",
        "terms": "Public US page snapshot. Tax, delivery, installation and location-specific pricing are not included. Confirm the exact model and final offer at the seller. Different finish/configuration from RF29BB8900AW; not a like-for-like price comparison.",
        "listingModel": "RF29BB89008M",
        "variant": "Charcoal glass / matte black",
        "locationContext": "No ZIP supplied; seller-page location not established"
      }
    ]
  },
  {
    "id": "bosch-b36cl80ens",
    "category": "refrigerators",
    "brand": "Bosch",
    "name": "Bosch B36CL80ENS",
    "originalModel": "B36CL80ENS",
    "status": "verified",
    "specs": [
      {
        "label": "Design",
        "value": "Counter-depth, 4-door"
      },
      {
        "label": "Published capacity",
        "value": "20.5 cu. ft."
      }
    ],
    "sourceUrl": "https://media3.bsh-group.com/Documents/specsheet/en-US/B36CL80ENS.pdf",
    "sourceTitle": "Manufacturer documentation",
    "checkedAt": "2026-11-22",
    "note": "",
    "offers": [
      {
        "seller": "AJ Madison",
        "url": "https://www.ajmadison.com/cgi-bin/ajmadison/B36CL80ENS.html",
        "price": 4599,
        "currency": "USD",
        "checkedAt": "2026-11-22T22:36:40Z",
        "availability": "Stock and delivery not verified",
        "terms": "Public US page snapshot. Tax, delivery, installation and location-specific pricing are not included. Confirm the exact model and final offer at the seller.",
        "listingModel": "B36CL80ENS",
        "variant": "",
        "locationContext": "No ZIP supplied; seller-page location not established"
      },
      {
        "seller": "Lowe's",
        "url": "https://www.lowes.com/pd/Bosch-800-21-cu-ft-4-Door-Counter-depth-French-Door-Refr/1001330226",
        "price": 3599,
        "currency": "USD",
        "checkedAt": "2026-11-22T22:36:40Z",
        "availability": "Stock and delivery not verified",
        "terms": "Public US page snapshot. Tax, delivery, installation and location-specific pricing are not included. Confirm the exact model and final offer at the seller.",
        "listingModel": "B36CL80ENS",
        "variant": "",
        "locationContext": "No ZIP supplied; seller-page location not established"
      }
    ]
  },
  {
    "id": "ge-profile-pwe23kynfs",
    "category": "refrigerators",
    "brand": "GE Profile",
    "name": "GE Profile PWE23KYNFS",
    "originalModel": "PWE23KYNFS",
    "status": "verified",
    "specs": [
      {
        "label": "Design",
        "value": "Counter-depth French door"
      },
      {
        "label": "Published capacity",
        "value": "23.1 cu. ft."
      }
    ],
    "sourceUrl": "https://www.geappliances.com/appliance/GE-Profile-ENERGY-STAR-23-1-Cu-Ft-Counter-Depth-Fingerprint-Resistant-French-Door-Refrigerator-PWE23KYNFS",
    "sourceTitle": "Manufacturer documentation",
    "checkedAt": "2026-11-22",
    "note": "",
    "offers": [
      {
        "seller": "Home Depot",
        "url": "https://www.homedepot.com/p/GE-Profile-23-1-cu-ft-French-Door-Refrigerator-in-Fingerprint-Resistant-Stainless-Steel-Counter-Depth-ENERGY-STAR-PWE23KYNFS/312648545",
        "price": 3149,
        "currency": "USD",
        "checkedAt": "2026-11-22T22:36:40Z",
        "availability": "Stock and delivery not verified",
        "terms": "Public US page snapshot. Tax, delivery, installation and location-specific pricing are not included. Confirm the exact model and final offer at the seller.",
        "listingModel": "PWE23KYNFS",
        "variant": "",
        "locationContext": "No ZIP supplied; seller-page location not established"
      },
      {
        "seller": "AJ Madison",
        "url": "https://www.ajmadison.com/cgi-bin/ajmadison/PWE23KYNFS.html",
        "price": 3143,
        "currency": "USD",
        "checkedAt": "2026-11-22T22:36:40Z",
        "availability": "Stock and delivery not verified",
        "terms": "Public US page snapshot. Tax, delivery, installation and location-specific pricing are not included. Confirm the exact model and final offer at the seller.",
        "listingModel": "PWE23KYNFS",
        "variant": "",
        "locationContext": "No ZIP supplied; seller-page location not established"
      }
    ]
  },
  {
    "id": "whirlpool-wrf535swhz",
    "category": "refrigerators",
    "brand": "Whirlpool",
    "name": "Whirlpool WRF535SWHZ",
    "originalModel": "WRF535SWHZ",
    "status": "verified",
    "specs": [
      {
        "label": "Design",
        "value": "French door"
      },
      {
        "label": "Published capacity",
        "value": "25 cu. ft."
      }
    ],
    "sourceUrl": "https://www.whirlpool.com/content/dam/global/documents/202001/specification-sheet-wrf535swhspecsheetv01.pdf",
    "sourceTitle": "Manufacturer documentation",
    "checkedAt": "2026-11-22",
    "note": "",
    "offers": [
      {
        "seller": "Home Depot",
        "url": "https://www.homedepot.com/p/Whirlpool-25-2-cu-ft-French-Door-Refrigerator-in-Fingerprint-Resistant-Stainless-Steel-with-Internal-Water-Dispenser-WRF535SWHZ/301688547",
        "price": 2399,
        "currency": "USD",
        "checkedAt": "2026-11-22T22:36:40Z",
        "availability": "Stock and delivery not verified",
        "terms": "Public US page snapshot. Tax, delivery, installation and location-specific pricing are not included. Confirm the exact model and final offer at the seller.",
        "listingModel": "WRF535SWHZ",
        "variant": "",
        "locationContext": "No ZIP supplied; seller-page location not established"
      },
      {
        "seller": "Lowe's",
        "url": "https://www.lowes.com/pd/Whirlpool-25-2-cu-ft-French-Door-Refrigerator-with-Ice-Maker-Fingerprint-Resistant-Stainless-Steel-ENERGY-STAR/1000228559",
        "price": 2399,
        "currency": "USD",
        "checkedAt": "2026-11-22T22:36:40Z",
        "availability": "Stock and delivery not verified",
        "terms": "Public US page snapshot. Tax, delivery, installation and location-specific pricing are not included. Confirm the exact model and final offer at the seller.",
        "listingModel": "WRF535SWHZ",
        "variant": "",
        "locationContext": "No ZIP supplied; seller-page location not established"
      }
    ]
  },
  {
    "id": "maytag-mfi2570fez",
    "category": "refrigerators",
    "brand": "Maytag",
    "name": "Maytag MFI2570FEZ",
    "originalModel": "MFI2570FEZ",
    "status": "verified",
    "specs": [
      {
        "label": "Design",
        "value": "French door"
      },
      {
        "label": "Published capacity",
        "value": "25 cu. ft."
      }
    ],
    "sourceUrl": "https://www.maytag.com/content/dam/global/documents/202001/specification-sheet-mfi2570fespecsheetv01.pdf",
    "sourceTitle": "Manufacturer documentation",
    "checkedAt": "2026-11-22",
    "note": "",
    "offers": [
      {
        "seller": "AJ Madison",
        "url": "https://www.ajmadison.com/cgi-bin/ajmadison/MFI2570FEZ.html",
        "price": 2518,
        "currency": "USD",
        "checkedAt": "2026-11-22T22:36:40Z",
        "availability": "Stock and delivery not verified",
        "terms": "Public US page snapshot. Tax, delivery, installation and location-specific pricing are not included. Confirm the exact model and final offer at the seller.",
        "listingModel": "MFI2570FEZ",
        "variant": "",
        "locationContext": "No ZIP supplied; seller-page location not established"
      },
      {
        "seller": "Home Depot",
        "url": "https://www.homedepot.com/p/Maytag-25-cu-ft-French-Door-Refrigerator-in-Fingerprint-Resistant-Stainless-Steel-MFI2570FEZ/207141766",
        "price": 2799,
        "currency": "USD",
        "checkedAt": "2026-11-22T22:36:40Z",
        "availability": "Stock and delivery not verified",
        "terms": "Public US page snapshot. Tax, delivery, installation and location-specific pricing are not included. Confirm the exact model and final offer at the seller.",
        "listingModel": "MFI2570FEZ",
        "variant": "",
        "locationContext": "No ZIP supplied; seller-page location not established"
      }
    ]
  },
  {
    "id": "frigidaire-grfs2853af",
    "category": "refrigerators",
    "brand": "Frigidaire Gallery",
    "name": "Frigidaire GRFS2853AF",
    "originalModel": "GRFS2853AF",
    "status": "verified",
    "specs": [
      {
        "label": "Design",
        "value": "Standard-depth French door"
      },
      {
        "label": "Published capacity",
        "value": "28 cu. ft. class"
      }
    ],
    "sourceUrl": "https://na2.electroluxmedia.com/Original/Electrolux/Electrolux%20Assets/Document/Product%20Specifications%20Sheet/Canadian%20English/GRFS2853A_CA.pdf",
    "sourceTitle": "Manufacturer documentation",
    "checkedAt": "2026-11-22",
    "note": "Manufacturer Canadian sheet explicitly lists this exact model. Confirm US configuration before buying.",
    "offers": [
      {
        "seller": "Home Depot",
        "url": "https://www.homedepot.com/p/Frigidaire-Gallery-36-in-28-cu-ft-Standard-Depth-French-Door-Refrigerator-in-Smudge-Proof-Stainless-Steel-with-Dual-Ice-Maker-GRFS2853AF/320154348",
        "price": 1999,
        "currency": "USD",
        "checkedAt": "2026-11-22T22:36:40Z",
        "availability": "Stock and delivery not verified",
        "terms": "Public US page snapshot. Tax, delivery, installation and location-specific pricing are not included. Confirm the exact model and final offer at the seller.",
        "listingModel": "GRFS2853AF",
        "variant": "",
        "locationContext": "No ZIP supplied; seller-page location not established"
      },
      {
        "seller": "AJ Madison",
        "url": "https://www.ajmadison.com/cgi-bin/ajmadison/GRFS2853AF.html",
        "price": 3349,
        "currency": "USD",
        "checkedAt": "2026-11-22T22:36:40Z",
        "availability": "Stock and delivery not verified",
        "terms": "Public US page snapshot. Tax, delivery, installation and location-specific pricing are not included. Confirm the exact model and final offer at the seller.",
        "listingModel": "GRFS2853AF",
        "variant": "",
        "locationContext": "No ZIP supplied; seller-page location not established"
      }
    ]
  },
  {
    "id": "kenmore-74025",
    "category": "refrigerators",
    "brand": "Kenmore",
    "name": "Kenmore 74025",
    "originalModel": "74025",
    "status": "pending",
    "specs": [],
    "sourceUrl": null,
    "sourceTitle": "Manufacturer documentation",
    "checkedAt": "2026-11-22",
    "note": "Exact 74025 manufacturer documentation not confirmed. Search returned 74027, a different model. Old 25.6 cu. ft. side-by-side description is not retained.",
    "offers": []
  },
  {
    "id": "lg-wm4000hwa",
    "category": "washers",
    "brand": "LG",
    "name": "LG WM4000HWA",
    "originalModel": "WM4000HWA",
    "status": "verified",
    "specs": [
      {
        "label": "Loading",
        "value": "Front load"
      },
      {
        "label": "Published capacity",
        "value": "4.5 cu. ft."
      }
    ],
    "sourceUrl": "https://www.lg.com/us/support/products/documents/WM4000H_A_spec_sheet.pdf",
    "sourceTitle": "Manufacturer documentation",
    "checkedAt": "2026-11-22",
    "note": "",
    "offers": [
      {
        "seller": "Home Depot",
        "url": "https://www.homedepot.com/p/LG-4-5-Cu-Ft-Stackable-SMART-Front-Load-Washer-in-White-with-Steam-and-TurboWash360-Technology-WM4000HWA/312440202",
        "price": 929,
        "currency": "USD",
        "checkedAt": "2026-11-22T22:36:40Z",
        "availability": "Stock and delivery not verified",
        "terms": "Public US page snapshot. Tax, delivery, installation and location-specific pricing are not included. Confirm the exact model and final offer at the seller.",
        "listingModel": "WM4000HWA",
        "variant": "",
        "locationContext": "No ZIP supplied; seller-page location not established"
      },
      {
        "seller": "Lowe's",
        "url": "https://www.lowes.com/pd/LG-High-Efficiency-Stackable-Front-Load-Washer-with-Steam-Cycle-White-ENERGY-STAR/1003203118",
        "price": 899,
        "currency": "USD",
        "checkedAt": "2026-11-22T22:38:07Z",
        "availability": "Stock and delivery not verified",
        "terms": "Public US page snapshot. Tax, delivery, installation and location-specific pricing are not included. Confirm the exact model and final offer at the seller. Offer date shown as Nov 25. Local price may differ elsewhere.",
        "listingModel": "WM4000HWA",
        "variant": "White",
        "locationContext": "Seller session default: Sterling Lowe's, ZIP 20166"
      }
    ]
  },
  {
    "id": "electrolux-elfw7637at",
    "category": "washers",
    "brand": "Electrolux",
    "name": "Electrolux ELFW7637AT",
    "originalModel": "ELFW7637AT",
    "status": "verified",
    "specs": [
      {
        "label": "Loading",
        "value": "Front load"
      },
      {
        "label": "Published capacity",
        "value": "4.5 cu. ft."
      }
    ],
    "sourceUrl": "https://na2.electroluxmedia.com/Original/Electrolux/Electrolux%20Assets/Document/Product%20Specifications%20Sheet/English/ELFW7637A_EN.pdf",
    "sourceTitle": "Manufacturer documentation",
    "checkedAt": "2026-11-22",
    "note": "",
    "offers": [
      {
        "seller": "Home Depot",
        "url": "https://www.homedepot.com/p/Electrolux-4-5-cu-ft-Stackable-Front-Load-Washer-in-Titanium-with-SmartBoost-Optic-Whites-and-Pure-Rinse-ELFW7637AT/318268534",
        "price": 949,
        "currency": "USD",
        "checkedAt": "2026-11-22T22:36:40Z",
        "availability": "Stock and delivery not verified",
        "terms": "Public US page snapshot. Tax, delivery, installation and location-specific pricing are not included. Confirm the exact model and final offer at the seller.",
        "listingModel": "ELFW7637AT",
        "variant": "",
        "locationContext": "No ZIP supplied; seller-page location not established"
      },
      {
        "seller": "AJ Madison",
        "url": "https://www.ajmadison.com/cgi-bin/ajmadison/ELFW7637AT.html",
        "price": 1549,
        "currency": "USD",
        "checkedAt": "2026-11-22T22:36:40Z",
        "availability": "Stock and delivery not verified",
        "terms": "Public US page snapshot. Tax, delivery, installation and location-specific pricing are not included. Confirm the exact model and final offer at the seller.",
        "listingModel": "ELFW7637AT",
        "variant": "",
        "locationContext": "No ZIP supplied; seller-page location not established"
      }
    ]
  },
  {
    "id": "samsung-wf53bb8900",
    "category": "washers",
    "brand": "Samsung",
    "name": "Samsung WF53BB8900",
    "originalModel": "WF53BB8900HDUS",
    "status": "verified",
    "specs": [
      {
        "label": "Loading",
        "value": "Front load"
      },
      {
        "label": "Published capacity",
        "value": "5.3 cu. ft."
      }
    ],
    "sourceUrl": "https://image-us.samsung.com/SamsungUS/home/05312023/pdf/2022_WF53BB8900_V10.pdf",
    "sourceTitle": "Manufacturer documentation",
    "checkedAt": "2026-11-22",
    "note": "Series verified; finish and full US suffix must match the seller listing.",
    "offers": [
      {
        "seller": "AJ Madison",
        "url": "https://www.ajmadison.com/cgi-bin/ajmadison/WF53BB8900AD.html",
        "price": 1199,
        "currency": "USD",
        "checkedAt": "2026-11-22T22:36:40Z",
        "availability": "Stock and delivery not verified",
        "terms": "Public US page snapshot. Tax, delivery, installation and location-specific pricing are not included. Confirm the exact model and final offer at the seller.",
        "listingModel": "WF53BB8900AD",
        "variant": "Brushed Navy",
        "locationContext": "No ZIP supplied; seller-page location not established"
      },
      {
        "seller": "Home Depot",
        "url": "https://www.homedepot.com/p/Samsung-Bespoke-5-3-cu-ft-Ultra-Capacity-Smart-Front-Load-Washer-in-Brushed-Navy-with-AI-OptiWash-and-Auto-Dispense-WF53BB8900AD/320703580",
        "price": 1199,
        "currency": "USD",
        "checkedAt": "2026-11-22T22:36:40Z",
        "availability": "Stock and delivery not verified",
        "terms": "Public US page snapshot. Tax, delivery, installation and location-specific pricing are not included. Confirm the exact model and final offer at the seller.",
        "listingModel": "WF53BB8900AD",
        "variant": "Brushed Navy",
        "locationContext": "No ZIP supplied; seller-page location not established"
      }
    ]
  },
  {
    "id": "ge-gfw655ssvww",
    "category": "washers",
    "brand": "GE",
    "name": "GE GFW655SSVWW",
    "originalModel": "GFW655SSVWW",
    "status": "verified",
    "specs": [
      {
        "label": "Loading",
        "value": "Front load"
      },
      {
        "label": "Published capacity",
        "value": "5.0 cu. ft."
      }
    ],
    "sourceUrl": "https://products-salsify.geappliances.com/image/upload/s--CZqzgVw1--/qbmqpqdt8vbfbr5a4na0.pdf",
    "sourceTitle": "Manufacturer documentation",
    "checkedAt": "2026-11-22",
    "note": "Corrected from the old 4.8 cu. ft. description.",
    "offers": [
      {
        "seller": "Home Depot",
        "url": "https://www.homedepot.com/p/GE-5-0-cu-ft-Smart-Front-Load-Washer-in-White-with-Steam-UltraFresh-Vent-System-and-Microban-Technology-GFW655SSVWW/326536621",
        "price": 899,
        "currency": "USD",
        "checkedAt": "2026-11-22T22:36:40Z",
        "availability": "Stock and delivery not verified",
        "terms": "Public US page snapshot. Tax, delivery, installation and location-specific pricing are not included. Confirm the exact model and final offer at the seller.",
        "listingModel": "GFW655SSVWW",
        "variant": "",
        "locationContext": "No ZIP supplied; seller-page location not established"
      },
      {
        "seller": "AJ Madison",
        "url": "https://www.ajmadison.com/cgi-bin/ajmadison/GFW655SSVWW.html",
        "price": 1249,
        "currency": "USD",
        "checkedAt": "2026-11-22T22:36:40Z",
        "availability": "Stock and delivery not verified",
        "terms": "Public US page snapshot. Tax, delivery, installation and location-specific pricing are not included. Confirm the exact model and final offer at the seller.",
        "listingModel": "GFW655SSVWW",
        "variant": "",
        "locationContext": "No ZIP supplied; seller-page location not established"
      }
    ]
  },
  {
    "id": "speed-queen-tc5",
    "category": "washers",
    "brand": "Speed Queen",
    "name": "Speed Queen TC5003WN (TC5)",
    "originalModel": "TC5",
    "status": "verified",
    "specs": [
      {
        "label": "Loading",
        "value": "Top load"
      },
      {
        "label": "Published capacity",
        "value": "3.2 cu. ft."
      }
    ],
    "sourceUrl": "https://speedqueen.com/wp-content/uploads/2024/07/AR24-0076_SpecSheet_TLW_en-US.pdf",
    "sourceTitle": "Manufacturer documentation",
    "checkedAt": "2026-11-22",
    "note": "TC5 series resolved to the exact white TC5003WN model.",
    "offers": [
      {
        "seller": "Brothers Main",
        "url": "https://www.brothersmain.com/appliances/laundry/washers/traditional-top-load-washer/speed-queen/TC5003WN",
        "price": 1499,
        "currency": "USD",
        "checkedAt": "2026-11-22T22:36:40Z",
        "availability": "Stock and delivery not verified",
        "terms": "Public US page snapshot. Tax, delivery, installation and location-specific pricing are not included. Confirm the exact model and final offer at the seller.",
        "listingModel": "TC5003WN",
        "variant": "",
        "locationContext": "No ZIP supplied; seller-page location not established"
      },
      {
        "seller": "Texas Appliance",
        "url": "https://www.txappliance.com/product/speed-queen-tc5-32-cu-ft-white-agitator-top-load-washer-tc5003wn-672423",
        "price": 1498.99,
        "currency": "USD",
        "checkedAt": "2026-11-22T22:36:40Z",
        "availability": "Stock and delivery not verified",
        "terms": "Public US page snapshot. Tax, delivery, installation and location-specific pricing are not included. Confirm the exact model and final offer at the seller.",
        "listingModel": "TC5003WN",
        "variant": "",
        "locationContext": "Seller page default: Hurst, TX 76054"
      }
    ]
  },
  {
    "id": "maytag-mvw6230hw",
    "category": "washers",
    "brand": "Maytag",
    "name": "Maytag MVW6230HW",
    "originalModel": "MVW6230HW",
    "status": "verified",
    "specs": [
      {
        "label": "Loading",
        "value": "Top load"
      },
      {
        "label": "Published capacity",
        "value": "4.7 cu. ft."
      }
    ],
    "sourceUrl": "https://www.maytag.com/washers-and-dryers/washers/top-load-washers/p.smart-capable-top-load-washer-with-extra-power-button-4.7-cu.-ft.mvw6230hw.html",
    "sourceTitle": "Manufacturer documentation",
    "checkedAt": "2026-11-22",
    "note": "Corrected from the old 4.8 cu. ft. description.",
    "offers": [
      {
        "seller": "Home Depot",
        "url": "https://www.homedepot.com/p/Maytag-4-7-cu-ft-Smart-Capable-White-Top-Load-Washing-Machine-with-Extra-Power-and-Deep-Fill-Option-MVW6230HW/312388550",
        "price": 1049,
        "currency": "USD",
        "checkedAt": "2026-11-22T22:36:40Z",
        "availability": "Stock and delivery not verified",
        "terms": "Public US page snapshot. Tax, delivery, installation and location-specific pricing are not included. Confirm the exact model and final offer at the seller.",
        "listingModel": "MVW6230HW",
        "variant": "",
        "locationContext": "No ZIP supplied; seller-page location not established"
      }
    ]
  },
  {
    "id": "whirlpool-wfw6620rw",
    "category": "washers",
    "brand": "Whirlpool",
    "name": "Whirlpool WFW6620RW",
    "originalModel": "WFW6620RW",
    "status": "pending",
    "specs": [],
    "sourceUrl": null,
    "sourceTitle": "Manufacturer documentation",
    "checkedAt": "2026-11-22",
    "note": "Exact WFW6620RW could not be confirmed. The manufacturer search returns other suffixes/models; their specifications are not substituted.",
    "offers": []
  },
  {
    "id": "lg-wt7300cw",
    "category": "washers",
    "brand": "LG",
    "name": "LG WT7300CW",
    "originalModel": "WT7300CW",
    "status": "verified",
    "specs": [
      {
        "label": "Loading",
        "value": "Top load"
      },
      {
        "label": "Published capacity",
        "value": "5.0 cu. ft."
      }
    ],
    "sourceUrl": "https://www.lg.com/us/business/download/resources/CT00021979/WT7300C_%20LG%20Builder%20Spec%20Sheet[20220108_010513].pdf",
    "sourceTitle": "Manufacturer documentation",
    "checkedAt": "2026-11-22",
    "note": "Corrected from the old 5.5 cu. ft. description.",
    "offers": [
      {
        "seller": "Home Depot",
        "url": "https://www.homedepot.com/p/LG-5-0-Cu-Ft-SMART-Top-Load-Washer-in-White-with-TurboWash3D-Technology-WT7300CW/308664834",
        "price": 999,
        "currency": "USD",
        "checkedAt": "2026-11-22T22:36:40Z",
        "availability": "Stock and delivery not verified",
        "terms": "Public US page snapshot. Tax, delivery, installation and location-specific pricing are not included. Confirm the exact model and final offer at the seller.",
        "listingModel": "WT7300CW",
        "variant": "",
        "locationContext": "No ZIP supplied; seller-page location not established"
      }
    ]
  },
  {
    "id": "lg-dlex4000w",
    "category": "dryers",
    "brand": "LG",
    "name": "LG DLEX4000W",
    "originalModel": "DLEX4000W",
    "status": "verified",
    "specs": [
      {
        "label": "Energy",
        "value": "Electric"
      },
      {
        "label": "Published capacity",
        "value": "7.4 cu. ft."
      }
    ],
    "sourceUrl": "https://www.lg.com/us/support/products/documents/DLEX4000_%20DLGX4001_%20Spec%20Sheet.pdf",
    "sourceTitle": "Manufacturer documentation",
    "checkedAt": "2026-11-22",
    "note": "",
    "offers": [
      {
        "seller": "Home Depot",
        "url": "https://www.homedepot.com/p/LG-7-4-Cu-Ft-Vented-SMART-Stackable-Electric-Dryer-in-White-with-TurboSteam-and-Sensor-Dry-Technology-DLEX4000W/312440282",
        "price": 929,
        "currency": "USD",
        "checkedAt": "2026-11-22T22:36:40Z",
        "availability": "Stock and delivery not verified",
        "terms": "Public US page snapshot. Tax, delivery, installation and location-specific pricing are not included. Confirm the exact model and final offer at the seller.",
        "listingModel": "DLEX4000W",
        "variant": "",
        "locationContext": "No ZIP supplied; seller-page location not established"
      },
      {
        "seller": "AJ Madison",
        "url": "https://www.ajmadison.com/cgi-bin/ajmadison/DLEX4000W.html",
        "price": 1199,
        "currency": "USD",
        "checkedAt": "2026-11-22T22:36:40Z",
        "availability": "Stock and delivery not verified",
        "terms": "Public US page snapshot. Tax, delivery, installation and location-specific pricing are not included. Confirm the exact model and final offer at the seller.",
        "listingModel": "DLEX4000W",
        "variant": "",
        "locationContext": "No ZIP supplied; seller-page location not established"
      }
    ]
  },
  {
    "id": "electrolux-elfe7637at",
    "category": "dryers",
    "brand": "Electrolux",
    "name": "Electrolux ELFE7637AT",
    "originalModel": "ELFE7637AT",
    "status": "verified",
    "specs": [
      {
        "label": "Energy",
        "value": "Electric"
      },
      {
        "label": "Published capacity",
        "value": "8.0 cu. ft."
      }
    ],
    "sourceUrl": "https://na2.electroluxmedia.com/Original/Electrolux/Electrolux%20Assets/Document/Product%20Specifications%20Sheet/English/ELFE7637A_EN.pdf",
    "sourceTitle": "Manufacturer documentation",
    "checkedAt": "2026-11-22",
    "note": "",
    "offers": [
      {
        "seller": "Home Depot",
        "url": "https://www.homedepot.com/p/Electrolux-8-cu-ft-vented-Front-Load-Stackable-Electric-Dryer-in-Titanium-with-LuxCare-Dry-and-Perfect-Steam-ELFE7637AT/318207113",
        "price": 949,
        "currency": "USD",
        "checkedAt": "2026-11-22T22:36:40Z",
        "availability": "Stock and delivery not verified",
        "terms": "Public US page snapshot. Tax, delivery, installation and location-specific pricing are not included. Confirm the exact model and final offer at the seller.",
        "listingModel": "ELFE7637AT",
        "variant": "",
        "locationContext": "No ZIP supplied; seller-page location not established"
      },
      {
        "seller": "AJ Madison",
        "url": "https://www.ajmadison.com/cgi-bin/ajmadison/ELFE7637AT.html",
        "price": 1549,
        "currency": "USD",
        "checkedAt": "2026-11-22T22:36:40Z",
        "availability": "Stock and delivery not verified",
        "terms": "Public US page snapshot. Tax, delivery, installation and location-specific pricing are not included. Confirm the exact model and final offer at the seller.",
        "listingModel": "ELFE7637AT",
        "variant": "",
        "locationContext": "No ZIP supplied; seller-page location not established"
      }
    ]
  },
  {
    "id": "samsung-dve53bb8900",
    "category": "dryers",
    "brand": "Samsung",
    "name": "Samsung DVE53BB8900",
    "originalModel": "DVE53BB8900",
    "status": "verified",
    "specs": [
      {
        "label": "Energy",
        "value": "Electric"
      },
      {
        "label": "Published capacity",
        "value": "7.6 cu. ft."
      }
    ],
    "sourceUrl": "https://image-us.samsung.com/SamsungUS/home/home-appliances/washers/bespoke/09202022/2022_DVE53BB8900_V7.pdf",
    "sourceTitle": "Manufacturer documentation",
    "checkedAt": "2026-11-22",
    "note": "Corrected from the old 7.5 cu. ft. description; confirm full finish suffix.",
    "offers": [
      {
        "seller": "AJ Madison",
        "url": "https://www.ajmadison.com/cgi-bin/ajmadison/DVE53BB8900D.html",
        "price": 1549,
        "currency": "USD",
        "checkedAt": "2026-11-22T22:36:40Z",
        "availability": "Stock and delivery not verified",
        "terms": "Public US page snapshot. Tax, delivery, installation and location-specific pricing are not included. Confirm the exact model and final offer at the seller.",
        "listingModel": "DVE53BB8900D",
        "variant": "Brushed Navy",
        "locationContext": "No ZIP supplied; seller-page location not established"
      },
      {
        "seller": "Home Depot",
        "url": "https://www.homedepot.com/p/Samsung-Bespoke-7-6-cu-ft-Vented-Smart-Electric-Dryer-in-Brushed-Navy-with-AI-Optimal-Dry-and-Super-Speed-Dry-DVE53BB8900D/320702856",
        "price": 1199,
        "currency": "USD",
        "checkedAt": "2026-11-22T22:37:37Z",
        "availability": "Stock and delivery not verified",
        "terms": "Public US page snapshot. Tax, delivery, installation and location-specific pricing are not included. Confirm the exact model and final offer at the seller.",
        "listingModel": "DVE53BB8900D",
        "variant": "Brushed Navy",
        "locationContext": "No ZIP supplied; seller-page location not established"
      }
    ]
  },
  {
    "id": "ge-gfd65essvww",
    "category": "dryers",
    "brand": "GE",
    "name": "GE GFD65ESSVWW",
    "originalModel": "GFD65ESSVWW",
    "status": "verified",
    "specs": [
      {
        "label": "Energy",
        "value": "Electric"
      },
      {
        "label": "Published capacity",
        "value": "7.8 cu. ft."
      }
    ],
    "sourceUrl": "https://products-salsify.geappliances.com/image/upload/s--trQKVtct--/k8i5tajaxpvqgpu2fbvw.pdf",
    "sourceTitle": "Manufacturer documentation",
    "checkedAt": "2026-11-22",
    "note": "",
    "offers": [
      {
        "seller": "Home Depot",
        "url": "https://www.homedepot.com/p/GE-7-8-cu-ft-Smart-Front-Load-Electric-Dryer-in-White-with-Steam-and-Sanitize-GFD65ESSVWW/326536641",
        "price": 899,
        "currency": "USD",
        "checkedAt": "2026-11-22T22:36:40Z",
        "availability": "Stock and delivery not verified",
        "terms": "Public US page snapshot. Tax, delivery, installation and location-specific pricing are not included. Confirm the exact model and final offer at the seller.",
        "listingModel": "GFD65ESSVWW",
        "variant": "",
        "locationContext": "No ZIP supplied; seller-page location not established"
      },
      {
        "seller": "AJ Madison",
        "url": "https://www.ajmadison.com/cgi-bin/ajmadison/GFD65ESSVWW.html",
        "price": 842,
        "currency": "USD",
        "checkedAt": "2026-11-22T22:36:40Z",
        "availability": "Stock and delivery not verified",
        "terms": "Public US page snapshot. Tax, delivery, installation and location-specific pricing are not included. Confirm the exact model and final offer at the seller.",
        "listingModel": "GFD65ESSVWW",
        "variant": "",
        "locationContext": "No ZIP supplied; seller-page location not established"
      }
    ]
  },
  {
    "id": "speed-queen-df7",
    "category": "dryers",
    "brand": "Speed Queen",
    "name": "Speed Queen DF7004WE (DF7)",
    "originalModel": "DF7",
    "status": "verified",
    "specs": [
      {
        "label": "Energy",
        "value": "Electric"
      },
      {
        "label": "Feature",
        "value": "Steam Refresh"
      }
    ],
    "sourceUrl": "https://speedqueen.com/products/front-load-electric-dryers/df7004we/",
    "sourceTitle": "Manufacturer documentation",
    "checkedAt": "2026-11-22",
    "note": "DF7 series resolved to the exact white DF7004WE model. Capacity is not supplied here.",
    "offers": [
      {
        "seller": "Abt",
        "url": "https://www.abt.com/Speed-Queen-ADA-7-Cu.-Ft.-White-Electric-Dryer-DF7004WE/p/189628.html",
        "price": 2199,
        "currency": "USD",
        "checkedAt": "2026-11-22T22:37:26Z",
        "availability": "Stock and delivery not verified",
        "terms": "Public US page snapshot. Tax, delivery, installation and location-specific pricing are not included. Confirm the exact model and final offer at the seller. Default location was supplied by the seller, not selected by the reader.",
        "listingModel": "DF7004WE",
        "variant": "",
        "locationContext": "Seller page default: New York, NY 10118"
      },
      {
        "seller": "Town Appliance",
        "url": "https://www.townappliance.com/products/speed-queen-df7004we-front-load-electric-dryer",
        "price": 2199,
        "currency": "USD",
        "checkedAt": "2026-11-22T22:37:26Z",
        "availability": "Stock and delivery not verified",
        "terms": "Public US page snapshot. Tax, delivery, installation and location-specific pricing are not included. Confirm the exact model and final offer at the seller.",
        "listingModel": "DF7004WE",
        "variant": "",
        "locationContext": "No ZIP supplied; seller-page location not established"
      }
    ]
  },
  {
    "id": "maytag-med6230hw",
    "category": "dryers",
    "brand": "Maytag",
    "name": "Maytag MED6230HW",
    "originalModel": "MED6230HW",
    "status": "verified",
    "specs": [
      {
        "label": "Energy",
        "value": "Electric"
      },
      {
        "label": "Published capacity",
        "value": "7.4 cu. ft."
      }
    ],
    "sourceUrl": "https://www.maytag.com/washers-and-dryers/dryers/matches-top-load-washers/p.smart-top-load-electric-dryer-with-extra-power-7.4-cu.-ft.med6230hw.html",
    "sourceTitle": "Manufacturer documentation",
    "checkedAt": "2026-11-22",
    "note": "Corrected from the old 7.3 cu. ft. description.",
    "offers": [
      {
        "seller": "Lowe's",
        "url": "https://www.lowes.com/pd/Maytag-Smart-capable-7-4-cu-ft-Electric-Dryer-White/1001869778",
        "price": 1049,
        "currency": "USD",
        "checkedAt": "2026-11-22T22:36:40Z",
        "availability": "Stock and delivery not verified",
        "terms": "Public US page snapshot. Tax, delivery, installation and location-specific pricing are not included. Confirm the exact model and final offer at the seller.",
        "listingModel": "MED6230HW",
        "variant": "",
        "locationContext": "No ZIP supplied; seller-page location not established"
      },
      {
        "seller": "Home Depot",
        "url": "https://www.homedepot.com/p/Maytag-7-4-cu-ft-240-Volt-Smart-Capable-White-Electric-Dryer-with-Hamper-Door-and-Advanced-Moisture-Sensing-MED6230HW/312156556",
        "price": 1049,
        "currency": "USD",
        "checkedAt": "2026-11-22T22:36:40Z",
        "availability": "Stock and delivery not verified",
        "terms": "Public US page snapshot. Tax, delivery, installation and location-specific pricing are not included. Confirm the exact model and final offer at the seller.",
        "listingModel": "MED6230HW",
        "variant": "",
        "locationContext": "No ZIP supplied; seller-page location not established"
      }
    ]
  },
  {
    "id": "whirlpool-wed6620rw",
    "category": "dryers",
    "brand": "Whirlpool",
    "name": "Whirlpool WED6620RW",
    "originalModel": "WED6620RW",
    "status": "pending",
    "specs": [],
    "sourceUrl": null,
    "sourceTitle": "Manufacturer documentation",
    "checkedAt": "2026-11-22",
    "note": "Exact WED6620RW could not be confirmed. Official WED6620HW documentation is a different suffix and is not silently substituted.",
    "offers": []
  },
  {
    "id": "amana-ned4655ew",
    "category": "dryers",
    "brand": "Amana",
    "name": "Amana NED4655EW",
    "originalModel": "NED4655EW",
    "status": "verified",
    "specs": [
      {
        "label": "Energy",
        "value": "Electric"
      },
      {
        "label": "Published capacity",
        "value": "6.5 cu. ft."
      }
    ],
    "sourceUrl": "https://www.amana.com/content/dam/global/documents/202003/specification-sheet-ned4655especsheetv01.pdf",
    "sourceTitle": "Manufacturer documentation",
    "checkedAt": "2026-11-22",
    "note": "",
    "offers": [
      {
        "seller": "Home Depot",
        "url": "https://www.homedepot.com/p/Amana-6-5-cu-ft-vented-Front-Load-Electric-Dryer-in-White-with-Wrinkle-Prevent-Option-NED4655EW/206029544",
        "price": 499,
        "currency": "USD",
        "checkedAt": "2026-11-22T21:41:49Z",
        "availability": "Stock and delivery not verified",
        "terms": "Public US page price; no ZIP selected. Tax, delivery, installation and location-specific pricing are not included. Confirm the final offer at the seller.",
        "listingModel": "NED4655EW",
        "variant": "White",
        "locationContext": "No ZIP supplied; seller-page location not established"
      },
      {
        "seller": "Lowe's",
        "url": "https://www.lowes.com/pd/Amana-6-5-cu-ft-Vented-Electric-Dryer-White/5017494453",
        "price": 498,
        "currency": "USD",
        "checkedAt": "2026-11-22T21:41:49Z",
        "availability": "Stock and delivery not verified",
        "terms": "Public US page price; no ZIP selected. Tax, delivery, installation and location-specific pricing are not included. Confirm the final offer at the seller.",
        "listingModel": "NED4655EW",
        "variant": "White",
        "locationContext": "No ZIP supplied; seller-page location not established"
      },
      {
        "seller": "AJ Madison",
        "url": "https://www.ajmadison.com/cgi-bin/ajmadison/NED4655EW.html",
        "price": 498,
        "currency": "USD",
        "checkedAt": "2026-11-22T22:36:40Z",
        "availability": "Stock and delivery not verified",
        "terms": "Public US page snapshot. Tax, delivery, installation and location-specific pricing are not included. Confirm the exact model and final offer at the seller.",
        "listingModel": "NED4655EW",
        "variant": "",
        "locationContext": "No ZIP supplied; seller-page location not established"
      }
    ]
  },
  {
    "id": "bosch-shp78cm5n",
    "category": "dishwashers",
    "brand": "Bosch",
    "name": "Bosch SHP78CM5N",
    "originalModel": "SHP78CM5N",
    "status": "verified",
    "specs": [
      {
        "label": "Published noise",
        "value": "42 dBA"
      },
      {
        "label": "Design",
        "value": "24-inch pocket handle"
      }
    ],
    "sourceUrl": "https://media3.bosch-home.com/Documents/20595211_SHP78CM5N%20Spec%20Sheet.pdf",
    "sourceTitle": "Manufacturer documentation",
    "checkedAt": "2026-11-22",
    "note": "",
    "offers": [
      {
        "seller": "Plesser's",
        "url": "https://www.plessers.com/bosch/shp78cm5n",
        "price": 1349,
        "currency": "USD",
        "checkedAt": "2026-11-22T22:37:26Z",
        "availability": "Stock and delivery not verified",
        "terms": "Public US page snapshot. Tax, delivery, installation and location-specific pricing are not included. Confirm the exact model and final offer at the seller.",
        "listingModel": "SHP78CM5N",
        "variant": "",
        "locationContext": "No ZIP supplied; seller-page location not established"
      },
      {
        "seller": "Town Appliance",
        "url": "https://www.townappliance.com/products/bosch-shp78cm5n-built-in-dishwasher",
        "price": 1349,
        "currency": "USD",
        "checkedAt": "2026-11-22T22:39:06Z",
        "availability": "Stock and delivery not verified",
        "terms": "Public US page snapshot. Tax, delivery, installation and location-specific pricing are not included. Confirm the exact model and final offer at the seller. Use displayed selling price; conditional rebates are not subtracted.",
        "listingModel": "SHP78CM5N",
        "variant": "",
        "locationContext": "No ZIP supplied; seller-page location not established"
      }
    ]
  },
  {
    "id": "miele-g7566-scvi",
    "category": "dishwashers",
    "brand": "Miele",
    "name": "Miele G 7566 SCVi XXL SF AutoDos",
    "originalModel": "G 7566 SCVi AutoDos",
    "status": "verified",
    "specs": [
      {
        "label": "Published noise",
        "value": "40 dB(A) re 1 pW"
      },
      {
        "label": "Feature",
        "value": "AutoDos"
      }
    ],
    "sourceUrl": "https://media.miele.com/downloads/n-/us/FS_12055110_USE_US-en-US.pdf",
    "sourceTitle": "Manufacturer documentation",
    "checkedAt": "2026-11-22",
    "note": "Exact manufacturer sheet for product 12055110 gives 40 dB, correcting the earlier 39 dB claim. Check configuration.",
    "offers": [
      {
        "seller": "Best Buy",
        "url": "https://www.bestbuy.com/product/miele-g7566-scvi-sf-xxl-autodos-dishwasher-stainless-steel/CJ3KGTPPHK",
        "price": 2749,
        "currency": "USD",
        "checkedAt": "2026-11-22T22:36:40Z",
        "availability": "Stock and delivery not verified",
        "terms": "Public US page snapshot. Tax, delivery, installation and location-specific pricing are not included. Confirm the exact model and final offer at the seller. Seller UPC 4002516569169 matches the checked manufacturer configuration.",
        "listingModel": "G 7566 SCVi SF",
        "variant": "Stainless steel",
        "locationContext": "No ZIP supplied; seller-page location not established"
      }
    ]
  },
  {
    "id": "lg-ldp6810ss",
    "category": "dishwashers",
    "brand": "LG",
    "name": "LG LDP6810SS",
    "originalModel": "LDP6810SS",
    "status": "verified",
    "specs": [
      {
        "label": "Published noise",
        "value": "44 dBA"
      },
      {
        "label": "Place settings",
        "value": "15"
      }
    ],
    "sourceUrl": "https://media.us.lg.com/asset/ee9a9c23-b25b-4a5a-ae9c-7771f3ab81c3/LDP6810SS-LG-Builder-Spec-Sheet.pdf",
    "sourceTitle": "Manufacturer documentation",
    "checkedAt": "2026-11-22",
    "note": "",
    "offers": [
      {
        "seller": "Appliance Warehouse",
        "url": "https://www.appliancewarehouse.com/LG-LDP6810SS-Top-Control-Smart-wi-fi-Enabled-Dishwasher-with-QuadWash-and-TrueSteam",
        "price": 799,
        "currency": "USD",
        "checkedAt": "2026-11-22T22:37:26Z",
        "availability": "Stock and delivery not verified",
        "terms": "Public US page snapshot. Tax, delivery, installation and location-specific pricing are not included. Confirm the exact model and final offer at the seller.",
        "listingModel": "LDP6810SS",
        "variant": "",
        "locationContext": "No ZIP supplied; seller-page location not established"
      },
      {
        "seller": "Slyman Bros",
        "url": "https://slymanbros.com/dishwashers/dishwashers/built-in-dishwashers/ldp6810ss/",
        "price": 799,
        "currency": "USD",
        "checkedAt": "2026-11-22T22:37:26Z",
        "availability": "Stock and delivery not verified",
        "terms": "Public US page snapshot. Tax, delivery, installation and location-specific pricing are not included. Confirm the exact model and final offer at the seller.",
        "listingModel": "LDP6810SS",
        "variant": "",
        "locationContext": "No ZIP supplied; seller-page location not established"
      }
    ]
  },
  {
    "id": "kitchenaid-kdte204kps",
    "category": "dishwashers",
    "brand": "KitchenAid",
    "name": "KitchenAid KDTE204KPS",
    "originalModel": "KDTE204KPS",
    "status": "verified",
    "specs": [
      {
        "label": "Published noise",
        "value": "39 dBA"
      },
      {
        "label": "Rack",
        "value": "Third-level utensil rack"
      }
    ],
    "sourceUrl": "https://www.kitchenaid.com/owners-center-pdp.KDTE204KPS.html",
    "sourceTitle": "Manufacturer documentation",
    "checkedAt": "2026-11-22",
    "note": "Removed the unsupported FreeFlex label from the old catalog.",
    "offers": [
      {
        "seller": "Home Depot",
        "url": "https://www.homedepot.com/p/KitchenAid-24-in-PrintShield-Stainless-Steel-Top-Control-Built-In-Tall-Tub-Dishwasher-with-Stainless-Tub-39-DBA-KDTE204KPS/313573360",
        "price": 748,
        "currency": "USD",
        "checkedAt": "2026-11-22T22:36:40Z",
        "availability": "Stock and delivery not verified",
        "terms": "Public US page snapshot. Tax, delivery, installation and location-specific pricing are not included. Confirm the exact model and final offer at the seller.",
        "listingModel": "KDTE204KPS",
        "variant": "",
        "locationContext": "No ZIP supplied; seller-page location not established"
      },
      {
        "seller": "Lowe's",
        "url": "https://www.lowes.com/pd/KitchenAid-39-Decibel-Top-Control-24-in-Built-In-Dishwasher-Stainless-Steel-with-Printshield-ENERGY-STAR/5005455799",
        "price": 1149,
        "currency": "USD",
        "checkedAt": "2026-11-22T22:36:40Z",
        "availability": "Stock and delivery not verified",
        "terms": "Public US page snapshot. Tax, delivery, installation and location-specific pricing are not included. Confirm the exact model and final offer at the seller.",
        "listingModel": "KDTE204KPS",
        "variant": "",
        "locationContext": "No ZIP supplied; seller-page location not established"
      }
    ]
  },
  {
    "id": "ge-profile-pdt755syvfs",
    "category": "dishwashers",
    "brand": "GE Profile",
    "name": "GE Profile PDT755SYVFS",
    "originalModel": "PDT755SYVFS",
    "status": "verified",
    "specs": [
      {
        "label": "Published noise",
        "value": "42 dBA"
      },
      {
        "label": "Rack",
        "value": "Deep Clean washing third rack"
      }
    ],
    "sourceUrl": "https://www.geappliances.com/appliance/GE-Profile-ENERGY-STAR-Smart-UltraFresh-System-Dishwasher-with-Microban-Antimicrobial-Technology-with-Deep-Clean-Washing-3rd-Rack-42-dBA-PDT755SYVFS",
    "sourceTitle": "Manufacturer documentation",
    "checkedAt": "2026-11-22",
    "note": "",
    "offers": [
      {
        "seller": "Home Depot",
        "url": "https://www.homedepot.com/p/GE-Profile-24-in-Built-In-Top-Control-Dishwasher-in-Fingerprint-Resistant-Stainless-w-Stainless-Tub-3rd-Rack-42-dBA-PDT755SYVFS/328286643",
        "price": 898,
        "currency": "USD",
        "checkedAt": "2026-11-22T22:36:40Z",
        "availability": "Stock and delivery not verified",
        "terms": "Public US page snapshot. Tax, delivery, installation and location-specific pricing are not included. Confirm the exact model and final offer at the seller.",
        "listingModel": "PDT755SYVFS",
        "variant": "",
        "locationContext": "No ZIP supplied; seller-page location not established"
      },
      {
        "seller": "Plesser's",
        "url": "https://www.plessers.com/ge/pdt755syvfs",
        "price": 893,
        "currency": "USD",
        "checkedAt": "2026-11-22T22:39:06Z",
        "availability": "Stock and delivery not verified",
        "terms": "Public US page snapshot. Tax, delivery, installation and location-specific pricing are not included. Confirm the exact model and final offer at the seller. Use displayed selling price; conditional rebates are not subtracted.",
        "listingModel": "PDT755SYVFS",
        "variant": "",
        "locationContext": "No ZIP supplied; seller-page location not established"
      }
    ]
  },
  {
    "id": "samsung-dw80cg4020",
    "category": "dishwashers",
    "brand": "Samsung",
    "name": "Samsung DW80CG4020SR",
    "originalModel": "DW80CG4020SR",
    "status": "pending",
    "specs": [],
    "sourceUrl": null,
    "sourceTitle": "Manufacturer documentation",
    "checkedAt": "2026-11-22",
    "note": "Exact DW80CG4020SR could not be confirmed. Samsung documentation returned DW80CG4021, a different model. No substitution made.",
    "offers": []
  },
  {
    "id": "frigidaire-gallery-fgid2479sf",
    "category": "dishwashers",
    "brand": "Frigidaire Gallery",
    "name": "Frigidaire FGID2479SF",
    "originalModel": "FGID2479SF",
    "status": "verified",
    "specs": [
      {
        "label": "Published noise",
        "value": "49 dBA"
      },
      {
        "label": "Place settings",
        "value": "14"
      }
    ],
    "sourceUrl": "https://frigidaire.bynder.com/m/bbfe97714f26093/original/FGID2479S_EN-pdf.pdf",
    "sourceTitle": "Manufacturer documentation",
    "checkedAt": "2026-11-22",
    "note": "Manufacturer sheet version 07/23; historical documentation is not current stock evidence.",
    "offers": [
      {
        "seller": "Home Depot",
        "url": "https://www.homedepot.com/p/Frigidaire-24-in-Smudge-Proof-Stainless-Steel-Top-Control-Built-In-Tall-Tub-Dishwasher-with-Stainless-Steel-Tub-49-dBA-FGID2479SF/301025580",
        "price": 929,
        "currency": "USD",
        "checkedAt": "2026-11-22T22:36:40Z",
        "availability": "Stock and delivery not verified",
        "terms": "Public US page snapshot. Tax, delivery, installation and location-specific pricing are not included. Confirm the exact model and final offer at the seller.",
        "listingModel": "FGID2479SF",
        "variant": "",
        "locationContext": "No ZIP supplied; seller-page location not established"
      },
      {
        "seller": "Appliances Distributors",
        "url": "https://appliancesdistributors.com/products/frigidaire-gallery-24-built-in-dishwasher-with-evendrytm-system-fgid2479sf",
        "price": 929.99,
        "currency": "USD",
        "checkedAt": "2026-11-22T22:37:26Z",
        "availability": "Stock and delivery not verified",
        "terms": "Public US page snapshot. Tax, delivery, installation and location-specific pricing are not included. Confirm the exact model and final offer at the seller. Listed retailer is in North Hollywood, CA; delivery area and item condition not confirmed.",
        "listingModel": "FGID2479SF",
        "variant": "",
        "locationContext": "No ZIP supplied; seller-page location not established"
      }
    ]
  },
  {
    "id": "whirlpool-wdf520padm",
    "category": "dishwashers",
    "brand": "Whirlpool",
    "name": "Whirlpool WDF520PADM",
    "originalModel": "WDF520PADM",
    "status": "verified",
    "specs": [
      {
        "label": "Published noise",
        "value": "55 dBA"
      },
      {
        "label": "Controls",
        "value": "Front"
      }
    ],
    "sourceUrl": "https://www.whirlpool.com/content/dam/global/documents/202001/specification-sheet-wdf520padspecsheetv01.pdf",
    "sourceTitle": "Manufacturer documentation",
    "checkedAt": "2026-11-22",
    "note": "",
    "offers": [
      {
        "seller": "Lowe's",
        "url": "https://www.lowes.com/pd/Whirlpool-55-Decibel-Filtration-Built-In-Dishwasher-Monochromatic-Stainless-Steel-Common-24-in-Actual-23-875-in-ENERGY-STAR/50258927",
        "price": 679,
        "currency": "USD",
        "checkedAt": "2026-11-22T22:36:40Z",
        "availability": "Stock and delivery not verified",
        "terms": "Public US page snapshot. Tax, delivery, installation and location-specific pricing are not included. Confirm the exact model and final offer at the seller.",
        "listingModel": "WDF520PADM",
        "variant": "",
        "locationContext": "No ZIP supplied; seller-page location not established"
      }
    ]
  },
  {
    "id": "lg-c5-oled-65",
    "category": "tvs",
    "brand": "LG",
    "name": "LG OLED65C5PUA",
    "originalModel": "OLED65C5PUA",
    "status": "verified",
    "specs": [
      {
        "label": "Screen class",
        "value": "65-inch"
      },
      {
        "label": "Panel / resolution",
        "value": "OLED / 4K"
      }
    ],
    "sourceUrl": "https://www.lg.com/us/tvs/lg-oled65c5pua-oled-4k-tv",
    "sourceTitle": "Manufacturer documentation",
    "checkedAt": "2026-11-22",
    "note": "Manufacturer identifies this as a 2025 model, not a new 2026 TV.",
    "offers": [
      {
        "seller": "Lowe's",
        "url": "https://www.lowes.com/pd/LG-Electronics-65-in-2160p-4K-Flat-screen-Ultra-HDTV/5016910577",
        "price": 1299,
        "currency": "USD",
        "checkedAt": "2026-11-22T22:36:40Z",
        "availability": "Stock and delivery not verified",
        "terms": "Public US page snapshot. Tax, delivery, installation and location-specific pricing are not included. Confirm the exact model and final offer at the seller.",
        "listingModel": "OLED65C5PUA",
        "variant": "",
        "locationContext": "No ZIP supplied; seller-page location not established"
      }
    ]
  },
  {
    "id": "tcl-qm8l-65",
    "category": "tvs",
    "brand": "TCL",
    "name": "TCL 65QM8L",
    "originalModel": "65QM8L",
    "status": "verified",
    "specs": [
      {
        "label": "Screen class",
        "value": "65-inch"
      },
      {
        "label": "Panel / resolution",
        "value": "SQD-Mini LED / 4K"
      }
    ],
    "sourceUrl": "https://us.tcl.com/products/qm8l-series-sqd-mini-led-4k-uhd-hdr-smart-tv-with-google-tv",
    "sourceTitle": "Manufacturer documentation",
    "checkedAt": "2026-11-22",
    "note": "",
    "offers": [
      {
        "seller": "TCL",
        "url": "https://us.tcl.com/products/qm8l-series-sqd-mini-led-4k-uhd-hdr-smart-tv-with-google-tv",
        "price": 999.99,
        "currency": "USD",
        "checkedAt": "2026-11-22T22:37:26Z",
        "availability": "Stock and delivery not verified",
        "terms": "Public US page snapshot. Tax, delivery, installation and location-specific pricing are not included. Confirm the exact model and final offer at the seller.",
        "listingModel": "65QM8L",
        "variant": "",
        "locationContext": "No ZIP supplied; seller-page location not established"
      }
    ]
  },
  {
    "id": "samsung-s95f-65",
    "category": "tvs",
    "brand": "Samsung",
    "name": "Samsung QN65S95FAFXZA",
    "originalModel": "QN65S95F",
    "status": "verified",
    "specs": [
      {
        "label": "Screen class",
        "value": "65-inch"
      },
      {
        "label": "Panel / resolution",
        "value": "OLED / 4K"
      }
    ],
    "sourceUrl": "https://www.samsung.com/us/tvs/oled-tv/65-class-oled-tv-s95f-sku-qn65s95fafxza/",
    "sourceTitle": "Manufacturer documentation",
    "checkedAt": "2026-11-22",
    "note": "Exact US 2025 suffix selected for the S95F series.",
    "offers": [
      {
        "seller": "Lowe's",
        "url": "https://www.lowes.com/pd/Samsung-Samsung-65in-Class-OLED-4K-QN65S95FAFXZAVision-AI-Smart-TV-2025/5016711289",
        "price": 2999.99,
        "currency": "USD",
        "checkedAt": "2026-11-22T22:36:40Z",
        "availability": "Stock and delivery not verified",
        "terms": "Public US page snapshot. Tax, delivery, installation and location-specific pricing are not included. Confirm the exact model and final offer at the seller.",
        "listingModel": "QN65S95FAFXZA",
        "variant": "",
        "locationContext": "No ZIP supplied; seller-page location not established"
      }
    ]
  },
  {
    "id": "hisense-u8qg-65",
    "category": "tvs",
    "brand": "Hisense",
    "name": "Hisense 65U8QG",
    "originalModel": "65U8QG",
    "status": "verified",
    "specs": [
      {
        "label": "Screen class",
        "value": "65-inch"
      },
      {
        "label": "Panel / resolution",
        "value": "MiniLED / 4K"
      }
    ],
    "sourceUrl": "https://www.hisense.com/us/en/tv/u8-series/hisense-65-class-u8-series-miniled-uled-4k-google-tv-65u8qg",
    "sourceTitle": "Manufacturer documentation",
    "checkedAt": "2026-11-22",
    "note": "",
    "offers": [
      {
        "seller": "Best Buy",
        "url": "https://www.bestbuy.com/product/hisense-65-class-u8-series-miniled-qled-uhd-4k-hdr-smart-google-tv-2025/J3Z9Z42YKK/sku/6621215",
        "price": 1869.99,
        "currency": "USD",
        "checkedAt": "2026-11-22T22:36:40Z",
        "availability": "Stock and delivery not verified",
        "terms": "Public US page snapshot. Tax, delivery, installation and location-specific pricing are not included. Confirm the exact model and final offer at the seller.",
        "listingModel": "65U8QG",
        "variant": "",
        "locationContext": "No ZIP supplied; seller-page location not established"
      },
      {
        "seller": "Walmart",
        "url": "https://www.walmart.com/ip/Hisense-65-Inch-Class-U8-Series-Mini-LED-QLED-Google-Smart-TV-65U8QG-QLED-5000-Nit-Dolby-Vision-IQ-Dolby-Atmos-Full-Array-Local-Dimming/16104452413",
        "price": 1049,
        "currency": "USD",
        "checkedAt": "2026-11-22T22:37:26Z",
        "availability": "Out of stock on the checked page",
        "terms": "Public US page snapshot. Tax, delivery, installation and location-specific pricing are not included. Confirm the exact model and final offer at the seller. Displayed price only, not a purchasable offer at check time. Marketplace seller identity was not established.",
        "listingModel": "65U8QG",
        "variant": "",
        "locationContext": "No ZIP supplied; seller-page location not established"
      }
    ]
  },
  {
    "id": "sony-bravia-7-65",
    "category": "tvs",
    "brand": "Sony",
    "name": "Sony K-65XR70 (BRAVIA 7)",
    "originalModel": "K-65XR70",
    "status": "verified",
    "specs": [
      {
        "label": "Screen class",
        "value": "65-inch"
      },
      {
        "label": "Panel / resolution",
        "value": "Mini LED QLED / 4K"
      }
    ],
    "sourceUrl": "https://electronics.sony.com/tv-video/televisions/all-tvs/p/k65xr70",
    "sourceTitle": "Manufacturer documentation",
    "checkedAt": "2026-11-22",
    "note": "Manufacturer identifies this as a 2024 model.",
    "offers": [
      {
        "seller": "Sony",
        "url": "https://electronics.sony.com/tv-video/televisions/all-tvs/p/k65xr70",
        "price": 1699.99,
        "currency": "USD",
        "checkedAt": "2026-11-22T22:36:40Z",
        "availability": "Stock and delivery not verified",
        "terms": "Public US page snapshot. Tax, delivery, installation and location-specific pricing are not included. Confirm the exact model and final offer at the seller.",
        "listingModel": "K-65XR70",
        "variant": "",
        "locationContext": "No ZIP supplied; seller-page location not established"
      }
    ]
  },
  {
    "id": "samsung-frame-55",
    "category": "tvs",
    "brand": "Samsung",
    "name": "Samsung QN55LS03FAFXZA (The Frame)",
    "originalModel": "QN55LS03F",
    "status": "verified",
    "specs": [
      {
        "label": "Screen class",
        "value": "55-inch"
      },
      {
        "label": "Panel / resolution",
        "value": "QLED / 4K"
      }
    ],
    "sourceUrl": "https://www.samsung.com/us/lifestyle-tvs/the-frame/55-inch-the-frame-qled-4k-tv-ls03fa-sku-qn55ls03fafxza/",
    "sourceTitle": "Manufacturer documentation",
    "checkedAt": "2026-11-22",
    "note": "Exact US 2025 suffix selected for the old QN55LS03F family label.",
    "offers": [
      {
        "seller": "Abt",
        "url": "https://www.abt.com/Samsung-The-Frame-LS03F-QLED-TV-55-Inch-4K-Smart-in-Black-QN55LS03FAFXZA/p/218357.html",
        "price": 697.99,
        "currency": "USD",
        "checkedAt": "2026-11-22T22:36:40Z",
        "availability": "Stock and delivery not verified",
        "terms": "Public US page snapshot. Tax, delivery, installation and location-specific pricing are not included. Confirm the exact model and final offer at the seller.",
        "listingModel": "QN55LS03FAFXZA",
        "variant": "",
        "locationContext": "Seller page default: New York, NY 10118"
      }
    ]
  },
  {
    "id": "tcl-qm7l-65",
    "category": "tvs",
    "brand": "TCL",
    "name": "TCL 65QM7L",
    "originalModel": "65QM7L",
    "status": "verified",
    "specs": [
      {
        "label": "Screen class",
        "value": "65-inch"
      },
      {
        "label": "Panel / resolution",
        "value": "SQD-Mini LED / 4K"
      }
    ],
    "sourceUrl": "https://us.tcl.com/products/qm7l-series-sqd-mini-led-4k-uhd-hdr-smart-tv-with-google-tv",
    "sourceTitle": "Manufacturer documentation",
    "checkedAt": "2026-11-22",
    "note": "",
    "offers": [
      {
        "seller": "Abt",
        "url": "https://www.abt.com/TCL-QM7L-Series-SQD-Mini-QLED-TV-65-Inch-4K-Smart-with-Google-TV-in-Black-65QM7L/p/242509.html",
        "price": 847.99,
        "currency": "USD",
        "checkedAt": "2026-11-22T22:36:40Z",
        "availability": "Stock and delivery not verified",
        "terms": "Public US page snapshot. Tax, delivery, installation and location-specific pricing are not included. Confirm the exact model and final offer at the seller.",
        "listingModel": "65QM7L",
        "variant": "",
        "locationContext": "Seller page default: New York, NY 10118"
      }
    ]
  },
  {
    "id": "roku-pro-65",
    "category": "tvs",
    "brand": "Roku",
    "name": "Roku 65R8C5",
    "originalModel": "65R8C5",
    "status": "pending",
    "specs": [],
    "sourceUrl": null,
    "sourceTitle": "Manufacturer documentation",
    "checkedAt": "2026-11-22",
    "note": "Exact 65R8C5 documentation not confirmed on the manufacturer pages inspected. Generic Pro Series information is not enough to verify this SKU.",
    "offers": []
  }
];
