// { "framework": "Vue" }

"use weex:vue";


/******/
(function(modules) { // webpackBootstrap
    /******/ // The module cache
    /******/
    var installedModules = {};

    /******/ // The require function
    /******/
    function __webpack_require__(moduleId) {

        /******/ // Check if module is in cache
        /******/
        if (installedModules[moduleId])
        /******/
            return installedModules[moduleId].exports;

        /******/ // Create a new module (and put it into the cache)
        /******/
        var module = installedModules[moduleId] = {
            /******/
            exports: {},
            /******/
            id: moduleId,
            /******/
            loaded: false
                /******/
        };

        /******/ // Execute the module function
        /******/
        modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

        /******/ // Flag the module as loaded
        /******/
        module.loaded = true;

        /******/ // Return the exports of the module
        /******/
        return module.exports;
        /******/
    }


    /******/ // expose the modules object (__webpack_modules__)
    /******/
    __webpack_require__.m = modules;

    /******/ // expose the module cache
    /******/
    __webpack_require__.c = installedModules;

    /******/ // __webpack_public_path__
    /******/
    __webpack_require__.p = "";

    /******/ // Load entry module and return exports
    /******/
    return __webpack_require__(0);
    /******/
})
/************************************************************************/
/******/
([
    /* 0 */
    /***/
    (function(module, exports, __webpack_require__) {

        'use strict';

        var _App = __webpack_require__(1);

        var _App2 = _interopRequireDefault(_App);

        function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : {
                default: obj
            };
        }

        _App2.default.el = '#root';
        new Vue(_App2.default);

        /***/
    }),
    /* 1 */
    /***/
    (function(module, exports, __webpack_require__) {

        var __vue_exports__, __vue_options__
        var __vue_styles__ = []

        /* styles */
        __vue_styles__.push(__webpack_require__(2))

        /* script */
        __vue_exports__ = __webpack_require__(3)

        /* template */
        var __vue_template__ = __webpack_require__(4)
        __vue_options__ = __vue_exports__ = __vue_exports__ || {}
        if (
            typeof __vue_exports__.default === "object" ||
            typeof __vue_exports__.default === "function"
        ) {
            if (Object.keys(__vue_exports__).some(function(key) {
                    return key !== "default" && key !== "__esModule"
                })) {
                console.error("named exports are not supported in *.vue files.")
            }
            __vue_options__ = __vue_exports__ = __vue_exports__.default
        }
        if (typeof __vue_options__ === "function") {
            __vue_options__ = __vue_options__.options
        }
        __vue_options__.__file = "/usr/src/app/raw/146fab0752fb0f156dce7b394a754aab/App.vue"
        __vue_options__.render = __vue_template__.render
        __vue_options__.staticRenderFns = __vue_template__.staticRenderFns
        __vue_options__._scopeId = "data-v-1a9488a6"
        __vue_options__.style = __vue_options__.style || {}
        __vue_styles__.forEach(function(module) {
            for (var name in module) {
                __vue_options__.style[name] = module[name]
            }
        })
        if (typeof __register_static_styles__ === "function") {
            __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
        }

        module.exports = __vue_exports__


        /***/
    }),
    /* 2 */
    /***/
    (function(module, exports) {

        module.exports = {
            "list": {
                "width": "750",
                "backgroundColor": "#EFEFEF"
            },
            "row": {
                "flexDirection": "row"
            },
            "tab-cell": {
                "backgroundColor": "#f51438"
            },
            "tab": {
                "height": "120",
                "width": "150",
                "justifyContent": "center",
                "alignItems": "center"
            },
            "tab-icon": {
                "width": "45",
                "height": "45"
            },
            "tab-title": {
                "fontSize": "28",
                "color": "#FFFFFF",
                "marginTop": "10"
            },
            "banner-image": {
                "width": "750",
                "height": "235"
            },
            "app-cell": {
                "backgroundColor": "#FFFFFF"
            },
            "app-box": {
                "width": "180",
                "paddingTop": "15",
                "paddingBottom": "15",
                "paddingLeft": "15",
                "paddingRight": "15"
            },
            "app-title": {
                "width": "180",
                "fontSize": "30",
                "textAlign": "center",
                "paddingTop": "15",
                "color": "#999999"
            },
            "app-icon": {
                "width": "140",
                "height": "140",
                "marginLeft": "20"
            },
            "card": {
                "width": "710",
                "marginTop": "20",
                "marginRight": "20",
                "marginBottom": "20",
                "marginLeft": "20",
                "backgroundColor": "#FFFFFF",
                "borderRadius": "15"
            },
            "card-banner": {
                "width": "222",
                "height": "60"
            },
            "card-side": {
                "paddingTop": "20",
                "paddingRight": "20",
                "paddingBottom": "20",
                "paddingLeft": "20"
            },
            "card-poster": {
                "width": "230",
                "height": "230",
                "marginRight": "20"
            },
            "card-title": {
                "fontSize": "26",
                "color": "#666666",
                "marginTop": "10",
                "paddingBottom": "6"
            },
            "card-line": {
                "alignItems": "center",
                "paddingTop": "5",
                "paddingBottom": "5"
            },
            "card-icon": {
                "width": "36",
                "height": "36",
                "marginRight": "8"
            },
            "card-subtitle": {
                "fontSize": "28",
                "color": "#07152a"
            },
            "card-progress": {
                "flexDirection": "row",
                "alignItems": "center",
                "width": "230",
                "height": "30",
                "backgroundColor": "#FEC1C1",
                "borderRadius": "20",
                "marginTop": "10",
                "marginBottom": "10"
            },
            "card-progress-inner": {
                "position": "absolute",
                "height": "30",
                "left": 0,
                "borderRadius": "20",
                "backgroundColor": "#ff3c32"
            },
            "card-got": {
                "position": "absolute",
                "left": "8",
                "lineHeight": "30",
                "color": "#FFFFFF",
                "fontSize": "22"
            },
            "card-remain": {
                "position": "absolute",
                "right": "8",
                "lineHeight": "30",
                "color": "#FFFFFF",
                "fontSize": "22"
            },
            "card-info": {
                "width": "400",
                "flexDirection": "row",
                "alignItems": "flex-end"
            },
            "card-price": {
                "fontSize": "52",
                "color": "#ff3c32",
                "marginBottom": "-10",
                "marginTop": "10",
                "marginRight": "8"
            },
            "card-sale-price": {
                "fontSize": "28",
                "color": "#999999",
                "textDecoration": "line-through"
            },
            "card-btn": {
                "position": "absolute",
                "right": 0,
                "bottom": 0,
                "backgroundColor": "#ff5d62",
                "borderRadius": "8",
                "width": "125",
                "height": "52",
                "justifyContent": "center"
            },
            "card-btn-text": {
                "color": "#FFFFFF",
                "fontSize": "32",
                "textAlign": "center"
            },
            "floor": {
                "marginBottom": "15",
                "backgroundColor": "#FFFFFF"
            },
            "floor-title": {
                "fontSize": "40",
                "textAlign": "center",
                "paddingTop": "35",
                "paddingBottom": "25"
            },
            "floor-desc": {
                "lines": 2,
                "color": "#999999",
                "fontSize": "30",
                "paddingLeft": "30",
                "paddingRight": "30"
            },
            "floor-image-box": {
                "flexDirection": "row",
                "justifyContent": "space-between",
                "marginTop": "20"
            },
            "floor-image": {
                "width": "245",
                "height": "245"
            },
            "floor-comment": {
                "color": "#52bfe6",
                "fontSize": "32",
                "textAlign": "right",
                "paddingRight": "50",
                "marginTop": "25",
                "marginBottom": "20"
            }
        }

        /***/
    }),
    /* 3 */
    /***/
    (function(module, exports) {

        'use strict';

        Object.defineProperty(exports, "__esModule", {
            value: true
        });
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //

        var dataset = {
            apps: [{
                type: 'apps',
                apps: [{
                    title: '????????????',
                    icon: 'https://gw.alicdn.com/tfs/TB1wKS.h8fH8KJjy1XbXXbLdXXa-140-140.png_150x10000.jpg'
                }, {
                    title: '????????????',
                    icon: 'https://gw.alicdn.com/tfs/TB1oM1qaMvD8KJjy0FlXXagBFXa-140-140.png_150x10000.jpg'
                }, {
                    title: '?????????',
                    icon: 'https://gw.alicdn.com/tfs/TB1Oiz0b22H8KJjy0FcXXaDlFXa-140-140.png_150x10000.jpg'
                }, {
                    title: '????????????',
                    icon: 'https://gw.alicdn.com/tfs/TB1LhJzQFXXXXabXXXXXXXXXXXX-140-140.png_150x10000.jpg'
                }]
            }, {
                type: 'apps',
                apps: [{
                    title: '????????????',
                    icon: 'https://gw.alicdn.com/tfs/TB1L5upaH_I8KJjy1XaXXbsxpXa-140-140.png_150x10000.jpg'
                }, {
                    title: '????????????',
                    icon: 'https://gw.alicdn.com/tfs/TB1w.ocb3DD8KJjy0FdXXcjvXXa-140-140.png_150x10000.jpg'
                }, {
                    title: '????????????',
                    icon: 'https://img.alicdn.com/tfs/TB1sWLoRVXXXXbdXXXXXXXXXXXX-140-140.png'
                }, {
                    title: '????????????',
                    icon: 'https://gw.alicdn.com/tfs/TB10.R_SpXXXXbtXXXXXXXXXXXX-140-140.png'
                }]
            }, {
                type: 'apps',
                apps: [{
                    title: '????????????',
                    icon: 'https://img.alicdn.com/tfs/TB1fRVASpXXXXXdXXXXXXXXXXXX-140-140.png'
                }, {
                    title: '????????????',
                    icon: 'https://img.alicdn.com/tfs/TB1_TkdPVXXXXcJXXXXXXXXXXXX-140-140.png'
                }, {
                    title: '????????????',
                    icon: 'https://img.alicdn.com/tps/TB1goZhPXXXXXXfXpXXXXXXXXXX-118-118.png_170x120Q50s50.jpg'
                }, {
                    title: '????????????',
                    icon: 'https://img.alicdn.com/tps/TB1zUTQPXXXXXaZaXXXXXXXXXXX-118-118.png_170x120Q50s50.jpg'
                }]
            }],
            tab: [{
                type: 'tab',
                tabs: [{
                    title: '??????',
                    icon: 'https://gw.alicdn.com/tfs/TB19YESOVXXXXaNaXXXXXXXXXXX-45-45.png'
                }, {
                    title: '??????',
                    icon: 'https://gw.alicdn.com/tfs/TB1I2E9OVXXXXbFXVXXXXXXXXXX-45-45.png'
                }, {
                    title: '??????',
                    icon: 'https://gw.alicdn.com/tfs/TB1gUhyPXXXXXX5XXXXXXXXXXXX-45-45.png'
                }, {
                    title: '??????',
                    icon: 'https://img.alicdn.com/tfs/TB1D4RzQFXXXXcoXpXXXXXXXXXX-45-45.png'
                }, {
                    title: '??????',
                    icon: 'https://gw.alicdn.com/tfs/TB1N1.6OVXXXXXqaXXXXXXXXXXX-45-45.png'
                }]
            }],
            banner: [{
                type: 'banner',
                src: 'https://img.alicdn.com/imgextra/i4/184/TB2LPjVhMLD8KJjSszeXXaGRpXa_!!184-0-luban.jpg_q50.jpg'
            }, {
                type: 'banner',
                src: 'https://aecpm.alicdn.com/simba/img/TB1CWf9KpXXXXbuXpXXSutbFXXX.jpg_q50.jpg'
            }, {
                type: 'banner',
                src: 'https://aecpm.alicdn.com/simba/img/TB14ab1KpXXXXclXFXXSutbFXXX.jpg_q50.jpg'
            }, {
                type: 'banner',
                src: 'https://img.alicdn.com/imgextra/i4/61/TB24IbTh3fH8KJjy1zcXXcTzpXa_!!61-0-yamato.jpg_q50.jpg'
            }, {
                type: 'banner',
                src: 'https://gw.alicdn.com/imgextra/i2/145/TB24D30cMjN8KJjSZFkXXaboXXa_!!145-0-lubanu.jpg_q50.jpg'
            }, {
                type: 'banner',
                src: 'https://gw.alicdn.com/imgextra/i3/161/TB2syUXcJLO8KJjSZPcXXaV0FXa_!!161-0-lubanu.jpg_q50.jpg'
            }, {
                type: 'banner',
                src: 'https://gw.alicdn.com/imgextra/i4/167/TB2wrL8h26H8KJjSspmXXb2WXXa_!!167-0-lubanu.jpg_q50.jpg'
            }, {
                type: 'banner',
                src: 'https://gw.alicdn.com/imgextra/i2/25/TB2GgAmhS_I8KJjy0FoXXaFnVXa_!!25-0-lubanu.jpg_q50.jpg'
            }, {
                type: 'banner',
                src: 'https://gw.alicdn.com/imgextra/TB2uQAFhb_I8KJjy1XaXXbsxpXa_!!89-0-lubanu.jpg_q50.jpg'
            }, {
                type: 'banner',
                src: 'https://img.alicdn.com/simba/img/TB19heYdwn.PuJjSZFkSuw_lpXa.jpg_q50.jpg'
            }, {
                type: 'banner',
                src: 'https://aecpm.alicdn.com/simba/img/TB14ab1KpXXXXclXFXXSutbFXXX.jpg_q50.jpg'
            }, {
                type: 'banner',
                src: 'https://img.alicdn.com/imgextra/i1/174/TB2xzb0eOqAXuNjy1XdXXaYcVXa_!!174-0-luban.jpg_q50.jpg'
            }, {
                type: 'banner',
                src: 'https://gw.alicdn.com/imgextra/TB27XSvg6nD8KJjSspbXXbbEXXa_!!12-0-lubanu.jpg_q50.jpg'
            }, {
                type: 'banner',
                src: 'https://gw.alicdn.com/imgextra/TB2cF.xfTnI8KJjSszbXXb4KFXa_!!112-0-lubanu.jpg_q50.jpg'
            }, {
                type: 'banner',
                src: 'https://gw.alicdn.com/imgextra/TB2ZweVg9_I8KJjy0FoXXaFnVXa_!!158-0-lubanu.jpg_q50.jpg'
            }, {
                type: 'banner',
                src: 'https://gw.alicdn.com/imgextra/TB2O_AKctHO8KJjSZFtXXchfXXa_!!53-0-lubanu.jpg_q50.jpg'
            }],
            floor: [{
                type: 'floor',
                title: '????????????????????????????????????????????????',
                desc: '?????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????',
                pictures: ['https://gw.alicdn.com/tfscom/i3/48292642/TB29OtIakz_F1JjSZFkXXcCaXXa_!!48292642.jpg_250x250q90s200.jpg', 'https://gw.alicdn.com/imgextra/i4/706778912/TB2hvwSXBvBIuJjy1zeXXbGBpXa_!!706778912-0-beehive-scenes.jpg_250x250q90s200.jpg', 'https://gw.alicdn.com/imgextra/i3/706778912/TB2wX.fcxz9F1JjSZFsXXaCGVXa_!!706778912-0-beehive-scenes.jpg_250x250q90s200.jpg'],
                count: 237
            }, {
                type: 'floor',
                title: '????????????????????????????????????',
                desc: '???Ihatemynightgown???????????????????????????.???????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????',
                pictures: ['https://gw.alicdn.com/imgextra/i3/3044653839/TB2a_nAXgsSMeJjSspdXXXZ4pXa_!!3044653839-0-daren.jpg_250x250q90s200.jpg', 'https://gw.alicdn.com/imgextra/i1/3044653839/TB2qrPCXiERMeJjSspiXXbZLFXa_!!3044653839-0-daren.jpg_250x250q90s200.jpg', 'https://gw.alicdn.com/imgextra/i1/3044653839/TB2ySjuXgsSMeJjSspeXXa77VXa_!!3044653839-0-beehive-scenes.jpg_250x250q90s200.jpg'],
                count: 876
            }, {
                type: 'floor',
                title: '???????????????????????????????????????',
                desc: '??????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????',
                pictures: ['https://gw.alicdn.com/tfscom/i3/462856946/TB2VzQswB4lpuFjy1zjXXcAKpXa_!!462856946.jpg_250x250q90s200.jpg', 'https://gw.alicdn.com/tfscom/i2/2811920170/TB2rCqHpVXXXXcZXpXXXXXXXXXX_!!2811920170.png_250x250.jpg', 'https://gw.alicdn.com/imgextra/i4/836552381/TB2c1q3aZSfF1JjSsplXXbrKFXa_!!836552381-0-beehive-scenes.jpg_250x250q90s200.jpg'],
                count: 59
            }, {
                type: 'floor',
                title: '?????????????????????????????????????????????',
                desc: '??????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????Bacon?????????????????????????????????????????????????????????',
                pictures: ['https://gw.alicdn.com/imgextra/i2/603964020/TB24zFbarwTMeJjSszfXXXbtFXa_!!603964020-0-daren.jpg_250x250q90s200.jpg', 'https://gw.alicdn.com/imgextra/i2/603964020/TB2txtdarsTMeJjy1zcXXXAgXXa_!!603964020-0-daren.jpg_250x250q90s200.jpg', 'https://gw.alicdn.com/tfscom/i3/1635378022/TB2plKDbFXXXXaTXpXXXXXXXXXX-1635378022.jpg_250x250q90s200.jpg'],
                count: 3576
            }, {
                type: 'floor',
                title: '?????????????????????????????????????????????',
                desc: '????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????',
                pictures: ['https://gw.alicdn.com/imgextra/i2/787557947/TB2erNKawoQMeJjy0FoXXcShVXa_!!787557947-0-beehive-scenes.jpg_250x250q90s200.jpg', 'https://gw.alicdn.com/imgextra/i1/787557947/TB2KANyaBUSMeJjy1zkXXaWmpXa_!!787557947-0-beehive-scenes.jpg_250x250q90s200.jpg', 'https://gw.alicdn.com/imgextra/i3/787557947/TB2lwdGayERMeJjy0FcXXc7opXa_!!787557947-0-beehive-scenes.jpg_250x250q90s200.jpg'],
                count: 36
            }, {
                type: 'floor',
                title: '???????????????????????????????????????',
                desc: '????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????',
                pictures: ['https://gw.alicdn.com/imgextra/i2/1904229646/TB2dRg4dgoQMeJjy0FpXXcTxpXa_!!1904229646-2-daren.png_250x250.jpg', 'https://gw.alicdn.com/imgextra/i1/1904229646/TB2JtOjfOAKL1JjSZFoXXagCFXa_!!1904229646-2-daren.png_250x250.jpg', 'https://gw.alicdn.com/imgextra/i1/1904229646/TB2BSXjdwsSMeJjSspeXXa77VXa_!!1904229646-2-daren.png_250x250.jpg'],
                count: 74
            }, {
                type: 'floor',
                title: '?????????????????????????????????????????????',
                desc: '???????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????4000?????????????????????????????????????????????????????????????????????????????????',
                pictures: ['https://gw.alicdn.com/imgextra/i1/2872639756/TB21lwtXjihSKJjy0FiXXcuiFXa_!!2872639756-0-daren.jpg_250x250q90s200.jpg', 'https://gw.alicdn.com/imgextra/i1/2872639756/TB2zgRJdwMPMeJjy1XdXXasrXXa_!!2872639756-0-daren.jpg_250x250q90s200.jpg', 'https://gw.alicdn.com/imgextra/i2/2872639756/TB2Ki0NdBUSMeJjSspfXXX0VFXa_!!2872639756-0-daren.jpg_250x250q90s200.jpg'],
                count: 182
            }],
            card: [{
                type: 'card',
                poster: 'http://gw.alicdn.com/tps/i4/1611893164/TB2t4mtXJqUQKJjSZFIXXcOkFXa_!!0-juitemmedia.jpg_320x320q80s150.jpg',
                title: '????????????10???????????????????????????',
                subtitle1: '???????????????3000???78',
                subtitle2: '???????????? ????????????',
                got: 173,
                progress: 35,
                price: {
                    real: 108,
                    sale: 240.00
                }
            }, {
                type: 'card',
                poster: 'http://gw.alicdn.com/tps/i2/2838892713/TB2ma39aqmgSKJjSsphXXcy1VXa_!!0-juitemmedia.jpg_320x320q80s150.jpg',
                title: 'HUAWEI P10',
                subtitle1: '????????????6?????????',
                subtitle2: '6?????????',
                got: 996,
                progress: 89,
                price: {
                    real: 3488,
                    sale: 3488.00
                }
            }, {
                type: 'card',
                poster: 'http://gw.alicdn.com/tps/i3/902257410/TB2pzypfU3IL1JjSZFMXXajrFXa_!!0-juitemmedia.jpg_320x320q80s150.jpg',
                title: '??????????????????????????????????????????',
                subtitle1: '??????????????????438',
                subtitle2: '??????500????????????',
                got: 296,
                progress: 16,
                price: {
                    real: 538,
                    sale: 3080.00
                }
            }, {
                type: 'card',
                poster: 'https://gw.alicdn.com/tps/i4/0/TB2Mx3Jg4TI8KJjSspiXXbM4FXa_!!0-juitemmedia.jpg_320x320q80s150.jpg',
                title: '??????????????????????????????????????????',
                subtitle1: '???108????????????10???',
                subtitle2: '???????????????????????????',
                got: 1457,
                progress: 61,
                price: {
                    real: 49,
                    sale: 69.80
                }
            }, {
                type: 'card',
                poster: 'https://gw.alicdn.com/tps/i2/0/TB2i25DgN6I8KJjSszfXXaZVXXa_!!0-juitemmedia.jpg_320x320q80s150.jpg',
                title: '???????????????????????????????????????',
                subtitle1: '???3????????????',
                subtitle2: 'VC????????????????????????',
                got: 598,
                progress: 42,
                price: {
                    real: 29.8,
                    sale: 56.10
                }
            }]

            // generate list data
        };

        function createListData(order) {
            var array = [];
            var list = order.split(/[\s,]+/);
            for (var i = 0; i < list.length; ++i) {
                var candidates = dataset[list[i]];
                if (candidates) {
                    var idx = Math.floor(Math.random() * candidates.length);
                    array.push(candidates[idx]);
                }
            }
            return array;
        }

        exports.default = {
            data: function data() {
                var blockList = 'tab,banner,apps,apps,banner,card,floor,floor' + ',tab,apps,apps,banner,card,card,banner,floor,floor,floor' + ',tab,banner,card,apps,banner,card,floor,floor,floor,floor,floor' + ',tab,apps,banner,card,banner,floor,floor,floor' + ',tab,apps,apps,card,floor,card,banner,floor,floor' + ',tab,banner,card,apps,banner,card,floor,floor,floor,floor' + ',tab,apps,banner,card,card,apps,floor,floor,floor';
                var order = blockList + ',' + blockList + ',' + blockList + ',' + blockList;
                return {
                    longList: createListData(order)
                };
            }
        };

        /***/
    }),
    /* 4 */
    /***/
    (function(module, exports) {

        module.exports = {
            render: function() {
                var _vm = this;
                var _h = _vm.$createElement;
                var _c = _vm._self._c || _h;
                return _c('list', {
                    staticClass: ["list"]
                }, [_vm._l((_vm.longList), function(item, index) {
                    return [(item.type === 'tab') ? _c('cell', {
                        key: index,
                        staticClass: ["tab-cell", "row"],
                        appendAsTree: true,
                        attrs: {
                            "append": "tree"
                        }
                    }, _vm._l((item.tabs), function(tab, t) {
                        return _c('div', {
                            key: t,
                            staticClass: ["tab"]
                        }, [_c('image', {
                            staticClass: ["tab-icon"],
                            attrs: {
                                "src": tab.icon
                            }
                        }), _c('text', {
                            staticClass: ["tab-title"]
                        }, [_vm._v(_vm._s(tab.title))])])
                    })) : _vm._e(), (item.type === 'banner') ? _c('cell', {
                        key: index,
                        staticClass: ["banner-cell"],
                        appendAsTree: true,
                        attrs: {
                            "append": "tree"
                        }
                    }, [_c('image', {
                        staticClass: ["banner-image"],
                        attrs: {
                            "src": item.src
                        }
                    })]) : _vm._e(), (item.type === 'apps') ? _c('cell', {
                        key: index,
                        staticClass: ["app-cell", "row"],
                        appendAsTree: true,
                        attrs: {
                            "append": "tree"
                        }
                    }, _vm._l((item.apps), function(app, a) {
                        return _c('div', {
                            key: a,
                            staticClass: ["app-box"]
                        }, [_c('image', {
                            staticClass: ["app-icon"],
                            attrs: {
                                "src": app.icon
                            }
                        }), _c('text', {
                            staticClass: ["app-title"]
                        }, [_vm._v(_vm._s(app.title))])])
                    })) : _vm._e(), (item.type === 'card') ? _c('cell', {
                        key: index,
                        staticClass: ["card-cell"],
                        appendAsTree: true,
                        attrs: {
                            "append": "tree"
                        }
                    }, [_c('div', {
                        staticClass: ["card"]
                    }, [_vm._m(0, true, false), _c('div', {
                        staticClass: ["row"],
                        staticStyle: {
                            paddingBottom: "18px"
                        }
                    }, [_c('div', {
                        staticClass: ["card-side"]
                    }, [_c('image', {
                        staticClass: ["card-poster"],
                        attrs: {
                            "src": item.poster
                        }
                    })]), _c('div', {
                        staticClass: ["card-message"]
                    }, [_c('text', {
                        staticClass: ["card-title"]
                    }, [_vm._v(_vm._s(item.title))]), _c('div', {
                        staticClass: ["card-line", "row"]
                    }, [_c('image', {
                        staticClass: ["card-icon"],
                        attrs: {
                            "src": "//ossgw.alicdn.com/img/upload/0a4946e164acd1f81e97ddbc048afcc5/Group13-69-69.png@22w_22h_80Q.png"
                        }
                    }), _c('text', {
                        staticClass: ["card-subtitle"]
                    }, [_vm._v(_vm._s(item.subtitle1))])]), _c('div', {
                        staticClass: ["card-line", "row"]
                    }, [_c('image', {
                        staticClass: ["card-icon"],
                        attrs: {
                            "src": "//ossgw.alicdn.com/img/upload/0a4946e164acd1f81e97ddbc048afcc5/Group13-69-69.png@22w_22h_80Q.png"
                        }
                    }), _c('text', {
                        staticClass: ["card-subtitle"]
                    }, [_vm._v(_vm._s(item.subtitle2))])]), _c('div', {
                        staticClass: ["card-progress", "row"]
                    }, [_c('div', {
                        staticClass: ["card-progress-inner"],
                        style: {
                            width: item.progress * 230 / 100
                        }
                    }), _c('text', {
                        staticClass: ["card-got"]
                    }, [_vm._v("?????? " + _vm._s(item.got) + " ???")]), _c('text', {
                        staticClass: ["card-remain"]
                    }, [_vm._v(_vm._s(item.progress) + " %")])]), _c('div', {
                        staticClass: ["card-info", "row"]
                    }, [_c('text', {
                        staticClass: ["card-price"]
                    }, [_vm._v("?? " + _vm._s(item.price.real))]), _c('text', {
                        staticClass: ["card-sale-price"]
                    }, [_vm._v("?? " + _vm._s(item.price.sale))]), _vm._m(1, true, false)])])])])]) : _vm._e(), (item.type === 'floor') ? _c('cell', {
                        key: index,
                        staticClass: ["floor-cell"],
                        appendAsTree: true,
                        attrs: {
                            "append": "tree"
                        }
                    }, [_c('div', {
                        staticClass: ["floor"]
                    }, [_c('text', {
                        staticClass: ["floor-title"]
                    }, [_vm._v(_vm._s(item.title))]), _c('text', {
                        staticClass: ["floor-desc"],
                        attrs: {
                            "lines": "2"
                        }
                    }, [_vm._v(_vm._s(item.desc))]), _c('div', {
                        staticClass: ["floor-image-box", "row"]
                    }, _vm._l((item.pictures), function(source, x) {
                        return _c('image', {
                            key: x,
                            staticClass: ["floor-image"],
                            attrs: {
                                "src": source
                            }
                        })
                    })), (item.count) ? _c('text', {
                        staticClass: ["floor-comment"]
                    }, [_vm._v(_vm._s(item.count) + " ?????????")]) : _vm._e()])]) : _vm._e(), (item.type === 'chat') ? _c('cell', {
                        key: index,
                        staticClass: ["chat-cell"],
                        appendAsTree: true,
                        attrs: {
                            "append": "tree"
                        }
                    }, [_c('text', {
                        staticClass: ["banner-title"]
                    }, [_vm._v("chat")])]) : _vm._e()]
                })], 2)
            },
            staticRenderFns: [function() {
                var _vm = this;
                var _h = _vm.$createElement;
                var _c = _vm._self._c || _h;
                return _c('div', {
                    staticStyle: {
                        height: "60px",
                        paddingLeft: "30"
                    }
                }, [_c('image', {
                    staticClass: ["card-banner"],
                    attrs: {
                        "src": "//img.alicdn.com/tfs/TB1moeURFXXXXasXXXXXXXXXXXX-390-105.png"
                    }
                })])
            }, function() {
                var _vm = this;
                var _h = _vm.$createElement;
                var _c = _vm._self._c || _h;
                return _c('div', {
                    staticClass: ["card-btn"]
                }, [_c('text', {
                    staticClass: ["card-btn-text"]
                }, [_vm._v("?????????")])])
            }]
        }
        module.exports.render._withStripped = true

        /***/
    })
    /******/
]);