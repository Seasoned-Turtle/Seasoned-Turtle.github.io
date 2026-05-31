// 汉堡菜单控制
(function() {
    const menuToggle = document.getElementById('menuToggle');
    const navLinks = document.getElementById('navLinks');

    if (!menuToggle || !navLinks) return;

    // 关闭菜单的函数
    const closeMenu = () => {
        if (window.innerWidth <= 768 && navLinks.classList.contains('open')) {
            navLinks.classList.remove('open');
        }
    };

    // 点击外部关闭菜单
    const handleOutsideClick = (e) => {
        if (window.innerWidth <= 768 && navLinks.classList.contains('open')) {
            if (!navLinks.contains(e.target) && !menuToggle.contains(e.target)) {
                navLinks.classList.remove('open');
                document.removeEventListener('click', handleOutsideClick);
            }
        }
    };

    // 切换菜单
    menuToggle.addEventListener('click', (e) => {
        e.stopPropagation();
        navLinks.classList.toggle('open');
        if (navLinks.classList.contains('open')) {
            setTimeout(() => document.addEventListener('click', handleOutsideClick), 0);
        } else {
            document.removeEventListener('click', handleOutsideClick);
        }
    });

    // 窗口大小变化时自动关闭菜单
    window.addEventListener('resize', () => {
        if (window.innerWidth > 768) {
            navLinks.classList.remove('open');
        }
    });
})();