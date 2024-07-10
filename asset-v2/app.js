var app = new function() {
    this.name = "Incredisaac", 
    this.version = "1", 
    this.date = "2024", 
    this.folder = "asset-v2/", 
    this.looptime = 12000, 
    this.bpm = 80, 
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
        name: "1_lab",
        color: "ffffff",
        uniqsnd: !0
    }, {
        name: "2_smoke",
        color: "ffffff",
        uniqsnd: !0
    }, {
        name: "3_switch",
        color: "ffffff",
        uniqsnd: !0
    }, {
        name: "4_eyes",
        color: "ffffff",
        uniqsnd: !0
    }, {
        name: "5_mud",
        color: "ffffff",
        uniqsnd: !0
    }, {
        name: "6_tar",
        color: "ffffff",
        uniqsnd: !0
    }, {
        name: "7_Rain",
        color: "ffffff",
        uniqsnd: !0
    }, {
        name: "8_wilson",
        color: "ffffff",
        uniqsnd: !1
    }, {
        name: "9_big_eye",
        color: "ffffff",
        uniqsnd: !0
    }, {
        name: "10_rotten",
        color: "ffffff",
        uniqsnd: !1
    }, {
        name: "11_subject",
        color: "ffffff",
        uniqsnd: !0
    }, {
        name: "12_hopeless",
        color: "ffffff",
        uniqsnd: !0
    }, {
        name: "13_isometry",
        color: "ffffff",
        uniqsnd: !0
    }, {
        name: "14_bsjdskaj",
        color: "ffffff",
        uniqsnd: !1
    }, {
        name: "15_mortis",
        color: "ffffff",
        uniqsnd: !0
    }, {
        name: "16_suffering",
        color: "ffffff",
        uniqsnd: !1
    }, {
        name: "17_siren",
        color: "ffffff",
        uniqsnd: !0
    }, {
        name: "18_slices",
        color: "ffffff",
        uniqsnd: !1
    }, {
        name: "19_deciever",
        color: "ffffff",
        uniqsnd: !1
    }, {
        name: "20_void",
        color: "ffffff",
        uniqsnd: !0
    }, {
        name: "21_breakcore",
        color: "ffffff",
        uniqsnd: !0
    },{
        name: "22_changeling",
        color: "ffffff",
        uniqsnd: !0
    }], this.bonusarray = [];
    for (var n = 0, o = this.animearray.length; n < o; n++) {
        var a = this.animearray[n].name;
        this.animearray[n].soundA = a + "_a", this.animearray[n].soundB = this.animearray[n].uniqsnd ? a + "_a" : a + "_b", this.animearray[n].anime = a + "-sprite.png", this.animearray[n].animeData = a + ".json"
    }
};
