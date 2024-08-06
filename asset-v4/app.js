var app = new function() {
    this.name = "Incredisaac", 
    this.version = "1", 
    this.date = "2024", 
    this.folder = "asset-v4/", 
    this.looptime = 9600, 
    this.bpm = 100, 
    this.totalframe = 256, 
    this.nbpolo = 7, 
    this.nbloopbonus = 3, 
    this.bonusloopA = !0, 
    this.bonusendloopA = !0, 
    this.recmaxloop = 68, 
    this.recminloop = 4, 
    this.recmintime = Math.round(this.looptime / 1e3) * this.recminloop, 
    this.spritepolo = "polo-sprite.png", 
    this.spritepicto = "game-picto.png", 
    this.colBck = "#000000", 
    this.col0 = "#000000", 
    this.col1 = "#000000",  
    this.col2 = "#000000", 
    this.col3 = "#000000", 
    this.col4 = "#000000", 
    this.animearray = [{
        name: "1_coins",
        color: "ffffff",
        uniqsnd: !0
    }, {
        name: "2_rope",
        color: "ffffff",
        uniqsnd: !0
    }, {
        name: "3_pressure",
        color: "ffffff",
        uniqsnd: !0
    }, {
        name: "4_goldeneye",
        color: "ffffff",
        uniqsnd: !0
    }, {
        name: "5_juan",
        color: "ffffff",
        uniqsnd: !0
    }, {
        name: "6_detector",
        color: "ffffff",
        uniqsnd: !1
    }, {
        name: "7_record",
        color: "ffffff",
        uniqsnd: !0
    }, {
        name: "8_empty",
        color: "ffffff",
        uniqsnd: !1
    }, {
        name: "9_gears",
        color: "ffffff",
        uniqsnd: !0
    },  {
        name: "10_deez",
        color: "ffffff",
        uniqsnd: !0
    }, {
        name: "11_teeth",
        color: "ffffff",
        uniqsnd: !1
    }, {
        name: "12_locker",
        color: "ffffff",
        uniqsnd: !0
    }, {
        name: "13_unhope",
        color: "ffffff",
        uniqsnd: !1
    }, {
        name: "14_bulb",
        color: "ffffff",
        uniqsnd: !1
    }, {
        name: "15_betrayal",
        color: "ffffff",
        uniqsnd: !0
    }, {
        name: "16_time",
        color: "ffffff",
        uniqsnd: !1
    }, {
        name: "17_survivor",
        color: "ffffff",
        uniqsnd: !1
    }, {
        name: "18_whisper",
        color: "ffffff",
        uniqsnd: !1
    }, {
        name: "19_ace",
        color: "ffffff",
        uniqsnd: !1
    }, {
        name: "20_connect",
        color: "ffffff",
        uniqsnd: !1
    }, {
        name: "21_c",
        color: "ffffff",
        uniqsnd: !1
    }], this.bonusarray = [];
    for (var n = 0, o = this.animearray.length; n < o; n++) {
        var a = this.animearray[n].name;
        this.animearray[n].soundA = a + "_a", this.animearray[n].soundB = this.animearray[n].uniqsnd ? a + "_a" : a + "_b", this.animearray[n].anime = a + "-sprite.png", this.animearray[n].animeData = a + ".json"
    }
};
