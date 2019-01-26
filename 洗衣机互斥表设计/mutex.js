// 状态仓库定义：
let state = {
  mode: '',
  dry: false,
  dry_mode: '',
  order: '',
  no_drain: false,
  no_crease: false,
  night_wash: false,
  steam_soft: false,
  eco: false,
  high_water: false,
  temp: 0,
  wash: 0,
  potch: 0,
  speed: 0,
}

const Mode = {
  // 棉麻
  mode_1: {
    // 烘干，不能开则dry.on = null
    dry: true,
    // 烘干模式：1标准，2熨烫，3经济，4快速
    dry_mode: [1,2,3,4],
    // 预约
    order: true,
    // 免排水
    no_drain: true,
    // 防皱
    no_crease: true,
    //夜间洗
    night_wash: true,
    // 蒸汽柔顺
    steam_soft: true,
    // eco (节能)
    eco: true,
    // 高水位
    high_water: true,
    temp: [0,20,30,40,60,95],
    wash: [5,10,15,20,25,30,35,40,45,50],
    potch: [1,2,3,4,5,6,7,8],
    speed: [0,400,600,800,1000,1200,1400,1600],
  },
  // 快洗
  mode_3: {
        // 烘干，不能开则dry.on = null
    dry: false,
    dry_mode: [],
    // 预约
    order: true,
    // 免排水
    no_drain: true,
    // 防皱
    no_crease: false,
    //夜间洗
    night_wash: false,
    // 蒸汽柔顺
    steam_soft: false,
    // eco (节能)
    eco: false,
    // 高水位
    high_water: true,
    temp: [0,20,30,40],
    wash: [5,10,15,20,25,30,35,40,45],
    potch: [1,2,3,4,5,6,7],
    speed: [400,600,800,1000,1200],
  }
}

const Dry = {

}