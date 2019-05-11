webpackJsonp([33],{"6NqX":function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={props:{data:{}},data:function(){return{loading:!1}},methods:{change:function(e){!1===e&&this.$emit("on-change")}}}},"8i7c":function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.Validator=function(e){var t=[{required:!0,type:"number",message:"不能为空",trigger:"change"}];return{driver_sign_before_time:t,driver_sign_after_time:t,driver_sign_radius:t,driver_dispatch_after_warehouse:t,master_driver_not_dispatch_before_warehouse:t,temp_driver_not_dispatch_before_warehouse:t,master_driver_task_free_driver_before_warehouse:t,temp_driver_task_free_driver_before_warehouse:t,master_driver_quote_latest_time:t,master_driver_reach_earliest_time:t,change_master_driver_latest_time_before_work:t,master_driver_quote_lastest_time:t,master_driver_quote_time_more_now:t,master_driver_quote_time_add:t,master_driver_quote_time_sub:t,temp_driver_quote_earliest_time:t,temp_driver_reach_earliest_time:t,change_temp_driver_latest_time_before_work:t,temp_driver_quote_lastest_time:t,temp_driver_quote_time_more_now:t,temp_driver_quote_time_more_add:t,temp_driver_quote_time_more_sub:t,task_conflict_time:t,percentage:t,update_offer_count:t,cancel_offer_count:t,cancel_offer_frozen_time:t,sms_before_warehouse_time:t}}},BvKt:function(e,t,r){var _=r("VU/8")(r("Mo8j"),r("m8Ug"),!1,function(e){r("fajs")},null,null);e.exports=_.exports},Mo8j:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var _=r("8i7c"),a=i(r("xi7R")),o=i(r("nf43")),s=i(r("6NqX"));function i(e){return e&&e.__esModule?e:{default:e}}t.default={name:"index",mixins:[a.default,o.default,s.default],data:function(){return{formUpdate:{driver_sign_before_time:0,driver_sign_after_time:0,driver_sign_radius:0,driver_dispatch_after_warehouse:0,master_driver_not_dispatch_before_warehouse:0,temp_driver_not_dispatch_before_warehouse:0,master_driver_task_free_driver_before_warehouse:0,temp_driver_task_free_driver_before_warehouse:0,master_driver_quote_latest_time:0,master_driver_reach_earliest_time:0,change_master_driver_latest_time_before_work:0,master_driver_quote_lastest_time:0,master_driver_quote_time_more_now:0,master_driver_quote_time_add:0,master_driver_quote_time_sub:0,temp_driver_quote_earliest_time:0,temp_driver_reach_earliest_time:0,change_temp_driver_latest_time_before_work:0,temp_driver_quote_lastest_time:0,temp_driver_quote_time_more_now:0,temp_driver_quote_time_more_add:0,temp_driver_quote_time_more_sub:0,task_conflict_time:0,percentage:0,update_offer_count:0,cancel_offer_count:0,cancel_offer_frozen_time:0,is_send_leader:0,sms_before_warehouse_time:0},configUpdate:(0,_.Validator)(this)}},mounted:function(){this.$nextTick(function(){var e=this;this.$http.get("config/index").then(function(t){e.formUpdate=Object.assign(e.unObserver(e.formUpdate),t.data.data)}).catch(function(t){e.formatErrors(t)})})}}},fajs:function(e,t,r){var _=r("iSoz");"string"==typeof _&&(_=[[e.i,_,""]]),_.locals&&(e.exports=_.locals);r("rjj0")("e2b2e292",_,!0,{})},iSoz:function(e,t,r){var _=r("r20J");"string"==typeof _&&(_=[[e.i,_,""]]);var a={hmr:!0,transform:void 0,insertInto:void 0};r("MTIv")(_,a);_.locals&&(e.exports=_.locals)},m8Ug:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("Card",[r("p",{attrs:{slot:"title"},slot:"title"},[r("Icon",{attrs:{type:"ios-settings-strong"}}),e._v("\n            系统配置\n        ")],1),e._v(" "),r("div",[r("Form",{ref:"formUpdate",attrs:{model:e.formUpdate,"label-width":335,rules:e.configUpdate}},[r("Card",[r("p",[r("Icon",{attrs:{type:"ios-list-outline"}}),e._v("\n                        基本设置\n                    ")],1),e._v(" "),r("FormItem",{attrs:{label:"允许司机签到时间为到仓前："}},[r("Row",[r("Col",{attrs:{span:"3"}},[r("FormItem",{attrs:{prop:"driver_sign_before_time"}},[r("InputNumber",{attrs:{min:0,step:.1},model:{value:e.formUpdate.driver_sign_before_time,callback:function(t){e.$set(e.formUpdate,"driver_sign_before_time",t)},expression:"formUpdate.driver_sign_before_time"}}),e._v("\n                                小时， 到仓后\n                            ")],1)],1),e._v(" "),r("FormItem",{attrs:{prop:"driver_sign_after_time"}},[r("InputNumber",{attrs:{min:0,step:.1},model:{value:e.formUpdate.driver_sign_after_time,callback:function(t){e.$set(e.formUpdate,"driver_sign_after_time",t)},expression:"formUpdate.driver_sign_after_time"}}),e._v("\n                                小时\n                            ")],1)],1)],1),e._v(" "),r("FormItem",{attrs:{label:"允许司机签到范围为仓库半径：",prop:"driver_sign_radius"}},[r("InputNumber",{attrs:{min:0,step:.1},model:{value:e.formUpdate.driver_sign_radius,callback:function(t){e.$set(e.formUpdate,"driver_sign_radius",t)},expression:"formUpdate.driver_sign_radius"}}),e._v("\n                        公里\n                    ")],1),e._v(" "),r("FormItem",{attrs:{label:"允许司机操作配送完成为离仓后：",prop:"driver_dispatch_after_warehouse"}},[r("InputNumber",{attrs:{min:0,step:.1},model:{value:e.formUpdate.driver_dispatch_after_warehouse,callback:function(t){e.$set(e.formUpdate,"driver_dispatch_after_warehouse",t)},expression:"formUpdate.driver_dispatch_after_warehouse"}}),e._v("\n                        小时\n                    ")],1),e._v(" "),r("FormItem",{attrs:{label:"主司机设置不配送需要在到仓前：",prop:"master_driver_not_dispatch_before_warehouse"}},[r("InputNumber",{attrs:{min:0,step:.1},model:{value:e.formUpdate.master_driver_not_dispatch_before_warehouse,callback:function(t){e.$set(e.formUpdate,"master_driver_not_dispatch_before_warehouse",t)},expression:"formUpdate.master_driver_not_dispatch_before_warehouse"}}),e._v("\n                        小时\n                    ")],1),e._v(" "),r("FormItem",{attrs:{label:"临时司机设置不配送需要在到仓前：",prop:"temp_driver_not_dispatch_before_warehouse"}},[r("InputNumber",{attrs:{min:0,step:.1},model:{value:e.formUpdate.temp_driver_not_dispatch_before_warehouse,callback:function(t){e.$set(e.formUpdate,"temp_driver_not_dispatch_before_warehouse",t)},expression:"formUpdate.temp_driver_not_dispatch_before_warehouse"}}),e._v("\n                        小时\n                    ")],1),e._v(" "),r("FormItem",{attrs:{label:"主司机任务无责任解约司机需要在到仓前：",prop:"master_driver_task_free_driver_before_warehouse"}},[r("InputNumber",{attrs:{min:0,step:.1},model:{value:e.formUpdate.master_driver_task_free_driver_before_warehouse,callback:function(t){e.$set(e.formUpdate,"master_driver_task_free_driver_before_warehouse",t)},expression:"formUpdate.master_driver_task_free_driver_before_warehouse"}}),e._v("\n                        小时\n                    ")],1),e._v(" "),r("FormItem",{attrs:{label:"临时司机任务无责任解约司机需要在到仓前：",prop:"temp_driver_task_free_driver_before_warehouse"}},[r("InputNumber",{attrs:{min:0,step:.1},model:{value:e.formUpdate.temp_driver_task_free_driver_before_warehouse,callback:function(t){e.$set(e.formUpdate,"temp_driver_task_free_driver_before_warehouse",t)},expression:"formUpdate.temp_driver_task_free_driver_before_warehouse"}}),e._v("\n                        小时\n                    ")],1)],1),e._v(" "),r("Card",[r("p",[r("Icon",{attrs:{type:"ios-list-outline"}}),e._v("\n                        主司机（任务）时间设置\n                    ")],1),e._v(" "),r("FormItem",{attrs:{label:"最早报价截止时间：",prop:"master_driver_quote_latest_time"}},[r("InputNumber",{attrs:{min:0,step:.1},model:{value:e.formUpdate.master_driver_quote_latest_time,callback:function(t){e.$set(e.formUpdate,"master_driver_quote_latest_time",t)},expression:"formUpdate.master_driver_quote_latest_time"}}),e._v("\n                        小时\n                    ")],1),e._v(" "),r("FormItem",{attrs:{label:"最早到仓时间：",prop:"master_driver_reach_earliest_time"}},[r("InputNumber",{attrs:{min:0,step:.1},model:{value:e.formUpdate.master_driver_reach_earliest_time,callback:function(t){e.$set(e.formUpdate,"master_driver_reach_earliest_time",t)},expression:"formUpdate.master_driver_reach_earliest_time"}}),e._v("\n                        小时\n                    ")],1),e._v(" "),r("FormItem",{attrs:{label:"选司机截止时间为上岗前：",prop:"change_master_driver_latest_time_before_work"}},[r("InputNumber",{attrs:{min:0,step:.1},model:{value:e.formUpdate.change_master_driver_latest_time_before_work,callback:function(t){e.$set(e.formUpdate,"change_master_driver_latest_time_before_work",t)},expression:"formUpdate.change_master_driver_latest_time_before_work"}}),e._v("\n                        小时\n                    ")],1),e._v(" "),r("FormItem",{attrs:{label:"司机报价最晚截止时间：",prop:"master_driver_quote_lastest_time"}},[r("InputNumber",{attrs:{min:0,step:.1},model:{value:e.formUpdate.master_driver_quote_lastest_time,callback:function(t){e.$set(e.formUpdate,"master_driver_quote_lastest_time",t)},expression:"formUpdate.master_driver_quote_lastest_time"}}),e._v("\n                        小时\n                    ")],1),e._v(" "),r("FormItem",{attrs:{label:"默认司机报价截止时间，如果到仓时间距离现在时间大于："}},[r("Row",[r("Col",{attrs:{span:"4"}},[r("FormItem",{attrs:{prop:"master_driver_quote_time_more_now"}},[r("InputNumber",{attrs:{min:0,step:.1},model:{value:e.formUpdate.master_driver_quote_time_more_now,callback:function(t){e.$set(e.formUpdate,"master_driver_quote_time_more_now",t)},expression:"formUpdate.master_driver_quote_time_more_now"}}),e._v("\n                                小时， 则现在时间加\n                            ")],1)],1),e._v(" "),r("Col",{attrs:{span:"5"}},[r("FormItem",{attrs:{prop:"master_driver_quote_time_add"}},[r("InputNumber",{attrs:{min:0,step:.1},model:{value:e.formUpdate.master_driver_quote_time_add,callback:function(t){e.$set(e.formUpdate,"master_driver_quote_time_add",t)},expression:"formUpdate.master_driver_quote_time_add"}}),e._v("\n                                小时； 如果小于，则到仓时间减\n                            ")],1)],1),e._v(" "),r("FormItem",{attrs:{prop:"master_driver_quote_time_sub"}},[r("InputNumber",{attrs:{min:0,step:.1},model:{value:e.formUpdate.master_driver_quote_time_sub,callback:function(t){e.$set(e.formUpdate,"master_driver_quote_time_sub",t)},expression:"formUpdate.master_driver_quote_time_sub"}}),e._v("\n                                小时\n                            ")],1)],1)],1)],1),e._v(" "),r("Card",[r("p",[r("Icon",{attrs:{type:"ios-list-outline"}}),e._v("\n                        临时司机（任务）时间设置\n                    ")],1),e._v(" "),r("FormItem",{attrs:{label:"最早报价截止时间：",prop:"temp_driver_quote_earliest_time"}},[r("InputNumber",{attrs:{min:0,step:.1},model:{value:e.formUpdate.temp_driver_quote_earliest_time,callback:function(t){e.$set(e.formUpdate,"temp_driver_quote_earliest_time",t)},expression:"formUpdate.temp_driver_quote_earliest_time"}}),e._v("\n                        小时\n                    ")],1),e._v(" "),r("FormItem",{attrs:{label:"最早到仓时间：",prop:"temp_driver_reach_earliest_time"}},[r("InputNumber",{attrs:{min:0,step:.1},model:{value:e.formUpdate.temp_driver_reach_earliest_time,callback:function(t){e.$set(e.formUpdate,"temp_driver_reach_earliest_time",t)},expression:"formUpdate.temp_driver_reach_earliest_time"}}),e._v("\n                        小时\n                    ")],1),e._v(" "),r("FormItem",{attrs:{label:"选司机截止时间为司机报价截止后：",prop:"change_temp_driver_latest_time_before_work"}},[r("InputNumber",{attrs:{min:0,step:.1},model:{value:e.formUpdate.change_temp_driver_latest_time_before_work,callback:function(t){e.$set(e.formUpdate,"change_temp_driver_latest_time_before_work",t)},expression:"formUpdate.change_temp_driver_latest_time_before_work"}}),e._v("\n                        小时\n                    ")],1),e._v(" "),r("FormItem",{attrs:{label:"司机报价最晚截止时间：",prop:"temp_driver_quote_lastest_time"}},[r("InputNumber",{attrs:{min:0,step:.1},model:{value:e.formUpdate.temp_driver_quote_lastest_time,callback:function(t){e.$set(e.formUpdate,"temp_driver_quote_lastest_time",t)},expression:"formUpdate.temp_driver_quote_lastest_time"}}),e._v("\n                        小时\n                    ")],1),e._v(" "),r("FormItem",{attrs:{label:"默认司机报价截止时间，如果到仓时间距离现在时间大于："}},[r("Row",[r("Col",{attrs:{span:"4"}},[r("FormItem",{attrs:{prop:"temp_driver_quote_time_more_now"}},[r("InputNumber",{attrs:{min:0,step:.1},model:{value:e.formUpdate.temp_driver_quote_time_more_now,callback:function(t){e.$set(e.formUpdate,"temp_driver_quote_time_more_now",t)},expression:"formUpdate.temp_driver_quote_time_more_now"}}),e._v("\n                                小时， 则现在时间加\n                            ")],1)],1),e._v(" "),r("Col",{attrs:{span:"5"}},[r("FormItem",{attrs:{prop:"temp_driver_quote_time_more_add"}},[r("InputNumber",{attrs:{min:0,step:.1},model:{value:e.formUpdate.temp_driver_quote_time_more_add,callback:function(t){e.$set(e.formUpdate,"temp_driver_quote_time_more_add",t)},expression:"formUpdate.temp_driver_quote_time_more_add"}}),e._v("\n                                小时； 如果小于，则到仓时间减\n                            ")],1)],1),e._v(" "),r("FormItem",{attrs:{prop:"temp_driver_quote_time_more_sub"}},[r("InputNumber",{attrs:{min:0,step:.1},model:{value:e.formUpdate.temp_driver_quote_time_more_sub,callback:function(t){e.$set(e.formUpdate,"temp_driver_quote_time_more_sub",t)},expression:"formUpdate.temp_driver_quote_time_more_sub"}}),e._v("\n                                小时\n                            ")],1)],1)],1)],1),e._v(" "),r("Card",[r("p",[r("Icon",{attrs:{type:"ios-list-outline"}}),e._v("\n                        其他项\n                    ")],1),e._v(" "),r("FormItem",{attrs:{label:"任务冲突时间：",prop:"task_conflict_time"}},[r("InputNumber",{attrs:{min:0,step:.1},model:{value:e.formUpdate.task_conflict_time,callback:function(t){e.$set(e.formUpdate,"task_conflict_time",t)},expression:"formUpdate.task_conflict_time"}}),e._v("\n                        小时\n                    ")],1),e._v(" "),r("FormItem",{attrs:{label:"管理费提成比率(报价的X%)：",prop:"percentage"}},[r("InputNumber",{attrs:{min:0,step:.1},model:{value:e.formUpdate.percentage,callback:function(t){e.$set(e.formUpdate,"percentage",t)},expression:"formUpdate.percentage"}}),e._v("\n                        %\n                    ")],1),e._v(" "),r("FormItem",{attrs:{label:"司机报价可修改次数：",prop:"update_offer_count"}},[r("InputNumber",{attrs:{min:0,step:1},model:{value:e.formUpdate.update_offer_count,callback:function(t){e.$set(e.formUpdate,"update_offer_count",t)},expression:"formUpdate.update_offer_count"}}),e._v("\n                        次\n                    ")],1),e._v(" "),r("FormItem",{attrs:{label:"司机第："}},[r("Row",[r("Col",{attrs:{span:"5"}},[r("FormItem",{attrs:{prop:"cancel_offer_count"}},[r("InputNumber",{attrs:{min:0,step:1},model:{value:e.formUpdate.cancel_offer_count,callback:function(t){e.$set(e.formUpdate,"cancel_offer_count",t)},expression:"formUpdate.cancel_offer_count"}}),e._v("\n                                次取消后，会被加入黑名单\n                            ")],1)],1),e._v(" "),r("FormItem",{attrs:{prop:"cancel_offer_frozen_time"}},[r("InputNumber",{attrs:{min:0,step:1},model:{value:e.formUpdate.cancel_offer_frozen_time,callback:function(t){e.$set(e.formUpdate,"cancel_offer_frozen_time",t)},expression:"formUpdate.cancel_offer_frozen_time"}}),e._v("\n                                天内不能报价\n                            ")],1)],1)],1),e._v(" "),r("FormItem",{attrs:{label:"给所属队长发送未签到短信：",prop:"is_send_leader"}},[r("i-switch",{attrs:{"true-value":1,"false-value":0,size:"large"},model:{value:e.formUpdate.is_send_leader,callback:function(t){e.$set(e.formUpdate,"is_send_leader",t)},expression:"formUpdate.is_send_leader"}},[r("span",{attrs:{slot:"open"},slot:"open"},[e._v("是")]),e._v(" "),r("span",{attrs:{slot:"close"},slot:"close"},[e._v("否")])])],1),e._v(" "),r("FormItem",{attrs:{label:"司机在到仓时间前(负数为后)：",prop:"sms_before_warehouse_time"}},[r("InputNumber",{attrs:{min:0,step:1},model:{value:e.formUpdate.sms_before_warehouse_time,callback:function(t){e.$set(e.formUpdate,"sms_before_warehouse_time",t)},expression:"formUpdate.sms_before_warehouse_time"}}),e._v("\n                        分钟未签到发送短信提醒\n                    ")],1),e._v(" "),r("FormItem",[r("Button",{attrs:{type:"primary",loading:e.loading},on:{click:function(t){e.updateSubmit("formUpdate","config/update")}}},[e._v("保存")])],1)],1)],1)],1)])],1)},staticRenderFns:[]}},r20J:function(e,t,r){(e.exports=r("FZ+f")(!1)).push([e.i,"",""])},xi7R:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var _,a=r("nf43"),o=(_=a)&&_.__esModule?_:{default:_};t.default={mixins:[o.default],methods:{unObserver:function(e){return JSON.parse(JSON.stringify(e))},updateSubmit:function(e,t){var r=this;this.$refs[e].validate(function(_){_?(r.loading=!0,r.$http.put(t,r.unObserver(r._data[e])).then(function(e){r.$Message.success("Success!"),r.change(!1)}).catch(function(e){r.formatErrors(e)}).finally(function(){r.loading=!1})):r.$Message.error("验证不通过!")})},createSubmit:function(e,t){var r=this;this.$refs[e].validate(function(_){_&&(r.loading=!0,r.$http.post(t,r._data[e]).then(function(e){r.$Message.success("Success!"),r.change(!1)}).catch(function(e){r.formatErrors(e)}).finally(function(){r.loading=!1}))})}}}}});