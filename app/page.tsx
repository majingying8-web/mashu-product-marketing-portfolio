"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import type { ReactNode } from "react";

const methodSteps = [
  { title:"发现问题", question:"用户为什么需要？", description:"从访谈、评论与后台数据里，找到用户真实的需求与痛点。" },
  { title:"定义价值", question:"用户为什么选你？", description:"把用户需求翻译成选择的理由，输出对外表达体系。" },
  { title:"推动上市", question:"用户如何看见、理解并选择？", description:"用同一套价值表达，对齐内容、渠道与销售话术。" },
  { title:"验证生意", question:"这门生意值得继续吗？", description:"用前测和经营数据决定加码、调整还是止损。" },
];

type CaseId = "seedpace" | "w20" | "clock" | "w3";
type ResultMetric = { value:string; label:string; detail?:string };
type CaseStudy = {
  id:CaseId;
  no:string;
  directoryTitle:string;
  caseTitle?:string;
  directoryLabel:string;
  directoryQuestion:string;
  color:string;
  directoryImage:string;
  imageWidth:number;
  imageHeight:number;
  caseAlt:string;
  contributionLabel:string;
  coreContribution:string;
  coreContributionHighlight?:string;
  resultMetrics?:ResultMetric[];
  transfer:string;
};

const caseStudies:CaseStudy[] = [
  {
    id:"seedpace", no:"01", directoryTitle:"Seedpace 海外故事机", caseTitle:"Seedpace海外故事机", directoryLabel:"海外 GTM · 0→1", directoryQuestion:"新品牌如何验证市场，并决定是否继续投入？", color:"#E2B926", directoryImage:"/visual-seedpace.jpg", imageWidth:1746, imageHeight:901, caseAlt:"Seedpace 海外故事机与儿童用户场景", contributionLabel:"核心贡献", coreContribution:"主导 Seedpace 1.0 产品营销全案，覆盖前测、海外上市与中国版门店上市，并参与 2.0 前期评估及投入判断。", resultMetrics:[{value:"3 类",label:"市场触点完成验证",detail:"独立站、Amazon、CES"},{value:"100+",label:"潜在渠道线索"},{value:"3 家",label:"渠道完成首次提货"}], transfer:"海外GTM不是一场发布，而是连续验证产品、渠道与投入效率。",
  },
  {
    id:"w20", no:"02", directoryTitle:"希沃 AI 学习机 W20", directoryLabel:"消费者洞察 · 多产品 GTM", directoryQuestion:"如何把家长需求翻译成产品价值与上市策略？", color:"#6EAFCB", directoryImage:"/visual-w20.jpg", imageWidth:1746, imageHeight:901, caseAlt:"希沃学习机产品组合", contributionLabel:"核心贡献", coreContribution:"洞察到家长缺的不是更多资源，而是知道不同阶段该学什么、怎么学的清晰指引；据此将分阶段的教育需求翻译成成长规划，并统一到产品、页面与全渠道表达。", resultMetrics:[{value:"1000 万+",label:"上市首日销售额"},{value:"亿元级",label:"累计销售额"}], transfer:"价值定义不是增加资源，而是帮家长判断不同阶段该学什么、怎么学。",
  },
  {
    id:"clock", no:"03", directoryTitle:"AI 闹钟经营判断", directoryLabel:"经营复盘 · 投入判断", directoryQuestion:"当营销指标一切正常，生意为什么不成立？", color:"#E57A43", directoryImage:"/visual-clock.jpg", imageWidth:1745, imageHeight:901, caseAlt:"希沃 AI 闹钟产品主视觉", contributionLabel:"核心贡献", coreContribution:"复盘 1 代产品，发现在营销指标“看似正常”的表象下，定位到退货才是决定整体生意利润能否达标的关键变量，并把复盘结论输入下一代产品决策。", coreContributionHighlight:"退货", transfer:"营销指标正常，不代表退货后的经营模型成立。",
  },
  {
    id:"w3", no:"04", directoryTitle:"希沃 AI 学习机 W3", directoryLabel:"整合传播 · 内容策略", directoryQuestion:"如何让议题、内容与媒介形成同一股力量？", color:"#748F77", directoryImage:"/visual-w3.jpg", imageWidth:1746, imageHeight:901, caseAlt:"希沃AI学习机W3产品主视觉", contributionLabel:"核心贡献", coreContribution:"主导传播议题与内容策略，把产品既定的硬件优势翻译成消费者可感知、可传播、愿意讨论的话题。", resultMetrics:[{value:"2.2 亿+",label:"微博话题阅读量"},{value:"2,000 台",label:"上市首日销量"}], transfer:"技术价值只有进入用户语言，才可能成为传播议题。",
  },
];

function getCaseStudy(id:CaseId){
  const project=caseStudies.find(item=>item.id===id);
  if(!project)throw new Error(`Missing case study: ${id}`);
  return project;
}

