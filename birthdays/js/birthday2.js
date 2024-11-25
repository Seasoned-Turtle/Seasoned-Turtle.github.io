document.addEventListener('DOMContentLoaded', function() {
    // 示例数据
    const birthdays = [
        { name: '霧島 聖（《AIR》）', birthday: '01-03' },
        { name: '桐生 美也（《Heaven Burns Red》）', birthday: '01-05' },
        { name: '沢渡 真琴（《Kanon》）', birthday: '01-06' },
        { name: '白河 ユイナ（《Heaven Burns Red》）', birthday: '01-06' },
        { name: '月宮 あゆ（《Kanon》）', birthday: '01-07' },
        { name: '直枝架夜（《Kud Wafter》）', birthday: '01-12' },
        { name: '水瀬 いちご（《Heaven Burns Red》）', birthday: '01-15' },
        { name: '直枝 理樹（《Little Busters》）', birthday: '01-17' },
        { name: '伊吹 公子（《CLANNAD》）', birthday: '01-18' },
        { name: 'LUNAR-Q（《LUNARiA》）', birthday: '01-23' },
        { name: 'ヴリティカ・ バラクリシュナン（《Heaven Burns Red\n》）', birthday: '01-26' },
        { name: '川澄 舞（《Kanon》）', birthday: '01-29' },
        { name: '美坂 栞（《Kanon》）', birthday: '02-01' },
        { name: '岡崎 汐（《CLANNAD》）', birthday: '02-01' },
        { name: '野村 美希（《Summer Pockets》）', birthday: '02-02' },
        { name: '佐月 マリ（《Heaven Burns Red》）', birthday: '02-07' },
        { name: '三谷 良一（《Summer Pockets》）', birthday: '02-09' },
        { name: '東城 つかさ（《Heaven Burns Red》）', birthday: '02-14' },
        { name: '千里 朱音（《Rewrite》）', birthday: '02-17' },
        { name: '春原 陽平（《CLANNAD》）', birthday: '02-17' },
        { name: '神崎 アーデルハイド（《Heaven Burns Red》）', birthday: '02-22' },
        { name: '町村 玲央奈（《LOOPERS》）', birthday: '02-24' },
        { name: 'マリア・デ・ アンジェリス（《Heaven Burns Red》）', birthday: '02-26' },
        { name: '美坂 香里（《Kanon》）', birthday: '03-01' },
        { name: '命 吹雪（《Heaven Burns Red》）', birthday: '03-04' },
        { name: '西門 貴明（《LOOPERS》）', birthday: '03-05' },
        { name: '井上 晶（《Rewrite》）', birthday: '03-06' },
        { name: '来ヶ谷 唯湖（《Little Busters!》）', birthday: '03-13' },
        { name: '柊木 梢（《Heaven Burns Red》）', birthday: '03-18' },
        { name: '小笠原 緋雨（《Heaven Burns Red》）', birthday: '03-21' },
        { name: '有月 椎菜（《Kud Wafter》）', birthday: '03-25' },
        { name: '松岡 チロル（《Heaven Burns Red》）', birthday: '03-26' },
        { name: '鳳 咲夜（《Rewrite》）', birthday: '03-27' },
        { name: '西园美鸟（《Little Busters》）', birthday: '03-30' },
        { name: 'あーちゃん先輩《Little Busters!》）', birthday: '04-01' },
        { name: '豊後 弥生（《Heaven Burns Red》）', birthday: '04-01' },
        { name: '藤川 みあ（《LOOPERS》）', birthday: '04-02' },
        { name: '相楽 美佐枝（《CLANNAD》）', birthday: '04-03' },
        { name: '久島 鴎（《Summer Pockets》）', birthday: '04-04' },
        { name: '神北 小毬（《Little Busters!》）', birthday: '04-05' },
        { name: 'ビャッコ（《Heaven Burns Red》）', birthday: '04-08' },
        { name: '柳 美音（《Heaven Burns Red》）', birthday: '04-13' },
        { name: '北川 潤（《Kanon》）', birthday: '04-18' },
        { name: '水織 静久（《Summer Pockets》）', birthday: '04-29' },
        { name: '宮沢 謙吾（《Little Busters!》）', birthday: '04-30' },
        { name: '岡崎 直幸（《CLANNAD》）', birthday: '05-01' },
        { name: '天王寺 瑚太朗（《Rewrite》）', birthday: '05-02' },
        { name: '棗 恭介（《Little Busters!》）', birthday: '05-04' },
        { name: '倉田 佐祐理（《Kanon》）', birthday: '05-05' },
        { name: 'シャルロッタ・ スコポフスカヤ（《Heaven Burns Red》）', birthday: '05-07' },
        { name: '利田 美咲（《LOOPERS》）', birthday: '05-08' },
        { name: '室伏 理沙（《Heaven Burns Red》）', birthday: '05-12' },
        { name: '一ノ瀬 ことみ（《CLANNAD》）', birthday: '05-13' },
        { name: '鷹原 羽依里（《Summer Pockets》）', birthday: '05-21' },
        { name: '石井 色葉（《Heaven Burns Red》）', birthday: '05-26' },
        { name: '霧島 譲（《LOOPERS》）', birthday: '06-06' },
        { name: '二階堂 三郷（《Heaven Burns Red》）', birthday: '06-06' },
        { name: '鳴瀬 しろは（《Summer Pockets》）', birthday: '06-08' },
        { name: '春原 芽衣（《CLANNAD》）', birthday: '06-11' },
        { name: '霧島 佳乃（《AIR》）', birthday: '06-12' },
        { name: '能美 クドリャフカ（《Little Busters!》）', birthday: '06-12' },
        { name: 'しまこ（《Rewrite》）', birthday: '06-13' },
        { name: '蔵 里見（《Heaven Burns Red》）', birthday: '06-18' },
        { name: '中津 静流（《Rewrite》）', birthday: '06-18' },
        { name: '茅森 月歌（《Heaven Burns Red》）', birthday: '06-24' },
        { name: '桜庭 星羅（《Heaven Burns Red》）', birthday: '06-29' },
        { name: '神山 識（《Summer Pockets》）', birthday: '07-04' },
        { name: '蒼井 えりか（《Heaven Burns Red》）', birthday: '07-07' },
        { name: '朝倉 可憐（《Heaven Burns Red》）', birthday: '07-11' },
        { name: '西九条 灯花（《Rewrite》）', birthday: '07-12' },
        { name: '有月 初（《Kud Wafter》）', birthday: '07-16' },
        { name: '古河 秋生（《CLANNAD》）', birthday: '07-20' },
        { name: '伊吹 風子（《CLANNAD》）', birthday: '07-20' },
        { name: '平良 明（《LOOPERS》）', birthday: '07-21' },
        { name: '天音 巫呼（《Heaven Burns Red》）', birthday: '07-22' },
        { name: '神尾 観鈴（《AIR》）', birthday: '07-23' },
        { name: '神戸 小鳥（《Rewrite》）', birthday: '07-26' },
        { name: 'キャロル・リーパー（《Heaven Burns Red》）', birthday: '08-02' },
        { name: '宮沢 有紀寧（《CLANNAD》）', birthday: '08-07' },
        { name: '夏目 祈（《Heaven Burns Red》）', birthday: '08-15' },
        { name: '西園 美魚（《Little Busters!》）', birthday: '08-22' },
        { name: '鳳 ちはや（《Rewrite》）', birthday: '08-24' },
        { name: '山脇・ボン・ イヴァール（《Heaven Burns Red》）', birthday: '08-25' },
        { name: '幸村 俊夫《CLANNAD》）', birthday: '08-27' },
        { name: '紬 ヴェンダース（《Summer Pockets》）', birthday: '08-31' },
        { name: '加藤 うみ（《Summer Pockets》）', birthday: '09-01' },
        { name: '棗 鈴（《Little Busters!》）', birthday: '09-02' },
        { name: '水瀬 すもも（《Heaven Burns Red》）', birthday: '09-06' },
        { name: '藤林 杏（《CLANNAD》）', birthday: '09-09' },
        { name: '藤林 椋《CLANNAD》）', birthday: '09-09' },
        { name: '昼田 貴理子（《LOOPERS》）', birthday: '09-13' },
        { name: '国崎往人（《AIR》）', birthday: '09-14' },
        { name: '和泉 ユキ（《Heaven Burns Red》）', birthday: '09-17' },
        { name: '空門 藍（《Summer Pockets》）', birthday: '09-20' },
        { name: '空門 蒼（《Summer Pockets》）', birthday: '09-20' },
        { name: '水瀬 秋子（《Kanon》）', birthday: '09-23' },
        { name: '丸山 奏多（《Heaven Burns Red》）', birthday: '10-01' },
        { name: '古河 早苗（《CLANNAD》）', birthday: '10-05' },
        { name: 'アイリーン・ レドメイン（《Heaven Burns Red》）', birthday: '10-07' },
        { name: '加納 天善（《Summer Pockets》）', birthday: '10-10' },
        { name: '二木 佳奈多（《Little Busters!》）', birthday: '10-13' },
        { name: '三枝 葉留佳（《Little Busters!》）', birthday: '10-13' },
        { name: '坂上 智代（《CLANNAD》）', birthday: '10-14' },
        { name: '岬 鏡子（《Summer Pockets》）', birthday: '10-18' },
        { name: '伊達 朱里（《Heaven Burns Red》）', birthday: '10-21' },
        { name: '朱鷺戸 沙耶（《Little Busters!》）', birthday: '10-21' },
        { name: '逢川 めぐみ（《Heaven Burns Red》）', birthday: '10-28' },
        { name: '岡崎 朋也（《CLANNAD》）', birthday: '10-30' },
        { name: '國見 タマ（《Heaven Burns Red》）', birthday: '11-01' },
        { name: '瑞原 あいな《Heaven Burns Red》）', birthday: '11-02' },
        { name: '氷室 憂希《Kud Wafter》）', birthday: '11-03' },
        { name: '神尾 晴子（《AIR》）', birthday: '11-03' },
        { name: '井ノ原 真人（《Little Busters!》）', birthday: '11-06' },
        { name: '吉野 晴彦《Rewrite》）', birthday: '11-07' },
        { name: '樋口 聖華（《Heaven Burns Red》）', birthday: '11-08' },
        { name: '黒沢 真希（《Heaven Burns Red》）', birthday: '11-22' },
        { name: '大島 一千子《Heaven Burns Red》）', birthday: '11-29' },
        { name: '大島 二以奈（《Heaven Burns Red》）', birthday: '11-29' },
        { name: '大島 三野里（《Heaven Burns Red》）', birthday: '11-29' },
        { name: '大島 四ツ葉《Heaven Burns Red》）', birthday: '11-29' },
        { name: '大島 五十鈴《Heaven Burns Red》）', birthday: '11-29' },
        { name: '大島 六宇亜《Heaven Burns Red》）', birthday: '11-29' },
        { name: '月城 最中（《Heaven Burns Red》）', birthday: '12-01' },
        { name: '鳴瀬 小鳩（《Summer Pockets》）', birthday: '12-02' },
        { name: '笹瀬川 佐々美（《Little Busters!》）', birthday: '12-03' },
        { name: '芳野 祐介（《CLANNAD》）', birthday: '12-05' },
        { name: '天野 美汐（《Kanon》）', birthday: '12-06' },
        { name: '李映夏《Heaven Burns Red》）', birthday: '12-14' },
        { name: '神奈 备命（《AIR》）', birthday: '12-15' },
        { name: '遠野 美凪《AIR》）', birthday: '12-22' },
        { name: '此花 ルチア（《Rewrite》）', birthday: '12-23' },
        { name: '水瀬 名雪《Kanon》）', birthday: '12-23' },
        { name: '古河 渚（《CLANNAD》）', birthday: '12-24' },
        { name: '菅原 千恵（《Heaven Burns Red》）', birthday: '12-25' },
        { name: '西森 柚咲（《Charlotte》）', birthday: '12-27' },
        { name: '堀井 佐奈（《LOOPERS》）', birthday: '12-27' }
    ];

    // 将数据存储到localStorage
    localStorage.setItem('birthdays', JSON.stringify(birthdays));

    // 从localStorage中读取数据
    const storedBirthdays = JSON.parse(localStorage.getItem('birthdays')) || [];

    // 获取今天的日期
    const today = new Date();
    const todayMonth = today.getMonth() + 1; // 月份是从0开始的，所以加1
    const todayDay = today.getDate();

    // 过滤出当天过生日的角色
    const todayBirthdays = storedBirthdays.filter(item => {
        let [month, day] = item.birthday.split('-').map(Number); // 分割月份和日期
        return month === todayMonth && day === todayDay;
    });

    // 展示数据
    const listElement = document.getElementById('birthday-list');
    todayBirthdays.forEach(birthday => {
        const listItem = document.createElement('p');
        listItem.textContent = `${birthday.name} 今天过生日！`;
        listElement.appendChild(listItem);
    });

    // 如果今天没有人过生日，则显示提示信息
    if (todayBirthdays.length === 0) {
        const noBirthdayToday = document.createElement('p');
        noBirthdayToday.textContent = '今天没有人过生日。';
        listElement.appendChild(noBirthdayToday);
    }
});