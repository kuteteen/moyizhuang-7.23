<template>
    <component-modal title="账户明细" :width="70" >

        <alert>配送完成 <b>{{total[0]}}</b> 次，司机总价格  <b>{{total[1]}}</b> 元，商户总价格 <b>{{total[2]}}</b> 元</alert>
        <my-lists v-model="lists.data" :columns="columns" @change="search" :loading="loading" >
        </my-lists>
    </component-modal>
</template>

<script>

    import MyLists from "../../../components/layout/my-lists";
    import lists from "../../../mixins/lists";
    import component from "../../../mixins/component";
    import ComponentModal from "../../../components/modal/component-modal";
    import Box from "../../../components/box/index";
    import moment from 'moment'
    import CDatePicker from "../../../components/date-picker/index";



    export default {
        name: "bview",
        components: {  MyLists,ComponentModal,Box,CDatePicker},
        mixins: [lists,component],
        data() {
            return {
                extra:{
                    total:[]
                },
                options:{
                },
                searchForm:{
                    merchant_id:this.data.merchant_id,
                    create_time:[ moment(this.data.bill_time).startOf('month').format("YYYY-MM-DD"),moment(this.data.bill_time).add(1,'month').startOf('month').format("YYYY-MM-DD")],
                },
                columns: [
                    {
                        title: '任务编号',
                        render: (h, {row}) => {
                            return <span>{row.order ? row.order.task_id : ''}</span>
                        }
                    },
                    {
                        title: '出车单号',
                        render: (h, {row}) => {
                            return <span>{row.order ? row.order.order_no : ''}</span>
                        }
                    },
                    {
                        title: '到仓时间',
                        render: (h, {row}) => {
                            return <span>{row.order ? row.order.arrival_warehouse_time : ''}</span>
                        }
                    },
                    {
                        title: '商户简称',
                        render: (h, {row}) => {
                            return <span>{row.merchant ? row.merchant.short_name : ''}</span>
                        }
                    },
                    {
                        title: '运费',
                        render: (h, {row}) => {
                            return <span>{row.order ? row.order.unit_price : '0'}</span>
                        }
                    },
                    {
                        title: '商户保险费',
                        render: (h, {row}) => {
                            return <span>{row.order ? row.order.merchant_safe_fee : '0.00'}</span>
                        }
                    },
                    {
                        title: '金额',
                        render: (h, {row}) => {
                            return <span>{row.order ? row.order.total_fee : '0'}</span>
                        }
                    },
                    {
                        title: '计费类型',
                        render: (h, {row}) => {
                            return <span>计费</span>
                        }
                    },
                    {
                        title: '司机姓名',
                        render: (h, {row}) => {
                            return <span>{row.driver ? row.driver.name: ''}</span>
                        }
                    },
                    {
                        title: '任务名称',
                        render: (h, {row}) => {
                            return <span>{row.order ? row.order.task.name: ''}</span>
                        }
                    },
                    {
                        title: '仓名称',
                        render: (h, {row}) => {
                            return <span>{row.order? row.order.task.warehouse.title: ''}</span>
                        }
                    },
                    {
                        title: '配送完成时间',
                        render: (h, {row}) => {
                            return <span>{row.order ? row.order.finish_time : ''}</span>
                        }
                    }
                ]
            }
        },
        computed: {
            total() {
                return this.extra.total;
            }
        },
        methods: {
            search(page = 1){
                this.loading = true
                this.$http.get(`bill/day`, {params: this.request(page)}).then((res) => {
                    this.assignmentData(res.data.data)
                }).finally(() => {
                    this.loading = false
                });

                this.$http.get(`bill/analysis`, {params: this.request(page)}).then((res) => {
                    this.$set(this.extra,'total',res.data.data);
                }).finally(() => {
                    this.loading = false
                });
            }
        }
    }
</script>


