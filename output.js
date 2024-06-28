//Fri Jun 28 2024 15:26:53 GMT+0000 (Coordinated Universal Time)
//Base:https://github.com/echo094/decode-js
//Modify:https://github.com/smallfawn/decode_action
const _0x5a4113 = "淘小说",
  _0x4cd03d = _0x135448(_0x5a4113),
  _0xe07897 = 1,
  _0x13e309 = _0x4cd03d.isNode() ? require("./sendNotify") : "";
let _0x582944 = "";
var _0x23c557 = require("crypto-js");
let _0x3562f,
  _0x467061 = (_0x4cd03d.isNode() ? process.env.txsCookie : _0x4cd03d.getdata("txsCookie")) || "",
  _0x1559cf = (_0x4cd03d.isNode() ? process.env.txsReadNum : _0x4cd03d.getdata("txsReadNum")) || 25,
  _0x3f64f5 = [],
  _0x10ff59 = [],
  _0x2635f = 0,
  _0x2aab1f = 0,
  _0x5a44b9 = new Date(),
  _0x53cf0f = _0x5a44b9.getHours(),
  _0x3dcaa8 = _0x5a44b9.getMinutes(),
  _0x579085 = 0,
  _0x4f2137 = 5,
  _0x592792 = _0x1559cf,
  _0x501398 = 60,
  _0x12a25d = 18,
  _0x6892ef = 30,
  _0x589c1e = 0,
  _0x54d08c = "yw_20205606201034904",
  _0x279e9b = "a1ba6ec3f4c28dce",
  _0x80b8a6 = "a1bacec354c28dce",
  _0x3c8128 = "&key=mibook_123456",
  _0x4db54a = 1,
  _0x4b796e = 0,
  _0x3d01e8 = "txs",
  _0x52651c = {},
  _0x37fab0 = "https://leafxcy.coding.net/api/user/leafxcy/project/validcode/shared-depot/validCode/git/blob/master/code.json";
