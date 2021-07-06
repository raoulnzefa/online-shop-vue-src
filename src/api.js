const products = [
    {
      image: "gorshok_keramicheskiy-1.jpeg",
      name: "Кула",
      price: 675,
      category: "gorshki",
      subcategory: "Керамические",
      id: "Gc1",
      available: true,
      quantity: 1
    },
    {
      image: "gorshok_keramicheskiy-2.jpeg",
      name: "Медея",
      price: 575,
      category: "gorshki",
      subcategory: "Керамические",
      id: "Gc2",
      available: true,
      quantity: 1
    },
    {
      image: "gorshok_keramicheskiy-3.jpeg",
      name: "Барилка Пионы",
      price: 870,
      category: "gorshki",
      subcategory: "Керамические",
      id: "Gc3",
      available: false,
      quantity: 1
    },
    // {
    //   image: "gorshok_keramicheskiy-4.jpeg",
    //   name: "Металлик",
    //   price: 399,
    //   category: "gorshki",
    //   subcategory: "Керамические",
    //   id: "Gc4",
    //   available: true,
    //   quantity: 1
    // },
    // {
    //   image: "gorshok_keramicheskiy-5.jpeg",
    //   name: "Барилка",
    //   price: 590,
    //   category: "gorshki",
    //   subcategory: "Керамические",
    //   id: "Gc5",
    //   available: true,
    //   quantity: 1
    // },
    {
      image: "gorshok_keramicheskiy-6.jpeg",
      name: "Антика",
      price: 1150,
      category: "gorshki",
      subcategory: "Керамические",
      id: "Gc6",
      available: true,
      quantity: 1
    },
    // {
    //   image: "gorshok_keramicheskiy-7.jpeg",
    //   name: "Горшок керамический Зефир",
    //   price: 1180,
    //   category: "gorshki",
    //   subcategory: "Керамические",
    //   id: "Gc7",
    //   available: true,
    //   quantity: 1
    // },
    // {
    //   image: "gorshok_keramicheskiy-8.jpeg",
    //   name: "Капля",
    //   price: 850,
    //   category: "gorshki",
    //   subcategory: "Керамические",
    //   id: "Gc8",
    //   available: false,
    //   quantity: 1
    // },
    {
      image: "gorshok_plastic-1.jpeg",
      name: "Фелиция",
      price: 85,
      category: "gorshki",
      subcategory: "Пластиковые",
      id: "Gp1",
      available: true,
      quantity: 1
    },
    {
      image: "gorshok_plastic-2.jpeg",
      name: "Арте",
      price: 130,
      category: "gorshki",
      subcategory: "Пластиковые",
      id: "Gp2",
      available: true,
      quantity: 1
    },
    {
      image: "gorshok_plastic-3.jpeg",
      name: "Румба",
      price: 58,
      category: "gorshki",
      subcategory: "Пластиковые",
      id: "Gp3",
      available: true,
      quantity: 1
    },
    {
      image: "gorshok_plastic-4.jpeg",
      name: "Фелиция Мрамор",
      price: 55,
      category: "gorshki",
      subcategory: "Пластиковые",
      id: "Gp4",
      available: true,
      quantity: 1
    },
    {
      image: "gorshok_plastic-5.jpeg",
      name: "Венеция",
      price: 150,
      category: "gorshki",
      subcategory: "Пластиковые",
      id: "Gp5",
      available: true,
      quantity: 1
    },
    {
      image: "gorshok_steklo-1.jpeg",
      name: "Органза №1",
      price: 365,
      category: "gorshki",
      subcategory: "Стеклянные",
      id: "Gg1",
      available: true,
      quantity: 1
    },
    {
      image: "gorshok_steklo-2.jpeg",
      name: "Органза №2",
      price: 365,
      category: "gorshki",
      subcategory: "Стеклянные",
      id: "Gg2",
      available: true,
      quantity: 1
    },
    {
      image: "gorshok_steklo-3.jpeg",
      name: "Органза №3",
      price: 365,
      category: "gorshki",
      subcategory: "Стеклянные",
      id: "Gg3",
      available: true,
      quantity: 1
    },
    {
      image: "gorshok_steklo-4.jpeg",
      name: "Органза №4",
      price: 365,
      category: "gorshki",
      subcategory: "Стеклянные",
      id: "Gg4",
      available: true,
      quantity: 1
    },
    {
      image: "gorshok_steklo-5.jpeg",
      name: "Органза №5",
      price: 365,
      category: "gorshki",
      subcategory: "Стеклянные",
      id: "Gg5",
      available: true,
      quantity: 1
    },
    {
      image: "adromischus_mix.jpeg",
      name: "Суккуленты Микс",
      price: 265,
      category: "rasteniia",
      subcategory: "Суккуленты",
      id: "R1",
      available: true,
      quantity: 1
    },
    {
      image: "aglaonema_layt_star.jpeg",
      name: "Аглаонема Лайт Стар",
      price: 685,
      category: "rasteniia",
      subcategory: "Декоративно-лиственные",
      id: "R2",
      available: true,
      quantity: 1
    },
    {
      image: "anthurium_andraeanum_aloha_red.jpeg",
      name: "Антуриум",
      price: 545,
      category: "rasteniia",
      subcategory: "Цветущие",
      id: "R3",
      available: false,
      quantity: 1
    },
    {
      image: "azalea_mix.jpeg",
      name: "Азалия Микс",
      price: 320,
      category: "rasteniia",
      subcategory: "Цветущие",
      id: "R4",
      available: true,
      quantity: 1
    },
    {
      image: "bambuk_spiral.jpeg",
      name: "Бамбук Спираль",
      price: 290,
      category: "rasteniia",
      subcategory: "Декоративно-лиственные",
      id: "R5",
      available: true,
      quantity: 1
    },
    {
      image: "cactus_mix.jpeg",
      name: "Кактус Микс",
      price: 150,
      category: "rasteniia",
      subcategory: "Суккуленты",
      id: "R6",
      available: true,
      quantity: 1
    },
    {
      image: "codiaeum_excellent.jpeg",
      name: "Кодиум",
      price: 375,
      category: "rasteniia",
      subcategory: "Декоративно-лиственные",
      id: "R7",
      available: true,
      quantity: 1
    },
    {
      image: "cyclamen_mix.jpeg",
      name: "Цикламен Микс",
      price: 350,
      category: "rasteniia",
      subcategory: "Цветущие",
      id: "R8",
      available: true,
      quantity: 1
    },
    {
      image: "cyclamen.jpeg",
      name: "Цикламен",
      price: 365,
      category: "rasteniia",
      subcategory: "Цветущие",
      id: "R9",
      available: true,
      quantity: 1
    },
    {
      image: "dendrobium.jpeg",
      name: "Дендробиум",
      price: 595,
      category: "rasteniia",
      subcategory: "Цветущие",
      id: "R10",
      available: true,
      quantity: 1
    },
    {
      image: "dianthus_mix.jpeg",
      name: "Гвоздика Микс",
      price: 345,
      category: "rasteniia",
      subcategory: "Цветущие",
      id: "R11",
      available: true,
      quantity: 1
    },
    {
      image: "dratsena_madzhenta.jpeg",
      name: "Драцена Маджента",
      price: 295,
      category: "rasteniia",
      subcategory: "Декоративно-лиственные",
      id: "R12",
      available: true,
      quantity: 1
    },
    {
      image: "ekheveriya_mix.jpeg",
      name: "Эхеверия Микс",
      price: 595,
      category: "rasteniia",
      subcategory: "Суккуленты",
      id: "R13",
      available: true,
      quantity: 1
    },
    {
      image: "eskhinantus_monaliza.jpeg",
      name: "Эсхинантус",
      price: 350,
      category: "rasteniia",
      subcategory: "Цветущие",
      id: "R14",
      available: true,
      quantity: 1
    },
    {
      image: "ficus_elastica_abidjan.jpeg",
      name: "Фикус Эластика Абиджан",
      price: 380,
      category: "rasteniia",
      subcategory: "Декоративно-лиственные",
      id: "R15",
      available: true,
      quantity: 1
    },
    {
      image: "fikus_bendzhamina.jpeg",
      name: "Фикус Бенджамина",
      price: 675,
      category: "rasteniia",
      subcategory: "Декоративно-лиственные",
      id: "R16",
      available: true,
      quantity: 1
    },
    {
      image: "filodendron_birkin.jpeg",
      name: "Филодендрон",
      price: 475,
      category: "rasteniia",
      subcategory: "Декоративно-лиственные",
      id: "R17",
      available: true,
      quantity: 1
    },
    {
      image: "impatiens.jpeg",
      name: "Бальзамин",
      price: 295,
      category: "rasteniia",
      subcategory: "Цветущие",
      id: "R18",
      available: false,
      quantity: 1
    },
    {
      image: "medinilla.jpeg",
      name: "Мединилла",
      price: 955,
      category: "rasteniia",
      subcategory: "Цветущие",
      id: "R19",
      available: true,
      quantity: 1
    },
    {
      image: "monstera_monkey.jpeg",
      name: "Монстера Манки",
      price: 545,
      category: "rasteniia",
      subcategory: "Декоративно-лиственные",
      id: "R20",
      available: true,
      quantity: 1
    },
    {
      image: "nefrolepis_grin_ledi.jpeg",
      name: "Нефролепис Грин Леди",
      price: 350,
      category: "rasteniia",
      subcategory: "Декоративно-лиственные",
      id: "R21",
      available: true,
      quantity: 1
    },
    {
      image: "phalaenopsis_mix.jpeg",
      name: "Фаленопсис Микс",
      price: 765,
      category: "rasteniia",
      subcategory: "Цветущие",
      id: "R22",
      available: true,
      quantity: 1
    },
    {
      image: "platitserium_olenerogiy.jpeg",
      name: "Платицериум",
      price: 1200,
      category: "rasteniia",
      subcategory: "Декоративно-лиственные",
      id: "R23",
      available: true,
      quantity: 1
    },
    {
      image: "saintpaulia_rococo.jpeg",
      name: "Фиалка",
      price: 300,
      category: "rasteniia",
      subcategory: "Цветущие",
      id: "R24",
      available: true,
      quantity: 1
    },
    {
      image: "sansevieriya_fernvud_mikado.jpeg",
      name: "Сансевиерия",
      price: 720,
      category: "rasteniia",
      subcategory: "Суккуленты",
      id: "R25",
      available: true,
      quantity: 1
    },
    {
      image: "schefflera_gerda.jpeg",
      name: "Шеффлера",
      price: 455,
      category: "rasteniia",
      subcategory: "Декоративно-лиственные",
      id: "R26",
      available: true,
      quantity: 1
    },
    {
      image: "schlumbergera.jpeg",
      name: "Шлюмбергера",
      price: 295,
      category: "rasteniia",
      subcategory: "Цветущие",
      id: "R27",
      available: true,
      quantity: 1
    },
    {
      image: "spathiphyllum_torelli.jpeg",
      name: "Спатифиллум",
      price: 255,
      category: "rasteniia",
      subcategory: "Цветущие",
      id: "R28",
      available: true,
      quantity: 1
    },
    {
      image: "stephanotis_fleur_parfum.jpeg",
      name: "Стефанотис",
      price: 475,
      category: "rasteniia",
      subcategory: "Цветущие",
      id: "R29",
      available: true,
      quantity: 1
    },
    {
      image: "strelitzia.jpeg",
      name: "Cтрелиция",
      price: 995,
      category: "rasteniia",
      subcategory: "Цветущие",
      id: "R30",
      available: true,
      quantity: 1
    },
    {
      image: "syngonium_white_butterfly.jpeg",
      name: "Сингониум",
      price: 560,
      category: "rasteniia",
      subcategory: "Декоративно-лиственные",
      id: "R31",
      available: true,
      quantity: 1
    },
    {
      image: "tolstyanka_sanset.jpeg",
      name: "Толстянка",
      price: 455,
      category: "rasteniia",
      subcategory: "Суккуленты",
      id: "R32",
      available: true,
      quantity: 1
    },
    {
      image: "zamiokulkas.jpeg",
      name: "Замиокулькас",
      price: 865,
      category: "rasteniia",
      subcategory: "Декоративно-лиственные",
      id: "R33",
      available: false,
      quantity: 1
    },
    {
      image: "tsitrus_apelsin.jpeg",
      name: "Цитрус Апельсин",
      price: 1100,
      category: "rasteniia",
      subcategory: "Цитрусовые",
      id: "R34",
      available: true,
      quantity: 1
    },
    {
      image: "tsitrus_kalamondin.jpeg",
      name: "Цитрус Каламондин",
      price: 1150,
      category: "rasteniia",
      subcategory: "Цитрусовые",
      id: "R35",
      available: true,
      quantity: 1
    },
    {
      image: "tsitrus_kumkva-2.jpeg",
      name: "Цитрус Кумкват",
      price: 1500,
      category: "rasteniia",
      subcategory: "Цитрусовые",
      id: "R36",
      available: true,
      quantity: 1
    },
    {
      image: "tsitrus_kumkvat.jpeg",
      name: "Цитрус Кумкват",
      price: 1450,
      category: "rasteniia",
      subcategory: "Цитрусовые",
      id: "R37",
      available: true,
      quantity: 1
    },
    {
      image: "tsitrus_limetta_rosso.jpeg",
      name: "Цитрус Лиметта Россо",
      price: 1550,
      category: "rasteniia",
      subcategory: "Цитрусовые",
      id: "R38",
      available: true,
      quantity: 1
    },
    {
      image: "tsitrus_limon_lunario.jpeg",
      name: "Цитрус Лимон",
      price: 1300,
      category: "rasteniia",
      subcategory: "Цитрусовые",
      id: "R39",
      available: true,
      quantity: 1
    }
  ]

  export default products;