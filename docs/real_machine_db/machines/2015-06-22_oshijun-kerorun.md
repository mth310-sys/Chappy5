# 押し順ケロルン

machineName: 押し順ケロルン
manufacturer: 山佐
releaseDate: 2015-06-22
releaseDatePrecision: exact_hall_start_multi_source
releaseDateNote: 当時新台一覧・解析資料で2015-06-22ホール導入が一致。PiDEA Xは2015-04-15業界記事で納品日2015-06-21予定としており、納品予定日と全国ホール導入日を分離する。
generation: 5号機
systemType: AT / 疑似ボーナス特化型AT
recordStatus: COMPLETE_CORE_WITH_RESET_BEHAVIOR_V0_7

## payoutRateBySetting

| 設定 | 機械割 |
|---:|---:|
| 1 | 96.9% |
| 2 | 98.5% |
| 3 | 100.8% |
| 4 | 104.9% |
| 5 | 106.3% |
| 6 | 108.1% |

- パチマガスロマガ、ちょんぼりすた、すろぱちくえすとで同一系列を確認。
- confidence: ANALYSIS_HIGH_MULTI_SOURCE

## initialHitBySetting

疑似ボーナス初当たり:

| 設定 | 初当たり |
|---:|---:|
| 1 | 1/206.7 |
| 2 | 1/203.2 |
| 3 | 1/191.9 |
| 4 | 1/186.7 |
| 5 | 1/182.7 |
| 6 | 1/177.9 |

- パチマガスロマガとすろぱちくえすとで一致。ちょんぼりすたは小数以下省略表示で1/206～1/177。
- confidence: ANALYSIS_HIGH_MULTI_SOURCE

## baseGamesPer50

- **約33G/50枚**。
- PiDEA X機械選定記事、当時紹介記事、ちょんぼりすたで一致。
- confidence: INDUSTRY_PLUS_ANALYSIS_MULTI_SOURCE

## netIncrease

- 疑似ボーナスAT純増 **約2.9枚/G**。
- PiDEA X、パチマガスロマガ、P-WORLD、当時解析で一致。
- confidence: INDUSTRY_PLUS_ANALYSIS_HIGH_MULTI_SOURCE

## basicPayout

- BIG BONUS: **約215枚**。30G消化またはJAC3回で終了。JACハズシによる獲得枚数アップ要素あり。
- REG BONUS: **約50枚**。8枚ベル10回獲得で終了。
- BIG/REGとも内部的には純増約2.9枚/GのATによる疑似ボーナス。
- PiDEA X、パチマガスロマガ、P-WORLDで一致。

## modeSpecificMinimumData

- 通常時は **モード/内部高確状態の概念なし** と当時パチマガスロマガが明記。
- **ゲーム数天井・ゲーム数解除ゾーンは非搭載**。
- ボーナス後は最大32Gが連チャン確認区間。基本24G滞在の「睡蓮の泉」へ移行し、ボーナス中に獲得したストックを32G以内に告知する構造。
- REG連続に特殊契約があり、**REG4連続後の次回ボーナスはBIG確定**。これはゲーム数天井とは別定義として保持する。
- 有利区間制度導入前。

## resetBehavior

schemaVersion: v0.7
resetQaStatus: COMPLETE_FOR_AVAILABLE_PUBLIC_DATA
resetQaLastUpdated: 2026-09-07

### settingChangeBehavior

- **設定変更後1回目のボーナスのみ、ボーナス中のストック獲得性能が大幅優遇**される。
- 通常時にゲーム数天井・モード・高確状態が存在しないため、一般的な「天井Gリセット」「モード再抽選」「高確スタート」といった契約は本機では該当しない。
- REG連続回数の内部扱いについて、設定変更時にゼロクリアされることを直接明記した一次/当時解析は今回固定できなかったため、自動推定しない。
- confidence: ANALYSIS_HIGH_FOR_FIRST_BONUS_RESET_BENEFIT

### carryOverBehavior

- ゲーム数天井・通常時モード・高確状態は非搭載のため、それらの据え置き引継ぎは `NOT_APPLICABLE`。
- REG連履歴については、後年攻略で「前日のREG3連なら翌日は据え置きでもリセットでも期待値が取れる」とする実戦上の整理があるが、設定変更時のREG連内部契約を直接固定できないため、DBでは **REG連内部カウンタの据え置き契約をUNVERIFIED** とする。
- carryOverRegChainCounter: `UNVERIFIED_AFTER_RESEARCH`。

### powerCycleBehavior

- 「押し順ケロルン / ケロルン / 山佐」と「電源OFF ON / 電断 / 据え置き / 朝一 / 設定変更」を組み合わせ、当時解析・攻略DB・回顧資料を再探索したが、**設定変更を伴わない純電源OFF→ONだけの本機固有内部契約を独立して固定できなかった**。
- `UNVERIFIED_AFTER_RESEARCH`。
- 後継ケロット/ネオプラネット等の挙動は流用しない。

### gameCounterReset

