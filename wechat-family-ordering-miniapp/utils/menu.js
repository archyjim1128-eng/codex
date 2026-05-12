// 川菜馆菜单预设（可继续自行扩展）
// image 可替换为你自己的图片 CDN 或本地资源路径。

const MENU = [
  // 荤菜 10 道
  {
    id: 'meat-001',
    name: '宫保鸡丁',
    image: 'https://images.unsplash.com/photo-1604909052743-94e838986d24?auto=format&fit=crop&w=800&q=80',
    recipe: '鸡腿肉切丁腌制后滑油；下干辣椒、花椒、姜蒜爆香，加入鸡丁、花生翻炒，烹入糖醋酱汁大火收匀。',
    tags: ['荤菜', '经典川菜', '微辣'],
  },
  {
    id: 'meat-002',
    name: '回锅肉',
    image: 'https://images.unsplash.com/photo-1559847844-5315695dadae?auto=format&fit=crop&w=800&q=80',
    recipe: '五花肉先煮至八成熟切片；豆瓣酱炒出红油后下肉片煸香，加入蒜苗、青椒，调入生抽和少许糖翻炒出锅。',
    tags: ['荤菜', '下饭', '香辣'],
  },
  {
    id: 'meat-003',
    name: '水煮牛肉',
    image: 'https://images.unsplash.com/photo-1515003197210-e0cd71810b5f?auto=format&fit=crop&w=800&q=80',
    recipe: '牛肉片上浆后滑熟；豆瓣酱和火锅底料炒香加高汤，铺入豆芽和牛肉，最后撒蒜末辣椒面并泼热油激香。',
    tags: ['荤菜', '重口味', '麻辣'],
  },
  {
    id: 'meat-004',
    name: '辣子鸡',
    image: 'https://images.unsplash.com/photo-1547592166-23ac45744acd?auto=format&fit=crop&w=800&q=80',
    recipe: '鸡块腌制后炸至外酥里嫩；锅中少油炒香干辣椒和花椒，倒入鸡块、白芝麻、葱段快速翻匀。',
    tags: ['荤菜', '香辣', '酥香'],
  },
  {
    id: 'meat-005',
    name: '鱼香肉丝',
    image: 'https://images.unsplash.com/photo-1512058564366-18510be2db19?auto=format&fit=crop&w=800&q=80',
    recipe: '里脊切丝上浆；木耳笋丝胡萝卜丝先炒，再下肉丝，加入鱼香汁（糖醋酱油豆瓣）快速翻炒收汁。',
    tags: ['荤菜', '酸甜辣', '家常'],
  },
  {
    id: 'meat-006',
    name: '毛血旺',
    image: 'https://images.unsplash.com/photo-1617093727343-374698b1b08d?auto=format&fit=crop&w=800&q=80',
    recipe: '鸭血、毛肚、午餐肉焯水；底料炒香加高汤煮配菜，放入食材煮熟，撒蒜末辣椒花椒后泼热油。',
    tags: ['荤菜', '麻辣', '聚餐'],
  },
  {
    id: 'meat-007',
    name: '夫妻肺片',
    image: 'https://images.unsplash.com/photo-1526318896980-cf78c088247c?auto=format&fit=crop&w=800&q=80',
    recipe: '牛肉牛杂卤熟切片；加入红油、花椒粉、蒜泥、酱油、香醋、花生碎和香菜拌匀冷食。',
    tags: ['荤菜', '凉菜', '麻辣鲜香'],
  },
  {
    id: 'meat-008',
    name: '酸菜鱼',
    image: 'https://images.unsplash.com/photo-1582450871972-ab5ca64f7a75?auto=format&fit=crop&w=800&q=80',
    recipe: '鱼片上浆；酸菜炒香后加汤煮底，先下鱼骨再下鱼片，起锅前撒花椒辣椒蒜末泼热油。',
    tags: ['荤菜', '酸辣', '汤菜'],
  },
  {
    id: 'meat-009',
    name: '干煸肥肠',
    image: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=800&q=80',
    recipe: '肥肠卤熟切段煸干水气；下干辣椒、花椒、姜蒜和芹菜翻炒，调味后炒至焦香入味。',
    tags: ['荤菜', '重口味', '香辣'],
  },
  {
    id: 'meat-010',
    name: '小煎鸭',
    image: 'https://images.unsplash.com/photo-1600891964092-4316c288032e?auto=format&fit=crop&w=800&q=80',
    recipe: '鸭肉切块煸出油脂，加入豆瓣酱和泡椒炒香，放青椒洋葱翻炒，调入生抽、料酒焖至收汁。',
    tags: ['荤菜', '川味', '香辣'],
  },

  // 素菜 10 道
  {
    id: 'veg-001',
    name: '麻婆豆腐（素版）',
    image: 'https://images.unsplash.com/photo-1645696301019-35adcc18fc21?auto=format&fit=crop&w=800&q=80',
    recipe: '豆腐焯水去豆腥；豆瓣酱炒香加少量高汤，下豆腐小火煮入味，勾薄芡，撒花椒粉和葱花。',
    tags: ['素菜', '下饭', '微麻辣'],
  },
  {
    id: 'veg-002',
    name: '干煸四季豆',
    image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=800&q=80',
    recipe: '四季豆先过油或干煸至表面起皱，加入芽菜、蒜末、干辣椒翻炒，调入盐糖出锅。',
    tags: ['素菜', '家常', '微辣'],
  },
  {
    id: 'veg-003',
    name: '炝炒莲白',
    image: 'https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=800&q=80',
    recipe: '卷心菜手撕后大火快炒，加入干辣椒、花椒炝锅，调入盐醋，保持脆嫩口感。',
    tags: ['素菜', '快手菜', '爽脆'],
  },
  {
    id: 'veg-004',
    name: '鱼香茄子',
    image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=800&q=80',
    recipe: '茄条先煎软；炒香姜蒜末与豆瓣，加入糖醋酱油调成鱼香汁，下茄子收汁并撒葱花。',
    tags: ['素菜', '酸甜辣', '下饭'],
  },
  {
    id: 'veg-005',
    name: '酸辣土豆丝',
    image: 'https://images.unsplash.com/photo-1511690078903-71dc5a49f5e3?auto=format&fit=crop&w=800&q=80',
    recipe: '土豆丝泡水去淀粉后大火爆炒，加入干辣椒和蒜末，调入米醋、盐、少许糖快速出锅。',
    tags: ['素菜', '开胃', '酸辣'],
  },
  {
    id: 'veg-006',
    name: '椒麻杏鲍菇',
    image: 'https://images.unsplash.com/photo-1528735602780-2552fd46c7af?auto=format&fit=crop&w=800&q=80',
    recipe: '杏鲍菇撕条煎至金黄，淋椒麻汁（青花椒油、生抽、蒜末、香醋），撒香菜拌匀。',
    tags: ['素菜', '椒麻', '菌菇'],
  },
  {
    id: 'veg-007',
    name: '上汤娃娃菜',
    image: 'https://images.unsplash.com/photo-1498837167922-ddd27525d352?auto=format&fit=crop&w=800&q=80',
    recipe: '娃娃菜焯水摆盘；蒜末爆香后加高汤，加入枸杞和少量盐，淋在娃娃菜上即可。',
    tags: ['素菜', '清淡', '汤菜'],
  },
  {
    id: 'veg-008',
    name: '凉拌木耳',
    image: 'https://images.unsplash.com/photo-1564834724105-918b73a2f2d5?auto=format&fit=crop&w=800&q=80',
    recipe: '木耳焯熟过凉，加入蒜末、小米辣、生抽、香醋、香油和香菜，拌匀冷藏后更入味。',
    tags: ['素菜', '凉菜', '开胃'],
  },
  {
    id: 'veg-009',
    name: '手撕包菜',
    image: 'https://images.unsplash.com/photo-1466637574441-749b8f19452f?auto=format&fit=crop&w=800&q=80',
    recipe: '包菜手撕后热锅快炒，加入蒜末、干辣椒、少许蚝油和盐，保持脆爽出锅。',
    tags: ['素菜', '家常', '快炒'],
  },
  {
    id: 'veg-010',
    name: '红油豆皮',
    image: 'https://images.unsplash.com/photo-1625938145744-57a1d4bcef7a?auto=format&fit=crop&w=800&q=80',
    recipe: '豆皮焯水切条，拌入红油、蒜泥、花椒粉、生抽、香醋和芝麻，最后撒葱花。',
    tags: ['素菜', '凉菜', '麻辣'],
  },

  // 主食
  {
    id: 'staple-001',
    name: '米饭',
    image: 'https://images.unsplash.com/photo-1536304993881-ff6e9eefa2a6?auto=format&fit=crop&w=800&q=80',
    recipe: '大米淘洗后加1:1.2水量，电饭煲煮熟后焖10分钟，口感更松软。',
    tags: ['主食', '必点'],
  },
  {
    id: 'staple-002',
    name: '蛋炒饭',
    image: 'https://images.unsplash.com/photo-1603133872878-684f208fb84b?auto=format&fit=crop&w=800&q=80',
    recipe: '鸡蛋炒散盛出；隔夜饭下锅炒松，加入蛋液、葱花、胡萝卜丁，调盐生抽翻炒均匀。',
    tags: ['主食', '快手', '儿童友好'],
  },
  {
    id: 'staple-003',
    name: '担担面',
    image: 'https://images.unsplash.com/photo-1617093727343-374698b1b08d?auto=format&fit=crop&w=800&q=80',
    recipe: '碱水面煮熟过水，拌入芝麻酱、红油、花椒粉、酱油和肉臊，撒葱花花生碎。',
    tags: ['主食', '川味面食', '麻辣'],
  },
];

module.exports = {
  MENU,
};
