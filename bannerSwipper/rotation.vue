<!-- 
author: kongshan
function: 轮播
createTime: 2020.8.11
updataTime: 2020.8.12
version: 0.0.2
————————————————————————————————————————————————
参数说明：
list存放所以图片的信息，imgArray存在轮播中图片的信息
list:[{},{},{}], {id:any, photo:[图片地址], startImgIndex:轮播中图片开始下标, endImgIndex:轮播中图片末尾下标 }
————————————————————————————————————————————————
可能存在问题：
………………………………………………………………………………………………………………………………
 -->
}
<template>
	<div class="main" v-for="(item,index) in list" :key="item.id">
    <div style="display: flex;width: 100%;justify-content: center;">
      <div style="display:flex;align-items: center;">
       	<img alt="" src="./last.png" style="width:38x;height:38px" @click.stop="prePhoto(item,index)"/>
          <div style="width:760px;display:flex;justify-content: center;">
            <div v-for="(img,order) in imgArray[index].photo" :key="order">
              <img :src="img" alt="" style="width:140px;height:140px"/>
            </div>
          </div>
        <img alt="" src="./next.png" style="width:38px;height:38px" @click.stop="nextPhoto(item,index)"/>
      </div>
    </div>
  </div>
</template>
<script>
	export default {
  name: 'CarouselModule',
  props: ['list'],
  data() {
    return {
    	imgArray: []
    }
  },
  methods: {
  },
  created() {
  	this.limit()
  },
  mounted() {
  	//定义一次轮播展示的图片数量，目前一次展示五张图片
  	limit() {
			this.list.forEach(item => {
	      let photos = item.photo
	      if (photos.length > 5) {
	        photos = photos.slice(0, 5)
	      }
	      this.imgArray.push({id: item.id, photo: photos, startImgIndex: 0, endImgIndex: photos.length})       	
	    })
		},
		//上一张点击事件
		prePhoto(event, index) {
      const  allPhotos = event.photo
      const startIndex = this.imgArray[index].startImgIndex
			if (startIndex>0) {
		    this.imgArray[index].startImgIndex = startIndex - 1
		    this.imgArray[index].endImgIndex = startIndex + 4
		    this.imgArray[index].photo = allPhotos.slice(startIndex-1, startIndex+4)
		  }
    },
    //下一张点击事件
		nextPhoto(event, index) {
		  const allPhotos = event.photo
		  const startIndex = this.imgArray[index].startImgIndex
		  if (endIndex<allPhotos.length) {
		    this.imgArray[index].startImgIndex = endIndex - 4
		    this.imgArray[index].endImgIndex = endIndex + 1
		    this.imgArray[index].photo = allPhotos.slice(endIndex - 4, endIndex + 1)
		  }
    }
  }
}
</script>
<style scoped>
</style>