const moreProjects = [
  {title:"新品上市",items:["希沃W3 Pro、V2 Pro、V20、护耳耳机；3Z 润颜按摩仪、美眼按摩仪、助眠眼罩、蕉下保暖内衣、伞具、鞋类产品等；"]},
  {title:"品牌与节点",items:["母亲节×中青报","教师节专题","618&双11大促","暑期营销"]},
  {title:"联名与内容",items:["豆神","高思","五三","VIPKID","洋葱学园","抓娃娃"]},
  {title:"展会与线下",items:["美国消费电子展（CES）","上海国际童书展（CCBF）","北京国际图书博览会（BIBF）","国际孕婴童展（CBME）","中国进出口商品交易会（CIEF / Canton Fair）"]},
  {title:"效果内容",items:["千川素材","星图","小红书 KFS","达人种草"]},
];

const experience = [
  {period:"2023.03—2026.07",company:"广州希倍思智能科技有限公司（CVTE 孵化公司）",role:"产品营销经理"},
  {period:"2021.12—2023.02",company:"三智（深圳）医疗科技有限公司（汤臣倍健孵化）",role:"产品营销专员"},
  {period:"2020.06—2021.11",company:"深圳减字科技有限公司（蕉下品牌）",role:"电商内容专员"},
  {period:"2016.09—2020.06",company:"深圳大学 · 传播学院",role:"广告设计本科"},
];

const navItems = [{id:"top",label:"首页"},{id:"method",label:"方法"},{id:"work",label:"案例"},{id:"about",label:"关于"}];

function CaseHeader({project}:{project:typeof caseStudies[number]}){
  const [contributionBefore,contributionAfter]=project.coreContributionHighlight
    ? project.coreContribution.split(project.coreContributionHighlight)
    : [project.coreContribution,""];
  return <header className="caseHeader caseOverview reveal" style={{"--accent":project.color} as React.CSSProperties}>
    <Image className="caseOverviewImage" src={project.directoryImage} alt={project.caseAlt} width={project.imageWidth} height={project.imageHeight} sizes="100vw"/>
    <span className="caseOverviewVeil" aria-hidden="true"/>
    <div className="caseOverviewLead">
      <span className="caseNumberPill">CASE {project.no}</span>
      <p className="caseProjectTitle">{project.caseTitle??project.directoryTitle}</p>
      <h2>{project.directoryQuestion}</h2>
      <div className="caseHeroResponsibility">
        <span>{project.contributionLabel}</span>
        <p>{contributionBefore}{project.coreContributionHighlight&&<strong>{project.coreContributionHighlight}</strong>}{contributionAfter}</p>
      </div>
    </div>
  </header>
}

function CaseResults({project,className=""}:{project:CaseStudy;className?:string}){
  if(!project.resultMetrics?.length)return null;
  return <div className={`caseResultStrip ${className}`.trim()} aria-label={`${project.directoryTitle}项目结果`}>
    <p className="caseResultLabel">项目结果</p>
    {project.resultMetrics.map(metric=><article key={metric.value}>
      <strong>{metric.value}</strong><span>{metric.label}</span>{metric.detail&&<small>{metric.detail}</small>}
    </article>)}
  </div>
}

function AutoplayVideo({src,ariaLabel,captionSrc}:{src:string;ariaLabel:string;captionSrc?:string}){
  const videoRef=useRef<HTMLVideoElement>(null);
  useEffect(()=>{
    const video=videoRef.current;
    if(!video)return;
    video.muted=true;
    const observer=new IntersectionObserver(entries=>{
      entries.forEach(entry=>{
        if(entry.isIntersecting&&entry.intersectionRatio>=.45)video.play().catch(()=>undefined);
        else video.pause();
      });
    },{threshold:[0,.45,.75]});
    observer.observe(video);
    return()=>observer.disconnect();
  },[]);
  return <video ref={videoRef} src={src} controls playsInline muted preload="metadata" aria-label={ariaLabel}>{captionSrc&&<track kind="captions" src={captionSrc} srcLang="zh-CN" label="中文" default/>}</video>;
}

function ScrollableRegion({className,ariaLabel,children}:{className:string;ariaLabel:string;children:ReactNode}){
  return <div className={className} role="region" aria-label={ariaLabel}
    // Scrollable media needs a keyboard focus target; the role and label expose its purpose.
    // eslint-disable-next-line jsx-a11y/no-noninteractive-tabindex
    tabIndex={0}>{children}</div>;
}

