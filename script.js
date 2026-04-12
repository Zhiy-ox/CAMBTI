const brandProfiles = {
  FUJI: {
    code: "FUJI",
    name: "氛围诈骗师",
    subtitle: "你拍的不是照片，是一场关于合焦与否都不重要的氛围政变。",
    summary:
      "你相信摄影首先要有味道，其次才轮得到合焦。别人放大检查糊片时，你会像新闻发言人一样冷静回应：这不是虚，这叫空气感在工作。",
    detail:
      "你对胶片模拟的热情，高于大多数人对本职工作的热情。你拍咖啡、路灯、朋友背影和便利店玻璃门，核心不是记录现实，是证明自己审美这把又赢了。",
    declaration: "“先别拿放大镜查户口，你先说这张是不是有那种很会讲故事的劲儿。”",
    strengths: "直出省事、色调自带滤镜、随便发图都像在说‘我审美没塌房’。",
    warning: "对焦一旦抽风，你会瞬间进入嘴硬二阶段，把跑焦包装成情绪流动。",
    compatibility: "Sony 用户嫌你慢，Ricoh 用户秒懂你，Canon 用户会默默把自己的肤色再调暖一点。",
    traits: {
      retro: 94,
      autofocus: 32,
      menus: 55,
      video: 24,
      street: 76,
      gear: 68,
      redDot: 22,
      outdoors: 41,
      luxury: 55,
      aerial: 4,
    },
  },
  SONY: {
    code: "SONY",
    name: "参数老法师",
    subtitle: "你不是在拍照，你是在启动一套抓拍成功率高到可怕的工业系统。",
    summary:
      "你对焦快、连拍猛、眼控稳，连抱怨菜单的时候都透着一种工业级自信。你嘴上说不在意颜值，包里却总有一支 GM 镜头负责让别人原地破防。",
    detail:
      "你会在饭局上无意识提起动态范围，也会在别人跑焦时露出那种‘我早就说了吧’的职业微笑。你对相机的爱，核心是四个字：别给我漏。",
    declaration: "“色彩都能后期，抓不到才是真的要在现场高血压。”",
    strengths: "成功率高、弱光不怂、焦点像黏了 502 一样跟着主体走。",
    warning: "你对菜单的抱怨永远成立，但你又会很骄傲地证明自己已经把它背成了肌肉记忆。",
    compatibility: "Canon 用户觉得你冷血，Leica 用户觉得你像家电，Nikon 用户嘴上不服但心里知道你是真快。",
    traits: {
      retro: 18,
      autofocus: 96,
      menus: 88,
      video: 84,
      street: 48,
      gear: 86,
      redDot: 12,
      outdoors: 58,
      luxury: 18,
      aerial: 26,
    },
  },
  CANON: {
    code: "CANON",
    name: "影楼救火队长",
    subtitle: "你最擅长的不是吵参数，而是在所有场合都不翻车。",
    summary:
      "你是那种会被朋友默认安排去拍合照的人。你不追求最极端的数值，只求别翻车、别发灰、别在婚礼现场被七大姑八大姨围住问到底会不会拍。",
    detail:
      "你对‘稳定’有近乎宗教式的依赖。你未必天天上论坛跟人对线，但最后大家还是会把 SD 卡塞给你，让你去扛住真正的现实世界。",
    declaration: "“不管网上怎么打架，最后扛着照片回家救全家的还是我。”",
    strengths: "肤色讨喜、上手快、交作业能力极强，属于长辈看了点头客户看了打钱。",
    warning: "你表面佛系，实际上刷到 Sony 对焦视频时还是会偷偷点开评论区做功课。",
    compatibility: "谁都能跟你一起拍，但你心里还是会觉得 Fuji 用户戏确实有点密。",
    traits: {
      retro: 36,
      autofocus: 78,
      menus: 61,
      video: 59,
      street: 40,
      gear: 57,
      redDot: 9,
      outdoors: 54,
      luxury: 20,
      aerial: 9,
    },
  },
  NIKON: {
    code: "NIKON",
    name: "打鸟战神",
    subtitle: "你看见一只鸟，别人看见你这一身装备终于有了用武之地。",
    summary:
      "你非常相信长焦、握持和一切带点专业压迫感的东西。别人周末在市区街拍，你在泥地边趴着等鸟起飞，并且觉得这才叫摄影含金量。",
    detail:
      "你对器材的忠诚度很高，对拍摄目标的耐心更高。你嫌别人太爱谈滤镜，不够关心边缘解析、追焦命中和快门时滞，这很尼康。",
    declaration: "“这不是重，这是稳定；这不是蹲点，这是正经人类在观察世界。”",
    strengths: "追焦够狠、握持够爽、打鸟和体育题材里自带一种老法师战斗气场。",
    warning: "你总觉得别人拍得太近，近到像根本没出门，只是在楼下遛了一圈。",
    compatibility: "Sony 是宿敌，Canon 是老对手，OM 用户会给你点一个风雨无阻的尊重。",
    traits: {
      retro: 16,
      autofocus: 87,
      menus: 64,
      video: 31,
      street: 22,
      gear: 74,
      redDot: 6,
      outdoors: 95,
      luxury: 22,
      aerial: 12,
    },
  },
  LEICA: {
    code: "LEICA",
    name: "红点修仙人",
    subtitle: "你买的不是相机，是一套高价、安静、但非常会自圆其说的生活方式。",
    summary:
      "你对质感、手感、仪式感有很高要求，对自动功能却有一种故意疏离。你不太说参数，只会淡淡来一句：它会让人慢下来。",
    detail:
      "你拍照像在做赛博禅修：抬手、构图、等待、轻按。你未必拍得更多，但你很确定自己花的钱买到了别人不一定配懂的平静。",
    declaration: "“它不是给所有人用的，它只是刚好适合我、我的审美和我的账单分期。”",
    strengths: "审美压迫感强、器材存在感高、随便摆在桌上都像生活方式广告封面。",
    warning: "你很容易把预算问题包装成审美命题，然后把冲动消费说成自我教育。",
    compatibility: "Ricoh 用户敬你，Fuji 用户学你，Sony 用户觉得你在给手动对焦写大型公关稿。",
    traits: {
      retro: 91,
      autofocus: 14,
      menus: 26,
      video: 6,
      street: 88,
      gear: 82,
      redDot: 98,
      outdoors: 28,
      luxury: 93,
      aerial: 2,
    },
  },
  RICOH: {
    code: "RICOH",
    name: "街头潜伏犯",
    subtitle: "你不是在散步，你是在等街头突然给你来一口真正的生活感。",
    summary:
      "你坚定相信最好的相机，就是能塞进外套口袋的那台。你爱 GR，不是因为它完美，而是因为它像一种低调、迅速、还很会偷生活的生活方式。",
    detail:
      "你会在人群边缘快速举机、快速收机、快速离开，回家再对着高反差黑白照片满意点头。你不需要所有人懂，你只需要路口别有人挡机位。",
    declaration: "“大机器太有压迫感，小机器才有机会把生活直接偷回来。”",
    strengths: "轻、快、隐蔽、街拍气质拉满，属于一出门就自带‘今天会有东西发生’的预感。",
    warning: "你嘴上说设备越小越自由，实际上已经把同系列买成了一个持续更新的信仰工程。",
    compatibility: "Leica 用户觉得你平替得体，Fuji 用户想跟你交换预设，Canon 用户会担心你这样真的稳吗。",
    traits: {
      retro: 66,
      autofocus: 37,
      menus: 46,
      video: 8,
      street: 97,
      gear: 52,
      redDot: 18,
      outdoors: 33,
      luxury: 19,
      aerial: 3,
    },
  },
  LUMIX: {
    code: "LUMIX",
    name: "视频牛马王",
    subtitle: "你一句‘我也拍拍视频’，预算和存储空间都会立刻原地蒸发。",
    summary:
      "你总说自己是照片视频都兼顾，实际上更像一个随时准备搭工作流的内容创作者。你关心散热、波形图、色深，以及一切让普通人当场退出聊天框的词。",
    detail:
      "你买相机时像在招聘团队成员：稳定性要好，功能要全，最好还能顺手给未来三年的内容转型留后路。你不是犹豫，你是把规划写成了 PPT。",
    declaration: "“拍照是兴趣，视频是顺手，顺便把机器性能和自己一起压榨到位。”",
    strengths: "视频脑清晰、功能全、接口丰富，永远像下一秒就要喊人开机收声。",
    warning: "当别人只是想拍晚饭时，你已经开始思考 V-Log、代理文件、后期时间线和备份盘。",
    compatibility: "Sony 用户认可你的专业，Canon 用户觉得你讲太多，Fuji 用户听到一半就开始偷偷刷胶片模拟。",
    traits: {
      retro: 21,
      autofocus: 53,
      menus: 74,
      video: 97,
      street: 35,
      gear: 79,
      redDot: 4,
      outdoors: 52,
      luxury: 17,
      aerial: 38,
    },
  },
  OM: {
    code: "OM",
    name: "负重焦虑症患者",
    subtitle: "你对小体积和全天候的爱，已经到了别人拿全画幅都劝不动的程度。",
    summary:
      "你会在所有天气里出门，并认真告诉别人防抖和防护才是自由。别人嫌 M4/3 小，你会立刻掏出一整套徒步路线图和腰痛史反驳他。",
    detail:
      "你不是没见过全画幅，你只是更早见过下雨、爬坡、背包重量和第二天腰痛。你对器材的理解建立在长期生存，而不是论坛输赢。",
    declaration: "“能背出去、敢在雨里拍、手持还不糊，这才是真正意义上的能打。”",
    strengths: "便携、防抖、全天候，户外出行像自带一层理智 buff 和防泼溅结界。",
    warning: "你很容易把所有话题都收束到一句：但重量真的很重要，你们先别在这嘴硬。",
    compatibility: "Nikon 用户尊重你的体能，Sony 用户不理解你的感动，Canon 用户会觉得你这人确实过日子。",
    traits: {
      retro: 28,
      autofocus: 58,
      menus: 66,
      video: 38,
      street: 44,
      gear: 63,
      redDot: 5,
      outdoors: 93,
      luxury: 15,
      aerial: 18,
    },
  },
  HASSELBLAD: {
    code: "HASSELBLAD",
    name: "中画幅天仙",
    subtitle: "你拍的是中画幅仙气、空气里的层次，以及预算蒸发后的平静。",
    summary:
      "你对画质、层次、色彩和‘看起来就很贵’这件事有近乎天然的亲和力。你不一定天天出手，但只要一出手，整个人都会进入‘这波看着就很高级’的结界。",
    detail:
      "你会很认真地聊层次、宽容度和那种别人一时半会儿说不清但你坚信存在的高级感。你不怕别人说贵，你怕别人没看出来它到底贵在哪。",
    declaration: "“这不是器材焦虑，这是中画幅审美正在对我的钱包进行素质教育。”",
    strengths: "高级感强、色彩和层次很能打、发图时自带一种‘你们先看懂再来发言’的气场。",
    warning: "你很容易把任何预算问题，翻译成一句‘但这个质感真的不是一个东西’。",
    compatibility: "Leica 用户会对你点头，Fuji 用户会开始幻想毕业那天，Sony 用户会说后期也能做个八成。",
    traits: {
      retro: 82,
      autofocus: 41,
      menus: 45,
      video: 16,
      street: 52,
      gear: 94,
      redDot: 84,
      outdoors: 24,
      luxury: 99,
      aerial: 5,
    },
  },
  DJI: {
    code: "DJI",
    name: "上帝视角导演",
    subtitle: "你不是在拍照，你是在给地球拍一个看起来很贵的俯视开场。",
    summary:
      "你对视角有一种天然的不服气。别人站在地面构图，你第一反应是能不能起飞。你拍的不只是画面，是那种‘这波一升空直接赢麻了’的爽感。",
    detail:
      "你会认真研究禁飞区、返航点、风速、电池循环和日落前最后十分钟。你不是单纯想飞，你是想把普通景色拍成旅游宣传片和地产广告的混合体。",
    declaration: "“地面构图太常规了，这种场景不上天真的有点对不起风景。”",
    strengths: "视角稀缺、旅行含金量高、随手就能把普通地方拍得像项目即将开盘。",
    warning: "你很容易在任何风景里自动脑补一段升空镜头，然后开始手痒、想起飞、想充电。",
    compatibility: "LUMIX 用户想跟你组工作流，OM 用户佩服你电池管理，Leica 用户会觉得你这人属实有点高调。",
    traits: {
      retro: 12,
      autofocus: 71,
      menus: 76,
      video: 94,
      street: 18,
      gear: 73,
      redDot: 7,
      outdoors: 86,
      luxury: 24,
      aerial: 99,
    },
  },
};

