// 建群三周年倒计时 (2025年12月6日)
(function() {
    const countdownElement = document.getElementById('countdown');
    if (!countdownElement) return;

    function updateCountdown() {
        const now = new Date();
        // 12月6日 (月份从0开始，11表示12月)
        let target = new Date(now.getFullYear(), 11, 6);

        if (now > target) {
            target = new Date(now.getFullYear() + 1, 11, 6);
        }

        const diffMs = target - now;

        if (diffMs <= 0) {
            countdownElement.innerText = '🎉 建群三周年快乐！ 🎉';
            return;
        }

        const daysRemaining = Math.floor(diffMs / (1000 * 60 * 60 * 24));
        countdownElement.innerText = `${daysRemaining} 天`;
    }

    updateCountdown();
    // 每天更新一次即可，减少性能开销
    setInterval(updateCountdown, 86400000);
})();