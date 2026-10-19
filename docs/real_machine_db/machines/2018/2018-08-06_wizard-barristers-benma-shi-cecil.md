# No.1221 パチスロ ウィザード・バリスターズ～弁魔士セシル～

- recordStatus: `COMPLETE_CORE_WITH_RESET_BEHAVIOR_V0_7`
- machineName: パチスロ ウィザード・バリスターズ～弁魔士セシル～
- manufacturer: オーイズミ
- releaseDateCanonical: 2018-08-06
- generation: 5号機 / 5.9号機
- systemType: A+ART / CZ経由ART / G数上乗せ型
- formalModelName: `UNVERIFIED_AFTER_RESEARCH`
- certificationNumber: `UNVERIFIED_AFTER_RESEARCH`
- settings: `1 / 2 / 3 / 4 / 5 / 6`
- collectedAt: 2026-09-10

## releaseDateEvidence
- 日刊スポーツ導入カレンダーは2018-08-06のパチスロ群に本機を掲載。
- パチビー、すろぱちくえすと、ちょんぼりすたも2018-08-06で一致。
- グリーンべると/P-WORLD業界ニュースは2018-05-16のオーイズミ発表会記事で本機を5.9号機A+ARTとして報道。
- confidence: `INDUSTRY_AND_ANALYSIS_CROSSCHECKED`。

## performanceCore

### payoutRateBySetting
- setting1: 97.8%
- setting2: 98.4%
- setting3: 99.9%
- setting4: 102.1%
- setting5: 105.9%
- setting6: 109.1%
- ちょんぼりすた、すろぱちくえすとで一致。

### initialHitBySetting
ART初当たり:
- setting1: 1/347.5
- setting2: 1/345.3
- setting3: 1/344.3
- setting4: 1/343.7
- setting5: 1/343.0
- setting6: 1/339.8

ボーナス合算:
- setting1: 1/248.24
- setting2: 1/245.45
- setting3: 1/237.45
- setting4: 1/229.95
- setting5: 1/220.66
- setting6: 1/206.09

BIG合算:
- setting1: 1/504.12
- setting2: 1/492.75
- setting3: 1/461.52
- setting4: 1/434.01
- setting5: 1/402.06
- setting6: 1/356.17

REG合算:
- 全設定: 約1/489.07（ちょんぼりすたはREG約1/489で全設定共通と明記）。

### baseGamesPer50
- 38.5G/50枚。

### netIncrease
- ART単体: 約1.4枚/G。
- ボーナス込み: 約1.8枚/G。
- すろぱちくえすとは単体1.4枚/G・ボーナス込み1.8枚/Gを明記。
- P-WORLD、パチビー、業界記事等の約1.8枚/G表記はボーナス込みの定義として保持し、ART単体値へ混同しない。

### basicPayout
- MOYO BIG BONUS（青7）: 約312枚。
- CECIL BIG BONUS（赤7）: 約150枚。
- REGULAR BONUS: 約48枚。
- ART「ウィザードチャンス」: 初回40G以上 / G数上乗せ型。

### ceiling
- 通常ゲーム数天井: `NONE / 非搭載`。

## modeSpecificMinimumData
- 通常時はCZ「ディアボバトル」やボーナスからART「ウィザードチャンス」を目指す。
- CZ「ディアボバトル」は5Gまたは10G+α、ART期待度約50～70%。
- ARTは初回40G以上、上乗せ特化ゾーン「魔法廷RUSH」等でゲーム数を上乗せ。
- ART終了後は3Gの「再審ゾーン」があり、ベル成立時約10%で引き戻し、レア役成立時は引き戻し確定と解析されている。
- 物差し用途に不要な小役別内部抽選・上乗せ詳細は収集しない。

## resetBehavior

### settingChangeBehavior
- ちょんぼりすたの本機専用「朝一リセット恩恵」表では設定変更時の内部状態を「リセット？」と疑問符付きで掲載し、確定契約ではない。
- ステージは当時「調査中」。
- 機種名表記揺れ、正式名称、オーイズミ、設定変更、リセット、朝一、据え置き、電源OFF ON、ガックン、有利区間を組み替え、攻略/業界/DB/回顧系へ再探索したが、設定変更時の内部状態・ステージ・ART/CZ残状態を直接固定できる本機固有資料は確認できず `UNVERIFIED_AFTER_RESEARCH`。

### carryOverBehavior
- 据え置きを純電断と独立条件で説明する本機固有資料は再探索後も固定できず `UNVERIFIED_AFTER_RESEARCH_AS_DISTINCT_CONDITION`。
- 電源OFF→ON欄の推測表記を据え置き契約へ自動転記しない。

### powerCycleBehavior
- ちょんぼりすたの本機専用表では電源OFF→ON時の内部状態を「引き継ぎ？」と疑問符付きで掲載し、ステージは「調査中」。
- 後続資料でも直接固定できず `UNVERIFIED_AFTER_RESEARCH`。

### gameCounterReset
- 通常ゲーム数天井非搭載のため天井ゲーム数カウンタは `NOT_APPLICABLE`。
- ART/CZや有利区間に付随する内部カウンタを設定変更/据え置き/純電断別に説明する公開契約は `UNVERIFIED_AFTER_RESEARCH`。

### ceilingAfterReset
- 通常天井・短縮天井: `NOT_APPLICABLE_NO_NORMAL_CEILING`。

