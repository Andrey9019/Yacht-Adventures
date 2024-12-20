const allYachts = [
  // 1
  {
    imageYacht: {
      mobileSrc: "images/yacht/arrow@1x.jpg",
      desktopSrc: "images/yacht/arrow@2x.webp",
    },
    translations: {
      en: {
        nameYacht: "Arrow",
        length: "48m (155ft)",
        builder: "Admiral",
        shipyard: "",
        built: "2021",
        guests: "11 in 5 cabins",
        price: "€33,500,000",
      },
      uk: {
        nameYacht: "Arrow",
        length: "48м (155футів)",
        builder: "Адмірал",
        shipyard: "",
        built: "2021",
        guests: "11 в 5 каютах",
        price: "€33,500,000",
      },
    },
  },
  // 2
  {
    imageYacht: {
      mobileSrc: "images/yacht/benetti@1x.jpg",
      desktopSrc: "images/yacht/benetti@2x.webp",
    },
    translations: {
      en: {
        nameYacht: "BENETTI OASIS 40M BO122",
        length: "41m (133ft)",
        builder: "Benetti",
        shipyard: "",
        built: "2025",
        guests: "10 in 5 cabins",
        price: "€23,210,000",
      },
      uk: {
        nameYacht: "BENETTI OASIS 40M BO122",
        length: "41м (133футів)",
        builder: "Бенетті",
        shipyard: "",
        built: "2025",
        guests: "10 в 5 каютах",
        price: "€23,210,000",
      },
    },
  },
  // 3
  {
    imageYacht: {
      mobileSrc: "images/yacht/belleanna@1x.jpg",
      desktopSrc: "images/yacht/belleanna@2x.webp",
    },
    translations: {
      en: {
        nameYacht: "BELLE ANNA",
        length: "50m(155ft)",
        builder: "",
        shipyard: "ISA",
        built: "2012",
        guests: "12 in 6 cabins",
        price: "€21,000,000",
      },
      uk: {
        nameYacht: "BELLE ANNA",
        length: "50м (155футів)",
        builder: "",
        shipyard: "ISA",
        built: "2012",
        guests: "12 в 6 каютах",
        price: "€21,000,000",
      },
    },
  },
  // 4
  {
    imageYacht: {
      mobileSrc: "images/yacht/ellen@1x.jpg",
      desktopSrc: "images/yacht/ellen@2x.webp",
    },
    translations: {
      en: {
        nameYacht: "Ellen",
        length: "40m (132ft)",
        builder: "",
        shipyard: "Perini Navi",
        built: "2001 / 2016 (refitted)",
        guests: "9 in 4 cabins",
        price: "€9,300,000",
      },
      uk: {
        nameYacht: "Ellen",
        length: "40м (132футів)",
        builder: "",
        shipyard: "Perini Navi",
        built: "2001 / 2016 (рекон.)",
        guests: "9 в 4 каютах",
        price: "€9,300,000",
      },
    },
  },
  // 5
  {
    imageYacht: {
      mobileSrc: "images/yacht/mirage@1x.jpg",
      desktopSrc: "images/yacht/mirage@2x.webp",
    },
    translations: {
      en: {
        nameYacht: "MIRAGE 401",
        length: "38m (125ft)",
        builder: "",
        shipyard: "Gianetti Custom Yachts",
        built: "2024",
        guests: "10 in 5 cabins",
        price: "€13,500,000",
      },
      uk: {
        nameYacht: "MIRAGE 401",
        length: "38м (125футів)",
        builder: "",
        shipyard: "Gianetti Custom Yachts",
        built: "2024",
        guests: "10 в 5 каютах",
        price: "€13,500,000",
      },
    },
  },
  // 6
  {
    imageYacht: {
      mobileSrc: "images/yacht/king@1x.jpg",
      desktopSrc: "images/yacht/king@2x.webp",
    },
    translations: {
      en: {
        nameYacht: "KING",
        length: "33m (109ft)",
        builder: "",
        shipyard: "Overmarine",
        built: "2004 / 2018 (refitted)",
        guests: "9 in 4 cabins",
        price: "€1,850,000",
      },
      uk: {
        nameYacht: "KING",
        length: "33м (109футів)",
        builder: "",
        shipyard: "Overmarine",
        built: "2004 / 2018 (рекон.)",
        guests: "9 в 4 каютах",
        price: "€1,850,000",
      },
    },
  },
  // 7
  {
    imageYacht: {
      mobileSrc: "images/yacht/salt@1x.jpg",
      desktopSrc: "images/yacht/salt@2x.webp",
    },
    translations: {
      en: {
        nameYacht: "SALT",
        length: "32m (105ft)",
        builder: "SanLorenzo",
        shipyard: "",
        built: "2019",
        guests: "11 in 5 cabins",
        price: "€7,800,000",
      },
      uk: {
        nameYacht: "SALT",
        length: "32м (105футів)",
        builder: "SanLorenzo",
        shipyard: "",
        built: "2019",
        guests: "11 в 5 каютах",
        price: "€7,800,000",
      },
    },
  },
  // 8
  {
    imageYacht: {
      mobileSrc: "images/yacht/storm@1x.jpg",
      desktopSrc: "images/yacht/storm@2x.webp",
    },
    translations: {
      en: {
        nameYacht: "STORM",
        length: "32m (103ft)",
        builder: "",
        shipyard: "Overmarine",
        built: "2005 / 2022 (refitted)",
        guests: "9 in 4 cabins",
        price: "€2,900,000",
      },
      uk: {
        nameYacht: "STORM",
        length: "32м (103футів)",
        builder: "",
        shipyard: "Overmarine",
        built: "2005 / 2022 (рекон.)",
        guests: "9 в 4 каютах",
        price: "€2,900,000",
      },
    },
  },
  // 9
  {
    imageYacht: {
      mobileSrc: "images/yacht/collu@1x.jpg",
      desktopSrc: "images/yacht/collu@2x.webp",
    },
    translations: {
      en: {
        nameYacht: "COLLU",
        length: "29m (96ft)",
        builder: "",
        shipyard: "Ferretti",
        built: "2014",
        guests: "10 in 5 cabins",
        price: "€4,300,000",
      },
      uk: {
        nameYacht: "COLLU",
        length: "29м (96футів)",
        builder: "",
        shipyard: "Ferretti",
        built: "2014",
        guests: "10 в 5 каютах",
        price: "€4,300,000",
      },
    },
  },
];

export default allYachts;
