const cardData = [
  {
    id: 1,
    name: "Angel",
    name_CN: "天使",
    keyword: "關鍵字",
    meaning_EN: "Spiritual guidance. Protection from harm",
    meaning_CN: "靈性引導、保護免受傷害",
  },
  {
    id: 2,
    name: "Ant",
    name_CN: "螞蟻",
    keyword: "關鍵字",
    meaning_EN: "Work, achievement, success",
    meaning_CN: "工作、成就、成功",
  },
  {
    id: 3,
    name: "Apple",
    name_CN: "蘋果",
    keyword: "關鍵字",
    meaning_EN: "Temptation will test you",
    meaning_CN: "誘惑將會考驗你",
  },
  {
    id: 4,
    name: "Archway",
    name_CN: "拱門",
    keyword: "關鍵字",
    meaning_EN: "New opportunities, possibilities, and paths opening up",
    meaning_CN: "新的機會、可能性和道路的開闢",
  },
  {
    id: 5,
    name: "Arrow",
    name_CN: "箭",
    keyword: "關鍵字",
    meaning_EN: "You are on the right path regarding some aspect of your life",
    meaning_CN: "在某方面，你正走在正確的道路上",
  },
  {
    id: 6,
    name: "Axe",
    name_CN: "斧頭",
    keyword: "關鍵字",
    meaning_EN: "Forces working against you",
    meaning_CN: "有力量反對你",
  },
  {
    id: 7,
    name: "Bag",
    name_CN: "袋子",
    keyword: "關鍵字",
    meaning_EN: "Something important, such as a new job or a raise",
    meaning_CN: "重要的事物，比如新工作或加薪",
  },
  {
    id: 8,
    name: "Barrel",
    name_CN: "桶",
    keyword: "關鍵字",
    meaning_EN:
      "You feel something is lacking in your life, perhaps love, money, or goals",
    meaning_CN: "你感覺生活中某些方面缺少了些什麼，也許是愛情、金錢或目標",
  },
  {
    id: 9,
    name: "Basket",
    name_CN: "籃子",
    keyword: "關鍵字",
    meaning_EN: "Recognition. Reward for merit",
    meaning_CN: "被認可。對功績的獎勵",
  },
  {
    id: 10,
    name: "Bat",
    name_CN: "蝙蝠",
    keyword: "關鍵字",
    meaning_EN: "Take care - enemies are working against you",
    meaning_CN: "小心 - 敵人正在對付你",
  },
  {
    id: 11,
    name: "Bear",
    name_CN: "熊",
    keyword: "關鍵字",
    meaning_EN: "Danger, especially in money matters",
    meaning_CN: "危險，尤其是在金錢方面",
  },
  {
    id: 12,
    name: "Beetle",
    name_CN: "甲蟲",
    keyword: "關鍵字",
    meaning_EN: "Good fortune",
    meaning_CN: "好運",
  },
  {
    id: 13,
    name: "Bell",
    name_CN: "鈴鐺",
    keyword: "關鍵字",
    meaning_EN: "Announcement",
    meaning_CN: "宣佈、消息",
  },
  {
    id: 14,
    name: "Bird",
    name_CN: "鳥飛",
    keyword: "關鍵字",
    meaning_EN: "flying - News is on the way",
    meaning_CN: "消息即將到來",
  },
  {
    id: 15,
    name: "Bird-perched",
    name_CN: "鳥停息",
    keyword: "關鍵字",
    meaning_EN: "Waiting for news, package, letter",
    meaning_CN: "等待消息、包裹、信件",
  },
  {
    id: 16,
    name: "Boat",
    name_CN: "船",
    keyword: "關鍵字",
    meaning_EN:
      "Money or property through an inheritance, winning, or windfall",
    meaning_CN: "通過繼承、獲勝或意外之財獲得金錢或財產",
  },
  {
    id: 17,
    name: "Boot",
    name_CN: "靴子",
    keyword: "關鍵字",
    meaning_EN: "Increase your efforts if you want to achieve your goals",
    meaning_CN: "如果你想達成目標，增加你的努力",
  },
  {
    id: 18,
    name: "Bouquet",
    name_CN: "花束",
    keyword: "關鍵字",
    meaning_EN: "Compliments from an admirer",
    meaning_CN: "來自仰慕者的讚美",
  },
  {
    id: 19,
    name: "Bow",
    name_CN: "鞠躬",
    keyword: "關鍵字",
    meaning_EN: "You are highly thought of",
    meaning_CN: "你受到高度重視 / 別人對你有很高的評價",
  },
  {
    id: 20,
    name: "Bowl",
    name_CN: "碗",
    keyword: "關鍵字",
    meaning_EN: "Plenty of material things",
    meaning_CN: "豐富的物質財富",
  },
  {
    id: 21,
    name: "Box",
    name_CN: "盒子",
    keyword: "關鍵字",
    meaning_EN: "You will receive a gift",
    meaning_CN: "您將收到一份禮物",
  },
  {
    id: 22,
    name: "Bread",
    name_CN: "麵包",
    keyword: "關鍵字",
    meaning_EN: "Period of prosperity and abundance",
    meaning_CN: "繁榮和豐收的時期",
  },
  {
    id: 23,
    name: "Bridge",
    name_CN: "橋",
    keyword: "關鍵字",
    meaning_EN: "Successfully overcoming a problem",
    meaning_CN: "成功克服一個問題",
  },
  {
    id: 24,
    name: "Broken bridge",
    name_CN: "斷橋",
    keyword: "關鍵字",
    meaning_EN: "Unsuccessful outcome to a problem",
    meaning_CN: "問題的不成功結果",
  },
  {
    id: 25,
    name: "Broken ring",
    name_CN: "戒指破碎",
    keyword: "關鍵字",
    meaning_EN: "Parting of the ways in either romance or business",
    meaning_CN: "愛情或事業的分道揚鑣",
  },
  {
    id: 26,
    name: "Broken Wishbone",
    name_CN: "叉骨折斷",
    keyword: "關鍵字",
    meaning_EN: "Wish will not be granted",
    meaning_CN: "願望無法實現",
  },
  {
    id: 27,
    name: "Broom",
    name_CN: "掃帚",
    keyword: "關鍵字",
    meaning_EN: "New home, New attitude",
    meaning_CN: "新家、新態度",
  },
  {
    id: 28,
    name: "Bull",
    name_CN: "公牛",
    keyword: "關鍵字",
    meaning_EN: "Do not back down from opposition. Show strength and fortitude",
    meaning_CN: "不要因反對而退縮，展現力量和毅力",
  },
  {
    id: 29,
    name: "Butterfly",
    name_CN: "蝴蝶",
    keyword: "關鍵字",
    meaning_EN: "A change for the better",
    meaning_CN: "向著更好的方向改變",
  },
  {
    id: 30,
    name: "Camel",
    name_CN: "駱駝",
    keyword: "關鍵字",
    meaning_EN: "Persevere and you will overcome problems",
    meaning_CN: "堅持下去，你就會克服困難",
  },
  {
    id: 31,
    name: "Candle",
    name_CN: "蠟燭",
    keyword: "關鍵字",
    meaning_EN: "You will be shown the way",
    meaning_CN: "將為您指明道路",
  },
  {
    id: 32,
    name: "Cane",
    name_CN: "拐杖",
    keyword: "關鍵字",
    meaning_EN: "Pay attention to your health",
    meaning_CN: "注意身體健康",
  },
  {
    id: 33,
    name: "Carriage",
    name_CN: "旅程",
    keyword: "關鍵字",
    meaning_EN: "A journey, either physical or mental",
    meaning_CN: "身體或精神的旅程",
  },
  {
    id: 34,
    name: "Carrot",
    name_CN: "胡蘿蔔",
    keyword: "關鍵字",
    meaning_EN: "Opportunity or windfall",
    meaning_CN: "機會或意外之財",
  },
  {
    id: 35,
    name: "Casket",
    name_CN: "棺材",
    keyword: "關鍵字",
    meaning_EN: "Someone going out of your life or the end of a situation",
    meaning_CN: "有人即將離開你的生活或一個情況的結束",
  },
  {
    id: 36,
    name: "Cat",
    name_CN: "貓",
    keyword: "關鍵字",
    meaning_EN: "A two - faced friend",
    meaning_CN: "有兩張臉的朋友",
  },
  {
    id: 37,
    name: "Caterpillar",
    name_CN: "毛毛蟲",
    keyword: "關鍵字",
    meaning_EN: "Things will not always be this way. A Change is coming",
    meaning_CN: "事情不會永遠這樣，變化即將來臨",
  },
  {
    id: 38,
    name: "Chain",
    name_CN: "鏈",
    keyword: "關鍵字",
    meaning_EN: "Chain of events that will affect your life",
    meaning_CN: "一連串的事件將影響你的生活",
  },
  {
    id: 39,
    name: "Chair-empty",
    name_CN: "椅子",
    keyword: "關鍵字",
    meaning_EN: "Someone is leaving your life",
    meaning_CN: "空著 - 有人正在離開你的生活",
  },
  {
    id: 40,
    name: "Chair-Filled",
    name_CN: "椅子-佔據/充滿",
    keyword: "關鍵字",
    meaning_EN: "Someone new is entering your life",
    meaning_CN: "有新的人即將進入你的生活",
  },
  {
    id: 41,
    name: "Claw",
    name_CN: "爪子",
    keyword: "關鍵字",
    meaning_EN: "Be careful - do not take risks",
    meaning_CN: "小心 - 不要冒險",
  },
  {
    id: 42,
    name: "Clouds",
    name_CN: "雲",
    keyword: "關鍵字",
    meaning_EN: "Temporary problems",
    meaning_CN: "暫時的問題",
  },
  {
    id: 43,
    name: "Club",
    name_CN: "棒子",
    keyword: "關鍵字",
    meaning_EN: "Someone will try to make you do something against your will",
    meaning_CN: "有人會試圖強迫你做一些違背你意願的事情",
  },
  {
    id: 44,
    name: "Cobweb",
    name_CN: "蜘蛛網",
    keyword: "關鍵字",
    meaning_EN: "Protected from negative forces beyond your control",
    meaning_CN: "受到你無法控制的負面力量的保護",
  },
  {
    id: 45,
    name: "Coins",
    name_CN: "硬幣",
    keyword: "關鍵字",
    meaning_EN: "Money will be coming to you",
    meaning_CN: "錢會來找你",
  },
  {
    id: 46,
    name: "Cracked Cup",
    name_CN: "破碎的杯子",
    keyword: "關鍵字",
    meaning_EN: "Dissatisfaction with life",
    meaning_CN: "對生活不滿",
  },
  {
    id: 47,
    name: "Crib",
    name_CN: "嬰兒床",
    keyword: "關鍵字",
    meaning_EN: "Birth or conception of a child or enterprise",
    meaning_CN: "孩子的誕生或構想、企業的開展",
  },
  {
    id: 48,
    name: "Crown",
    name_CN: "皇冠",
    keyword: "關鍵字",
    meaning_EN: "Honor and respect will come to you",
    meaning_CN: "榮譽和尊重將會降臨到你身上",
  },
  {
    id: 49,
    name: "Cup",
    name_CN: "杯子",
    keyword: "關鍵字",
    meaning_EN: "You should accept valid criticism",
    meaning_CN: "你應該接受有效的批評",
  },
  {
    id: 50,
    name: "Dagger",
    name_CN: "匕首",
    keyword: "關鍵字",
    meaning_EN: "Fear, worries, tense situations",
    meaning_CN: "恐懼、擔憂、緊張的情況",
  },
  {
    id: 51,
    name: "Dark Man",
    name_CN: "深色男人",
    keyword: "關鍵字",
    meaning_EN:
      "Dealings or relationship with a man with dark complexion or hair",
    meaning_CN: "與深色膚色或頭髮的男人打交道或建立關係",
  },
  {
    id: 52,
    name: "Dark Woman",
    name_CN: "深色女人",
    keyword: "關鍵字",
    meaning_EN:
      "Dealings or relationship with a woman with dark complexion or hair",
    meaning_CN: "與深色膚色或頭髮的女人打交道或建立關係",
  },
  {
    id: 53,
    name: "Desk",
    name_CN: "辦公桌",
    keyword: "關鍵字",
    meaning_EN: "Pay attention to your work",
    meaning_CN: "專注於你的工作",
  },
  {
    id: 54,
    name: "Diamond",
    name_CN: "鑽石",
    keyword: "關鍵字",
    meaning_EN: "You'll be receiving or giving a precious gift",
    meaning_CN: "你將會收到或者送出一份珍貴的禮物",
  },
  {
    id: 55,
    name: "Dog",
    name_CN: "狗",
    keyword: "關鍵字",
    meaning_EN: "Protection from a powerful friend",
    meaning_CN: "有一位強大朋友的保護",
  },
  {
    id: 56,
    name: "Dogs",
    name_CN: "狗",
    keyword: "關鍵字",
    meaning_EN: "Getting together with friends",
    meaning_CN: "與朋友聚在一起",
  },
  {
    id: 57,
    name: "Dog",
    name_CN: "狗",
    keyword: "關鍵字",
    meaning_EN: "Barking - Advice from a friend",
    meaning_CN: "吠叫 - 朋友的建議",
  },
  {
    id: 58,
    name: "Dog",
    name_CN: "狗",
    keyword: "關鍵字",
    meaning_EN: "Close Up - Pleasure with a close friend",
    meaning_CN: "靠近 - 與親近的朋友共享愉悅",
  },
  {
    id: 59,
    name: "Dog Far away",
    name_CN: "狗",
    keyword: "關鍵字",
    meaning_EN: "A distant friend is thinking of you",
    meaning_CN: "遠方的朋友正在想念你",
  },
  {
    id: 60,
    name: "Dolphin",
    name_CN: "海豚",
    keyword: "關鍵字",
    meaning_EN:
      "Financial gain, usually coming from something you did the past",
    meaning_CN: "經濟收益，通常來自你過去做過的事情",
  },
  {
    id: 61,
    name: "Door",
    name_CN: "門",
    keyword: "關鍵字",
    meaning_EN: "Opportunities are waiting for you",
    meaning_CN: "機會在等你",
  },
  {
    id: 62,
    name: "Dragon",
    name_CN: "龍",
    keyword: "關鍵字",
    meaning_EN: "Beware of self-delusion",
    meaning_CN: "謹防自欺欺人",
  },
  {
    id: 63,
    name: "Eagle",
    name_CN: "鷹",
    keyword: "關鍵字",
    meaning_EN: "Triumph over troubled, obstacles",
    meaning_CN: "克服困難，戰勝障礙",
  },
  {
    id: 64,
    name: "Ear",
    name_CN: "耳朵",
    keyword: "關鍵字",
    meaning_EN: "Good news",
    meaning_CN: "好消息",
  },
  {
    id: 65,
    name: "Egg",
    name_CN: "蛋",
    keyword: "關鍵字",
    meaning_EN: "Success assured with good plans and hard work",
    meaning_CN: "良好的計劃和努力工作保證成功",
  },
  {
    id: 66,
    name: "Elephant",
    name_CN: "大象",
    keyword: "關鍵字",
    meaning_EN:
      "A long journey, either physical or mental, will leave you wiser at the end",
    meaning_CN:
      "段漫長的旅程，無論是身體上還是精神上，最終都會讓你變得更加明智",
  },
  {
    id: 67,
    name: "Eye",
    name_CN: "眼睛",
    keyword: "關鍵字",
    meaning_EN: "Psychic ability - trust your intuition",
    meaning_CN: "心靈能力，相信你的直覺",
  },
  {
    id: 68,
    name: "Fair Man",
    name_CN: "金髮男人",
    keyword: "關鍵字",
    meaning_EN:
      "Dealings or relationship with a man with blonde, gray, or white hair",
    meaning_CN: "與金髮、灰髮或白髮男子的交往或關係",
  },
  {
    id: 69,
    name: "Fair woman",
    name_CN: "金髮女人",
    keyword: "關鍵字",
    meaning_EN:
      "Dealings or relationship with a woman with blonde, gray, or white hair",
    meaning_CN: "與金髮、灰髮或白髮女性的交往或關係",
  },
  {
    id: 70,
    name: "Fan",
    name_CN: "扇子",
    keyword: "關鍵字",
    meaning_EN: "Romance, celebration, party",
    meaning_CN: "浪漫、慶典、派對",
  },
  {
    id: 71,
    name: "Feather",
    name_CN: "羽毛",
    keyword: "關鍵字",
    meaning_EN: "Someone you know is undependable and insincere",
    meaning_CN: "代表你認識的某人不可靠且不真誠",
  },
  {
    id: 72,
    name: "Finger",
    name_CN: "手指",
    keyword: "關鍵字",
    meaning_EN: "Waring you of a problem either now in the near future",
    meaning_CN: "警告你目前或不久的將來會有問題",
  },
  {
    id: 73,
    name: "Fire",
    name_CN: "火",
    keyword: "關鍵字",
    meaning_EN: "Strong emotion. Passionate love or hate",
    meaning_CN: "強烈的情感。熱烈的愛或恨",
  },
  {
    id: 74,
    name: "Firecracker",
    name_CN: "鞭炮",
    keyword: "關鍵字",
    meaning_EN: "Excitement",
    meaning_CN: "興奮",
  },
  {
    id: 75,
    name: "Flag",
    name_CN: "旗幟",
    keyword: "關鍵字",
    meaning_EN: "Do not be tempted to lower your standards",
    meaning_CN: "不要被誘惑降低你的標準",
  },
  {
    id: 76,
    name: "Flowers ",
    name_CN: "花朵",
    keyword: "關鍵字",
    meaning_EN: "Happiness",
    meaning_CN: "幸福 (一種積極、快樂、滿足的情感和狀態)",
  },
  {
    id: 77,
    name: "Flute",
    name_CN: "長笛",
    keyword: "關鍵字",
    meaning_EN: "Disappointment in a friend or lover",
    meaning_CN: "對朋友或愛人感到失望",
  },
  {
    id: 78,
    name: "Fly",
    name_CN: "飛蠅",
    keyword: "關鍵字",
    meaning_EN: "A period of ill health. Depression",
    meaning_CN: "一段身體不適和抑鬱的時期",
  },
  {
    id: 79,
    name: "Forest ",
    name_CN: "森林",
    keyword: "關鍵字",
    meaning_EN: "Muddled, unclear thinking",
    meaning_CN: "思維混亂、不清晰",
  },
  {
    id: 80,
    name: "Four",
    name_CN: "四葉草",
    keyword: "關鍵字",
    meaning_EN: "Leaf clover - Great, good fortune",
    meaning_CN: "太好了，好運",
  },
  {
    id: 81,
    name: "Fox",
    name_CN: "狐狸",
    keyword: "關鍵字",
    meaning_EN: "Shrewdness and resourcefulness, especially in business",
    meaning_CN: "精明、足智多謀，特別是在商業領域",
  },
  {
    id: 82,
    name: "Frying pan",
    name_CN: "煎鍋",
    keyword: "關鍵字",
    meaning_EN: "Trouble, accusations",
    meaning_CN: "麻煩，指責",
  },
  {
    id: 83,
    name: "Funnel",
    name_CN: "漏斗",
    keyword: "關鍵字",
    meaning_EN: "Period of frustration. Lessons to be learned",
    meaning_CN: "沮喪的時期，需要學習的教訓",
  },
  {
    id: 84,
    name: "Gavel",
    name_CN: "法槌",
    keyword: "關鍵字",
    meaning_EN: "Involvement with the law",
    meaning_CN: "與法律的牽連",
  },
  {
    id: 85,
    name: "Goldfish",
    name_CN: "金魚",
    keyword: "關鍵字",
    meaning_EN: "Increase in material wealth or spiritual growth",
    meaning_CN: "物質財富或精神成長的增長",
  },
  {
    id: 86,
    name: "Gong",
    name_CN: "鑼",
    keyword: "關鍵字",
    meaning_EN: "An exciting event",
    meaning_CN: "一個令人興奮的事件",
  },
  {
    id: 87,
    name: "Grapes",
    name_CN: "葡萄",
    keyword: "關鍵字",
    meaning_EN: "Time to go out and have fun",
    meaning_CN: "是時候外出玩樂了",
  },
  {
    id: 88,
    name: "Grasshopper ",
    name_CN: "蚱蜢",
    keyword: "關鍵字",
    meaning_EN: "Situations on the balance that require careful handling",
    meaning_CN: "某種局勢或情況處於一種脆弱的平衡狀態，需要小心處理",
  },
  {
    id: 89,
    name: "Hammock",
    name_CN: "吊床",
    keyword: "關鍵字",
    meaning_EN: "Taking a vacation, physically or mentally",
    meaning_CN: "休假，無論是身體上還是精神上",
  },
  {
    id: 90,
    name: "Hand",
    name_CN: "手",
    keyword: "關鍵字",
    meaning_EN: "In need of help, assistance, and guidance",
    meaning_CN: "需要幫助、協助和指導",
  },
  {
    id: 91,
    name: "Handshake",
    name_CN: "握手",
    keyword: "關鍵字",
    meaning_EN: "A meeting with a stranger could be important",
    meaning_CN: "與陌生人的會面可能很重要",
  },
  {
    id: 92,
    name: "Harp",
    name_CN: "豎琴",
    keyword: "關鍵字",
    meaning_EN: "Great happiness",
    meaning_CN: "極大的幸福",
  },
  {
    id: 93,
    name: "Hat",
    name_CN: "帽子",
    keyword: "關鍵字",
    meaning_EN: "You will be playing a different role",
    meaning_CN: "你將扮演不同的角色",
  },
  {
    id: 94,
    name: "Haystack",
    name_CN: "乾草堆",
    keyword: "關鍵字",
    meaning_EN: "Karma - You will reap what you have sown",
    meaning_CN: "業力 - 種瓜得瓜，種豆得豆",
  },
  {
    id: 95,
    name: "Heart",
    name_CN: "心",
    keyword: "關鍵字",
    meaning_EN: "Love, deep affection, and caring",
    meaning_CN: "愛、深情和關懷",
  },
  {
    id: 96,
    name: "Hills",
    name_CN: "山丘",
    keyword: "關鍵字",
    meaning_EN: "Obstacles to overcome",
    meaning_CN: "需要克服的障礙",
  },
  {
    id: 97,
    name: "Horse",
    name_CN: "馬",
    keyword: "關鍵字",
    meaning_EN: "Short journey",
    meaning_CN: "短途旅行",
  },
  {
    id: 98,
    name: "Horseshoe",
    name_CN: "馬蹄鐵",
    keyword: "關鍵字",
    meaning_EN: "Good luck",
    meaning_CN: "好運",
  },
  {
    id: 99,
    name: "Ink pot",
    name_CN: "墨水壺",
    keyword: "關鍵字",
    meaning_EN: "Problems to be resolved",
    meaning_CN: "待解決的問題",
  },
  {
    id: 100,
    name: "Jug",
    name_CN: "罐子",
    keyword: "關鍵字",
    meaning_EN: "Lighthearted, carefree time",
    meaning_CN: "愉快、無憂無慮的時光",
  },
  {
    id: 101,
    name: "Kangaroo",
    name_CN: "袋鼠",
    keyword: "關鍵字",
    meaning_EN: "Unsettled times. Need to plan ahead",
    meaning_CN: "不穩定的時期。需要提前計劃",
  },
  {
    id: 102,
    name: "Key",
    name_CN: "問題",
    keyword: "關鍵字",
    meaning_EN: "Successful outcome to your problems",
    meaning_CN: "問題的成功解決",
  },
  {
    id: 103,
    name: "Kite",
    name_CN: "風箏",
    keyword: "關鍵字",
    meaning_EN: "Vacation",
    meaning_CN: "假期",
  },
  {
    id: 104,
    name: "Knot",
    name_CN: "結",
    keyword: "關鍵字",
    meaning_EN: "Unsuccessful plans",
    meaning_CN: "不成功的計劃",
  },
  {
    id: 105,
    name: "Ladder",
    name_CN: "梯子",
    keyword: "關鍵字",
    meaning_EN: "Climbing toward success",
    meaning_CN: "正在攀爬朝著成功的方向",
  },
  {
    id: 106,
    name: "Leg",
    name_CN: "腿",
    keyword: "關鍵字",
    meaning_EN: "Stepping into a new experience",
    meaning_CN: "步入新體驗",
  },
  {
    id: 107,
    name: "Lighting",
    name_CN: "燈光",
    keyword: "關鍵字",
    meaning_EN: "Control your anger or you will be sorry",
    meaning_CN: "控制你的憤怒，否則你會後悔的",
  },
  {
    id: 108,
    name: "Lily",
    name_CN: "百合",
    keyword: "關鍵字",
    meaning_EN: "Spiritual love",
    meaning_CN: "心靈的愛",
  },
  {
    id: 109,
    name: "Lion",
    name_CN: "獅子",
    keyword: "關鍵字",
    meaning_EN: "Time to cat",
    meaning_CN: "是時候發威了",
  },
  {
    id: 110,
    name: "Lobster",
    name_CN: "龍蝦",
    keyword: "關鍵字",
    meaning_EN: "Financial pinch",
    meaning_CN: "經濟拮据",
  },
  {
    id: 111,
    name: "Man",
    name_CN: "男人",
    keyword: "關鍵字",
    meaning_EN: "Dealings or relationship with a man",
    meaning_CN: "與男人的交往或關係",
  },
  {
    id: 112,
    name: "Mice",
    name_CN: "老鼠",
    keyword: "關鍵字",
    meaning_EN: "Discord among friends or family",
    meaning_CN: "朋友或家人之間的不和",
  },
  {
    id: 113,
    name: "Money Path",
    name_CN: "金錢之路",
    keyword: "關鍵字",
    meaning_EN: "A path with money is waiting for you to find it",
    meaning_CN: "一條有錢的路正在等待你去發現",
  },
  {
    id: 114,
    name: "Moon",
    name_CN: "月亮",
    keyword: "關鍵字",
    meaning_EN: "Changes in your life",
    meaning_CN: "你生活中的變化",
  },
  {
    id: 115,
    name: "Mountain",
    name_CN: "山",
    keyword: "關鍵字",
    meaning_EN: "Major challenge to overcome",
    meaning_CN: "需要克服的重大挑戰",
  },
  {
    id: 116,
    name: "Mountain Road",
    name_CN: "山路",
    keyword: "關鍵字",
    meaning_EN: "You are on the road to success",
    meaning_CN: "你正在邁向成功之路",
  },
  {
    id: 117,
    name: "Mule",
    name_CN: "騾子",
    keyword: "關鍵字",
    meaning_EN: "Someone is extremely stubborn and unwilling to change",
    meaning_CN: "指某人極度固執且不願改變",
  },
  {
    id: 118,
    name: "Needle & Thread",
    name_CN: "針&線",
    keyword: "關鍵字",
    meaning_EN: "A sincere wish will granted",
    meaning_CN: "一個真摯的願望將會實現",
  },
  {
    id: 119,
    name: "Nest",
    name_CN: "巢",
    keyword: "關鍵字",
    meaning_EN: "An emotionally secure loving family is important to you",
    meaning_CN: "一個情感安全的愛心家庭對你來說很重要",
  },
  {
    id: 120,
    name: "Older Man",
    name_CN: "年長的男人",
    keyword: "關鍵字",
    meaning_EN: "Dealing or relationship with an older man",
    meaning_CN: "與年長男性交往或建立關係",
  },
  {
    id: 121,
    name: "Older Woman",
    name_CN: "年長的女人",
    keyword: "關鍵字",
    meaning_EN: "Dealings or relationship with a older woman",
    meaning_CN: "與年長女性的交往或關係",
  },
  {
    id: 122,
    name: "Owl",
    name_CN: "貓頭鷹",
    keyword: "關鍵字",
    meaning_EN: "Good advice from a wise person",
    meaning_CN: "智者的良言",
  },
  {
    id: 123,
    name: "Pall ",
    name_CN: "苦境",
    keyword: "關鍵字",
    meaning_EN: "Time to get out of a situation",
    meaning_CN: "是時候擺脫困境了",
  },
  {
    id: 124,
    name: "Parrot",
    name_CN: "鸚鵡",
    keyword: "關鍵字",
    meaning_EN: "Someone will gossip about all your secrets",
    meaning_CN: "有人會八卦你所有的秘密",
  },
  {
    id: 125,
    name: "Peacock",
    name_CN: "孔雀",
    keyword: "關鍵字",
    meaning_EN: "Beware of great pride",
    meaning_CN: "小心過度的驕傲",
  },
  {
    id: 126,
    name: "Pig",
    name_CN: "豬",
    keyword: "關鍵字",
    meaning_EN: "Beware of greed",
    meaning_CN: "謹防貪婪",
  },
  {
    id: 127,
    name: "Pin",
    name_CN: "大頭針",
    keyword: "關鍵字",
    meaning_EN: "New job/career",
    meaning_CN: "新工作/職業",
  },
  {
    id: 128,
    name: "Pineapple",
    name_CN: "菠蘿",
    keyword: "關鍵字",
    meaning_EN: "Reconciliation",
    meaning_CN: "和解",
  },
  {
    id: 129,
    name: "Purse",
    name_CN: "錢包",
    keyword: "關鍵字",
    meaning_EN: "Pay attention to your finances",
    meaning_CN: "注意你的財務狀況",
  },
  {
    id: 130,
    name: "Quill",
    name_CN: "鵝毛筆",
    keyword: "關鍵字",
    meaning_EN: "Get back to the basics",
    meaning_CN: "回歸基本/基礎",
  },
  {
    id: 131,
    name: "Rabbit",
    name_CN: "兔子",
    keyword: "關鍵字",
    meaning_EN: "Too much concern with sexual matters",
    meaning_CN: "對性事過於關注",
  },
  {
    id: 132,
    name: "Rainbow",
    name_CN: "彩虹",
    keyword: "關鍵字",
    meaning_EN: "The most difficult part of a situation is over",
    meaning_CN: "情況中最困難的部分已經過去",
  },
  {
    id: 133,
    name: "Ram",
    name_CN: "公羊",
    keyword: "關鍵字",
    meaning_EN: "A stubborn, aggressive person",
    meaning_CN: "頑固、具侵略性的人",
  },
  {
    id: 134,
    name: "Rat",
    name_CN: "鼠",
    keyword: "關鍵字",
    meaning_EN: "Someone working against you behind your back",
    meaning_CN: "有人在背後對你不利",
  },
  {
    id: 135,
    name: "Ring",
    name_CN: "戒指",
    keyword: "關鍵字",
    meaning_EN: "A marriage will take place, either romantic or business",
    meaning_CN: "將會發生婚姻，無論是浪漫的還是商業的",
  },
  {
    id: 136,
    name: "Rooster",
    name_CN: "公雞",
    keyword: "關鍵字",
    meaning_EN: "An arrogant, boastful person you should not cross",
    meaning_CN: "一個傲慢、自吹自擂的人，你不應該與他發生衝突",
  },
  {
    id: 137,
    name: "Rose",
    name_CN: "玫瑰花",
    keyword: "關鍵字",
    meaning_EN: "Romance is in the air",
    meaning_CN: "空氣中瀰漫著浪漫的氣息",
  },
  {
    id: 138,
    name: "Scales",
    name_CN: "天秤",
    keyword: "關鍵字",
    meaning_EN: "Keep your life in balance",
    meaning_CN: "保持生活平衡",
  },
  {
    id: 139,
    name: "Scissor",
    name_CN: "剪刀",
    keyword: "關鍵字",
    meaning_EN: "Disappointment is some affair",
    meaning_CN: "表示某事情中的失望",
  },
  {
    id: 140,
    name: "Seahorse",
    name_CN: "海馬",
    keyword: "關鍵字",
    meaning_EN: "Family matters",
    meaning_CN: "家庭事務",
  },
  {
    id: 141,
    name: "Shark",
    name_CN: "鯊魚",
    keyword: "關鍵字",
    meaning_EN: "Take care of there will be a loss of material wealth",
    meaning_CN: "要小心，可能會有物質財富的損失",
  },
  {
    id: 142,
    name: "Shield",
    name_CN: "盾牌",
    keyword: "關鍵字",
    meaning_EN: "You need to defend yourself",
    meaning_CN: "你需要保護自己",
  },
  {
    id: 143,
    name: "Skull",
    name_CN: "頭骨",
    keyword: "關鍵字",
    meaning_EN: "Hidden secrets can harm you",
    meaning_CN: "隱藏的秘密可能傷害你",
  },
  {
    id: 144,
    name: "Spear",
    name_CN: "矛",
    keyword: "關鍵字",
    meaning_EN: "Heartache over what you no longer have",
    meaning_CN: "為你不再擁有的東西而心痛",
  },
  {
    id: 145,
    name: "Staff",
    name_CN: "拐杖",
    keyword: "關鍵字",
    meaning_EN: "You will be taken care of in difficult times",
    meaning_CN: "在困難時期你會得到照顧",
  },
  {
    id: 146,
    name: "Star",
    name_CN: "星星",
    keyword: "關鍵字",
    meaning_EN: "Guaranteed success",
    meaning_CN: "保證成功",
  },
  {
    id: 147,
    name: "Stork",
    name_CN: "鸛",
    keyword: "關鍵字",
    meaning_EN: "News of a birth or a new business opportunity",
    meaning_CN: "出生或新商機的消息",
  },
  {
    id: 148,
    name: "Sun",
    name_CN: "太陽",
    keyword: "關鍵字",
    meaning_EN: "Happiness and well-being",
    meaning_CN: "幸福與安康",
  },
  {
    id: 149,
    name: "Sunrise",
    name_CN: "日出",
    keyword: "關鍵字",
    meaning_EN: "New creative ideas. New ventures. A fresh start",
    meaning_CN: "新的創意思路。新的事業機會。嶄新的開始",
  },
  {
    id: 150,
    name: "Table",
    name_CN: "桌子",
    keyword: "關鍵字",
    meaning_EN: "Hard work ahead",
    meaning_CN: "未來將面臨辛勤的工作",
  },
  {
    id: 151,
    name: "Tankard",
    name_CN: "啤酒杯",
    keyword: "關鍵字",
    meaning_EN: "Celebration, fun, enjoyment",
    meaning_CN: "慶祝、樂趣、享受",
  },
  {
    id: 152,
    name: "Target",
    name_CN: "目標",
    keyword: "關鍵字",
    meaning_EN: "A goal - oriented person",
    meaning_CN: "目標導向的人",
  },
  {
    id: 153,
    name: "Teapot",
    name_CN: "茶壺",
    keyword: "關鍵字",
    meaning_EN: "Deep friendship with someone of the same sex",
    meaning_CN: "與同性朋友之間的深厚友誼",
  },
  {
    id: 154,
    name: "Teardrops",
    name_CN: "淚水",
    keyword: "關鍵字",
    meaning_EN: "Great personal sorrow",
    meaning_CN: "深刻的個人悲傷",
  },
  {
    id: 155,
    name: "Tent",
    name_CN: "帳篷",
    keyword: "關鍵字",
    meaning_EN: "Temporary situation",
    meaning_CN: "暫時的處境",
  },
  {
    id: 156,
    name: "Throne",
    name_CN: "王座",
    keyword: "關鍵字",
    meaning_EN: "Position of authority",
    meaning_CN: "權威的地位",
  },
  {
    id: 157,
    name: "Tiger",
    name_CN: "虎",
    keyword: "關鍵字",
    meaning_EN: "Doing something risky. Taking a chance",
    meaning_CN: "做一些有風險的事。抓住機會",
  },
  {
    id: 158,
    name: "Torch",
    name_CN: "火炬",
    keyword: "關鍵字",
    meaning_EN:
      "Spiritual development, enlightenment, awareness, and understanding",
    meaning_CN: "靈性成長、開悟、覺知和理解",
  },
  {
    id: 159,
    name: "Tortoise",
    name_CN: "烏龜",
    keyword: "關鍵字",
    meaning_EN: "Slowly but surely getting ahead",
    meaning_CN: "緩慢但堅定地前進",
  },
  {
    id: 160,
    name: "Tower",
    name_CN: "塔",
    keyword: "關鍵字",
    meaning_EN: "Solid foundation. Success with effort",
    meaning_CN: "堅實的基礎，努力奮鬥帶來成功",
  },
  {
    id: 161,
    name: "Tree",
    name_CN: "樹",
    keyword: "關鍵字",
    meaning_EN: "Affairs with your family",
    meaning_CN: "與你的家人的事務有關",
  },
  {
    id: 162,
    name: "Tulip",
    name_CN: "郁金香",
    keyword: "關鍵字",
    meaning_EN: "Great passion",
    meaning_CN: "强烈的激情",
  },
  {
    id: 163,
    name: "Turkey",
    name_CN: "火雞",
    keyword: "關鍵字",
    meaning_EN: "Someone is behaving stupidly",
    meaning_CN: "有人表現愚蠢",
  },
  {
    id: 164,
    name: "Unicorn",
    name_CN: "獨角獸",
    keyword: "關鍵字",
    meaning_EN: "Use your intuition to make beneficial changes",
    meaning_CN: "用你的直覺做出有益的改變",
  },
  {
    id: 165,
    name: "V",
    name_CN: "勝利",
    keyword: "關鍵字",
    meaning_EN: "Victory in some endeavor",
    meaning_CN: "在某些努力中取得勝利",
  },
  {
    id: 166,
    name: "Valley",
    name_CN: "山谷",
    keyword: "關鍵字",
    meaning_EN: "Deep personal strength and peace that assure success",
    meaning_CN: "深厚的個人力量與平靜，保證成功",
  },
  {
    id: 167,
    name: "Vase",
    name_CN: "花瓶",
    keyword: "關鍵字",
    meaning_EN: "Secret admirer",
    meaning_CN: "暗戀者",
  },
  {
    id: 168,
    name: "Vine",
    name_CN: "藤蔓",
    keyword: "關鍵字",
    meaning_EN: "Seek out information that will help you",
    meaning_CN: "尋找對您有幫助的訊息",
  },
  {
    id: 169,
    name: "Vulture",
    name_CN: "禿鷹",
    keyword: "關鍵字",
    meaning_EN: "Depression, anxiety. Worry that someone is against you",
    meaning_CN: "憂鬱、焦慮。擔心有人反對你",
  },
  {
    id: 170,
    name: "Wall",
    name_CN: "牆",
    keyword: "關鍵字",
    meaning_EN: "Misunderstanding",
    meaning_CN: "誤會、誤解",
  },
  {
    id: 171,
    name: "Wedge",
    name_CN: "楔子",
    keyword: "關鍵字",
    meaning_EN:
      "Someone is trying to come between you and a friend or something you want",
    meaning_CN: "有人正試圖介入你和朋友之間，或是你想要的某件事情",
  },
  {
    id: 172,
    name: "Weeping willow",
    name_CN: "垂柳",
    keyword: "關鍵字",
    meaning_EN: "Family sorrow",
    meaning_CN: "家庭悲傷",
  },
  {
    id: 173,
    name: "Well",
    name_CN: "井水",
    keyword: "關鍵字",
    meaning_EN: "Family wishes come true",
    meaning_CN: "家庭願望成真",
  },
  {
    id: 174,
    name: "Whale",
    name_CN: "鯨魚",
    keyword: "關鍵字",
    meaning_EN: "Great worry over nothing",
    meaning_CN: "對無關緊要事情的極大擔憂",
  },
  {
    id: 175,
    name: "Wheel",
    name_CN: "輪子",
    keyword: "關鍵字",
    meaning_EN: "Indecisiveness. Allowing your life to ramble aimlessly",
    meaning_CN: "無所作為，讓你的生活漫無目的地漫遊",
  },
  {
    id: 176,
    name: "Wind Chimes",
    name_CN: "風鈴",
    keyword: "關鍵字",
    meaning_EN: "Peace and harmony",
    meaning_CN: "和平與和諧",
  },
  {
    id: 177,
    name: "Wishbone",
    name_CN: "叉骨",
    keyword: "關鍵字",
    meaning_EN: "A wish is granted",
    meaning_CN: "願望實現",
  },
  {
    id: 178,
    name: "Woman",
    name_CN: "女人",
    keyword: "關鍵字",
    meaning_EN: "Dealings or relationship with a woman",
    meaning_CN: "與女人的交往或關係",
  },
  {
    id: 179,
    name: "Wreath",
    name_CN: "花環",
    keyword: "關鍵字",
    meaning_EN: "Sorrow over a loss",
    meaning_CN: "因失去而悲傷",
  },
  {
    id: 180,
    name: "Yoke",
    name_CN: "枷鎖",
    keyword: "關鍵字",
    meaning_EN: "Feeling tied down, or frustrated",
    meaning_CN: "感覺被束縛或沮喪",
  },
  {
    id: 181,
    name: "Younger man",
    name_CN: "年輕男子",
    keyword: "關鍵字",
    meaning_EN: "Dealings or relationship with a younger man",
    meaning_CN: "與年輕男子的互動或關係",
  },
  {
    id: 182,
    name: "Younger woman",
    name_CN: "年輕女子",
    keyword: "關鍵字",
    meaning_EN: "Dealings or relationship with a younger woman",
    meaning_CN: "與年輕女性的交往或關係",
  },
];

export default cardData;
