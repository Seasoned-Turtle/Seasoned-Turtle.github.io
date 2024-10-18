function updateCountdown() {
    const now = new Date();
    let anniversary = new Date(now.getFullYear(), 12, 6); // 11 表示 12 月，因为月份从 0 开始

    // 如果今天的日期已经过了今年的建群二周年，则计算到明年的建群二周年
    if (now > anniversary) {
        anniversary = new Date(now.getFullYear() + 1, 12, 6);
    }

    const diff = anniversary - now;

    if (diff > 0) {
        const days = Math.floor(diff / (1000 * 60 * 60 * 24));
        document.getElementById('countdown').innerText = `${days} 天`;
    } else {
        document.getElementById('countdown').innerText = '建群二周年已过！';
    }
}

// 每秒更新一次倒计时
setInterval(updateCountdown, 1000);

// 页面加载时立即更新一次
updateCountdown();