function SeedpaceCase(){
  const p=getCaseStudy("seedpace");
  const validations=[
    {
      period:"2025.03",
      phase:"前测",
      question:"人群对吗？",
      action:"以低成本 FB 前测，测北美家长对产品概念、价格与内容表达的真实反馈。",
      finding:"概念获得正向反馈，但偏母婴的目标人群与众筹平台的科技尝鲜人群并不重合——众筹不是合适的首发场。",
      decision:"放弃众筹，转入正式上市。",
      evidence:"322 条线索 / CPL $7.08 / CTR 2.38% / CPC $0.95 / 预算完成度 65%"
    },
    {
      period:"2025.09—12",
      phase:"上市 + Black Friday",
      question:"渠道通吗？",
      action:"正式上市，Black Friday 节点同步投入红人内容与独立站推广。",
      finding:"Amazon 能承接明确搜索需求，但儿童故事机的购买同时依赖品牌信任、内容认知与家庭教育场景；仅靠站内自然流量难以形成稳定增长。",
      decision:"渠道可以承接需求，却难以独立创造需求；仍需持续投入站外内容与品牌认知。"
    },
    {
      period:"2026.01",
      phase:"CES",
      question:"有吸引力吗？",
      action:"CES 现场演示，持续收集用户与行业反馈。",
      finding:"现场互动踊跃、驻足者众；以差异化外观为传播噱头，吸引多知等多家媒体主动报道，短视频在小红书获得 18 万自然流量播放。",
      decision:"产品吸引力成立，生意模型仍需继续验证。"
    },
    {
      period:"2026.02—04",
      phase:"2.0 评估",
      question:"护城河够吗？",
      action:"参与故事机 2.0 前期评估，核算继续投入所需的条件与代价。",
      finding:"上市时我们押注互动体验与竞品区隔；但落地后复盘 Yoto、Tonies 的增长引擎才发现，真正的护城河不在硬件、也不在交互，而在以迪士尼等 IP 为核心的内容生态。",
      decision:"追平内容生态的 IP 授权投入，超出项目当前阶段可承受水平。"
    },
    {
      period:"2026.04",
      phase:"阶段性投入判断",
      question:"还要加码吗？",
      action:"汇总前四个阶段的验证结果，识别结构性壁垒并形成投入建议。",
      finding:"为故事机 2.0 制定整合传播方案，并盘点落地所需的资源与投入。",
      decision:"把清晰的判断依据交到了决策桌上"
    }
  ];
  return <article className="case seedCase" id={p.id}>
  <CaseHeader project={p}/>
  <section className="seedValidationJourney reveal" aria-labelledby="seed-validation-title">
    <header>
      <h3 id="seed-validation-title">GTM 每一步，都在回答一个关键问题。</h3>
    </header>
    <div className="seedValidationList">
      {validations.map(item=><article className={`seedValidationRow ${item.decision?"":"noDecision"}`} key={item.period+item.phase}>
        <div className="seedValidationMeta">
          <time>{item.period}</time>
          <h4>{item.phase}</h4>
          <p>{item.question}</p>
        </div>
        <div className="seedValidationFinding">
          <p>{item.action}</p>
          <strong>{item.finding}</strong>
          {item.evidence&&<span>{item.evidence}</span>}
        </div>
        {item.decision&&<div className="seedValidationDecision">
          <span>判断输出</span>
          <strong>{item.decision}</strong>
        </div>}
      </article>)}
    </div>
  </section>
  <section className="seedLaunch reveal">
    <div className="seedChapterTitle">
      <h3>让资产围绕同一套价值表达。</h3>
      <p>把前测验证过的关注点，统一落到主影片、品牌内容与购买页面。</p>
    </div>
    <div className="seedTouchpoints">
      {["TVC","独立站","Amazon","红人合作","Black Friday"].map(item=><span key={item}>{item}</span>)}
    </div>
    <div className="seedLaunchSystem">
      <figure className="launchVideoCard">
        <AutoplayVideo src="/seedpace-assets/tvc.mp4" ariaLabel="Seedpace 完整版 TVC"/>
      </figure>
      <div className="launchAssetGrid">
        <section className="seedInsProof" aria-labelledby="seed-ins-title">
          <header>
            <small>海外红人内容投放</small>
            <h4 id="seed-ins-title">用红人内容，把产品带进真实的家庭场景</h4>
            <p>独立操盘 10 余组北美家庭类 KOL 内容投放，制定真实使用场景下强调孩子反应、互动玩法的内容方向，覆盖英语、西语市场，总曝光超 200 万；并将流量沉淀至品牌独立站，承接转化。</p>
          </header>
          <ScrollableRegion className="seedInsRail" ariaLabel="Seedpace 红人真实使用内容，可横向浏览">
          {[1,2,3,4,5,6,7,8,9].map((index)=><figure key={index}>
              <Image src={`/seedpace-assets/ins/ins-new-${index}.jpg`} alt={`Seedpace 红人真实家庭使用内容 ${index}`} width={1179} height={2556} sizes="(max-width: 760px) 72vw, 32vw"/>
            </figure>)}
          </ScrollableRegion>
          <p className="mediaInteractionHint seedInsHint" aria-hidden="true"><b>→</b> 向右滑动查看</p>
        </section>
        <section className="seedChannelEditorial siteChannel" aria-labelledby="seed-site-title">
          <header>
            <small>独立站 / 品牌阵地</small>
            <h4 id="seed-site-title">用更强的视觉表现力，建立品牌调性。</h4>
            <p>用完整长页建立品牌调性与购买理解。</p>
          </header>
          <ScrollableRegion className="siteLongViewport" ariaLabel="Seedpace 独立站完整页面，可向下浏览">
            <Image src="/seedpace-assets/site-long-new.jpg" alt="Seedpace 独立站完整页面" width={1595} height={4491} sizes="(max-width: 760px) 100vw, 58vw"/>
          </ScrollableRegion>
          <p className="mediaInteractionHint siteLongHint" aria-hidden="true"><b>↓</b> 向下滑动查看</p>
        </section>
        <section className="seedChannelEditorial" aria-labelledby="seed-amazon-title">
          <header>
            <small>Amazon / 搜索转化</small>
            <h4 id="seed-amazon-title">主图抢点击，A+ 讲透产品价值。</h4>
            <p>用真实使用场景的主图承接平台搜索、赢得点击；再用 A+ 连续解释品牌定位、内容玩法与无屏体验，把点击转化为购买。</p>
          </header>
          <div className="amazonPurchaseVisuals">
            <div>
              <div className="amazonHeroStrip">
                {["amazon-slide-1.jpg","amazon-slide-2.jpg","amazon-slide-3.jpg","amazon-slide-4.jpg","amazon-slide-5.jpg","amazon-slide-6.jpg","amazon-slide-7.jpg","amazon-slide-8.jpg"].map((src,index)=><Image key={src} src={`/seedpace-assets/${src}`} alt={`Seedpace Amazon 商品主图 ${index+1}`} width={1600} height={1600} sizes="(max-width: 760px) 72vw, 30vw"/>)}
              </div>
              <p className="mediaInteractionHint seedChannelHint" aria-hidden="true"><b>→</b> 向右滑动查看</p>
            </div>
            <section className="seedAplusFeature" aria-labelledby="seed-aplus-title">
              <ScrollableRegion className="seedAplusRail" ariaLabel="Seedpace Amazon A+ 内容，可横向浏览 6 张">
                {["01-brand-and-audience.jpg","02-play-and-skills.jpg","03-story-library.jpg","04-screen-free.jpg","05-social-proof.jpg","06-comparison.jpg"].map((src,index)=><figure key={src}><Image src={`/seedpace-assets/amazon-aplus-new/${src}`} alt={`Seedpace Amazon A+ 内容 ${index+1}`} width={1432} height={587} sizes="(max-width: 760px) 88vw, 1120px"/></figure>)}
              </ScrollableRegion>
              <p className="mediaInteractionHint seedAplusHint" aria-hidden="true"><b>↓</b> 向下滑动查看</p>
            </section>
          </div>
        </section>
      </div>
    </div>
  </section>
  <section className="seedExpansion seedAfterLaunch reveal">
    <div>
      <h3>同一个产品，<br/>进入不同传播任务。</h3>
    </div>
    <div className="seedExpansionGrid">
      <article className="seedCesTouchpoint">
        <h4>从线上上市，到行业现场。</h4>
        <p>负责 CES 从展位搭建到中美传播的全案统筹，串联现场体验、媒体邀约与内容发布。</p>
        <div className="cesInvitePair">
          <Image src="/seedpace-assets/ces-invite-1.jpg" alt="Seedpace CES 2026 邀请函视觉 1" width={1646} height={2200} sizes="(max-width: 760px) 100vw, 36vw"/>
          <Image src="/seedpace-assets/ces-invite-2.jpg" alt="Seedpace CES 2026 邀请函视觉 2" width={1646} height={2200} sizes="(max-width: 760px) 100vw, 36vw"/>
        </div>
      </article>
      <article className="seedChinaAdaptation">
        <h4>进入中国市场，价值需要重新翻译。</h4>
        <p>负责品类名、功能名、门店物料、陈列与销售话术的本土化。</p>
        <div className="chinaStoreVisuals"><Image src="/seedpace-assets/china-story-machine.jpg" alt="希沃AI故事机器人中国版主视觉" width={5843} height={3840} sizes="(max-width: 760px) 100vw, 42vw"/></div>
      </article>
    </div>
  </section>
  <section className="seedDecision seedDecisionClosing reveal">
    <h3>高质量的产品GTM，也包括知道何时不再加码。</h3>
    <p className="seedClosingLead">汇总阶段证据并提交判断依据；管理层综合产品规划与资源配置，决定不再扩大投入。</p>
  </section>
  <section className="caseResultSection reveal"><CaseResults project={p}/><p className="caseLesson">{p.transfer}</p></section>
</article>}

