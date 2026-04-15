// Portal Data
const portals = [
    {
        id: 1,
        name: 'CDN门户',
        url: '/cdn-portal/index.html',
        description: '一个基于Vue 3 + Vite + Element Plus + Axios的现代化CDN门户网站。',
        category: 'social',
        categoryName: '社交媒体',
        image: './image/cdn-portal.png'
    },
    {
        id: 2,
        name: '动物图鉴',
        url: '/animal-world/index.html',
        description: '在线视频平台，提供海量电影、电视剧、综艺、动漫等优质内容',
        category: 'video',
        categoryName: '影音娱乐',
        image: './image/animals-world.jpg'
    },
    {
        id: 3,
        name: '广告公司管理平台',
        url: '/Advertising_Portal_Website/index.html',
        description: '企业级广告公司全流程数字化管理平台，基于 Vue3 + Element Plus + Vite 构建。',
        category: 'social',
        categoryName: '社交媒体',
        image: '/image/Advertising_Portal_Website.jpg'
    },
    {
        id: 4,
        name: '哔哩哔哩',
        url: 'https://www.bilibili.com',
        description: '国内知名的视频弹幕网站，涵盖动画、游戏、生活、科技等多元内容',
        category: 'video',
        categoryName: '影音娱乐',
        image: 'https://api.uomg.com/api/screenshot?url=https://www.bilibili.com&apikey=your_apikey'
    },
    {
        id: 5,
        name: '京东',
        url: 'https://www.jd.com',
        description: '专业的综合网上购物商城，正品行货，物流快速，售后保障',
        category: 'shopping',
        categoryName: '电商购物',
        image: 'https://api.uomg.com/api/screenshot?url=https://www.jd.com&apikey=your_apikey'
    },
    {
        id: 6,
        name: '淘宝',
        url: 'https://www.taobao.com',
        description: '国内最大的C2C电商平台，商品种类丰富，价格实惠',
        category: 'shopping',
        categoryName: '电商购物',
        image: 'https://api.uomg.com/api/screenshot?url=https://www.taobao.com&apikey=your_apikey'
    },
    {
        id: 7,
        name: '掘金',
        url: 'https://juejin.cn',
        description: '面向全球开发者的技术社区，分享前沿技术文章和实战经验',
        category: 'dev',
        categoryName: '开发工具',
        image: 'https://api.uomg.com/api/screenshot?url=https://juejin.cn&apikey=your_apikey'
    },
    {
        id: 8,
        name: 'GitHub',
        url: 'https://github.com',
        description: '全球最大的代码托管平台，为开发者提供Git仓库和协作工具',
        category: 'dev',
        categoryName: '开发工具',
        image: 'https://api.uomg.com/api/screenshot?url=https://github.com&apikey=your_apikey'
    },
    {
        id: 9,
        name: 'Gitee',
        url: 'https://gitee.com',
        description: '国内领先的代码托管和协作开发平台，支持Git和SVN',
        category: 'dev',
        categoryName: '开发工具',
        image: 'https://api.uomg.com/api/screenshot?url=https://gitee.com&apikey=your_apikey'
    },
    {
        id: 10,
        name: 'CSDN',
        url: 'https://www.csdn.net',
        description: '中国专业IT技术社区，提供编程知识分享和技术交流平台',
        category: 'dev',
        categoryName: '开发工具',
        image: 'https://api.uomg.com/api/screenshot?url=https://www.csdn.net&apikey=your_apikey'
    },
    {
        id: 11,
        name: '百度',
        url: 'https://www.baidu.com',
        description: '全球领先的中文搜索引擎，提供网页、图片、新闻等多元搜索服务',
        category: 'search',
        categoryName: '搜索引擎',
        image: 'https://api.uomg.com/api/screenshot?url=https://www.baidu.com&apikey=your_apikey'
    },
    {
        id: 12,
        name: '微博',
        url: 'https://weibo.com',
        description: '中国领先的社交媒体平台，支持短博客、图片、视频分享',
        category: 'social',
        categoryName: '社交媒体',
        image: 'https://api.uomg.com/api/screenshot?url=https://weibo.com&apikey=your_apikey'
    },
    {
        id: 13,
        name: '抖音',
        url: 'https://www.douyin.com',
        description: '字节跳动旗下短视频平台，个性化推荐让发现更有趣',
        category: 'video',
        categoryName: '影音娱乐',
        image: 'https://api.uomg.com/api/screenshot?url=https://www.douyin.com&apikey=your_apikey'
    },
    {
        id: 14,
        name: '飞书',
        url: 'https://www.feishu.cn',
        description: '字节跳动打造的一站式协作平台，集成IM、文档、日历等功能',
        category: 'office',
        categoryName: '办公效率',
        image: 'https://api.uomg.com/api/screenshot?url=https://www.feishu.cn&apikey=your_apikey'
    },
    {
        id: 15,
        name: 'Notion',
        url: 'https://www.notion.so',
        description: '强大的笔记和协作工具，支持文档、数据库、看板等多种视图',
        category: 'office',
        categoryName: '办公效率',
        image: 'https://api.uomg.com/api/screenshot?url=https://www.notion.so&apikey=your_apikey'
    },
    {
        id: 16,
        name: 'Figma',
        url: 'https://www.figma.com',
        description: '基于浏览器的协作界面设计工具，支持实时协作和原型设计',
        category: 'office',
        categoryName: '办公效率',
        image: 'https://api.uomg.com/api/screenshot?url=https://www.figma.com&apikey=your_apikey'
    }
];

