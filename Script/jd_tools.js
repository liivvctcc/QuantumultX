(function() {
    function r(e, n, t) {
        function o(i, f) {
            if (!n[i]) {
                if (!e[i]) {
                    var c = "function" == typeof require && require;
                    if (!f && c) return c(i, !0);
                    if (u) return u(i, !0);
                    var a = new Error("Cannot find module '" + i + "'");
                    throw a.code = "MODULE_NOT_FOUND", a
                }
                var p = n[i] = {
                    exports: {}
                };
                e[i][0].call(p.exports, function(r) {
                    var n = e[i][1][r];
                    return o(n || r)
                }, p, p.exports, r, e, n, t)
            }
            return n[i].exports
        }
        for (var u = "function" == typeof require && require, i = 0; i < t.length; i++) o(t[i]);
        return o
    }
    return r
})()({
        1: [function(require, module, exports) {
                "use strict";
                var __awaiter = (this && this.__awaiter) || function(thisArg, _arguments, P, generator) {
                    function adopt(value) {
                        return value instanceof P ? value : new P(function(resolve) {
                            resolve(value);
                        });
                    }
                    return new(P || (P = Promise))(function(resolve, reject) {
                        function fulfilled(value) {
                            try {
                                step(generator.next(value));
                            } catch (e) {
                                reject(e);
                            }
                        }
                        function rejected(value) {
                            try {
                                step(generator["throw"](value));
                            } catch (e) {
                                reject(e);
                            }
                        }
                        function step(result) {
                            result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
                        }
                        step((generator = generator.apply(thisArg, _arguments || [])).next());
                    });
                };
                Object.defineProperty(exports, "__esModule", {
                    value: true
                });
                const utils_1 = require("../utils/utils");
                const config_1 = require("../config/config");
                class Stall {
                    constructor(params, containerDiv, outputTextarea) {
                        this.detailurl = "https://api.m.jd.com/client.action?functionId=stall_getTaskDetail";
                        this.data = [];
                        this.taskVos = [];
                        this.timer = 1000;
                        this.taskToken = "";
                        this.secretp = "";
                        this.params = params;
                        this.container = containerDiv;
                        this.outputTextarea = outputTextarea;
                        this.outputTextarea.value = `褰撲綘鐪嬪埌杩欒鏂囧瓧鏃讹紝璇存槑浣犺繕娌℃湁閰嶇疆濂芥祻瑙堝櫒UA鎴栬€呰繕娌℃湁鐧诲綍浜笢甯愬彿锛乣;
    }
    get() {
        // 鑾峰彇鍩虹淇℃伅
        Promise.all([
            this.request("stall_getHomeData"),
            new Promise((resolve) => {
                setTimeout(() => {
                    this.request("stall_getTaskDetail").then(resolve);
                }, 1000);
            }),
        ])
            .then(([homeData, taskData]) => Promise.all([homeData.json(), taskData.json()]))
            .then(([homeData, taskData]) => {
            // 鑾峰彇绛惧悕 token
            this.secretp = homeData.data.result.homeMainInfo.secretp;
            this.data = taskData.data.result;
            var value = "";
            this.outputTextarea.value = "";
            utils_1.default.outPutLog(this.outputTextarea, value);
            if (this.data) {
                this.taskVos = this.data.taskVos;
                value = '鑾峰彇鏁版嵁鎴愬姛';
                for (let j = 0; j < this.data.taskVos.length; j++) {
                    console.log();
                    value += `\
                        n$ {
                            this.taskVos[j]["taskName"]
                        }
                        锛� $ {
                            this.data.taskVos[1]["status"] == 2 ? "宸插畬鎴�" : "鏈畬鎴�"
                        }($ {
                                this.taskVos[j]["times"]
                            }
                            /${this.taskVos[j]["maxTimes"]})`;
                        }
                        this.list();
                    }
                    else {
                        value = "璇峰厛杩涘叆娲诲姩椤靛紑鍚椿鍔ㄥ悗鍐嶄娇鐢ㄨ剼鏈惂~";
                    }
                    utils_1.default.outPutLog(this.outputTextarea, value);
                });
        }
        updateTask() {
            this.request("stall_getTaskDetail").then((res) => res.json()).then((res) => {
                this.data = res.data.result;
                var value = "";
                if (this.data) {
                    this.taskVos = this.data.taskVos;
                    value = '浠诲姟鏁版嵁鏇存柊鎴愬姛';
                    for (let j = 0; j < this.data.taskVos.length; j++) {
                        value += `\n${this.taskVos[j]["taskName"]}锛�${this.data.taskVos[1]["status"] == 2 ? "宸插畬鎴�" : "鏈畬鎴�"}(${this.taskVos[j]["times"]}/${this.taskVos[j]["maxTimes"]})`;
                    }
                } else {
                    value = "璇峰厛杩涘叆娲诲姩椤靛紑鍚椿鍔ㄥ悗鍐嶄娇鐢ㄨ剼鏈惂~";
                }
                utils_1.default.outPutLog(this.outputTextarea, value);
            });
        }
        list() {
            const content = document.createElement("div");
            let msg = `
        <div style="margin:10px;">
        <button class="help" style="width: 120px;height:30px;background-color: #2196F3;border-radius: 5px;border: 0;color:#fff;margin:5px auto;display:block">甯綔鑰呭姪鍔�</button>
        <button class="helpGroup" style="width: 120px;height:30px;background-color: #2196F3;border-radius: 5px;border: 0;color:#fff;margin:5px auto;display:block">甯姪浣滆€呭晢鍦堝姪鍔�</button>
        <button class="invite" style="width: 120px;height:30px;background-color: #2196F3;border-radius: 5px;border: 0;color:#fff;margin:5px auto;display:block">鑾峰彇鎴戠殑鍔╁姏閾炬帴</button>
        <input class="inviteLink" type="text" style="width:80vw;height: 25px;font-size:14px;border: solid 1px #000;border-radius: 5px;margin: 10px auto;display: block;" placeholder="璇疯緭鍏ラ渶瑕佸姪鍔涚殑鍒嗕韩閾炬帴">
        <button class="assist" style="width: 120px;height:30px;background-color: #2196F3;border-radius: 5px;border: 0;color:#fff;margin:5px auto;display:block">涓篢A鍔╁姏</button>
        <button class="group" style="width: 120px;height:30px;background-color: #2196F3;border-radius: 5px;border: 0;color:#fff;margin:5px auto;display:block">鑾峰彇鎴戠殑鍟嗗湀鍒嗕韩閾炬帴</button>
        <input class="groupLink" type="text" style="width:80vw;height: 25px;font-size:14px;border: solid 1px #000;border-radius: 5px;margin: 10px auto;display: block;" placeholder="璇疯緭鍏ラ渶瑕佸姪鍔涚殑鍟嗗湀鐨勫垎浜摼鎺�">
        <button class="assistGroup" style="width: 120px;height:30px;background-color: #2196F3;border-radius: 5px;border: 0;color:#fff;margin:5px auto;display:block">涓鸿繖涓晢鍦堝姪鍔�</button>
        <button class="raise" style="width: 120px;height:30px;background-color: #2196F3;border-radius: 5px;border: 0;color:#fff;margin:5px auto;display:block">瑙ｉ攣鍗囩骇</button>
        <button class="signIn" style="width: 120px;height:30px;background-color: #2196F3;border-radius: 5px;border: 0;color:#fff;margin:5px auto;display:block">姣忓ぉ绛惧埌</button>
        <button class="master" style="width: 120px;height:30px;background-color: #2196F3;border-radius: 5px;border: 0;color:#fff;margin:5px auto;display:block">閫涢€涗富浼氬満</button>
        <button class="browser" style="width: 120px;height:30px;background-color: #2196F3;border-radius: 5px;border: 0;color:#fff;margin:5px auto;display:block">閫涢€涘晢閾�</button>
        <button class="shopping" style="width: 120px;height:30px;background-color: #2196F3;border-radius: 5px;border: 0;color:#fff;margin:5px auto;display:block">閫涢€涗細鍦�</button>
        <button class="funny" style="width: 120px;height:30px;background-color: #2196F3;border-radius: 5px;border: 0;color:#fff;margin:5px auto;display:block">濂界帺浜掑姩</button>
        <button class="viewProduct" style="width: 120px;height:30px;background-color: #2196F3;border-radius: 5px;border: 0;color:#fff;margin:5px auto;display:block">娴忚濂界墿</button>
        <button class="addproduct" style="width: 120px;height:30px;background-color: #2196F3;border-radius: 5px;border: 0;color:#fff;margin:5px auto;display:block">濂界墿鍔犺喘</button>
        <button class="goodShopping" style="width: 120px;height:30px;background-color: #2196F3;border-radius: 5px;border: 0;color:#fff;margin:5px auto;display:block">閫涢€涘ソ鐗╀細鍦�</button>
        <button class="others" style="width: 120px;height:30px;background-color: #2196F3;border-radius: 5px;border: 0;color:#fff;margin:5px auto;display:block">娴忚鍏朵粬娲诲姩</button>
        <button class="" disabled style="width: 120px;height:30px;background-color: gray;border-radius: 5px;border: 0;color:#fff;margin:5px auto;display:block">寮€閫氳仈鍚堜細鍛樹换鍔�</button>
        </div>`;
            // <button class="join" style="width: 120px;height:30px;background-color: #2196F3;border-radius: 5px;border: 0;color:#fff;margin:5px auto;display:block">鍔犲叆浣滆€呮垬闃�</button>
            content.innerHTML = msg;
            this.container.appendChild(content);
            const o = utils_1._$('.signIn'),
                others = utils_1._$('.others'),
                group = utils_1._$('.group'),
                master = utils_1._$('.master'),
                h = utils_1._$('.help'),
                a = utils_1._$('.funny'),
                v = utils_1._$('.viewProduct'),
                r = utils_1._$('.record'),
                s = utils_1._$('.shopping'),
                i = utils_1._$('.invite'),
                g = utils_1._$('.goodShopping'),
                b = utils_1._$('.raise'),
                browser = utils_1._$('.browser'),
                assistGroup = utils_1._$('.assistGroup'),
                helpGroup = utils_1._$('.helpGroup'),
                assist = utils_1._$('.assist'),
                p = utils_1._$('.addproduct');
            o.addEventListener('click', () => {
                    utils_1.default.outPutLog(this.outputTextarea, `寮€濮嬫瘡澶╃鍒颁换鍔);
            this.single(1, "1");
        });
        master.addEventListener('click', () => __awaiter(this, void 0, void 0, function* () {
            let taskVos = this.getTaskById(3);
            if (!taskVos || taskVos["status"] == 2) {
                utils_1.default.outPutLog(this.outputTextarea, `
                        绯荤粺灏氭湭鍒嗛厤鍒拌 浠诲姟鎴栬€ 呬换鍔″ 凡瀹屾垚锛屽厛鍘诲畬鎴愬叾浠栦换鍔″ 惂~`);
            }
            else {
                utils_1.default.outPutLog(this.outputTextarea, `
                        寮€ 濮嬫瘡澶╀ 富浼氬満浠诲姟 `);
                yield this.send(taskVos["shoppingActivityVos"], taskVos["taskId"]);
                this.updateTask();
            }
        }));
        helpGroup.addEventListener('click', () => {
            this.helpGroup();
        });
        p.addEventListener('click', () => __awaiter(this, void 0, void 0, function* () {
            let taskVos = this.getTaskById(101);
            if (!taskVos || taskVos["status"] == 2) {
                utils_1.default.outPutLog(this.outputTextarea, `
                        绯荤粺灏氭湭鍒嗛厤鍒拌 浠诲姟鎴栬€ 呬换鍔″ 凡瀹屾垚锛屽厛鍘诲畬鎴愬叾浠栦换鍔″ 惂~`);
            }
            else {
                utils_1.default.outPutLog(this.outputTextarea, `
                        寮€ 濮嬭嚜鍔ㄥ姞璐 ソ鐗╀ 换鍔);
                    yield this.add(taskVos["productInfoVos"], taskVos["taskId"]);
                    this.updateTask();
                }
            })); s.addEventListener('click', () => __awaiter(this, void 0, void 0, function*() {
        let taskVos = this.getTaskById(9);
        if (!taskVos || taskVos["status"] == 2) {
            utils_1.default.outPutLog(this.outputTextarea, `绯荤粺灏氭湭鍒嗛厤鍒拌浠诲姟鎴栬€呬换鍔″凡瀹屾垚锛屽厛鍘诲畬鎴愬叾浠栦换鍔″惂~`);
        } else {
            utils_1.default.outPutLog(this.outputTextarea, `寮€濮嬭嚜鍔ㄩ€涢€涗細鍦轰换鍔);
                yield this.send(taskVos["shoppingActivityVos"], taskVos["taskId"]);
                this.updateTask();
            }
        }));
        g.addEventListener('click', () => __awaiter(this, void 0, void 0, function* () {
            let taskVos = this.getTaskById(16);
            if (!taskVos || taskVos["status"] == 2) {
                utils_1.default.outPutLog(this.outputTextarea, `
                绯荤粺灏氭湭鍒嗛厤鍒拌 浠诲姟鎴栬€ 呬换鍔″ 凡瀹屾垚锛屽厛鍘诲畬鎴愬叾浠栦换鍔″ 惂~`);
            }
            else {
                utils_1.default.outPutLog(this.outputTextarea, `
                寮€ 濮嬭嚜鍔ㄩ€ 涢€ 涘ソ鐗╀ 細鍦轰换鍔);
            yield this.send(taskVos["shoppingActivityVos"], taskVos["taskId"]);
            this.updateTask();
        }
    })); a.addEventListener('click', () => __awaiter(this, void 0, void 0, function*() {
        let taskVos = this.getTaskById(14);
        if (!taskVos || taskVos["status"] == 2) {
            utils_1.default.outPutLog(this.outputTextarea, `绯荤粺灏氭湭鍒嗛厤鍒拌浠诲姟鎴栬€呬换鍔″凡瀹屾垚锛屽厛鍘诲畬鎴愬叾浠栦换鍔″惂~`);
        } else {
            utils_1.default.outPutLog(this.outputTextarea, `寮€濮嬭嚜鍔ㄥソ鐜╀簰鍔ㄤ换鍔);
                yield this.send(taskVos["shoppingActivityVos"], taskVos["taskId"]);
                this.updateTask();
            }
        }));
        others.addEventListener('click', () => __awaiter(this, void 0, void 0, function* () {
            let taskVos = this.getTaskById(15);
            if (!taskVos || taskVos["status"] == 2) {
                utils_1.default.outPutLog(this.outputTextarea, `
                绯荤粺灏氭湭鍒嗛厤鍒拌 浠诲姟鎴栬€ 呬换鍔″ 凡瀹屾垚锛屽厛鍘诲畬鎴愬叾浠栦换鍔″ 惂~`);
            }
            else {
                utils_1.default.outPutLog(this.outputTextarea, `
                寮€ 濮嬭嚜鍔ㄦ祻瑙堝叾浠栨椿鍔ㄤ换鍔);
            yield this.send(taskVos["shoppingActivityVos"], taskVos["taskId"], true);
            this.updateTask();
        }
    })); v.addEventListener('click', () => __awaiter(this, void 0, void 0, function*() {
        let taskVos = this.getTaskById(100);
        if (!taskVos || taskVos["status"] == 2) {
            utils_1.default.outPutLog(this.outputTextarea, `绯荤粺灏氭湭鍒嗛厤鍒拌浠诲姟鎴栬€呬换鍔″凡瀹屾垚锛屽厛鍘诲畬鎴愬叾浠栦换鍔″惂~`);
        } else {
            utils_1.default.outPutLog(this.outputTextarea, `寮€濮嬭嚜鍔ㄦ祻瑙堝ソ鐗╀换鍔);
                yield this.view(taskVos["productInfoVos"], taskVos["taskId"]);
                this.updateTask();
            }
        }));
        group.addEventListener('click', () => {
            this.group();
        });
        browser.addEventListener('click', () => __awaiter(this, void 0, void 0, function* () {
            let taskVos = this.getTaskById(10);
            if (!taskVos || taskVos["status"] == 2) {
                utils_1.default.outPutLog(this.outputTextarea, `
                绯荤粺灏氭湭鍒嗛厤鍒拌 浠诲姟鎴栬€ 呬换鍔″ 凡瀹屾垚锛屽厛鍘诲畬鎴愬叾浠栦换鍔″ 惂~`);
            }
            else {
                utils_1.default.outPutLog(this.outputTextarea, `
                寮€ 濮嬭嚜閫涢€ 涘晢搴椾换鍔);
            yield this.browser(taskVos["browseShopVo"], taskVos["taskId"]);
            this.updateTask();
        }
    })); h.addEventListener('click', () => {
        this.help();
    }); i.addEventListener('click', () => {
        this.getInvite();
    }); assistGroup.addEventListener('click', () => {
        const link = utils_1._$('.groupLink');
        this.assistGroup(link.value);
    }); assist.addEventListener('click', () => {
        const link = utils_1._$('.inviteLink');
        this.assist(link.value);
    }); b.addEventListener('click', () => {
        this.raise();
    });
    var e = document.createEvent("MouseEvents"); e.initEvent("click", true, true);
}
getTaskById(id) {
    return this.taskVos.filter((value) => {
        return value['taskId'] == id;
    })[0];
}
request(functionId, body = {}) {
    return fetch(`https://api.m.jd.com/client.action?functionId=${functionId}`, {
        body: `functionId=${functionId}&body=${JSON.stringify(body)}&client=wh5&clientVersion=1.0.0`,
        headers: {
            "content-type": "application/x-www-form-urlencoded",
        },
        method: "POST",
        credentials: "include",
    });
};
// async send(data: any, taskId: number) {
//     let self = this, length = data.length;
//     for (let i = 0; i < length; i++) {
//         var postData = `functionId=bombnian_collectScore&body={"taskId":${taskId},"itemId":"${data[i]["itemId"]}"}&client=wh5&clientVersion=1.0.0`;
//         // (function (index, data, len) {
//         await new Promise(resolve => {
//             setTimeout(async () => {
//                 await fetch("https://api.m.jd.com/client.action?functionId=stall_collectScore", {
//                     method: "POST",
//                     mode: "cors",
//                     credentials: "include",
//                     headers: {
//                         "Content-Type": "application/x-www-form-urlencoded"
//                     },
//                     body: postData
//                 }).then(function (response) {
//                     return response.json()
//                 }).then((res) => {
//                     Utils.outPutLog(self.outputTextarea, `鎿嶄綔鎴愬姛锛佷换鍔″簭鍙凤細${i + 1}/${length}`);
//                     if (i + 1 >= length) {
//                         Utils.outPutLog(self.outputTextarea, `褰撳墠浠诲姟宸插畬鎴�!`);
//                     }
//                     resolve();
//                 })
//             }, (Config.timeoutSpan + Utils.random(300, 500)));
//         })
//         // })(i, postData, length)
//     }
// }
single(taskId, itemId) {
    var postData = {
        "taskId": 1,
        "itemId": "1",
        "ss": `{\"extraData\":{},\"businessData\":{\"taskId\":1,\"rnd\":\"\",\"inviteId\":\"-1\",\"stealId\":\"-1\"},\"secretp\":\"${this.secretp}\"}`,
        "shopSign": ""
    };
    fetch("https://api.m.jd.com/client.action?functionId=stall_collectScore", {
        method: "POST",
        mode: "cors",
        credentials: "include",
        headers: {
            "Content-Type": "application/x-www-form-urlencoded"
        },
        body: `functionId=stall_collectScore&body=${JSON.stringify(postData)}&client=wh5&clientVersion=1.0.0`
    }).then(function(response) {
        return response.json();
    }).then((res) => {
        utils_1.default.outPutLog(this.outputTextarea, res.data.bizMsg);
    });
}
browser(data, taskId) {
return __awaiter(this, void 0, void 0, function*() {
    let self = this,
        length = data.length;
    for (let i = 0; i < length; i++) {
        var postData = {
            "taskId": taskId,
            "itemId": data[i]['itemId'],
            "actionType": "1",
            "ss": `{\"extraData\":{},\"businessData\":{\"taskId\":${taskId},\"rnd\":\"\",\"inviteId\":\"-1\",\"stealId\":\"-1\"},\"secretp\":\"${this.secretp}\"}`,
            "shopSign": ""
        };
        yield new Promise(resolve => {
            setTimeout(() => __awaiter(this, void 0, void 0, function*() {
                    yield fetch("https://api.m.jd.com/client.action?functionId=stall_collectScore", {
                        method: "POST",
                        mode: "cors",
                        credentials: "include",
                        headers: {
                            "Content-Type": "application/x-www-form-urlencoded"
                        },
                        body: `functionId=stall_collectScore&body=${JSON.stringify(postData)}&client=wh5&clientVersion=1.0.0`
                    }).then(function(response) {
                        return response.json();
                    }).then((res) => {
                            utils_1.default.outPutLog(self.outputTextarea, `妯℃嫙鍏虫敞搴楅摵涓�!`);
                            this.request('followShop', {
                                "shopId": data[i]['shopId'],
                                "follow": true,
                                "type": "0"
                            }).then(() => {
                                utils_1.default.outPutLog(self.outputTextarea, `绛夊緟8s浠诲姟瀹屾垚鍚庡啀棰嗗彇濂栧姳涓璥);
                                setTimeout(() => __awaiter(this, void 0, void 0, function* () {
                                    this.request('stall_collectScore', { "taskId": taskId, "itemId": data[i]['itemId'], "ss": ` {\
                                    "extraData\":{},\"businessData\":{\"taskId\":${taskId},\"rnd\":\"\",\"inviteId\":\"-1\",\"stealId\":\"-1\"},\"secretp\":\"${this.secretp}\"}`, "
                                    shopSign ": "
                                    " }).then(() => {
                                    utils_1.default.outPutLog(self.outputTextarea, `鎿嶄綔鎴愬姛锛佷换鍔″簭鍙凤細${i + 1}/${length}`);
                                    if (i + 1 >= length) {
                                        utils_1.default.outPutLog(self.outputTextarea, `褰撳墠浠诲姟宸插畬鎴�!`);
                                    }
                                    resolve();
                                });
                            }), 8000);
                    });
            });
        }), (config_1.default.timeoutSpan + utils_1.default.random(300, 500)));
});
}
});
}
view(data, taskId) {
    return __awaiter(this, void 0, void 0, function*() {
        let self = this,
            length = data.length;
        for (let i = 0; i < length; i++) {
            var postData = {
                "taskId": taskId
            };
            // (function (index, data, len) {
            yield new Promise(resolve => {
                setTimeout(() => __awaiter(this, void 0, void 0, function*() {
                    yield fetch("https://api.m.jd.com/client.action", {
                        method: "POST",
                        mode: "cors",
                        credentials: "include",
                        headers: {
                            "Content-Type": "application/x-www-form-urlencoded"
                        },
                        body: `functionId=stall_getFeedDetail&body=${JSON.stringify(postData)}&client=wh5&clientVersion=1.0.0`
                    }).then(function(response) {
                        return response.json();
                    }).then((res) => __awaiter(this, void 0, void 0, function*() {
                        utils_1.default.outPutLog(self.outputTextarea, `妯℃嫙娴忚鍟嗗搧涓�!`);
                        let totalCounter = 5;
                        for (let j = 0; j < totalCounter; j++) {
                            let productInfoVos = res.data.result.viewProductVos[i].productInfoVos,
                                productInfoVo = productInfoVos[j],
                                taskId = res.data.result.addProductVos[i]['taskId'];
                            yield new Promise(resolveFn => {
                                setTimeout(() => {
                                    this.request('stall_collectScore', {
                                        "taskId": taskId,
                                        "itemId": productInfoVo['itemId'],
                                        "ss": `{\"extraData\":{},\"businessData\":{\"taskId\":${taskId},\"rnd\":\"\",\"inviteId\":\"-1\",\"stealId\":\"-1\"},\"secretp\":\"${this.secretp}\"}`,
                                        "shopSign": ""
                                    }).then(() => {
                                        resolveFn();
                                        utils_1.default.outPutLog(self.outputTextarea, `娴忚鍟嗗搧瀹屾垚!`);
                                        if (j >= totalCounter - 1) {
                                            utils_1.default.outPutLog(self.outputTextarea, `鎿嶄綔鎴愬姛锛佷换鍔″簭鍙凤細${i + 1}/${length}`);
                                            if (i + 1 >= length) {
                                                utils_1.default.outPutLog(self.outputTextarea, `褰撳墠浠诲姟宸插畬鎴�!`);
                                            }
                                            resolve();
                                        }
                                    });
                                }, 5000);
                            });
                        }
                    }));
                }), (config_1.default.timeoutSpan + utils_1.default.random(300, 500)));
            });
            // })(i, postData, length)
        }
    });
}
add(data, taskId) {
    return __awaiter(this, void 0, void 0, function*() {
        let self = this,
            length = data.length;
        for (let i = 0; i < length; i++) {
            var postData = {
                "taskId": taskId
            };
            // (function (index, data, len) {
            yield new Promise(resolve => {
                setTimeout(() => __awaiter(this, void 0, void 0, function*() {
                    yield fetch("https://api.m.jd.com/client.action", {
                        method: "POST",
                        mode: "cors",
                        credentials: "include",
                        headers: {
                            "Content-Type": "application/x-www-form-urlencoded"
                        },
                        body: `functionId=stall_getFeedDetail&body=${JSON.stringify(postData)}&client=wh5&clientVersion=1.0.0`
                    }).then(function(response) {
                        return response.json();
                    }).then((res) => __awaiter(this, void 0, void 0, function*() {
                        utils_1.default.outPutLog(self.outputTextarea, `妯℃嫙鍔犺喘鍟嗗搧涓�!`);
                        let totalCounter = 5;
                        for (let j = 0; j < totalCounter; j++) {
                            let productInfoVos = res.data.result.addProductVos[i].productInfoVos,
                                productInfoVo = productInfoVos[j],
                                taskId = res.data.result.addProductVos[i]['taskId'];
                            yield new Promise(resolveFn => {
                                setTimeout(() => {
                                    this.request('stall_collectScore', {
                                        "taskId": taskId,
                                        "itemId": productInfoVo['itemId'],
                                        "ss": `{\"extraData\":{},\"businessData\":{\"taskId\":${taskId},\"rnd\":\"\",\"inviteId\":\"-1\",\"stealId\":\"-1\"},\"secretp\":\"${this.secretp}\"}`,
                                        "shopSign": ""
                                    }).then(() => {
                                        resolveFn();
                                        utils_1.default.outPutLog(self.outputTextarea, `鍔犺喘鍟嗗搧瀹屾垚!`);
                                        if (j >= totalCounter - 1) {
                                            utils_1.default.outPutLog(self.outputTextarea, `鎿嶄綔鎴愬姛锛佷换鍔″簭鍙凤細${i + 1}/${length}`);
                                            if (i + 1 >= length) {
                                                utils_1.default.outPutLog(self.outputTextarea, `褰撳墠浠诲姟宸插畬鎴�!`);
                                            }
                                            resolve();
                                        }
                                    });
                                }, 5000);
                            });
                        }
                    }));
                }), (config_1.default.timeoutSpan + utils_1.default.random(300, 500)));
            });
            // })(i, postData, length)
        }
    });
}
send(data, taskId, flag = false) {
    return __awaiter(this, void 0, void 0, function*() {
        let self = this,
            length = data.length;
        for (let i = 0; i < length; i++) {
            var postData = {
                "taskId": taskId,
                "itemId": data[i]['itemId'],
                "actionType": "1",
                "ss": `{\"extraData\":{},\"businessData\":{\"taskId\":${taskId},\"rnd\":\"\",\"inviteId\":\"-1\",\"stealId\":\"-1\"},\"secretp\":\"${this.secretp}\"}`,
                "shopSign": ""
            };
            // (function (index, data, len) {
            yield new Promise(resolve => {
                setTimeout(() => __awaiter(this, void 0, void 0, function*() {
                    yield fetch("https://api.m.jd.com/client.action?functionId=stall_collectScore", {
                        method: "POST",
                        mode: "cors",
                        credentials: "include",
                        headers: {
                            "Content-Type": "application/x-www-form-urlencoded"
                        },
                        body: `functionId=stall_collectScore&body=${JSON.stringify(postData)}&client=wh5&clientVersion=1.0.0`
                    }).then(function(response) {
                        return response.json();
                    }).then((res) => {
                        if (flag) {
                            resolve();
                        } else {
                            if (res.data.result) {
                                setTimeout(() => __awaiter(this, void 0, void 0, function*() {
                                    utils_1.default.outPutLog(self.outputTextarea, `绛夊緟8s浠诲姟瀹屾垚鍚庡啀棰嗗彇濂栧姳涓璥);
                                        this.request('qryViewkitCallbackResult', { "clientLanguage": "zh", "dataSource": "newshortAward", "method": "getTaskAward", "reqParams": ` {\
                                        "taskToken\":\"${res.data.result.taskToken}\"}`, "
                                        taskSDKVersion ": "
                                        1.0 .3 ", "
                                        vkVersion ": "
                                        1.0 .0 " }).then(() => {
                                        utils_1.default.outPutLog(self.outputTextarea, `鎿嶄綔鎴愬姛锛佷换鍔″簭鍙凤細${i + 1}/${length}`);
                                        if (i + 1 >= length) {
                                            utils_1.default.outPutLog(self.outputTextarea, `褰撳墠浠诲姟宸插畬鎴�!`);
                                        }
                                        resolve();
                                    });
                                }), 8000);
                            } else {
                                utils_1.default.outPutLog(self.outputTextarea, `鎿嶄綔鎴愬姛锛佷换鍔″簭鍙凤細${i + 1}/${length}`);
                                resolve();
                            }
                        }
                    });
                }), (config_1.default.timeoutSpan + utils_1.default.random(300, 500)));
            });
            // })(i, postData, length)
        }
    });
}
invite() {
    // var postData =`functionId=bombnian_collectScore&body={"inviteId":"T0kkDJUmGX0Sdet46x7KGSqKNI-klg18GVA8f5s","taskId":1,"itemId":"ASHYV3O7TlGlOXSI"}&client=wh5&clientVersion=1.0.0`;
    var postData = `functionId=bombnian_collectScore&body={"inviteId":"DgxlSNRnRyNRPa01oWqgYGmh6fowp7KSdvYh_P9xeptD0UnvN0zMq6o","taskId":1,"itemId":"ACTNUmK-SyjcNFWT523lDlA"}&client=wh5&clientVersion=1.0.0`;
    fetch("https://api.m.jd.com/client.action?functionId=bombnian_collectScore", {
        method: "POST",
        mode: "cors",
        credentials: "include",
        headers: {
            "Content-Type": "application/x-www-form-urlencoded"
        },
        body: postData
    }).then(function(response) {
        return response.json();
    }).then((res) => {
        utils_1.default.outPutLog(this.outputTextarea, `鎿嶄綔鎴愬姛锛佽阿璋綘鐨勫姪鍔涳紒`);
    });
}
join() {
fetch("https://api.m.jd.com/client.action?functionId=bombnian_pk_joinGroup", {
method: "POST",
mode: "cors",
credentials: "include",
headers: {
"Content-Type": "application/x-www-form-urlencoded"
},
body: `functionId=bombnian_pk_joinGroup&body={"inviteId":"VlU-EZopQidWJ6s2oG2sfIHInYsPApTbtntxKA1MAWPJSGYsX6Se6Dv3","confirmFlag":1}&client=wh5&clientVersion=1.0.0`
}).then(function(response) {
return response.json();
}).then((res) => {
if (res.data.bizCode == 0) {
utils_1.default.outPutLog(this.outputTextarea, `鎿嶄綔鎴愬姛锛佸姞鍏ユ垚鍔燂紒`);
} else {
utils_1.default.outPutLog(this.outputTextarea, `鎿嶄綔澶辫触锛屽ソ鍍忔弧浜轰簡鍝);
            }
        });
    }
    raise() {
        fetch("https://api.m.jd.com/client.action?functionId=stall_raise", {
            method: "POST",
            mode: "cors",
            credentials: "include",
            headers: {
                "Content-Type": "application/x-www-form-urlencoded"
            },
            body: `
functionId = stall_raise & body = {} & client = wh5 & clientVersion = 1.0 .0 `
        }).then(function (response) {
            return response.json();
        }).then((res) => {
            if (res.data.bizCode == 0) {
                utils_1.default.outPutLog(this.outputTextarea, `
鎿嶄綔鎴愬姛锛佽幏鍙栧 鍔卞 涓�: $ {
    JSON.stringify(res.data.result.levelUpAward)
}
`);
            }
            else {
                utils_1.default.outPutLog(this.outputTextarea, `
鎿嶄綔澶辫触锛� $ {
    res.data.bizMsg
}
`);
            }
        });
    }
    getInvite() {
        fetch('https://api.m.jd.com/client.action', {
            method: "POST",
            mode: "cors",
            credentials: "include",
            headers: {
                "Content-Type": "application/x-www-form-urlencoded"
            },
            body: `
functionId = stall_getTaskDetail & body = $ {
    JSON.stringify({
        "shopSign": ""
    })
} & client = wh5 & clientVersion = 1.0 .0 `
        }).then((res) => res.json())
            .then((json) => {
            const inviteId = json.data.result.inviteId.replace("#/", "");
            if (inviteId) {
                utils_1.default.outPutLog(this.outputTextarea, `
鑾峰彇鍒伴個璇穒d: $ {
    inviteId
}
`);
                utils_1.default.copyText(`
https: //bunearth.m.jd.com/babelDiy/Zeus/4SJUHwGdUQYgg94PFzjZZbGZRjDd/index.html?shareType=homeTask&inviteId=${inviteId}`);
}
else {
utils_1.default.outPutLog(this.outputTextarea, `鏁版嵁寮傚父`);
}
});
}
help() {
utils_1.default.outPutLog(this.outputTextarea, `鎿嶄綔鎴愬姛锛佽阿璋綘鍔╁姏锛乣);
        let InviteIdArr = ['T0kkDJUmGX0Sdet46x7KGSqKNI-klg18GVA8f5s', 'DgxlSNRnRyNRPa01oWqgYGmh6fowp7KSdvYh_P9xeptD0UnvN0zMq6o'];
        this.assist("https://bunearth.m.jd.com/babelDiy/Zeus/4SJUHwGdUQYgg94PFzjZZbGZRjDd/index.html?shareType=homeTask&inviteId=" + InviteIdArr[utils_1.default.random(0, InviteIdArr.length - 1)]);
    }
    helpGroup() {
        utils_1.default.outPutLog(this.outputTextarea, `
鎿嶄綔鎴愬姛锛佽阿璋 綘涓烘垜鐨勫晢鍦堝姪鍔涳紒 `);
        this.assistGroup('https://bunearth.m.jd.com/babelDiy/Zeus/4SJUHwGdUQYgg94PFzjZZbGZRjDd/index.html?shareType=cbdDay&inviteId=XUkkFpUhDG1WJqszpW2uY-4mR3ZvVGMfViX3iMWdE4FeIvO3rYjOC-K6cox9EhA');
    }
    group() {
        fetch('https://api.m.jd.com/client.action', {
            method: "POST",
            mode: "cors",
            credentials: "include",
            headers: {
                "Content-Type": "application/x-www-form-urlencoded"
            },
            body: `
functionId = stall_pk_getHomeData & body = {} & client = wh5 & clientVersion = 1.0 .0 `
        }).then((res) => res.json())
            .then((json) => {
            const groupAssistInviteId = json.data.result.groupInfo.groupAssistInviteId;
            if (groupAssistInviteId) {
                utils_1.default.outPutLog(this.outputTextarea, `
鑾峰彇鍒伴個璇穒d: $ {
groupAssistInviteId
}
`);
                utils_1.default.copyText(`
https: //bunearth.m.jd.com/babelDiy/Zeus/4SJUHwGdUQYgg94PFzjZZbGZRjDd/index.html?shareType=cbdDay&inviteId=${groupAssistInviteId}`);
}
else {
utils_1.default.outPutLog(this.outputTextarea, `璇峰厛鍒涘缓鍟嗗湀锛乣);
            }
        });
    }
    assistGroup(url) {
        if (!url || !url.includes('inviteId')) {
            alert("璇疯緭鍏ヨ鍔╁姏鐨勫晢鍦堝垎浜摼鎺ユ垨杈撳叆姝ｇ‘鐨勫晢鍦堝垎浜湴鍧€锛�");
            return;
        }
        const inviteId = utils_1.default.getSearchString(url, "inviteId").replace("#/", "");
        let jsonData = { "confirmFlag": 1, "inviteId": `
$ {
inviteId
}
`, "ss": ` {\
"extraData\":{},\"businessData\":{\"taskId\":\"2\",\"rnd\":\"\",\"inviteId\":\"${inviteId}\",\"stealId\":\"-1\"},\"secretp\":\"${this.secretp}\"}` };
// {"confirmFlag":1,"inviteId":"XUkkFpUhDG1WJqszpW2uY-4mR3ZvVGMfViX3iMWdE4FeIvO3rYjOC-K6cox9EhA","ss":"{\"extraData\":{},\"businessData\":{\"taskId\":\"2\",\"rnd\":\"2\",\"inviteId\":\"XUkkFpUhDG1WJqszpW2uY-4mR3ZvVGMfViX3iMWdE4FeIvO3rYjOC-K6cox9EhA\",\"stealId\":\"-1\"},\"secretp\":\"T0kkDJUmGX0Sdet46yPl\"}"}
fetch('https://api.m.jd.com/client.action?functionId=stall_pk_assistGroup', {
        method: "POST",
        mode: "cors",
        credentials: "include",
        headers: {
            "Content-Type": "application/x-www-form-urlencoded"
        },
        body: `functionId=stall_pk_assistGroup&body=${JSON.stringify(jsonData)}&client=wh5&clientVersion=1.0.0`
    }).then((res) => res.json())
    .then((json) => {
        utils_1.default.outPutLog(this.outputTextarea, `鍔╁姏缁撴灉锛�${json.data.bizMsg}`);
    });
}
assist(url) {
if (!url && !url.includes('inviteId')) {
    alert("璇疯緭鍏ヨ鍔╁姏鐨勫垎浜摼鎺ユ垨杈撳叆姝ｇ‘鐨勫垎浜湴鍧€锛�");
    return;
}
const inviteId = utils_1.default.getSearchString(url, "inviteId").replace("#/", "");
this.request('stall_getHomeData', {
    "inviteId": inviteId
}).then((json) => json.json()).then((res) => {
    const itemId = res.data.result.homeMainInfo.guestInfo.itemId;
    let jsonData = {
        "taskId": "2",
        "itemId": itemId,
        "ss": `{\"extraData\":{},\"businessData\":{\"taskId\":\"2\",\"rnd\":\"\",\"inviteId\":\"${inviteId}\",\"stealId\":\"-1\"},\"secretp\":\"${this.secretp}\"}`,
        "inviteId": inviteId
    };
    this.request('stall_collectScore', jsonData).then((json) => json.json()).then((json) => {
        utils_1.default.outPutLog(this.outputTextarea, `鍔╁姏缁撴灉锛�${json.data.bizMsg}`);
    });
});
}
}
exports.default = Stall;
}, {
"../config/config": 2,
"../utils/utils": 26
}], 2: [function(require, module, exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
value: true
});
class Config {}
exports.default = Config;
Config.title = "浜笢棰嗗埜鍔╂墜";
Config.version = "v0.4.3";
Config.author = "krapnik";
Config.timingFlag = false;
Config.UAFlag = false;
Config.locationHref = window.location.href;
Config.postCount = 1;
Config.localeTime = "";
Config.serverTime = "";
Config.startTime = 0;
Config.intervalId = 0;
Config.intervalSpan = 500;
Config.postSpan = 500;
Config.timeoutSpan = 1500;
Config.JDAppUA = "jdapp;android;8.4.2;8.0.0;;network/wifi;model/Mi Note 2;osVer/26;appBuild/71043;psn/|7;psq/1;uid/;adk/;ads/;pap/JA2015_311210|8.4.2|ANDROID 8.0.0;osv/8.0.0;pv/2.23;jdv/;ref/com.jingdong.app.mall.WebActivity;partner/huawei;apprpd/Home_Main;Mozilla/5.0 (Linux; Android 8.0.0; Mi Note 2 Build/OPR1.170623.032; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/71.0.3578.99 Mobile Safari/537.36";
Config.JDUserInfoURL = "https://wq.jd.com/user/info/QueryJDUserInfo?sceneid=11110&sceneval=2&g_login_type=1";
Config.JDTimeInfoURL = "https://api.m.jd.com/client.action?functionId=babelActivityGetShareInfo&client=wh5";
Config.JDIMGSourcesURL = "https://img13.360buyimg.com/n1/s450x450_";
Config.NetdiskURL = "閾炬帴锛歨ttps://pan.baidu.com/s/17eyRRSrFUQVSKdYwIcDsHg 鎻愬彇鐮侊細jddk ";
Config.multiFlag = false;
Config.importFlag = false;
}, {}], 3: [function(require, module, exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
value: true
});
class CookieHandler {
static getCookie() {
return document.cookie;
}
static getCookieObj(str) {
if (!str) {
alert('ck鍐呭鏍煎紡鏈夎锛�');
return;
}
var obj = {};
var ca = str.split(';');
for (var i = 0; i < ca.length; i++) {
var c = ca[i].trim();
var idx = c.indexOf("="),
    key = c.substring(0, idx),
    value = c.substring(idx + 1, c.length);
obj[key] = value;
}
return obj;
}
static setCookie(cname, cvalue, domain = ".jd.com", path = "/") {
var d = new Date();
d.setTime(d.getTime() + (1 * 24 * 60 * 60 * 1000));
var expires = "expires=" + d.toUTCString();
document.cookie = `${cname}=${cvalue};${expires};domain=${domain};path=${path}`;
}
static clearAllCookie(domain = ".jd.com", path = "/") {
var keys = document.cookie.match(/[^ =;]+(?=\=)/g);
if (keys) {
for (var i = keys.length; i--;)
    document.cookie = keys[i] + '=0;expires=' + new Date(0).toUTCString() + `;domain=${domain};path=${path}`;
}
}
static coverCookie(item) {
this.clearAllCookie();
let ckObj = this.getCookieObj(item.ck);
for (let key in ckObj) {
let cname = key,
    cvalue = ckObj[key];
this.setCookie(cname, cvalue);
}
}
}
exports.CookieHandler = CookieHandler;
}, {}], 4: [function(require, module, exports) {
"use strict";
var __awaiter = (this && this.__awaiter) || function(thisArg, _arguments, P, generator) {
function adopt(value) {
return value instanceof P ? value : new P(function(resolve) {
resolve(value);
});
}
return new(P || (P = Promise))(function(resolve, reject) {
function fulfilled(value) {
try {
    step(generator.next(value));
} catch (e) {
    reject(e);
}
}
function rejected(value) {
try {
    step(generator["throw"](value));
} catch (e) {
    reject(e);
}
}
function step(result) {
result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
}
step((generator = generator.apply(thisArg, _arguments || [])).next());
});
};
Object.defineProperty(exports, "__esModule", {
value: true
});
const utils_1 = require("../utils/utils");
const config_1 = require("../config/config");
const fetch_jsonp_1 = require("../utils/fetch-jsonp");
const CookieHandler_1 = require("./CookieHandler");
class CookieManager {
constructor(container) {}
static parseCK(str) {
try {
this.cookieArr = this.splitCookies(str);
if (this.cookieArr.length == 0) {
    alert("瀵煎叆鐨勬枃鏈枃妗ｆ牸寮忓唴瀹规湁璇垨鑰呰鍙栬瘑鍒紒");
} else {
    config_1.default.importFlag = true;
}
} catch (err) {
console.log(err);
alert("瀵煎叆CK鏂囨湰鏂囨。鏈夎锛�");
}
}
static splitCookies(ck) {
const str = ck.split('\n');
let o = [];
str.map((item, index) => {
let result = item.split('----');
o.push({
    mark: result[0],
    ck: result[1],
    index: index,
    favoriteFood: "鍗楃摐"
});
});
return o;
}
static outPutLog(output) {
if (this.cookieArr.length > 0) {
let str = "";
this.cookieArr.map((item) => {
    str += `\n銆�${item["mark"]}銆戝鍏ユ垚鍔�!`;
});
utils_1.default.outPutLog(output, str);
}
}
static checkLogin(output, ckObj) {
return new Promise((resolve, reject) => {
setTimeout(() => __awaiter(this, void 0, void 0, function*() {
    CookieHandler_1.CookieHandler.coverCookie(ckObj);
    yield fetch_jsonp_1.default.fetchJsonp(config_1.default.JDUserInfoURL).then(function(response) {
        return response.json();
    }).then((res) => {
        if (res.base.nickname) {
            utils_1.default.outPutLog(output, `銆�${ckObj.mark}銆�:浜笢璐﹀彿->${res.base.nickname}`);
            resolve(true);
        } else {
            utils_1.default.outPutLog(output, `銆�${ckObj.mark}銆�:璇k鏍￠獙澶辫触锛岃妫€鏌ユ湁鏁堟€�!`);
            resolve(false);
        }
    });
}), 500 * ckObj.index);
});
}
}
exports.default = CookieManager;
CookieManager.cookieArr = [];
}, {
"../config/config": 2,
"../utils/fetch-jsonp": 25,
"../utils/utils": 26,
"./CookieHandler": 3
}], 5: [function(require, module, exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
value: true
});
const utils_1 = require("../utils/utils");
class CoinPurchase {
constructor(couponParams, containerDiv, outputTextarea) {
this.url = "https://vip.jr.jd.com/goldcoin/purchase?id={pid}&callback=";
this.detailurl = "https://vip.jr.jd.com/goldcoin/goods/{pid}?callback=";
this.couponList = [];
this.couponParams = couponParams;
this.container = containerDiv;
this.outputTextarea = outputTextarea;
window.addEventListener("message", this.jsonp.bind(this), false);
}
get() {
let url = this.detailurl.replace("{pid}", this.couponParams.pid);
utils_1.default.createJsonp(url, true);
}
jsonp(response) {
console.log(response);
const json = JSON.parse(response.data),
data = json["data"];
if (data) {
this.couponList = [];
if (json.success) {
    this.couponList.push({
        pid: data.productId,
        title: data.name,
        detail: data.description,
        imgUrl: data.imgUrl
    });
    this.list();
} else {
    alert("璇锋鏌ヨ椤甸潰浼樻儬鍒哥殑鏈夋晥鎬э紒");
}
} else {
utils_1.default.outPutLog(this.outputTextarea, `棰嗗埜缁撴灉:${response.data}`);
}
}
list() {
const content = document.createElement("div");
content.innerHTML = "<h3 style='border-bottom: 1px solid #2196F3;display: inline-block;margin-top: 5px;padding: 0 37.5vw 5px;'>浼樻儬鍒�</h3>";
content.setAttribute('style', 'display:flex;flex-direction:column;padding: 5px;margin-top: 5px;border: 1px solid #000;');
for (let i = 0; i < this.couponList.length; i++) {
const item = this.couponList[i],
    itemDiv = document.createElement("div");
itemDiv.setAttribute('style', 'display:flex;flex-direction:row;padding:10px 0;border-bottom:1px solid #999');
itemDiv.innerHTML = `<img style="width:120px;height:100%;margin-right:10vw;display: block;" src="${item.imgUrl}" />
                <div>
                    <h3 style="margin-bottom:10px">${item.title}</h3><p style="margin-bottom:10px">${item.detail}</p>
                    <button class="receive" style="width: 80px;height:30px;background-color: #2196F3;border-radius: 5px;border: 0;">
                        <a style="color: #fff;text-decoration: none;">鐩存帴棰嗗彇</a>
                    </button>
                </div>`;
content.appendChild(itemDiv);
}
this.container.appendChild(content);
utils_1._$('.receive').addEventListener('click', () => {
this.send();
});
}
send() {
for (let i = 0; i < this.couponList.length; i++) {
let item = this.couponList[i],
    url = this.url.replace("{pid}", item.pid);
utils_1.default.createJsonp(url, true);
}
}
}
exports.default = CoinPurchase;
}, {
"../utils/utils": 26
}], 6: [function(require, module, exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
value: true
});
const utils_1 = require("../utils/utils");
class Exchange {
constructor(couponParams, containerDiv, outputTextarea) {
this.url = "https://vip.m.jd.com/fuli/exchange.html";
this.detailurl = "https://vip.m.jd.com/fuli/detail.html?itemId={itemId}";
this.couponList = [];
this.couponParams = couponParams;
this.container = containerDiv;
this.outputTextarea = outputTextarea;
}
get() {
this.couponList = [];
let url = this.detailurl.replace("{itemId}", this.couponParams.itemId);
fetch(url, {
    credentials: "include"
})
.then((res) => {
    return res.json();
})
.then((json) => {
    if (json.success) {
        const data = json.result.fuliAct,
            actPriceScoreMap = data["actPriceScoreMap"],
            score = json.result.userInfo.userScore.score;
        let priceRuleId;
        for (let key in actPriceScoreMap) {
            let price = key,
                priceArr = JSON.parse(price);
            if (priceArr[0] < score && priceArr[1] > score) {
                priceRuleId = actPriceScoreMap[key][0]["id"];
                break;
            }
        }
        this.couponList.push({
            actId: this.couponParams["itemId"],
            priceRuleId: priceRuleId,
            groupId: data.actCodeGroups[0].id,
            title: data.name,
            detail: data.detail,
        });
        this.list();
    } else {
        alert("璇锋鏌ヨ椤甸潰浼樻儬鍒哥殑鏈夋晥鎬э紒");
    }
});
}
list() {
const content = document.createElement("div");
content.innerHTML = "<h3 style='border-bottom: 1px solid #2196F3;display: inline-block;margin-top: 5px;padding: 0 37.5vw 5px;'>浼樻儬鍒�</h3>";
content.setAttribute('style', 'display:flex;flex-direction:column;padding: 5px;margin-top: 5px;border: 1px solid #000;');
for (let i = 0; i < this.couponList.length; i++) {
const item = this.couponList[i],
    itemDiv = document.createElement("div");
itemDiv.setAttribute('style', 'padding:10px 0;border:1px solid gray;border-radius: 10px;margin-top:5px;padding: 5px');
itemDiv.setAttribute('data-item', "coupon");
itemDiv.innerHTML = `<h4 style="user-select: none;pointer-events:none;">${item.title}</h4>
                                <p style="user-select: none;pointer-events:none;margin-bottom:10px">璇︽儏锛�${item.detail}</p>
                                <button data="coupon" style="width: 80px;height:30px;background-color: #2196F3;border-radius: 5px;border: 0;color:#fff;">鐩存帴棰嗗彇</button>`;
content.appendChild(itemDiv);
itemDiv.addEventListener("click", (evt) => {
    const target = evt.target;
    if (target.getAttribute("data")) {
        this.send();
    }
});
}
this.container.appendChild(content);
}
send() {
for (let i = 0; i < this.couponList.length; i++) {
let item = this.couponList[i];
fetch(this.url, {
        method: "POST",
        mode: "cors",
        credentials: "include",
        headers: {
            "Content-Type": "application/x-www-form-urlencoded"
        },
        body: `actId=${item.actId}&groupId=${item.groupId}&priceRuleId=${item.priceRuleId}&client=m`
    })
    .then((res) => {
        return res.json();
    })
    .then((json) => {
        utils_1.default.outPutLog(this.outputTextarea, ` 棰嗗埜缁撴灉锛�${JSON.stringify(json)}`);
    });
}
}
}
exports.default = Exchange;
}, {
"../utils/utils": 26
}], 7: [function(require, module, exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
value: true
});
const utils_1 = require("../utils/utils");
class GcConvert {
constructor(couponParams, containerDiv, outputTextarea) {
this.url = "https://vip.jr.jd.com/goldcoin/purchase?id={pid}&callback=";
this.detailurl = "https://ms.jr.jd.com/gw/generic/hy/h5/m/gateFloorById?reqData={%22floorId%22:44,%22pageChannel%22:%22spike%22}";
this.couponList = [];
this.couponParams = couponParams;
this.container = containerDiv;
this.outputTextarea = outputTextarea;
window.addEventListener("message", this.jsonp.bind(this), false);
}
get() {
fetch(this.detailurl, {
    credentials: "include"
})
.then((res) => {
    return res.json();
})
.then((json) => {
    this.couponList = [];
    if (json.resultCode == 0) {
        const data = json["resultData"]["data"]["data"];
        for (let i = 0; i < data.length; i++) {
            let coupon = data[i];
            if (coupon) {
                this.couponList.push({
                    pid: coupon.productId,
                    exchangeStatus: coupon.exchangeStatus == 3 ? "宸叉姠鍏�" : coupon.exchangeStatus == 2 ? "宸查鍙�" : "鍙鍙�",
                    detail: coupon.description,
                    startDate: new Date(coupon.startDate).toLocaleString(),
                    discountAmount: coupon.discountAmount,
                    imgUrl: coupon.imgUrl,
                    flag: false
                });
            }
        }
        this.list();
    } else {
        alert("璇锋鏌ヨ椤甸潰浼樻儬鍒哥殑鏈夋晥鎬э紒");
    }
});
}
jsonp(response) {
const json = JSON.parse(response.data),
data = json["data"];
utils_1.default.outPutLog(this.outputTextarea, `棰嗗埜缁撴灉:${response.data}`);
}
list() {
const content = document.createElement("div");
content.innerHTML = "<h3 style='border-bottom: 1px solid #2196F3;display: inline-block;margin-top: 5px;padding: 0 37.5vw 5px;'>浼樻儬鍒�</h3><p style='margin: 5px 0;color:red'>璇峰厛鐐瑰嚮鍒楄〃椤归€夋嫨棰嗗彇鐨勫埜</p>";
content.setAttribute('style', 'display:flex;flex-direction:column;padding: 5px;margin-top: 5px;border: 1px solid #000;');
for (let i = 0; i < this.couponList.length; i++) {
const item = this.couponList[i],
    itemDiv = document.createElement("div");
itemDiv.setAttribute('style', 'display:flex;flex-direction:row;text-align:left;border:1px solid gray;border-radius: 10px;margin-top:5px;padding: 5px');
itemDiv.setAttribute('data-item', "coupon");
itemDiv.innerHTML = `<img style="width:120px;height:100%;margin-right:10vw;display: block;" src="${item.imgUrl}" />
                <div>
                    <h3 style="margin-bottom:10px user-select: none;pointer-events:none;">${item.detail}</h3><p style="user-select: none;pointer-events:none;margin-bottom:10px">娑堣€楅噾甯侊細${item.discountAmount}<br>寮€濮嬫椂闂达細${item.startDate}<br>鐘舵€侊細${item.exchangeStatus}</p>
                    <button class="receive" data-id=${i} style="width: 80px;height:30px;background-color: #2196F3;border-radius: 5px;border: 0;">
                        <a style="color: #fff;text-decoration: none;user-select: none;pointer-events:none;">鐩存帴棰嗗彇</a>
                    </button>
                </div>`;
content.appendChild(itemDiv);
itemDiv.addEventListener('click', (evt) => {
    const target = evt.target;
    if (target.getAttribute('data-item') || (target.parentNode == itemDiv && target.tagName != "BUTTON")) {
        if (!item.flag) {
            itemDiv.style.border = "3px solid red";
        } else {
            itemDiv.style.border = "1px solid gray";
        }
        item.flag = !item.flag;
    } else if (target.getAttribute("data-id")) {
        this.singleSend(+target.getAttribute("data-id"));
    }
});
}
this.container.appendChild(content);
}
send() {
for (let i = 0; i < this.couponList.length; i++) {
let item = this.couponList[i],
    url = this.url.replace("{pid}", item.pid);
if (item.flag) {
    utils_1.default.createJsonp(url, true);
}
}
}
singleSend(i) {
let item = this.couponList[i],
url = this.url.replace("{pid}", item.pid);
utils_1.default.createJsonp(url, true);
}
}
exports.default = GcConvert;
}, {
"../utils/utils": 26
}], 8: [function(require, module, exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
value: true
});
const utils_1 = require("../utils/utils");
const fetch_jsonp_1 = require("../utils/fetch-jsonp");
class getCouponCenter {
constructor(couponParams, containerDiv, outputTextarea) {
this.url = "https://s.m.jd.com/activemcenter/mcouponcenter/receivecoupon?coupon={actId},{ckey}&batchid={batchid}&sceneval=2&g_login_type=1";
this.detailurl = "https://api.m.jd.com/client.action?functionId=getCcFeedInfo&clientVersion=8.4.6&client=android&uuid=869782023101754-c40bcb2a081c&st=1580274952976&sign=5e8edb6a1063a25d2a8d98b537974329&sv=120";
this.couponList = [];
this.couponParams = couponParams;
this.container = containerDiv;
this.outputTextarea = outputTextarea;
}
get() {
this.couponList = [];
fetch(this.detailurl, {
    method: "POST",
    body: "body=" + encodeURIComponent(`{"categoryId":118,"childActivityUrl":"openapp.jdmobile://virtual?params={\\"category\\":\\"jump\\",\\"des\\":\\"couponCenter\\"}","eid":"eidA34d08122basezJhsrmQRRxmKprHoj2C/qsyYbh5TyzlV40H/a8UVc9Mwqf5fJ3ez02Ja/n0hNrG4CqlQNZ5J5VyfpzABj6gCzqhlaRbPfZI81+d1","monitorRefer":"appClient","monitorSource":"ccfeed_android_index_feed","pageClickKey":"Coupons_GetCenter","pageNum":1,"pageSize":20,"shshshfpb":"hJFvGjgPo+Yfm06tQPQBhVa8JMvNh0ofLojzHNpvuXWBm0H7FUSxeyfZMVsrL7YOK"}`),
    headers: {
        "Content-Type": "application/x-www-form-urlencoded"
    }
}).then((res) => {
    return res.json();
})
.then((json) => {
    if (json.success) {
        const data = json["result"]["couponList"];
        for (let i = 0; i < data.length; i++) {
            let coupon = data[i];
            this.couponList.push({
                ckey: coupon.ckey,
                title: coupon.title,
                quota: coupon.quota,
                discount: coupon.discount,
                actId: coupon.actId,
                batchId: coupon["batchId"],
                flag: false
            });
        }
        this.list();
    } else {
        alert("璇锋鏌ヨ椤甸潰浼樻儬鍒哥殑鏈夋晥鎬э紒");
    }
});
}
list() {
const content = document.createElement("div");
content.innerHTML = "<h3 style='border-bottom: 1px solid #2196F3;display: inline-block;margin-top: 5px;padding: 0 37.5vw 5px;'>浼樻儬鍒�</h3><p style='margin: 5px 0;color:red'>璇峰厛鐐瑰嚮鍒楄〃椤归€夋嫨棰嗗彇鐨勫埜<br>銆愭帴鍙ｆ暟鎹潵鑷狝PP绔�-涓轰綘鎺ㄨ崘銆�</p>";
content.setAttribute('style', 'display:flex;flex-direction:column;padding: 5px;margin-top: 5px;border: 1px solid #000;');
for (let i = 0; i < this.couponList.length; i++) {
const item = this.couponList[i],
    itemDiv = document.createElement("div");
itemDiv.setAttribute('style', ';margin-top:5px;padding:10px 0;border:1px solid #999');
itemDiv.setAttribute('data-item', "coupon");
itemDiv.innerHTML = `
                    <p style="margin-bottom:10px">鏍囬锛�${item.title}<br>璇︽儏锛�${item.quota}<br>鎶樻墸锛�${item.discount}<br></p>
                    <button  data-id=${i} style="width: 80px;height:30px;background-color: #2196F3;border-radius: 5px;border: 0; color:#fff">鐩存帴棰嗗彇</button>`;
content.appendChild(itemDiv);
itemDiv.addEventListener("click", (evt) => {
    const target = evt.target;
    if (target.getAttribute('data-item') || (target.parentNode == itemDiv && target.tagName != "BUTTON")) {
        if (!item.flag) {
            itemDiv.style.border = "3px solid red";
        } else {
            itemDiv.style.border = "1px solid gray";
        }
        item.flag = !item.flag;
    } else if (target.getAttribute("data-id")) {
        this.singleSend(+target.getAttribute("data-id"));
    }
});
}
this.container.appendChild(content);
}
send() {
for (let i = 0; i < this.couponList.length; i++) {
let item = this.couponList[i],
    url = this.url.replace("{actId}", item.actId).replace("{ckey}", item.ckey).replace("{batchid}", item.batchId);
if (item.flag) {
    fetch_jsonp_1.default.fetchJsonp(url).then(function(response) {
        return response.json();
    }).then((res) => {
        utils_1.default.outPutLog(this.outputTextarea, `棰嗗埜缁撴灉:${JSON.stringify(res)}`);
    });
}
}
}
singleSend(i) {
let item = this.couponList[i],
url = this.url.replace("{actId}", item.actId).replace("{ckey}", item.ckey).replace("{batchid}", item.batchId);
fetch_jsonp_1.default.fetchJsonp(url).then(function(response) {
return response.json();
}).then((res) => {
utils_1.default.outPutLog(this.outputTextarea, `棰嗗埜缁撴灉:${JSON.stringify(res)}`);
});
}
}
exports.default = getCouponCenter;
}, {
"../utils/fetch-jsonp": 25,
"../utils/utils": 26
}], 9: [function(require, module, exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
value: true
});
const utils_1 = require("../utils/utils");
class Mfreecoupon {
constructor(couponParams, containerDiv, outputTextarea) {
this.url = "https://s.m.jd.com/activemcenter/mfreecoupon/getcoupon?key={key}&roleId={roleId}";
this.couponList = [];
this.couponParams = couponParams;
this.container = containerDiv;
this.outputTextarea = outputTextarea;
window.getcoupon = this.jsonp.bind(this);
}
get() {
this.couponList = [];
let batchinfo = window._couponData.batchinfo,
batchArr = [];
for (let item in batchinfo) {
if (batchArr && batchArr instanceof Array) {
    batchArr = batchinfo[item];
}
}
for (let i = 0; i < batchArr.length; i++) {
const coupon = batchArr[i],
    limitStr = coupon["limitStr"],
    discount = coupon["discount"],
    quota = coupon["quota"],
    constraintBeginTime = coupon["constraintBeginTime"],
    constraintEndTime = coupon["constraintEndTime"];
this.couponList.push({
    "limitStr": limitStr,
    "discount": discount,
    "constraintEndTime": constraintEndTime,
    "constraintBeginTime": constraintBeginTime,
    "quota": quota,
    "flag": false
});
}
this.list();
}
list() {
const content = document.createElement("div");
content.innerHTML = "<h3 style='border-bottom: 1px solid #2196F3;display: inline-block;margin-top: 5px;padding: 0 37.5vw 5px;'>浼樻儬鍒�</h3><p style='margin: 5px 0;color:red'>璇峰厛鐐瑰嚮鍒楄〃椤归€夋嫨棰嗗彇鐨勫埜</p>";
content.setAttribute('style', 'display:flex;flex-direction:column;padding: 5px;margin-top: 5px;border: 1px solid #000;');
for (let i = 0; i < this.couponList.length; i++) {
const item = this.couponList[i],
    itemDiv = document.createElement("div");
itemDiv.setAttribute('style', 'padding:10px 0;border:1px solid gray;border-radius: 10px;margin-top:5px;padding: 5px');
itemDiv.setAttribute('data-item', "coupon");
itemDiv.innerHTML = `<h4 style="user-select: none;pointer-events:none;">${item.quota}-${item.discount}</h4>
                                <p style="user-select: none;pointer-events:none;margin-bottom:10px">鑼冨洿锛�${item.limitStr}<br/>鏃堕棿锛�${item.constraintBeginTime}-${item.constraintEndTime}</p>
                                <button data="coupon" style="width: 80px;height:30px;background-color: #2196F3;border-radius: 5px;border: 0;color:#fff;">鐩存帴棰嗗彇</button>`;
content.appendChild(itemDiv);
itemDiv.addEventListener("click", (evt) => {
    const target = evt.target;
    if (target.getAttribute('data-item') || (target.parentNode == itemDiv && target.tagName != "BUTTON")) {
        if (!item.flag) {
            itemDiv.style.border = "3px solid red";
        } else {
            itemDiv.style.border = "1px solid gray";
        }
        item.flag = !item.flag;
    } else if (target.getAttribute("data")) {
        this.send();
    }
});
}
this.container.appendChild(content);
}
send() {
let url = this.url.replace("{key}", this.couponParams["key"]).replace("{roleId}", this.couponParams["roleId"]);
utils_1.default.createJsonp(url, false);
}
jsonp(response) {
utils_1.default.outPutLog(this.outputTextarea, `棰嗗埜缁撴灉:${JSON.stringify(response)}`);
}
}
exports.default = Mfreecoupon;
}, {
"../utils/utils": 26
}], 10: [function(require, module, exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
value: true
});
const utils_1 = require("../utils/utils");
class NewBabelAwardCollection {
constructor(couponParams, containerDiv, outputTextarea) {
this.url = "https://api.m.jd.com/client.action?functionId=newBabelAwardCollection";
this.couponList = [];
this.couponParams = couponParams;
this.container = containerDiv;
this.outputTextarea = outputTextarea;
}
get() {
this.couponList = [];
const activityData = window.__react_data__.activityData.floorList;
for (let i = 0; i < activityData.length; i++) {
const item = activityData[i];
if (item.template == "free_coupon" || item.template == "finance_coupon" || item.template == "combine_coupon") {
    for (let j = 0; j < item.couponList.length; j++) {
        const coupon = item.couponList[j],
            scene = coupon["scene"],
            args = coupon["args"] || coupon["cpId"],
            cid = coupon["jsonSrv"] ? JSON.parse(coupon["jsonSrv"])["cid"] : "",
            discount = coupon["discount"],
            picUrl = coupon["picUrl"] || coupon["picture"],
            status = coupon["status"],
            details = `${coupon["limit"]},${coupon["scope"]}`;
        this.couponList.push({
            "discount": discount,
            "details": details,
            "scene": scene,
            "args": args,
            "status": status,
            "couponbatch": cid,
            "picUrl": picUrl,
            "flag": false
        });
    }
}
}
this.list();
}
list() {
const content = document.createElement("div");
content.innerHTML = "<h3 style='border-bottom: 1px solid #2196F3;display: inline-block;margin-top: 5px;padding: 0 37.5vw 5px;'>浼樻儬鍒�</h3><p style='margin: 5px 0;color:red'>璇峰厛鐐瑰嚮鍒楄〃椤归€夋嫨棰嗗彇鐨勫埜</p>";
content.setAttribute('style', 'display:flex;flex-direction:column;padding: 5px;margin-top: 5px;border: 1px solid #000;');
for (let i = 0; i < this.couponList.length; i++) {
const item = this.couponList[i],
    itemDiv = document.createElement("div");
itemDiv.setAttribute('style', 'display:flex;flex-direction:row;border:1px solid gray;border-radius: 10px;margin-top:5px;padding: 5px');
itemDiv.setAttribute('data-item', "coupon");
if (item.scene == "1") {
    itemDiv.innerHTML = `<img style="user-select: none;pointer-events:none;width:120px;height:100%;padding-right:10vw;display: block;" src="${item.picUrl}" />
                <div">
                    <p style="user-select: none;pointer-events:none;margin-bottom:10px">鐘舵€侊細${item.status == "0" ? "鍙鍙�" : item.status == "1" ? "宸查鍙�" : "宸查鍏�"}<br/>璇存槑锛�${item.details}</p>
                    <button style="width: 100px;height:30px;background-color: #2196F3;border-radius: 5px;border: 0;">
                        <a href='https://so.m.jd.com/list/couponSearch.action?couponbatch=${item.couponbatch}' target="_blank" style="color: #fff;text-decoration: none;">鍙敤鍟嗗搧</a>
                    </button>
                    <button style="width: 100px;height:30px;background-color: #2196F3;border-radius: 5px;border: 0;">
                        <a href='https://api.m.jd.com/client.action?functionId=newBabelAwardCollection&body={"activityId":"${this.couponParams.activityId}","scene":${item.scene},"args":"${item.args}"}&client=wh5' target="_blank" style="color: #fff;text-decoration: none;">鎻愬彇閾炬帴</a>
                    </button>
                </div>`;
} else if (item.scene == "3") {
    itemDiv.innerHTML = `<img style="user-select: none;pointer-events:none;width:120px;height:100%;padding-right:10vw;display: block;" src="${item.picUrl}" />
                <div">
                <p style="user-select: none;pointer-events:none;margin-bottom:10px">鐘舵€侊細${item.status == "0" ? "鍙鍙�" : item.status == "1" ? "宸查鍙�" : "宸查鍏�"}</p>
                <button style="width: 100px;height:30px;background-color: #2196F3;border-radius: 5px;border: 0;">
                    <a href='https://api.m.jd.com/client.action?functionId=newBabelAwardCollection&body={"activityId":"${this.couponParams.activityId}","scene":${item.scene},"actKey":"${item.args}"}&client=wh5' target="_blank" style="color: #fff;text-decoration: none;">鎻愬彇閾炬帴</a>
                </button>
                </div>`;
}
content.appendChild(itemDiv);
itemDiv.addEventListener("click", (evt) => {
    const target = evt.target;
    if (target.getAttribute('data-item') || (target.parentNode == itemDiv && target.tagName != "BUTTON")) {
        if (!item.flag) {
            itemDiv.style.border = "3px solid red";
        } else {
            itemDiv.style.border = "1px solid gray";
        }
        item.flag = !item.flag;
    }
});
}
this.container.appendChild(content);
}
send() {
for (let i = 0; i < this.couponList.length; i++) {
let item = this.couponList[i],
    url = "";
if (item.scene == "1") {
    url = `https://api.m.jd.com/client.action?functionId=newBabelAwardCollection&body={"activityId":"${this.couponParams.activityId}","scene":${item.scene},"args":"${item.args}"}&client=wh5`;
} else if (item.scene == "3") {
    url = `https://api.m.jd.com/client.action?functionId=newBabelAwardCollection&body={"activityId":"${this.couponParams.activityId}","scene":${item.scene},"actKey":"${item.args}"}&client=wh5`;
}
if (item.flag) {
    fetch(url, {
            credentials: "include"
        })
        .then((res) => {
            return res.json();
        })
        .then((json) => {
            if (json.errmsg) {
                utils_1.default.outPutLog(this.outputTextarea, `绗�${i + 1}寮� 棰嗗埜缁撴灉:${json.errmsg}`);
            } else {
                utils_1.default.outPutLog(this.outputTextarea, `绗�${i + 1}寮� 棰嗗埜缁撴灉:${json.subCodeMsg}`);
            }
        });
}
}
}
}
exports.default = NewBabelAwardCollection;
}, {
"../utils/utils": 26
}], 11: [function(require, module, exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
value: true
});
const utils_1 = require("../utils/utils");
class Purchase {
constructor(couponParams, containerDiv, outputTextarea) {
this.url = "https://vip.jr.jd.com/goldcoin/purchase?id={pid}&callback=";
this.detailurl = "https://vip.jr.jd.com/goldcoin/product/{pid}?callback=";
this.couponList = [];
this.couponParams = couponParams;
this.container = containerDiv;
this.outputTextarea = outputTextarea;
window.addEventListener("message", this.jsonp.bind(this), false);
}
get() {
let url = this.detailurl.replace("{pid}", this.couponParams.pid);
utils_1.default.createJsonp(url, true);
}
jsonp(response) {
console.log(response);
const json = JSON.parse(response.data),
data = json["data"];
if (data) {
this.couponList = [];
if (json.success) {
    this.couponList.push({
        pid: data.productId,
        title: data.name,
        detail: data.description,
        imgUrl: data.imgUrl
    });
    this.list();
} else {
    alert("璇锋鏌ヨ椤甸潰浼樻儬鍒哥殑鏈夋晥鎬э紒");
}
} else {
utils_1.default.outPutLog(this.outputTextarea, `棰嗗埜缁撴灉:${response.data}`);
}
}
list() {
const content = document.createElement("div");
content.innerHTML = "<h3 style='border-bottom: 1px solid #2196F3;display: inline-block;margin-top: 5px;padding: 0 37.5vw 5px;'>浼樻儬鍒�</h3>";
content.setAttribute('style', 'display:flex;flex-direction:column;padding: 5px;margin-top: 5px;border: 1px solid #000;');
for (let i = 0; i < this.couponList.length; i++) {
const item = this.couponList[i],
    itemDiv = document.createElement("div");
itemDiv.setAttribute('style', 'display:flex;flex-direction:row;padding:10px 0;border-bottom:1px solid #999');
itemDiv.innerHTML = `<img style="width:120px;height:100%;margin-right:10vw;display: block;" src="${item.imgUrl}" />
                <div>
                    <h3 style="margin-bottom:10px">${item.title}</h3><p style="margin-bottom:10px">${item.detail}</p>
                    <button class="receive" style="width: 80px;height:30px;background-color: #2196F3;border-radius: 5px;border: 0;">
                        <a style="color: #fff;text-decoration: none;">鐩存帴棰嗗彇</a>
                    </button>
                </div>`;
content.appendChild(itemDiv);
}
this.container.appendChild(content);
utils_1._$('.receive').addEventListener('click', () => {
this.send();
});
}
send() {
for (let i = 0; i < this.couponList.length; i++) {
let item = this.couponList[i],
    url = this.url.replace("{pid}", item.pid);
utils_1.default.createJsonp(url, true);
}
}
}
exports.default = Purchase;
}, {
"../utils/utils": 26
}], 12: [function(require, module, exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
value: true
});
const utils_1 = require("../utils/utils");
class ReceiveCoupon {
constructor(couponParams, containerDiv, outputTextarea) {
this.url = `https://ms.jr.jd.com/gw/generic/bt/h5/m/receiveCoupons?reqData=%7B%22couponKey%22:%22{couponKey}%22,%22eid%22:%22170.0.0.1%22,%22appId%22:%22btm%22%7D`;
this.detailurl = "https://ms.jr.jd.com/gw/generic/bt/h5/m/queryBtmLimitedInfo";
this.couponList = [];
this.couponParams = couponParams;
this.container = containerDiv;
this.outputTextarea = outputTextarea;
}
get() {
this.couponList = [];
fetch(this.detailurl, {
    credentials: "include"
})
.then((res) => {
    return res.json();
})
.then((json) => {
    if (json.resultCode == 0) {
        const data = json["resultData"]["jtLimitedResults"];
        for (let i = 0; i < data.length; i++) {
            const item = data[i]["floorInfo"];
            for (let j = 0; j < item.length; j++) {
                let coupon = item[j];
                this.couponList.push({
                    couponKey: coupon.activeId,
                    title: coupon.text2,
                    detail: coupon.number,
                    couponStatus: coupon.couponStatus == 5 ? "宸查鍏�" : coupon.couponStatus == 1 ? "鏈紑濮�" : "宸查鍙�",
                    time: coupon["time"],
                    flag: false
                });
            }
        }
        this.list();
    } else {
        alert("璇锋鏌ヨ椤甸潰浼樻儬鍒哥殑鏈夋晥鎬э紒");
    }
});
}
list() {
const content = document.createElement("div");
content.innerHTML = "<h3 style='border-bottom: 1px solid #2196F3;display: inline-block;margin-top: 5px;padding: 0 37.5vw 5px;'>浼樻儬鍒�</h3><p style='margin: 5px 0;color:red'>璇峰厛鐐瑰嚮鍒楄〃椤归€夋嫨棰嗗彇鐨勫埜</p>";
content.setAttribute('style', 'display:flex;flex-direction:column;padding: 5px;margin-top: 5px;border: 1px solid #000;');
for (let i = 0; i < this.couponList.length; i++) {
const item = this.couponList[i],
    itemDiv = document.createElement("div");
itemDiv.setAttribute('style', ';margin-top:5px;padding:10px 0;border:1px solid #999');
itemDiv.setAttribute('data-item', "coupon");
itemDiv.innerHTML = `
                    <p style="margin-bottom:10px">绫诲瀷锛�${item.title}<br>璇︽儏锛�${item.detail}<br>鐘舵€侊細${item.couponStatus}<br>寮€濮嬫椂闂达細${item.time}</p>
                    <button  data-id=${i} style="width: 80px;height:30px;background-color: #2196F3;border-radius: 5px;border: 0; color:#fff">鐩存帴棰嗗彇</button>`;
content.appendChild(itemDiv);
itemDiv.addEventListener("click", (evt) => {
    const target = evt.target;
    if (target.getAttribute('data-item') || (target.parentNode == itemDiv && target.tagName != "BUTTON")) {
        if (!item.flag) {
            itemDiv.style.border = "3px solid red";
        } else {
            itemDiv.style.border = "1px solid gray";
        }
        item.flag = !item.flag;
    } else if (target.getAttribute("data-id")) {
        this.singleSend(+target.getAttribute("data-id"));
    }
});
}
this.container.appendChild(content);
}
send() {
for (let i = 0; i < this.couponList.length; i++) {
let item = this.couponList[i],
    url = this.url.replace("{couponKey}", item["couponKey"]);
if (item.flag) {
    fetch(url, {
            credentials: "include"
        })
        .then((res) => {
            return res.json();
        })
        .then((json) => {
            utils_1.default.outPutLog(this.outputTextarea, `棰嗗埜缁撴灉:${JSON.stringify(json.resultData)}`);
        });
}
}
}
singleSend(index) {
let item = this.couponList[index],
url = this.url.replace("{couponKey}", item["couponKey"]);
fetch(url, {
    credentials: "include"
})
.then((res) => {
    return res.json();
})
.then((json) => {
    utils_1.default.outPutLog(this.outputTextarea, `棰嗗埜缁撴灉:${JSON.stringify(json.resultData)}`);
});
}
}
exports.default = ReceiveCoupon;
}, {
"../utils/utils": 26
}], 13: [function(require, module, exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
value: true
});
const utils_1 = require("../utils/utils");
class ReceiveCoupons {
constructor(couponParams, containerDiv, outputTextarea) {
this.url = `https://ms.jr.jd.com/gw/generic/bt/h5/m/receiveCoupons?reqData={"couponKey":"{couponKey}","eid":"1"}}`;
this.detailurl = "https://ms.jr.jd.com/gw/generic/bt/h5/m/queryLimitedInfo?callback=";
this.couponList = [];
this.couponParams = couponParams;
this.container = containerDiv;
this.outputTextarea = outputTextarea;
window.addEventListener("message", this.jsonp.bind(this), false);
}
get() {
utils_1.default.createJsonp(this.detailurl, true);
}
jsonp(response) {
// console.log(response.data);
const json = JSON.parse(response.data),
data = json["resultData"]["limitedResult"];
if (data) {
this.couponList = [];
if (json.resultCode == 0) {
    for (let i = 0; i < data.length; i++) {
        const item = data[i]["floorInfo"];
        for (let j = 0; j < 3; j++) {
            let coupon = item[j];
            this.couponList.push({
                couponKey: coupon.couponKey,
                title: coupon.text1,
                detail: coupon.number,
                couponStatus: coupon.couponStatus == 5 ? "宸查鍏�" : coupon.couponStatus == 1 ? "鏈紑濮�" : "宸查鍙�",
                time: data[i]["time"],
                flag: false
            });
        }
    }
    this.list();
} else {
    alert("璇锋鏌ヨ椤甸潰浼樻儬鍒哥殑鏈夋晥鎬э紒");
}
}
}
list() {
const content = document.createElement("div");
content.innerHTML = "<h3 style='border-bottom: 1px solid #2196F3;display: inline-block;margin-top: 5px;padding: 0 37.5vw 5px;'>浼樻儬鍒�</h3><p style='margin: 5px 0;color:red'>璇峰厛鐐瑰嚮鍒楄〃椤归€夋嫨棰嗗彇鐨勫埜</p>";
content.setAttribute('style', 'display:flex;flex-direction:column;padding: 5px;margin-top: 5px;border: 1px solid #000;');
for (let i = 0; i < this.couponList.length; i++) {
const item = this.couponList[i],
    itemDiv = document.createElement("div");
itemDiv.setAttribute('style', ';margin-top:5px;padding:10px 0;border:1px solid #999');
itemDiv.setAttribute('data-item', "coupon");
itemDiv.innerHTML = `
                    <p style="margin-bottom:10px">绫诲瀷锛�${item.title}<br>璇︽儏锛�${item.detail}<br>鐘舵€侊細${item.couponStatus}<br>寮€濮嬫椂闂达細${item.time}</p>
                    <button  data-id=${i} style="width: 80px;height:30px;background-color: #2196F3;border-radius: 5px;border: 0; color:#fff">鐩存帴棰嗗彇</button>`;
content.appendChild(itemDiv);
itemDiv.addEventListener("click", (evt) => {
    const target = evt.target;
    if (target.getAttribute('data-item') || (target.parentNode == itemDiv && target.tagName != "BUTTON")) {
        if (!item.flag) {
            itemDiv.style.border = "3px solid red";
        } else {
            itemDiv.style.border = "1px solid gray";
        }
        item.flag = !item.flag;
    } else if (target.getAttribute("data-id")) {
        this.singleSend(+target.getAttribute("data-id"));
    }
});
}
this.container.appendChild(content);
}
send() {
for (let i = 0; i < this.couponList.length; i++) {
let item = this.couponList[i],
    url = this.url.replace("{couponKey}", item["couponKey"]);
if (item.flag) {
    fetch(url, {
            credentials: "include"
        })
        .then((res) => {
            return res.json();
        })
        .then((json) => {
            utils_1.default.outPutLog(this.outputTextarea, `棰嗗埜缁撴灉:${JSON.stringify(json.resultData)}`);
        });
}
}
}
singleSend(index) {
let item = this.couponList[index],
url = this.url.replace("{couponKey}", item["couponKey"]);
fetch(url, {
    credentials: "include"
})
.then((res) => {
    return res.json();
})
.then((json) => {
    utils_1.default.outPutLog(this.outputTextarea, `棰嗗埜缁撴灉:${JSON.stringify(json.resultData)}`);
});
}
}
exports.default = ReceiveCoupons;
}, {
"../utils/utils": 26
}], 14: [function(require, module, exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
value: true
});
const utils_1 = require("../utils/utils");
class ReceiveDayCoupon {
constructor(couponParams, containerDiv, outputTextarea) {
this.url = "https://rsp.jd.com/coupon/receiveDayCoupon/v1?locationCode=10002&lt=m&an=plus.mobile&getType=1&discount=10&couponKey=&platform=3&eventId=MPlusCoupon_Get&eid=&fp=&getType=1&activityId={activityId}";
this.detailurl = "https://rsp.jd.com/coupon/dayCouponList/v1/?lt=m&an=plus.mobile&couponType=0_1";
this.couponList = [];
this.couponParams = couponParams;
this.container = containerDiv;
this.outputTextarea = outputTextarea;
}
get() {
this.couponList = [];
fetch(this.detailurl, {
    credentials: "include"
})
.then(res => {
    return res.json();
})
.then(json => {
    const data = json["rs"]["wholeCategoryCoupon"];
    for (let j = 0; j < data.length; j++) {
        let coupon = data[j],
            giftAmount = coupon["giftAmount"],
            discount = coupon["discount"],
            quota = coupon["quota"],
            couponState = coupon["couponState"],
            activityId = coupon["activtyId"],
            limitStr = coupon["limitStr"],
            hour = coupon["hour"];
        this.couponList.push({
            "giftAmount": giftAmount,
            "activityId": activityId,
            "discount": discount,
            "quota": quota,
            "hour": hour,
            "limitStr": limitStr,
            "couponState": couponState,
            "flag": false
        });
    }
    this.list();
});
}
list() {
const content = document.createElement("div");
content.innerHTML = "<h3 style='border-bottom: 1px solid #2196F3;display: inline-block;margin-top: 5px;padding: 0 37.5vw 5px;'>浼樻儬鍒�</h3><p style='margin: 5px 0;color:red'>鐐瑰嚮鍒楄〃椤归€夋嫨瑕侀鍙栫殑鍒�</p>";
content.setAttribute('style', 'display:flex;flex-direction:column;padding: 5px;margin-top: 5px;border: 1px solid #000;');
for (let i = 0; i < this.couponList.length; i++) {
const item = this.couponList[i],
    itemDiv = document.createElement("div");
itemDiv.setAttribute('style', 'text-align:left;border:1px solid gray;border-radius: 10px;margin-top:5px;padding: 5px');
itemDiv.setAttribute('data-item', "coupon");
itemDiv.innerHTML = `<h3 style="user-select: none;pointer-events:none;">鎶樻墸锛�${item.quota}-${item.discount}</h3>
                                    <p style="margin-bottom:10px;user-select: none;pointer-events:none;">鐘舵€侊細${item.couponState == 1 ? "鍙鍙�" : item.couponState == 6 ? "宸查鍏�" : "涓嶅彲棰嗗彇"}<br/>璇存槑锛�${item.limitStr}<br/>鍏戞崲绀奸噾锛�${item.giftAmount}<br/>棰嗗彇鏃堕棿锛�${item.hour || "鐜板湪鍙"}</p>
                                    <button class="receive" data-id=${i} style="width: 80px;height:30px;background-color: #2196F3;border-radius: 5px;border: 0;color:#fff;">鐩存帴棰嗗彇</button>`;
content.appendChild(itemDiv);
itemDiv.addEventListener("click", (evt) => {
    const target = evt.target;
    if (target.getAttribute('data-item') || (target.parentNode == itemDiv && target.tagName != "BUTTON")) {
        if (!item.flag) {
            itemDiv.style.border = "3px solid red";
        } else {
            itemDiv.style.border = "1px solid gray";
        }
        item.flag = !item.flag;
    } else if (target.getAttribute("data-id")) {
        this.singleSend(+target.getAttribute("data-id"));
    }
}, false);
}
this.container.appendChild(content);
}
send() {
for (let i = 0; i < this.couponList.length; i++) {
let item = this.couponList[i],
    url = this.url.replace("{activityId}", item["activityId"]);
if (item.flag) {
    fetch(url, {
            credentials: "include"
        })
        .then((res) => {
            return res.json();
        })
        .then((json) => {
            utils_1.default.outPutLog(this.outputTextarea, `${item.quota}-${item.discount} 棰嗗埜缁撴灉:${json.msg}`);
        });
}
}
}
singleSend(index) {
let item = this.couponList[index],
url = this.url.replace("{activityId}", item["activityId"]);
fetch(url, {
    credentials: "include"
})
.then((res) => {
    return res.json();
})
.then((json) => {
    utils_1.default.outPutLog(this.outputTextarea, `${item.quota}-${item.discount} 棰嗗埜缁撴灉:${json.msg}`);
});
}
}
exports.default = ReceiveDayCoupon;
}, {
"../utils/utils": 26
}], 15: [function(require, module, exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
value: true
});
const utils_1 = require("../utils/utils");
class SecKillCoupon {
constructor(couponParams, containerDiv, outputTextarea) {
this.url = "https://api.m.jd.com/client.action?functionId=newBabelAwardCollection";
this.detailurl = "https://api.m.jd.com/client.action?functionId=getBillionSubsidyInfo&body=%7B%22source%22:%22home_subsidy%22%7D&appid=XPMSGC2019";
this.couponList = [];
this.couponParams = couponParams;
this.container = containerDiv;
this.outputTextarea = outputTextarea;
}
get() {
this.couponList = [];
fetch(this.detailurl, {
    credentials: "include"
})
.then(res => {
    return res.json();
})
.then(json => {
    const data = json["data"]["hotFloor"]["resultList"];
    for (let j = 0; j < data.length; j++) {
        let coupon = data[j],
            name = coupon["name"],
            discount = coupon["disCount"],
            quota = coupon["quota"],
            skuImage = coupon["skuImage"],
            skuId = coupon["skuId"],
            time = coupon["time"],
            putKey = coupon["putKey"],
            batchId = coupon["batchId"];
        this.couponList.push({
            "name": name,
            "putKey": putKey,
            "skuImage": skuImage,
            "discount": discount,
            "quota": quota,
            "skuId": skuId,
            "batchId": batchId,
            "time": time,
            "flag": false
        });
    }
    this.list();
});
}
list() {
const content = document.createElement("div");
content.innerHTML = "<h3 style='border-bottom: 1px solid #2196F3;display: inline-block;margin-top: 5px;padding: 0 37.5vw 5px;'>浼樻儬鍒�</h3><p style='margin: 5px 0;color:red'>璇峰厛鐐瑰嚮鍒楄〃椤归€夋嫨棰嗗彇鐨勫埜</p>";
content.setAttribute('style', 'display:flex;flex-direction:column;padding: 5px;margin-top: 5px;border: 1px solid #000;');
for (let i = 0; i < this.couponList.length; i++) {
const item = this.couponList[i],
    itemDiv = document.createElement("div");
itemDiv.setAttribute('style', 'display:flex;flex-direction:row;padding:10px 0;border:1px solid gray;border-radius: 10px;margin-top:5px;padding: 5px');
itemDiv.setAttribute('data-item', "coupon");
itemDiv.innerHTML = `<img style="user-select: none;pointer-events:none;width:120px;height:100%;padding-right:10vw;display: block;" src="${item.skuImage}" />
                                <div style="text-align: left">
                                <h4 style="user-select: none;pointer-events:none;">${item.name}</h4>
                                <p style="user-select: none;pointer-events:none;margin-bottom:10px">鎶樻墸锛�${item.quota}-${item.discount}<br/>涓嬪満鏃堕棿锛�${item.time}</p>
                                <button  class="receive" data-id=${i} style="width: 80px;height:30px;background-color: #2196F3;border-radius: 5px;border: 0;color:#fff;">鐩存帴棰嗗彇</button>
                                </div>`;
content.appendChild(itemDiv);
itemDiv.addEventListener("click", (evt) => {
    const target = evt.target;
    if (target.getAttribute('data-item') || (target.parentNode == itemDiv && target.tagName != "BUTTON")) {
        if (!item.flag) {
            itemDiv.style.border = "3px solid red";
        } else {
            itemDiv.style.border = "1px solid gray";
        }
        item.flag = !item.flag;
    } else if (target.getAttribute("data-id")) {
        this.singleSend(+target.getAttribute("data-id"));
    }
});
}
this.container.appendChild(content);
}
send() {
for (let i = 0; i < this.couponList.length; i++) {
let item = this.couponList[i];
if (item.flag) {
    const url = `https://api.m.jd.com/client.action?functionId=receiveSeckillCoupon&body=%7B"roleId"%3A"${encodeURIComponent(item["putKey"])}"%2C"source"%3A"home_subsidy"%2C"floorType"%3A0%2C"skuId"%3A"${item.skuId}"%2C"quota"%3A"${item.quota}"%2C"disCount"%3A"${item.discount}"%2C"batchId"%3A"${item.batchId}"%7D&client=m&appid=XPMSGC2019`;
    fetch(url, {
            method: "POST",
            mode: "cors",
            credentials: "include",
            headers: {
                "Content-Type": "application/x-www-form-urlencoded"
            }
        })
        .then((res) => {
            return res.json();
        })
        .then((json) => {
            utils_1.default.outPutLog(this.outputTextarea, `${item.quota}-${item.discount} 棰嗗埜缁撴灉:${json.resultMsg}`);
        });
}
}
}
singleSend(index) {
let item = this.couponList[index],
url = `https://api.m.jd.com/client.action?functionId=receiveSeckillCoupon&body=%7B"roleId"%3A"${encodeURIComponent(item["putKey"])}"%2C"source"%3A"home_subsidy"%2C"floorType"%3A0%2C"skuId"%3A"${item.skuId}"%2C"quota"%3A"${item.quota}"%2C"disCount"%3A"${item.discount}"%2C"batchId"%3A"${item.batchId}"%7D&client=m&appid=XPMSGC2019`;
fetch(url, {
    method: "POST",
    mode: "cors",
    credentials: "include",
    headers: {
        "Content-Type": "application/x-www-form-urlencoded"
    }
})
.then((res) => {
    return res.json();
})
.then((json) => {
    utils_1.default.outPutLog(this.outputTextarea, `${item.quota}-${item.discount} 棰嗗埜缁撴灉:${json.resultMsg}`);
});
}
}
exports.default = SecKillCoupon;
}, {
"../utils/utils": 26
}], 16: [function(require, module, exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
value: true
});
const utils_1 = require("../utils/utils");
class WhiteCoupon {
constructor(couponParams, containerDiv, outputTextarea) {
this.url = "https://opencredit.jd.com/act/get/coupon?couponBusinessId={couponBusinessId}&actId=004";
this.detailurl = "https://opencredit.jd.com/act/get/couponInfo?couponBusinessId={couponBusinessId}";
this.couponList = [];
this.couponParams = couponParams;
this.container = containerDiv;
this.outputTextarea = outputTextarea;
}
get() {
this.couponList = [];
let url = this.detailurl.replace("{couponBusinessId}", this.couponParams.couponBusinessId);
fetch(url)
.then((res) => {
    return res.json();
})
.then((json) => {
    const data = JSON.parse(json["data"])["baiCouponInfo"];
    if (json.isSuccess) {
        this.couponList.push({
            couponBusinessId: JSON.parse(json["data"])["baiCouponDetailsNext"].couponBusinessId,
            platform: data.platform,
            title: data.title,
            detail: data.detail,
        });
        this.list();
    } else {
        alert("璇锋鏌ヨ椤甸潰浼樻儬鍒哥殑鏈夋晥鎬э紒");
    }
});
}
list() {
const content = document.createElement("div");
content.innerHTML = "<h3 style='border-bottom: 1px solid #2196F3;display: inline-block;margin-top: 5px;padding: 0 37.5vw 5px;'>浼樻儬鍒�</h3><p style='margin: 5px 0;color:red'>榛樿棰嗗彇鍗曞紶鍒革紝鏃犻』閫夊畾</p>";
content.setAttribute('style', 'display:flex;flex-direction:column;padding: 5px;margin-top: 5px;border: 1px solid #000;');
for (let i = 0; i < this.couponList.length; i++) {
const item = this.couponList[i],
    itemDiv = document.createElement("div");
itemDiv.setAttribute('style', 'padding:10px 0;border-bottom:1px solid #999');
itemDiv.innerHTML = `<h3>${item.title}</h3><p>${item.detail}</p><p>鍙敤鑼冨洿锛�${item.platform}</p>
                                <button style="width: 80px;height:30px;background-color: #2196F3;border-radius: 5px;border: 0;">
                                    <a href='http://opencredit.jd.com/act/get/coupon?couponBusinessId=${item.couponBusinessId}&actId=004' target="_blank" style="color: #fff;text-decoration: none;">鐩存帴棰嗗彇</a>
                                </button>`;
content.appendChild(itemDiv);
}
this.container.appendChild(content);
}
send() {
for (let i = 0; i < this.couponList.length; i++) {
let item = this.couponList[i],
    url = this.url.replace("{couponBusinessId}", item.couponBusinessId);
fetch(url)
    .then((res) => {
        return res.json();
    })
    .then((json) => {
        if (json.isSuccess) {
            utils_1.default.outPutLog(this.outputTextarea, `绗�${i + 1}寮� 棰嗗埜缁撴灉:棰嗗彇鎴愬姛锛亇`);
        } else {
            utils_1.default.outPutLog(this.outputTextarea, `绗�${i + 1}寮� 棰嗗埜缁撴灉:棰嗗彇澶辫触锛乣);
                }
            });
        }
    }
}
exports.default = WhiteCoupon;
},{"../utils/utils":26}],17:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var activityType;
(function (activityType) {
    activityType[activityType["none"] = 0] = "none";
    activityType["monsterNian"] = "monsterNian";
    activityType["brandCitySpring"] = "brandCitySpring";
    activityType["palace"] = "palace";
    activityType["receiveBless"] = "ReceiveBless";
    activityType["feedBag"] = "feedBag";
    activityType["stall"] = "stall";
})(activityType = exports.activityType || (exports.activityType = {}));
},{}],18:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var couponType;
(function (couponType) {
    couponType[couponType["none"] = 0] = "none";
    couponType["receiveCoupons"] = "receiveCoupons";
    couponType["newBabelAwardCollection"] = "newBabelAwardCollection";
    couponType["whiteCoupon"] = "whiteCoupon";
    couponType["purchase"] = "purchase";
    couponType["receiveDayCoupon"] = "receiveDayCoupon";
    couponType["secKillCoupon"] = "secKillCoupon";
    couponType["mfreecoupon"] = "mfreecoupon";
    couponType["coinPurchase"] = "coinPurchase";
    couponType["GcConvert"] = "GcConvert";
    couponType["ReceiveCoupons"] = "ReceiveCoupons";
    couponType["ReceiveCoupon"] = "ReceiveCoupon";
    couponType["getCouponCenter"] = "getCouponCenter";
    couponType["exchange"] = "exchange";
})(couponType = exports.couponType || (exports.couponType = {}));
},{}],19:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var goodsType;
(function (goodsType) {
    goodsType["goods"] = "goods";
})(goodsType = exports.goodsType || (exports.goodsType = {}));
},{}],20:[function(require,module,exports){
"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const utils_1 = require("../utils/utils");
const config_1 = require("../config/config");
const CookieHandler_1 = require("../cookie/CookieHandler");
const CookieManager_1 = require("../cookie/CookieManager");
class BTGoose {
    constructor(params, containerDiv, outputTextarea) {
        this.rootURI = "https://ms.jr.jd.com/gw/generic/uc/h5/m/";
        this.baseReqData = { "timeSign": 0, "environment": "jrApp", "riskDeviceInfo": "{}" };
        this.data = [];
        this.timer = 1000;
        this.taskToken = "";
        this.toWithdrawSpan = 1800000;
        this.autoToWithdrawTimer = 0;
        this.params = params;
        this.container = containerDiv;
        this.outputTextarea = outputTextarea;
        this.content = document.createElement("div");
    }
    get() {
        // this.login();
        this.list();
    }
    list() {
        let msg = ` <
                div >
                <
                button class = "toDailyHome"
                style = "width: 120px;height:30px;background-color: #2196F3;border-radius: 5px;border: 0;color:#fff;margin:5px auto;" > 鏌ョ湅璇︽ 儏 < /button> <
                button class = "toWithdraw"
                style = "width: 120px;height:30px;background-color: #2196F3;border-radius: 5px;border: 0;color:#fff;margin:5px auto;" > 鎻愰箙鏀惰泲 < /button> <
                /div> <
                p > 鑷 姩鏀惰泲闂撮殧锛� < select class = "toWithdrawSpan"
                name = "toWithdrawSpan"
                style = "border: 1px solid #333;padding: 2px;" >
                <
                option value = "1800000" > 30 鍒嗛挓 < /option> <
                option value = "3600000" > 60 鍒嗛挓 < /option> <
                option value = "5400000" > 90 鍒嗛挓 < /option> <
                /select> <
                /p> <
                button class = "autoToWithdraw"
                style = "width: 120px;height:30px;background-color: #2196F3;border-radius: 5px;border: 0;color:#fff;margin:5px auto;display:block" > 鑷 姩瀹氭椂鏀惰泲 < /button> <
                button class = "cancelautoToWithdraw"
                style = "display:none;width: 120px;height:30px;background-color: #2196F3;border-radius: 5px;border: 0;color:#fff;margin:5px auto;" > 鍙栨秷瀹氭椂鏀惰泲 < /button> <
                button class = "toGoldExchange"
                style = "display:display;width: 120px;height:30px;background-color: #2196F3;border-radius: 5px;border: 0;color:#fff;margin:5px auto;" > 鍏戞崲閲戝竵 < /button> <
                div > `;
        this.content.innerHTML = msg;
        this.container.appendChild(this.content);
        const d = utils_1._$(".toDailyHome"), g = utils_1._$(".toGoldExchange"), autoToWithdraw = utils_1._$(".autoToWithdraw"), cancelautoToWithdraw = utils_1._$(".cancelautoToWithdraw"), t = utils_1._$(".toWithdraw");
        t.addEventListener('click', () => __awaiter(this, void 0, void 0, function* () {
            utils_1.default.outPutLog(this.outputTextarea, `
                寮€ 濮嬫彁楣呮敹铔媊);
            if (config_1.default.multiFlag) {
                this.toWithdrawMulti();
            } else {
                this.toWithdraw();
            }
        }));
d.addEventListener('click', () => __awaiter(this, void 0, void 0, function*() {
    utils_1.default.outPutLog(this.outputTextarea, `寮€濮嬫煡鐪嬮箙楣呰鎯卄);
            if (config_1.default.multiFlag) {
                this.homeMulti();
            }
            else {
                this.home();
            }
        }));
        g.addEventListener('click', () => __awaiter(this, void 0, void 0, function* () {
            utils_1.default.outPutLog(this.outputTextarea, `
        寮€ 濮嬪厬鎹㈤ 噾甯乣);
    if (config_1.default.multiFlag) {
        this.toGoldExchangeMulti();
    } else {
        this.toGoldExchange();
    }
}));
autoToWithdraw.addEventListener("click", () => {
    autoToWithdraw.style.display = "none";
    cancelautoToWithdraw.style.display = "block";
    utils_1.default.outPutLog(this.outputTextarea, `鑷姩瀹氭椂鏀惰泲宸插紑鍚紒`);
    this.autoToWithdrawTimer = window.setInterval(() => {
        utils_1.default.outPutLog(this.outputTextarea, `鑷姩瀹氭椂鏀惰泲浠诲姟寮€鍚紒`);
        t.click();
    }, this.toWithdrawSpan);
});
cancelautoToWithdraw.addEventListener('click', () => {
    autoToWithdraw.style.display = "block";
    cancelautoToWithdraw.style.display = "none";
    utils_1.default.outPutLog(this.outputTextarea, `鑷姩瀹氭椂鏀惰泲宸插叧闂紒`);
    window.clearInterval(this.autoToWithdrawTimer);
});
}
toWithdraw(ckObj) {
fetch(this.rootURI + "toWithdraw", {
    method: "POST",
    mode: "cors",
    credentials: "include",
    headers: {
        "Content-Type": "application/x-www-form-urlencoded"
    },
    body: "reqData=" + JSON.stringify(this.baseReqData)
}).then(function(response) {
    return response.json();
}).then((res) => {
    if (res.resultCode == 0) {
        let data = res.resultData;
        if (data.code == "0000") {
            let eggTotal = data.data.eggTotal;
            if (config_1.default.multiFlag && ckObj) {
                utils_1.default.outPutLog(this.outputTextarea, `銆�${ckObj["mark"]}銆� 鏀惰泲鎴愬姛锛佸綋鍓嶉箙铔嬫暟閲忥細${eggTotal}`);
            } else {
                utils_1.default.outPutLog(this.outputTextarea, `鏀惰泲鎴愬姛锛佸綋鍓嶉箙铔嬫暟閲忥細${eggTotal}`);
            }
        } else {
            utils_1.default.outPutLog(this.outputTextarea, `${data.msg}`);
        }
    } else {
        utils_1.default.outPutLog(this.outputTextarea, `${res.resultMsg}`);
    }
});
}
toWithdrawMulti() {
CookieManager_1.default.cookieArr.map((item) => {
    setTimeout(() => {
        CookieHandler_1.CookieHandler.coverCookie(item);
        this.toWithdraw(item);
    }, item.index * 750);
});
}
home(ckObj) {
fetch(this.rootURI + "toDailyHome", {
    method: "POST",
    mode: "cors",
    credentials: "include",
    headers: {
        "Content-Type": "application/x-www-form-urlencoded"
    },
    body: "reqData=" + JSON.stringify(this.baseReqData)
}).then(function(response) {
    return response.json();
}).then((res) => {
    if (res.resultCode == 0) {
        let data = res.resultData.data;
        let {
            shareUuid,
            grassEggTotal,
            basketSize,
            availableTotal
        } = data;
        if (config_1.default.multiFlag && ckObj) {
            utils_1.default.outPutLog(this.outputTextarea, `銆�${ckObj["mark"]}銆� 鍙厬鎹細${availableTotal} 鏈敹鍙栵細${grassEggTotal} 鍙绾筹細${basketSize} `);
        } else {
            utils_1.default.outPutLog(this.outputTextarea, ` 鍙厬鎹細${availableTotal} 鏈敹鍙栵細${grassEggTotal} 鍙绾筹細${basketSize} `);
        }
    } else {
        utils_1.default.outPutLog(this.outputTextarea, `${res.resultMsg}`);
    }
});
}
homeMulti() {
CookieManager_1.default.cookieArr.map((item) => {
    setTimeout(() => {
        CookieHandler_1.CookieHandler.coverCookie(item);
        this.home(item);
    }, item.index * 500);
});
}
toGoldExchange(ckObj) {
fetch(this.rootURI + "toGoldExchange", {
    method: "POST",
    mode: "cors",
    credentials: "include",
    headers: {
        "Content-Type": "application/x-www-form-urlencoded"
    },
    body: "reqData=" + JSON.stringify(this.baseReqData)
}).then(function(response) {
    return response.json();
}).then((res) => {
    if (res.resultCode == 0) {
        if (res.resultData.code == "0000") {
            let data = res.resultData.data;
            let {
                cnumber,
                rate,
                goldTotal
            } = data;
            if (config_1.default.multiFlag && ckObj) {
                utils_1.default.outPutLog(this.outputTextarea, `銆�${ckObj["mark"]}銆� 宸插厬鎹�:${cnumber} 姣斾緥锛�${rate} 鎬婚噾甯侊細${goldTotal}`);
            } else {
                utils_1.default.outPutLog(this.outputTextarea, `宸插厬鎹�:${cnumber} 姣斾緥锛�${rate} 鎬婚噾甯侊細${goldTotal}`);
            }
        } else {
            utils_1.default.outPutLog(this.outputTextarea, `${res.resultData.msg}`);
        }
    } else {
        if (config_1.default.multiFlag && ckObj) {
            utils_1.default.outPutLog(this.outputTextarea, `${res.resultMsg}`);
        }
    }
});
}
toGoldExchangeMulti() {
CookieManager_1.default.cookieArr.map((item) => {
    setTimeout(() => {
        CookieHandler_1.CookieHandler.coverCookie(item);
        this.toGoldExchange(item);
    }, item.index * 500);
});
}
}
exports.default = BTGoose;
}, {
"../config/config": 2,
"../cookie/CookieHandler": 3,
"../cookie/CookieManager": 4,
"../utils/utils": 26
}], 21: [function(require, module, exports) {
"use strict";
var __awaiter = (this && this.__awaiter) || function(thisArg, _arguments, P, generator) {
function adopt(value) {
return value instanceof P ? value : new P(function(resolve) {
resolve(value);
});
}
return new(P || (P = Promise))(function(resolve, reject) {
function fulfilled(value) {
try {
    step(generator.next(value));
} catch (e) {
    reject(e);
}
}
function rejected(value) {
try {
    step(generator["throw"](value));
} catch (e) {
    reject(e);
}
}
function step(result) {
result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
}
step((generator = generator.apply(thisArg, _arguments || [])).next());
});
};
Object.defineProperty(exports, "__esModule", {
value: true
});
const utils_1 = require("../utils/utils");
const config_1 = require("../config/config");
const CookieHandler_1 = require("../cookie/CookieHandler");
const CookieManager_1 = require("../cookie/CookieManager");
class Cloudpig {
constructor(params, containerDiv, outputTextarea) {
this.rootURI = "https://ms.jr.jd.com/gw/generic/uc/h5/m/";
this.baseReqData = {
"source": 0,
"channelLV": "yqs",
"riskDeviceParam": "{}"
};
// baseReqData: Object = { "source": 0, "channelLV": "yqs", "riskDeviceParam": "{\"fp\":\"\",\"eid\":\"\",\"sdkToken\":\"\",\"sid\":\"\"}" };
// {"source":0,"skuId":"1001003004","channelLV":"yqs","riskDeviceParam":"{\"eid\":\"\",\"fp\":\"\",\"token\":\"\"}"}
this.detailurl = "https://api.m.jd.com/client.action?functionId=bombnian_getTaskDetail";
this.data = [];
this.timer = 1000;
this.taskToken = "";
this.favFoodMap = {
"鍗楃摐": "1001003004",
"鑳¤悵鍗�": "1001003002",
"鐧借彍": "1001003001",
"鏅€氱尓绮�": "1001003003"
};
this.openBoxFlag = false;
this.foodskuId = "1001003004";
this.foodSpan = 1800000;
this.autoAddFoodTimer = 0;
this.signNo = 1;
this.favoriteFood = "";
this.params = params;
this.container = containerDiv;
this.outputTextarea = outputTextarea;
this.content = document.createElement("div");
}
get() {
// this.login();
this.list();
}
list() {
let msg = `
        <div><button class="Login" style="width: 120px;height:30px;background-color: #2196F3;border-radius: 5px;border: 0;color:#fff;margin:5px auto;">鏌ョ湅鐚尓璇︽儏</button>
        <button class="Achievements" style="width: 120px;height:30px;background-color: #2196F3;border-radius: 5px;border: 0;color:#fff;margin:5px auto;">鍙彁鐜扮孩鍖�</button>
        </div>
        <div>
        <button class="SignOne" style="width: 120px;height:30px;background-color: #2196F3;border-radius: 5px;border: 0;color:#fff;margin:5px auto;">涓€閿瘡鏃ョ鍒�</button>
        <button class="OpenBox" style="width: 120px;height:30px;background-color: #2196F3;border-radius: 5px;border: 0;color:#fff;margin:5px auto;">涓€閿紑绠卞瓙</button>
        </div>
        <button class="UserBag" style="width: 120px;height:30px;background-color: #2196F3;border-radius: 5px;border: 0;color:#fff;margin:5px auto;display:block">鏌ョ湅椋熺墿鑳屽寘</button>
        <p>鍠傚吇椋熺墿:<select class="food" name="food" style="border: 1px solid #333;padding: 2px;">
            <option value ="1001003003">鏅€氱尓绮�</option>
            <option value ="1001003001">鐧借彍</option>
            <option value="1001003002">鑳¤悵鍗�</option>
            <option value="1001003004">鍗楃摐</option>
        </select>
        </p>
        <button class="AddFood" style="width: 120px;height:30px;background-color: #2196F3;border-radius: 5px;border: 0;color:#fff;margin:5px auto;">鍠傚吇椋熺墿</button>
        <button class="AddFavoriteFood" style="width: 120px;height:30px;background-color: #2196F3;border-radius: 5px;border: 0;color:#fff;margin:5px auto;display:none">鍠傚吇鍠滅埍椋熺墿</button>
        <p>鑷姩鍠傚吇闂撮殧锛�<select class="foodSpan" name="foodSpan" style="border: 1px solid #333;padding: 2px;">
            <option value ="1800000">30鍒嗛挓</option>
            <option value ="3600000">60鍒嗛挓</option>
            <option value ="5400000">90鍒嗛挓</option>
        </select>
        </p>
        <button class="AutoAddFood" style="width: 120px;height:30px;background-color: #2196F3;border-radius: 5px;border: 0;color:#fff;margin:5px auto;display:block">鑷姩瀹氭椂鍠傚吇</button>
        <button class="cancelAutoAddFood" style="display:none;width: 120px;height:30px;background-color: #2196F3;border-radius: 5px;border: 0;color:#fff;margin:5px auto;">鍙栨秷瀹氭椂鍠傚吇</button>
        <div>
        <button class="pigPetLotteryIndex" style="width: 120px;height:30px;background-color: #2196F3;border-radius: 5px;border: 0;color:#fff;margin:5px auto">澶ц浆鐩樻儏鍐�</button>
        <button class="LotteryPlay" style="width: 120px;height:30px;background-color: #2196F3;border-radius: 5px;border: 0;color:#fff;margin:5px auto">涓€閿ぇ杞洏</button>
        </div>`;
this.content.innerHTML = msg;
this.container.appendChild(this.content);
const o = utils_1._$('.OpenBox'),
lotteryIndex = utils_1._$('.pigPetLotteryIndex'),
achievements = utils_1._$('.Achievements'),
foodSelect = utils_1._$('.food'),
foodSpanSelect = utils_1._$('.foodSpan'),
lotteryPlay = utils_1._$('.LotteryPlay'),
autoAddFood = utils_1._$('.AutoAddFood'),
cancelAutoAddFood = utils_1._$('.cancelAutoAddFood'),
a = utils_1._$('.AddFood'),
signOne = utils_1._$('.SignOne'),
UserBag = utils_1._$('.UserBag'),
l = utils_1._$('.Login');
this.AddFavoriteFood = utils_1._$('.AddFavoriteFood');
foodSelect.onchange = (event) => {
this.foodskuId = foodSelect.value;
};
foodSpanSelect.onchange = (event) => {
this.foodSpan = +foodSpanSelect.value;
};
UserBag.addEventListener("click", () => {
utils_1.default.outPutLog(this.outputTextarea, `鏌ョ湅鎴戠殑鑳屽寘`);
if (config_1.default.multiFlag) {
    this.userBagMulti();
} else {
    this.userBag();
}
});
signOne.addEventListener("click", () => {
utils_1.default.outPutLog(this.outputTextarea, `寮€濮嬫瘡鏃ョ鍒癭);
            if (config_1.default.multiFlag) {
                this.signIndexMulti();
            }
            else {
                this.signIndex();
            }
        });
        lotteryIndex.addEventListener("click", () => {
            utils_1.default.outPutLog(this.outputTextarea, `
    寮€ 濮嬫煡鐪嬪綋澶╁ ぇ杞 洏璁板綍 `);
            if (config_1.default.multiFlag) {
                this.lotteryIndexMulti();
            }
            else {
                this.lotteryIndex();
            }
        });
        achievements.addEventListener("click", () => {
            utils_1.default.outPutLog(this.outputTextarea, `
    寮€ 濮嬫煡鐪嬪緟鎻愮幇绾㈠ 寘 `);
            if (config_1.default.multiFlag) {
                this.achievementsMulti();
            }
            else {
                this.achievements();
            }
        });
        a.addEventListener('click', () => __awaiter(this, void 0, void 0, function* () {
            utils_1.default.outPutLog(this.outputTextarea, `
    寮€ 濮嬪杺鍏荤尓鐚猔);
if (config_1.default.multiFlag) {
    this.addFoodMulti();
} else {
    this.addFood();
}
}));
this.AddFavoriteFood.addEventListener("click", () => {
utils_1.default.outPutLog(this.outputTextarea, `寮€濮嬪杺鍏诲枩鐖遍鐗╃粰鐚尓`);
if (config_1.default.multiFlag) {
this.addFoodMulti(true);
} else {
this.addFood(true);
}
});
o.addEventListener('click', () => __awaiter(this, void 0, void 0, function*() {
this.openBoxFlag = true;
utils_1.default.outPutLog(this.outputTextarea, `寮€濮嬩竴閿紑绠卞瓙`);
if (config_1.default.multiFlag) {
CookieManager_1.default.cookieArr.map((item) => {
    item["flag"] = true;
});
}
do {
if (config_1.default.multiFlag) {
    yield this.openBoxMulti("pigPetOpenBox");
    if (CookieManager_1.default.cookieArr.every((i) => {
            return !i["flag"];
        })) {
        this.openBoxFlag = false;
        utils_1.default.outPutLog(this.outputTextarea, `鎵€鏈夎处鍙蜂粖澶╁凡缁忔湪鏈夊紑鐩掑瓙鏈轰細浜唦`);
    }
} else {
    yield this.openBox("pigPetOpenBox");
}
} while (this.openBoxFlag);
}));
l.addEventListener('click', () => __awaiter(this, void 0, void 0, function*() {
utils_1.default.outPutLog(this.outputTextarea, `寮€濮嬫煡鐪嬬尓鐚鎯卄);
            if (config_1.default.multiFlag) {
                this.loginMulti();
            }
            else {
                this.login();
            }
        }));
        autoAddFood.addEventListener("click", () => {
            autoAddFood.style.display = "none";
            cancelAutoAddFood.style.display = "block";
            utils_1.default.outPutLog(this.outputTextarea, `
    鑷 姩瀹氭椂鍠傚吇宸插紑鍚 紒 `);
            this.autoAddFoodTimer = window.setInterval(() => {
                utils_1.default.outPutLog(this.outputTextarea, `
    鑷 姩瀹氭椂鍠傚吇浠诲姟寮€ 鍚 紒 `);
                a.click();
            }, this.foodSpan);
        });
        cancelAutoAddFood.addEventListener('click', () => {
            autoAddFood.style.display = "block";
            cancelAutoAddFood.style.display = "none";
            utils_1.default.outPutLog(this.outputTextarea, `
    鑷 姩瀹氭椂鍠傚吇宸插叧闂 紒 `);
            window.clearInterval(this.autoAddFoodTimer);
        });
        lotteryPlay.addEventListener('click', () => {
            utils_1.default.outPutLog(this.outputTextarea, `
    寮€ 濮嬪ぇ杞 洏鎶藉 `);
            if (config_1.default.multiFlag) {
                this.lotteryPlayMulti();
            }
            else {
                this.lotteryPlay();
            }
        });
    }
    lotteryPlay(ckObj) {
        fetch(this.rootURI + "pigPetLotteryPlay", {
            method: "POST",
            mode: "cors",
            credentials: "include",
            headers: {
                "Content-Type": "application/x-www-form-urlencoded"
            },
            body: "reqData=" + JSON.stringify(this.baseReqData)
        }).then(function (response) {
            return response.json();
        }).then((res) => {
            if (res.resultCode == 0) {
                let data = res.resultData;
                if (data.resultCode == 0) {
                    let award = data.resultData.award;
                    if (award) {
                        let name = award.name, count = award.count;
                        if (config_1.default.multiFlag && ckObj) {
                            utils_1.default.outPutLog(this.outputTextarea, `
    銆� $ {
        ckObj["mark"]
    }
    銆� 鑾峰緱銆� $ {
        name
    } * $ {
        count
    }
    銆戯紒 `);
                        }
                        else {
                            utils_1.default.outPutLog(this.outputTextarea, `
    鑾峰緱銆� $ {
        name
    } * $ {
        count
    }
    銆戯紒 `);
                        }
                    }
                    else {
                        if (config_1.default.multiFlag && ckObj) {
                            utils_1.default.outPutLog(this.outputTextarea, `
    銆� $ {
        ckObj["mark"]
    }
    銆� 浠€ 涔堜篃鏈ㄦ湁鎶藉埌~`);
                        }
                        else {
                            utils_1.default.outPutLog(this.outputTextarea, `
    $ {
        res.resultData.resultMsg
    }
    `);
                        }
                    }
                }
            }
            else {
                utils_1.default.outPutLog(this.outputTextarea, `
    $ {
        res.resultMsg
    }
    `);
            }
        });
    }
    lotteryPlayMulti() {
        CookieManager_1.default.cookieArr.map((item) => {
            setTimeout(() => {
                CookieHandler_1.CookieHandler.coverCookie(item);
                this.lotteryPlay(item);
            }, item.index * 750);
        });
    }
    openBoxMulti(url) {
        return __awaiter(this, void 0, void 0, function* () {
            yield Promise.all(CookieManager_1.default.cookieArr.map((item) => __awaiter(this, void 0, void 0, function* () {
                yield new Promise(resolve => {
                    setTimeout(() => __awaiter(this, void 0, void 0, function* () {
                        CookieHandler_1.CookieHandler.coverCookie(item);
                        if (!item["flag"]) {
                            resolve();
                            return;
                        }
                        else {
                            yield fetch(`
    $ {
        this.rootURI
    }
    $ {
        url
    }
    `, {
                                method: "POST",
                                mode: "cors",
                                credentials: "include",
                                headers: {
                                    "Content-Type": "application/x-www-form-urlencoded"
                                },
                                body: "reqData=" + JSON.stringify(Object.assign(this.baseReqData, { "t": utils_1.default.getTimestamp() }))
                            }).then(function (response) {
                                return response.json();
                            }).then((res) => {
                                var _a, _b, _c, _d;
                                if (res.resultCode == 0) {
                                    let resultCode = res.resultData.resultCode;
                                    if (resultCode == 0) {
                                        let result = res.resultData.resultData;
                                        utils_1.default.outPutLog(this.outputTextarea, `
    銆� $ {
        item["mark"]
    }
    銆�: 鑾峰緱銆� "${((_b = (_a = result) === null || _a === void 0 ? void 0 : _a.award) === null || _b === void 0 ? void 0 : _b.name) ? (_d = (_c = result) === null || _c === void 0 ? void 0 : _c.award) === null || _d === void 0 ? void 0 : _d.name : "
    绌虹 瀛� "}銆慲);
}
else if (resultCode == 420) {
    item["flag"] = false;
    utils_1.default.outPutLog(this.outputTextarea, `銆�${item["mark"]}銆�:浠婂ぉ宸茬粡鏈ㄦ湁寮€鐩掑瓙鏈轰細浜唦`);
}
} else {
utils_1.default.outPutLog(this.outputTextarea, `銆�${item["mark"]}銆�:${res.resultMsg}`);
}
resolve();
});
}
}), (config_1.default.timeoutSpan + utils_1.default.random(300, 500)));
});
})));
});
}
openBox(url) {
    return __awaiter(this, void 0, void 0, function*() {
        yield new Promise(resolve => {
            setTimeout(() => __awaiter(this, void 0, void 0, function*() {
                yield fetch(`${this.rootURI}${url}`, {
                    method: "POST",
                    mode: "cors",
                    credentials: "include",
                    headers: {
                        "Content-Type": "application/x-www-form-urlencoded"
                    },
                    body: "reqData=" + JSON.stringify(Object.assign(this.baseReqData, {
                        "t": utils_1.default.getTimestamp()
                    }))
                }).then(function(response) {
                    return response.json();
                }).then((res) => {
                    var _a, _b, _c, _d;
                    if (res.resultCode == 0) {
                        if (res.resultData.resultCode == 0) {
                            let result = res.resultData.resultData;
                            utils_1.default.outPutLog(this.outputTextarea, `${((_b = (_a = result) === null || _a === void 0 ? void 0 : _a.award) === null || _b === void 0 ? void 0 : _b.name) ? "鑾峰緱:" + ((_d = (_c = result) === null || _c === void 0 ? void 0 : _c.award) === null || _d === void 0 ? void 0 : _d.name) : "杩欐槸涓┖绠卞瓙"}`);
                        } else {
                            this.openBoxFlag = !this.openBoxFlag;
                            utils_1.default.outPutLog(this.outputTextarea, `浠婂ぉ宸茬粡鏈ㄦ湁寮€鐩掑瓙鏈轰細浜唦`);
                        }
                    } else {
                        utils_1.default.outPutLog(this.outputTextarea, `${res.resultMsg}`);
                    }
                    resolve();
                });
            }), (config_1.default.timeoutSpan + utils_1.default.random(300, 500)));
        });
    });
}
addFood(favBool = false, ckObj) {
    let skuId = ckObj ? favBool ? ckObj.favoriteFood : this.foodskuId : favBool ? this.favFoodMap[this.favoriteFood] : this.foodskuId;
    fetch(this.rootURI + "pigPetAddFood", {
        method: "POST",
        mode: "cors",
        credentials: "include",
        headers: {
            "Content-Type": "application/x-www-form-urlencoded"
        },
        body: "reqData=" + JSON.stringify(Object.assign(this.baseReqData, {
            "skuId": skuId
        }))
    }).then(function(response) {
        return response.json();
    }).then((res) => {
        if (res.resultCode == 0) {
            let data = res.resultData;
            if (data.resultCode == 0) {
                if (config_1.default.multiFlag && ckObj) {
                    utils_1.default.outPutLog(this.outputTextarea, `銆�${ckObj["mark"]}銆� 鍠傚吇鎴愬姛锛乣);
                    }
                    else {
                        utils_1.default.outPutLog(this.outputTextarea, `
                        鍠傚吇鎴愬姛锛乣);
                }
            } else if (data.resultCode == 406) {
                if (config_1.default.multiFlag && ckObj) {
                    utils_1.default.outPutLog(this.outputTextarea, `銆�${ckObj["mark"]}銆� 鐚尓鐜板湪杩樻湁绮鍝`);
                } else {
                    utils_1.default.outPutLog(this.outputTextarea, `${res.resultData.resultMsg}`);
                }
            }
        } else {
            utils_1.default.outPutLog(this.outputTextarea, `${res.resultMsg}`);
        }
    });
}
addFoodMulti(favBool = false) {
    CookieManager_1.default.cookieArr.map((item) => {
        setTimeout(() => {
            CookieHandler_1.CookieHandler.coverCookie(item);
            this.addFood(favBool, item);
        }, item.index * 750);
    });
}
login(ckObj) {
    fetch(this.rootURI + "pigPetLogin", {
        method: "POST",
        mode: "cors",
        credentials: "include",
        headers: {
            "Content-Type": "application/x-www-form-urlencoded"
        },
        body: "reqData=" + JSON.stringify(this.baseReqData)
    }).then(function(response) {
        return response.json();
    }).then((res) => {
            var _a, _b, _c;
            if (res.resultCode == 0) {
                let data = res.resultData.resultData;
                if (data.hasPig) {
                    this.AddFavoriteFood.style.display = "block";
                    let pig = (_b = (_a = data) === null || _a === void 0 ? void 0 : _a.cote) === null || _b === void 0 ? void 0 : _b.pig,
                        pigName = (_c = pig) === null || _c === void 0 ? void 0 : _c.pigName,
                        percent = pig.percent,
                        weight = pig.weight,
                        favFood = pig.favFood;
                    if (config_1.default.multiFlag && ckObj) {
                        ckObj.favoriteFood = this.favFoodMap[favFood];
                        utils_1.default.outPutLog(this.outputTextarea, `銆�${ckObj["mark"]}銆� 鐚尓锛�${pigName} 浠峰€硷細${percent}% 浣撻噸锛�${weight} 鍠滄锛�${favFood}`);
                    } else {
                        this.favoriteFood = favFood;
                        utils_1.default.outPutLog(this.outputTextarea, `鐚尓锛�${pigName} 浠峰€硷細${percent}% 浣撻噸锛�${weight} 鍠滄锛�${favFood}`);
                    }
                } else {
                    utils_1.default.outPutLog(this.outputTextarea, `璇ヨ处鍙峰皻鏈鍏荤尓鐚摝锛乣);
                }
            }
            else {
                utils_1.default.outPutLog(this.outputTextarea, `
                        $ {
                            res.resultMsg
                        }
                        `);
            }
        });
    }
    loginMulti() {
        CookieManager_1.default.cookieArr.map((item) => {
            setTimeout(() => {
                CookieHandler_1.CookieHandler.coverCookie(item);
                this.login(item);
            }, item.index * 500);
        });
    }
    achievements(ckObj) {
        fetch(this.rootURI + "pigPetAchievements", {
            method: "POST",
            mode: "cors",
            credentials: "include",
            headers: {
                "Content-Type": "application/x-www-form-urlencoded"
            },
            body: "reqData=" + JSON.stringify(this.baseReqData)
        }).then(function (response) {
            return response.json();
        }).then((res) => {
            var _a, _b;
            if (res.resultCode == 0) {
                let data = res.resultData.resultData;
                if (res.resultData.resultCode == 0) {
                    let currentCash = (_a = data) === null || _a === void 0 ? void 0 : _a.currentCash, limitCash = (_b = data) === null || _b === void 0 ? void 0 : _b.limitCash;
                    if (config_1.default.multiFlag && ckObj) {
                        utils_1.default.outPutLog(this.outputTextarea, `
                        銆� $ {
                            ckObj["mark"]
                        }
                        銆� 寰呮彁鐜扮孩鍖咃細$ {
                            currentCash / 100
                        }
                        鍏� 婊� $ {
                            limitCash / 100
                        }
                        鍏冩彁鐜癭);
                } else {
                    utils_1.default.outPutLog(this.outputTextarea, `寰呮彁鐜扮孩鍖咃細${currentCash / 100}鍏� 婊�${limitCash}鍏冩彁鐜癭);
                    }
                }
                else {
                    utils_1.default.outPutLog(this.outputTextarea, `
                        $ {
                            res.resultData.resultMsg
                        }
                        `);
                }
            }
            else {
                if (config_1.default.multiFlag && ckObj) {
                    utils_1.default.outPutLog(this.outputTextarea, `
                        $ {
                            res.resultMsg
                        }
                        `);
                }
            }
        });
    }
    achievementsMulti() {
        CookieManager_1.default.cookieArr.map((item) => {
            setTimeout(() => {
                CookieHandler_1.CookieHandler.coverCookie(item);
                this.achievements(item);
            }, item.index * 500);
        });
    }
    lotteryIndex(ckObj) {
        fetch(this.rootURI + "pigPetLotteryIndex", {
            method: "POST",
            mode: "cors",
            credentials: "include",
            headers: {
                "Content-Type": "application/x-www-form-urlencoded"
            },
            body: "reqData=" + JSON.stringify(this.baseReqData)
        }).then(function (response) {
            return response.json();
        }).then((res) => {
            var _a, _b, _c, _d;
            if (res.resultCode == 0) {
                let data = res.resultData.resultData;
                if (res.resultData.resultCode == 0) {
                    let currentCount = (_a = data) === null || _a === void 0 ? void 0 : _a.currentCount, coinCount = (_b = data) === null || _b === void 0 ? void 0 : _b.coinCount, price = (_c = data) === null || _c === void 0 ? void 0 : _c.price, nextFreeTime = (_d = data) === null || _d === void 0 ? void 0 : _d.nextFreeTime;
                    if (config_1.default.multiFlag && ckObj) {
                        utils_1.default.outPutLog(this.outputTextarea, `
                        銆� $ {
                            ckObj["mark"]
                        }
                        銆� 褰撳墠鍙 娊濂栨 鏁帮細$ {
                            currentCount
                        }
                        璺濅笅涓€ 娆″ 厤璐规娊濂栨椂闂达細$ {
                            nextFreeTime
                        }
                        姣 閲戝竵鎶藉 娆℃ 暟锛� $ {
                            coinCount
                        }
                        闇€ 鑺辫垂閲戝竵锛� $ {
                            price
                        }
                        `);
                    }
                    else {
                        utils_1.default.outPutLog(this.outputTextarea, `
                        褰撳墠鍙 娊濂栨 鏁帮細$ {
                            currentCount
                        }
                        璺濅笅涓€ 娆″ 厤璐规娊濂栨椂闂达細$ {
                            nextFreeTime
                        }
                        姣 閲戝竵鎶藉 娆℃ 暟锛� $ {
                            coinCount
                        }
                        闇€ 鑺辫垂閲戝竵锛� $ {
                            price
                        }
                        `);
                    }
                }
                else {
                    utils_1.default.outPutLog(this.outputTextarea, `
                        $ {
                            res.resultData.resultMsg
                        }
                        `);
                }
            }
            else {
                if (config_1.default.multiFlag && ckObj) {
                    utils_1.default.outPutLog(this.outputTextarea, `
                        $ {
                            res.resultMsg
                        }
                        `);
                }
            }
        });
    }
    lotteryIndexMulti() {
        CookieManager_1.default.cookieArr.map((item) => {
            setTimeout(() => {
                CookieHandler_1.CookieHandler.coverCookie(item);
                this.lotteryIndex(item);
            }, item.index * 500);
        });
    }
    signOne(ckObj) {
        fetch(this.rootURI + "pigPetSignOne?_=" + utils_1.default.getTimestamp(), {
            method: "POST",
            mode: "cors",
            credentials: "include",
            headers: {
                "Content-Type": "application/x-www-form-urlencoded"
            },
            body: "reqData=" + JSON.stringify(Object.assign(this.baseReqData, { "no": ckObj ? ckObj.signNo : this.signNo }))
        }).then(function (response) {
            return response.json();
        }).then((res) => {
            var _a, _b, _c;
            if (res.resultCode == 0) {
                let data = res.resultData.resultData;
                if (res.resultData.resultCode == 0) {
                    let today = (_a = data) === null || _a === void 0 ? void 0 : _a.today, name = (_c = (_b = data) === null || _b === void 0 ? void 0 : _b.award) === null || _c === void 0 ? void 0 : _c.name;
                    if (config_1.default.multiFlag && ckObj) {
                        utils_1.default.outPutLog(this.outputTextarea, `
                        銆� $ {
                            ckObj["mark"]
                        }
                        銆� 宸茬 鍒� $ {
                            today
                        }
                        澶� 鑾峰緱濂栧姳锛� $ {
                            name
                        }
                        `);
                    }
                    else {
                        utils_1.default.outPutLog(this.outputTextarea, `
                        宸茬 鍒� $ {
                            today
                        }
                        澶� 鑾峰緱濂栧姳锛� $ {
                            name
                        }
                        `);
                    }
                }
                else {
                    utils_1.default.outPutLog(this.outputTextarea, `
                        $ {
                            res.resultData.resultMsg
                        }
                        `);
                }
            }
            else {
                if (config_1.default.multiFlag && ckObj) {
                    utils_1.default.outPutLog(this.outputTextarea, `
                        $ {
                            res.resultMsg
                        }
                        `);
                }
            }
        });
    }
    // signOneMulti() {
    //     CookieManager.cookieArr.map((item: CookieType) => {
    //         setTimeout(() => {
    //             CookieHandler.coverCookie(item);
    //             this.signOne(item);
    //         }, item.index * 500)
    //     });
    // }
    signIndex(ckObj) {
        fetch(this.rootURI + "pigPetSignIndex?_=" + utils_1.default.getTimestamp(), {
            method: "POST",
            mode: "cors",
            credentials: "include",
            headers: {
                "Content-Type": "application/x-www-form-urlencoded"
            },
            body: "reqData=" + JSON.stringify(this.baseReqData)
        }).then(function (response) {
            return response.json();
        }).then((res) => {
            var _a;
            if (res.resultCode == 0) {
                let data = res.resultData.resultData;
                if (res.resultData.resultCode == 0) {
                    let today = (_a = data) === null || _a === void 0 ? void 0 : _a.today;
                    if (config_1.default.multiFlag && ckObj) {
                        ckObj.signNo = today;
                        utils_1.default.outPutLog(this.outputTextarea, `
                        銆� $ {
                            ckObj["mark"]
                        }
                        銆� 宸茬 鍒� $ {
                            today
                        }
                        澶� `);
                        this.signOne(ckObj);
                    }
                    else {
                        this.signNo = today;
                        utils_1.default.outPutLog(this.outputTextarea, `
                        宸茬 鍒� $ {
                            today
                        }
                        澶ー);
                    this.signOne();
                }
            } else {
                utils_1.default.outPutLog(this.outputTextarea, `${res.resultData.resultMsg}`);
            }
        } else {
            if (config_1.default.multiFlag && ckObj) {
                utils_1.default.outPutLog(this.outputTextarea, `${res.resultMsg}`);
            }
        }
    });
}
signIndexMulti() {
    CookieManager_1.default.cookieArr.map((item) => {
        setTimeout(() => {
            CookieHandler_1.CookieHandler.coverCookie(item);
            this.signIndex(item);
        }, item.index * 500);
    });
}
userBag(ckObj) {
    fetch(this.rootURI + "pigPetUserBag?_=" + utils_1.default.getTimestamp(), {
        method: "POST",
        mode: "cors",
        credentials: "include",
        headers: {
            "Content-Type": "application/x-www-form-urlencoded"
        },
        body: "reqData=" + JSON.stringify(Object.assign(this.baseReqData, {
            "category": "1001"
        }))
    }).then(function(response) {
        return response.json();
    }).then((res) => {
        var _a;
        if (res.resultCode == 0) {
            let data = res.resultData.resultData;
            if (res.resultData.resultCode == 0) {
                let goods = (_a = data) === null || _a === void 0 ? void 0 : _a.goods,
                    goodStr = "";
                if (config_1.default.multiFlag && ckObj) {
                    goodStr += goods.map((good) => {
                        return `\n鍚嶇О:${good.goodsName} 鏁伴噺锛�${good.count}g`;
                    });
                    utils_1.default.outPutLog(this.outputTextarea, `銆�${ckObj["mark"]}銆� ----椋熺墿鑳屽寘涓€瑙�----${goodStr}`);
                } else {
                    goodStr += goods.map((good) => {
                        return `\n鍚嶇О:${good.goodsName} 鏁伴噺锛�${good.count}g`;
                    });
                    utils_1.default.outPutLog(this.outputTextarea, `----椋熺墿鑳屽寘涓€瑙�----${goodStr}`);
                }
            } else {
                utils_1.default.outPutLog(this.outputTextarea, `${res.resultData.resultMsg}`);
            }
        } else {
            if (config_1.default.multiFlag && ckObj) {
                utils_1.default.outPutLog(this.outputTextarea, `${res.resultMsg}`);
            }
        }
    });
}
userBagMulti() {
    CookieManager_1.default.cookieArr.map((item) => {
        setTimeout(() => {
            CookieHandler_1.CookieHandler.coverCookie(item);
            this.userBag(item);
        }, item.index * 500);
    });
}
}
exports.default = Cloudpig;
}, {
    "../config/config": 2,
    "../cookie/CookieHandler": 3,
    "../cookie/CookieManager": 4,
    "../utils/utils": 26
}], 22: [function(require, module, exports) {
            "use strict";
            var __awaiter = (this && this.__awaiter) || function(thisArg, _arguments, P, generator) {
                function adopt(value) {
                    return value instanceof P ? value : new P(function(resolve) {
                        resolve(value);
                    });
                }
                return new(P || (P = Promise))(function(resolve, reject) {
                    function fulfilled(value) {
                        try {
                            step(generator.next(value));
                        } catch (e) {
                            reject(e);
                        }
                    }
                    function rejected(value) {
                        try {
                            step(generator["throw"](value));
                        } catch (e) {
                            reject(e);
                        }
                    }
                    function step(result) {
                        result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
                    }
                    step((generator = generator.apply(thisArg, _arguments || [])).next());
                });
            };
            Object.defineProperty(exports, "__esModule", {
                value: true
            });
            const utils_1 = require("../utils/utils");
            const config_1 = require("../config/config");
            const CookieHandler_1 = require("../cookie/CookieHandler");
            const CookieManager_1 = require("../cookie/CookieManager");
            class signInCenter {
                constructor(params, containerDiv, outputTextarea) {
                    this.rootURI = "https://ms.jr.jd.com/gw/generic/hy/h5/m/";
                    this.baseReqData = {
                        "actKey": "AbeQry"
                    };
                    // baseReqData: {"actKey":"AbeQry","t":1587359500448}
                    this.data = [];
                    this.timer = 1000;
                    this.taskToken = "";
                    this.openBoxFlag = false;
                    this.foodskuId = "1001003004";
                    this.harvestSpan = 1800000;
                    this.autoToWithdrawTimer = 0;
                    this.signNo = 1;
                    this.favoriteFood = "";
                    this.params = params;
                    this.container = containerDiv;
                    this.outputTextarea = outputTextarea;
                    this.content = document.createElement("div");
                }
                get() {
                    this.list();
                }
                list() {
                        let msg = `
            <div>
                <button class="lottery" style="width: 120px;height:30px;background-color: #2196F3;border-radius: 5px;border: 0;color:#fff;margin:5px auto;">閲戝竵澶╁ぉ鎶藉</button>
                <button class="harvest" style="width: 120px;height:30px;background-color: #2196F3;border-radius: 5px;border: 0;color:#fff;margin:5px auto;">涓€閿敹閲戞灉</button>
            </div>`;
                        this.content.innerHTML = msg;
                        this.container.appendChild(this.content);
                        const l = utils_1._$(".lottery");
                        l.addEventListener('click', () => __awaiter(this, void 0, void 0, function*() {
                                    utils_1.default.outPutLog(this.outputTextarea, `寮€濮嬮噾甯佸ぉ澶╂娊濂朻);
            if (config_1.default.multiFlag) {
                this.lotteryMulti();
            }
            else {
                this.lottery();
            }
        }));
    }
    lottery(ckObj) {
        fetch(this.rootURI + "lottery?reqData=" + encodeURI(JSON.stringify(Object.assign({ "t": new Date().getTime() }, this.baseReqData))), {
            mode: "no-cors",
            credentials: "include",
            headers: {
                "Content-Type": "application/json"
            }
        }).then(function (response) {
            return response.json();
        }).then((res) => {
            if (res.resultCode == 0) {
                let data = res.resultData;
                if (data.code == "0000") {
                    let { awardName } = data.data;
                    if (config_1.default.multiFlag && ckObj) {
                        utils_1.default.outPutLog(this.outputTextarea, `
                                        銆� $ {
                                            ckObj["mark"]
                                        }
                                        銆� 鑾峰緱濂栧搧锛� $ {
                                            awardName
                                        }
                                        `);
                    }
                    else {
                        utils_1.default.outPutLog(this.outputTextarea, `
                                        鑾峰緱濂栧搧锛� $ {
                                            awardName
                                        }
                                        `);
                    }
                }
                else {
                    utils_1.default.outPutLog(this.outputTextarea, `
                                        $ {
                                            data.msg
                                        }
                                        `);
                }
            }
            else {
                utils_1.default.outPutLog(this.outputTextarea, `
                                        $ {
                                            res.resultMsg
                                        }
                                        `);
            }
        });
    }
    lotteryMulti() {
        CookieManager_1.default.cookieArr.map((item) => {
            setTimeout(() => {
                CookieHandler_1.CookieHandler.coverCookie(item);
                this.lottery(item);
            }, item.index * 750);
        });
    }
}
exports.default = signInCenter;
},{"../config/config":2,"../cookie/CookieHandler":3,"../cookie/CookieManager":4,"../utils/utils":26}],23:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const utils_1 = require("../utils/utils");
const config_1 = require("../config/config");
const fetch_jsonp_1 = require("../utils/fetch-jsonp");
class Goods {
    constructor(containerDiv, outputTextarea, goodsId) {
        this.areaId = "1_72_0_0"; //鍖椾含 鏈濋槼鍖�
        this.areaIdArr = [{ id: "1_72_0_0", dec: "鍖椾含 鏈濋槼鍖�" }];
        this.goodsIdArr = [];
        this.goodsMsgArr = [];
        this.detailURL = "https://item.jd.com/{skuid}.html";
        this.stockURL = "https://c0.3.cn/stock?skuId={skuId}&area={area}&venderId={venderId}&cat={cat}";
        if (goodsId) {
            this.goodsIdArr.push(goodsId);
        }
        this.container = containerDiv;
        this.outputTextarea = outputTextarea;
        //鑾峰彇榛樿鍦板潃
        fetch_jsonp_1.default.fetchJsonp('https://cd.jd.com/usual/address').then((res) => { return res.json(); }).then((json) => {
            if (Object.keys(json).length !== 0) {
                this.areaIdArr = [];
                Object.keys(json).map((key, idx) => {
                    let item = json[key];
                    let id = `
                                        $ {
                                            item.provinceId
                                        }
                                        _$ {
                                            item.cityId
                                        }
                                        _$ {
                                            item.countyId ? item.countyId : 0
                                        }
                                        _$ {
                                            item.townId ? item.townId : 0
                                        }
                                        `, dec = item.areaName;
                    if (idx == 0) {
                        this.areaId = id;
                    }
                    this.areaIdArr.push({
                        id: id,
                        dec: dec
                    });
                });
            }
        });
    }
    get() {
        this.goodsMsgArr = [];
        Promise.all(this.goodsIdArr.map((item) => { return this.getMsg(item); })).then((data) => {
            this.goodsMsgArr = data;
            Promise.all(this.goodsMsgArr.map((item) => {
                return this.getStock(item);
            })).then((goods) => {
                this.goodsMsgArr = goods;
                this.list();
            });
        });
    }
    getMsg(skuid) {
        let url = this.detailURL.replace("{skuid}", skuid);
        return new Promise((resolve, reject) => {
            utils_1.default.loadiFrame(url)
                .then((iframe) => {
                let window = iframe.contentWindow, product = window.pageConfig.product, goods = {
                    skuid: skuid,
                    name: product.name,
                    src: product.src,
                    cat: product.cat,
                    venderId: product.venderId,
                };
                document.body.removeChild(iframe);
                resolve(goods);
            });
        });
    }
    getStock(goods) {
        let url = this.stockURL.replace("{skuId}", goods.skuid).replace("{venderId}", goods.venderId).replace("{cat}", goods.cat).replace("{area}", this.areaId);
        return new Promise((resolve, reject) => {
            fetch_jsonp_1.default.fetchJsonp(url).then(function (response) {
                return response.json();
            }).then((res) => {
                let stock = res.stock, area = stock.area;
                goods.stockState = stock.StockStateName;
                goods.area = `
                                        $ {
                                            area.provinceName
                                        } - $ {
                                            area.cityName
                                        } - $ {
                                            area.countyName
                                        }
                                        `;
                resolve(goods);
            });
        });
    }
    push() {
        let id = "1";
        this.goodsIdArr.push(id);
    }
    list() {
        const content = document.createElement("div");
        content.setAttribute('style', 'display:flex;flex-direction:column;padding: 5px;margin-top: 5px;border: 1px solid #000;');
        for (let i = 0; i < this.goodsMsgArr.length; i++) {
            const item = this.goodsMsgArr[i], itemDiv = document.createElement("div");
            itemDiv.setAttribute('style', 'display:flex;flex-direction:row;border:1px solid gray;border-radius: 10px;margin-top:5px;padding: 5px');
            itemDiv.innerHTML = ` < img style = "user-select: none;pointer-events:none;width:120px;height:120px;display: block;"
                                        src = "${config_1.default.JDIMGSourcesURL}${item.src}" / >
                                        <
                                        div "> <
                                        h2 width = "60vw" > 鍟嗗搧鍚嶇О锛� $ {
                                            item.name
                                        } < /h2> <
                                        p style = "font-weight:700;margin-bottom:10px" > 鐘舵€ 侊細 < span style = "color:red" > $ {
                                            item.stockState
                                        } < /span> <
                                        br > 鍦板尯锛� < span style = "color:red" > $ {
                                            item.area
                                        } < /span></p >
                                        <
                                        button style = "width: 100px;height:30px;background-color: #2196F3;border-radius: 5px;border: 0;" >
                                        <
                                        a href = 'https://skunotify.jd.com/storenotify.html?skuId=${item.skuid}'
                                        target = "_blank"
                                        style = "color: #fff;text-decoration: none;" > 棰勭害鑷 姩涓嬪崟 < /a> <
                                        /button> <
                                        button style = "width: 100px;height:30px;background-color: #2196F3;border-radius: 5px;border: 0;" >
                                        <
                                        a href = '//cart.jd.com/gate.action?pid=${item.skuid}&pcount=1&ptype=1'
                                        target = "_blank"
                                        style = "color: #fff;text-decoration: none;" > 鍔犲叆璐 墿杞� < /a> <
                                        /button> <
                                        br >
                                        <
                                        button style = "width: 100px;height:30px;background-color: #2196F3;border-radius: 5px;border: 0;" >
                                        <
                                        a href = 'https://p.m.jd.com/norder/order.action?wareId=${item.skuid}&wareNum=1&enterOrder=true'
                                        target = "_blank"
                                        style = "color: #fff;text-decoration: none;" > 璁㈠ 崟缁撶畻 < /a> <
                                        /button> <
                                        /div>`;
                                        content.appendChild(itemDiv);
                                    }
                                    this.container.appendChild(content);
                                }
                                buildOperate() {}
                            }
                            exports.default = Goods;
                        }, {
                            "../config/config": 2,
                            "../utils/fetch-jsonp": 25,
                            "../utils/utils": 26
                        }], 24: [function(require, module, exports) {
                            "use strict";
                            var __awaiter = (this && this.__awaiter) || function(thisArg, _arguments, P, generator) {
                                function adopt(value) {
                                    return value instanceof P ? value : new P(function(resolve) {
                                        resolve(value);
                                    });
                                }
                                return new(P || (P = Promise))(function(resolve, reject) {
                                    function fulfilled(value) {
                                        try {
                                            step(generator.next(value));
                                        } catch (e) {
                                            reject(e);
                                        }
                                    }
                                    function rejected(value) {
                                        try {
                                            step(generator["throw"](value));
                                        } catch (e) {
                                            reject(e);
                                        }
                                    }
                                    function step(result) {
                                        result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
                                    }
                                    step((generator = generator.apply(thisArg, _arguments || [])).next());
                                });
                            };
                            Object.defineProperty(exports, "__esModule", {
                                value: true
                            });
                            const goods_1 = require("./goods/goods");
                            const utils_1 = require("./utils/utils");
                            const config_1 = require("./config/config");
                            const CookieManager_1 = require("./cookie/CookieManager");
                            const CookieHandler_1 = require("./cookie/CookieHandler");
                            const newBabelAwardCollection_1 = require("./coupons/newBabelAwardCollection");
                            const whtieCoupon_1 = require("./coupons/whtieCoupon");
                            const purchase_1 = require("./coupons/purchase");
                            const receiveDayCoupon_1 = require("./coupons/receiveDayCoupon");
                            const secKillCoupon_1 = require("./coupons/secKillCoupon");
                            const mfreecoupon_1 = require("./coupons/mfreecoupon");
                            const coinPurchase_1 = require("./coupons/coinPurchase");
                            const gcConvert_1 = require("./coupons/gcConvert");
                            const receiveCoupons_1 = require("./coupons/receiveCoupons");
                            const receiveCoupon_1 = require("./coupons/receiveCoupon");
                            const getCouponCenter_1 = require("./coupons/getCouponCenter");
                            const exchange_1 = require("./coupons/exchange");
                            // import MonsterNian from "./activitys/MonsterNian";
                            // import BrandCitySpring from "./activitys/brandCitySpring";
                            // import Palace from "./activitys/palace";
                            // import ReceiveBless from "./activitys/receiveBless";
                            // import FeedBag from "./activitys/feedBag";
                            const activityType_1 = require("./enum/activityType");
                            const couponType_1 = require("./enum/couponType");
                            const goodsType_1 = require("./enum/goodsType");
                            const btgoose_1 = require("./game/btgoose");
                            // import MoneyTree from "./game/moneyTree";
                            const cloudpig_1 = require("./game/cloudpig");
                            const signInCenter_1 = require("./game/signInCenter");
                            const stall_1 = require("./activitys/stall");
                            let coupon, goods, game, activity, gameMap = {},
                                isJDcontext = true;
                            const container = document.createElement("div"),
                                title = document.createElement("div"),
                                timerTittleDiv = document.createElement("div"),
                                receiveTextInput = document.createElement("input"),
                                receiveCountInput = document.createElement("input"),
                                receiveTimerBtn = document.createElement("button"),
                                operateAreaDiv = document.createElement("div"),
                                outputTextArea = document.createElement("textarea"),
                                outputTextAreaDiv = document.createElement("div"),
                                loginMsgDiv = document.createElement("div");
                            let getLoginMsg = function(res) {
                                    if (res.base.nickname) {
                                        loginMsgDiv.innerHTML = "褰撳墠鐧诲綍浜笢甯愬彿锛�" + res.base.nickname;
                                    }
                                },
                                krapnik = function(res) {};
                            function buildOperate() {
                                operateAreaDiv.setAttribute("style", "border: 1px solid #000;margin: 10px 0;");
                                operateAreaDiv.innerHTML = "<h3 style='border-bottom: 1px solid #2196F3;display: inline-block;margin: 5px;padding: 0 25vw 5px;'>鎿嶄綔鍖�</h3>";
                                if (coupon) {
                                    buildTimerControl();
                                }
                                loginMsgDiv.innerHTML = "褰撳墠浜笢甯愬彿锛�<a href='https://plogin.m.jd.com/login/login' target='_blank'>鐐瑰嚮鐧诲綍</a>";
                                operateAreaDiv.append(loginMsgDiv);
                                container.append(operateAreaDiv);
                                buildOutput();
                            }
                            function buildOutput() {
                                outputTextAreaDiv.style.display = "none";
                                outputTextArea.setAttribute("style", "width: 90vw;height: 40vw;border: 1px solid #868686;border-radius: 10px;overflow-y: scroll;margin:5px auto;");
                                outputTextArea.setAttribute("disabled", "disabled");
                                let clearOutLogBtn = document.createElement("button");
                                clearOutLogBtn.innerHTML = "娓呯┖鏃ュ織";
                                clearOutLogBtn.setAttribute("style", "width: 120px;height:30px;background-color: #2196F3;border-radius: 5px;border: 0;color:#fff;margin:5px;");
                                clearOutLogBtn.addEventListener("click", () => {
                                    outputTextArea.value = "";
                                });
                                outputTextAreaDiv.append(outputTextArea);
                                outputTextAreaDiv.append(clearOutLogBtn);
                                operateAreaDiv.append(outputTextAreaDiv);
                            }
                            function buildTimerControl() {
                                const receiveDiv = document.createElement("div"),
                                    receiveAreaDiv = document.createElement("div"),
                                    receiveTipsDiv = document.createElement("div"),
                                    receiveAllBtn = document.createElement("button"),
                                    timerTextInput = document.createElement("input"),
                                    timerResetBtn = document.createElement("button"),
                                    spanTextInput = document.createElement("input"),
                                    spanResetBtn = document.createElement("button"),
                                    timerDiv = document.createElement("div");
                                timerTextInput.type = "text";
                                timerTextInput.placeholder = "璇疯緭鍏ヨ幏鍙栨椂闂寸殑鍒锋柊棰戠巼銆愭绉掋€�";
                                timerTextInput.setAttribute("style", "width:80vw;height: 25px;border: solid 1px #000;border-radius: 5px;margin: 10px auto;display: block;");
                                timerResetBtn.innerHTML = "閲嶇疆鍒锋柊棰戠巼";
                                timerResetBtn.setAttribute("style", "width: 120px;height:30px;background-color: #2196F3;border-radius: 5px;border: 0;color:#fff;");
                                timerResetBtn.addEventListener("click", () => {
                                    const span = Math.trunc(+timerTextInput.value);
                                    if (!span) {
                                        alert("璇锋鏌ヨ緭鍏ョ殑鍒锋柊棰戠巼鏄惁鏈夎锛�(鍙兘涓哄ぇ浜�0鐨勬暟瀛�)");
                                        return false;
                                    }
                                    config_1.default.intervalSpan = span;
                                    window.clearInterval(config_1.default.intervalId);
                                    config_1.default.intervalId = window.setInterval(getTime, config_1.default.intervalSpan);
                                });
                                receiveTipsDiv.innerHTML = `<h3>瀹氭椂鏃堕棿浣跨敤骞存湀鏃�+24灏忔椂鍒�</h3><p style="color:red">闆剁偣棰嗗埜璁剧疆鍙傝€�<br>鍒锋柊棰戠巼:500 | 瀹氭椂鏃堕棿锛�2020-01-01 23:59:59:490<br>tips:閮ㄥ垎鍒稿叾瀹炴槸鎻愬墠鍙戞斁鐨�</p>`;
                                receiveTextInput.type = "text";
                                receiveTextInput.placeholder = "瀹氭椂棰嗗埜鏃堕棿銆愭牸寮�:2020-01-01 09:59:59:950銆�";
                                receiveTextInput.setAttribute("style", "width:80vw;height: 25px;border: solid 1px #000;border-radius: 5px;margin: 10px;");
                                receiveCountInput.type = "text";
                                receiveCountInput.placeholder = "棰嗗埜鎻愪氦娆℃暟銆愰粯璁わ細1娆°€�";
                                receiveCountInput.setAttribute("style", "width:80vw;height: 25px;border: solid 1px #000;border-radius: 5px;margin: 10px;");
                                spanTextInput.type = "text";
                                spanTextInput.placeholder = "璇疯緭鍏ラ噸澶嶉鍒哥殑鎻愪氦棰戠巼銆愰粯璁わ細500姣銆�";
                                spanTextInput.setAttribute("style", "width:80vw;height: 25px;border: solid 1px #000;border-radius: 5px;margin: 10px auto;display: block;");
                                receiveTimerBtn.innerHTML = "瀹氭椂鎸囧畾棰嗗彇";
                                receiveTimerBtn.addEventListener("click", () => {
                                            config_1.default.postSpan = parseInt(spanTextInput.value) > 0 ? parseInt(spanTextInput.value) : 500;
                                            config_1.default.postCount = parseInt(receiveCountInput.value) > 0 ? parseInt(receiveCountInput.value) : 1;
                                            const time = utils_1.default.formateTime(receiveTextInput.value);
                                            if (!time || time < 0) {
                                                alert("璇锋鏌ュ畾鏃堕鍒告椂闂寸殑鏍煎紡鏄惁鏈夎锛�");
                                                return false;
                                            } else {
                                                config_1.default.timingFlag = !config_1.default.timingFlag;
                                                config_1.default.startTime = time;
                                                receiveTextInput.disabled = config_1.default.timingFlag;
                                                receiveCountInput.disabled = config_1.default.timingFlag;
                                                if (config_1.default.timingFlag) {
                                                    receiveTimerBtn.innerHTML = "鍙栨秷瀹氭椂棰嗗彇";
                                                    utils_1.default.outPutLog(outputTextArea, `宸插紑鍚畾鏃堕鍙栵紒瀹氭椂棰嗗彇鏃堕棿锛�${receiveTextInput.value}`);
                                                } else {
                                                    receiveTimerBtn.innerHTML = "瀹氭椂鎸囧畾棰嗗彇";
                                                    utils_1.default.outPutLog(outputTextArea, `宸插叧闂畾鏃堕鍙朻);
            }
        }
    });
    receiveAllBtn.addEventListener("click", () => {
        if (coupon) {
            coupon.send(outputTextArea);
        }
    });
    receiveTimerBtn.setAttribute("style", "width: 120px;height:30px;background-color: #2196F3;border-radius: 5px;border: 0;color:#fff;margin:5px;");
    receiveAllBtn.innerHTML = "涓€閿寚瀹氶鍙�";
    receiveAllBtn.setAttribute("style", "width: 120px;height:30px;background-color: #2196F3;border-radius: 5px;border: 0;color:#fff;margin:5px;");
    operateAreaDiv.append(timerDiv);
    timerDiv.append(timerTittleDiv);
    timerDiv.append(timerTextInput);
    timerDiv.append(timerResetBtn);
    timerDiv.append(spanTextInput);
    timerDiv.append(spanResetBtn);
    operateAreaDiv.append(receiveDiv);
    receiveDiv.append(receiveTipsDiv);
    receiveDiv.append(receiveTextInput);
    receiveDiv.append(receiveCountInput);
    receiveDiv.append(spanTextInput);
    receiveDiv.append(receiveAreaDiv);
    receiveAreaDiv.append(receiveAllBtn);
    receiveAreaDiv.append(receiveTimerBtn);
}
function buildTips() {
    const tips = document.createElement('h4');
    tips.innerHTML = '<h4>椤甸潰鍦板潃鏆傛湭琚墿灞曟垨鑰呮湁璇紒</h4><p>鏈彃浠跺彧鑳藉湪鎸囧畾娲诲姩鍦板潃鎴栭鍒稿湴鍧€浣跨敤锛�</p><p>濡傛灉杩欐槸涓椿鍔ㄥ湴鍧€鎴栭鍒稿湴鍧€锛�<a href="tencent://message/?uin=708873725Menu=yes" target="_blank" title="鍙戣捣QQ鑱婂ぉ">鑱旂郴浣滆€�</a>鎵╁睍~</p><a style="color:red" onclick=Utils.copyText(Config.NetdiskURL)>鐐瑰嚮涓嬭浇鏁欑▼瑙嗛</a>';
    title.append(tips);
}
function buildTitle() {
    const html = utils_1._$('html');
    html.style.fontSize = "18px";
    document.body.innerHTML = "";
    document.body.style.overflow = "scroll";
    document.body.style.backgroundColor = "#ffffff";
    document.body.style.textAlign = "center";
    document.body.style.maxWidth = "100vw";
    container.setAttribute("style", "border: 1px solid #000;margin: 10px 0;padding: 5px;margin: 5px;");
    title.innerHTML = ` < h1 style = "font-weight:700" > $ {
                                                            config_1.default.title
                                                        }
                                                        $ {
                                                            config_1.default.version
                                                        } < /h1> <
                                                        h3 > author: $ {
                                                            config_1.default.author
                                                        } < /h3> <
                                                        div style = "display: flex;flex-direction: row;justify-content: center;" >
                                                        <
                                                        iframe src = "https://ghbtns.com/github-btn.html?user=krapnikkk&repo=JDCouponAssistant&type=star&count=true"
                                                        frameborder = "0"
                                                        scrolling = "0"
                                                        width = "90px"
                                                        height = "21px" > < /iframe> <
                                                        a href = "tencent://message/?uin=708873725Menu=yes"
                                                        target = "_blank"
                                                        title = "鍙戣捣QQ鑱婂ぉ" > < img src = "http://bizapp.qq.com/webimg/01_online.gif"
                                                        alt = "QQ"
                                                        style = "margin:0px;" > < /a> <
                                                        /div> <
                                                        button style = "font-size:18px;font-weight:bold;color:#000;position:relative;width: 200px;height:30px;background-color: #2196F3;border-radius: 5px;border: 0;color:#fff;margin:5px auto;display:block" >
                                                        鎶婃寜閽 嫋鍔ㄥ埌涔︾ 鏍� <
                                                        a style = "font-size:0px;width:200px;height:30px;display:inline-block;position:absolute;left:0;top:0;"
                                                        href = "javascript:!function(){function c(){var d=document.getElementById("
                                                        loadJs "),e=document.createElement("
                                                        script ");d&&document.getElementsByTagName("
                                                        head ")[0].removeChild(d),e.id="
                                                        loadJs ",e.type="
                                                        text / javascript ",e.onerror=function(){return b==a.length-1?(alert(" % E6 % 89 % 80 % E6 % 9 C % 89 % E6 % 95 % B0 % E6 % 8 D % AE % E6 % BA % 90 % E4 % BB % A3 % E7 % A0 % 81 % E5 % 8 A % A0 % E8 % BD % BD % E5 % BC % 82 % E5 % B8 % B8 % EF % BC % 81 % E8 % AF % B7 % E6 % A3 % 80 % E6 % 9 F % A5 % E7 % BD % 91 % E7 % BB % 9 C % E6 % 83 % 85 % E5 % 86 % B5 % EF % BC % 81 "),void 0):(b++,c(),void 0)},e.src=a[b],document.getElementsByTagName("
                                                        head ")[0].appendChild(e)}var a=["
                                                        https: //krapnik.coding.net/p/JD/d/JDCouponAssistant/git/raw/master/bundle.js","https://gitee.com/krapnik/codes/o9nwsxjuy6crftdi824aq79/raw?blob_name=JDCouponAssistant.js","https://raw.githubusercontent.com/krapnikkk/JDCouponAssistant/master/dist/bundle.js"],b=0;c()}();">
                                                        浜 笢棰嗗埜鍔╂ 墜 <
                                                        /a> <
                                                        /button>`;
                                                        container.append(title); document.body.append(container);
                                                    }
                                                    function buildActivity() {
                                                        const activityArea = document.createElement("div");
                                                        activityArea.setAttribute("style", "border: 1px solid #000");
                                                        activityArea.innerHTML = `<h3 style='border-bottom: 1px solid #2196F3;display: inline-block;margin: 5px;'>娲诲姩鎺ㄨ崘</h3>
    <p style="color:red;font-weight:bold;"><a style="color:red" href="https://bunearth.m.jd.com/babelDiy/Zeus/4SJUHwGdUQYgg94PFzjZZbGZRjDd/index.html?babelChannel=1#/home" target="_blank">鍏ㄦ皯钀ヤ笟</a></p>`;
                                                        container.append(activityArea);
                                                    }
                                                    function buildRecommend() {
                                                        const recommandArea = document.createElement("div");
                                                        recommandArea.setAttribute("style", "border: 1px solid #000;margin: 10px 0;");
                                                        recommandArea.innerHTML = `<h3 style='border-bottom: 1px solid #2196F3;display: inline-block;margin: 5px;'>濂藉埜鎺ㄨ崘</h3>
    <p style="color:red;font-weight:bold;">
    <a style="color:red" href="https://m.jr.jd.com/member/9GcConvert/?channel=01-shouye-191214" target="_blank">9閲戝竵鎶㈠厬</a>
    <br><a style="color:red" href="https://m.jr.jd.com/member/rightsCenter/#/white" target="_blank">12鏈熷厤鎭埜</a>
    </p>`;
                                                        container.append(recommandArea);
                                                    }
                                                    function buildPromotion() {
                                                        const promotionArea = document.createElement("div");
                                                        promotionArea.setAttribute("style", "border: 1px solid #000;margin: 10px 0;");
                                                        promotionArea.innerHTML = `<h3 style='border-bottom: 1px solid #2196F3;display: inline-block;margin: 5px;'>鎺ㄥ箍鍖�</h3>
    <p style="color:red;font-weight:bold;"><a style="color:red" href="http://krapnik.cn/project/jd/dayTask.html" target="_blank">姣忔棩浜笢绾㈠寘姹囨€�</a></p>`;
                                                        container.append(promotionArea);
                                                    }
                                                    function buildUAarea() {
                                                        let UATipsDiv = document.createElement("div");
                                                        UATipsDiv.innerHTML = `<div style="border: 1px solid #000;margin: 10px 0;font-weight:bold"><h2>璇ユ椿鍔ㄩ渶瑕佽缃畊ser-Agent涓轰含涓淎PP</h2><p><a style="color:red" onclick=Utils.copyText(Config.NetdiskURL)>鐐瑰嚮涓嬭浇鏁欑▼瑙嗛</a></p><p>閮ㄥ垎娴忚鍣ㄦ彃浠朵細瑕嗙洊UA璁剧疆锛岃鑷鎺掓煡骞跺叧闂�</p><p>銆愭瘮濡傦細浜环淇濄€�</p><button style="width: 200px;height:30px;background-color: #2196F3;border-radius: 5px;border: 0;color:#fff;margin:5px auto;display:block" onclick=Utils.copyText(Config.JDAppUA)>鐐瑰嚮涓€閿鍒禪ser-Agent</button></div>`;
                                                        container.append(UATipsDiv);
                                                    }
                                                    function buildSensorArea() {
                                                        let sensorArea = document.createElement("div");
                                                        sensorArea.innerHTML = `<div style="border: 1px solid #000;margin: 10px 0;font-weight:bold"><h3 style='border-bottom: 1px solid #2196F3;display: inline-block;margin: 5px;padding: 0 25vw 5px;'>鎵╁睍鍔熻兘鍖�</h3>
    <p style="color:red;font-weight:bold;">浣跨敤鏈爮鐩姛鑳藉墠璇锋煡鐪嬫暀绋�</p>
    <div><button style="width: 120px;height:30px;background-color: #2196F3;border-radius: 5px;border: 0;color:#fff;margin:5px auto;" onclick="Utils.copyText(Config.NetdiskURL)">涓嬭浇鏁欑▼</button>
    <button class="toggle" style="width: 120px;height:30px;background-color: #2196F3;border-radius: 5px;border: 0;color:#fff;margin:5px auto;">灞曞紑鏍忕洰</button></div>
    <div class="sensorAreaTabDiv" style="display:none"><ul class="list" style="display:flex;justify-content: space-around;list-style:none;margin-bottom: 10px;"><li class="account">甯愬彿绠＄悊</li><li class="activity">鏃ュ父杈呭姪</li></ul>
    <hr style="margin: 10px;">
    <div class="extensionDiv"></div></div>`;
                                                        container.append(sensorArea);
                                                        let account = document.createElement("div");
                                                        account.innerHTML = `<p>瀵煎叆ck鏍煎紡锛氬娉�----ck</p><p style="color:red;">鏆傛椂鍙鎵╁睍鍔熻兘鍖烘湁鏁�</p>
    <button style="width: 120px;height:30px;background-color: #2196F3;border-radius: 5px;border: 0;color:#fff;margin:5px auto;display:block" onclick="Utils.copyText(document.cookie)">澶嶅埗Cookie</button>
    <button id="import" style="width: 120px;height:30px;background-color: #2196F3;border-radius: 5px;border: 0;color:#fff;margin:5px auto;display:block">瀵煎叆澶氬笎鍙�</button></div>`;
                                                        let activity = document.createElement("div");
                                                        activity.innerHTML = `<ul class="activity-list" style="display:flex;justify-content: space-around;list-style:none;margin-bottom: 10px;">
    <li class="pig">鍏荤尓鐚�</li>
    <li class="goose">鎻愰箙</li>
    <li class="moneyTree">閲戞灉鏍�</li>
    <li class="signInCenter">绛惧埌涓績</li>
    </ul>
    <hr style="margin: 10px;"><div class="activityExtensionDiv"></div>`;
                                                        let extensionDiv = utils_1._$(".extensionDiv"),
                                                            sensorAreaTabDiv = utils_1._$(".sensorAreaTabDiv");
                                                        extensionDiv.append(account);
                                                        extensionDiv.append(activity);
                                                        activity.style.display = "none";
                                                        utils_1._$(".list").addEventListener("click", (e) => {
                                                            let target = e.target;
                                                            if (target.getAttribute("class") == "account") {
                                                                account.style.display = "block";
                                                                activity.style.display = "none";
                                                            } else {
                                                                account.style.display = "none";
                                                                activity.style.display = "block";
                                                            }
                                                        });
                                                        utils_1._$(".toggle").addEventListener("click", (e) => {
                                                            let target = e.target;
                                                            if (sensorAreaTabDiv.style.display == "block") {
                                                                sensorAreaTabDiv.style.display = "none";
                                                                target.innerHTML = "灞曞紑鏍忕洰";
                                                            } else {
                                                                sensorAreaTabDiv.style.display = "block";
                                                                target.innerHTML = "鏀惰捣鏍忕洰";
                                                            }
                                                        });
                                                        utils_1._$("#import").addEventListener('click', () => {
                                                            utils_1.default.importFile("text/plain").then((ck) => __awaiter(this, void 0, void 0, function*() {
                                                                config_1.default.multiFlag = false;
                                                                config_1.default.importFlag = false;
                                                                CookieManager_1.default.parseCK(ck);
                                                                if (config_1.default.importFlag) {
                                                                    CookieManager_1.default.outPutLog(outputTextArea);
                                                                    Promise.all(CookieManager_1.default.cookieArr.map((item) => {
                                                                        return CookieManager_1.default.checkLogin(outputTextArea, item);
                                                                    })).then((data) => {
                                                                        if (data.every((res) => {
                                                                                return res;
                                                                            })) {
                                                                            utils_1.default.outPutLog(outputTextArea, "鎵€鏈塩k鏍￠獙鎴愬姛锛屽紑鍚璐﹀彿妯″紡鎴愬姛!");
                                                                            config_1.default.multiFlag = true;
                                                                        } else {
                                                                            CookieHandler_1.CookieHandler.clearAllCookie();
                                                                            utils_1.default.outPutLog(outputTextArea, "閮ㄥ垎ck鏍￠獙澶辫触,寮€鍚璐﹀彿妯″紡澶辫触!璇锋鏌k鏈夋晥鎬�!");
                                                                        }
                                                                    });
                                                                }
                                                            }));
                                                        });
                                                        let activityExtensionDiv = utils_1._$(".activityExtensionDiv");
                                                        utils_1._$(".activity-list").addEventListener("click", (e) => {
                                                            let target = e.target;
                                                            let nodes = activityExtensionDiv.childNodes;
                                                            nodes.forEach((node) => {
                                                                node.style.display = "none";
                                                            });
                                                            if (target.getAttribute("class") == "pig") {
                                                                if (!gameMap.Cloudpig) {
                                                                    gameMap.Cloudpig = new cloudpig_1.default(null, activityExtensionDiv, outputTextArea);
                                                                    gameMap.Cloudpig.get();
                                                                } else {
                                                                    gameMap.Cloudpig.content.style.display = "block";
                                                                }
                                                            } else if (target.getAttribute("class") == "goose") {
                                                                if (!gameMap.BTGoose) {
                                                                    gameMap.BTGoose = new btgoose_1.default(null, activityExtensionDiv, outputTextArea);
                                                                    gameMap.BTGoose.get();
                                                                } else {
                                                                    gameMap.BTGoose.content.style.display = "block";
                                                                }
                                                            } else if (target.getAttribute("class") == "moneyTree") {
                                                                alert("璇ュ姛鑳芥鍦ㄥ紑鍙戜腑锛屾櫄鐐瑰啀鏉ュ惂~");
                                                                // if (!gameMap.MoneyTree) {
                                                                //     gameMap.MoneyTree = new MoneyTree(null, activityExtensionDiv, outputTextArea);
                                                                //     gameMap.MoneyTree.get();
                                                                // } else {
                                                                //     gameMap.MoneyTree.content.style.display = "block";
                                                                // }
                                                            } else if (target.getAttribute("class") == "signInCenter") {
                                                                if (!gameMap.signInCenter) {
                                                                    gameMap.signInCenter = new signInCenter_1.default(null, activityExtensionDiv, outputTextArea);
                                                                    gameMap.signInCenter.get();
                                                                } else {
                                                                    gameMap.signInCenter.content.style.display = "block";
                                                                }
                                                            } else {
                                                                alert("璇ュ姛鑳芥鍦ㄥ紑鍙戜腑锛屾櫄鐐瑰啀鏉ュ惂~");
                                                            }
                                                        });
                                                    }
                                                    function buildTimeoutArea() {
                                                        let timeoutDiv = document.createElement("div"),
                                                            timeoutInput = document.createElement("input");
                                                        timeoutInput.setAttribute("style", "width:80vw;height: 25px;font-size:14px;border: solid 1px #000;border-radius: 5px;margin: 10px auto;display: block;");
                                                        timeoutInput.placeholder = `璇疯緭鍏ヤ换鍔＄殑鎻愪氦闂撮殧鏃堕棿銆愰粯璁�:${config_1.default.timeoutSpan}姣銆慲;
    timeoutDiv.innerHTML = ` < p style = "font-size:14px;" > 浠诲姟鎻愪氦鏃堕棿灏嗕細鍦ㄨ 缃 彁浜ら棿闅旀椂闂寸殑鍩虹 涓婇殢鏈哄 鍔� 300~500 姣 < /p>`;
                                                        timeoutDiv.append(timeoutInput);
                                                        timeoutInput.onchange = () => {
                                                            if (utils_1.default.isNumber(+timeoutInput.value)) {
                                                                config_1.default.timeoutSpan = +timeoutInput.value || 1500;
                                                            }
                                                        };
                                                        operateAreaDiv.append(timeoutDiv);
                                                    }
                                                    function getEntryType() {
                                                        let type = couponType_1.couponType.none;
                                                        if (!window.location.host.includes("jd.com")) {
                                                            isJDcontext = false;
                                                            return type;
                                                        }
                                                        if (config_1.default.locationHref.includes("item.jd.com/") || config_1.default.locationHref.includes("item.m.jd.com/product/")) {
                                                            type = goodsType_1.goodsType.goods;
                                                        }
                                                        if (window.__react_data__) {
                                                            type = couponType_1.couponType.newBabelAwardCollection;
                                                        } else if (window.Queries) {
                                                            type = couponType_1.couponType.whiteCoupon;
                                                        } else if (config_1.default.locationHref.includes('gcmall/index.html#/details?pid=')) {
                                                            type = couponType_1.couponType.purchase;
                                                        } else if (config_1.default.locationHref.includes('member/gcmall/index.html#/details?gid')) {
                                                            type = couponType_1.couponType.coinPurchase;
                                                        } else if (config_1.default.locationHref.includes("plus.m.jd.com/coupon/")) {
                                                            type = couponType_1.couponType.receiveDayCoupon;
                                                        } else if (config_1.default.locationHref.includes("9GcConvert")) {
                                                            type = couponType_1.couponType.GcConvert;
                                                        } else if ((/babelDiy\/(\S*)\/index/).test(config_1.default.locationHref)) {
                                                            type = couponType_1.couponType.secKillCoupon;
                                                        } else if (/coupons\/show.action\?key=(\S*)&roleId=(\S*)/.test(config_1.default.locationHref)) {
                                                            type = couponType_1.couponType.mfreecoupon;
                                                        } else if (config_1.default.locationHref.includes("4PN6NLSX1vyp8xibC5sk7WZEFF5U")) {
                                                            type = couponType_1.couponType.secKillCoupon;
                                                        } else if (config_1.default.locationHref.includes("m.jr.jd.com/member/rightsCenter/#/white")) {
                                                            type = couponType_1.couponType.ReceiveCoupons;
                                                        } else if (config_1.default.locationHref.includes("m.jr.jd.com/consumer/baitiaom/index.html")) {
                                                            type = couponType_1.couponType.ReceiveCoupon;
                                                        } else if (config_1.default.locationHref.includes("coupon.m.jd.com/center/getCouponCenter.action")) {
                                                            type = couponType_1.couponType.getCouponCenter;
                                                        } else if (config_1.default.locationHref.includes("vip.m.jd.com/index.html?appName=fuli&id=")) {
                                                            type = couponType_1.couponType.exchange;
                                                        }
                                                        //浜笢APP鑺傚亣鏃ヨ惀閿€娲诲姩
                                                        if (config_1.default.locationHref.includes("bunearth.m.jd.com")) {
                                                            if (config_1.default.locationHref.includes("4PWgqmrFHunn8C38mJA712fufguU")) {
                                                                type = activityType_1.activityType.monsterNian;
                                                            } else if (config_1.default.locationHref.includes("w6y8PYbzhgHJc8Lu1weihPReR2T")) {
                                                                type = activityType_1.activityType.brandCitySpring;
                                                            } else if (config_1.default.locationHref.includes("21tFbS6Xm4tpon3oJnwzbnCJBo1Z")) {
                                                                type = activityType_1.activityType.receiveBless;
                                                            } else if (config_1.default.locationHref.includes("4SJUHwGdUQYgg94PFzjZZbGZRjDd")) {
                                                                type = activityType_1.activityType.stall;
                                                            }
                                                        }
                                                        if (config_1.default.locationHref.includes("wbbny.m.jd.com")) {
                                                            if (config_1.default.locationHref.includes("4PWgqmrFHunn8C38mJA712fufguU")) {
                                                                type = activityType_1.activityType.monsterNian;
                                                            } else if (config_1.default.locationHref.includes("w6y8PYbzhgHJc8Lu1weihPReR2T")) {
                                                                type = activityType_1.activityType.brandCitySpring;
                                                            } else if (config_1.default.locationHref.includes("21tFbS6Xm4tpon3oJnwzbnCJBo1Z")) {
                                                                type = activityType_1.activityType.receiveBless;
                                                            } else if (config_1.default.locationHref.includes("4SJUHwGdUQYgg94PFzjZZbGZRjDd")) {
                                                                type = activityType_1.activityType.stall;
                                                            }
                                                        }
                                                        if (config_1.default.locationHref.includes("palace")) {
                                                            type = activityType_1.activityType.palace;
                                                        }
                                                        //浜笢閲戣瀺APP鑺傚亣鏃ヨ惀閿€娲诲姩
                                                        // if (Config.locationHref.includes("u.jr.jd.com")) {
                                                        //     //https://u.jr.jd.com/uc-fe-wxgrowing/feedbag/cover/channelLv=syfc/
                                                        //     if (Config.locationHref.includes("feedbag")) {
                                                        //         type = activityType.feedBag;
                                                        //     }
                                                        // }
                                                        //璋冩暣涓哄叏灞€涓诲姩鍒囨崲
                                                        // if (Config.locationHref.includes("uc-fe-wxgrowing")) {
                                                        //     if (Config.locationHref.includes("moneytree")) {
                                                        //         // type = gameType.moneytree;
                                                        //     } else if (Config.locationHref.includes("cloudpig")) {
                                                        //         type = gameType.cloudpig;
                                                        //     }
                                                        // }
                                                        return type;
                                                    }
                                                    function getEntryDesc(type) {
                                                        buildTitle();
                                                        // buildPromotion();
                                                        switch (type) {
                                                            case goodsType_1.goodsType.goods:
                                                                const goodsId = config_1.default.locationHref.match(/jd.com\/(\S*).html/)[1];
                                                                goods = new goods_1.default(container, outputTextArea, goodsId);
                                                                break;
                                                            case couponType_1.couponType.newBabelAwardCollection:
                                                                const activityId = config_1.default.locationHref.match(/active\/(\S*)\/index/)[1];
                                                                coupon = new newBabelAwardCollection_1.default({
                                                                    "activityId": activityId
                                                                }, container, outputTextArea);
                                                                break;
                                                            case couponType_1.couponType.whiteCoupon:
                                                                const couponBusinessId = utils_1.default.GetQueryString("couponBusinessId");
                                                                coupon = new whtieCoupon_1.default({
                                                                    "couponBusinessId": couponBusinessId
                                                                }, container, outputTextArea);
                                                                break;
                                                            case couponType_1.couponType.purchase:
                                                                const pid = utils_1.default.GetQueryString("pid");
                                                                coupon = new purchase_1.default({
                                                                    "pid": pid
                                                                }, container, outputTextArea);
                                                                break;
                                                            case couponType_1.couponType.coinPurchase:
                                                                const gid = utils_1.default.GetQueryString("gid");
                                                                coupon = new coinPurchase_1.default({
                                                                    "pid": gid
                                                                }, container, outputTextArea);
                                                                break;
                                                            case couponType_1.couponType.receiveDayCoupon:
                                                                coupon = new receiveDayCoupon_1.default(null, container, outputTextArea);
                                                                break;
                                                            case couponType_1.couponType.secKillCoupon:
                                                                coupon = new secKillCoupon_1.default(null, container, outputTextArea);
                                                                break;
                                                            case couponType_1.couponType.GcConvert:
                                                                coupon = new gcConvert_1.default(null, container, outputTextArea);
                                                                break;
                                                            case couponType_1.couponType.mfreecoupon:
                                                                const roleId = utils_1.default.GetQueryString("roleId"),
                                                                    key = utils_1.default.GetQueryString("key");
                                                                coupon = new mfreecoupon_1.default({
                                                                    "roleId": roleId,
                                                                    "key": key
                                                                }, container, outputTextArea);
                                                                break;
                                                            case couponType_1.couponType.ReceiveCoupons:
                                                                coupon = new receiveCoupons_1.default(null, container, outputTextArea);
                                                                break;
                                                            case couponType_1.couponType.ReceiveCoupon:
                                                                coupon = new receiveCoupon_1.default(null, container, outputTextArea);
                                                                break;
                                                            case couponType_1.couponType.getCouponCenter:
                                                                coupon = new getCouponCenter_1.default(null, container, outputTextArea);
                                                                break;
                                                            case couponType_1.couponType.exchange:
                                                                const itemId = utils_1.default.GetQueryString("id");
                                                                coupon = new exchange_1.default({
                                                                    "itemId": itemId
                                                                }, container, outputTextArea);
                                                                break;
                                                                // case activityType.monsterNian:
                                                                //     activity = new MonsterNian(null, container, outputTextArea);
                                                                //     Config.UAFlag = true;
                                                                //     break;
                                                                // case activityType.brandCitySpring:
                                                                //     activity = new BrandCitySpring(null, container, outputTextArea);
                                                                //     break;
                                                                // case activityType.palace:
                                                                //     activity = new Palace(null, container, outputTextArea);
                                                                //     break;
                                                                // case activityType.receiveBless:
                                                                //     activity = new ReceiveBless(null, container, outputTextArea);
                                                                //     Config.UAFlag = true;
                                                                //     break;
                                                            case activityType_1.activityType.stall:
                                                                activity = new stall_1.default(null, container, outputTextArea);
                                                                config_1.default.UAFlag = true;
                                                                break;
                                                                // case activityType.feedBag:
                                                                //     activity = new FeedBag(null, container, outputTextArea);
                                                                //     break;
                                                            default:
                                                                break;
                                                        }
                                                        if (config_1.default.UAFlag) {
                                                            buildUAarea();
                                                        }
                                                        // buildRecommend();//娲诲姩鎺ㄨ崘
                                                        // buildActivity();
                                                        if (isJDcontext) {
                                                            buildSensorArea();
                                                            buildOperate();
                                                            // buildExtensionTab();
                                                            utils_1.default.createJsonp(`${config_1.default.JDUserInfoURL}&callback=getLoginMsg`);
                                                        }
                                                        if (coupon) {
                                                            config_1.default.intervalId = window.setInterval(getTime, config_1.default.intervalSpan);
                                                            coupon.get();
                                                        } else if (activity) {
                                                            buildActivity();
                                                            buildTimeoutArea();
                                                            activity.get();
                                                        } else if (goods) {
                                                            goods.get();
                                                        } else if (game) {
                                                            game.get();
                                                        } else {
                                                            utils_1.default.loadCss("https://meyerweb.com/eric/tools/css/reset/reset200802.css");
                                                            buildTips();
                                                        }
                                                    }
                                                    function getTime() {
                                                        fetch(config_1.default.JDTimeInfoURL)
                                                            .then(function(response) {
                                                                return response.json();
                                                            })
                                                            .then(function(res) {
                                                                config_1.default.serverTime = utils_1.default.formatDate(res.time);
                                                                config_1.default.localeTime = new Date(+res.time).toLocaleString() + ":" + config_1.default.serverTime.substr(-3, 3);
                                                                timerTittleDiv.innerHTML = `浜笢鏃堕棿锛�${config_1.default.localeTime}<br/>褰撳墠鑾峰彇鏃堕棿鐨勯棿闅旈鐜囷細${config_1.default.intervalSpan}姣`;
                                                                if (config_1.default.timingFlag) {
                                                                    if (config_1.default.startTime <= +config_1.default.serverTime) {
                                                                        utils_1.default.outPutLog(outputTextArea, `瀹氭椂棰嗗彇寮€濮嬶紒`);
                                                                        utils_1.default.outPutLog(outputTextArea, `褰撳墠浜笢鏈嶅姟鍣ㄦ椂闂达細${config_1.default.localeTime}`);
                                                                        config_1.default.timingFlag = !config_1.default.timingFlag;
                                                                        if (coupon) {
                                                                            for (let i = 0; i < config_1.default.postCount; i++) {
                                                                                (function(index) {
                                                                                    setTimeout(() => {
                                                                                        utils_1.default.outPutLog(outputTextArea, `绗�${index + 1}娆℃彁浜わ紒`);
                                                                                        coupon.send(outputTextArea);
                                                                                    }, index * config_1.default.postSpan);
                                                                                })(i);
                                                                            }
                                                                        }
                                                                        receiveTextInput.disabled = config_1.default.timingFlag;
                                                                        receiveCountInput.disabled = config_1.default.timingFlag;
                                                                        receiveTimerBtn.innerHTML = "瀹氭椂鎸囧畾棰嗗彇";
                                                                        utils_1.default.outPutLog(outputTextArea, `瀹氭椂棰嗗彇宸茬粨鏉燂紒`);
                                                                    }
                                                                }
                                                            });
                                                    }
                                                    function copyRights() {
                                                        console.clear();
                                                        if (window.console) {
                                                            console.group('%c浜笢棰嗗埜鍔╂墜', 'color:#009a61; font-size: 36px; font-weight: 400');
                                                            console.log('%c鏈彃浠朵粎渚涘涔犱氦娴佷娇鐢╘n浣滆€�:krapnik \n鏃㈢劧鎸変簡F12锛屼负浣曚笉鍘籊itHub椤轰究缁欎釜star\ngithub:https://github.com/krapnikkk/JDCouponAssistant', 'color:#009a61');
                                                            console.groupEnd();
                                                        }
                                                    }
                                                    var _hmt = _hmt || [];
                                                    function statistical() {
                                                        (function() {
                                                            var hm = document.createElement("script");
                                                            hm.src = "https://hm.baidu.com/hm.js?d86d4ff3f6d089df2b41eb0735194c0d";
                                                            var s = document.getElementsByTagName("script")[0];
                                                            s.parentNode.insertBefore(hm, s);
                                                        })();
                                                    }
                                                    copyRights();
                                                    getEntryDesc(getEntryType());
                                                    statistical();
                                                    Object.assign(window, {
                                                        "getLoginMsg": getLoginMsg,
                                                        "krapnik": krapnik,
                                                        "Utils": utils_1.default,
                                                        "Config": config_1.default
                                                    });
                                                }, {
                                                    "./activitys/stall": 1,
                                                    "./config/config": 2,
                                                    "./cookie/CookieHandler": 3,
                                                    "./cookie/CookieManager": 4,
                                                    "./coupons/coinPurchase": 5,
                                                    "./coupons/exchange": 6,
                                                    "./coupons/gcConvert": 7,
                                                    "./coupons/getCouponCenter": 8,
                                                    "./coupons/mfreecoupon": 9,
                                                    "./coupons/newBabelAwardCollection": 10,
                                                    "./coupons/purchase": 11,
                                                    "./coupons/receiveCoupon": 12,
                                                    "./coupons/receiveCoupons": 13,
                                                    "./coupons/receiveDayCoupon": 14,
                                                    "./coupons/secKillCoupon": 15,
                                                    "./coupons/whtieCoupon": 16,
                                                    "./enum/activityType": 17,
                                                    "./enum/couponType": 18,
                                                    "./enum/goodsType": 19,
                                                    "./game/btgoose": 20,
                                                    "./game/cloudpig": 21,
                                                    "./game/signInCenter": 22,
                                                    "./goods/goods": 23,
                                                    "./utils/utils": 26
                                                }], 25: [function(require, module, exports) {
                                                    "use strict";
                                                    Object.defineProperty(exports, "__esModule", {
                                                        value: true
                                                    });
                                                    class FetchJsonp {
                                                        static generateCallbackFunction() {
                                                            return `jsonp_${Date.now()}_${Math.ceil(Math.random() * 100000)}`;
                                                        }
                                                        static clearFunction(functionName) {
                                                            try {
                                                                delete window[functionName];
                                                            } catch (e) {
                                                                window[functionName] = undefined;
                                                            }
                                                        }
                                                        static removeScript(scriptId) {
                                                            const script = document.getElementById(scriptId);
                                                            if (script) {
                                                                document.getElementsByTagName('head')[0].removeChild(script);
                                                            }
                                                        }
                                                        static fetchJsonp(_url, options = {}) {
                                                            // to avoid param reassign
                                                            let url = _url;
                                                            const timeout = options.timeout || FetchJsonp.defaultOptions.timeout;
                                                            const jsonpCallback = options.jsonpCallback || FetchJsonp.defaultOptions.jsonpCallback;
                                                            let timeoutId;
                                                            return new Promise((resolve, reject) => {
                                                                const callbackFunction = options.jsonpCallbackFunction || FetchJsonp.generateCallbackFunction();
                                                                const scriptId = `${jsonpCallback}_${callbackFunction}`;
                                                                window[callbackFunction] = (response) => {
                                                                    resolve({
                                                                        ok: true,
                                                                        // keep consistent with fetch API
                                                                        json: () => Promise.resolve(response),
                                                                    });
                                                                    if (timeoutId)
                                                                        clearTimeout(timeoutId);
                                                                    FetchJsonp.removeScript(scriptId);
                                                                    FetchJsonp.clearFunction(callbackFunction);
                                                                };
                                                                // Check if the user set their own params, and if not add a ? to start a list of params
                                                                url += (url.indexOf('?') === -1) ? '?' : '&';
                                                                const jsonpScript = document.createElement('script');
                                                                jsonpScript.setAttribute('src', `${url}${jsonpCallback}=${callbackFunction}`);
                                                                if (options.charset) {
                                                                    jsonpScript.setAttribute('charset', options.charset);
                                                                }
                                                                jsonpScript.id = scriptId;
                                                                document.getElementsByTagName('head')[0].appendChild(jsonpScript);
                                                                timeoutId = setTimeout(() => {
                                                                    reject(new Error(`JSONP request to ${_url} timed out`));
                                                                    FetchJsonp.clearFunction(callbackFunction);
                                                                    FetchJsonp.removeScript(scriptId);
                                                                    window[callbackFunction] = () => {
                                                                        FetchJsonp.clearFunction(callbackFunction);
                                                                    };
                                                                }, timeout);
                                                                // Caught if got 404/500
                                                                jsonpScript.onerror = () => {
                                                                    reject(new Error(`JSONP request to ${_url} failed`));
                                                                    FetchJsonp.clearFunction(callbackFunction);
                                                                    FetchJsonp.removeScript(scriptId);
                                                                    if (timeoutId)
                                                                        clearTimeout(timeoutId);
                                                                };
                                                            });
                                                        }
                                                    }
                                                    exports.default = FetchJsonp;
                                                    FetchJsonp.defaultOptions = {
                                                        timeout: 5000,
                                                        jsonpCallback: 'callback',
                                                        jsonpCallbackFunction: null,
                                                    };
                                                }, {}], 26: [function(require, module, exports) {
                                                        "use strict";
                                                        Object.defineProperty(exports, "__esModule", {
                                                            value: true
                                                        });
                                                        window.jsonpBind = function(res) {
                                                            Utils.jsonpBind(JSON.stringify(res));
                                                        };
                                                        class Utils {
                                                            static formateDate(date) {
                                                                let dateObj = new Date(+date),
                                                                    hours = dateObj.getHours(),
                                                                    mins = dateObj.getMinutes(),
                                                                    secs = dateObj.getSeconds(),
                                                                    msecs = dateObj.getMilliseconds();
                                                                if (hours < 10) {
                                                                    hours = "0" + hours;
                                                                }
                                                                if (mins < 10) {
                                                                    mins = "0" + mins;
                                                                }
                                                                if (secs < 10) {
                                                                    secs = "0" + secs;
                                                                }
                                                                if (msecs < 10) {
                                                                    msecs = "00" + msecs;
                                                                } else if (msecs < 100 && msecs >= 10) {
                                                                    msecs = "0" + msecs;
                                                                }
                                                                return hours + "" + mins + "" + secs + "" + msecs;
                                                            }
                                                            static obtainLocal(ck) {
                                                                return ck.replace(/(?:(?:^|.*;\s*)3AB9D23F7A4B3C9B\s*=\s*([^;]*).*$)|^.*$/, "$1");
                                                            };
                                                            static getCookie() {
                                                                return document.cookie;
                                                            }
                                                            static formatDate(date) {
                                                                let dateObj = new Date(+date),
                                                                    year = dateObj.getFullYear(),
                                                                    month = dateObj.getMonth() + 1,
                                                                    day = dateObj.getDate(),
                                                                    hours = dateObj.getHours(),
                                                                    mins = dateObj.getMinutes(),
                                                                    secs = dateObj.getSeconds(),
                                                                    msecs = dateObj.getMilliseconds();
                                                                if (month < 10) {
                                                                    month = "0" + month;
                                                                }
                                                                if (day < 10) {
                                                                    day = "0" + day;
                                                                }
                                                                if (hours < 10) {
                                                                    hours = "0" + hours;
                                                                }
                                                                if (mins < 10) {
                                                                    mins = "0" + mins;
                                                                }
                                                                if (secs < 10) {
                                                                    secs = "0" + secs;
                                                                }
                                                                if (msecs < 10) {
                                                                    msecs = "00" + msecs;
                                                                } else if (msecs < 100 && msecs >= 10) {
                                                                    msecs = "0" + msecs;
                                                                }
                                                                return year + "" + month + "" + day + "" + hours + "" + mins + "" + secs + "" + msecs;
                                                            }
                                                            static GetQueryString(name) {
                                                                var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
                                                                var r = window.location.search.substr(1).match(reg);
                                                                if (!r) {
                                                                    let url = window.location.hash;
                                                                    r = url.substr(url.indexOf("?") + 1, url.length - url.indexOf("?")).match(reg);
                                                                }
                                                                if (r != null)
                                                                    return r[2];
                                                                return "";
                                                            }
                                                            static getSearchString(str, key) {
                                                                str = str.substring(1, str.length);
                                                                var arr = str.split("&");
                                                                var obj = new Object();
                                                                for (var i = 0; i < arr.length; i++) {
                                                                    var tmp_arr = arr[i].split("=");
                                                                    obj[decodeURIComponent(tmp_arr[0])] = decodeURIComponent(tmp_arr[1]);
                                                                }
                                                                return obj[key];
                                                            }
                                                            static getQueryStringByName(url) {
                                                                url = url.replace(/#.*/, ''); //removes hash (to avoid getting hash query)
                                                                var queryString = /\?[a-zA-Z0-9\=\&\%\$\-\_\.\+\!\*\'\(\)\,]+/.exec(url); //valid chars according to: http://www.ietf.org/rfc/rfc1738.txt
                                                                return (queryString) ? decodeURIComponent(queryString[0]) : '';
                                                            }
                                                            static formateTime(time) {
                                                                return Math.trunc(+(time.replace(/\s+/ig, "").replace(/[:|锛歖+/ig, "").replace(/[-|鈥斺€擼+/ig, "")));
                                                                        }
                                                                        static createJsonp(url, bind = false) {
                                                                            var jsonpScript = document.createElement('script');
                                                                            document.getElementsByTagName('head')[0].appendChild(jsonpScript);
                                                                            if (bind) {
                                                                                url += "jsonpBind";
                                                                            }
                                                                            jsonpScript.setAttribute('src', url);
                                                                            jsonpScript.onload = () => {
                                                                                document.getElementsByTagName('head')[0].removeChild(jsonpScript);
                                                                            };
                                                                        }
                                                                        static jsonpBind(res) {
                                                                            postMessage(res, '*');
                                                                        }
                                                                        static outPutLog(output, log, timeFlag = true) {
                                                                            if (output.parentElement.style.display == 'none') {
                                                                                output.parentElement.style.display = 'block';
                                                                            }
                                                                            if (timeFlag) {
                                                                                if (output.value) {
                                                                                    output.value = `${output.value}\n${new Date().toLocaleString()}\n${log}`;
                                                                                } else {
                                                                                    output.value = new Date().toLocaleString() + log;
                                                                                }
                                                                            } else {
                                                                                output.value = `${output.value}\n${log}`;
                                                                            }
                                                                            console.log(log);
                                                                        }
                                                                        static random(n, m) {
                                                                            return Math.floor(Math.random() * (m - n + 1) + n);
                                                                        }
                                                                        static getTimestamp() {
                                                                            return new Date().getTime();
                                                                        }
                                                                        static copyText(text) {
                                                                            if (text === "") {
                                                                                alert("濂藉儚娌℃湁闇€瑕佸鍒剁殑鍐呭鍝︼紒");
                                                                                return;
                                                                            }
                                                                            var oInput = document.querySelector('.oInput');
                                                                            if (!oInput) {
                                                                                oInput = document.createElement('input');
                                                                                oInput.className = 'oInput';
                                                                                document.body.appendChild(oInput);
                                                                            }
                                                                            oInput.value = "";
                                                                            oInput.value = text;
                                                                            oInput.select();
                                                                            document.execCommand("Copy");
                                                                            oInput.style.display = 'none';
                                                                            alert('鍐呭宸茬粡澶嶅埗鍒伴粡璐存澘鍟�');
                                                                        }
                                                                        static importFile(ext) {
                                                                            return new Promise((resolve, reject) => {
                                                                                let fInput = document.createElement('input');
                                                                                fInput.className = 'fInput';
                                                                                fInput.type = "file";
                                                                                document.body.appendChild(fInput);
                                                                                fInput.onchange = function(e) {
                                                                                    const file = e.target.files[0],
                                                                                        reader = new FileReader();
                                                                                    if (file && file.type.includes(ext)) {
                                                                                        reader.readAsText(file);
                                                                                    } else {
                                                                                        alert("涓嶆敮鎸佺殑鏂囦欢鏍煎紡!");
                                                                                        return;
                                                                                    }
                                                                                    reader.onabort = function() {
                                                                                        //璇诲彇涓柇
                                                                                        document.body.removeChild(fInput);
                                                                                    };
                                                                                    reader.onerror = function() {
                                                                                        //璇诲彇鍙戠敓閿欒
                                                                                        document.body.removeChild(fInput);
                                                                                    };
                                                                                    reader.onload = function() {
                                                                                        if (reader.readyState == 2) {
                                                                                            const result = reader.result;
                                                                                            resolve(result);
                                                                                            document.body.removeChild(fInput);
                                                                                        }
                                                                                    };
                                                                                };
                                                                                fInput.click();
                                                                                fInput.style.display = "none";
                                                                            });
                                                                        }
                                                                        static loadiFrame(url) {
                                                                            return new Promise(resolve => {
                                                                                var iframe = document.createElement('iframe');
                                                                                document.body.appendChild(iframe);
                                                                                iframe.width = "1";
                                                                                iframe.height = "1";
                                                                                iframe.onload = () => {
                                                                                    resolve(iframe);
                                                                                };
                                                                                iframe.src = url;
                                                                                iframe.style.display = 'none';
                                                                            });
                                                                        }
                                                                        static loadCss(url) {
                                                                            var link = document.createElement("link");
                                                                            link.type = "text/css";
                                                                            link.rel = "stylesheet";
                                                                            link.href = url;
                                                                            document.getElementsByTagName("head")[0].appendChild(link);
                                                                        }; static stringify(params) {
                                                                            return Object.keys(params).map((key) => {
                                                                                console.log();
                                                                                return `${key}=${this.isObject(params[key]) ? JSON.stringify(params[key]) : encodeURIComponent(params[key])}`;
                                                                            }).join("&");
                                                                        }
                                                                        static isObject(value) {
                                                                            let type = typeof value;
                                                                            return value != null && (type == 'object' || type == 'function');
                                                                        }
                                                                        static isNumber(obj) {
                                                                            return typeof obj === 'number' && !isNaN(obj);
                                                                        }
                                                                        // static HTMLfactory(type: string, attributes: any, parent: HTMLElement): HTMLElement {
                                                                        //     let ele: any = document.createElement(type);
                                                                        //     for (let k in attributes) {
                                                                        //         ele[k] = attributes[k];
                                                                        //     }
                                                                        //     parent.append(ele);
                                                                        //     return ele;
                                                                        // }
                                                                        static querySelector(dom) {
                                                                            return document.querySelector(dom);
                                                                        }
                                                                    }
                                                                    exports.default = Utils; exports._$ = Utils.querySelector;
                                                                }, {}]
                                                        }, {}, [24]);