const traitLabels = {
  retro: "复古嘴硬值",
  autofocus: "对焦安全感",
  menus: "菜单坐牢耐性",
  video: "视频脑浓度",
  street: "街拍蹲人指数",
  gear: "器材理财幻觉",
  redDot: "品牌信仰税感应",
  outdoors: "户外吃苦含量",
  luxury: "中画幅仙气",
  aerial: "飞天冲动值",
};

const traitShortLabels = {
  retro: "复古嘴硬",
  autofocus: "对焦安全",
  menus: "菜单耐性",
  video: "视频脑",
  street: "街拍蹲人",
  gear: "器材理财",
  redDot: "品牌信仰税",
  outdoors: "户外吃苦",
  luxury: "中画幅仙气",
  aerial: "飞天冲动",
};

const traitDescriptions = {
  retro: "你会不会为了配色和氛围，主动放过理性。",
  autofocus: "你有多不能接受相机没看懂你要拍谁。",
  menus: "你能不能在几十个菜单里继续保持情绪稳定。",
  video: "你脑子里是不是总飘着时间线、LUT 和收音。",
  street: "你出门到底是在散步，还是在蹲生活给你上强度。",
  gear: "你有多擅长把消费翻译成升级和投资。",
  redDot: "你是否容易被品牌神话和 logo 光环瞬间击穿。",
  outdoors: "你会不会为了拍一张图，把自己活成野外纪录片路人甲。",
  luxury: "你对高级感和贵气层次有没有天然臣服。",
  aerial: "你看到风景时，会不会第一反应是想起飞。",
};

const brandVisuals = {
  FUJI: {
    primary: "#7c583d",
    secondary: "#d3a36b",
    accent: "#677a5f",
    paper: "#f4ead9",
  },
  SONY: {
    primary: "#1f2f46",
    secondary: "#6a8db5",
    accent: "#d6e1ef",
    paper: "#edf2f8",
  },
  CANON: {
    primary: "#8f3530",
    secondary: "#d58b75",
    accent: "#f2ddd4",
    paper: "#f9efe8",
  },
  NIKON: {
    primary: "#555028",
    secondary: "#d2b850",
    accent: "#f2e7ae",
    paper: "#f7f1d7",
  },
  LEICA: {
    primary: "#222222",
    secondary: "#b33333",
    accent: "#e8d7d1",
    paper: "#f6f0ec",
  },
  RICOH: {
    primary: "#3d3d43",
    secondary: "#8a8891",
    accent: "#dfdce5",
    paper: "#f2f0f5",
  },
  LUMIX: {
    primary: "#2f3345",
    secondary: "#5a70a2",
    accent: "#ced6ec",
    paper: "#edf1f8",
  },
  OM: {
    primary: "#31534f",
    secondary: "#8ab1ab",
    accent: "#d8ebe7",
    paper: "#eef6f3",
  },
  HASSELBLAD: {
    primary: "#2f4439",
    secondary: "#cc8c58",
    accent: "#f1dfca",
    paper: "#f5efe3",
  },
  DJI: {
    primary: "#2d3741",
    secondary: "#5b8298",
    accent: "#dce8ef",
    paper: "#edf4f7",
  },
};

const brandBadgeLabels = {
  FUJI: "富士",
  SONY: "索尼",
  CANON: "佳能",
  NIKON: "尼康",
  LEICA: "徕卡",
  RICOH: "理光",
  LUMIX: "松下",
  OM: "奥巴",
  HASSELBLAD: "哈苏",
  DJI: "大疆",
};

const siteUrl = window.location.origin + window.location.pathname.replace(/\/[^/]*$/, '/');

const pixelPalettes = {
  FUJI: {
    s: "#efc3a1",
    h: "#4f362e",
    o: "#d6c098",
    a: "#7a5d4c",
    g: "#55664a",
    b: "#d99652",
    l: "#f4ead9",
  },
  SONY: {
    s: "#efc3a1",
    h: "#20283a",
    o: "#394a67",
    a: "#89a8d1",
    g: "#11151f",
    b: "#cad8eb",
    l: "#edf2f8",
  },
  CANON: {
    s: "#efc3a1",
    h: "#4f302a",
    o: "#b44a43",
    a: "#f2ddd4",
    g: "#31343d",
    b: "#e5a18e",
    l: "#f9efe8",
  },
  NIKON: {
    s: "#efc3a1",
    h: "#3e3a24",
    o: "#7a7235",
    a: "#d9bf49",
    g: "#2d2f2a",
    b: "#f0e19d",
    l: "#f7f1d7",
  },
  LEICA: {
    s: "#efc3a1",
    h: "#262626",
    o: "#1e1d1e",
    a: "#b63131",
    g: "#2d2d2d",
    b: "#f0d6d2",
    l: "#f6f0ec",
  },
  RICOH: {
    s: "#efc3a1",
    h: "#3a3a40",
    o: "#5b5a64",
    a: "#9d9aa7",
    g: "#28282d",
    b: "#e3e1e8",
    l: "#f2f0f5",
  },
  LUMIX: {
    s: "#efc3a1",
    h: "#22263a",
    o: "#40485f",
    a: "#657db6",
    g: "#171920",
    b: "#d1daf0",
    l: "#edf1f8",
  },
  OM: {
    s: "#efc3a1",
    h: "#27403b",
    o: "#3f6a64",
    a: "#8eb5af",
    g: "#273533",
    b: "#d9ebe6",
    l: "#eef6f3",
  },
  HASSELBLAD: {
    s: "#efc3a1",
    h: "#334236",
    o: "#556e5d",
    a: "#cf8e5a",
    g: "#2b322d",
    b: "#f0d9c4",
    l: "#f5efe3",
  },
  DJI: {
    s: "#efc3a1",
    h: "#2b3641",
    o: "#455666",
    a: "#7ea9c3",
    g: "#d7e6ee",
    b: "#4f7188",
    l: "#edf4f7",
  },
};

