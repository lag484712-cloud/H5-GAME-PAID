const PLAYBOOK = [
 {id:'collect',name:'星河采集',icon:'◆',color:'#75e8c8',tag:'寻找目标',intro:'收集青色晶体，绕开橙色陨石。',how:'点青色八面体得分；橙色方块不要点。',goal:'收集目标，减少误点',skill:'视觉搜索、形状区分与手眼配合',offline:'纸上画圆、三角、方块，找出所有三角。一轮后放下纸，看看远处。'},
 {id:'sequence',name:'星座连线',icon:'⑥',color:'#bca2fc',tag:'顺序搜索',intro:'按数字找到星星，点亮一条航线。',how:'依次点击 1、2、3…，完成一轮后刷新星座。',goal:'按顺序完成星座',skill:'顺序搜索与点击规划',offline:'纸上散写 1–6，按顺序指出。字体要清楚，不追求极限速度。'},
 {id:'follow',name:'伴星巡航',icon:'◎',color:'#8dcfff',tag:'移动跟随',intro:'带着指针，陪一颗小星星慢慢巡航。',how:'移动鼠标或拖动手指，尽量跟随青色星体。',goal:'让指针留在目标附近',skill:'移动目标的视觉—手部配合；不测眼球追随',offline:'想休息时看真实远处。屏幕里的远近不改变眼睛实际注视距离。'},
 {id:'odd',name:'异星侦探',icon:'✧',color:'#ffd389',tag:'细节区分',intro:'一群星体里，藏着一个不同的伙伴。',how:'找到与其他星体形状不同的那个，点击它。',goal:'找出不同形状',skill:'形状辨别与选择性搜索',offline:'从几件安全的小物品里找出类别不同的一件；一次一组，轻松完成。'},
 {id:'memory',name:'星际翻翻乐',icon:'▦',color:'#f6b6d4',tag:'视觉记忆',intro:'翻开星际卡片，找出失散的双胞胎。',how:'每次翻两张，图案相同就配对成功。',goal:'找到所有配对',skill:'图案记忆与位置记忆；不代表记忆疾病评估',offline:'用几对相同图案的纸卡玩配对，先从 3 对开始。'},
 {id:'signal',name:'信号守卫',icon:'◈',color:'#9de0bc',tag:'看准再点',intro:'只有安全信号，才值得你出手。',how:'出现青色菱形时点击；橙色方块时等待。',goal:'抓住信号，避免误点',skill:'目标区分与反应抑制；不诊断注意力问题',offline:'与家人约定一个词才拍手，其他词不动。保持轻松，不用惩罚式计分。'},
 {id:'orbit',name:'轨道寻踪',icon:'◌',color:'#9dafff',tag:'多目标记忆',intro:'记住闪着光的星球，跟着它们走一段。',how:'先记住带白圈的目标；它们移动后，找回刚才的星球。',goal:'找回被标记的目标',skill:'移动目标注意与位置保持；不代表眼动检查',offline:'把两枚不同纽扣在桌上缓慢移动后，指出最初选的那枚。不要让小孩误吞小物。'},
 {id:'direction',name:'星门导航',icon:'➜',color:'#f5c18c',tag:'方向辨别',intro:'看清星门朝向，选择正确的出口。',how:'观察中央箭头方向，点对应方向按钮。',goal:'连续选对方向',skill:'方向辨别和空间对应；不是临床视力测试',offline:'在纸上画大箭头，口头说出方向；文字和图案保持容易看清。'},
 {id:'match',name:'星形工坊',icon:'⬡',color:'#8ee4db',tag:'图形匹配',intro:'给展示台上的星体，找一个同款。',how:'记住上方样本，从下方候选中选择同样形状。',goal:'匹配相同形状',skill:'形状匹配、样本保持与搜索',offline:'找相同形状的积木配对。安全、大颗粒、好辨认即可。'},
 {id:'path',name:'星光回路',icon:'⌘',color:'#e5b2fa',tag:'顺序记忆',intro:'记住亮起的顺序，把星光送回家。',how:'先看格子依次亮起，再按同样顺序点击。',goal:'复现一段光路',skill:'视觉顺序记忆；不推断学习或阅读能力',offline:'在纸上画九宫格，由同伴点 3 个位置，再按顺序指出。'}
];
const DIFFICULTY=[{name:'启航',label:'慢一点，先熟悉',duration:45},{name:'进阶',label:'更多目标，更快节奏',duration:45},{name:'大师',label:'复杂任务，稳定出手',duration:60}];
const ChallengeStore={
 read(){try{const v=JSON.parse(localStorage.getItem('starvision-challenge-v3')||'{}');return v&&typeof v==='object'&&!Array.isArray(v)?Object.fromEntries(Object.entries(v).filter(([k,x])=>PLAYBOOK.some(g=>[0,1,2].some(d=>k===g.id+'-'+d))&&x&&Number.isInteger(x.stars)&&x.stars>=0&&x.stars<=3)):{} }catch{return {}}},
 best(id,d){return Number(this.read()[id+'-'+d]?.stars)||0},
 open(id,d){return d===0||this.best(id,d-1)>=1},
 total(){return Object.values(this.read()).reduce((s,x)=>s+(Number(x.stars)||0),0)},
 save(id,d,r){const data=this.read(),key=id+'-'+d,old=data[key];if(!old||r.stars>old.stars||r.stars===old.stars&&r.score>old.score)data[key]={stars:r.stars,score:r.score,at:new Date().toISOString()};try{localStorage.setItem('starvision-challenge-v3',JSON.stringify(data));return true}catch{return false}},
 stars(r){if(r.id==='follow')return r.ratio>=.75?3:r.ratio>=.5?2:r.ratio>=.3?1:0;const acc=r.hits/Math.max(1,r.hits+r.errors+r.missed);return r.hits>=r.goal&&acc>=.9?3:r.hits>=r.goal&&acc>=.7?2:r.hits>=Math.ceil(r.goal/2)&&acc>=.55?1:0}
};
