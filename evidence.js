/* Evidence reviewed 2026-09-13. References are not validation of this product. */
const EVIDENCE = [
 {id:'amsler',type:'大学眼科居家观察流程',title:'华盛顿大学眼科：Amsler 方格',url:'https://ophthalmology.wustl.edu/app/uploads/2024/03/Amsler-Grid.pdf.pdf',summary:'佩戴平时阅读眼镜，在良好光线下，距图约 30–38 cm，分别遮一眼并注视中央点，观察弯曲、暗区或空缺；发现变化及时联系眼科。',scope:'主要用于中心视觉变化观察，尤其在医生建议的黄斑病随访中。没有发现变化不能排除黄斑或其他眼病；本程序记录自述，不生成诊断。'},
 {id:'calibration',type:'测量方法',title:'FrACT 作者手册：尺寸、距离与像素限制',url:'https://michaelbach.de/fract/manual.html',summary:'视标的视角由实际尺寸及观看距离共同决定；像素分辨率限制可呈现的最小细节。',scope:'本程序借鉴几何校准原则，未实现 FrACT 的完整算法，也不继承其验证结果。'},
 {id:'validation',type:'系统综述 · 2023',title:'自测视力的准确性与重复性',url:'https://pubmed.ncbi.nlm.nih.gov/37347757/',summary:'纳入 10 项研究，远程自测工具表现不一，部署需要在目标人群和实际使用条件中验证。',scope:'本版本尚未与临床标准视力表开展一致性、敏感度或特异度验证。'},
 {id:'screening',type:'专业组织筛查建议',title:'AAPOS 儿童视力筛查建议',url:'https://www.aapos.org/syndicated/vision-screening',summary:'5 岁及以上儿童在规定筛查流程中，任一眼不能读出至少 20/32 时应转诊。',scope:'这是儿童标准筛查建议，不能直接套用到本程序的孤立 E 字、非标准距离或成人数据；本程序不据此宣告正常。'},
 {id:'exam',type:'专业组织说明',title:'AOA：综合眼科检查',url:'https://www.aoa.org/healthy-eyes/caring-for-your-eyes/eye-exams',summary:'筛查不能提供与综合眼科检查相同的信息；后者需要专门设备和检查程序。',scope:'报告明确列出未测项目，不以小游戏代替屈光、眼位、眼底等检查。'},
 {id:'ci',type:'疾病与检查科普',title:'NEI：集合不足',url:'https://www.nei.nih.gov/eye-health-information/eye-conditions-and-diseases/convergence-insufficiency',summary:'近距离阅读时的模糊、复视或疲劳可与集合不足有关，需要专业眼科检查。',scope:'症状记录只能提示沟通方向，不能单靠问答诊断集合不足。'},
 {id:'citt',type:'随机对照试验 · 2008',title:'CITT：有症状的儿童集合不足',url:'https://pmc.ncbi.nlm.nih.gov/articles/PMC2779032/',summary:'221 名 9–17 岁儿童接受 12 周干预。门诊集合/调节治疗加家庭巩固的复合成功或改善比例为 73%，高于另三组的 43%、33%、35%。',scope:'证据针对确诊儿童和特定治疗方案，不能推广为普通网页游戏的疗效、成人疗效或训练剂量。'},
 {id:'homeci',type:'随机对照试验 · 2016',title:'PEDIG：家庭集合不足治疗',url:'https://pmc.ncbi.nlm.nih.gov/articles/PMC5118058/',summary:'204 名儿童随机分组；12 周成功比例为家庭计算机组 23%、推近训练组 22%、安慰剂组 16%。招募不足和失访限制了比较结论。',scope:'不能承诺仅靠家庭游戏治好集合不足；治疗模块需医生诊断、处方和复查。'},
 {id:'amblyopia',type:'随机对照试验 · 2016',title:'PEDIG：双眼 iPad 游戏与遮盖',url:'https://pmc.ncbi.nlm.nih.gov/articles/PMC5145771/',summary:'385 名 5 至不足 13 岁弱视儿童，16 周平均改善为双眼游戏 1.05 行、遮盖 1.35 行；未达到预设非劣效标准，游戏依从性有限。',scope:'研究使用特定双眼分视方案。此处普通单屏 3D 游戏不属于该治疗，不能替代弱视治疗或用于自行遮盖训练。'},
 {id:'break',type:'专业组织护眼建议',title:'AOA：20-20-20 离屏休息',url:'https://www.aoa.org/AOA/Images/Patients/Eye%20Conditions/20-20-20-rule.pdf',summary:'每用屏 20 分钟，向约 20 英尺（约 6 米）外看至少 20 秒。',scope:'本程序提供离屏计时与完成记录。建议不等于已证实能治疗干眼、恢复视力或控制近视。'},
 {id:'myopia',type:'疾病科普',title:'NEI：近视',url:'https://www.nei.nih.gov/eye-health-information/eye-conditions-and-diseases/nearsightedness-myopia',summary:'儿童增加户外时间与较低的近视发生风险有关；近视需要综合眼科检查评估。',scope:'屏幕游戏不是户外活动，不能承诺降低度数或控制眼轴增长。'},
 {id:'urgent',type:'就医提示',title:'NEI：视网膜脱离的警示症状',url:'https://www.nei.nih.gov/eye-health-information/eye-conditions-and-diseases/retinal-detachment',summary:'突然出现大量飞蚊、闪光或视野中幕布样阴影，需要立即寻求眼科帮助。',scope:'出现警示症状时优先就医，不等待游戏测试结果。'}
];
const MODULES = [
 {id:'central',name:'中心视觉变化记录（可选）',aim:'依照专业机构 Amsler 原图，分别记录两眼是否看到变形或缺损。',question:'有没有新发现的中心视觉扭曲、暗区或空缺？适合医生建议的观察，不能全面筛查眼底。',method:'使用链接的专业机构原图，约 30–38 cm、阅读矫正、单眼注视中央点，然后在这里填写观察。',metric:'左右眼自述发现与是否为新变化。',limit:'本程序不重绘或替代标准图，未完成观察标为无法判断。原图需要联网打开；观察结果不能排除眼病。',refs:['amsler','exam']},
 {id:'acuity',name:'双眼分别辨认细节',aim:'记录左、右眼在校准尺寸下的高对比方向辨认表现。',question:'是否存在值得复查的细节辨认困难？不能判断原因是屈光、弱视还是其他问题。',method:'孤立 E 字、4 个方向，6 个尺寸档位，每档 5 题，左右眼分开。',metric:'各档正确数、最小连续完成档位、实际视角、校准条件。',limit:'孤立视标没有拥挤效应；本程序任务规则不是临床视力终点，不能输出最佳矫正视力。',refs:['calibration','validation','screening']},
 {id:'contrast',name:'低对比辨认',aim:'记录灰色目标在当前显示条件下的辨认表现。',question:'低对比条件下是否感觉更难辨认？无法检测白内障或视网膜疾病。',method:'4 个黑色不透明度档位，每档 4 题，双眼自然观看。',metric:'各档正确率、显示颜色与目标尺寸。',limit:'未测量亮度和伽马，CSS 不透明度不等于物理对比度；不能生成 logCS 或临床正常值。',refs:['calibration','exam']},
 {id:'reaction',name:'目标定位与点击',aim:'记录看见目标后完成手部点击的综合任务表现。',question:'在这个任务中定位与操作是否稳定？不能诊断眼动、视野或注意力疾病。',method:'随机位置目标，随机等待后出现，共 8 次；遗漏等待后的目标记录为超时。',metric:'有效点击中位数、最快/最慢用时、超时与提前点击。',limit:'没有眼动仪；结果含手部动作及设备延迟，没有本产品年龄常模。',refs:['exam','validation']}
];
const GAMES = [
 {id:'collect',name:'星河采集',tag:'视觉搜索 · 目标区分',description:'在立体航道中寻找青色八面体，避开橙色方块。',metrics:'收集数、漏过数、误点数、得分与有效时长。',problem:'练习游戏内的搜索与选择；不能治疗弱视、斜视或近视。',evidence:'本游戏尚无临床疗效数据。已有双眼治疗游戏研究不可移植为本游戏证据。',refs:['amblyopia','homeci']},
 {id:'sequence',name:'星座连线',tag:'顺序搜索 · 手眼操作',description:'按 1 → 6 的顺序点击分布在不同深度的星体，完成一轮再开始下一轮。',metrics:'完成轮数、正确点击、顺序错误与有效时长。',problem:'练习顺序搜索和点击规划；不是扫视功能、阅读障碍或注意力诊疗。',evidence:'本游戏无临床验证，不计算眼球扫视速度或医学正常值。',refs:['exam','validation']},
 {id:'follow',name:'伴星巡航',tag:'移动目标 · 指针跟随',description:'移动鼠标或手指，让指针保持在缓慢移动的青色目标附近。',metrics:'指针进入目标区域的时间占比与有效时长。',problem:'练习游戏内的视觉—手部配合；没有眼动仪，不能评估或治疗追随眼动异常。',evidence:'本游戏无临床疗效数据。屏幕远近透视不改变实际注视距离，不构成调节或集合治疗。',refs:['ci','citt']},
 {id:'rest',name:'远眺补给站',tag:'离屏休息 · 用眼习惯',description:'离开屏幕，舒适地看向约 6 米外，至少 20 秒后自行确认完成。',metrics:'完成的休息次数；不监控眼睛，也不推断是否真正远眺。',problem:'支持规律离屏休息，不治疗干眼、降低近视度数或恢复视力。',evidence:'依据 AOA 20-20-20 建议；这是习惯支持，不是本程序疗效试验。',refs:['break','myopia']}
];