const pixelSprites = {
  FUJI: [
    "............",
    "...hhhh.....",
    "..hssssh....",
    "..hssssh....",
    "...haah.....",
    "...oooo.....",
    "..ooggo.....",
    "..obggo.....",
    "...oooo.....",
    "...o..o.....",
    "..aa..aa....",
    "..aa..aa....",
  ],
  SONY: [
    ".....aa.....",
    "...hhhh.....",
    "..hssssh....",
    "..hssssha...",
    "...haah.....",
    "..oooooo....",
    "..ooggoo....",
    "..ooggoo....",
    "...obbo.....",
    "...o..o.....",
    "..aa..aa....",
    "..aa..aa....",
  ],
  CANON: [
    "............",
    "...hhhh.....",
    "..hssssh....",
    "..hssssh....",
    "...haah.....",
    "..oooooo....",
    "..ooggoo....",
    "..obggbo....",
    "...oooo.....",
    "...o..o.....",
    "..aa..aa....",
    "..aa..aa....",
  ],
  NIKON: [
    "............",
    "...hhhh.....",
    "..hssssh....",
    "..hssssh....",
    "...haah.....",
    "..oooooo....",
    "..ooggga....",
    "..obggga....",
    "...oooo.....",
    "...o..o.....",
    "..aa..aa....",
    "..aa..aa....",
  ],
  LEICA: [
    "....aaa.....",
    "...hhhh.....",
    "..hssssh....",
    "..hssssh....",
    "...haah.....",
    "..oooooo....",
    "..ooggoo....",
    "..obaggo....",
    "...oooo.....",
    "...o..o.....",
    "..aa..aa....",
    "..aa..aa....",
  ],
  RICOH: [
    "............",
    "...hhhh.....",
    "..hssssh....",
    "..hssssh....",
    "..aa..aa....",
    "..oooooo....",
    "..ooggoo....",
    "...oggo.....",
    "...obbo.....",
    "...o..o.....",
    "..aa..aa....",
    "..aa..aa....",
  ],
  LUMIX: [
    ".....bb.....",
    "...hhhh.....",
    "..hssssh....",
    "..hssssh....",
    "...haah.....",
    "..oooooo....",
    "..oggggo....",
    "..obggbo....",
    "...oooo.....",
    "...o..o.....",
    "..aa..aa....",
    "..aa..aa....",
  ],
  OM: [
    "....bbbb....",
    "...bhhhb....",
    "..bhsssshb..",
    "..bhsssshb..",
    "...haah.....",
    "..oooooo....",
    "..ooggoo....",
    "..obggbo....",
    "...oooo.....",
    "...o..o.....",
    "..aa..aa....",
    "..aa..aa....",
  ],
  HASSELBLAD: [
    "............",
    "...hhhh.....",
    "..hssssh....",
    "..hssssh....",
    "...hall.....",
    "..oooooo....",
    "..oggggo....",
    "..obggbo....",
    "..oolloo....",
    "...o..o.....",
    "..aa..aa....",
    "..aa..aa....",
  ],
  DJI: [
    "....g..g....",
    ".....gg.....",
    "...hhhh.....",
    "..hssssh....",
    "..hssssh....",
    "...haah.....",
    "..oooooo....",
    "..obggbo....",
    "..obggbo....",
    "...o..o.....",
    "..aa..aa....",
    "..aa..aa....",
  ],
};

