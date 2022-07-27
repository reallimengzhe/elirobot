(function(){
	// 接口域名
	var baseUrl = 'http://new.elibot.cn';
	// localStorage key
	var LOCAL_KEY = 'RETAIN_CAPITAl';
	// 组件id
	var COM_NAME = "RetainCapital__" + Math.floor(Math.random()*100000);
	// 组件是否准备完毕
	var isReadFlag = false
	// 配置信息
	var config = {
		sourceId: 0, // 事件类型 1产品体验,2申领试用,3下载资料,4申请方案
		channelType: 0, // 渠道类型
	}
	function creatRetain(title, list) {
		var width = window.innerWidth
		
		var industryList = ''
		for(let i = 0;i < list.length ;i++){
			industryList += '<option value="'+list[i].dataValue+'">'+list[i].dataText+'</option>'
		}
		var box = `
			<div id="${COM_NAME}" class="com-retain-capital">
				<div id="${COM_NAME}__content" class="com-retain-capital__content">
					<p class="com-retain-capital__title">${title}</p>
					<svg id="${COM_NAME}--close" class="com-retain-capital--close" width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
						<g id="Frame" clip-path="url(#clip0_9_816)">
						<path id="Vector" d="M10.38 8.57901L16.7498 14.9614C17.2484 15.4609 17.2459 16.2741 16.7438 16.7771C16.2382 17.2837 15.4304 17.2829 14.9316 16.7832L8.56173 10.4008L2.19188 16.7832C1.69327 17.2827 0.881737 17.2802 0.379644 16.7771C-0.12595 16.2706 -0.125138 15.4611 0.373641 14.9614L6.74349 8.57901L0.373641 2.19667C-0.124968 1.69708 -0.122451 0.883955 0.379644 0.380877C0.885238 -0.12571 1.6931 -0.124895 2.19188 0.374863L8.56173 6.7572L14.9316 0.374863C15.4302 -0.124724 16.2417 -0.122202 16.7438 0.380877C17.2494 0.887463 17.2486 1.69691 16.7498 2.19667L10.38 8.57901Z" fill="white"/>
						</g>
						<defs>
						<clipPath id="clip0_9_816">
						<rect width="18" height="18" fill="white"/>
						</clipPath>
						</defs>
					</svg>
					<div class="com-retain-capital__content--box">
						<div class="crc__div--logo">
							<img src="${baseUrl}/assets/logo__horizontal.png" alt="logo">
						</div>
						
						<div class="crc__div--form">
							<input id="${COM_NAME}__name" class="crc__div--form-item" placeholder="请输入姓名"/>
							<p id="${COM_NAME}__name--tips" class="form-item--tips"></p>
							<input id="${COM_NAME}__phone" class="crc__div--form-item" placeholder="请输入手机号"/>
							<p id="${COM_NAME}__phone--tips" class="form-item--tips"></p>
							<input id="${COM_NAME}__company-name" class="crc__div--form-item" placeholder="请输入公司名称（全称）"/>
							<p id="${COM_NAME}__company-name--tips" class="form-item--tips"></p>
							<select id="${COM_NAME}__industry" name="cars" class="crc__div--form-item" placeholder="请选择行业">
								<option value="" style="display:none">请选择行业</option>
								${industryList}
							</select>
							<p id="${COM_NAME}__industry--tips" class="form-item--tips"></p>
							<input id="${COM_NAME}__email" class="crc__div--form-item" placeholder="请输入邮箱"/>
							<p id="${COM_NAME}__email--tips" class="form-item--tips"></p>
							<textarea id="${COM_NAME}__desc" class="crc__div--form-item form-item--bottom" placeholder="请描述您的需求" rows="20" ></textarea>
							<div>
								<p class="crc--company-name">感谢关注艾利特机器人！</p>
								<p class="crc--company-desc">我们的工作人员将会尽快与您联系。点击提交，开启您的自动化之旅吧！</p>
							</div>
							<button id="${COM_NAME}--submit" class="crc__button">提交</button>
						</div>
					</div>
				</div>
				<div id="${COM_NAME}__tip" class="com-retain-capital__tip">
					<div class="com-retain-capital__tip--content">
						<div class="crc__tip-content--logo">
							<img src="${baseUrl}/assets/logo__horizontal.png" alt="logo">
							<svg id="${COM_NAME}--cloce-success" class="com-retain-capital__tip--close" width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
							<g id="Frame" clip-path="url(#clip0_73_314)">
							<path id="Vector" d="M10.38 8.57901L16.7498 14.9614C17.2484 15.4609 17.2459 16.2741 16.7438 16.7771C16.2382 17.2837 15.4304 17.2829 14.9316 16.7832L8.56173 10.4008L2.19188 16.7832C1.69327 17.2827 0.881737 17.2802 0.379644 16.7771C-0.12595 16.2706 -0.125138 15.4611 0.373641 14.9614L6.74349 8.57901L0.373641 2.19667C-0.124968 1.69708 -0.122451 0.883955 0.379644 0.380877C0.885238 -0.12571 1.6931 -0.124895 2.19188 0.374863L8.56173 6.7572L14.9316 0.374863C15.4302 -0.124724 16.2417 -0.122202 16.7438 0.380877C17.2494 0.887463 17.2486 1.69691 16.7498 2.19667L10.38 8.57901Z" fill="#C6C6C6"/>
							</g>
							<defs>
							<clipPath id="clip0_73_314">
							<rect width="18" height="18" fill="white"/>
							</clipPath>
							</defs>
							</svg>
						</div>
						<div class="crc__tip-content--content">
							<p class="tip-content--text">产品资料将会发送到您的邮箱，请注意查收。</p>
							<p class="tip-content--desc">您可以通过以下方式获取我们的联系方式</p>
							<p class="tip-content--link">电话：4001899358</p>
							<p class="tip-content--link">邮箱：market@elibot.cn</p>
							<p class="tip-content--link">Wechat:elibot-china</p>
							<div class="tip-content--felx" >
								<div class="tip-content--qrcode-box">
									  <img src="${baseUrl}/assets/qr-wx.jpg" alt="公众号" width="100%">
									  <p>公众号</p>
								</div>
								<div class="tip-content--qrcode-box">
									  <img src="${baseUrl}/assets/qr-wxapp.jpg" alt="小程序" width="100%">
									  <p>小程序</p>
								</div>
								<div class="tip-content--qrcode-box">
									<img src="${baseUrl}/assets/qr-sp.png" alt="视频号" width="100%">
									<p>视频号</p>
								</div>
								<div class="tip-content--qrcode-box">
									<img src="${baseUrl}/assets/qr-dy.png" alt="抖音" width="100%">
									<p>抖音</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		`
		var fragment = document.createElement('div');
		fragment.innerHTML = box
		
		document.body.appendChild(fragment)
		
		var close = document.getElementById(COM_NAME + '--close')
		close.addEventListener('click', onClose)
		var closeSuccess = document.getElementById(COM_NAME + '--cloce-success')
		closeSuccess.addEventListener('click', onClose)
		
		var submit = document.getElementById(COM_NAME + '--submit')
		submit.addEventListener('click', onSubmit)
		var industrySelect = document.getElementById(COM_NAME+"__industry");
		industrySelect.onchange = function(ev) {
			var target = ev.target;
			if(target.value !== "") {
				target.classList.add("is-selected");
			} else {
				target.classList.remove("is-selected");
			}
		}　
	}
	
	function GetQueryString(name) {
	     var reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)");
	     var r = window.location.search.substr(1).match(reg);//search,查询？后面的参数，并匹配正则
	     if(r!=null)return  unescape(r[2]); return null;
	}
	
	function openDialog(eventType) {
		if(!isReadFlag){
			return
		}
		config.sourceId = eventType
		var dialog = document.getElementById(COM_NAME)
		if(!dialog){
			throw new Error('请先执行creatRetain 方法创建弹窗')
		}
		var hasInfo = localStorage.getItem(LOCAL_KEY)
		dialog.style.visibility = 'visible'
		var tip = document.getElementById(COM_NAME+'__tip')
		var content = document.getElementById(COM_NAME+'__content')
		if(hasInfo){
			content.style.visibility = 'hidden'
			tip.style.visibility = 'visible'
		}else{
			content.style.visibility = 'visible'
			tip.style.visibility = 'hidden'
		}
	}
	function closeDialog() {
		var dialog = document.getElementById(COM_NAME)
		if(!dialog){
			throw new Error('弹窗不存在，请先执行creatRetain 方法创建弹窗')
		}
		var tip = document.getElementById(COM_NAME+'__tip')
		var content = document.getElementById(COM_NAME+'__content')
		content.style.visibility = 'hidden'
		tip.style.visibility = 'hidden'
		dialog.style.visibility = 'hidden'
	}
	function onClose(e) {
		closeDialog()
	}
	function onSubmit() {
		var name = document.getElementById(COM_NAME+'__name').value
		var phone = document.getElementById(COM_NAME+'__phone').value
		var companyName = document.getElementById(COM_NAME+'__company-name').value
		var industry = document.getElementById(COM_NAME+'__industry').value
		var email = document.getElementById(COM_NAME+'__email').value
		var desc = document.getElementById(COM_NAME+'__desc').value
		var name_tips = document.getElementById(COM_NAME+'__name--tips')
		var phone_tips = document.getElementById(COM_NAME+'__phone--tips')
		var companyName_tips = document.getElementById(COM_NAME+'__company-name--tips')
		var industry_tips = document.getElementById(COM_NAME+'__industry--tips')
		var email_tips = document.getElementById(COM_NAME+'__email--tips')
		var flag = false
		if(!name){
			name_tips.innerText = '请填写姓名'
			flag = true
		}else{
			name_tips.innerText = ''
		}
		if(!/^1[0-9]{10}$/.test(phone)){
			phone_tips.innerText = '请填写正确的手机号'
			flag = true
		}else{
			phone_tips.innerText = ''
		}
		if(!companyName){
			companyName_tips.innerText = '请填写公司名称'
			flag = true
		}else{
			companyName_tips.innerText = ''
		}
		if(!industry){
			industry_tips.innerText = '请选择行业'
			flag = true
		}else{
			industry_tips.innerText = ''
		}
		if(!/^[a-zA-Z0-9]+([-_.][A-Za-zd]+)*@([a-zA-Z0-9]+[-.])+[A-Za-zd]{2,5}$/.test(email)){
			email_tips.innerText = '请输入正确的邮箱'
			flag = true
		}else{
			email_tips.innerText = ''
		}
		if(flag){return}
		
		var data = {
			"channelType": config.channelType,
			 "companyName": companyName,
			 "description": desc,
			 "email": email,
			 "industry": industry,
			 "mobile": phone,
			 "realName": name,
			 // "sourceChannelId": 0,
			 "sourceId": config.sourceId,
			 "sourceUrl": GetQueryString('sourceUrl') || '',
			 "visitUrl": window.location.href
		}
		axios({
			url: baseUrl+'/auth/clueOrigin/add',
			method: 'PUT',
			data: data
		}).then(res => {
			localStorage.setItem(LOCAL_KEY, JSON.stringify(data))
			var tip = document.getElementById(COM_NAME+'__tip')
			var content = document.getElementById(COM_NAME+'__content')
			content.style.visibility = 'hidden'
			tip.style.visibility = 'visible'
		})
	}
	
	function creatDialog(title, channelInfo) {
		config.channelType = channelInfo.channelType || 0
		axios({
			url: baseUrl+'/auth/common/diction/list',
			method: 'GET',
			params: {
				dataCode: 'industry',
				state: 1
			}
		}).then(res => {
			var list = res.data.data || []
			creatRetain(title, list)
			isReadFlag = true
		})
	}
	
	
	window.creatDialog = creatDialog
	window.openDialog = openDialog
})()