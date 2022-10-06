<template>
  <div class="cr">
    <div class="screen">
      <video
        src="https://newelite-robot.oss-cn-hangzhou.aliyuncs.com/newv/1001.mp4"
        class="video user-select--none pointer-events--none"
        autoplay
        muted
        loop
      ></video>
      <div class="screen1__box--1">
        <p class="s1_title_font-size font-weight margin-bottom--50">
          复合机器人
        </p>
        <p class="s1_title2_font-size font-weight">
          <span class="gradient_text s1_title2_font-size">一周</span>
          完成整站集成
        </p>
        <p class="s1_title2_font-size font-weight">
          <span class="gradient_text s1_title2_font-size">9个月</span>
          可回收成本
        </p>
      </div>
      <div class="screen1__box--2 s1_title3_bottom_font-size font-weight">
        艾利特机器人 <span class="special-color">移动工作站解决方案</span>
        <div class="screen1--mv-down">
          <img src="@/assets/images/cr/mv-down.png" alt="" />
        </div>
      </div>
    </div>
    <div class="screen">
      <video
        src="https://newelite-robot.oss-cn-hangzhou.aliyuncs.com/newv/1002.mp4"
        class="video user-select--none pointer-events--none"
        autoplay
        muted
        loop
      ></video>
      <div class="mask"></div>
      <div class="screen2__box--1">
        <p class="s2_title_font-size font-weight">
          自重轻量 <span class="gradient_text">续航更持久 </span>
        </p>
        <p class="gradient_text s2_title2_font-size">满电一次运行8小时*</p>
        <p class="s2_title2_font-size">快速部署智能调度</p>
        <p class="s2_title2_font-size">多样化功能器件配置(可选配)</p>
      </div>
      <div class="screen2__box--2">
        <button id="btn1" class="s_btn s2_btn button gradient_text">
          即刻体验 <img src="@/assets/images/cr/icon-btn-1.png" alt="" />
        </button>
        <!-- <img id="btn1" class="button" src="@/assets/images/cr/btn-1.png" alt="即刻体验"> -->
      </div>
    </div>
    <div class="screen screen3">
      <p class="s3_title_font-size font-weight screen3--title">
        高度集成 模块化设计
      </p>
      <div class="screen3-content">
        <div class="display--flex screen3-content__div">
          <div class="screen3-content--box">
            <p class="s3_w_title_font-size font-weight screen3-content__p">
              协作机器人
            </p>
            <img
              class="screen3-content__img"
              src="@/assets/images/cr/m-1.png"
              alt="协作机器人"
            />
          </div>
          <img
            class="screen3-content--add"
            src="@/assets/images/cr/add.png"
            alt="加"
          />
          <div class="screen3-content--box">
            <p
              class="s3_w_title_font-size font-weight screen3-content__p"
              style="margin-bottom: 0.04211rem"
            >
              SLAM激光导航<br />
              AGV小车
            </p>
            <img
              class="screen3-content__img"
              src="@/assets/images/cr/m-2.png"
              alt="AGV小车"
            />
          </div>
          <img
            class="screen3-content--add"
            src="@/assets/images/cr/add.png"
            alt="加"
          />
          <div class="screen3-content--box">
            <p class="s3_w_title_font-size font-weight screen3-content__p">
              视觉
            </p>
            <img
              class="screen3-content__img"
              src="@/assets/images/cr/m-3.png"
              alt="视觉"
            />
          </div>
          <img
            class="screen3-content--add"
            src="@/assets/images/cr/add.png"
            alt="加"
          />
          <div class="screen3-content--box">
            <p class="s3_w_title_font-size font-weight screen3-content__p">
              夹爪
            </p>
            <img
              class="screen3-content__img"
              src="@/assets/images/cr/m-4.png"
              alt="夹爪"
            />
          </div>
        </div>
        <div class="screen3-desc">
          <p class="s3_des_font-size">
            搭配机械臂、视觉、夹爪等机构进行移动操作，实现晶圆盒，弹夹，Tray盘，CNC机加件等不同物料或治具在不同工序设备之间的转运和上下料。
          </p>
          <p class="s3_des_font-size special-color--blue">
            充分体现了复合机器人手、眼、脚多部件协同所带来的优越性。
          </p>
        </div>
      </div>
      <div class="screen3__footer">
        <button id="btn2" class="s_btn s3_footer_btn button gradient_text">
          下载产品手册 <img src="@/assets/images/cr/icon-btn-2.png" alt="" />
        </button>
        <button id="btn3" class="s_btn s3_footer_btn button gradient_text">
          免费申领试用 <img src="@/assets/images/cr/icon-btn-1.png" alt="" />
        </button>
      </div>
    </div>
    <div class="screen4">
      <div class="screen4--title1">
        <p class="s4_title_font-size font-weight">为您解决四大应用场景</p>
        <p class="s4_des_font-size">
          艾利特复合机器人基于移动机器人、协作机器人、视觉识别等技术的综合应用，可快速布置于自动化工厂、仓储物流、半导体、档案室、无人超市、无人智能充电站
          等，实现物料上料、取料、转运、分拣、码垛、检测、充电等。
        </p>
      </div>
      <div class="screen4--content1">
        <img src="@/assets/images/cr/m-5.png" alt="" />
        <img src="@/assets/images/cr/m-6.png" alt="" />
        <img src="@/assets/images/cr/m-7.png" alt="" />
        <img src="@/assets/images/cr/m-8.png" alt="" />
        <img src="@/assets/images/cr/m-9.png" alt="" />
        <img src="@/assets/images/cr/m-10.png" alt="" />
        <img src="@/assets/images/cr/m-11.png" alt="" />
        <img src="@/assets/images/cr/m-12.png" alt="" />
        <p class="s4_b_title_font-size">智慧工厂/无人工厂</p>
        <p class="s4_b_title_font-size">远距离运输</p>
        <p class="s4_b_title_font-size">智能仓储</p>
        <p class="s4_b_title_font-size">无人智能充电站</p>
      </div>
      <div class="screen4--button1">
        <button
          id="btn4"
          class="s_btn s4_btn button special-color--blue btn--fluctuate"
        >
          即刻申请免费方案设计
        </button>
      </div>
      <p class="screen4--title2 s4_title_font-size font-weight">
        实际应用案例展示
      </p>
      <div>
        <p class="font-size--22 margin-bottom--10 text-align--center">案例1</p>
        <div class="screen4__demo">
          <div class="screen4__demo--left">
            <img src="@/assets/images/cr/m-13.png" alt="" />
          </div>
          <div class="screen4__demo--right">
            <p class="s4_des_font-size line-height--32">
              国内知名3C制造业，苹果合作供应商，CNC机台上下料，此项目涉及生产线共十条缓存线，一条缓存线有十台机台，通过多台复合机器人进行一对多的上料，取料，一个料盘装载30个手机玻璃后盖，在高负载的情况下对精度也有高要求，同时受限于现场环境布局对机器人行动路径精密规划。
            </p>
            <p
              class="
                special-color--blue
                font-weight
                s4_des_font-size
                single-item
                line-height--32
              "
            >
              客户现场多品牌CNC,凭借强大的软件兼容能力，毫无障碍进行通讯；
            </p>
            <p
              class="
                special-color--blue
                font-weight
                s4_des_font-size
                single-item
                line-height--32
              "
            >
              抓取负载要求大于12kg,复合机器人机械臂末端执行精度要求±1mm；
            </p>
            <p
              class="
                special-color--blue
                font-weight
                s4_des_font-size
                single-item
                line-height--32
              "
            >
              一对多上料，单次抓取循环30s，领先行业。
            </p>
          </div>
        </div>
        <p class="font-size--22 margin-bottom--10 text-align--center">案例2</p>
        <div class="screen4__demo">
          <div class="screen4__demo--left">
            <img src="@/assets/images/cr/m-14.png" alt="" />
          </div>
          <div class="screen4__demo--right">
            <p class="s4_des_font-size line-height--32">
              客户是一家专注于连接器的研发、生产和销售的国家高新技术企业，产品主要应用于3C（电脑、通讯、消费电子）、汽车和通讯等领域。项目应用需要复合机器人替代人工进行料架库位中电极/工件的取放、搬运以及电极在CNC工作台快换底座上的取放，期间需要与客户的控制系统相互配合；AGV用于运输电极料架在仓库以及CNC车间的物料转运，以及CNC车间到量测室，量测室到仓库的物料转运。
            </p>
            <p
              class="
                special-color--blue
                font-weight
                s4_des_font-size
                single-item
                line-height--32
              "
            >
              复合机器人从电极料架中抓取电极至CNC机台加工，加工完成品由ARV抓取后放置料架，AGV运输满料架至量测室内测检测；
            </p>
            <p
              class="
                special-color--blue
                font-weight
                s4_des_font-size
                single-item
                line-height--32
              "
            >
              复合机器人机械臂末端执行精度要求±1mm，抓取负载要求大于6kg;
            </p>
            <p
              class="
                special-color--blue
                font-weight
                s4_des_font-size
                single-item
                line-height--32
              "
            >
              复合机器人采用潜伏顶升功能，停车精度需求±5mm；
            </p>
            <p
              class="
                special-color--blue
                font-weight
                s4_des_font-size
                single-item
                line-height--32
              "
            >
              系统执行任务段由MES端下单任务订单指令，AGV系统进行任务派送。
            </p>
          </div>
        </div>
        <p class="font-size--22 margin-bottom--10 text-align--center">案例3</p>
        <div class="screen4__demo">
          <div class="screen4__demo--left">
            <img src="@/assets/images/cr/m-15.png" alt="" />
          </div>
          <div class="screen4__demo--right">
            <p class="s4_des_font-size line-height--32">
              客户的耳机类产品生厂商本项目为客户智能制造第一批次试点。工艺流程涉及客户全部工艺段，单条线体使用4台复合机器人以及10台搬运机器人。全厂共计50台复合机器人150台搬运机器人。24小时作业，对接设备上千台，对调运算法和机器人软硬件产品稳定性落地具有重大示范意义。
            </p>
            <p
              class="
                special-color--blue
                font-weight
                s4_des_font-size
                single-item
                line-height--32
              "
            >
              单一场景超200台多机种AMR混合调度；
            </p>
            <p
              class="
                special-color--blue
                font-weight
                s4_des_font-size
                single-item
                line-height--32
              "
            >
              复合机器人上下料全流程用时21s,行业第一；
            </p>
            <p
              class="
                special-color--blue
                font-weight
                s4_des_font-size
                single-item
                line-height--32
              "
            >
              高流量高节拍，人车混用通道保障生产效率；
            </p>
            <p
              class="
                special-color--blue
                font-weight
                s4_des_font-size
                single-item
                line-height--32
              "
            >
              5G专网和5G公网热备切换；
            </p>
            <p
              class="
                special-color--blue
                font-weight
                s4_des_font-size
                single-item
                line-height--32
              "
            >
              与客户端多机种机台直联，同时与客户端MES、SAP等控制软件直联。
            </p>
          </div>
        </div>
      </div>
      <div>
        <p class="s4_title_font-size margin-top--20 screen4-title3 font-weight">
          更多应用
        </p>

        <div class="screen4-app">
          <img src="@/assets/images/cr/m-16.png" alt="" />
          <img src="@/assets/images/cr/m-17.png" alt="" />
          <img src="@/assets/images/cr/m-18.png" alt="" />
          <img src="@/assets/images/cr/m-19.png" alt="" />
          <img src="@/assets/images/cr/m-20.png" alt="" />
          <img src="@/assets/images/cr/m-21.png" alt="" />
          <img src="@/assets/images/cr/m-22.png" alt="" />
          <img src="@/assets/images/cr/m-23.png" alt="" />
          <img src="@/assets/images/cr/m-24.png" alt="" />
        </div>
        <div class="screen4-app__button">
          <button
            id="btn5"
            class="
              btn
              s4_font-size--35
              button
              special-color--blue
              btn--fluctuate
            "
          >
            即刻申请免费方案设计
          </button>
          <!-- <img id="btn5" class="button" src="@/assets/images/cr/btn-5.png" alt="即刻申请免费方案设计"> -->
        </div>
      </div>
    </div>
    <div class="screen screen5">
      <p class="screen5-title s4_title_font-size font-weight">生态合作</p>
      <p class="screen5-slog font-size--22">协同发展 共赢未来</p>
      <div class="screen5--content">
        <div class="screen5--content__div">
          <img src="@/assets/images/cr/m-50.png" alt="GIMATIC" />
          <p class="font-size--14">GIMATIC</p>
        </div>
        <div class="screen5--content__div">
          <img src="@/assets/images/cr/m-51.png" alt="EWELLIX" />
          <p class="font-size--14">EWELLIX</p>
        </div>
        <div class="screen5--content__div">
          <img src="@/assets/images/cr/m-52.png" alt="ZIMMER GROUP" />
          <p class="font-size--14">ZIMMER GROUP</p>
        </div>
        <div class="screen5--content__div">
          <img src="@/assets/images/cr/m-53.png" alt="HIWIN" />
          <p class="font-size--14">HIWIN</p>
        </div>
        <div class="screen5--content__div">
          <img src="@/assets/images/cr/m-54.png" alt="HIKVISION" />
          <p class="font-size--14">HIKVISION</p>
        </div>
        <div class="screen5--content__div">
          <img src="@/assets/images/cr/m-55.png" alt="CONGNEX" />
          <p class="font-size--14">CONGNEX</p>
        </div>
        <div class="screen5--content__div">
          <img src="@/assets/images/cr/m-56.png" alt="GEEK" />
          <p class="font-size--14">GEEK</p>
        </div>
        <div class="screen5--content__div">
          <img src="@/assets/images/cr/m-57.png" alt="YOUIBOT" />
          <p class="font-size--14">YOUIBOT</p>
        </div>
        <div class="screen5--content__div">
          <img src="@/assets/images/cr/m-58.png" alt="ROBOTIQ" />
          <p class="font-size--14">ROBOTIQ</p>
        </div>
        <div class="screen5--content__div">
          <img src="@/assets/images/cr/m-59.png" alt="SENSOPART" />
          <p class="font-size--14">SENSOPART</p>
        </div>
        <div class="screen5--content__div">
          <img src="@/assets/images/cr/m-60.png" alt="ON-ROBOT" />
          <p class="font-size--14">ON-ROBOT</p>
        </div>
        <div class="screen5--content__div">
          <img src="@/assets/images/cr/m-61.png" alt="SCHMALZ" />
          <p class="font-size--14">SCHMALZ</p>
        </div>
        <div class="screen5--content__div">
          <img src="@/assets/images/cr/m-62.png" alt="SICK" />
          <p class="font-size--14">SICK</p>
        </div>
        <div class="screen5--content__div">
          <img src="@/assets/images/cr/m-63.png" alt="MECH MIND" />
          <p class="font-size--14">MECH MIND</p>
        </div>
        <div class="screen5--content__div">
          <img src="@/assets/images/cr/m-64.png" alt="STANDARD ROBOTS" />
          <p class="font-size--14">STANDARD ROBOTS</p>
        </div>
        <div class="screen5--content__div">
          <img src="@/assets/images/cr/m-65.png" alt="TOYO" />
          <p class="font-size--14">TOYO</p>
        </div>
      </div>
    </div>

    <div class="screen6">
      <p
        class="
          s4_title_font-size
          margin-top--20
          margin-bottom--392
          text-align--center
          font-weight
        "
      >
        产品参数
      </p>
      <img src="@/assets/images/cr/params-1.png" alt="" />
      <img src="@/assets/images/cr/params-2.png" alt="" />
      <img src="@/assets/images/cr/params-3.png" alt="" />
      <div class="screen6-button">
        <button id="btn6" class="s_btn s5_btn button gradient_text">
          下载产品手册<img src="@/assets/images/cr/icon-btn-2.png" alt="" />
        </button>
        <!-- <img id="btn6" class="button" src="@/assets/images/cr/btn-6.png" alt="下载产品手册"> -->
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss">
.cr {
  color: #fff;

  .special-color {
    color: #38b3ef;
  }

  .special-color-d {
    color: #5cd1d5;
  }

  .special-color--blue {
    color: #38b3ef;
  }

  .button {
    cursor: pointer;
  }

  .btn {
    display: flex;
    align-items: center;
    justify-content: center;
    /* width: 13%; */
    height: 5.185%;
    font-size: 0.1458rem;
    color: #38b3ef;
    font-weight: bold;
    background-color: transparent;
    border-radius: 69px;
    border: 0.010416rem solid #38b3ef;
  }

  .btn.special-color--blue {
    border-color: #38b3ef;
  }

  .btn > img {
    width: 0.1875rem;
    height: 0.1875rem;
    margin-left: 0.5208%;
  }

  .m .btn {
    width: 5.2rem;
    height: 0.92rem;
    font-size: 0.36rem;
    border-radius: 0.64rem;
    border: 2px solid #38b3ef;
  }

  .m .btn > img {
    width: 0.36rem;
    height: 0.36rem;
    margin-left: 0.2rem;
  }

  .is-disabled {
    position: relative;
    cursor: not-allowed;
  }

  .video {
    width: 100%;
  }

  video {
    object-fit: cover;
  }

  .user-select--none {
    user-select: none;
  }

  .pointer-events--none {
    pointer-events: none;
  }

  .screen {
    position: relative;
    width: 100%;
  }

  @keyframes BtnFluctuate {
    0% {
      transform: translate(0, 0);
    }
    50% {
      transform: translate(0, 10px);
    }
    100% {
      transform: translate(0, 0);
    }
  }

  @keyframes MBtnFluctuate {
    0% {
      transform: translate(0, 0);
    }
    50% {
      transform: translate(0, 0.2rem);
    }
    100% {
      transform: translate(0, 0);
    }
  }

  .btn--fluctuate {
    animation: BtnFluctuate 1s 0.5s linear infinite;
  }

  .m .btn--fluctuate {
    animation: MBtnFluctuate 1s 0.5s linear infinite;
  }

  .screen1 {
    background-image: url(@/assets/images/cr/poster-m-1.png);
    background-position: 0 0;
    background-repeat: no-repeat;
    background-size: cover;
  }

  .screen1__box--1 {
    position: absolute;
    /* left: 120px;
    top: 249px; */
    left: 5.26%;
    top: 35%;
  }

  .m .screen1__box--1 {
    left: 0.32rem;
    top: 2.4rem;
  }

  .v-title--1 {
    margin-bottom: 50px;
  }

  .screen1__box--2 {
    position: absolute;
    /* left: 120px;
    bottom: 10%; */
    left: 6%;
    bottom: 13%;
    color: #fff;
    /* width: 432px; */
    width: 28%;
    padding-bottom: 18px;
    border-bottom: 0.005rem solid rgba(255, 255, 255, 0.45);
  }

  .m .screen1__box--2 {
    left: 0.32rem;
    width: 80%;
    font-size: 0.36rem;
    padding-bottom: 0.36rem;
  }

  .screen1--mv-down {
    position: absolute;
    right: 0;
    display: inline-flex;
    justify-content: center;
    bottom: 10px;
    padding: 10px;
    animation: Fluctuate 1s 0.5s linear infinite;
  }

  @keyframes Fluctuate {
    0% {
      transform: translate(-50%, 0);
    }
    50% {
      transform: translate(-50%, 10px);
    }
    100% {
      transform: translate(-50%, 0);
    }
  }

  @keyframes MFluctuate {
    0% {
      transform: translate(-50%, 0);
    }
    50% {
      transform: translate(-50%, 0.2rem);
    }
    100% {
      transform: translate(-50%, 0);
    }
  }

  .screen1--mv-down > img {
    /* width: 30px;
    height: 23px; */
    width: 0.15625rem;
    height: 0.1197rem;
  }

  .m .screen1--mv-down {
    left: 50%;
    transform: translateX(-50%);
    bottom: 0.22rem;
    padding: 0.1rem;
    animation: MFluctuate 1s 0.5s linear infinite;
  }

  .m .screen1--mv-down > img {
    width: 0.6rem;
    height: 0.46rem;
  }

  .single-item {
    position: relative;
  }

  .screen2 {
    background-image: url('@/assets/images/cr/poster-m-2.png');
    background-position: 0 0;
    background-repeat: no-repeat;
    background-size: cover;
  }

  .mask {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      to bottom left,
      rgba(0, 0, 0, 0.4),
      rgba(0, 0, 0, 0)
    );
  }

  .screen2__box--1 {
    position: absolute;
    /* right: 8%; */
    /* top: 200px; */
    top: 30%;
    right: 13.38%;
    color: #fff;
  }

  .m .screen2__box--1 {
    top: 1.52rem;
    left: 50%;
    right: 0;
    width: 100%;
    transform: translateX(-50%);
  }

  .screen2__box--1 > p {
    text-align: right;
    margin-bottom: 4px;
  }

  .screen2__box--2 {
    position: absolute;
    /* right: 8%;
    bottom: 20%; */
    right: 14%;
    bottom: 14.8%;
    width: 17.8%;
  }

  .pc .screen2__box--2 > .btn {
    width: 100%;
  }

  .screen2__box--2 > img {
    width: 250px;
  }

  .m .screen2__box--1 > p {
    text-align: center;
  }

  .m .screen2__box--2 {
    right: 50%;
    transform: translateX(50%);
  }

  .m .screen2__box--2 > img {
    width: 5rem;
  }

  .screen3 {
    background-image: url('@/assets/images/cr/bg-3.png');
    background-repeat: no-repeat;
    background-size: cover;
    background-position: 0 0;
    color: #fff;
    padding-top: 5.56%;
    box-sizing: border-box;
  }

  .m .screen3 {
    padding-top: 0;
    background: none;
  }

  .screen3--title {
    width: 100%;
    text-align: center;
    margin-bottom: 0.7rem;
  }

  .screen3-content {
  }

  .screen3-desc {
    width: 74.27%;
    position: relative;
    left: 12.86%;
  }

  .screen3-desc > p {
    text-align: left;
  }

  .m .screen3-desc > p {
    text-align: left;
    margin-bottom: 0.28rem;
  }

  .m-bg {
    background-image: url('@/assets/images/cr/m-bg-box.png');
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center top;
  }

  .m .screen3-content {
    margin: 0 0.3rem;
    padding: 0.6rem 0.36rem 0.6rem;
    box-sizing: border-box;
  }

  .screen3-content__div {
    justify-content: center;
    margin-bottom: 14px;
  }

  .m .screen3-content__div {
    width: 100%;
    margin: 0 auto;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }

  .screen3-content--box {
    /* width: 20%; */
    /* max-width: 320px; */
    width: 1.8073rem;
    /* margin: 0 -5px 0; */
    margin: 0 -0.86875% 0;
    display: inline-flex;
    flex-direction: column;
    align-items: center;
  }

  .m .screen3-content--box {
    width: 50%;
    margin-bottom: 0.3rem;
  }

  .screen3-content__img {
    width: 100%;
  }

  .screen3-content__p {
    flex: 0 0 auto;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    /* width: 164px; */
    /* height: 45px; */
    /* margin-bottom: .10416rem; */
    margin-bottom: 0.26041rem;
  }

  .m .screen3-content__p {
    width: 100%;
    display: inline-block;
    height: 0.8rem;
    line-height: 0.8rem;
    margin-bottom: 0.2rem;
    border-radius: 4px;
    background-color: rgba(0, 0, 0, 0.4);
  }

  .screen3-content--add {
    /* width: 1.3%;
    height: 1.3%; */
    width: 0.234375rem;
    height: 0.234375rem;
    margin-top: 0.026rem;
  }

  .screen3__footer {
    /* display: flex;
    justify-content: center;
    width: 100%;
    margin-top: 120px; */
    display: flex;
    justify-content: space-evenly;
    width: 100%;
    margin-top: 5%;
  }

  .screen3__footer > .btn {
    margin: 0 2.78%;
  }

  .m .screen3__footer {
    margin-top: 1.2rem;
  }

  .m .screen3__footer > .btn {
    width: 3.6rem;
    margin: 0 0.3rem;
  }

  .screen4 {
    background-image: url('@/assets/images/cr/bg-4.png');
    /* background-repeat: no-repeat; */
    background-size: cover;
    background-position: 0 0;
    /* padding-top: 150px; */
    color: #fff;
    padding-bottom: 125px;
    padding-top: 4.5%;
  }

  .m .screen4 {
    padding: 2rem 0 2.5rem;
  }

  .screen4--title1 {
    width: calc(76% * 0.8 + 36px);
    margin: 0 auto;
    /* margin-bottom: 85px; */
    /* width: 39.3%; */
    margin-bottom: 2.95%;
  }

  .screen4--title1 > p:nth-of-type(1) {
    text-align: center;
  }

  .m .screen4--title1 {
    width: 90%;
    text-align: left;
  }

  .screen4--title1 > p {
    margin-bottom: 20px;
  }

  .m .screen4--title1 > p {
    margin-bottom: 0.4rem;
  }

  .screen4--content1 {
    /* width: 76%; */
    width: 78.14%;
    margin: 0 auto;
    display: flex;
    flex-wrap: wrap;
    /* justify-content: center; */
    justify-content: space-around;
  }

  .screen4--content1 > img {
    /* width: 20%; */
    /* margin: 8px 6px; */
    width: 23.34%;
    margin: 0.88% 0.65%;
  }

  .screen4--content1 > p {
    /* width: 20%; */
    /* margin: 8px 6px; */
    margin: 0.88% 0.65%;
    text-align: center;
    width: 23.34%;
  }

  .screen4--button1 {
    /* width: 519px;
    margin: 130px auto 100px; */
    display: flex;
    justify-content: center;
    margin: 0.45rem;
  }

  .screen4--button1 > .btn {
    width: 100%;
  }

  .m .screen4--button1 {
    width: 90%;
    margin: 1.3rem auto 2.4rem;
  }

  .screen4--title2 {
    text-align: center;
    /* margin: 0 auto 80px; */
    margin: 7.4% auto 7.4%;
  }

  .m .screen4--title2 {
    margin-bottom: 1.4rem;
  }

  .screen4__demo {
    display: flex;
    justify-content: center;
    align-items: flex-start;
    /* margin: 0 30px 90px; */
    margin: 0 30px 3.34%;
  }

  .screen4__demo--left {
    width: 26%;
    margin-right: 40px;
  }

  .screen4__demo--left > p {
    text-align: center;
  }

  .screen4__demo--left > img {
    /* width: 100%; */
    /* max-width: 400px; */
    width: 91.1%;
  }

  .screen4__demo--right {
    width: 50%;
    min-width: 650px;
  }

  .screen4-title3 {
    text-align: center;
  }

  .screen4-app {
    /* width: 76%; */
    width: 68.28125%;
    margin: 46px auto 48px;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
  }

  .screen4-app > img {
    /* width: calc(30% - 36px); */
    width: 30.358505%;
    /* margin: 18px; */
    margin: 0.9375%;
  }

  .screen4-app__button {
    /* width: 519px; */
    margin: 0 auto;
    width: 27%;
  }

  .screen4-app__button > .btn {
    width: 100%;
  }

  .screen4-app__button > .s4_font-size--35 {
    font-size: 0.18229167rem;
  }

  .m .screen4-app__button {
    width: 90%;
  }

  .m .case-box {
    position: relative;
    width: calc(100% - 0.6rem);
    margin: 0 0.3rem;
    background-color: rgba(0, 0, 0, 0.3);
    box-sizing: border-box;
    padding: 0.22rem 0.32rem 0.2rem;
    margin-bottom: 0.32rem;
  }

  .m .case-box.margin-bottom--100 {
    margin-bottom: 1rem;
  }

  .case-box__title--icon {
    position: absolute;
    top: 0.4rem;
    right: 0.32rem;
  }

  .case-box__content {
    display: none;
    padding-top: 0.32rem;
    padding-bottom: 0.32rem;
  }

  .case-box__content > img {
    width: 100%;
    margin-bottom: 0.32rem;
  }

  .case-box__content > p {
    line-height: 0.64rem;
  }

  .is-open .case-box__title {
    padding-bottom: 0.2rem;
    border-bottom: 0.005rem solid rgba(255, 255, 255, 0.06);
  }

  .is-open .case-box__content {
    display: block;
  }

  .is-open .case-box__title--icon {
    transform: rotate(180deg);
  }

  .swiper__div {
    position: relative;
    margin-bottom: 1.6rem;
  }

  .m .swiper-slide--content {
    width: calc(100% - 0.6rem);
    margin: 0 0.3rem;
    padding: 0.6rem 0.36rem 0.6rem;
    box-sizing: border-box;
  }

  .m .swiper-slide--content > img {
    width: 100%;
    height: 5rem;
  }

  .m .swiper__div .swiper-pagination.swiper-pagination-bullets {
    bottom: -0.8rem;
    left: 50%;
    transform: translateX(-50%);
  }

  .m .swiper__div .swiper-pagination--screen4 {
    display: inline-block;
    width: 0.5rem;
    height: 0.5rem;
    line-height: 0.5rem;
    font-size: 0.24rem;
    margin: 0 0.2rem !important;
  }

  .m .swiper__div .swiper-pagination--screen4.swiper-pagination-bullet-active {
    background: linear-gradient(to bottom right, #4fa0f4, #80d5d4);
  }

  .m .limited-size {
    width: 100%;
    overflow: hidden;
  }

  .m .oversized-box {
    transform: translateX(-25%);
    width: 200%;
  }

  .m .swiper-container--app {
    overflow: hidden;
    margin-bottom: 1.5rem;
  }

  .swiper-container--app .swiper-slide {
    font-size: 0.2rem;
    background-color: #fff;
    display: -webkit-box;
    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    -webkit-justify-content: center;
    justify-content: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    -webkit-align-items: center;
    align-items: center;
    transition: 300ms;
    transform: scale(0.8);
  }

  .swiper-container--app .swiper-slide-active,
  .swiper-slide-duplicate-active {
    transform: scale(1);
  }

  .swiper-container--app .swiper-slide > img {
    width: 100%;
  }

  .screen5 {
    background-color: #000;
    padding-top: 3px;
    color: #fff;
  }

  .m .screen5 {
    height: auto;
    padding-bottom: 1rem;
  }

  .screen5-title {
    /* margin-top: 90px; */
    margin-bottom: 14px;
    text-align: center;
    margin-top: 9.24%;
  }

  .screen5-slog {
    text-align: center;
  }

  .screen5--content {
    width: 62.5%;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    margin: 80px auto 0;
    display: flex;
    flex-wrap: wrap;
    /* max-width: 1200px; */
    padding-bottom: 20%;
  }

  .m .screen5--content {
    width: 100%;
    margin: 0.4rem 0 0.2rem;
    padding: 0 0.3rem;
    box-sizing: border-box;
    scrollbar-width: none;
    -ms-overflow-style: none;
  }

  .m .screen5--content::-webkit-scrollbar {
    display: none;
    /* Chrome Safari */
  }

  .screen5--content__div {
    width: 9.25%;
    height: 19.389%;
    margin: 0 1.377% 1.85%;
  }

  .m .screen5--content__div {
    margin: 0;
  }

  .screen5--content__div > img {
    width: 100%;
    height: 79.57%;
    margin-bottom: 4px;
  }

  .screen5--content__div > p {
    /* font-size: 12px; */
    text-align: center;
  }

  .m .screen5--content__div > img {
    width: 2rem;
    height: 2rem;
    margin-bottom: 0.2rem;
  }

  .screen6 {
    background-image: url('@/assets/images/cr/bg-4.png');
    /* background-repeat: no-repeat; */
    background-size: cover;
    background-position: 0 0;
    padding-top: 90px;
    color: #fff;
    padding-bottom: 125px;
  }

  .screen6 > img {
    display: block;
    width: 66%;
    margin: 0 auto 40px;
  }

  .m .screen6 > img {
    width: 90%;
    margin-bottom: 0.4rem;
  }

  .screen6-button {
    display: flex;
    justify-content: center;
    /* margin-top: 73px; */
    margin-top: 3.55%;
  }

  .screen6-button > img {
    width: 250px;
  }

  .m .screen6-button > img {
    width: 4.2rem;
  }

  .pc {
    display: block;
    /* font-size: 62.5% !important; */
  }

  .m {
    display: none;
  }

  @media screen and (max-device-width: 500px) {
    .pc {
      display: none;
    }
    .m {
      display: block;
    }
  }

  /* new style */

  /* 首屏 */

  .s1_title_font-size {
    font-size: 0.59375rem;
  }

  .s1_title2_font-size {
    font-size: 0.3075rem;
  }

  .s1_title3_bottom_font-size {
    font-size: 0.1041rem;
  }

  /* 第二屏 */

  .s2_title_font-size {
    font-size: 0.34375rem;
  }

  .s2_title2_font-size {
    font-size: 0.1354rem;
    font-weight: 600;
  }

  .s2_btn {
    /* width: 17.86%; */
    font-size: 0.22916rem;
    width: 100%;
    height: 5.56%;
  }

  .s2_btn > img {
    width: 0.1875rem;
    height: 0.1875rem;
    margin-left: 0.5208%;
  }

  .s3_title_font-size {
    font-size: 0.39065rem;
  }

  .s3_w_title_font-size {
    font-size: 0.15625rem;
  }

  .s3_des_font-size {
    font-size: 0.10417rem;
    text-align: left;
  }

  .s3_footer_btn {
    font-size: 0.17708rem;
    width: 16.4%;
    height: 5.1%;
  }

  .s3_footer_btn > img {
    width: 0.1875rem;
    height: 0.1875rem;
    margin-left: 0.5208%;
  }

  .s4_title_font-size {
    font-size: 0.390625rem;
  }

  .s4_des_font-size {
    font-size: 0.08854167rem;
  }

  .s4_b_title_font-size {
    font-size: 0.2084rem;
    font-weight: 600;
  }

  .s4_btn {
    font-size: 0.18229167rem;
    width: 27%;
    height: 9.7%;
  }

  .s_btn {
    display: flex;
    align-items: center;
    justify-content: center;
    color: #38b3ef;
    font-weight: 600;
    background-color: transparent;
    border-radius: 126px;
    border: 0.010416rem solid #38b3ef;
  }

  .s_btn > img {
    width: 0.1875rem;
    height: 0.1875rem;
    margin-left: 0.5208%;
  }

  .s4_font-size--35 {
    font-size: 0.18229167rem;
  }

  .s5_btn {
    font-size: 0.18229rem;
    width: 15%;
  }
  html,
  body {
    padding: 0;
    margin: 0;
    /* font-size: 0; */
  }

  p {
    margin: 0;
  }

  .display--flex {
    display: flex;
  }

  .font-weight {
    font-weight: bold;
  }

  .font-size--10 {
    font-size: 0.052rem;
  }

  .font-size--11 {
    font-size: 0.05729167rem;
  }

  .font-size--12 {
    font-size: 0.0625rem;
  }

  .font-size--14 {
    font-size: 0.07291667rem;
  }

  .font-size--16 {
    font-size: 0.0833rem;
  }

  .font-size--20 {
    font-size: 0.10416rem;
  }

  .font-size--22 {
    font-size: 0.11458rem;
  }

  .font-size--24 {
    font-size: 0.125rem;
  }

  .font-size--36 {
    font-size: 0.1875rem;
  }

  .font-size--30 {
    font-size: 0.15625rem;
  }

  .font-size--42 {
    font-size: 0.21875rem;
  }

  .font-size--45 {
    font-size: 0.2343rem;
  }

  .font-size--56 {
    font-size: 0.2916rem;
  }

  .font-size--60 {
    font-size: 0.3125rem;
  }

  .font-size--66 {
    font-size: 0.34375rem;
  }

  .font-size--76 {
    font-size: 0.3958rem;
  }

  .font-size--86 {
    font-size: 0.4479rem;
  }

  .m .font-size--10 {
    font-size: 0.2rem;
  }

  .m .font-size--12 {
    font-size: 0.24rem;
  }

  .m .font-size--14 {
    font-size: 0.28rem;
  }

  .m .font-size--16 {
    font-size: 0.36rem;
  }

  .m .font-size--20 {
    font-size: 0.4rem;
  }

  .m .font-size--22 {
    font-size: 0.44rem;
  }

  .m .font-size--24 {
    font-size: 0.48rem;
  }

  .m .font-size--36 {
    font-size: 0.72rem;
  }

  .m .font-size--30 {
    font-size: 0.6rem;
  }

  .m .font-size--42 {
    font-size: 0.84rem;
  }

  .m .font-size--45 {
    font-size: 0.9rem;
  }

  .m .font-size--56 {
    font-size: 1.12rem;
  }

  .m .font-size--66 {
    font-size: 1.32rem;
  }

  .m .font-size--60 {
    font-size: 1.2rem;
  }

  .m .font-size--76 {
    font-size: 1.52rem;
  }

  .m .font-size--86 {
    font-size: 1.72rem;
  }

  .margin-top--20 {
    margin-top: 0.25rem;
  }

  .margin-bottom--392 {
    margin-bottom: 0.362963rem;
  }

  .margin-bottom--10 {
    margin-bottom: 10px;
  }

  .margin-bottom--20 {
    margin-bottom: 20px;
  }

  .margin-bottom--30 {
    margin-bottom: 30px;
  }

  .margin-bottom--40 {
    margin-bottom: 40px;
  }

  .margin-bottom--50 {
    margin-bottom: 50px;
  }

  .margin-bottom--100 {
    margin-bottom: 100px;
  }

  .m .margin-bottom--10 {
    margin-bottom: 0.1rem;
  }

  .m .margin-bottom--20 {
    margin-bottom: 0.2rem;
  }

  .m .margin-bottom--30 {
    margin-bottom: 0.3rem;
  }

  .m .margin-bottom--40 {
    margin-bottom: 0.4rem;
  }

  .m .margin-bottom--50 {
    margin-bottom: 0.5rem;
  }

  .m .margin-bottom--100 {
    margin-bottom: 1rem;
  }

  .line-height--16 {
    line-height: 16px;
  }

  .line-height--20 {
    line-height: 20px;
  }

  .line-height--24 {
    line-height: 24px;
  }

  .line-height--28 {
    line-height: 28px;
  }

  .line-height--32 {
    /* line-height: 32px; */
    line-height: 0.166667rem;
  }

  .text-align--center {
    text-align: center;
  }
}
</style>