<template>
  <div id="main">
    <Hander :isEdit="true" />
    <div class="content">
      <div class="overflow">
        <div class="records">
          <div class="record-dev" v-for="item in 2" :key="item">
            <div class="record">
              <div style="font-size: 30px;font-weight: 400;text-align: center;margin: 20px 0">某某某医院病历单</div>
              <div class="head">
                <div>编号：1</div>
                <div>姓名：康国健</div>
                <div>性别：男</div>
                <div>年龄：23</div>
                <div>诊断日期：2022-02-21</div>
                <div>复查日期：2022-04-30</div>
                <div>关键词：测试</div>
              </div>
              <el-divider />
              <div class="main">
                <div>诊断说明：胚胎和胎儿在母体内生长发育的过程称为妊娠。卵子受精是妊娠的开始，胎儿及附属物自母体排出是妊娠的终止。临床上一般以末次月经的第一天作为妊娠的开始。足月妊娠全过程为280天，即40周或10个妊娠月。临床上将妊娠全过程分为三个时期，临床12周末以前称为早期妊娠；第13至27周末成为中期妊娠；第28周以后称为晚期妊娠。</div>
                <img :src="require('@/assets/logo.png')" alt="">
              </div>
              <el-divider />
              <div class="foot">
                <div>诊断人：康国健</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Hander from "@/layout/components/Handers";

export default {
  components: {
    Hander
  },
}
</script>
<style scoped>
#main {
  height: 100%;
  overflow: hidden;
}
.content {
  width: 100%;
  height: 90vh;
  overflow-y: scroll;
}
.overflow {
  width: 100%;
}
.records {
  display: grid;
  grid-template-columns: repeat(3, 33.33%);
}
.record-dev {
  display: flex;
  justify-content: center;
  align-items: center;
}
.record {
  padding: 30px;
  height: 800px;
  margin: 30px;
  box-shadow:
      2.4px 2.5px 9.1px rgba(0, 0, 0, 0.008),
      5.6px 5.9px 21.2px rgba(0, 0, 0, 0.011),
      10.1px 10.5px 38px rgba(0, 0, 0, 0.014),
      16.7px 17.5px 63.1px rgba(0, 0, 0, 0.016),
      27.5px 28.8px 104px rgba(0, 0, 0, 0.019),
      48.1px 50.4px 181.7px rgba(0, 0, 0, 0.022),
      104px 109px 393px rgba(0, 0, 0, 0.03);
  width: 400px;
  border-radius: 5px;
}
.head {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}
.head div {
  margin-right: 20px;
}
.main {
  margin: 20px 0;
  height: 500px;
}
.foot {
  float: right;
}

</style>