function W20Case(){const p=getCaseStudy("w20");const steps=[
  {label:"洞察",text:<>家长缺的不是资源，<br/>而是分阶段的教育指引。</>},
  {label:"解法",text:<>首页放入「计划岛」，让指引<br/>成为孩子开机的第一眼。</>},
  {label:"表达",text:<>对外讲「分龄成长计划」，给家长<br/>一条清晰的成长路径。</>},
  {label:"落地",text:<>详情页与主图统一讲「成长规划」，<br/>让产品能力服务成长叙事。</>}
];return <article className="case w20Case" id={p.id}>
  <CaseHeader project={p}/>
  <section className="w20Narrative reveal" aria-label="W20 成长规划价值表达">
    <header className="w20NarrativeLead">
      <p className="w20PlanEyebrow">从洞察到落地</p>
      <h3>资源已经不少，家长缺的是一条清晰的成长路径。</h3>
    </header>
    <div className="w20NarrativeBody">
      <div className="w20PlanSteps">{steps.map(({label,text})=><div className="w20PlanChainItem" key={label}>
        <article className="w20PlanStep"><p><strong>{label}</strong><span>{text}</span></p></article>
      </div>)}</div>
    </div>
  </section>
  <section className="w20Proof reveal" aria-labelledby="w20-proof-title">
    <header className="w20ProofLead">
      <h3 id="w20-proof-title">让不同内容，承担不同的传播任务。</h3>
      <p>用同一套价值主张，串起家长理解与购买决策。</p>
    </header>
    <article className="w20TvcFeature">
      <div className="w20AssetCopy">
        <span>产品内容 / 家长共感</span>
        <h4>先建立家长共感，让成长规划被看见。</h4>
        <p>从家庭情境切入，让家长先理解产品价值。</p>
      </div>
      <div className="w20VideoFrame">
        <AutoplayVideo src="/w20-assets/w20-tvc.mp4" ariaLabel="希沃AI学习机W20 TVC"/>
      </div>
    </article>
    <article className="w20DetailFeature w20DetailFeatureEditorial">
      <header className="w20DetailIntro">
        <span>详情页 / 成长规划</span>
        <h4>从“资源很多”，转向“今天该怎么学”。</h4>
        <p>先讲阶段问题，再用分龄成长计划组织产品能力。</p>
      </header>
    </article>
    <div className="w20DetailRail" aria-label="W20详情页不同信息层次，可在视口内上下滑动">
      {[
        {src:"detail-overview.jpg",title:"背书痛点",width:1000,height:9874},
        {src:"detail-reading.jpg",title:"阅读成长",width:1000,height:11972},
        {src:"detail-school.jpg",title:"学龄承接",width:1000,height:9599},
        {src:"detail-hardware.jpg",title:"体验支撑",width:1000,height:8524}
      ].map(({src,title,width,height})=><article key={src}>
        <ScrollableRegion className="w20DetailViewport" ariaLabel={`${title}详情页，可上下滑动浏览`}>
          <Image src={`/w20-assets/${src}`} alt={`W20 ${title}详情页`} width={width} height={height} sizes="(max-width: 760px) 100vw, 25vw"/>
        </ScrollableRegion>
        <strong>{title}</strong>
      </article>)}
    </div>
    <p className="mediaInteractionHint w20DetailVerticalHint" aria-hidden="true"><b>↓</b> 向下滑动查看</p>
  </section>
  <section className="caseResultSection reveal"><CaseResults project={p}/><p className="caseLesson">{p.transfer}</p></section>
</article>}