- ゲーム数天井: **NOT_APPLICABLE / 天井非搭載**。
- 通常時は毎ゲーム抽選で、ゲーム数解除も非搭載。
- REG連内部カウンタの設定変更/電断契約は `UNVERIFIED_AFTER_RESEARCH`。

### ceilingAfterReset

- **ゲーム数天井非搭載のため、設定変更専用の短縮天井はなし**。
- `NOT_APPLICABLE_GAME_NUMBER_CEILING`。
- REG4連後次回BIG確定は特殊なREG連続契約であり、ゲーム数天井とは分離する。

### modeAfterReset

- 当時パチマガスロマガが通常時について **モードの概念なし** と明記。
- 設定変更専用モード振り分け: `NOT_APPLICABLE`。

### stateAfterReset

- 当時パチマガスロマガが通常時について **状態の概念なし** と明記。
- 設定変更時高確スタート等: `NOT_APPLICABLE`。

### advantageousSectionReset

- `NOT_APPLICABLE_5TH_GEN_PRE_5_9`。

### resetBenefits

- **設定変更後初回ボーナスのストック性能優遇**。
- 設定1でも初回TOTAL期待枚数約418枚、平均3.36連、連チャン比率49.49%と公開されている。
- BIG初回では設定1で期待枚数718.27枚・平均4.73連・連チャン比率72.24%。REG初回では210.57枚・2.41連・33.76%。
- 朝一全台リセット店などで初回ボーナスまで狙う攻略が成立した。

### resetPenalties

- 設定変更専用の比較可能な公開不利要素は `NONE_CONFIRMED_AFTER_RESEARCH`。

### resetDetection

- パチマガスロマガは **液晶上の挙動では設定変更を見抜けない** と明記。
- すろぱちくえすとでは、BIG終了時にリール下のボタンを押した際の「ポコピーン」発生が設定変更時に高確率（BIG時9割以上とされる）で出る推測要素を紹介。ただし据え置きでも発生する可能性があるため確定判別ではない。
- ガックンによる本機固有判別は十分な再探索後も固定できず `NONE_CONFIRMED_AFTER_RESEARCH`。
- confidence: ANALYSIS_HIGH_FOR_DISPLAY_NOT_DETECTABLE / ANALYSIS_SINGLE_FOR_BUTTON_SOUND

### numericResetData

設定変更後初回BIG:

| 設定 | 期待枚数 | 平均連チャン | 連チャン比率 |
|---:|---:|---:|---:|
| 1 | 718.27枚 | 4.73連 | 72.24% |
| 2 | 741.96枚 | 4.88連 | 73.46% |
| 3 | 767.51枚 | 5.04連 | 73.46% |
| 4 | 772.79枚 | 5.09連 | 73.25% |
| 5 | 790.51枚 | 5.21連 | 73.26% |
| 6 | 805.87枚 | 5.29連 | 74.04% |

設定変更後初回REG:

| 設定 | 期待枚数 | 平均連チャン | 連チャン比率 |
|---:|---:|---:|---:|
| 1 | 210.57枚 | 2.41連 | 33.76% |
| 2 | 224.57枚 | 2.50連 | 34.57% |
| 3 | 230.74枚 | 2.55連 | 35.29% |
| 4 | 236.27枚 | 2.59連 | 35.77% |
| 5 | 242.14枚 | 2.63連 | 35.95% |
| 6 | 254.79枚 | 2.71連 | 36.20% |

設定変更後初回TOTAL:

| 設定 | 期待枚数 | 平均連チャン | 連チャン比率 |
|---:|---:|---:|---:|
| 1 | 418.03枚 | 3.36連 | 49.49% |
| 2 | 442.15枚 | 3.50連 | 50.92% |
| 3 | 458.56枚 | 3.61連 | 51.49% |
| 4 | 460.57枚 | 3.64連 | 51.44% |
| 5 | 472.63枚 | 3.71連 | 51.64% |
| 6 | 488.27枚 | 3.80連 | 52.24% |

- 上表はパチマガスロマガの設定変更時初回ボーナス性能表をcanonicalとして保存。
- 設定1の平均投資約350枚、TOTAL期待枚数約418枚という当時攻略値も存在するが、期待収支は交換率等で変わるため物差しコアには含めない。

## conflicts

- 性能コアの設定別機械割/初当たりは主要資料で一致。小数省略表示は丸め差としてCONFLICT扱いしない。
- 導入日は全国ホール導入2015-06-22をcanonicalとし、PiDEA Xの納品予定2015-06-21は別イベントとして保持する。
- 「睡蓮の泉」の滞在説明に基本24G/最大32Gの表記差があるが、基本滞在と最大連チャン告知区間の定義差として分離し、数値平均しない。

## missingFields

- 正式型式名 / 検定番号: `UNVERIFIED_AFTER_RESEARCH`。
- 設定変更を伴わない純電源OFF→ONの本機固有内部契約: `UNVERIFIED_AFTER_RESEARCH`。
- REG連内部カウンタの設定変更/据え置き/純電断ごとの明示契約: `UNVERIFIED_AFTER_RESEARCH`。
- 本機固有のガックン変更判別契約: `NONE_CONFIRMED_AFTER_RESEARCH`。

