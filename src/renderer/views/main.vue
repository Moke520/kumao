<template>
	<div id="main" onselectstart='return false'>
		<el-collapse v-model="activeNames" @change="handleChange">
			<el-collapse-item class="txt" title="本地磁盘" name="1">
				<div>里面有一些东西</div>
			</el-collapse-item>
			<el-collapse-item title="网络网盘" name="2">
				<el-row :gutter="15">
					<el-col :span="8">
						<div class="grid-content bg-purple" @dblclick="admin" >
							<el-row :gutter="12">
								
							    <el-card shadow="hover">
							      <img src="../baidu.png"  style="float: left;;"/>百度云<br />这是百度云网盘
							    </el-card>
							</el-row>
						</div>
					</el-col>
					<el-col :span="8">
						<div class="grid-content bg-purple" @dblclick="admin1">
							<el-row :gutter="12">
							    <el-card shadow="hover">
							      <img src="../seafile.png"  style="float: left;;"/>Seafile私有云<br />东安分奥赛法赛
							    </el-card>
							</el-row>
						</div>
					</el-col>
					<el-col :span="8">
						<div class="grid-content bg-purple" @dblclick="admin2">
							<el-row :gutter="12">
							    <el-card shadow="hover">
							      <img src="../tenxun1.png"  style="float: left;;"/>腾讯微云<br />东安分奥赛法赛
							    </el-card>
							</el-row>
						</div>
					</el-col>
				</el-row>
				<el-row :gutter="15">
					<el-col :span="8">
						<div class="grid-content bg-purple" @dblclick="admin2">
							<el-row :gutter="12">
							    <el-card shadow="hover">
							      <img src="../2.png"  style="float: left;;"/>115网盘<br />东安分奥赛法赛
							    </el-card>
							</el-row>
						</div>
					</el-col>
					<el-col :span="8">
						<div class="grid-content bg-purple" @dblclick="admin2">
							<el-row :gutter="12">
							    <el-card shadow="hover">
							      <img src="../2.png"  style="float: left;;"/>坚果云网盘<br />东安分奥赛法赛
							    </el-card>
							</el-row>
						</div>
					</el-col>
					<el-col :span="8">
						<div class="grid-content bg-purple" @dblclick="admin2">
							<el-row :gutter="12">
							    <el-card shadow="hover">
							      <img src="../2.png"  style="float: left;;"/>蓝奏云网盘<br />东安分奥赛法赛
							    </el-card>
							</el-row>
						</div>
					</el-col>
				</el-row>
				
			</el-collapse-item>
			<el-collapse-item title="协议网盘" name="3">
				<div>简化流程：设计简洁直观的操作流程；</div>
				<div>清晰明确：语言表达清晰且表意明确，让用户快速理解进而作出决策；</div>
				<div>帮助用户识别：界面简单直白，让用户快速识别而非回忆，减少用户记忆负担。</div>
			</el-collapse-item>
			
		</el-collapse>
		
	</div>
</template>

<script type="text/javascript">
	export default {
		data() {
			return {
				activeNames: ['1']
			};
		},
		methods: {
			handleChange(val) {
				console.log(val);
			},
			admin() {
				this.$router.push('/page1')
			},
			admin1() {
				this.$router.push('/page2')
			},
			admin2() {
				alert('跳转到一个网盘')
			}
		}
	}
</script>

<style>
	.el-row {

		&:last-child {
			margin-bottom: 0;
		}
	}

	.el-col {
		border-radius: 4px;
		width: 24%;
	}

	.bg-purple-dark {
		background: #99a9bf;
	}

	.bg-purple {
		background: #d3dce6;
	}

	.bg-purple-light {
		background: #e5e9f2;
	}

	.grid-content {
		border-radius: 4px;
		min-height: 56px;
		font-size: 20px;
		cursor:pointer;
	}

	.row-bg {
		padding: 10px 0;
		background-color: #f9fafc;
	}

	element.style {
		margin-left: -10px;
		margin-right: -10px;
	}
	

	
</style>