// DOM Elements
const portalGrid = document.getElementById('portalGrid');
const searchInput = document.getElementById('searchInput');
const clearSearchBtn = document.getElementById('clearSearch');
const tabsList = document.getElementById('tabsList');
const emptyState = document.getElementById('emptyState');
const themeButtons = document.querySelectorAll('.theme-btn');

// State
let currentCategory = 'all';
let searchQuery = '';
let currentTheme = localStorage.getItem('portalTheme') || 'default';

// Create Portal Card
function createPortalCard(portal, index) {
    const card = document.createElement('div');
    card.className = 'portal-card';
    card.style.animationDelay = `${index * 80}ms`;
    card.setAttribute('role', 'button');
    card.setAttribute('tabindex', '0');
    card.setAttribute('aria-label', `访问 ${portal.name}`);

    // Get first character for fallback
    const firstChar = portal.name.charAt(0);

    card.innerHTML = `
        <div class="card-image-wrapper">
            <img class="card-image" 
                 src="${portal.image}" 
                 alt="${portal.name} 预览图"
                 loading="lazy"
                 onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';">
            <div class="card-image-fallback" style="display: none;">${firstChar}</div>
        </div>
        <div class="card-content">
            <h3 class="card-title">${portal.name}</h3>
            <p class="card-description">${portal.description}</p>
            <span class="card-category">${portal.categoryName}</span>
        </div>
    `;

    // Click handler - open in new tab
    card.addEventListener('click', () => {
        window.open(portal.url, '_blank', 'noopener,noreferrer');
    });

    // Keyboard accessibility
    card.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            window.open(portal.url, '_blank', 'noopener,noreferrer');
        }
    });

    return card;
}

// Render Portals
function renderPortals() {
    // Clear existing cards
    portalGrid.innerHTML = '';

    // Filter portals
    let filtered = portals;

    if (currentCategory !== 'all') {
        filtered = filtered.filter(p => p.category === currentCategory);
    }

    if (searchQuery.trim()) {
        const query = searchQuery.toLowerCase().trim();
        filtered = filtered.filter(p =>
            p.name.toLowerCase().includes(query) ||
            p.description.toLowerCase().includes(query) ||
            p.categoryName.toLowerCase().includes(query)
        );
    }

    // Show/hide empty state
    if (filtered.length === 0) {
        emptyState.classList.remove('hidden');
        portalGrid.classList.add('hidden');
    } else {
        emptyState.classList.add('hidden');
        portalGrid.classList.remove('hidden');

        // Create and append cards
        filtered.forEach((portal, index) => {
            const card = createPortalCard(portal, index);
            portalGrid.appendChild(card);
        });
    }
}

// Handle Tab Click
function handleTabClick(e) {
    const tab = e.target.closest('.tab');
    if (!tab) return;

    // Update active state
    document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
    tab.classList.add('active');

    // Update current category
    currentCategory = tab.dataset.category;
    renderPortals();
}

// Handle Search Input
function handleSearchInput(e) {
    searchQuery = e.target.value;

    // Show/hide clear button
    if (searchQuery.length > 0) {
        clearSearchBtn.classList.remove('hidden');
    } else {
        clearSearchBtn.classList.add('hidden');
    }

    renderPortals();
}

// Handle Clear Search
function handleClearSearch() {
    searchInput.value = '';
    searchQuery = '';
    clearSearchBtn.classList.add('hidden');
    searchInput.focus();
    renderPortals();
}

// Event Listeners
tabsList.addEventListener('click', handleTabClick);
searchInput.addEventListener('input', handleSearchInput);
clearSearchBtn.addEventListener('click', handleClearSearch);
themeButtons.forEach(btn => {
    btn.addEventListener('click', handleThemeSwitch);
});

// Theme Switch Handler
function handleThemeSwitch(e) {
    const btn = e.currentTarget;
    const theme = btn.dataset.theme;

    // Update active button
    themeButtons.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');

    // Apply theme to body
    document.body.setAttribute('data-theme', theme);
    currentTheme = theme;

    // Save to localStorage
    localStorage.setItem('portalTheme', theme);
}

// Initialize Theme
function initTheme() {
    const savedTheme = localStorage.getItem('portalTheme') || 'default';
    document.body.setAttribute('data-theme', savedTheme);
    themeButtons.forEach(btn => {
        if (btn.dataset.theme === savedTheme) {
            btn.classList.add('active');
        } else {
            btn.classList.remove('active');
        }
    });
}

// Initial Render
initTheme();
renderPortals();