## sources

取得日: 2026-09-07

1. PiDEA X — https://pidea.jp/articles/%E5%B1%B1%E4%BD%90%E3%80%8C%E3%82%B1%E3%83%AD%E3%83%AB%E3%83%B3%E3%80%8D%E5%88%9D%E3%81%AE%E6%93%AC%E4%BC%BC%E3%83%9C%E3%83%BC%E3%83%8A%E3%82%B9%E3%82%BF%E3%82%A4%E3%83%97
   - 2015-04-15業界記事。山佐、疑似ボーナス、BIG約215枚、REG約50枚、ボーナス後最大32G、納品日6月21日予定。
   - confidence: INDUSTRY
2. PiDEA X 機械選定 — https://www.pidea.jp/articles/%E4%B8%89%E6%9C%A8%E6%B5%81%E3%80%8C%E5%A4%A7%E8%80%83%E5%AF%9F%EF%BC%81%E3%82%B1%E3%83%AD%E3%83%AB%E3%83%B3%E3%81%AE%E5%8C%96%E3%81%91%E3%82%8B%E5%8F%AF%E8%83%BD%E6%80%A7%E3%80%8D
   - 千円ベース33G、ボーナス後32Gの基本構造。
   - confidence: INDUSTRY
3. パチマガスロマガ 基本 — https://cs62.cs-plaza.com/g/pachi/pla/s_conq/yamasa_slot/203/a.php
   - 2015年6月機。BIG約215枚、REG約50枚、AT機基本構造。
   - confidence: ANALYSIS_HIGH_PERIOD_SOURCE
4. パチマガスロマガ ボーナス確率 — https://cs62.cs-plaza.com/g/pachi/pla/s_conq/yamasa_slot/203/h.php
   - 設定別初当たり1/206.7～1/177.9、PAYOUT96.9～108.1%。
   - confidence: ANALYSIS_HIGH_PERIOD_SOURCE
5. パチマガスロマガ ゲーム性 — https://cs62.cs-plaza.com/g/pachi/pla/s_conq/yamasa_slot/203/l.php
   - 通常時モード/状態なし、天井/当たりやすいゾーンなし、純増2.9枚/G、BIG/REG基本獲得。
   - confidence: ANALYSIS_HIGH_PERIOD_SOURCE
6. パチマガスロマガ 設定変更時 — https://cs62.cs-plaza.com/g/pachi/pla/s_conq/yamasa_slot/203/04.php
   - 設定変更後初回ボーナスの期待枚数・平均連チャン・連チャン比率を設定1～6で公開。
   - confidence: ANALYSIS_HIGH_PERIOD_SOURCE
7. パチマガスロマガ ワンポイント — https://cs62.cs-plaza.com/g/pachi/pla/s_conq/yamasa_slot/203/k01.php
   - 設定変更初回恩恵、液晶挙動では変更を見抜けない、REG4連後次回BIG確定。
   - confidence: ANALYSIS_HIGH_PERIOD_SOURCE
8. P-WORLD — https://www.p-world.co.jp/machine/database/7719
   - 5号機AT、純増約2.9枚/G、BIG約215枚、REG約50枚。
   - confidence: ANALYSIS_DB
9. ちょんぼりすた — https://chonborista.com/slot/yamasa-slot/8429/
   - 2015-06-22導入、機械割/初当たり、約33G/50枚、純増2.9枚/G、ゲーム数天井非搭載、設定変更初回恩恵。
   - confidence: ANALYSIS_HIGH_RETROSPECTIVE
10. すろぱちくえすと リセット — https://www.slopachi-quest.com/article/%E6%8A%BC%E3%81%97%E9%A0%86%E3%82%B1%E3%83%AD%E3%83%AB%E3%83%B3-%E3%83%AA%E3%82%BB%E3%83%83%E3%83%88/
   - 設定変更初回恩恵、設定1期待枚数約418枚、変更推測用ボタン音、液晶/天井/高確で単純判別しにくい点。
   - confidence: ANALYSIS_SINGLE
11. すろぱちくえすと 機種別 — https://www.slopachi-quest.com/kisyubetsu/%E6%8A%BC%E3%81%97%E9%A0%86%E3%82%B1%E3%83%AD%E3%83%AB%E3%83%B3/
   - 初当たり/機械割、ゲーム数天井なし、REG4連後BIG、設定変更初回恩恵。
   - confidence: ANALYSIS_HIGH_RETROSPECTIVE
12. 期待値見える化 — https://slotjin.com/tenjou/kelolun/
   - ゲーム数天井非搭載、REG連続特殊契約の実践解析。
   - confidence: ANALYSIS_SINGLE
13. 2015年導入新台整理 — https://slotnews777.blog.fc2.com/blog-entry-2348.html
   - 2015-06-22導入、疑似ボーナス型AT。
   - confidence: RETROSPECTIVE_CALENDAR
