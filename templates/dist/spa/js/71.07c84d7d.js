(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[71],{"7c00":function(t,e,a){"use strict";a.r(e);var o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("q-card",{staticClass:"shadow-11",style:{height:t.height}},[a("q-card-section",[a("div",{staticClass:"text-h6 text-grey-8 text-weight-bolder"},[t._v("\n      Bar Chart\n      "),a("q-select",{staticClass:"bg-white float-right q-mb-sm ",staticStyle:{width:"300px"},attrs:{outlined:"",options:t.product_options,label:"Select Product"},model:{value:t.selected_product,callback:function(e){t.selected_product=e},expression:"selected_product"}})],1)]),a("q-card-section",{staticClass:"q-pa-none"},[a("IEcharts",{staticStyle:{height:"600px",width:"100%"},attrs:{option:t.getBarChartOptions,resizable:!0}})],1)],1)},i=[],s=a("ce44"),r={name:"charts",data(){return{height:"",selected_product:this.$t("dashboards.total_receipts"),data:[{product:this.$t("dashboards.total_receipts"),2015:43.3,2016:85.8,2017:93.7,2018:100,2019:100,2020:100,2021:100,2022:100,2023:100,2024:100,2025:100},{product:this.$t("dashboards.category_receipt_ranking"),2015:83.1,2016:73.4,2017:55.1},{product:this.$t("dashboards.receiving_quantity_ranking"),2015:86.4,2016:65.2,2017:82.5},{product:this.$t("dashboards.Receiving_amount_ranking"),2015:72.4,2016:53.9,2017:39.1}],product_options:[this.$t("dashboards.total_receipts"),this.$t("dashboards.category_receipt_ranking"),this.$t("dashboards.receiving_quantity_ranking"),this.$t("dashboards.Receiving_amount_ranking")]}},methods:{getBarChartOptions(){}},computed:{getBarChartOptions(){console.log(1);let t,e=this,a=e.data.filter((function(t){return t["product"]===e.selected_product}));return console.log(a),{grid:{bottom:"1%"},xAxis:{type:"category",axisLabel:{},nameLocation:"middle",nameGap:78},tooltip:{},dataset:{dimensions:["product","2015","2016","2017"],source:a},buisness:t,yAxis:{type:"value",splitLine:{show:!0,lineStyle:{type:[30,20]}}},series:[{type:"bar",barWidth:80,barGap:"70%",barCategoryGap:"10%",itemStyle:{normal:{label:{show:!0,position:"top"}}}},{type:"bar",barWidth:80,itemStyle:{normal:{label:{show:!0,position:"top"}}}},{type:"bar",barWidth:80,itemStyle:{normal:{label:{show:!0,position:"top"}}}},{type:"bar",barWidth:80,itemStyle:{normal:{label:{show:!0,position:"top"}}}},{type:"bar",barWidth:80,itemStyle:{normal:{label:{show:!0,position:"top"}}}},{type:"bar",barWidth:80,itemStyle:{normal:{label:{show:!0,position:"top"}}}},{type:"bar",barWidth:80,itemStyle:{normal:{label:{show:!0,position:"top"}}}},{type:"bar",barWidth:80,itemStyle:{normal:{label:{show:!0,position:"top"}}}},{type:"bar",barWidth:80,itemStyle:{normal:{label:{show:!0,position:"top"}}}},{type:"bar",barWidth:80,itemStyle:{normal:{label:{show:!0,position:"top"}}}}]}}},mounted(){var t=this;t.$q.platform.is.electron?t.height=String(t.$q.screen.height-200)+"px":t.height=t.$q.screen.height-200+"px"},components:{IEcharts:s["a"]}},n=r,l=a("42e1"),p=a("f09f"),d=a("a370"),h=a("ddd8"),c=a("eebe"),b=a.n(c),u=Object(l["a"])(n,o,i,!1,null,null,null);e["default"]=u.exports;b()(u,"components",{QCard:p["a"],QCardSection:d["a"],QSelect:h["a"]})}}]);