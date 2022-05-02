<template>
  <div class="entry">
    <div class="flex-div" style="margin-left: 100px;">
      <div class="filter-line">
        <span>编号：</span>
        <el-input style="width:200px" v-model="params.value" placeholder="请输入编号"/>
      </div>
      <div class="filter-line">
        <span>姓名：</span>
        <el-input style="width:200px" v-model="params.value" placeholder="请输入姓名"/>
      </div>
      <div class="filter-line">
        <span>性别：</span>
        <el-input style="width:200px" v-model="params.value" placeholder="请输入性别"/>
      </div>
      <div class="filter-line">
        <span>年龄：</span>
        <el-input style="width:200px" v-model="params.value" placeholder="请输入年龄"/>
      </div>
      <div class="filter-line">
        <span>联系方式：</span>
        <el-input style="width:200px" v-model="params.value" placeholder="请输入联系方式"/>
      </div>
      <div class="filter-line">
        <span>关键词：</span>
        <el-input style="width:200px" v-model="params.value" placeholder="请输入关键词"/>
      </div>
      <div class="filter-line">
        <span>诊断人：</span>
        <el-input style="width:200px" v-model="params.value" placeholder="请输入诊断人"/>
      </div>
      <div class="filter-line">
        <span>诊断日期：</span>
        <el-date-picker
            style="width: 200px"
            v-model="params.value1"
            type="datetime"
            placeholder="选择诊断日期"
        />
      </div>
      <div class="filter-line">
        <span>复查时间：</span>
        <el-date-picker
            style="width: 200px"
            v-model="params.value1"
            type="datetime"
            placeholder="选择复查时间"
        />
      </div>
      <div class="filter-line">
        <span>是否复查：</span>
        <el-radio v-model="params.radio1" label="1" size="large">是</el-radio>
        <el-radio v-model="params.radio1" label="2" size="large">否</el-radio>
      </div>

    </div>
    <div style="margin-right: 500px;display:flex;flex-direction: column">
      <div style="display:flex;flex-direction: row">
        <div class="filter-line">
          <span>诊断：</span>
          <el-input
              v-model="params.textarea2"
              :autosize="{ minRows: 6, maxRows: 10 }"
              type="textarea"
              style="width:200px"
              placeholder="请输入诊断结果"/>
        </div>
        <div class="filter-line">
          <input type="file" @change="selectImage"/>
        </div>
      </div>
      <canvas width="800" height="400" id="c" style="border: 1px solid #ccc;margin: 100px 0 0 50px"></canvas>
    </div>

  </div>
  <div class="sub">
    <el-button type="primary">立即提交</el-button>
  </div>
</template>

<script>
import { fabric } from 'fabric'
export default {
  data() {
    return {
      imgObj: "",
      canvas: "",
      params: {
        textarea2: "",
        value: "",
        value1: "",
      }
    }
  },
  mounted() {
    this.init()
  },
  methods: {
    selectImage(e) {
      let file = e.target.files[0]
      if (!e || !window.FileReader) return  // 判断是否支持FileReader
      let reader = new FileReader()
      reader.readAsDataURL(file) // 文件转换
      reader.onloadend = (res) => {
        this.imgObj = res.target.result
        this.draw()
      }
    },
    init() {
      this.canvas = new fabric.Canvas('c', {
        isDrawingMode: true
      })
      this.canvas.on('mouse:wheel', opt => {
        let delta = opt.e.deltaY // 滚轮向上滚一下是 -100，向下滚一下是 100
        let zoom = this.canvas.getZoom() // 获取画布当前缩放值

        // 控制缩放范围在 0.01~20 的区间内
        zoom *= 0.999 ** delta
        if (zoom > 20) zoom = 20
        if (zoom < 0.01) zoom = 0.01

        // 设置画布缩放比例
        this.canvas.setZoom(zoom)
      })
    },
    draw() {
      this.canvas.clear();
      fabric.Image.fromURL(this.imgObj, oImg => {
        oImg.scale(0.1) // 缩放
        this.canvas.add(oImg) // 将图片加入到画布
      })
    }
  }
}
</script>

<style scoped>
.entry {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  height: 80%;
}

.filter-line {
  margin-bottom: 24px;
}

.filter-line span {
  width: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.flex-div {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: 100%;
}

.avatar-uploader .avatar {
  width: 178px;
  height: 178px;
  display: block;
}

.avatar-uploader .el-upload {
  border: 1px dashed #d9d9d9;
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  transition: var(--el-transition-duration-fast);
}

.avatar-uploader .el-upload:hover {
  border-color: var(--el-color-primary);
}

.el-icon.avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 178px;
  height: 178px;
  text-align: center;
}

.sub {
  position: fixed;
  bottom: 0px;
  width: 70%;
  height: 20%;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>