const questions = [
  {
    text: "朋友喊你周末出去拍照，你脑子里第一反应是？",
    options: [
      {
        text: "找一条有老砖墙、咖啡店和阴天的街，气质先赢。",
        brands: { FUJI: 3, LEICA: 2, RICOH: 1, HASSELBLAD: 1 },
        traits: { retro: 6, street: 4, luxury: 2 },
      },
      {
        text: "先看现场光线和动态，能不能顺便测一下追焦。",
        brands: { SONY: 3, NIKON: 2, CANON: 1 },
        traits: { autofocus: 5, gear: 2 },
      },
      {
        text: "要不要顺便录一点视频素材，不然出门有点亏。",
        brands: { LUMIX: 3, SONY: 2, CANON: 1, DJI: 2 },
        traits: { video: 7, menus: 2, aerial: 2 },
      },
      {
        text: "天气怎么样，路线爬升多少，背多重才不想死。",
        brands: { OM: 3, NIKON: 1, CANON: 1, DJI: 1 },
        traits: { outdoors: 7, gear: 2, aerial: 2 },
      },
    ],
  },
  {
    text: "你最常说服自己买相机的理由是？",
    options: [
      {
        text: "这不是买设备，这是买一种画面性格。",
        brands: { FUJI: 3, LEICA: 2, HASSELBLAD: 2 },
        traits: { retro: 7, redDot: 2, luxury: 3 },
      },
      {
        text: "性能会救命，尤其是在别人拉胯的时候。",
        brands: { SONY: 3, CANON: 2, NIKON: 2 },
        traits: { autofocus: 6, gear: 3 },
      },
      {
        text: "功能全面，以后拍照拍视频都不吃亏。",
        brands: { LUMIX: 3, SONY: 2, CANON: 1, DJI: 2 },
        traits: { video: 6, menus: 3, aerial: 2 },
      },
      {
        text: "便携才是真自由，背不动的性能等于没有。",
        brands: { RICOH: 2, OM: 3, FUJI: 1 },
        traits: { street: 3, outdoors: 5 },
      },
    ],
  },
  {
    text: "看到别人说‘色彩都能后期’，你的反应是？",
    options: [
      {
        text: "表面点头，心里已经把他拉出胶片模拟群聊。",
        brands: { FUJI: 3, LEICA: 1, HASSELBLAD: 1 },
        traits: { retro: 8, luxury: 2 },
      },
      {
        text: "没错，先拍到再说，色彩后面都能救。",
        brands: { SONY: 3, LUMIX: 2, NIKON: 1 },
        traits: { autofocus: 4, video: 2 },
      },
      {
        text: "我懂，但我还是希望直出别太折磨人。",
        brands: { CANON: 3, OM: 1, FUJI: 1 },
        traits: { retro: 2, menus: 1 },
      },
      {
        text: "我拍黑白，直接绕开这个问题。",
        brands: { LEICA: 3, RICOH: 2 },
        traits: { street: 4, redDot: 4 },
      },
    ],
  },
  {
    text: "你对自动对焦的真实态度是？",
    options: [
      {
        text: "必须像读心术，不然我会怀疑人生。",
        brands: { SONY: 3, CANON: 2, NIKON: 2 },
        traits: { autofocus: 8 },
      },
      {
        text: "够用就行，主要别在关键时刻演我。",
        brands: { CANON: 3, OM: 1, LUMIX: 1 },
        traits: { autofocus: 4 },
      },
      {
        text: "慢一点没关系，拍摄节奏本来就该慢下来。",
        brands: { LEICA: 3, FUJI: 2, RICOH: 1 },
        traits: { retro: 4, autofocus: -4 },
      },
      {
        text: "我拍风景和鸟，谁追谁还不一定。",
        brands: { NIKON: 3, OM: 2 },
        traits: { outdoors: 5, autofocus: 3 },
      },
    ],
  },
  {
    text: "你对相机菜单的忍耐力接近？",
    options: [
      {
        text: "能用，但每次进菜单都像参加机关考试。",
        brands: { SONY: 3, LUMIX: 2, OM: 1 },
        traits: { menus: 8 },
      },
      {
        text: "我希望菜单存在，但最好别来烦我。",
        brands: { CANON: 3, NIKON: 2 },
        traits: { menus: 4 },
      },
      {
        text: "少即是多，旋钮和手感比选项更重要。",
        brands: { LEICA: 3, FUJI: 2, RICOH: 1 },
        traits: { menus: -4, retro: 3 },
      },
      {
        text: "我几乎不进菜单，因为设置一次就去爬山了。",
        brands: { OM: 3, NIKON: 1 },
        traits: { outdoors: 5, menus: 2 },
      },
    ],
  },
  {
    text: "以下哪种镜头描述最能让你心跳加速？",
    options: [
      {
        text: "一支有味道的小定焦，最好还能讲故事。",
        brands: { FUJI: 3, LEICA: 2, RICOH: 1, HASSELBLAD: 1 },
        traits: { retro: 6, street: 3, luxury: 2 },
      },
      {
        text: "大三元，踏实，专业，谁来都能打。",
        brands: { CANON: 2, SONY: 2, NIKON: 3 },
        traits: { gear: 5, autofocus: 2 },
      },
      {
        text: "一镜走天下，省心才是最终答案。",
        brands: { OM: 3, CANON: 1, LUMIX: 1 },
        traits: { outdoors: 5, gear: 1 },
      },
      {
        text: "能兼顾视频呼吸控制和功能键那种。",
        brands: { LUMIX: 3, SONY: 2 },
        traits: { video: 6, menus: 2 },
      },
    ],
  },
  {
    text: "你怎么看待连拍速度？",
    options: [
      {
        text: "快，越快越好，世界不会等我构图完。",
        brands: { SONY: 3, NIKON: 3, CANON: 2 },
        traits: { autofocus: 6, gear: 2 },
      },
      {
        text: "够记录情绪就行，我不打算扫射咖啡杯。",
        brands: { FUJI: 3, LEICA: 2, RICOH: 1 },
        traits: { retro: 4, street: 2 },
      },
      {
        text: "拍视频时我都 4K60 了，连拍只是附带。",
        brands: { LUMIX: 3, SONY: 1 },
        traits: { video: 7 },
      },
      {
        text: "看题材，鸟飞了我快，人静了我也能慢。",
        brands: { OM: 2, NIKON: 2, CANON: 1 },
        traits: { outdoors: 3, autofocus: 2 },
      },
    ],
  },
  {
    text: "你对街拍的态度最像？",
    options: [
      {
        text: "我就是为了街拍才出门，别问，问就是生活流。",
        brands: { RICOH: 3, LEICA: 2, FUJI: 2 },
        traits: { street: 8 },
      },
      {
        text: "偶尔拍，但前提是相机别太像武器系统。",
        brands: { FUJI: 2, CANON: 1, OM: 1 },
        traits: { street: 4 },
      },
      {
        text: "我更想拍会跑的东西，街上人类不是重点。",
        brands: { NIKON: 3, SONY: 1, OM: 1 },
        traits: { outdoors: 5, street: -2 },
      },
      {
        text: "我拍街拍时会顺便录 B-roll，生活感和过渡镜头一起拿。",
        brands: { LUMIX: 3, SONY: 2, DJI: 2 },
        traits: { video: 5, street: 2, aerial: 3 },
      },
    ],
  },
  {
    text: "如果只能留一台机身，你最在意什么？",
    options: [
      {
        text: "看着喜欢，拿起来想拍，这比表格重要。",
        brands: { FUJI: 3, LEICA: 3, RICOH: 1, HASSELBLAD: 2 },
        traits: { retro: 6, redDot: 2, luxury: 4 },
      },
      {
        text: "可靠，稳，任何场景都不能让我掉链子。",
        brands: { CANON: 3, SONY: 2, NIKON: 2 },
        traits: { autofocus: 5 },
      },
      {
        text: "照片视频都能扛，接口、电池、散热一个都别缺。",
        brands: { LUMIX: 3, SONY: 2, DJI: 2 },
        traits: { video: 7, menus: 2, aerial: 3 },
      },
      {
        text: "轻，防抖，能背出去，剩下都能商量。",
        brands: { OM: 3, RICOH: 1 },
        traits: { outdoors: 6, street: 2 },
      },
    ],
  },
  {
    text: "你购买镜头前最容易沉迷的内容是？",
    options: [
      {
        text: "样张，看氛围，看高光，看那种说不清的味道。",
        brands: { FUJI: 3, LEICA: 2, HASSELBLAD: 2 },
        traits: { retro: 6, luxury: 3 },
      },
      {
        text: "实验室测试，边缘解析，呼吸效应，对焦马达。",
        brands: { SONY: 3, LUMIX: 2, NIKON: 1 },
        traits: { video: 3, gear: 5 },
      },
      {
        text: "真实使用反馈，婚礼、活动、人像到底稳不稳。",
        brands: { CANON: 3, NIKON: 1, SONY: 1 },
        traits: { autofocus: 3, gear: 2 },
      },
      {
        text: "别人背着它爬山下雨还活着，这就够了。",
        brands: { OM: 3, NIKON: 2, DJI: 1 },
        traits: { outdoors: 7, aerial: 2 },
      },
    ],
  },
  {
    text: "如果拍人像时对焦没抓住眼睛，你会？",
    options: [
      {
        text: "立刻质疑设备，不接受任何哲学解释。",
        brands: { SONY: 3, CANON: 2 },
        traits: { autofocus: 7 },
      },
      {
        text: "安慰自己神情到了，虚一点更有呼吸感。",
        brands: { FUJI: 3, LEICA: 2 },
        traits: { retro: 6, autofocus: -3 },
      },
      {
        text: "重拍，直到客户和亲戚都满意为止。",
        brands: { CANON: 3, NIKON: 1 },
        traits: { autofocus: 5 },
      },
      {
        text: "改成黑白，顺便说这是纪实风格。",
        brands: { RICOH: 2, LEICA: 2, FUJI: 1 },
        traits: { street: 4, redDot: 2 },
      },
    ],
  },
  {
    text: "你出门拍摄时包里最像会出现什么？",
    options: [
      {
        text: "相机、备用电池、以及一堆本质上是情绪支持的小物件。",
        brands: { FUJI: 3, LEICA: 1, HASSELBLAD: 1 },
        traits: { retro: 4, gear: 2, luxury: 2 },
      },
      {
        text: "机身、两镜、麦克风、快装板，像随时能开拍。",
        brands: { LUMIX: 3, SONY: 2, DJI: 2 },
        traits: { video: 7, gear: 3, aerial: 2 },
      },
      {
        text: "长焦、双肩包、雨罩和一点野外求生意志。",
        brands: { NIKON: 3, OM: 2 },
        traits: { outdoors: 8 },
      },
      {
        text: "只有一台小相机，剩下全靠走路和运气。",
        brands: { RICOH: 3, LEICA: 2, FUJI: 1 },
        traits: { street: 7, gear: -1 },
      },
    ],
  },
  {
    text: "你听到‘红点税’时通常会？",
    options: [
      {
        text: "笑而不语，因为真正懂的人不会这么说。",
        brands: { LEICA: 3, HASSELBLAD: 2 },
        traits: { redDot: 9, luxury: 4 },
      },
      {
        text: "先说贵，再默默去搜二手行情。",
        brands: { FUJI: 2, RICOH: 2, LEICA: 1 },
        traits: { redDot: 4, gear: 2 },
      },
      {
        text: "这钱够我补一支顶级镜头了，清醒一点。",
        brands: { SONY: 2, CANON: 2, NIKON: 2, LUMIX: 1 },
        traits: { gear: 5, redDot: -4 },
      },
      {
        text: "我只关心它能不能在雨里随便拍。",
        brands: { OM: 3, NIKON: 1, DJI: 1 },
        traits: { outdoors: 6, redDot: -3, aerial: 2 },
      },
    ],
  },
  {
    text: "面对一场婚礼或活动拍摄，你最像哪种人？",
    options: [
      {
        text: "稳住全场，流程第一，翻车绝不可以发生。",
        brands: { CANON: 3, SONY: 2 },
        traits: { autofocus: 6 },
      },
      {
        text: "我能拍，但最好给我一点创作空间和好看的灯。",
        brands: { FUJI: 2, LEICA: 1 },
        traits: { retro: 4 },
      },
      {
        text: "我会顺便拍一条短片，不然素材价值没有吃满。",
        brands: { LUMIX: 3, SONY: 2 },
        traits: { video: 8 },
      },
      {
        text: "我比较适合去拍宾客席外面那只麻雀。",
        brands: { NIKON: 2, RICOH: 1, OM: 1 },
        traits: { outdoors: 3, street: 1 },
      },
    ],
  },
  {
    text: "你对机身颜值的真实要求是？",
    options: [
      {
        text: "必须好看，不然我连出门的冲动都没有。",
        brands: { FUJI: 3, LEICA: 3, HASSELBLAD: 2 },
        traits: { retro: 7, redDot: 3, luxury: 4 },
      },
      {
        text: "顺眼就行，主要是握着稳、干活靠谱。",
        brands: { CANON: 3, NIKON: 2, OM: 1 },
        traits: { autofocus: 2, outdoors: 2 },
      },
      {
        text: "像工具最好，甚至越像设备越让我安心。",
        brands: { SONY: 3, LUMIX: 2, DJI: 1 },
        traits: { menus: 3, video: 3, aerial: 2 },
      },
      {
        text: "别太大，别太张扬，最好塞进口袋后忘了它存在。",
        brands: { RICOH: 3, OM: 1 },
        traits: { street: 6, gear: -1 },
      },
    ],
  },
  {
    text: "如果预算只够买机身或镜头升级一次，你会优先？",
    options: [
      {
        text: "镜头。灵魂都在镜头里，机身只是宿主。",
        brands: { LEICA: 2, FUJI: 2, NIKON: 2, CANON: 1 },
        traits: { gear: 5, retro: 2 },
      },
      {
        text: "机身。新的对焦和性能能直接改变生存质量。",
        brands: { SONY: 3, CANON: 2, LUMIX: 1 },
        traits: { autofocus: 6, video: 2 },
      },
      {
        text: "我要算拍照和视频两个场景的边际收益。",
        brands: { LUMIX: 3, SONY: 1, DJI: 1 },
        traits: { video: 7, gear: 2, aerial: 2 },
      },
      {
        text: "轻一点那套。因为最后决定我拍不拍的是体力。",
        brands: { OM: 3, RICOH: 1 },
        traits: { outdoors: 6 },
      },
    ],
  },
  {
    text: "你朋友圈最常出现哪种拍摄对象？",
    options: [
      {
        text: "咖啡、窗边、朋友背影、夜色反光和看不懂的情绪。",
        brands: { FUJI: 3, LEICA: 2, RICOH: 1 },
        traits: { retro: 5, street: 3 },
      },
      {
        text: "婚礼、人像、活动现场，每一张都得能交差。",
        brands: { CANON: 3, SONY: 2 },
        traits: { autofocus: 5 },
      },
      {
        text: "鸟、月亮、体育、远处那个你肉眼根本看不见的东西。",
        brands: { NIKON: 3, OM: 2 },
        traits: { outdoors: 7 },
      },
      {
        text: "我的相机 rig、本体、外接设备和幕后花絮。",
        brands: { LUMIX: 3, SONY: 2, DJI: 3 },
        traits: { video: 8, gear: 3, aerial: 4 },
      },
    ],
  },
  {
    text: "听到‘机内防抖很强’时，你会？",
    options: [
      {
        text: "很好，这样我晚上还能假装自己技术过硬。",
        brands: { OM: 3, LUMIX: 2, CANON: 1, DJI: 1 },
        traits: { outdoors: 4, video: 2, aerial: 2 },
      },
      {
        text: "有就更稳，但我更相信对焦和镜头素质。",
        brands: { SONY: 2, NIKON: 2, CANON: 2 },
        traits: { autofocus: 3 },
      },
      {
        text: "我拍的时候本来就会慢慢来，不用这么激动。",
        brands: { LEICA: 3, FUJI: 2 },
        traits: { retro: 3, autofocus: -2 },
      },
      {
        text: "很好，口袋机又多一个出门不带脑子的理由。",
        brands: { RICOH: 2, OM: 1 },
        traits: { street: 4 },
      },
    ],
  },
  {
    text: "你最常对朋友输出哪种建议？",
    options: [
      {
        text: "先搞清楚你到底要不要视频，不然会白花钱。",
        brands: { LUMIX: 3, SONY: 2, DJI: 1 },
        traits: { video: 8, aerial: 2 },
      },
      {
        text: "如果你只想开心地拍照，直出和手感很重要。",
        brands: { FUJI: 3, LEICA: 1, RICOH: 1 },
        traits: { retro: 5 },
      },
      {
        text: "别整那些虚的，先买一套稳定不出错的。",
        brands: { CANON: 3, SONY: 2, NIKON: 1 },
        traits: { autofocus: 5 },
      },
      {
        text: "出去拍得多最重要，重到懒得带就全白搭。",
        brands: { OM: 3, RICOH: 2 },
        traits: { outdoors: 6, street: 2 },
      },
    ],
  },
  {
    text: "你最想在相机评测里听到什么？",
    options: [
      {
        text: "直出肤色和高光过渡到底有多舒服。",
        brands: { FUJI: 3, CANON: 2, LEICA: 1, HASSELBLAD: 2 },
        traits: { retro: 4, luxury: 3 },
      },
      {
        text: "对焦、缓存、追拍和弱光表现别给我藏着掖着。",
        brands: { SONY: 3, NIKON: 3, CANON: 1 },
        traits: { autofocus: 8 },
      },
      {
        text: "视频规格、监看辅助、编码格式和续航。",
        brands: { LUMIX: 3, SONY: 1, DJI: 2 },
        traits: { video: 9, menus: 2, aerial: 3 },
      },
      {
        text: "体积、防抖、耐候和徒步一天的负担。",
        brands: { OM: 3, RICOH: 1, NIKON: 1 },
        traits: { outdoors: 8 },
      },
    ],
  },
  {
    text: "当你听见‘全画幅才是归宿’时？",
    options: [
      {
        text: "也许吧，但我先拍得开心再说。",
        brands: { FUJI: 3, RICOH: 2, OM: 2 },
        traits: { retro: 3, outdoors: 2 },
      },
      {
        text: "很多场景确实是，但不代表你会用到极限。",
        brands: { CANON: 2, SONY: 2, NIKON: 2 },
        traits: { autofocus: 2, gear: 2 },
      },
      {
        text: "传感器不是重点，系统和工作流才是重点。",
        brands: { LUMIX: 3, OM: 1, SONY: 1, DJI: 1 },
        traits: { video: 5, menus: 2, aerial: 2 },
      },
      {
        text: "我买的是体验，不是尺寸吵架资格证。",
        brands: { LEICA: 3, FUJI: 1, HASSELBLAD: 2 },
        traits: { redDot: 5, retro: 2, luxury: 4 },
      },
    ],
  },
  {
    text: "如果让你立刻删掉一种拍摄焦虑，你会选？",
    options: [
      {
        text: "跑焦焦虑，谁都别想再糊弄我。",
        brands: { SONY: 3, CANON: 2, NIKON: 2 },
        traits: { autofocus: 8 },
      },
      {
        text: "色彩焦虑，我只想不用每张都调半天。",
        brands: { FUJI: 3, CANON: 1 },
        traits: { retro: 6 },
      },
      {
        text: "设备负重焦虑，我不想拍完像搬家。",
        brands: { OM: 3, RICOH: 2 },
        traits: { outdoors: 8, gear: -2 },
      },
      {
        text: "剪辑焦虑，可惜我知道它永远不会消失。",
        brands: { LUMIX: 3, SONY: 1, DJI: 2 },
        traits: { video: 7, menus: 2, aerial: 3 },
      },
    ],
  },
  {
    text: "你理想中的拍摄节奏更像？",
    options: [
      {
        text: "慢慢走，慢慢看，等一个突然合适的瞬间。",
        brands: { LEICA: 3, RICOH: 2, FUJI: 2 },
        traits: { street: 5, retro: 4 },
      },
      {
        text: "现场变化很快，我要一直抢在事情前面。",
        brands: { SONY: 3, CANON: 2, NIKON: 2 },
        traits: { autofocus: 7 },
      },
      {
        text: "一边拍照一边记镜头运动和转场点。",
        brands: { LUMIX: 3, SONY: 1, DJI: 2 },
        traits: { video: 8, aerial: 3 },
      },
      {
        text: "按天气和路线来，拍摄节奏服从体力管理。",
        brands: { OM: 3, NIKON: 1, DJI: 1 },
        traits: { outdoors: 7, aerial: 2 },
      },
    ],
  },
  {
    text: "你最容易在哪种场景里灵魂苏醒？",
    options: [
      {
        text: "城市傍晚，橱窗反光，行人刚好经过斑马线。",
        brands: { FUJI: 3, RICOH: 3, LEICA: 2 },
        traits: { street: 7, retro: 3 },
      },
      {
        text: "演出、婚礼、体育现场，一切都又快又亮。",
        brands: { SONY: 3, CANON: 3, NIKON: 2 },
        traits: { autofocus: 7 },
      },
      {
        text: "山里、海边、暴雨前后，最好再来点风。",
        brands: { OM: 3, NIKON: 2, DJI: 2 },
        traits: { outdoors: 8, aerial: 4 },
      },
      {
        text: "有灯、有布景、有麦克风，可以拍照也能录视频。",
        brands: { LUMIX: 3, SONY: 2, DJI: 2 },
        traits: { video: 7, aerial: 3 },
      },
    ],
  },
  {
    text: "看到别人背着超大器材套装，你最可能想？",
    options: [
      {
        text: "挺专业，但我不会让自己活成这样。",
        brands: { RICOH: 3, OM: 2, FUJI: 1 },
        traits: { street: 4, outdoors: 3 },
      },
      {
        text: "合理，场景需要，性能总有代价。",
        brands: { SONY: 2, CANON: 2, NIKON: 3, LUMIX: 1 },
        traits: { gear: 5, autofocus: 2 },
      },
      {
        text: "看着累，但如果桌上摆拍应该挺帅。",
        brands: { LEICA: 3, FUJI: 1, HASSELBLAD: 2 },
        traits: { redDot: 4, retro: 2, luxury: 4 },
      },
      {
        text: "如果那套还能顺便录 10-bit，那也不是不能理解。",
        brands: { LUMIX: 3, SONY: 1, DJI: 2 },
        traits: { video: 7, gear: 2, aerial: 2 },
      },
    ],
  },
  {
    text: "朋友借你相机拍两天，你最担心他吐槽什么？",
    options: [
      {
        text: "‘这对焦怎么有点玄学。’",
        brands: { FUJI: 3, LEICA: 1, RICOH: 1 },
        traits: { autofocus: -3, retro: 3 },
      },
      {
        text: "‘这菜单是不是设计给工程师自己看的。’",
        brands: { SONY: 3, LUMIX: 2, OM: 1 },
        traits: { menus: 7 },
      },
      {
        text: "‘它太可靠了，我都不知道该吐槽什么。’",
        brands: { CANON: 3, NIKON: 2 },
        traits: { autofocus: 4 },
      },
      {
        text: "‘我拍了半天，为什么开始想买一台。’",
        brands: { LEICA: 3, RICOH: 2, FUJI: 1, HASSELBLAD: 1 },
        traits: { redDot: 6, street: 2, luxury: 3 },
      },
    ],
  },
  {
    text: "你会因为哪种理由把照片发出来？",
    options: [
      {
        text: "色调太对了，我不发出来对不起这阵风。",
        brands: { FUJI: 3, LEICA: 1 },
        traits: { retro: 7 },
      },
      {
        text: "这个瞬间抓得太准，技术层面必须让人看到。",
        brands: { SONY: 3, NIKON: 2, CANON: 1 },
        traits: { autofocus: 7 },
      },
      {
        text: "这组图能顺便给视频导流，素材利用率拉满。",
        brands: { LUMIX: 3, SONY: 1, DJI: 2 },
        traits: { video: 8, aerial: 2 },
      },
      {
        text: "我本来只是散步，但这张照片让我觉得今天没白活。",
        brands: { RICOH: 3, OM: 1, LEICA: 1 },
        traits: { street: 7 },
      },
    ],
  },
  {
    text: "如果你开一家摄影相关频道，最可能做什么？",
    options: [
      {
        text: "城市漫游、色调分享、胶片模拟搭配日记。",
        brands: { FUJI: 3, RICOH: 1, LEICA: 1 },
        traits: { retro: 7, street: 2 },
      },
      {
        text: "现场实战、对焦测试、活动拍摄复盘。",
        brands: { SONY: 3, CANON: 2, NIKON: 2 },
        traits: { autofocus: 7 },
      },
      {
        text: "视频工作流、设备搭建、拍摄剪辑一条龙。",
        brands: { LUMIX: 3, SONY: 1, DJI: 2 },
        traits: { video: 9, menus: 2, aerial: 3 },
      },
      {
        text: "徒步摄影、轻量装备、下雨也能拍的路线分享。",
        brands: { OM: 3, NIKON: 1, RICOH: 1, DJI: 1 },
        traits: { outdoors: 9, aerial: 2 },
      },
    ],
  },
  {
    text: "当别人夸你照片有‘生活感’时，你会觉得？",
    options: [
      {
        text: "终于有人看懂我不是在随便拍路边。",
        brands: { RICOH: 3, FUJI: 2, LEICA: 2 },
        traits: { street: 8, retro: 2 },
      },
      {
        text: "挺好，但我更希望他们看出我技术也很稳。",
        brands: { CANON: 3, SONY: 2, NIKON: 1 },
        traits: { autofocus: 5 },
      },
      {
        text: "生活感也能做成一整套内容资产。",
        brands: { LUMIX: 3, SONY: 1 },
        traits: { video: 8, street: 1 },
      },
      {
        text: "我拍的是经过精密挑选的‘看起来很随意’。",
        brands: { LEICA: 3, FUJI: 1, HASSELBLAD: 1 },
        traits: { redDot: 4, street: 3, luxury: 3 },
      },
    ],
  },
  {
    text: "你最相信哪种终极真理？",
    options: [
      {
        text: "好看的机器会提高出门率，而出门率决定作品量。",
        brands: { FUJI: 3, LEICA: 2, RICOH: 1, HASSELBLAD: 1 },
        traits: { retro: 6, luxury: 2 },
      },
      {
        text: "设备可靠，人才有资格谈创作。",
        brands: { SONY: 3, CANON: 2, NIKON: 2, DJI: 1 },
        traits: { autofocus: 7, aerial: 1 },
      },
      {
        text: "现在不把视频想清楚，以后一定还要重买。",
        brands: { LUMIX: 3, SONY: 2, DJI: 2 },
        traits: { video: 8, aerial: 3 },
      },
      {
        text: "能带出去并拍回来，才是完整的胜利。",
        brands: { OM: 3, RICOH: 2, NIKON: 1 },
        traits: { outdoors: 8, street: 2 },
      },
    ],
  },
  {
    text: "最后一题，如果你只能用一句话介绍自己的摄影观，你会选？",
    options: [
      {
        text: "我拍的不是题材，是那一瞬间的气氛和温度。",
        brands: { FUJI: 3, LEICA: 2, RICOH: 1, HASSELBLAD: 1 },
        traits: { retro: 7, street: 2, luxury: 2 },
      },
      {
        text: "我只想稳定地拍到该拍到的一切。",
        brands: { SONY: 3, CANON: 3, NIKON: 2 },
        traits: { autofocus: 8 },
      },
      {
        text: "照片和视频都是表达，系统必须一起考虑。",
        brands: { LUMIX: 3, SONY: 2, DJI: 2 },
        traits: { video: 9, menus: 2, aerial: 3 },
      },
      {
        text: "摄影应该跟生活一起走，而不是把人压垮。",
        brands: { OM: 3, RICOH: 2, FUJI: 1 },
        traits: { outdoors: 7, street: 2 },
      },
    ],
  },
];