class _0x2fd5e7 {
  constructor(_0xb5a946) {
    this.index = ++_0x2635f;
    this.valid = false;
    let _0x338b19 = _0xb5a946.split("&");
    this.token = _0x338b19[0];
    this.uid = _0x338b19[1];
    this.device_id = _0x36c30a(32);
    this.extraId = "";
    this.sourceId = _0x54d08c;
  }
  createReqObj() {
    let _0x9108f8 = new Date().getTime();
    let _0x10f574 = {
      appid: "mibook",
      brand: "Android",
      channel: "Tencent",
      device_id: this.device_id,
      ostype: "0",
      osversion: "5.1.1",
      package_name: "com.martian.ttbook",
      t: _0x9108f8,
      token: this.token,
      uid: this.uid,
      vendor: "CSJ",
      version_code: "268",
      version_name: "8.2.2"
    };
    return _0x10f574;
  }
  async rewardVideo() {
    let _0x559479 = new Date().getTime(),
      _0x1af390 = "mibook_coins_CSJ_" + _0x559479,
      _0x2c38d4 = _0x2b3f5a(_0x1af390, _0x279e9b) + "\n",
      _0x328973 = this.createReqObj();
    _0x328973.c = _0x2c38d4;
    _0x328973.extra = "mibook_coins";
    let _0x499e40 = _0x535a8f(_0x328973);
    _0x328973.sign = _0xc2ae54(_0x499e40 + _0x3c8128).toUpperCase();
    let _0x32ab9d = "https://appwall.taoyuewenhua.net//auth/finish_reward_video?" + _0x535a8f(_0x328973, true),
      _0x204345 = "",
      _0x13e325 = _0x5d0764(_0x32ab9d, _0x204345);
    await _0x17bb2d("get", _0x13e325);
    let _0x577e21 = _0x3562f;
    if (!_0x577e21) {
      return;
    }
    _0x577e21.errcode == 0 ? console.log("账号[" + this.index + "]领取视频奖励成功") : console.log("账号[" + this.index + "]领取视频奖励失败: " + _0x577e21.errmsg);
  }
  async bookMall() {
    let _0x4e01f6 = this.createReqObj();
    _0x4e01f6.count = 6;
    _0x4e01f6.ctype = 1;
    _0x4e01f6.page = 0;
    _0x4e01f6.tid = 1;
    _0x4e01f6.seed = Math.floor(Math.random() * 9999);
    let _0x4d2366 = _0x535a8f(_0x4e01f6);
    _0x4e01f6.sign = _0xc2ae54(_0x4d2366 + _0x3c8128).toUpperCase();
    let _0x4e0b6e = "https://tybook.taoyuewenhua.net/authopt/book_mall?" + _0x535a8f(_0x4e01f6, true),
      _0x3df44b = "",
      _0x306810 = _0x5d0764(_0x4e0b6e, _0x3df44b);
    await _0x17bb2d("get", _0x306810);
    let _0x4509d0 = _0x3562f;
    if (!_0x4509d0) {
      return;
    }
    if (_0x4509d0.errcode == 0) {
      if (_0x4509d0.data.channelList && _0x4509d0.data.channelList.length > 0 && _0x4509d0.data.channelList[0].bookList && _0x4509d0.data.channelList[0].bookList.length > 0) {
        let _0x295369 = _0x4509d0.data.channelList[0].bookList[0];
        this.sourceId = _0x295369.sourceId || this.sourceId;
        console.log("账号[" + this.index + "]本次将阅读小说：《" + _0x295369.title + "》");
      } else {
        console.log("账号[" + this.index + "]读取小说列表失败，将阅读默认小说");
      }
    } else {
      console.log("账号[" + this.index + "]读取小说列表失败，将阅读默认小说: " + _0x4509d0.errmsg);
    }
  }
  async readNovel() {
    let _0x3dacb7 = "60_tf|" + this.sourceId,
      _0x3bf954 = _0x2b3f5a(_0x3dacb7, _0x80b8a6) + "\n",
      _0x5cef4e = this.createReqObj();
    _0x5cef4e.c = _0x3bf954;
    _0x5cef4e.d = 60;
    let _0x57c752 = _0x535a8f(_0x5cef4e);
    _0x5cef4e.sign = _0xc2ae54(_0x57c752 + _0x3c8128).toUpperCase();
    let _0x3606cf = "https://tybook.taoyuewenhua.net/auth/v3/rt.do?" + _0x535a8f(_0x5cef4e, true),
      _0x5979ea = "",
      _0x25e6e0 = _0x5d0764(_0x3606cf, _0x5979ea);
    await _0x17bb2d("get", _0x25e6e0);
    let _0x17419f = _0x3562f;
    if (!_0x17419f) {
      return;
    }
    _0x17419f.errcode == 0 ? console.log("账号[" + this.index + "]阅读小说获得" + _0x17419f.data.coins + "金币，本次阅读时长" + _0x17419f.data.duration + "秒") : console.log("账号[" + this.index + "]领取阅读奖励失败: " + _0x17419f.errmsg);
  }
  async lotteryStatus() {
    let _0x21b7ea = this.createReqObj(),
      _0x5a2244 = "https://ap.taoyuewenhua.com/ajax/lottery/wheel/overview?" + _0x535a8f(_0x21b7ea, true),
      _0x526e27 = "",
      _0x4a171a = _0x5d0764(_0x5a2244, _0x526e27);
    await _0x17bb2d("get", _0x4a171a);
    let _0x59a594 = _0x3562f;
    if (!_0x59a594) {
      return;
    }
    _0x59a594.errcode == 0 ? (this.leftCount = _0x59a594.data.leftCount, this.bonusBoxes = _0x59a594.data.bonusBoxes, _0x579085 = _0x4844c5(this.leftCount, _0x579085), console.log("账号[" + this.index + "]抽奖剩余" + this.leftCount + "次")) : console.log("账号[" + this.index + "]查询抽奖次数失败: " + _0x59a594.errmsg);
  }
  async lotteryDraw() {
    let _0x540f33 = this.createReqObj(),
      _0xca6483 = "https://ap.taoyuewenhua.com/ajax/lottery/wheel/draw?" + _0x535a8f(_0x540f33, true),
      _0x5e06e5 = "",
      _0x33010b = _0x5d0764(_0xca6483, _0x5e06e5);
    await _0x17bb2d("get", _0x33010b);
    let _0x16c8a1 = _0x3562f;
    if (!_0x16c8a1) {
      return;
    }
    if (_0x16c8a1.errcode == 0) {
      let _0x25fc9f = _0x16c8a1.data.coins || 0,
        _0x3a8e86 = _0x16c8a1.data.extraCoins || 0;
      this.extraId = _0x16c8a1.data.extraId || "";
      this.leftCount = _0x16c8a1.data.leftCount;
      this.bonusBoxes = _0x16c8a1.data.bonusBoxes;
      let _0x3326aa = this.extraId ? "，翻倍可获得" + _0x3a8e86 + "金币" : "";
      console.log("账号[" + this.index + "]抽奖获得" + _0x25fc9f + "金币" + _0x3326aa + "，抽奖剩余" + this.leftCount + "次");
    } else {
      console.log("账号[" + this.index + "]抽奖失败: " + _0x16c8a1.errmsg);
    }
  }
  async lotteryDrawBox(_0xab2958) {
    let _0x1d8c1c = this.createReqObj();
    _0x1d8c1c.boxId = _0xab2958;
    let _0x296783 = "https://ap.taoyuewenhua.com/ajax/lottery/wheel/boxes/" + _0xab2958 + "/draw?" + _0x535a8f(_0x1d8c1c, true),
      _0x5cd19a = "",
      _0x5a35d9 = _0x5d0764(_0x296783, _0x5cd19a);
    await _0x17bb2d("get", _0x5a35d9);
    let _0x25edaf = _0x3562f;
    if (!_0x25edaf) {
      return;
    }
    if (_0x25edaf.errcode == 0) {
      let _0x481f50 = _0x25edaf.data.coins || 0,
        _0x1623c5 = _0x25edaf.data.extraCoins || 0;
      this.extraId = _0x25edaf.data.extraId || "";
      let _0x1931a0 = this.extraId ? "，翻倍可获得" + _0x1623c5 + "金币" : "";
      console.log("账号[" + this.index + "]打开" + _0xab2958 + "号宝箱获得" + _0x481f50 + "金币" + _0x1931a0);
    } else {
      console.log("账号[" + this.index + "]打开" + _0xab2958 + "号宝箱失败: " + _0x25edaf.errmsg);
    }
  }
  async lotteryDrawOpenBox() {
    let _0x736323 = 100 - this.leftCount;
    for (let _0x470a8a of this.bonusBoxes) {
      _0x736323 >= _0x470a8a.count && _0x470a8a.issued == false && (await _0x4cd03d.wait(300), await this.lotteryDrawBox(_0x470a8a.boxId));
    }
  }
  async startExtraTask() {
    let _0x277c3c = this.createReqObj();
    _0x277c3c.extraId = this.extraId;
    let _0x3283a9 = _0x535a8f(_0x277c3c);
    _0x277c3c.sign = _0xc2ae54(_0x3283a9 + _0x3c8128).toUpperCase();
    let _0x5485d5 = "https://tybook.taoyuewenhua.net/auth/start_extra_task.do?" + _0x535a8f(_0x277c3c, true),
      _0x5a609b = "",
      _0x17e8df = _0x5d0764(_0x5485d5, _0x5a609b);
    await _0x17bb2d("get", _0x17e8df);
    let _0x31308c = _0x3562f;
    if (!_0x31308c) {
      return;
    }
    _0x31308c.errcode == 0 ? console.log("账号[" + this.index + "]开始看视频翻倍") : console.log("账号[" + this.index + "]开始看视频失败: " + _0x31308c.errmsg);
  }
  async finishExtraTask() {
    let _0x128fea = this.createReqObj();
    _0x128fea.extraId = this.extraId;
    let _0x53bf41 = _0x535a8f(_0x128fea);
    _0x128fea.sign = _0xc2ae54(_0x53bf41 + _0x3c8128).toUpperCase();
    let _0x1a65c4 = "https://tybook.taoyuewenhua.net/auth/finish_extra_task.do?" + _0x535a8f(_0x128fea, true),
      _0x5b184f = "",
      _0x267493 = _0x5d0764(_0x1a65c4, _0x5b184f);
    this.extraId = "";
    await _0x17bb2d("get", _0x267493);
    let _0x56723d = _0x3562f;
    if (!_0x56723d) {
      return;
    }
    _0x56723d.errcode == 0 ? console.log("账号[" + this.index + "]看视频翻倍额外获得" + _0x56723d.data.coins + "金币") : console.log("账号[" + this.index + "]看视频翻倍失败: " + _0x56723d.errmsg);
  }
  async checkInfo() {
    let _0x4e718a = this.createReqObj(),
      _0x4afdee = _0x535a8f(_0x4e718a);
    _0x4e718a.sign = _0xc2ae54(_0x4afdee + _0x3c8128).toUpperCase();
    let _0x146124 = "https://tybook.taoyuewenhua.net/auth/task_account.do?" + _0x535a8f(_0x4e718a, true),
      _0x149438 = "",
      _0x6508d3 = _0x5d0764(_0x146124, _0x149438);
    await _0x17bb2d("get", _0x6508d3);
    let _0xc6a521 = _0x3562f;
    if (!_0xc6a521) {
      return;
    }
    _0xc6a521.errcode == 0 ? (this.coins = _0xc6a521.data.coins, this.money = _0xc6a521.data.money, console.log("账号[" + this.index + "]账户余额" + this.coins + "金币，" + this.money / 100 + "元")) : console.log("账号[" + this.index + "]查询账户信息失败: " + _0xc6a521.errmsg);
  }
  async checkIntervalBonus() {
    let _0x37fc19 = this.createReqObj(),
      _0x399298 = _0x535a8f(_0x37fc19);
    _0x37fc19.sign = _0xc2ae54(_0x399298 + _0x3c8128).toUpperCase();
    let _0x40faee = "https://tybook.taoyuewenhua.net/auth/interval_bonus.do?" + _0x535a8f(_0x37fc19, true),
      _0x2a1d1c = "",
      _0x3574b4 = _0x5d0764(_0x40faee, _0x2a1d1c);
    await _0x17bb2d("get", _0x3574b4);
    let _0x5ced07 = _0x3562f;
    if (!_0x5ced07) {
      return;
    }
    if (_0x5ced07.errcode == 0) {
      this.bonusTime = _0x5ced07.data.leftTime;
      let _0x97d507 = Math.floor(this.bonusTime / 1000 / 60),
        _0xc9d79e = Math.floor(this.bonusTime / 1000 - _0x97d507 * 60),
        _0x301d68 = this.bonusTime - _0x97d507 * 60 * 1000 - _0xc9d79e * 1000;
      console.log("账号[" + this.index + "]时段奖励冷却还剩" + _0x97d507 + "分" + _0xc9d79e + "秒" + _0x301d68 + "毫秒");
    } else {
      console.log("账号[" + this.index + "]查询时段奖励冷却失败: " + _0x5ced07.errmsg);
    }
  }
  async acquireIntervalBonus() {
    let _0x29dd30 = this.createReqObj(),
      _0x201216 = _0x535a8f(_0x29dd30);
    _0x29dd30.sign = _0xc2ae54(_0x201216 + _0x3c8128).toUpperCase();
    let _0x2c10cc = "https://tybook.taoyuewenhua.net/auth/acquire_interval_bonus.do?" + _0x535a8f(_0x29dd30, true),
      _0x351f3b = "",
      _0x3382f6 = _0x5d0764(_0x2c10cc, _0x351f3b);
    await _0x17bb2d("get", _0x3382f6);
    let _0x78b951 = _0x3562f;
    if (!_0x78b951) {
      return;
    }
    if (_0x78b951.errcode == 0) {
      let _0xe8fef0 = _0x78b951.data.coins || 0,
        _0x337b6b = _0x78b951.data.money || 0,
        _0x429927 = _0x78b951.data.extraCoins || 0;
      this.extraId = _0x78b951.data.extraId || "";
      let _0x54fa19 = this.extraId ? "，翻倍可获得" + _0x429927 + "金币" : "";
      console.log("账号[" + this.index + "]获得时段奖励" + _0xe8fef0 + "金币，" + _0x337b6b / 100 + "元" + _0x54fa19);
    } else {
      console.log("账号[" + this.index + "]获得时段奖励失败: " + _0x78b951.errmsg);
    }
  }
  async checkSignIn() {
    let _0x2ed410 = this.createReqObj(),
      _0x1a2927 = _0x535a8f(_0x2ed410);
    _0x2ed410.sign = _0xc2ae54(_0x1a2927 + _0x3c8128).toUpperCase();
    let _0x4268e7 = "https://tybook.taoyuewenhua.net/authopt/bonus_pool?" + _0x535a8f(_0x2ed410, true),
      _0xc56986 = "",
      _0x3b3b25 = _0x5d0764(_0x4268e7, _0xc56986);
    await _0x17bb2d("get", _0x3b3b25);
    let _0x1b047e = _0x3562f;
    if (!_0x1b047e) {
      return;
    }
    if (_0x1b047e.errcode == 0) {
      this.valid = true;
      this.checkinToday = _0x1b047e.data.checkinToday;
      let _0x265ab3 = this.checkinToday ? "已签到" : "未签到";
      console.log("账号[" + this.index + "]今日" + _0x265ab3);
    } else {
      console.log("账号[" + this.index + "]查询签到信息失败: " + _0x1b047e.errmsg);
    }
  }
  async signIn() {
    let _0x32a229 = this.createReqObj(),
      _0x45781d = _0x535a8f(_0x32a229);
    _0x32a229.sign = _0xc2ae54(_0x45781d + _0x3c8128).toUpperCase();
    let _0x37a874 = "https://tybook.taoyuewenhua.net/auth/bonus_pool/checkin?" + _0x535a8f(_0x32a229, true),
      _0x23e15 = "",
      _0x5f5183 = _0x5d0764(_0x37a874, _0x23e15);
    await _0x17bb2d("get", _0x5f5183);
    let _0x3ec5be = _0x3562f;
    if (!_0x3ec5be) {
      return;
    }
    if (_0x3ec5be.errcode == 0) {
      let _0x32dd16 = _0x3ec5be.data.coins || 0,
        _0x3551e9 = _0x3ec5be.data.extraCoins || 0;
      this.extraId = _0x3ec5be.data.extraId || "";
      let _0x390aaf = this.extraId ? "，翻倍可获得" + _0x3551e9 + "金币" : "";
      console.log("账号[" + this.index + "]签到获得" + _0x32dd16 + "金币" + _0x390aaf);
    } else {
      console.log("账号[" + this.index + "]签到失败: " + _0x3ec5be.errmsg);
    }
  }
  async withdrawList() {
    let _0x37011c = this.createReqObj(),
      _0x58da7d = _0x535a8f(_0x37011c);
    _0x37011c.sign = _0xc2ae54(_0x58da7d + _0x3c8128).toUpperCase();
    let _0x517d08 = "https://ap.taoyuewenhua.com/ajax/withdraw_limitation?" + _0x535a8f(_0x37011c, true),
      _0x395a86 = "",
      _0x1a57c9 = _0x5d0764(_0x517d08, _0x395a86);
    await _0x17bb2d("get", _0x1a57c9);
    let _0x56d7d1 = _0x3562f;
    if (!_0x56d7d1) {
      return;
    }
    if (_0x56d7d1.errcode == 0) {
      for (let _0x47df5f of _0x56d7d1.data.moneyItems.sort(function (_0x3ce68f, _0x47bac6) {
        return _0x47bac6.money - _0x3ce68f.money;
      })) {
        this.money >= _0x47df5f.money && (_0x47df5f.videoCount ? (console.log("账号[" + this.index + "]提现" + _0x47df5f.money / 100 + "元需要看" + _0x47df5f.videoCount + "次视频，已看" + _0x47df5f.videoWatchCount + "次"), _0x47df5f.videoWatchCount >= _0x47df5f.videoCount && (await _0x4cd03d.wait(200), await this.withdraw(_0x47df5f.money))) : (await _0x4cd03d.wait(200), await this.withdraw(_0x47df5f.money)));
      }
    } else {
      console.log("账号[" + this.index + "]查询提现列表失败: " + _0x56d7d1.errmsg);
    }
  }
  async withdrawVideo() {
    let _0xbc22ae = new Date().getTime(),
      _0xbbb49b = "mibook_old_withdraw_CSJ_" + _0xbc22ae,
      _0x3905ec = _0x2b3f5a(_0xbbb49b, _0x279e9b) + "\n",
      _0x273dd2 = this.createReqObj();
    _0x273dd2.c = _0x3905ec;
    _0x273dd2.extra = "mibook_old_withdraw";
    let _0x3470f5 = _0x535a8f(_0x273dd2);
    _0x273dd2.sign = _0xc2ae54(_0x3470f5 + _0x3c8128).toUpperCase();
    let _0x24f935 = "https://appwall.taoyuewenhua.net//auth/finish_reward_video?" + _0x535a8f(_0x273dd2, true),
      _0x55aa69 = "",
      _0x2218a1 = _0x5d0764(_0x24f935, _0x55aa69);
    await _0x17bb2d("get", _0x2218a1);
    let _0x907144 = _0x3562f;
    if (!_0x907144) {
      return;
    }
    _0x907144.errcode == 0 ? console.log("账号[" + this.index + "]观看提现视频成功") : console.log("账号[" + this.index + "]观看提现视频失败: " + _0x907144.errmsg);
  }
  async withdraw(_0x4a1efe = 30) {
    let _0x5bf89f = this.createReqObj();
    _0x5bf89f.money = _0x4a1efe;
    _0x5bf89f.wx_appid = "wx77ca111229d15864";
    let _0x18ba49 = "http://ap.taoyuewenhua.com/ajax/withdraw_weixin?" + _0x535a8f(_0x5bf89f, true),
      _0x3164b9 = "",
      _0x1bf575 = _0x5d0764(_0x18ba49, _0x3164b9);
    await _0x17bb2d("get", _0x1bf575);
    let _0x2cc9c6 = _0x3562f;
    if (!_0x2cc9c6) {
      return;
    }
    _0x2cc9c6.errcode == 0 ? console.log("账号[" + this.index + "]成功提现" + _0x2cc9c6.data.money / 100 + "元到微信：" + _0x2cc9c6.data.nickname) : console.log("账号[" + this.index + "]提现" + _0x4a1efe / 100 + "元失败: " + _0x2cc9c6.errmsg);
  }
  async hasInvite() {
    let _0x5e4157 = this.createReqObj(),
      _0x32e92b = _0x535a8f(_0x5e4157);
    _0x5e4157.sign = _0xc2ae54(_0x32e92b + _0x3c8128).toUpperCase();
    let _0x236839 = "https://tybook.taoyuewenhua.net/auth/has_inviter.do?" + _0x535a8f(_0x5e4157, true),
      _0x5753d2 = "",
      _0x2f6977 = _0x5d0764(_0x236839, _0x5753d2);
    await _0x17bb2d("get", _0x2f6977);
    let _0x4128ef = _0x3562f;
    if (!_0x4128ef) {
      return;
    }
    _0x4128ef.errcode == 0 && (this.hasInvite = _0x4128ef.data);
  }
  async bindInvite() {
    if (this.uid == _0x589c1e) {
      return;
    }
    let _0x4d0b0b = this.createReqObj();
    _0x4d0b0b.inviteCode = "A" + _0x589c1e;
    let _0x77ff05 = _0x535a8f(_0x4d0b0b);
    _0x4d0b0b.sign = _0xc2ae54(_0x77ff05 + _0x3c8128).toUpperCase();
    let _0x3e6a48 = "https://tybook.taoyuewenhua.net/auth/bind_inviter.do?" + _0x535a8f(_0x4d0b0b, true),
      _0x1fc9c6 = "",
      _0x1543f6 = _0x5d0764(_0x3e6a48, _0x1fc9c6);
    await _0x17bb2d("get", _0x1543f6);
  }
  async exchangeCoin() {
    let _0x2e4c9d = Math.floor(this.coins / 100),
      _0x21cb51 = _0x2e4c9d * 100,
      _0x18fa65 = this.createReqObj();
    _0x18fa65.money = _0x2e4c9d;
    _0x18fa65.coins = _0x21cb51;
    let _0x6c1b5 = _0x535a8f(_0x18fa65);
    _0x18fa65.sign = _0xc2ae54(_0x6c1b5 + _0x3c8128).toUpperCase();
    let _0x25eb6c = "https://tybook.taoyuewenhua.net/auth/exchange_duration.do?" + _0x535a8f(_0x18fa65, true),
      _0x2f6e90 = "",
      _0x286608 = _0x5d0764(_0x25eb6c, _0x2f6e90);
    await _0x17bb2d("get", _0x286608);
    let _0x48eca5 = _0x3562f;
    if (!_0x48eca5) {
      return;
    }
    _0x48eca5.errcode == 0 ? (this.coins -= _0x48eca5.data.coins, this.money += _0x48eca5.data.money, console.log("账号[" + this.index + "]成功兑换" + _0x48eca5.data.coins + "金币 -> " + _0x48eca5.data.money / 100 + "元")) : console.log("账号[" + this.index + "]兑换" + _0x21cb51 + "金币失败: " + _0x48eca5.errmsg);
  }
}
!(async () => {
  if (typeof $request !== "undefined") {
    await _0x148e60();
  } else {
    await _0x3a0239();
    if (_0x4b796e == false) {
      return;
    }
    if (!(await _0x539859())) {
      return;
    }
    console.log("============================");
    console.log("\n=============== 签到 ===============");
    for (let _0x1c841a of _0x3f64f5) {
      await _0x1c841a.checkSignIn();
      await _0x4cd03d.wait(200);
    }
    _0x10ff59 = _0x3f64f5.filter(_0x1bd6f7 => _0x1bd6f7.valid);
    if (_0x10ff59.length == 0) {
      return;
    }
    for (let _0xbea23f of _0x10ff59.filter(_0xc72b60 => _0xc72b60.checkinToday == false)) {
      await _0xbea23f.signIn();
      await _0x4cd03d.wait(200);
    }
    await _0x5c7731();
    if (_0x52651c.invite && _0x52651c.invite != 0) {
      _0x589c1e = _0x52651c.invite;
      for (let _0x18e3a3 of _0x10ff59) {
        await _0x18e3a3.hasInvite();
        await _0x4cd03d.wait(200);
      }
      for (let _0x41ef8d of _0x10ff59.filter(_0x13671b => _0x13671b.hasInvite == false)) {
        await _0x41ef8d.bindInvite();
        await _0x4cd03d.wait(200);
      }
    }
    console.log("\n=============== 账户信息 ===============");
    for (let _0x26c9d3 of _0x10ff59) {
      await _0x26c9d3.checkInfo();
      await _0x4cd03d.wait(200);
    }
    console.log("\n=============== 时段奖励 ===============");
    for (let _0xb836e3 of _0x10ff59) {
      await _0xb836e3.checkIntervalBonus();
      await _0x4cd03d.wait(200);
    }
    for (let _0x3a2602 of _0x10ff59.filter(_0xae1c18 => _0xae1c18.bonusTime == 0)) {
      await _0x3a2602.acquireIntervalBonus();
      await _0x4cd03d.wait(200);
    }
    await _0x5c7731();
    console.log("\n=============== 抽奖 ===============");
    for (let _0x49f6b9 of _0x10ff59) {
      await _0x49f6b9.lotteryStatus();
      await _0x4cd03d.wait(200);
    }
    _0x579085 = _0xaaeb98(_0x579085, _0x4f2137);
    for (let _0x33c1cb = 0; _0x33c1cb < _0x579085; _0x33c1cb++) {
      console.log("\n-->第" + (_0x33c1cb + 1) + "次抽奖:");
      for (let _0x4714cc of _0x10ff59.filter(_0x534116 => _0x534116.leftCount > 0)) {
        await _0x4714cc.lotteryDraw();
        await _0x4cd03d.wait(200);
      }
      await _0x5c7731();
    }
    console.log("\n=============== 抽奖宝箱 ===============");
    for (let _0x3b0af2 of _0x10ff59) {
      await _0x3b0af2.lotteryDrawOpenBox();
      await _0x4cd03d.wait(200);
    }
    await _0x5c7731();
    console.log("\n=============== 看视频奖励 ===============");
    for (let _0x1e5ee7 of _0x10ff59) {
      await _0x1e5ee7.rewardVideo();
      await _0x4cd03d.wait(200);
    }
    for (let _0x141072 of _0x10ff59) {
      await _0x141072.withdrawVideo();
      await _0x4cd03d.wait(200);
    }
    console.log("\n=============== 看小说" + _0x592792 + "次 ===============");
    for (let _0x1dc1ac of _0x10ff59) {
      await _0x1dc1ac.bookMall();
      await _0x4cd03d.wait(200);
    }
    for (let _0x1a938e = 0; _0x1a938e < _0x592792; _0x1a938e++) {
      console.log("\n-->第" + (_0x1a938e + 1) + "次阅读:");
      for (let _0x33e192 of _0x10ff59) {
        await _0x33e192.readNovel();
        await _0x4cd03d.wait(200);
      }
      _0x1a938e != _0x592792 - 1 && (console.log("等待" + _0x501398 + "秒进行下一次阅读..."), await _0x4cd03d.wait((_0x501398 + 1) * 1000));
    }
    console.log("\n=============== 账户信息 ===============");
    for (let _0x4ad276 of _0x10ff59) {
      await _0x4ad276.checkInfo();
      await _0x4cd03d.wait(200);
    }
    console.log("\n=============== 金币兑换 ===============");
    if (_0x53cf0f == _0x12a25d && _0x3dcaa8 < _0x6892ef) {
      for (let _0x5c932a of _0x10ff59) {
        await _0x5c932a.exchangeCoin();
        await _0x4cd03d.wait(200);
      }
    } else {
      console.log("非兑换时间，现在设置为每天" + _0x12a25d + "点的前" + _0x6892ef + "分钟兑换金币");
    }
    console.log("\n=============== 提现 ===============");
    for (let _0x23d707 of _0x10ff59) {
      await _0x23d707.withdrawList();
      await _0x4cd03d.wait(200);
    }
  }
})().catch(_0x88236e => _0x4cd03d.logErr(_0x88236e)).finally(() => _0x4cd03d.done());
async function _0x5c7731() {
  let _0x5f38a0 = false;
  for (let _0x5b4a31 of _0x10ff59.filter(_0xb95d2d => _0xb95d2d.extraId)) {
    _0x5f38a0 = true;
    await _0x5b4a31.startExtraTask();
    await _0x4cd03d.wait(200);
  }
  if (_0x5f38a0 == true) {
    await _0x4cd03d.wait(15500);
    for (let _0x13e357 of _0x10ff59.filter(_0x3889e9 => _0x3889e9.extraId)) {
      await _0x13e357.finishExtraTask();
      await _0x4cd03d.wait(200);
    }
  }
}
async function _0x148e60() {
  if ($request.url.indexOf("/auth/interval_bonus") > -1) {
    let _0x1bbb15 = $request.url,
      _0x2facab = _0x1bbb15.match(/token=([\w-]+)/)[1],
      _0x250c9b = _0x1bbb15.match(/uid=(\w+)/)[1],
      _0x1dd087 = _0x2facab + "&" + _0x250c9b;
    _0x467061 ? _0x467061.indexOf(_0x1dd087) == -1 && (_0x467061 = _0x467061 + "@" + _0x1dd087, _0x4cd03d.setdata(_0x467061, "txsCookie"), ckList = _0x467061.split("@"), _0x4cd03d.msg(_0x5a4113 + (" 获取第" + ckList.length + "个ck成功: " + _0x1dd087))) : (_0x4cd03d.setdata(_0x1dd087, "txsCookie"), _0x4cd03d.msg(_0x5a4113 + (" 获取第1个ck成功: " + _0x1dd087)));
  }
}
async function _0x539859() {
  if (_0x467061) {
    for (let _0x5b57a9 of _0x467061.split("@")) {
      if (_0x5b57a9) {
        _0x3f64f5.push(new _0x2fd5e7(_0x5b57a9));
      }
    }
    _0x2aab1f = _0x3f64f5.length;
  } else {
    console.log("未找到CK");
    return;
  }
  console.log("共找到" + _0x2aab1f + "个账号");
  return true;
}
async function _0x611893() {
  return;
  notifyBody = _0x5a4113 + "运行通知\n\n" + _0x582944;
  _0xe07897 == 1 ? (_0x4cd03d.msg(notifyBody), _0x4cd03d.isNode() && (await _0x13e309.sendNotify(_0x4cd03d.name, notifyBody))) : console.log(notifyBody);
}
async function _0x572498(_0x2c798e) {
  if (!PushDearKey) {
    return;
  }
  if (!_0x2c798e) {
    return;
  }
  console.log("\n============= PushDear 通知 =============\n");
  console.log(_0x2c798e);
  let _0x1c45f8 = {
    url: "https://api2.pushdeer.com/message/push?pushkey=" + PushDearKey + "&text=" + encodeURIComponent(_0x2c798e),
    headers: {}
  };
  await _0x17bb2d("get", _0x1c45f8);
  let _0x5f0be2 = _0x3562f,
    _0x526968 = _0x5f0be2.content.result == false ? "失败" : "成功";
  console.log("\n========== PushDear 通知发送" + _0x526968 + " ==========\n");
}
async function _0x3a0239() {
  let _0x456caf = {
    url: _0x37fab0,
    headers: ""
  };
  await _0x17bb2d("get", _0x456caf);
  let _0x38f972 = _0x3562f;
  if (!_0x38f972) {
    return;
  }
  _0x38f972?.["code"] == 0 && (_0x38f972 = JSON.parse(_0x38f972.data.file.data));
  if (_0x38f972[_0x3d01e8]) {
    let _0x4c8d8b = _0x38f972[_0x3d01e8];
    _0x4c8d8b.status == 0 ? _0x4db54a >= _0x4c8d8b.version ? (_0x4b796e = true, console.log(_0x4c8d8b.msg[_0x4c8d8b.status]), console.log(_0x4c8d8b.updateMsg)) : console.log(_0x4c8d8b.versionMsg) : console.log(_0x4c8d8b.msg[_0x4c8d8b.status]);
  } else {
    console.log(_0x38f972.errorMsg);
  }
}
function _0x5d0764(_0x251309, _0x3c40ff = "") {
  let _0x373943 = _0x251309.replace("//", "/").split("/")[1];
  const _0x464a1c = {
    Host: _0x373943,
    Accept: "*/*",
    "Accept-Language": "zh-CN,zh-Hans;q=0.9",
    Connection: "Keep-Alive",
    "Accept-Encoding": "gzip, deflate, br",
    "User-Agent": "okhttp/3.12.1"
  };
  let _0x338da1 = {
    url: _0x251309,
    headers: _0x464a1c
  };
  if (_0x3c40ff) {
    _0x338da1.body = _0x3c40ff;
  }
  return _0x338da1;
}
async function _0x17bb2d(_0x4031c4, _0x270f53) {
  _0x3562f = null;
  _0x4031c4 == "post" && (_0x270f53.headers["Content-Type"] = "application/json", _0x270f53.headers["Content-Length"] = _0x270f53.body ? _0x270f53.body.length : 0);
  return new Promise(_0x5a9f2f => {
    _0x4cd03d[_0x4031c4](_0x270f53, async (_0x50d844, _0xc4195, _0x3280b9) => {
      try {
        if (_0x50d844) {
          console.log(_0x4031c4 + "请求失败");
          console.log(JSON.stringify(_0x50d844));
          _0x4cd03d.logErr(_0x50d844);
        } else {
          if (_0x4cbbdf(_0x3280b9)) {
            _0x3562f = JSON.parse(_0x3280b9);
          }
        }
      } catch (_0x11a3ad) {
        _0x4cd03d.logErr(_0x11a3ad, _0xc4195);
      } finally {
        _0x5a9f2f();
      }
    });
  });
}
function _0x4cbbdf(_0x142729) {
  try {
    if (typeof JSON.parse(_0x142729) == "object") {
      return true;
    } else {
      console.log(_0x142729);
    }
  } catch (_0xe7c342) {
    console.log(_0x142729);
    console.log(_0xe7c342);
    console.log("服务器访问数据为空，请检查自身设备网络情况");
    return false;
  }
}
function _0xaaeb98(_0x5eb0c2, _0xdf22e1) {
  return _0x5eb0c2 < _0xdf22e1 ? _0x5eb0c2 : _0xdf22e1;
}
function _0x4844c5(_0x4602bb, _0x3a212f) {
  return _0x4602bb < _0x3a212f ? _0x3a212f : _0x4602bb;
}
function _0x535a8f(_0x2fcde5, _0xcd5a04 = false) {
  let _0x1637ec = "";
  for (let _0xae3d99 of Object.keys(_0x2fcde5).sort()) {
    if (_0x1637ec) {
      _0x1637ec += "&";
    }
    let _0x312707 = _0x2fcde5[_0xae3d99];
    if (_0xcd5a04) {
      _0x312707 = encodeURIComponent(_0x312707);
    }
    _0x1637ec += _0xae3d99 + "=" + _0x312707;
  }
  return _0x1637ec;
}
function _0x22358d(_0xc888cc, _0x492f9f, _0xda2175 = "0") {
  let _0x2e84b7 = String(_0xc888cc),
    _0x4cbc48 = _0x492f9f > _0x2e84b7.length ? _0x492f9f - _0x2e84b7.length : 0,
    _0x4a0c75 = "";
  for (let _0x4dc8a1 = 0; _0x4dc8a1 < _0x4cbc48; _0x4dc8a1++) {
    _0x4a0c75 += _0xda2175;
  }
  _0x4a0c75 += _0x2e84b7;
  return _0x4a0c75;
}
function _0x36c30a(_0xdf9102 = 12) {
  let _0xde086 = "abcdef0123456789",
    _0x2befd5 = _0xde086.length,
    _0x2b7375 = "";
  for (i = 0; i < _0xdf9102; i++) {
    _0x2b7375 += _0xde086.charAt(Math.floor(Math.random() * _0x2befd5));
  }
  return _0x2b7375;
}
function _0x2b3f5a(_0x2e20b8, _0x228781, _0x57b2ff = 0) {
  var _0x292efa = _0x23c557.enc.Utf8.parse(_0x228781),
    _0x23bad9 = _0x23c557.enc.Utf8.parse(_0x2e20b8);
  encrypted = _0x23c557.AES.encrypt(_0x23bad9, _0x292efa, {
    mode: _0x23c557.mode.ECB,
    padding: _0x23c557.pad.Pkcs7
  });
  return encrypted.ciphertext.toString(_0x23c557.enc.Base64);
}
function _0x326bf1(_0x4ec424, _0x3628c0, _0x5a43bc = 0) {
  var _0x15f728 = _0x23c557.enc.Utf8.parse(_0x3628c0),
    _0x5521ed = _0x23c557.AES.decrypt({
      ciphertext: _0x23c557.enc.Base64.parse(_0x4ec424)
    }, _0x15f728, {
      mode: _0x23c557.mode.ECB,
      padding: _0x23c557.pad.Pkcs7
    });
  return _0x5521ed.toString(_0x23c557.enc.Utf8);
}
var _0x1bf558 = {
  _keyStr: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
  encode: function (_0x20e836) {
    var _0x38fbc5 = "";
    var _0x9a922d, _0x14377f, _0x1b49ae, _0xce19b5, _0x66acbf, _0x4b52cb, _0x19484f;
    var _0x53d75d = 0;
    _0x20e836 = _0x1bf558._utf8_encode(_0x20e836);
    while (_0x53d75d < _0x20e836.length) {
      _0x9a922d = _0x20e836.charCodeAt(_0x53d75d++);
      _0x14377f = _0x20e836.charCodeAt(_0x53d75d++);
      _0x1b49ae = _0x20e836.charCodeAt(_0x53d75d++);
      _0xce19b5 = _0x9a922d >> 2;
      _0x66acbf = (_0x9a922d & 3) << 4 | _0x14377f >> 4;
      _0x4b52cb = (_0x14377f & 15) << 2 | _0x1b49ae >> 6;
      _0x19484f = _0x1b49ae & 63;
      if (isNaN(_0x14377f)) {
        _0x4b52cb = _0x19484f = 64;
      } else {
        isNaN(_0x1b49ae) && (_0x19484f = 64);
      }
      _0x38fbc5 = _0x38fbc5 + this._keyStr.charAt(_0xce19b5) + this._keyStr.charAt(_0x66acbf) + this._keyStr.charAt(_0x4b52cb) + this._keyStr.charAt(_0x19484f);
    }
    return _0x38fbc5;
  },
  decode: function (_0x25f687) {
    var _0x8ba1cf = "",
      _0x4e2cec,
      _0x24afdb,
      _0x552abd,
      _0x280098,
      _0x3d67cd,
      _0x5375b4,
      _0x279c70,
      _0x252fd0 = 0;
    _0x25f687 = _0x25f687.replace(/[^A-Za-z0-9+/=]/g, "");
    while (_0x252fd0 < _0x25f687.length) {
      _0x280098 = this._keyStr.indexOf(_0x25f687.charAt(_0x252fd0++));
      _0x3d67cd = this._keyStr.indexOf(_0x25f687.charAt(_0x252fd0++));
      _0x5375b4 = this._keyStr.indexOf(_0x25f687.charAt(_0x252fd0++));
      _0x279c70 = this._keyStr.indexOf(_0x25f687.charAt(_0x252fd0++));
      _0x4e2cec = _0x280098 << 2 | _0x3d67cd >> 4;
      _0x24afdb = (_0x3d67cd & 15) << 4 | _0x5375b4 >> 2;
      _0x552abd = (_0x5375b4 & 3) << 6 | _0x279c70;
      _0x8ba1cf = _0x8ba1cf + String.fromCharCode(_0x4e2cec);
      _0x5375b4 != 64 && (_0x8ba1cf = _0x8ba1cf + String.fromCharCode(_0x24afdb));
      _0x279c70 != 64 && (_0x8ba1cf = _0x8ba1cf + String.fromCharCode(_0x552abd));
    }
    _0x8ba1cf = _0x1bf558._utf8_decode(_0x8ba1cf);
    return _0x8ba1cf;
  },
  _utf8_encode: function (_0x4ccc64) {
    _0x4ccc64 = _0x4ccc64.replace(/rn/g, "n");
    var _0x596b66 = "";
    for (var _0x1fa3e8 = 0; _0x1fa3e8 < _0x4ccc64.length; _0x1fa3e8++) {
      var _0x2cbb53 = _0x4ccc64.charCodeAt(_0x1fa3e8);
      if (_0x2cbb53 < 128) {
        _0x596b66 += String.fromCharCode(_0x2cbb53);
      } else {
        _0x2cbb53 > 127 && _0x2cbb53 < 2048 ? (_0x596b66 += String.fromCharCode(_0x2cbb53 >> 6 | 192), _0x596b66 += String.fromCharCode(_0x2cbb53 & 63 | 128)) : (_0x596b66 += String.fromCharCode(_0x2cbb53 >> 12 | 224), _0x596b66 += String.fromCharCode(_0x2cbb53 >> 6 & 63 | 128), _0x596b66 += String.fromCharCode(_0x2cbb53 & 63 | 128));
      }
    }
    return _0x596b66;
  },
  _utf8_decode: function (_0x498550) {
    c1 = c2 = 0;
    var _0x470dea = "",
      _0x42516e = 0,
      _0x22d894 = c1;
    while (_0x42516e < _0x498550.length) {
      _0x22d894 = _0x498550.charCodeAt(_0x42516e);
      if (_0x22d894 < 128) {
        _0x470dea += String.fromCharCode(_0x22d894);
        _0x42516e++;
      } else {
        _0x22d894 > 191 && _0x22d894 < 224 ? (c2 = _0x498550.charCodeAt(_0x42516e + 1), _0x470dea += String.fromCharCode((_0x22d894 & 31) << 6 | c2 & 63), _0x42516e += 2) : (c2 = _0x498550.charCodeAt(_0x42516e + 1), c3 = _0x498550.charCodeAt(_0x42516e + 2), _0x470dea += String.fromCharCode((_0x22d894 & 15) << 12 | (c2 & 63) << 6 | c3 & 63), _0x42516e += 3);
      }
    }
    return _0x470dea;
  }
};
function _0xc2ae54(_0x28c089) {
  function _0x4a1f05(_0x315a36, _0x2020b3) {
    return _0x315a36 << _0x2020b3 | _0x315a36 >>> 32 - _0x2020b3;
  }
  function _0x4dd581(_0x34730d, _0x224d32) {
    var _0x5a28b5, _0x2b5a5d, _0x31f236, _0x2a03ab, _0x3bc165;
    _0x31f236 = 2147483648 & _0x34730d;
    _0x2a03ab = 2147483648 & _0x224d32;
    _0x5a28b5 = 1073741824 & _0x34730d;
    _0x2b5a5d = 1073741824 & _0x224d32;
    _0x3bc165 = (1073741823 & _0x34730d) + (1073741823 & _0x224d32);
    return _0x5a28b5 & _0x2b5a5d ? 2147483648 ^ _0x3bc165 ^ _0x31f236 ^ _0x2a03ab : _0x5a28b5 | _0x2b5a5d ? 1073741824 & _0x3bc165 ? 3221225472 ^ _0x3bc165 ^ _0x31f236 ^ _0x2a03ab : 1073741824 ^ _0x3bc165 ^ _0x31f236 ^ _0x2a03ab : _0x3bc165 ^ _0x31f236 ^ _0x2a03ab;
  }
  function _0xa71bee(_0x4aab65, _0x19f74b, _0x1fb192) {
    return _0x4aab65 & _0x19f74b | ~_0x4aab65 & _0x1fb192;
  }
  function _0x510360(_0xbac6ac, _0xfd249c, _0x10fbcd) {
    return _0xbac6ac & _0x10fbcd | _0xfd249c & ~_0x10fbcd;
  }
  function _0x51812f(_0x11c94e, _0x865ec6, _0x35dbd9) {
    return _0x11c94e ^ _0x865ec6 ^ _0x35dbd9;
  }
  function _0x2fba97(_0x107be2, _0x3db950, _0x817cd9) {
    return _0x3db950 ^ (_0x107be2 | ~_0x817cd9);
  }
  function _0x513098(_0x38ffc5, _0x15cdac, _0x3a146a, _0x3087b4, _0x5516c9, _0x1da5e1, _0x524806) {
    _0x38ffc5 = _0x4dd581(_0x38ffc5, _0x4dd581(_0x4dd581(_0xa71bee(_0x15cdac, _0x3a146a, _0x3087b4), _0x5516c9), _0x524806));
    return _0x4dd581(_0x4a1f05(_0x38ffc5, _0x1da5e1), _0x15cdac);
  }
  function _0x494c7f(_0x30c7a3, _0x47e329, _0x2b086b, _0xdcbf4e, _0x5eb593, _0x2593a4, _0x36bc66) {
    _0x30c7a3 = _0x4dd581(_0x30c7a3, _0x4dd581(_0x4dd581(_0x510360(_0x47e329, _0x2b086b, _0xdcbf4e), _0x5eb593), _0x36bc66));
    return _0x4dd581(_0x4a1f05(_0x30c7a3, _0x2593a4), _0x47e329);
  }
  function _0x3e9445(_0x181fe0, _0x23b21a, _0x457de6, _0x48ac31, _0x1f9938, _0x214c85, _0x4134bf) {
    _0x181fe0 = _0x4dd581(_0x181fe0, _0x4dd581(_0x4dd581(_0x51812f(_0x23b21a, _0x457de6, _0x48ac31), _0x1f9938), _0x4134bf));
    return _0x4dd581(_0x4a1f05(_0x181fe0, _0x214c85), _0x23b21a);
  }
  function _0x335302(_0x495731, _0x9f6b1e, _0x37ba70, _0x3ced8f, _0x13cabc, _0x21bacb, _0x3976d0) {
    _0x495731 = _0x4dd581(_0x495731, _0x4dd581(_0x4dd581(_0x2fba97(_0x9f6b1e, _0x37ba70, _0x3ced8f), _0x13cabc), _0x3976d0));
    return _0x4dd581(_0x4a1f05(_0x495731, _0x21bacb), _0x9f6b1e);
  }
  function _0x1e72c3(_0x4c7857) {
    for (var _0x4d715a, _0x46ea51 = _0x4c7857.length, _0x2fcb9a = _0x46ea51 + 8, _0x4101c6 = (_0x2fcb9a - _0x2fcb9a % 64) / 64, _0x375a48 = 16 * (_0x4101c6 + 1), _0x1fcaa3 = new Array(_0x375a48 - 1), _0x1e973e = 0, _0x2b60a6 = 0; _0x46ea51 > _0x2b60a6;) {
      _0x4d715a = (_0x2b60a6 - _0x2b60a6 % 4) / 4;
      _0x1e973e = _0x2b60a6 % 4 * 8;
      _0x1fcaa3[_0x4d715a] = _0x1fcaa3[_0x4d715a] | _0x4c7857.charCodeAt(_0x2b60a6) << _0x1e973e;
      _0x2b60a6++;
    }
    _0x4d715a = (_0x2b60a6 - _0x2b60a6 % 4) / 4;
    _0x1e973e = _0x2b60a6 % 4 * 8;
    _0x1fcaa3[_0x4d715a] = _0x1fcaa3[_0x4d715a] | 128 << _0x1e973e;
    _0x1fcaa3[_0x375a48 - 2] = _0x46ea51 << 3;
    _0x1fcaa3[_0x375a48 - 1] = _0x46ea51 >>> 29;
    return _0x1fcaa3;
  }
  function _0x29f109(_0x32a522) {
    var _0x10d25c,
      _0x4d0a15,
      _0x10b7d6 = "",
      _0x2f2fe0 = "";
    for (_0x4d0a15 = 0; 3 >= _0x4d0a15; _0x4d0a15++) {
      _0x10d25c = _0x32a522 >>> 8 * _0x4d0a15 & 255;
      _0x2f2fe0 = "0" + _0x10d25c.toString(16);
      _0x10b7d6 += _0x2f2fe0.substr(_0x2f2fe0.length - 2, 2);
    }
    return _0x10b7d6;
  }
  function _0x50c23b(_0x5806aa) {
    _0x5806aa = _0x5806aa.replace(/\r\n/g, "\n");
    for (var _0x598a26 = "", _0x370b7a = 0; _0x370b7a < _0x5806aa.length; _0x370b7a++) {
      var _0x4473aa = _0x5806aa.charCodeAt(_0x370b7a);
      128 > _0x4473aa ? _0x598a26 += String.fromCharCode(_0x4473aa) : _0x4473aa > 127 && 2048 > _0x4473aa ? (_0x598a26 += String.fromCharCode(_0x4473aa >> 6 | 192), _0x598a26 += String.fromCharCode(63 & _0x4473aa | 128)) : (_0x598a26 += String.fromCharCode(_0x4473aa >> 12 | 224), _0x598a26 += String.fromCharCode(_0x4473aa >> 6 & 63 | 128), _0x598a26 += String.fromCharCode(63 & _0x4473aa | 128));
    }
    return _0x598a26;
  }
  var _0x1eb4d3,
    _0x4daa81,
    _0x12272f,
    _0xeb79f7,
    _0x465cb8,
    _0x1ab8c1,
    _0x1a0c11,
    _0x3a9bcc,
    _0x4a9f7f,
    _0x16c00f = [],
    _0x5efb80 = 7,
    _0x2a6be9 = 12,
    _0x303a27 = 17,
    _0xfab093 = 22,
    _0x1f364a = 5,
    _0x428129 = 9,
    _0x3659d7 = 14,
    _0x3580f4 = 20,
    _0x132ecc = 4,
    _0x51ff08 = 11,
    _0x3bdb3c = 16,
    _0x2e4b3b = 23,
    _0x874d2b = 6,
    _0x71cfe = 10,
    _0x553582 = 15,
    _0x1ad410 = 21;
  for (_0x28c089 = _0x50c23b(_0x28c089), _0x16c00f = _0x1e72c3(_0x28c089), _0x1ab8c1 = 1732584193, _0x1a0c11 = 4023233417, _0x3a9bcc = 2562383102, _0x4a9f7f = 271733878, _0x1eb4d3 = 0; _0x1eb4d3 < _0x16c00f.length; _0x1eb4d3 += 16) {
    _0x4daa81 = _0x1ab8c1;
    _0x12272f = _0x1a0c11;
    _0xeb79f7 = _0x3a9bcc;
    _0x465cb8 = _0x4a9f7f;
    _0x1ab8c1 = _0x513098(_0x1ab8c1, _0x1a0c11, _0x3a9bcc, _0x4a9f7f, _0x16c00f[_0x1eb4d3 + 0], _0x5efb80, 3614090360);
    _0x4a9f7f = _0x513098(_0x4a9f7f, _0x1ab8c1, _0x1a0c11, _0x3a9bcc, _0x16c00f[_0x1eb4d3 + 1], _0x2a6be9, 3905402710);
    _0x3a9bcc = _0x513098(_0x3a9bcc, _0x4a9f7f, _0x1ab8c1, _0x1a0c11, _0x16c00f[_0x1eb4d3 + 2], _0x303a27, 606105819);
    _0x1a0c11 = _0x513098(_0x1a0c11, _0x3a9bcc, _0x4a9f7f, _0x1ab8c1, _0x16c00f[_0x1eb4d3 + 3], _0xfab093, 3250441966);
    _0x1ab8c1 = _0x513098(_0x1ab8c1, _0x1a0c11, _0x3a9bcc, _0x4a9f7f, _0x16c00f[_0x1eb4d3 + 4], _0x5efb80, 4118548399);
    _0x4a9f7f = _0x513098(_0x4a9f7f, _0x1ab8c1, _0x1a0c11, _0x3a9bcc, _0x16c00f[_0x1eb4d3 + 5], _0x2a6be9, 1200080426);
    _0x3a9bcc = _0x513098(_0x3a9bcc, _0x4a9f7f, _0x1ab8c1, _0x1a0c11, _0x16c00f[_0x1eb4d3 + 6], _0x303a27, 2821735955);
    _0x1a0c11 = _0x513098(_0x1a0c11, _0x3a9bcc, _0x4a9f7f, _0x1ab8c1, _0x16c00f[_0x1eb4d3 + 7], _0xfab093, 4249261313);
    _0x1ab8c1 = _0x513098(_0x1ab8c1, _0x1a0c11, _0x3a9bcc, _0x4a9f7f, _0x16c00f[_0x1eb4d3 + 8], _0x5efb80, 1770035416);
    _0x4a9f7f = _0x513098(_0x4a9f7f, _0x1ab8c1, _0x1a0c11, _0x3a9bcc, _0x16c00f[_0x1eb4d3 + 9], _0x2a6be9, 2336552879);
    _0x3a9bcc = _0x513098(_0x3a9bcc, _0x4a9f7f, _0x1ab8c1, _0x1a0c11, _0x16c00f[_0x1eb4d3 + 10], _0x303a27, 4294925233);
    _0x1a0c11 = _0x513098(_0x1a0c11, _0x3a9bcc, _0x4a9f7f, _0x1ab8c1, _0x16c00f[_0x1eb4d3 + 11], _0xfab093, 2304563134);
    _0x1ab8c1 = _0x513098(_0x1ab8c1, _0x1a0c11, _0x3a9bcc, _0x4a9f7f, _0x16c00f[_0x1eb4d3 + 12], _0x5efb80, 1804603682);
    _0x4a9f7f = _0x513098(_0x4a9f7f, _0x1ab8c1, _0x1a0c11, _0x3a9bcc, _0x16c00f[_0x1eb4d3 + 13], _0x2a6be9, 4254626195);
    _0x3a9bcc = _0x513098(_0x3a9bcc, _0x4a9f7f, _0x1ab8c1, _0x1a0c11, _0x16c00f[_0x1eb4d3 + 14], _0x303a27, 2792965006);
    _0x1a0c11 = _0x513098(_0x1a0c11, _0x3a9bcc, _0x4a9f7f, _0x1ab8c1, _0x16c00f[_0x1eb4d3 + 15], _0xfab093, 1236535329);
    _0x1ab8c1 = _0x494c7f(_0x1ab8c1, _0x1a0c11, _0x3a9bcc, _0x4a9f7f, _0x16c00f[_0x1eb4d3 + 1], _0x1f364a, 4129170786);
    _0x4a9f7f = _0x494c7f(_0x4a9f7f, _0x1ab8c1, _0x1a0c11, _0x3a9bcc, _0x16c00f[_0x1eb4d3 + 6], _0x428129, 3225465664);
    _0x3a9bcc = _0x494c7f(_0x3a9bcc, _0x4a9f7f, _0x1ab8c1, _0x1a0c11, _0x16c00f[_0x1eb4d3 + 11], _0x3659d7, 643717713);
    _0x1a0c11 = _0x494c7f(_0x1a0c11, _0x3a9bcc, _0x4a9f7f, _0x1ab8c1, _0x16c00f[_0x1eb4d3 + 0], _0x3580f4, 3921069994);
    _0x1ab8c1 = _0x494c7f(_0x1ab8c1, _0x1a0c11, _0x3a9bcc, _0x4a9f7f, _0x16c00f[_0x1eb4d3 + 5], _0x1f364a, 3593408605);
    _0x4a9f7f = _0x494c7f(_0x4a9f7f, _0x1ab8c1, _0x1a0c11, _0x3a9bcc, _0x16c00f[_0x1eb4d3 + 10], _0x428129, 38016083);
    _0x3a9bcc = _0x494c7f(_0x3a9bcc, _0x4a9f7f, _0x1ab8c1, _0x1a0c11, _0x16c00f[_0x1eb4d3 + 15], _0x3659d7, 3634488961);
    _0x1a0c11 = _0x494c7f(_0x1a0c11, _0x3a9bcc, _0x4a9f7f, _0x1ab8c1, _0x16c00f[_0x1eb4d3 + 4], _0x3580f4, 3889429448);
    _0x1ab8c1 = _0x494c7f(_0x1ab8c1, _0x1a0c11, _0x3a9bcc, _0x4a9f7f, _0x16c00f[_0x1eb4d3 + 9], _0x1f364a, 568446438);
    _0x4a9f7f = _0x494c7f(_0x4a9f7f, _0x1ab8c1, _0x1a0c11, _0x3a9bcc, _0x16c00f[_0x1eb4d3 + 14], _0x428129, 3275163606);
    _0x3a9bcc = _0x494c7f(_0x3a9bcc, _0x4a9f7f, _0x1ab8c1, _0x1a0c11, _0x16c00f[_0x1eb4d3 + 3], _0x3659d7, 4107603335);
    _0x1a0c11 = _0x494c7f(_0x1a0c11, _0x3a9bcc, _0x4a9f7f, _0x1ab8c1, _0x16c00f[_0x1eb4d3 + 8], _0x3580f4, 1163531501);
    _0x1ab8c1 = _0x494c7f(_0x1ab8c1, _0x1a0c11, _0x3a9bcc, _0x4a9f7f, _0x16c00f[_0x1eb4d3 + 13], _0x1f364a, 2850285829);
    _0x4a9f7f = _0x494c7f(_0x4a9f7f, _0x1ab8c1, _0x1a0c11, _0x3a9bcc, _0x16c00f[_0x1eb4d3 + 2], _0x428129, 4243563512);
    _0x3a9bcc = _0x494c7f(_0x3a9bcc, _0x4a9f7f, _0x1ab8c1, _0x1a0c11, _0x16c00f[_0x1eb4d3 + 7], _0x3659d7, 1735328473);
    _0x1a0c11 = _0x494c7f(_0x1a0c11, _0x3a9bcc, _0x4a9f7f, _0x1ab8c1, _0x16c00f[_0x1eb4d3 + 12], _0x3580f4, 2368359562);
    _0x1ab8c1 = _0x3e9445(_0x1ab8c1, _0x1a0c11, _0x3a9bcc, _0x4a9f7f, _0x16c00f[_0x1eb4d3 + 5], _0x132ecc, 4294588738);
    _0x4a9f7f = _0x3e9445(_0x4a9f7f, _0x1ab8c1, _0x1a0c11, _0x3a9bcc, _0x16c00f[_0x1eb4d3 + 8], _0x51ff08, 2272392833);
    _0x3a9bcc = _0x3e9445(_0x3a9bcc, _0x4a9f7f, _0x1ab8c1, _0x1a0c11, _0x16c00f[_0x1eb4d3 + 11], _0x3bdb3c, 1839030562);
    _0x1a0c11 = _0x3e9445(_0x1a0c11, _0x3a9bcc, _0x4a9f7f, _0x1ab8c1, _0x16c00f[_0x1eb4d3 + 14], _0x2e4b3b, 4259657740);
    _0x1ab8c1 = _0x3e9445(_0x1ab8c1, _0x1a0c11, _0x3a9bcc, _0x4a9f7f, _0x16c00f[_0x1eb4d3 + 1], _0x132ecc, 2763975236);
    _0x4a9f7f = _0x3e9445(_0x4a9f7f, _0x1ab8c1, _0x1a0c11, _0x3a9bcc, _0x16c00f[_0x1eb4d3 + 4], _0x51ff08, 1272893353);
    _0x3a9bcc = _0x3e9445(_0x3a9bcc, _0x4a9f7f, _0x1ab8c1, _0x1a0c11, _0x16c00f[_0x1eb4d3 + 7], _0x3bdb3c, 4139469664);
    _0x1a0c11 = _0x3e9445(_0x1a0c11, _0x3a9bcc, _0x4a9f7f, _0x1ab8c1, _0x16c00f[_0x1eb4d3 + 10], _0x2e4b3b, 3200236656);
    _0x1ab8c1 = _0x3e9445(_0x1ab8c1, _0x1a0c11, _0x3a9bcc, _0x4a9f7f, _0x16c00f[_0x1eb4d3 + 13], _0x132ecc, 681279174);
    _0x4a9f7f = _0x3e9445(_0x4a9f7f, _0x1ab8c1, _0x1a0c11, _0x3a9bcc, _0x16c00f[_0x1eb4d3 + 0], _0x51ff08, 3936430074);
    _0x3a9bcc = _0x3e9445(_0x3a9bcc, _0x4a9f7f, _0x1ab8c1, _0x1a0c11, _0x16c00f[_0x1eb4d3 + 3], _0x3bdb3c, 3572445317);
    _0x1a0c11 = _0x3e9445(_0x1a0c11, _0x3a9bcc, _0x4a9f7f, _0x1ab8c1, _0x16c00f[_0x1eb4d3 + 6], _0x2e4b3b, 76029189);
    _0x1ab8c1 = _0x3e9445(_0x1ab8c1, _0x1a0c11, _0x3a9bcc, _0x4a9f7f, _0x16c00f[_0x1eb4d3 + 9], _0x132ecc, 3654602809);
    _0x4a9f7f = _0x3e9445(_0x4a9f7f, _0x1ab8c1, _0x1a0c11, _0x3a9bcc, _0x16c00f[_0x1eb4d3 + 12], _0x51ff08, 3873151461);
    _0x3a9bcc = _0x3e9445(_0x3a9bcc, _0x4a9f7f, _0x1ab8c1, _0x1a0c11, _0x16c00f[_0x1eb4d3 + 15], _0x3bdb3c, 530742520);
    _0x1a0c11 = _0x3e9445(_0x1a0c11, _0x3a9bcc, _0x4a9f7f, _0x1ab8c1, _0x16c00f[_0x1eb4d3 + 2], _0x2e4b3b, 3299628645);
    _0x1ab8c1 = _0x335302(_0x1ab8c1, _0x1a0c11, _0x3a9bcc, _0x4a9f7f, _0x16c00f[_0x1eb4d3 + 0], _0x874d2b, 4096336452);
    _0x4a9f7f = _0x335302(_0x4a9f7f, _0x1ab8c1, _0x1a0c11, _0x3a9bcc, _0x16c00f[_0x1eb4d3 + 7], _0x71cfe, 1126891415);
    _0x3a9bcc = _0x335302(_0x3a9bcc, _0x4a9f7f, _0x1ab8c1, _0x1a0c11, _0x16c00f[_0x1eb4d3 + 14], _0x553582, 2878612391);
    _0x1a0c11 = _0x335302(_0x1a0c11, _0x3a9bcc, _0x4a9f7f, _0x1ab8c1, _0x16c00f[_0x1eb4d3 + 5], _0x1ad410, 4237533241);
    _0x1ab8c1 = _0x335302(_0x1ab8c1, _0x1a0c11, _0x3a9bcc, _0x4a9f7f, _0x16c00f[_0x1eb4d3 + 12], _0x874d2b, 1700485571);
    _0x4a9f7f = _0x335302(_0x4a9f7f, _0x1ab8c1, _0x1a0c11, _0x3a9bcc, _0x16c00f[_0x1eb4d3 + 3], _0x71cfe, 2399980690);
    _0x3a9bcc = _0x335302(_0x3a9bcc, _0x4a9f7f, _0x1ab8c1, _0x1a0c11, _0x16c00f[_0x1eb4d3 + 10], _0x553582, 4293915773);
    _0x1a0c11 = _0x335302(_0x1a0c11, _0x3a9bcc, _0x4a9f7f, _0x1ab8c1, _0x16c00f[_0x1eb4d3 + 1], _0x1ad410, 2240044497);
    _0x1ab8c1 = _0x335302(_0x1ab8c1, _0x1a0c11, _0x3a9bcc, _0x4a9f7f, _0x16c00f[_0x1eb4d3 + 8], _0x874d2b, 1873313359);
    _0x4a9f7f = _0x335302(_0x4a9f7f, _0x1ab8c1, _0x1a0c11, _0x3a9bcc, _0x16c00f[_0x1eb4d3 + 15], _0x71cfe, 4264355552);
    _0x3a9bcc = _0x335302(_0x3a9bcc, _0x4a9f7f, _0x1ab8c1, _0x1a0c11, _0x16c00f[_0x1eb4d3 + 6], _0x553582, 2734768916);
    _0x1a0c11 = _0x335302(_0x1a0c11, _0x3a9bcc, _0x4a9f7f, _0x1ab8c1, _0x16c00f[_0x1eb4d3 + 13], _0x1ad410, 1309151649);
    _0x1ab8c1 = _0x335302(_0x1ab8c1, _0x1a0c11, _0x3a9bcc, _0x4a9f7f, _0x16c00f[_0x1eb4d3 + 4], _0x874d2b, 4149444226);
    _0x4a9f7f = _0x335302(_0x4a9f7f, _0x1ab8c1, _0x1a0c11, _0x3a9bcc, _0x16c00f[_0x1eb4d3 + 11], _0x71cfe, 3174756917);
    _0x3a9bcc = _0x335302(_0x3a9bcc, _0x4a9f7f, _0x1ab8c1, _0x1a0c11, _0x16c00f[_0x1eb4d3 + 2], _0x553582, 718787259);
    _0x1a0c11 = _0x335302(_0x1a0c11, _0x3a9bcc, _0x4a9f7f, _0x1ab8c1, _0x16c00f[_0x1eb4d3 + 9], _0x1ad410, 3951481745);
    _0x1ab8c1 = _0x4dd581(_0x1ab8c1, _0x4daa81);
    _0x1a0c11 = _0x4dd581(_0x1a0c11, _0x12272f);
    _0x3a9bcc = _0x4dd581(_0x3a9bcc, _0xeb79f7);
    _0x4a9f7f = _0x4dd581(_0x4a9f7f, _0x465cb8);
  }
  var _0x4342d0 = _0x29f109(_0x1ab8c1) + _0x29f109(_0x1a0c11) + _0x29f109(_0x3a9bcc) + _0x29f109(_0x4a9f7f);
  return _0x4342d0.toLowerCase();
}
function _0x135448(_0x65e79c, _0x10dcc4) {
  "undefined" != typeof process && JSON.stringify(process.env).indexOf("GITHUB") > -1 && process.exit(0);
  class _0x10a41b {
    constructor(_0x94bd89) {
      this.env = _0x94bd89;
    }
    send(_0x3f83f5, _0x1d5de6 = "GET") {
      _0x3f83f5 = "string" == typeof _0x3f83f5 ? {
        url: _0x3f83f5
      } : _0x3f83f5;
      let _0x396d28 = this.get;
      "POST" === _0x1d5de6 && (_0x396d28 = this.post);
      "PUT" === _0x1d5de6 && (_0x396d28 = this.put);
      return new Promise((_0xf15a47, _0x94ec39) => {
        _0x396d28.call(this, _0x3f83f5, (_0x35e7b4, _0x2254e6, _0x1455ab) => {
          _0x35e7b4 ? _0x94ec39(_0x35e7b4) : _0xf15a47(_0x2254e6);
        });
      });
    }
    get(_0x396eb7) {
      return this.send.call(this.env, _0x396eb7);
    }
    post(_0x428e93) {
      return this.send.call(this.env, _0x428e93, "POST");
    }
    put(_0x1640ad) {
      return this.send.call(this.env, _0x1640ad, "PUT");
    }
  }
  return new class {
    constructor(_0x25fa9c, _0x60c292) {
      this.name = _0x25fa9c;
      this.http = new _0x10a41b(this);
      this.data = null;
      this.dataFile = "box.dat";
      this.logs = [];
      this.isMute = !1;
      this.isNeedRewrite = !1;
      this.logSeparator = "\n";
      this.startTime = new Date().getTime();
      Object.assign(this, _0x60c292);
      this.log("", "🔔" + this.name + ", 开始!");
    }
    isNode() {
      return "undefined" != typeof module && !!module.exports;
    }
    isQuanX() {
      return "undefined" != typeof $task;
    }
    isSurge() {
      return "undefined" != typeof $httpClient && "undefined" == typeof $loon;
    }
    isLoon() {
      return "undefined" != typeof $loon;
    }
    toObj(_0xeb2782, _0x1e5fe0 = null) {
      try {
        return JSON.parse(_0xeb2782);
      } catch {
        return _0x1e5fe0;
      }
    }
    toStr(_0x33b0d3, _0x506a84 = null) {
      try {
        return JSON.stringify(_0x33b0d3);
      } catch {
        return _0x506a84;
      }
    }
    getjson(_0x179e25, _0x35fada) {
      let _0x1e850e = _0x35fada;
      const _0x4dc014 = this.getdata(_0x179e25);
      if (_0x4dc014) {
        try {
          _0x1e850e = JSON.parse(this.getdata(_0x179e25));
        } catch {}
      }
      return _0x1e850e;
    }
    setjson(_0x40d43a, _0x4c1d36) {
      try {
        return this.setdata(JSON.stringify(_0x40d43a), _0x4c1d36);
      } catch {
        return !1;
      }
    }
    getScript(_0x37e884) {
      return new Promise(_0x398b70 => {
        const _0x3e792e = {
          url: _0x37e884
        };
        this.get(_0x3e792e, (_0x1cfca3, _0x2baf43, _0x211a0e) => _0x398b70(_0x211a0e));
      });
    }
    runScript(_0x2d6b5d, _0x356483) {
      return new Promise(_0x6109d6 => {
        let _0xd6a5db = this.getdata("@chavy_boxjs_userCfgs.httpapi");
        _0xd6a5db = _0xd6a5db ? _0xd6a5db.replace(/\n/g, "").trim() : _0xd6a5db;
        let _0x4d48ff = this.getdata("@chavy_boxjs_userCfgs.httpapi_timeout");
        _0x4d48ff = _0x4d48ff ? 1 * _0x4d48ff : 20;
        _0x4d48ff = _0x356483 && _0x356483.timeout ? _0x356483.timeout : _0x4d48ff;
        const _0x3dff0f = {
          script_text: _0x2d6b5d,
          mock_type: "cron",
          timeout: _0x4d48ff
        };
        const [_0x25a129, _0x2a3a58] = _0xd6a5db.split("@"),
          _0x50f7ed = {
            url: "http://" + _0x2a3a58 + "/v1/scripting/evaluate",
            body: _0x3dff0f,
            headers: {
              "X-Key": _0x25a129,
              Accept: "*/*"
            }
          };
        this.post(_0x50f7ed, (_0x48f5af, _0x1191bc, _0x192bdc) => _0x6109d6(_0x192bdc));
      }).catch(_0x3409d3 => this.logErr(_0x3409d3));
    }
    loaddata() {
      if (!this.isNode()) {
        return {};
      }
      {
        this.fs = this.fs ? this.fs : require("fs");
        this.path = this.path ? this.path : require("path");
        const _0x4d36b5 = this.path.resolve(this.dataFile),
          _0x33def2 = this.path.resolve(process.cwd(), this.dataFile),
          _0x92cf2f = this.fs.existsSync(_0x4d36b5),
          _0x18d05d = !_0x92cf2f && this.fs.existsSync(_0x33def2);
        if (!_0x92cf2f && !_0x18d05d) {
          return {};
        }
        {
          const _0x41bd7c = _0x92cf2f ? _0x4d36b5 : _0x33def2;
          try {
            return JSON.parse(this.fs.readFileSync(_0x41bd7c));
          } catch (_0x4fe5c8) {
            return {};
          }
        }
      }
    }
    writedata() {
      if (this.isNode()) {
        this.fs = this.fs ? this.fs : require("fs");
        this.path = this.path ? this.path : require("path");
        const _0x575803 = this.path.resolve(this.dataFile),
          _0x5615b5 = this.path.resolve(process.cwd(), this.dataFile),
          _0x307352 = this.fs.existsSync(_0x575803),
          _0x3ddce5 = !_0x307352 && this.fs.existsSync(_0x5615b5),
          _0x590105 = JSON.stringify(this.data);
        _0x307352 ? this.fs.writeFileSync(_0x575803, _0x590105) : _0x3ddce5 ? this.fs.writeFileSync(_0x5615b5, _0x590105) : this.fs.writeFileSync(_0x575803, _0x590105);
      }
    }
    lodash_get(_0x285bd9, _0x324ea8, _0x357dce) {
      const _0x4a139e = _0x324ea8.replace(/\[(\d+)\]/g, ".$1").split(".");
      let _0x28aef0 = _0x285bd9;
      for (const _0x429efc of _0x4a139e) if (_0x28aef0 = Object(_0x28aef0)[_0x429efc], void 0 === _0x28aef0) {
        return _0x357dce;
      }
      return _0x28aef0;
    }
    lodash_set(_0x204a56, _0x566321, _0x16b3d4) {
      return Object(_0x204a56) !== _0x204a56 ? _0x204a56 : (Array.isArray(_0x566321) || (_0x566321 = _0x566321.toString().match(/[^.[\]]+/g) || []), _0x566321.slice(0, -1).reduce((_0xd0bfab, _0x3d1b3b, _0x1ae02f) => Object(_0xd0bfab[_0x3d1b3b]) === _0xd0bfab[_0x3d1b3b] ? _0xd0bfab[_0x3d1b3b] : _0xd0bfab[_0x3d1b3b] = Math.abs(_0x566321[_0x1ae02f + 1]) >> 0 == +_0x566321[_0x1ae02f + 1] ? [] : {}, _0x204a56)[_0x566321[_0x566321.length - 1]] = _0x16b3d4, _0x204a56);
    }
    getdata(_0x2f33ee) {
      let _0x24ca8d = this.getval(_0x2f33ee);
      if (/^@/.test(_0x2f33ee)) {
        const [, _0x1e0c6a, _0x2d2ded] = /^@(.*?)\.(.*?)$/.exec(_0x2f33ee),
          _0x21427d = _0x1e0c6a ? this.getval(_0x1e0c6a) : "";
        if (_0x21427d) {
          try {
            const _0x193a95 = JSON.parse(_0x21427d);
            _0x24ca8d = _0x193a95 ? this.lodash_get(_0x193a95, _0x2d2ded, "") : _0x24ca8d;
          } catch (_0x26ae24) {
            _0x24ca8d = "";
          }
        }
      }
      return _0x24ca8d;
    }
    setdata(_0x4e2d2c, _0x13de50) {
      let _0x6f4324 = !1;
      if (/^@/.test(_0x13de50)) {
        const [, _0x203a47, _0x218462] = /^@(.*?)\.(.*?)$/.exec(_0x13de50),
          _0x108f5a = this.getval(_0x203a47),
          _0x57a749 = _0x203a47 ? "null" === _0x108f5a ? null : _0x108f5a || "{}" : "{}";
        try {
          const _0xaedae5 = JSON.parse(_0x57a749);
          this.lodash_set(_0xaedae5, _0x218462, _0x4e2d2c);
          _0x6f4324 = this.setval(JSON.stringify(_0xaedae5), _0x203a47);
        } catch (_0xa9b68b) {
          const _0x1c0e38 = {};
          this.lodash_set(_0x1c0e38, _0x218462, _0x4e2d2c);
          _0x6f4324 = this.setval(JSON.stringify(_0x1c0e38), _0x203a47);
        }
      } else {
        _0x6f4324 = this.setval(_0x4e2d2c, _0x13de50);
      }
      return _0x6f4324;
    }
    getval(_0x388546) {
      return this.isSurge() || this.isLoon() ? $persistentStore.read(_0x388546) : this.isQuanX() ? $prefs.valueForKey(_0x388546) : this.isNode() ? (this.data = this.loaddata(), this.data[_0x388546]) : this.data && this.data[_0x388546] || null;
    }
    setval(_0x89ca88, _0x4407b4) {
      return this.isSurge() || this.isLoon() ? $persistentStore.write(_0x89ca88, _0x4407b4) : this.isQuanX() ? $prefs.setValueForKey(_0x89ca88, _0x4407b4) : this.isNode() ? (this.data = this.loaddata(), this.data[_0x4407b4] = _0x89ca88, this.writedata(), !0) : this.data && this.data[_0x4407b4] || null;
    }
    initGotEnv(_0x59f890) {
      this.got = this.got ? this.got : require("got");
      this.cktough = this.cktough ? this.cktough : require("tough-cookie");
      this.ckjar = this.ckjar ? this.ckjar : new this.cktough.CookieJar();
      _0x59f890 && (_0x59f890.headers = _0x59f890.headers ? _0x59f890.headers : {}, void 0 === _0x59f890.headers.Cookie && void 0 === _0x59f890.cookieJar && (_0x59f890.cookieJar = this.ckjar));
    }
    get(_0x1892f0, _0x4880ed = () => {}) {
      const _0x3a5a3f = {
        "X-Surge-Skip-Scripting": !1
      };
      const _0x2b30fc = {
        hints: !1
      };
      _0x1892f0.headers && (delete _0x1892f0.headers["Content-Type"], delete _0x1892f0.headers["Content-Length"]);
      this.isSurge() || this.isLoon() ? (this.isSurge() && this.isNeedRewrite && (_0x1892f0.headers = _0x1892f0.headers || {}, Object.assign(_0x1892f0.headers, _0x3a5a3f)), $httpClient.get(_0x1892f0, (_0x51e52f, _0x18d226, _0x4c8649) => {
        !_0x51e52f && _0x18d226 && (_0x18d226.body = _0x4c8649, _0x18d226.statusCode = _0x18d226.status);
        _0x4880ed(_0x51e52f, _0x18d226, _0x4c8649);
      })) : this.isQuanX() ? (this.isNeedRewrite && (_0x1892f0.opts = _0x1892f0.opts || {}, Object.assign(_0x1892f0.opts, _0x2b30fc)), $task.fetch(_0x1892f0).then(_0x2e3094 => {
        const {
            statusCode: _0x553581,
            statusCode: _0x4f7037,
            headers: _0x2fa473,
            body: _0x1f6274
          } = _0x2e3094,
          _0x146fe8 = {
            status: _0x553581,
            statusCode: _0x4f7037,
            headers: _0x2fa473,
            body: _0x1f6274
          };
        _0x4880ed(null, _0x146fe8, _0x1f6274);
      }, _0x1e9cb6 => _0x4880ed(_0x1e9cb6))) : this.isNode() && (this.initGotEnv(_0x1892f0), this.got(_0x1892f0).on("redirect", (_0x21e919, _0x3800d2) => {
        try {
          if (_0x21e919.headers["set-cookie"]) {
            const _0x3f6fd1 = _0x21e919.headers["set-cookie"].map(this.cktough.Cookie.parse).toString();
            this.ckjar.setCookieSync(_0x3f6fd1, null);
            _0x3800d2.cookieJar = this.ckjar;
          }
        } catch (_0x4b377e) {
          this.logErr(_0x4b377e);
        }
      }).then(_0x5db542 => {
        const {
            statusCode: _0x33190e,
            statusCode: _0x2ec1db,
            headers: _0x15f63d,
            body: _0x358315
          } = _0x5db542,
          _0x4b9fe3 = {
            status: _0x33190e,
            statusCode: _0x2ec1db,
            headers: _0x15f63d,
            body: _0x358315
          };
        _0x4880ed(null, _0x4b9fe3, _0x358315);
      }, _0x383e0f => {
        const {
          message: _0x1211bf,
          response: _0x3e96bf
        } = _0x383e0f;
        _0x4880ed(_0x1211bf, _0x3e96bf, _0x3e96bf && _0x3e96bf.body);
      }));
    }
    post(_0x5c0c72, _0x51fd09 = () => {}) {
      const _0x5556f7 = {
        "X-Surge-Skip-Scripting": !1
      };
      const _0x3254f9 = {
        hints: !1
      };
      if (_0x5c0c72.body && _0x5c0c72.headers && !_0x5c0c72.headers["Content-Type"] && (_0x5c0c72.headers["Content-Type"] = "application/x-www-form-urlencoded"), _0x5c0c72.headers && delete _0x5c0c72.headers["Content-Length"], this.isSurge() || this.isLoon()) {
        this.isSurge() && this.isNeedRewrite && (_0x5c0c72.headers = _0x5c0c72.headers || {}, Object.assign(_0x5c0c72.headers, _0x5556f7));
        $httpClient.post(_0x5c0c72, (_0x39dbf1, _0x37c99f, _0xa6c80d) => {
          !_0x39dbf1 && _0x37c99f && (_0x37c99f.body = _0xa6c80d, _0x37c99f.statusCode = _0x37c99f.status);
          _0x51fd09(_0x39dbf1, _0x37c99f, _0xa6c80d);
        });
      } else {
        if (this.isQuanX()) {
          _0x5c0c72.method = "POST";
          this.isNeedRewrite && (_0x5c0c72.opts = _0x5c0c72.opts || {}, Object.assign(_0x5c0c72.opts, _0x3254f9));
          $task.fetch(_0x5c0c72).then(_0x5f86f8 => {
            const {
                statusCode: _0x5727bc,
                statusCode: _0x15abfc,
                headers: _0x2d9d11,
                body: _0x1b8ef8
              } = _0x5f86f8,
              _0xd1536a = {
                status: _0x5727bc,
                statusCode: _0x15abfc,
                headers: _0x2d9d11,
                body: _0x1b8ef8
              };
            _0x51fd09(null, _0xd1536a, _0x1b8ef8);
          }, _0x1ef9cb => _0x51fd09(_0x1ef9cb));
        } else {
          if (this.isNode()) {
            this.initGotEnv(_0x5c0c72);
            const {
              url: _0x4e6b15,
              ..._0x203694
            } = _0x5c0c72;
            this.got.post(_0x4e6b15, _0x203694).then(_0x193191 => {
              const {
                  statusCode: _0x5f5cc5,
                  statusCode: _0x1d56db,
                  headers: _0x5a0dec,
                  body: _0x3fc423
                } = _0x193191,
                _0x5a330c = {
                  status: _0x5f5cc5,
                  statusCode: _0x1d56db,
                  headers: _0x5a0dec,
                  body: _0x3fc423
                };
              _0x51fd09(null, _0x5a330c, _0x3fc423);
            }, _0x3b0f50 => {
              const {
                message: _0x16e746,
                response: _0x412846
              } = _0x3b0f50;
              _0x51fd09(_0x16e746, _0x412846, _0x412846 && _0x412846.body);
            });
          }
        }
      }
    }
    put(_0x1d7495, _0xe917ff = () => {}) {
      const _0x12cdc7 = {
        "X-Surge-Skip-Scripting": !1
      };
      const _0x206829 = {
        hints: !1
      };
      if (_0x1d7495.body && _0x1d7495.headers && !_0x1d7495.headers["Content-Type"] && (_0x1d7495.headers["Content-Type"] = "application/x-www-form-urlencoded"), _0x1d7495.headers && delete _0x1d7495.headers["Content-Length"], this.isSurge() || this.isLoon()) {
        this.isSurge() && this.isNeedRewrite && (_0x1d7495.headers = _0x1d7495.headers || {}, Object.assign(_0x1d7495.headers, _0x12cdc7));
        $httpClient.put(_0x1d7495, (_0x479383, _0x32ce38, _0x4cfa48) => {
          !_0x479383 && _0x32ce38 && (_0x32ce38.body = _0x4cfa48, _0x32ce38.statusCode = _0x32ce38.status);
          _0xe917ff(_0x479383, _0x32ce38, _0x4cfa48);
        });
      } else {
        if (this.isQuanX()) {
          _0x1d7495.method = "PUT";
          this.isNeedRewrite && (_0x1d7495.opts = _0x1d7495.opts || {}, Object.assign(_0x1d7495.opts, _0x206829));
          $task.fetch(_0x1d7495).then(_0xb76e3 => {
            const {
                statusCode: _0x9850fb,
                statusCode: _0x956acf,
                headers: _0x2f7392,
                body: _0x53ce74
              } = _0xb76e3,
              _0x3ca85f = {
                status: _0x9850fb,
                statusCode: _0x956acf,
                headers: _0x2f7392,
                body: _0x53ce74
              };
            _0xe917ff(null, _0x3ca85f, _0x53ce74);
          }, _0x299401 => _0xe917ff(_0x299401));
        } else {
          if (this.isNode()) {
            this.initGotEnv(_0x1d7495);
            const {
              url: _0x1a5ebe,
              ..._0xc48015
            } = _0x1d7495;
            this.got.put(_0x1a5ebe, _0xc48015).then(_0x4496b4 => {
              const {
                  statusCode: _0x2c2e49,
                  statusCode: _0x4c587b,
                  headers: _0x449bba,
                  body: _0x1b33f3
                } = _0x4496b4,
                _0x569675 = {
                  status: _0x2c2e49,
                  statusCode: _0x4c587b,
                  headers: _0x449bba,
                  body: _0x1b33f3
                };
              _0xe917ff(null, _0x569675, _0x1b33f3);
            }, _0xe134ba => {
              const {
                message: _0x1b21c6,
                response: _0x2f9872
              } = _0xe134ba;
              _0xe917ff(_0x1b21c6, _0x2f9872, _0x2f9872 && _0x2f9872.body);
            });
          }
        }
      }
    }
    time(_0x48e6cf) {
      let _0x255f3a = {
        "M+": new Date().getMonth() + 1,
        "d+": new Date().getDate(),
        "H+": new Date().getHours(),
        "m+": new Date().getMinutes(),
        "s+": new Date().getSeconds(),
        "q+": Math.floor((new Date().getMonth() + 3) / 3),
        S: new Date().getMilliseconds()
      };
      /(y+)/.test(_0x48e6cf) && (_0x48e6cf = _0x48e6cf.replace(RegExp.$1, (new Date().getFullYear() + "").substr(4 - RegExp.$1.length)));
      for (let _0x2ca0f2 in _0x255f3a) new RegExp("(" + _0x2ca0f2 + ")").test(_0x48e6cf) && (_0x48e6cf = _0x48e6cf.replace(RegExp.$1, 1 == RegExp.$1.length ? _0x255f3a[_0x2ca0f2] : ("00" + _0x255f3a[_0x2ca0f2]).substr(("" + _0x255f3a[_0x2ca0f2]).length)));
      return _0x48e6cf;
    }
    msg(_0x47a461 = _0x65e79c, _0x42fba9 = "", _0x4ccdfc = "", _0x1ef48a) {
      const _0x51622d = _0x471171 => {
        if (!_0x471171) {
          return _0x471171;
        }
        if ("string" == typeof _0x471171) {
          return this.isLoon() ? _0x471171 : this.isQuanX() ? {
            "open-url": _0x471171
          } : this.isSurge() ? {
            url: _0x471171
          } : void 0;
        }
        if ("object" == typeof _0x471171) {
          if (this.isLoon()) {
            let _0x31e9d2 = _0x471171.openUrl || _0x471171.url || _0x471171["open-url"],
              _0x1d3450 = _0x471171.mediaUrl || _0x471171["media-url"];
            const _0x1b30ab = {
              openUrl: _0x31e9d2,
              mediaUrl: _0x1d3450
            };
            return _0x1b30ab;
          }
          if (this.isQuanX()) {
            let _0x328b48 = _0x471171["open-url"] || _0x471171.url || _0x471171.openUrl,
              _0x3d04d4 = _0x471171["media-url"] || _0x471171.mediaUrl;
            const _0x34aecf = {
              "open-url": _0x328b48,
              "media-url": _0x3d04d4
            };
            return _0x34aecf;
          }
          if (this.isSurge()) {
            let _0x2d7cd7 = _0x471171.url || _0x471171.openUrl || _0x471171["open-url"];
            const _0x1b28c8 = {
              url: _0x2d7cd7
            };
            return _0x1b28c8;
          }
        }
      };
      this.isMute || (this.isSurge() || this.isLoon() ? $notification.post(_0x47a461, _0x42fba9, _0x4ccdfc, _0x51622d(_0x1ef48a)) : this.isQuanX() && $notify(_0x47a461, _0x42fba9, _0x4ccdfc, _0x51622d(_0x1ef48a)));
      let _0x1de9d6 = ["", "==============📣系统通知📣=============="];
      _0x1de9d6.push(_0x47a461);
      _0x42fba9 && _0x1de9d6.push(_0x42fba9);
      _0x4ccdfc && _0x1de9d6.push(_0x4ccdfc);
      console.log(_0x1de9d6.join("\n"));
      this.logs = this.logs.concat(_0x1de9d6);
    }
    log(..._0x117677) {
      _0x117677.length > 0 && (this.logs = [...this.logs, ..._0x117677]);
      console.log(_0x117677.join(this.logSeparator));
    }
    logErr(_0x36ce48, _0x2cd651) {
      const _0x42c6f2 = !this.isSurge() && !this.isQuanX() && !this.isLoon();
      _0x42c6f2 ? this.log("", "❗️" + this.name + ", 错误!", _0x36ce48.stack) : this.log("", "❗️" + this.name + ", 错误!", _0x36ce48);
    }
    wait(_0x13cdc2) {
      return new Promise(_0x42e0e2 => setTimeout(_0x42e0e2, _0x13cdc2));
    }
    done(_0x1d88db = {}) {
      const _0x263920 = new Date().getTime(),
        _0x20fbd7 = (_0x263920 - this.startTime) / 1000;
      this.log("", "🔔" + this.name + ", 结束! 🕛 " + _0x20fbd7 + " 秒");
      this.log();
      (this.isSurge() || this.isQuanX() || this.isLoon()) && $done(_0x1d88db);
    }
  }(_0x65e79c, _0x10dcc4);
}