<template>
	 
      <el-menu
        :default-active="$route.path"
        class="slider"
        background-color="#545c64"
        text-color="#fff"
        active-text-color="#ffd04b"
        router
        >
        <el-menu-item index="/main" >
          <i class="el-icon-menu"></i>
          <span slot="title">酷猫网盘</span>
        </el-menu-item>
        <!-- page1 -->
        <el-menu-item index="/page1" >
          <i class="el-icon-menu"></i>
          <span slot="title">网盘设置</span>
        </el-menu-item>
		
		<el-menu-item index="/page2" >
		  <i class="el-icon-menu"></i>
		  <span slot="title">关于我们</span>
		</el-menu-item>
      </el-menu>
</template>

<script>
export default {
  name: 'Slider',
  data(){
    return {
      menuList:[
      ]
    }
  },
  
}
</script>
<style scoped>
.slider{
  height: 100vh;
}
</style>