const panels = document.querySelectorAll("[data-screen]");
const startButton = document.getElementById("startButton");
const restartFromQuiz = document.getElementById("restartFromQuiz");
const prevButton = document.getElementById("prevButton");
const retakeButton = document.getElementById("retakeButton");
const copyResultButton = document.getElementById("copyResultButton");
const downloadPosterButton = document.getElementById("downloadPosterButton");
const downloadStoryButton = document.getElementById("downloadStoryButton");
const progressLabel = document.getElementById("progressLabel");
const progressFill = document.getElementById("progressFill");
const questionText = document.getElementById("questionText");
const optionsContainer = document.getElementById("optionsContainer");
const brandRoster = document.getElementById("brandRoster");
const sampleQuestions = document.getElementById("sampleQuestions");
const resultCode = document.getElementById("resultCode");
const resultSubtitle = document.getElementById("resultSubtitle");
const matchScore = document.getElementById("matchScore");
const resultSummary = document.getElementById("resultSummary");
const resultDetail = document.getElementById("resultDetail");
const resultDeclaration = document.getElementById("resultDeclaration");
const resultStrengths = document.getElementById("resultStrengths");
const resultWarning = document.getElementById("resultWarning");
const resultCompatibility = document.getElementById("resultCompatibility");
const dimensionsContainer = document.getElementById("dimensionsContainer");
const sharePreview = document.getElementById("sharePreview");
const runnerUpText = document.getElementById("runnerUpText");
const posterCanvas = document.getElementById("posterCanvas");
const storyCanvas = document.getElementById("storyCanvas");