function ClockCase(){const p=getCaseStudy("clock");const greenBoard=[
  {label:"内容效率",value:"行业常态",note:"完播与点击均处正常区间"},
  {label:"投放数据",value:"达行业均值",note:"千川曝光与点击成本可控"},
  {label:"转化链路",value:"跑得通",note:"从素材到直播间下单畅通"},
  {label:"互动口碑",value:"无异常",note:"评价与反馈未现集中预警"}
];const refundEvidence=[
  {label:"质量体验",quote:"“刚买来一天耳朵就翘起来了。”"},
  {label:"教材版本",quote:"“主播说外研版英语有，但我们这版没有。”"},
  {label:"设备稳定",quote:"“屏幕两分钟就花了，长按旋钮也开不了机。”"},
  {label:"网络与 AI",quote:"“Wi-Fi 连不上，AI 一直卡在一个界面。”"}
];const actions=[
  {source:"未发货退款",title:"优化直播承诺与人货匹配",text:"减少冲动成交、版本误解与承诺不一致带来的退款。"},
  {source:"收货后退款",title:"产品质量、版本与稳定性整改",text:"把售后高频问题逐项列入下一代产品与体验清单。"},
  {source:"退后利润不成立",title:"重算定价、成本与渠道模型",text:"以退货后的单台贡献检验产品是否成立、是否值得继续加码。"}
];return <article className="case clockCase" id={p.id}>
  <CaseHeader project={p}/>
  <section className="clockAct clockActFact reveal" aria-labelledby="clock-fact-title">
    <header className="clockActHead"><p className="clockKicker">01 / 03 · 事实</p><h3 id="clock-fact-title">营销指标一切正常，<br/>生意为什么还是不成立？</h3><p>单看营销，内容、投放与转化几乎全绿。</p></header>
    <div className="clockGreenStrip" aria-label="账面全部达标的经营指标">{greenBoard.map(item=><article className="clockGreenMetric" key={item.label}><span aria-hidden="true">✓</span><small>{item.label}</small><strong>{item.value}</strong><p>{item.note}</p></article>)}</div>
  </section>
  <section className="clockAct clockActInterpret reveal" aria-labelledby="clock-interpret-title">
    <header className="clockActHead"><p className="clockKicker">02 / 03 · 解读</p><h3 id="clock-interpret-title">利润被高退货吃掉，单台贡献由正转亏。</h3></header>
    <div className="clockEvidence">
      <div className="clockRefundPanel"><p className="clockEvidenceLead"><strong>售后证据：</strong><span>退货集中在四类真实体验。</span></p><div className="clockQuoteList">{refundEvidence.map(item=><article key={item.label}><strong>{item.label}</strong><p>{item.quote}</p></article>)}</div><p className="clockEvidenceCaption">到货退货占大头 · 质量 + 版本体验</p><p className="clockEvidenceNote">售后原话已脱敏、压缩，不展示用户身份信息。</p></div>
    </div>
    <div className="clockActPnl"><div><p className="clockKicker">单台 P&amp;L</p><h3>把每一台，重新算一遍。</h3></div><div className="clockEquation" aria-label="单台贡献计算逻辑"><span>单台收入</span><b>−</b><span>退货损失</span><b>−</b><span>履约与赠品</span><b>−</b><span>千川投流</span><b>−</b><span>直播分成</span><b>=</b><strong>单台贡献</strong></div><p>分成、投流和退货同时吃掉毛利；问题已经不再是“素材够不够好”，而是产品与经营模型能否成立。</p></div>
  </section>
  <section className="clockAct clockActAction reveal" aria-labelledby="clock-action-title">
    <header className="clockActHead"><p className="clockKicker">03 / 03 · 行动</p><h3 id="clock-action-title">把每一处退货成因，变成迭代产品的决策输入。</h3></header>
    <div className="clockActionMap">{actions.map((item,index)=><article key={item.source}><span>0{index+1}</span><small>{item.source}</small><i aria-hidden="true">→</i><div><strong>{item.title}</strong><p>{item.text}</p></div></article>)}</div>
    <p className="caseLesson">{p.transfer}</p>
  </section>
</article>}