### modeAfterReset
- 朝一専用モード、リセット専用CZ/ARTモード、設定変更時のみ適用されるモード振り分け: `NONE_CONFIRMED_AFTER_RESEARCH`。

### stateAfterReset
- 設定変更時の内部状態は当時資料が「リセット？」、純電断時は「引き継ぎ？」という未確定表記。
- 追加再探索でも疑問符を外せる直接資料を固定できず、両条件とも `UNVERIFIED_AFTER_RESEARCH`。

### advantageousSectionReset
- 本機は5.9号機A+ARTで有利区間を用いるゲーム性。すろぱちくえすとは有利区間滞在時は転落まで回す旨を記載。
- ただし設定変更・据え置き・純電源OFF→ONごとの有利区間朝一処理を本機固有に直接示す公開資料は再探索後も固定できず `UNVERIFIED_AFTER_RESEARCH`。
- 5.9号機一般論から補完しない。

### resetBenefits
- 通常天井短縮、朝一ART/CZ初当たり優遇、設定変更専用モード等: `NONE_CONFIRMED_AFTER_RESEARCH`。

### resetPenalties
- 設定変更時のみの不利要素: `NONE_CONFIRMED_AFTER_RESEARCH`。

### resetDetection
- 本機固有のガックン条件/発生率、初期出目、ランプ、液晶ステージ等による設定変更/据え置き確定判別は再探索後も `UNVERIFIED_AFTER_RESEARCH`。
- 通常の設定推測要素（ボーナス終了画面、REG中示唆、小役差等）は設定変更判別とは別のためresetDetectionへ混同しない。

### numericResetData
- 設定変更時のみのモード振り分け、朝一特定G数以内のART/CZ当選率、短縮天井、リセット恩恵率、ガックン率など比較可能な公開数値: `NONE_CONFIRMED_AFTER_RESEARCH`。

## conflicts
- `NONE_CONFIRMED_CORE_CONFLICTS`。
- ART純増の約1.4枚/Gと約1.8枚/Gは競合ではなく、前者=ART単体、後者=ボーナス込みの定義差として分離。
- reset表の「リセット？」「引き継ぎ？」は確定値として採用せず、疑問符付きの当時未確定情報として保持。

## missingFields
- 正式型式名。
- 検定番号。
- 設定変更/据え置き/純電源OFF→ONの本機固有内部状態・ステージ契約。
- 有利区間の設定変更/据え置き/純電断別朝一処理。
- 本機固有ガックン・初期出目・表示等の設定変更判別条件/発生率。

## sources
取得日: 2026-09-10

1. 日刊スポーツ — パチンコ・パチスロ導入カレンダー 2018-07-27
   - https://www.nikkansports.com/amusement/pachislot/news/201807270000405.html
   - 2018-08-06導入群に本機、クロノス、TOWSER、花人、クレア3、ハイカ101を掲載。
   - reliability: `INDUSTRY_CALENDAR`
2. グリーンべると / P-WORLD業界ニュース — 6年の時を経て「RUSH開放システム」が復活！
   - https://news.p-world.co.jp/articles/10137/greenbelt
   - オーイズミの2018-05-16プレス説明会、5.9号機A+ART、ボーナス+ART合算1/144.80～1/128.28、MOYO BIG312枚/CECIL BIG150枚/REG48枚。
   - reliability: `INDUSTRY`
3. パチビー — パチスロ ウィザード・バリスターズ～弁魔士セシル
   - https://www.pachibee.jp/machines/movie/218050007
   - 2018-08-06、オーイズミ、5.9号機ART、ボーナス込み約1.8枚/G。
   - reliability: `INDUSTRY_DB`
4. P-WORLD — パチスロ ウィザード・バリスターズ～弁魔士セシル
   - https://www.p-world.co.jp/machine/database/8664
   - オーイズミ、ART/CZ/リアルボーナス、青7約312枚、赤7約150枚、REG約48枚、ART初回40G以上・ボーナス込み約1.8枚/G。
   - reliability: `INDUSTRY_DB`
5. すろぱちくえすと — ウィザードバリスターズ
   - https://www.slopachi-quest.com/article/wizardbarristers/
   - 2018-08-06、5.9号機A+ART、38.5G/50枚、ART単体1.4枚/G・ボーナス込み1.8枚/G、312/150/48枚、天井非搭載、設定別ART/ボーナス/機械割。
   - reliability: `ANALYSIS_HIGH_PERIOD_SOURCE`
6. ちょんぼりすた — ウィザードバリスターズ
   - https://chonborista.com/slot/oizumi-slot/60619/
   - 2018-08-06、38.5G/50枚、天井非搭載、設定別BIG/REG/ボーナス/ART/出玉率。朝一表は設定変更時内部状態「リセット？」、電源OFF→ON時「引き継ぎ？」、ステージは双方調査中。
   - reliability: `ANALYSIS_HIGH_PERIOD_SOURCE`
7. パチマガスロマガ — パチスロ ウィザード・バリスターズ～弁魔士セシル
   - https://cs62.cs-plaza.com/g/pachi/pla/s_conq/oizumi_slot/43/a.php
   - オーイズミ/2018年8月、A+ART構造、MOYO BIG312枚/CECIL BIG150枚/REG48枚、RUSH開廷システム。
   - reliability: `ANALYSIS_HIGH_PERIOD_DB`