let currentQuestionIndex = 0;
let answers = [];
let lastShareText = "";
let currentResultData = null;

function switchScreen(screen) {
  panels.forEach((panel) => {
    panel.classList.toggle("active", panel.dataset.screen === screen);
  });
}

function createEmptyBrandScores() {
  return Object.keys(brandProfiles).reduce((accumulator, key) => {
    accumulator[key] = 0;
    return accumulator;
  }, {});
}

function createEmptyTraitScores() {
  return Object.keys(traitLabels).reduce((accumulator, key) => {
    accumulator[key] = 0;
    return accumulator;
  }, {});
}

function calculateScores() {
  const brandScores = createEmptyBrandScores();
  const traitOffsets = createEmptyTraitScores();

  answers.forEach((answerIndex, questionIndex) => {
    if (answerIndex === null || answerIndex === undefined) {
      return;
    }

    const option = questions[questionIndex].options[answerIndex];

    Object.entries(option.brands).forEach(([brand, value]) => {
      brandScores[brand] += value;
    });

    Object.entries(option.traits || {}).forEach(([trait, value]) => {
      traitOffsets[trait] += value;
    });
  });

  brandScores.HASSELBLAD +=
    Math.max(0, traitOffsets.luxury) * 0.45 +
    Math.max(0, traitOffsets.retro) * 0.12 +
    Math.max(0, traitOffsets.redDot) * 0.08;

  brandScores.DJI +=
    Math.max(0, traitOffsets.aerial) * 0.5 +
    Math.max(0, traitOffsets.video) * 0.16 +
    Math.max(0, traitOffsets.outdoors) * 0.1;

  return { brandScores, traitOffsets };
}

function weightedTraitScores(brandScores, traitOffsets) {
  const totalBrandScore =
    Object.values(brandScores).reduce((sum, score) => sum + score, 0) || 1;

  return Object.keys(traitLabels).reduce((accumulator, trait) => {
    const weightedAverage = Object.entries(brandScores).reduce(
      (sum, [brand, score]) =>
        sum + brandProfiles[brand].traits[trait] * (score / totalBrandScore),
      0
    );

    accumulator[trait] = Math.max(
      6,
      Math.min(99, Math.round(weightedAverage + traitOffsets[trait]))
    );

    return accumulator;
  }, {});
}

function calculateMatchPercent(sortedScores) {
  const [topBrand, runnerUp] = sortedScores;
  const topScore = topBrand?.[1] || 1;
  const nextScore = runnerUp?.[1] || 0;
  const total = sortedScores.reduce((sum, [, value]) => sum + value, 0) || 1;
  const dominance = topScore - nextScore;
  const concentration = topScore / total;
  const raw = 58 + dominance * 2.2 + concentration * 18;

  return `${Math.max(61, Math.min(97, Math.round(raw)))}%`;
}

function createPixelSprite(brandCode, scale = 6) {
  const sprite = pixelSprites[brandCode];
  const palette = pixelPalettes[brandCode];
  const container = document.createElement("div");
  const size = sprite[0].length;

  container.className = "pixel-sprite";
  container.style.setProperty("--sprite-size", size);
  container.style.setProperty("--pixel-scale", `${scale}px`);
  container.setAttribute("aria-hidden", "true");

  sprite.forEach((row) => {
    [...row].forEach((cell) => {
      const pixel = document.createElement("span");
      pixel.className = "pixel";
      if (palette[cell]) {
        pixel.style.background = palette[cell];
      }
      container.appendChild(pixel);
    });
  });

  return container;
}

function createPixelFigure(brandCode, scale = 6, labelText = brandCode) {
  const figure = document.createElement("div");
  figure.className = "pixel-figure";
  figure.appendChild(createPixelSprite(brandCode, scale));

  const label = document.createElement("div");
  label.className = "pixel-figure-label";
  label.textContent = labelText;
  figure.appendChild(label);

  return figure;
}

function drawPixelSpriteOnCanvas(ctx, brandCode, x, y, scale) {
  const sprite = pixelSprites[brandCode];
  const palette = pixelPalettes[brandCode];

  sprite.forEach((row, rowIndex) => {
    [...row].forEach((cell, colIndex) => {
      if (!palette[cell]) {
        return;
      }

      ctx.fillStyle = palette[cell];
      ctx.fillRect(x + colIndex * scale, y + rowIndex * scale, scale, scale);
    });
  });
}

function drawLabeledSpriteOnCanvas(ctx, brandCode, labelText, x, y, scale, cardColor) {
  const sprite = pixelSprites[brandCode];
  const spriteWidth = sprite[0].length * scale;
  const spriteHeight = sprite.length * scale;

  drawRoundedRect(
    ctx,
    x - 16,
    y - 16,
    spriteWidth + 32,
    spriteHeight + 72,
    24,
    cardColor || "rgba(255,255,255,0.55)"
  );
  drawPixelSpriteOnCanvas(ctx, brandCode, x, y, scale);
  drawRoundedRect(ctx, x + 12, y + spriteHeight + 10, spriteWidth - 24, 30, 14, "rgba(32,27,22,0.08)");
  ctx.fillStyle = "#201b16";
  ctx.font = "700 16px PingFang SC, Microsoft YaHei, sans-serif";
  ctx.textAlign = "center";
  ctx.fillText(labelText, x + spriteWidth / 2, y + spriteHeight + 31);
  ctx.textAlign = "left";
}