function W3Case(){const p=getCaseStudy("w3");const translations=[
  {tech:"AG 纳米蚀刻防眩光",detail:"化学 / 纳米蚀刻使表面哑光，形成漫反射",user:"屏幕少反光，看起来更像纸"},
  {tech:"AR 增透 + 4K 高清",detail:"光学镀膜干涉抵消反射光，提升透光",user:"画面更清楚，久看更舒服"},
  {tech:"AF 抗指纹镀膜",detail:"荷叶原理纳米涂层，降低表面张力、抵抗油污",user:"手写顺滑不发涩"}
];return <article className="case w3Case" id={p.id}>
  <CaseHeader project={p}/>
  <section className="w3Translate w3ValueStory reveal" aria-labelledby="w3-translate-title">
    <header className="w3SectionLead"><h3 id="w3-translate-title">把工程师的参数，翻译成用户体感，<br/>再收成消费者愿意讨论的话。</h3></header>
    <div className="w3TranslationRows">{translations.map(item=><article key={item.tech}>
      <div className="w3Tech"><strong>{item.tech}</strong><span>{item.detail}</span></div>
      <div className="w3User"><small>用户语言</small><strong>{item.user}</strong></div>
    </article>)}</div>
    <div className="w3Topic" aria-label="W3传播议题">
      <div><p className="w3TopicStatement">传播不是换一种参数说法，而是让产品价值进入消费者自己的表达。</p></div>
      <div className="w3TopicLine"><span>#</span><strong>用 3A 类纸学习机有多爽</strong></div>
    </div>
  </section>
  <section className="w3Assets reveal" aria-labelledby="w3-assets-title">
    <header className="w3AssetsLead"><h3 id="w3-assets-title">让不同内容，承担不同的传播任务。</h3><p>TVC 建立认知，微博 KOL 解释真实体验。</p></header>
    <div className="w3TvcFeature">
      <header className="w3AssetChapter"><small>产品内容 / 认知建立</small><h4>两支 TVC，把 3A 类纸屏讲清楚。</h4><p>产品篇呈现体验，理念篇解释为什么值得相信。</p></header>
      <div className="w3VideoGrid">
        <article><div className="w3VideoFrame"><AutoplayVideo src="/w3-assets/w3-tvc-02.mp4" ariaLabel="希沃AI学习机W3产品TVC"/></div></article>
        <article><div className="w3VideoFrame"><AutoplayVideo src="/w3-assets/w3-tvc-01.mp4" ariaLabel="希沃AI学习机W3护眼理念篇"/></div></article>
      </div>
    </div>
    <div className="w3KolFeature">
      <header className="w3AssetChapter"><small>微博 KOL / 真实体验</small><h4>让“护眼”不只由品牌自己说。</h4><p>用家庭场景解释屏幕观感与真实使用方式。</p></header>
      <div>
        <div className="w3KolGrid">
          <figure><ScrollableRegion className="w3KolViewport" ariaLabel="爱丽丝RUN微博内容，可向下浏览"><Image src="/w3-assets/w3-kol-weibo-alicerun.png" alt="爱丽丝RUN体验希沃AI学习机W3的微博内容" width={1179} height={2556} sizes="(max-width: 760px) 100vw, 50vw"/></ScrollableRegion><figcaption><strong>测评型内容</strong><span>从科技博主的角度出发，拆解屏幕背后的原因，解释类纸屏的实际体验。</span></figcaption></figure>
          <figure><ScrollableRegion className="w3KolViewport" ariaLabel="胖锤妈妈微博内容，可向下浏览"><Image src="/w3-assets/w3-kol-weibo-pangchuimama.png" alt="胖锤妈妈体验希沃AI学习机W3的微博内容" width={1179} height={2556} sizes="(max-width: 760px) 100vw, 50vw"/></ScrollableRegion><figcaption><strong>场景型内容</strong><span>从家长选学习机的顾虑切入，把产品放进幼儿启蒙和家庭选购语境。</span></figcaption></figure>
        </div>
        <p className="mediaInteractionHint w3KolVerticalHint" aria-hidden="true"><b>↓</b> 向下滑动查看</p>
      </div>
    </div>
  </section>
  <section className="caseResultSection reveal"><CaseResults project={p}/><p className="caseLesson">{p.transfer}</p></section>
</article>}

