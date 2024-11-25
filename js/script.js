// 选择菜单按钮和链接容器
const menuToggle = document.getElementById('menu-toggle');
const navLinks = document.getElementById('nav-links');

// 函数：检查是否为窄屏模式
const isNarrowScreen = () => window.innerWidth <= 768;

// 函数：切换菜单显示状态
const toggleMenu = () => {
    if (navLinks.style.display === 'flex') {
        closeMenu();
    } else {
        openMenu();
    }
};

// 函数：打开菜单
const openMenu = () => {
    if (isNarrowScreen()) {
        navLinks.style.display = 'flex';
        navLinks.style.opacity = '0';
        setTimeout(() => (navLinks.style.opacity = '1'), 0);
        navLinks.style.transition = 'opacity 0.5s ease-in';
    }
};

// 函数：关闭菜单
const closeMenu = () => {
    if (isNarrowScreen()) {
        navLinks.style.opacity = '1';
        navLinks.style.transition = 'opacity 0.5s ease-out';
        setTimeout(() => (navLinks.style.display = 'none'), 500);
        navLinks.style.opacity = '0';
    }
};

// 函数：调整菜单显示状态（用于响应窗口大小变化）
const adjustMenuDisplay = () => {
    if (!isNarrowScreen()) {
        // 宽屏模式，确保导航链接显示
        navLinks.style.display = 'flex';
        navLinks.style.opacity = '1';
        navLinks.style.transition = 'none'; // 移除动画效果
    } else if (navLinks.style.display === 'flex') {
        // 窄屏切换时，保持下拉菜单状态不变
        navLinks.style.opacity = '1';
        navLinks.style.transition = 'opacity 0.5s ease-in';
    } else {
        navLinks.style.display = 'none'; // 窄屏时默认隐藏
    }
};

// 监听菜单按钮点击事件
menuToggle.addEventListener('click', (event) => {
    event.stopPropagation(); // 阻止事件冒泡到页面其他位置
    toggleMenu();
});

// 监听全局点击事件
document.addEventListener('click', (event) => {
    if (!navLinks.contains(event.target) && !menuToggle.contains(event.target)) {
        closeMenu();
    }
});

// 监听窗口大小变化
window.addEventListener('resize', adjustMenuDisplay);

// 初始调整菜单显示状态
adjustMenuDisplay();