function drawRoundedRect(ctx, x, y, width, height, radius, fillStyle, strokeStyle) {
  ctx.beginPath();
  ctx.moveTo(x + radius, y);
  ctx.lineTo(x + width - radius, y);
  ctx.quadraticCurveTo(x + width, y, x + width, y + radius);
  ctx.lineTo(x + width, y + height - radius);
  ctx.quadraticCurveTo(x + width, y + height, x + width - radius, y + height);
  ctx.lineTo(x + radius, y + height);
  ctx.quadraticCurveTo(x, y + height, x, y + height - radius);
  ctx.lineTo(x, y + radius);
  ctx.quadraticCurveTo(x, y, x + radius, y);
  ctx.closePath();
  ctx.fillStyle = fillStyle;
  ctx.fill();
  if (strokeStyle) {
    ctx.strokeStyle = strokeStyle;
    ctx.stroke();
  }
}

function drawWrappedText(ctx, text, x, y, maxWidth, lineHeight, maxLines) {
  const chars = text.split("");
  const lines = [];
  let current = "";

  chars.forEach((char) => {
    const test = current + char;
    if (ctx.measureText(test).width > maxWidth && current) {
      lines.push(current);
      current = char;
    } else {
      current = test;
    }
  });

  if (current) {
    lines.push(current);
  }

  lines.slice(0, maxLines).forEach((line, index) => {
    const suffix = index === maxLines - 1 && lines.length > maxLines ? "…" : "";
    ctx.fillText(`${line}${suffix}`, x, y + index * lineHeight);
  });
}

function downloadCanvas(canvas, filename) {
  if (!canvas) {
    return;
  }

  const link = document.createElement("a");
  link.download = filename;
  link.href = canvas.toDataURL("image/png");
  link.click();
}

function renderPosterAssets(resultData) {
  if (!posterCanvas || !storyCanvas || !resultData) {
    return;
  }

  const { winningBrand, runnerUpBrand, percent, traits } = resultData;
  const visual = brandVisuals[winningBrand.code];
  const badgeLabel = brandBadgeLabels[winningBrand.code] || winningBrand.code;
  const topTraits = Object.entries(traits)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 3)
    .map(([trait]) => trait);

  const posterCtx = posterCanvas.getContext("2d");
  posterCtx.clearRect(0, 0, posterCanvas.width, posterCanvas.height);
  const posterGradient = posterCtx.createLinearGradient(0, 0, posterCanvas.width, posterCanvas.height);
  posterGradient.addColorStop(0, visual.paper);
  posterGradient.addColorStop(1, "#efe2ce");
  posterCtx.fillStyle = posterGradient;
  posterCtx.fillRect(0, 0, posterCanvas.width, posterCanvas.height);
  posterCtx.fillStyle = "rgba(0,0,0,0.05)";
  for (let i = 0; i < posterCanvas.width; i += 28) {
    posterCtx.fillRect(i, 0, 1, posterCanvas.height);
  }
  drawRoundedRect(posterCtx, 72, 72, 936, 1296, 40, "rgba(255,251,244,0.78)", "rgba(32,27,22,0.08)");
  posterCtx.fillStyle = visual.primary;
  posterCtx.font = "700 34px PingFang SC, Microsoft YaHei, sans-serif";
  posterCtx.fillText("CAMBTI 相机品牌人格测试", 122, 152);
  posterCtx.font = "700 76px Songti SC, STSong, serif";
  posterCtx.fillStyle = "#201b16";
  posterCtx.fillText(winningBrand.name, 122, 258);
  posterCtx.fillStyle = visual.secondary;
  posterCtx.font = "700 32px PingFang SC, Microsoft YaHei, sans-serif";
  posterCtx.fillText(`MBTI：${winningBrand.code}`, 122, 318);
  posterCtx.font = "600 34px PingFang SC, Microsoft YaHei, sans-serif";
  posterCtx.fillText(`匹配度 ${percent}`, 122, 382);
  drawLabeledSpriteOnCanvas(
    posterCtx,
    winningBrand.code,
    badgeLabel,
    730,
    202,
    12,
    visual.accent
  );
  posterCtx.fillStyle = "#201b16";
  posterCtx.font = "500 32px PingFang SC, Microsoft YaHei, sans-serif";
  drawWrappedText(posterCtx, winningBrand.subtitle, 122, 484, 760, 48, 3);
  drawRoundedRect(posterCtx, 122, 548, 776, 222, 26, "rgba(255,255,255,0.72)", "rgba(32,27,22,0.05)");
  posterCtx.font = "600 30px PingFang SC, Microsoft YaHei, sans-serif";
  posterCtx.fillStyle = visual.primary;
  posterCtx.fillText("嘴硬发言", 156, 606);
  posterCtx.fillStyle = "#201b16";
  posterCtx.font = "500 28px PingFang SC, Microsoft YaHei, sans-serif";
  drawWrappedText(posterCtx, winningBrand.declaration, 156, 662, 700, 42, 3);
  drawRoundedRect(posterCtx, 122, 814, 776, 244, 26, "rgba(255,255,255,0.72)", "rgba(32,27,22,0.05)");
  posterCtx.fillStyle = visual.primary;
  posterCtx.font = "600 30px PingFang SC, Microsoft YaHei, sans-serif";
  posterCtx.fillText("高危维度", 156, 872);
  topTraits.forEach((trait, index) => {
    drawRoundedRect(
      posterCtx,
      156 + index * 226,
      916,
      190,
      94,
      18,
      index % 2 === 0 ? visual.accent : `${visual.secondary}33`
    );
    posterCtx.fillStyle = "#201b16";
    posterCtx.font = "700 18px PingFang SC, Microsoft YaHei, sans-serif";
    posterCtx.fillText(traitShortLabels[trait] || traitLabels[trait] || trait, 178 + index * 226, 968);
  });
  posterCtx.fillStyle = visual.primary;
  posterCtx.font = "600 28px PingFang SC, Microsoft YaHei, sans-serif";
  posterCtx.fillText(`副人格：${runnerUpBrand.name} / ${runnerUpBrand.code}`, 122, 1138);
  posterCtx.fillStyle = "#64584d";
  posterCtx.font = "500 24px PingFang SC, Microsoft YaHei, sans-serif";
  drawWrappedText(posterCtx, "你不是一个人在嘴硬，你是一整套器材评论区发言模板。", 122, 1196, 760, 36, 2);
  posterCtx.fillStyle = visual.primary;
  posterCtx.font = "600 22px PingFang SC, Microsoft YaHei, sans-serif";
  posterCtx.fillText(siteUrl, 122, 1278);

  const storyCtx = storyCanvas.getContext("2d");
  storyCtx.clearRect(0, 0, storyCanvas.width, storyCanvas.height);
  const storyGradient = storyCtx.createLinearGradient(0, 0, storyCanvas.width, storyCanvas.height);
  storyGradient.addColorStop(0, visual.paper);
  storyGradient.addColorStop(1, visual.accent);
  storyCtx.fillStyle = storyGradient;
  storyCtx.fillRect(0, 0, storyCanvas.width, storyCanvas.height);
  drawRoundedRect(storyCtx, 42, 42, 1116, 591, 34, "rgba(255,251,245,0.82)", "rgba(32,27,22,0.06)");
  drawLabeledSpriteOnCanvas(
    storyCtx,
    winningBrand.code,
    badgeLabel,
    122,
    132,
    12,
    `${visual.secondary}22`
  );
  storyCtx.fillStyle = visual.primary;
  storyCtx.font = "700 28px PingFang SC, Microsoft YaHei, sans-serif";
  storyCtx.fillText("CAMBTI 战报", 352, 124);
  storyCtx.fillStyle = "#201b16";
  storyCtx.font = "700 58px Songti SC, STSong, serif";
  storyCtx.fillText(winningBrand.name, 352, 198);
  storyCtx.fillStyle = visual.primary;
  storyCtx.font = "700 28px PingFang SC, Microsoft YaHei, sans-serif";
  storyCtx.fillText(`MBTI：${winningBrand.code}`, 352, 244);
  storyCtx.fillStyle = "#64584d";
  storyCtx.font = "500 26px PingFang SC, Microsoft YaHei, sans-serif";
  drawWrappedText(storyCtx, winningBrand.subtitle, 352, 298, 720, 36, 2);
  drawRoundedRect(storyCtx, 352, 366, 186, 92, 18, "rgba(255,255,255,0.7)");
  drawRoundedRect(storyCtx, 564, 366, 280, 92, 18, "rgba(255,255,255,0.7)");
  drawRoundedRect(storyCtx, 870, 366, 230, 92, 18, "rgba(255,255,255,0.7)");
  storyCtx.fillStyle = visual.primary;
  storyCtx.font = "600 20px PingFang SC, Microsoft YaHei, sans-serif";
  storyCtx.fillText("匹配度", 382, 402);
  storyCtx.fillText("副人格", 594, 402);
  storyCtx.fillText("高危维度", 900, 402);
  storyCtx.fillStyle = "#201b16";
  storyCtx.font = "700 34px PingFang SC, Microsoft YaHei, sans-serif";
  storyCtx.fillText(percent, 382, 438);
  storyCtx.font = "700 24px PingFang SC, Microsoft YaHei, sans-serif";
  storyCtx.fillText(runnerUpBrand.name, 594, 438);
  storyCtx.font = "700 18px PingFang SC, Microsoft YaHei, sans-serif";
  storyCtx.fillText(
    topTraits.slice(0, 2).map((trait) => traitShortLabels[trait] || traitLabels[trait] || trait).join(" / "),
    900,
    438
  );
  storyCtx.fillStyle = "#201b16";
  storyCtx.font = "500 28px PingFang SC, Microsoft YaHei, sans-serif";
  drawWrappedText(storyCtx, winningBrand.declaration, 82, 538, 980, 40, 2);
  storyCtx.fillStyle = visual.primary;
  storyCtx.font = "600 20px PingFang SC, Microsoft YaHei, sans-serif";
  storyCtx.fillText(siteUrl, 82, 612);
}