export default function Home(){
  const [menu,setMenu]=useState(false);const [contactOpen,setContactOpen]=useState(false);const [activeSection,setActiveSection]=useState("top");
  useEffect(()=>{
    const revealNodes=document.querySelectorAll(".reveal");
    const revealObserver=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting)entry.target.classList.add("seen")}),{threshold:.04});
    revealNodes.forEach(node=>revealObserver.observe(node));

    const sectionIds=["top","method","work","seedpace","w20","clock","w3","more","about"];
    const workSections=new Set(["seedpace","w20","clock","w3","more"]);
    const header=document.querySelector<HTMLElement>(".portfolioHeader");
    const sections=sectionIds.map(id=>({id,node:document.getElementById(id)})).filter((item):item is {id:string;node:HTMLElement}=>Boolean(item.node));
    let headerHeight=header?.offsetHeight??0;
    let positions:{id:string;top:number}[]=[];
    let frame=0;

    const measure=()=>{
      headerHeight=header?.offsetHeight??0;
      positions=sections.map(({id,node})=>({id,top:node.getBoundingClientRect().top+window.scrollY}));
    };
    const updateActiveSection=()=>{
      frame=0;
      const marker=window.scrollY+headerHeight+160;
      let current="top";
      positions.forEach(({id,top})=>{if(top<=marker)current=workSections.has(id)?"work":id});
      setActiveSection(previous=>previous===current?previous:current);
    };
    const scheduleUpdate=()=>{if(!frame)frame=window.requestAnimationFrame(updateActiveSection)};
    const onResize=()=>{measure();scheduleUpdate()};

    measure();
    scheduleUpdate();
    let disposed=false;
    document.fonts?.ready.then(()=>{if(!disposed)onResize()});
    window.addEventListener("scroll",scheduleUpdate,{passive:true});
    window.addEventListener("resize",onResize,{passive:true});
    return()=>{
      disposed=true;
      revealObserver.disconnect();
      if(frame)window.cancelAnimationFrame(frame);
      window.removeEventListener("scroll",scheduleUpdate);
      window.removeEventListener("resize",onResize);
    };
  },[]);
  useEffect(()=>{if(!contactOpen)return;const close=(e:MouseEvent)=>{if(e.target instanceof Element&&!e.target.closest(".navContactWrap"))setContactOpen(false)};document.addEventListener("click",close);return()=>document.removeEventListener("click",close)},[contactOpen]);
  return <main>
    <header className="portfolioHeader"><nav className="nav portfolioNav" aria-label="主要导航"><a className="brand" href="#top"><strong>麻静莹作品集</strong></a><div className={`navlinks ${menu?"open":""}`}>{navItems.map(item=><a className={activeSection===item.id?"active":""} aria-current={activeSection===item.id?"page":undefined} href={`#${item.id}`} key={item.id} onClick={()=>setMenu(false)}>{item.label}</a>)}</div><button className="menuBtn" onClick={()=>setMenu(!menu)} aria-label={menu?"关闭导航":"打开导航"} aria-expanded={menu}>{menu?"关闭":"菜单"}</button><div className="navContactWrap"><button className="navcta" onClick={()=>setContactOpen(v=>!v)} aria-expanded={contactOpen}>联系我</button>{contactOpen&&<div className="contactDropdown"><div><small>邮箱</small><span>ma_jingying@163.com</span></div><div><small>微信</small><Image src="/wechat-qr.jpg" alt="微信二维码" width={681} height={681} sizes="88px"/></div></div>}</div></nav></header>
    <section className="hero portfolioHero" id="top"><div className="heroGrid portfolioHeroGrid"><div className="heroCopy portfolioHeroCopy"><div className="heroBrandLockup" aria-label="Product Marketing"><span>PRODUCT MARKETING</span></div><h1><span>把产品价值</span><em>变成用户选择</em></h1><p className="heroSubtitle">从消费者洞察，到新品 GTM 与<span className="heroNoBreak">经营判断</span>。</p><div className="heroBody"><p>6年消费产品营销经验，主导海外GTM、新品上市与整合传播。</p></div><div className="heroCtas"><a className="heroCta primary" href="#work">查看代表案例</a><a className="heroCta secondary" href="/ma-jingying-resume.pdf" download="麻静莹简历-6年产品营销.pdf">下载简历</a></div></div><div className="heroVisualStage heroVisualImageStage"><figure className="heroPortrait"><Image src="/mashu-portrait-hero.png" alt="麻静莹的职业肖像" width={955} height={1055} sizes="(max-width: 760px) 100vw, 520px" /></figure></div></div></section>
    <section className="method section reveal" id="method"><div className="methodHead"><h2>让每一步，都回答一个关键问题。</h2><p>这四步是阅读后续案例的共同框架：发现问题 → 定义价值 → 推动上市 → 验证生意。</p></div><div className="methodTrack methodFlow">{methodSteps.map(item=><div className="methodNode methodCard" key={item.title}><div className="methodPrompt"><h3>{item.title}</h3><strong className="methodQuestion">{item.question}</strong></div><p>{item.description}</p></div>)}</div></section>
    <section className="work section" id="work"><div className="sectionHead reveal"><h2>四个项目，四种产品营销问题。</h2></div><div className="projectGrid">{caseStudies.map((p,i)=><a className={`projectCard p${i+1} reveal`} href={`#${p.id}`} key={p.id} style={{"--accent":p.color} as React.CSSProperties}><Image className="projectCover" src={p.directoryImage} alt={`${p.directoryTitle}项目主视觉`} width={p.imageWidth} height={p.imageHeight} sizes="(max-width: 760px) 100vw, 50vw"/><span className="projectCardVeil" aria-hidden="true"/><div className="cardText"><span className="projectCapability">{p.directoryLabel}</span><h3>{p.directoryTitle}</h3><p className="projectQuestion">{p.directoryQuestion}</p><span className="caseLink">查看案例</span></div></a>)}</div></section>
    <SeedpaceCase/><W20Case/><ClockCase/><W3Case/>
    <section className="moreProjects section" id="more">
      <div className="moreTransition reveal"><h2>从深度，到广度</h2><p>更多产品、节点与渠道中的实践</p></div>
      <div className="moreGrid">{moreProjects.map(group=><div className="moreGroup reveal" key={group.title}><div><h3>{group.title}</h3></div><ul>{group.items.map(item=><li key={item}>{item}</li>)}</ul></div>)}</div>
      <div className="moreToAbout reveal"><p>把分散的项目放在一起，能看到一条清晰的主线：<br/>从理解用户，到定义价值、推动上市，再回到经营结果。</p></div>
    </section>
    <section className="about storyAbout section reveal" id="about"><div className="aboutLead"><h2>在产品端把价值讲清楚，在生意端把决策做扎实。</h2><p>六年产品营销经验,从消费者洞察到新品上市,把产品价值讲清楚,也把上市后的真实效果看明白。期待把这条能力链，带进更大的市场</p></div><div className="experienceTimeline">{experience.map(item=><div key={item.period}><time>{item.period}</time><strong>{item.company}</strong><span>{item.role}</span></div>)}</div><div className="contactPanel" id="contact"><div><small>邮箱</small><a href="mailto:ma_jingying@163.com">ma_jingying@163.com</a></div><div><small>微信</small><Image src="/wechat-qr.jpg" alt="微信二维码" width={681} height={681} sizes="88px"/></div><a className="contactResume" href="/ma-jingying-resume.pdf" download="麻静莹简历-6年产品营销.pdf">下载完整简历</a></div></section>
    <footer><div className="footerCta"><strong>如果这套方法能帮到你的产品，欢迎聊聊。</strong></div><div className="footerMeta"><span>麻静莹 · 产品营销作品集</span><a href="#top">回到顶部</a><span>© 2026</span></div></footer>
  </main>
}