function renderBrandRoster() {
  if (!brandRoster) {
    return;
  }

  brandRoster.innerHTML = "";

  Object.values(brandProfiles).forEach((brand) => {
    const card = document.createElement("article");
    card.className = "brand-pill";
    const header = document.createElement("div");
    header.className = "brand-pill-header";
    const text = document.createElement("div");
    text.innerHTML = `<strong>${brand.code}</strong><span>${brand.name}</span>`;
    header.append(
      createPixelFigure(brand.code, 5, brandBadgeLabels[brand.code] || brand.code),
      text
    );
    card.appendChild(header);
    brandRoster.appendChild(card);
  });
}

function renderSampleQuestions() {
  if (!sampleQuestions) {
    return;
  }

  const picks = [0, 8, 17, 30];
  sampleQuestions.innerHTML = "";

  picks.forEach((index, order) => {
    const card = document.createElement("article");
    card.className = "sample-card";
    card.innerHTML = `<strong>样题 ${order + 1}</strong><span>${questions[index].text}</span>`;
    sampleQuestions.appendChild(card);
  });
}

function buildShareText(winningBrand, percent, runnerUpBrand, traits) {
  const topTraits = Object.entries(traits)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 3)
    .map(([trait]) => traitLabels[trait])
    .join(" / ");

  return [
    "CAMBTI 相机品牌人格测试战报",
    `人格类型：${winningBrand.name}`,
    `我的 MBTI：${winningBrand.code}`,
    `匹配度：${percent}`,
    `副人格：${runnerUpBrand.name} / ${runnerUpBrand.code}`,
    `高危维度：${topTraits}`,
    `一句话总结：${winningBrand.subtitle}`,
    `嘴硬发言：${winningBrand.declaration}`,
    `测试链接：${siteUrl}`,
  ].join("\n");
}

function renderShareCard(winningBrand, percent, runnerUpBrand, traits) {
  if (!sharePreview || !runnerUpText) {
    return;
  }

  const topTraits = Object.entries(traits)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 3);

  sharePreview.innerHTML = `
    <div class="share-preview-header">
      <div id="shareSpriteMount"></div>
      <div>
        <p class="eyebrow">CAMBTI / 战报卡片</p>
        <h3>${winningBrand.name}</h3>
        <p>MBTI：${winningBrand.code} / ${winningBrand.subtitle}</p>
      </div>
    </div>
    <div class="share-meta-row">
      <div class="share-chip">
        <strong>匹配度</strong>
        <span>${percent}</span>
      </div>
      <div class="share-chip">
        <strong>副人格</strong>
        <span>${runnerUpBrand.name} / ${runnerUpBrand.code}</span>
      </div>
      <div class="share-chip">
        <strong>高危维度</strong>
        <span>${topTraits.map(([trait]) => traitShortLabels[trait] || traitLabels[trait]).join(" / ")}</span>
      </div>
      <div class="share-chip">
        <strong>测试链接</strong>
        <span>${siteUrl}</span>
      </div>
    </div>
  `;
  const spriteMount = sharePreview.querySelector("#shareSpriteMount");
  spriteMount.appendChild(
    createPixelFigure(
      winningBrand.code,
      7,
      brandBadgeLabels[winningBrand.code] || winningBrand.code
    )
  );

  runnerUpText.textContent = `你差一点就滑向 ${runnerUpBrand.name}。说明你已经具备一部分 ${runnerUpBrand.code} 式人格嘴脸，只是这次主属性更顶。`;
  lastShareText = buildShareText(winningBrand, percent, runnerUpBrand, traits);
}

async function copyShareText() {
  if (!lastShareText || !copyResultButton) {
    return;
  }

  const original = copyResultButton.textContent;

  try {
    await navigator.clipboard.writeText(lastShareText);
    copyResultButton.textContent = "已复制，快发群里";
  } catch {
    copyResultButton.textContent = "复制失败，请手动复制";
  }

  window.setTimeout(() => {
    copyResultButton.textContent = original;
  }, 1600);
}

function renderQuestion() {
  const question = questions[currentQuestionIndex];
  const selectedAnswer = answers[currentQuestionIndex];
  const progressRatio = ((currentQuestionIndex + 1) / questions.length) * 100;

  progressLabel.textContent = `第 ${currentQuestionIndex + 1} / ${questions.length} 题`;
  progressFill.style.width = `${progressRatio}%`;
  questionText.textContent = question.text;
  prevButton.disabled = currentQuestionIndex === 0;
  prevButton.style.opacity = currentQuestionIndex === 0 ? "0.4" : "1";

  optionsContainer.innerHTML = "";

  question.options.forEach((option, optionIndex) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "option-button";
    button.textContent = option.text;

    if (selectedAnswer === optionIndex) {
      button.classList.add("selected");
    }

    button.addEventListener("click", () => {
      answers[currentQuestionIndex] = optionIndex;

      if (currentQuestionIndex === questions.length - 1) {
        showResults();
        return;
      }

      currentQuestionIndex += 1;
      renderQuestion();
    });

    optionsContainer.appendChild(button);
  });
}

function renderDimensions(scores) {
  dimensionsContainer.innerHTML = "";

  Object.entries(scores).forEach(([trait, value]) => {
    const item = document.createElement("div");
    item.className = "dimension-item";

    const label = document.createElement("div");
    label.className = "dimension-label";
    label.innerHTML = `<span>${traitLabels[trait]}</span><span>${value}</span>`;
    label.title = traitDescriptions[trait];

    const bar = document.createElement("div");
    bar.className = "dimension-bar";

    const fill = document.createElement("div");
    fill.className = "dimension-fill";
    fill.style.width = `${value}%`;

    bar.appendChild(fill);
    item.append(label, bar);
    dimensionsContainer.appendChild(item);
  });
}

function showResults() {
  const { brandScores, traitOffsets } = calculateScores();
  const sortedScores = Object.entries(brandScores).sort((a, b) => b[1] - a[1]);
  const [winningBrandCode] = sortedScores[0];
  const [runnerUpCode] = sortedScores[1];
  const winningBrand = brandProfiles[winningBrandCode];
  const runnerUpBrand = brandProfiles[runnerUpCode];
  const traits = weightedTraitScores(brandScores, traitOffsets);
  const percent = calculateMatchPercent(sortedScores);

  resultCode.textContent = winningBrand.name;
  resultSubtitle.textContent = `你的 MBTI 是 ${winningBrand.code}。${winningBrand.subtitle}`;
  matchScore.textContent = percent;
  resultSummary.textContent = winningBrand.summary;
  resultDetail.textContent = winningBrand.detail;
  resultDeclaration.textContent = winningBrand.declaration;
  resultStrengths.textContent = winningBrand.strengths;
  resultWarning.textContent = winningBrand.warning;
  resultCompatibility.textContent = winningBrand.compatibility;

  renderDimensions(traits);
  renderShareCard(winningBrand, percent, runnerUpBrand, traits);
  currentResultData = { winningBrand, runnerUpBrand, percent, traits };
  renderPosterAssets(currentResultData);
  document.title = `CAMBTI | ${winningBrand.name} - ${winningBrand.code}`;
  switchScreen("result");
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function restartQuiz() {
  currentQuestionIndex = 0;
  answers = Array.from({ length: questions.length }, () => null);
  lastShareText = "";
  currentResultData = null;
  document.title = "CAMBTI | 相机品牌人格测试";
  renderQuestion();
  switchScreen("intro");
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function startQuiz() {
  if (!answers.length) {
    answers = Array.from({ length: questions.length }, () => null);
  }

  switchScreen("quiz");
  renderQuestion();
}

startButton.addEventListener("click", startQuiz);
restartFromQuiz.addEventListener("click", restartQuiz);
retakeButton.addEventListener("click", restartQuiz);
copyResultButton.addEventListener("click", copyShareText);
downloadPosterButton.addEventListener("click", () => {
  if (!currentResultData) {
    return;
  }
  downloadCanvas(posterCanvas, `cambti-${currentResultData.winningBrand.code.toLowerCase()}-poster.png`);
});
downloadStoryButton.addEventListener("click", () => {
  if (!currentResultData) {
    return;
  }
  downloadCanvas(storyCanvas, `cambti-${currentResultData.winningBrand.code.toLowerCase()}-card.png`);
});

prevButton.addEventListener("click", () => {
  if (currentQuestionIndex === 0) {
    return;
  }

  currentQuestionIndex -= 1;
  renderQuestion();
});

restartQuiz();
renderBrandRoster();
renderSampleQuestions();
