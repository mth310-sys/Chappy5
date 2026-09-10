# No.1188 パチスロ 大海物語4

- recordStatus: `COMPLETE_CORE_WITH_RESET_BEHAVIOR_V0_7`
- machineName: パチスロ 大海物語4
- manufacturer: 三洋物産 / SANYO
- releaseDateCanonical: 2018-05-07
- generation: 5.9号機 / 5号機
- systemType: A+RT / ノーマル+RT
- formalModelName: `パチスロ大海物語4KF`
- certificationNumber: `UNVERIFIED_AFTER_RESEARCH`
- settings: `1 / 2 / 5 / 6`（4段階）
- collectedAt: 2026-09-10

## releaseDateEvidence
- 三洋物産の当時内覧会を報じたAmusement Japanは2018-05-07導入予定。
- K-Navi、パチビー、一撃、すろかい、すろぱちくえすとも2018-05-07で一致。
- グリーンべるとは納品2018-05-06開始予定とし、翌5/7ホール導入と整合する。
- releaseDateCanonical: 2018-05-07。

## performanceCore

### payoutRateBySetting
- setting1: 98.0%
- setting2: 100.9%
- setting5: 103.9%
- setting6: 108.0%

### initialHitBySetting
BIG:
- setting1: 1/312.1
- setting2: 1/309.1
- setting5: 1/304.8
- setting6: 1/281.3

REG:
- setting1: 1/368.2
- setting2: 1/344.9
- setting5: 1/321.3
- setting6: 1/281.3

ボーナス合算:
- setting1: 1/168.9
- setting2: 1/163.0
- setting5: 1/156.4
- setting6: 1/140.6

### baseGamesPer50
- canonical: 約35.3G/50枚（設定1、パチマガスロマガ解析 / すろかい一致）。
- すろぱちくえすと: 33.3G/50枚。
- 定義差を確認できないため平均せず `CONFLICT_BASE_35_3_VS_33_3` として保持。

### netIncrease
- RT純増/Gの信頼できる具体値: `UNVERIFIED_AFTER_RESEARCH`。
- 2段階RTであることは複数資料一致。後継そに子版の「現状維持程度」は別スペックのため本機へ転記しない。

### basicPayout
- BIG: 300枚。
- REG: 約100枚。
- BIG後RT「チャンスタイム」: 20G。
- 上位RT「スペシャル魚群タイム」: 40G。

### ceiling
- 天井非搭載。

## modeSpecificMinimumData
- BIG後は20GのRT「チャンスタイム」へ突入。
- チャンスタイム中は昇格リプレイ成立で40Gの「スペシャル魚群タイム」へ。突入期待度は設定1/2 約55%、設定5 約50%、設定6 約45%と解析されているが、通常ゲーム性の詳細抽選なので物差し補助値としてのみ保持。
- REG後も1G目の特殊リプレイ等、一部でスペシャル魚群タイムへ移行。
- 通常液晶演出はラグーン / アトランティス / トレジャー / クリスタルの4モードを任意選択可能。

## resetBehavior

### settingChangeBehavior
- 設定変更時の液晶モード: ラグーンモード。
- 初期出目: 3・4・7。
- RT状態: 通常。
- 天井非搭載。

### carryOverBehavior
- 「据え置き」単独条件について、純電源OFF→ONと分離した本機固有の直接表は `UNVERIFIED_AFTER_RESEARCH`。
- ただし純電断時のRT内部挙動は別項目のpowerCycleBehaviorで直接確認済み。一般論から据え置きへ拡張しない。

### powerCycleBehavior
- 電源OFF→ON時の表示モード: ラグーンモード。
- 初期出目: 3・4・7。
- RT: ボーナス非当選中のCZであればリプレイ確率が上昇した内部状態を維持したままラグーンモードへ。その他の状態は基本的に引き継ぐ。
- したがって表示上は設定変更時と同様でも、内部RT状態は設定変更時の「通常」と異なり得る。

### gameCounterReset
- ceilingCounter: `NOT_APPLICABLE_NO_CEILING`
- RT残G/内部状態: settingChange=`RT_NORMAL_CONFIRMED`; powerCycle=`CONDITIONAL_CARRYOVER_CONFIRMED`
- carryOver as distinct condition: `UNVERIFIED_AFTER_RESEARCH`

### ceilingAfterReset
- `NOT_APPLICABLE_NO_CEILING`

### modeAfterReset
- 液晶演出モード settingChange: ラグーンモード。
- 液晶演出モード powerCycle: ラグーンモード。
- 朝一専用の当選モード/モード振り分け: `NONE_CONFIRMED_AFTER_RESEARCH`。

### stateAfterReset
- settingChange: RT通常。
- powerCycle: 条件付き引継ぎ。ボーナス非当選中CZではリプレイ高確率状態を維持し、その他は基本引継ぎ。
- carryOver distinct from powerCycle: `UNVERIFIED_AFTER_RESEARCH`。

### advantageousSectionReset
- A+RT機。本DBの朝一経営シミュレーション上比較対象となるAT/ART型有利区間の本機固有契約は `NOT_APPLICABLE_TO_GAMEPLAY_CORE`。
- 5.9号機一般論を本機固有契約として転記しない。

### resetBenefits
- 設定変更専用の短縮天井・当選率上昇・朝一専用高確等: `NONE_CONFIRMED_AFTER_RESEARCH`。
- むしろ設定変更時はRT状態が通常へ戻ることを直接確認。

### resetPenalties
- 前日RT/CZ系内部状態が純電断なら引き継がれ得る一方、設定変更ではRT通常となるため、状況次第では設定変更がRT状態を消す差分になる。
- これを独立した「ペナルティ率」とする公開数値は `NONE_CONFIRMED_AFTER_RESEARCH`。

### resetDetection
- 設定変更・純電源OFF→ONとも表示モードがラグーン、出目3・4・7となるため、これら単独では設定変更確定判別に使えない。
- 内部RT状態には差があり得るが、客側からの確定判別手段として公開された数値/手順は `UNVERIFIED_AFTER_RESEARCH`。
- 本機固有ガックン確率・ガックンによる変更確定判別: `UNVERIFIED_AFTER_RESEARCH`。

### numericResetData
- resetSpecificShortenedCeiling: `NOT_APPLICABLE`
- settingChangeInitialDisplayMode: `ラグーンモード`
- settingChangeInitialReelDisplay: `3・4・7`
- settingChangeRTState: `通常`
- powerCycleInitialDisplayMode: `ラグーンモード`
- powerCycleInitialReelDisplay: `3・4・7`
- resetSpecificMorningHitRate: `NONE_CONFIRMED_AFTER_RESEARCH`
- gakkunChangeDetectionProbability: `UNVERIFIED_AFTER_RESEARCH`

## morningRelatedPublicNumbers
- 設定変更時の短縮天井・朝一当選率・リセット専用モード振り分け等の比較可能な公開数値は、表記揺れ・型式名・メーカー名・シリーズ名と「設定変更/リセット/朝一/据え置き/電源OFF ON/ガックン/RT状態/天井」を組み替えて再探索したが `NONE_CONFIRMED_AFTER_RESEARCH`。
- 一撃の本機専用表による設定変更/電源ON-OFFの状態差は数値ではないが、朝一判別に必要な主要契約として保存。

## conflicts
- `CONFLICT_BASE_35_3_VS_33_3`: パチマガスロマガおよびすろかいは設定1約35.3G/50枚、すろぱちくえすとは33.3G/50枚。平均せず35.3を複数系統一致のcanonicalとし、33.3を競合保持。
- 一部二次資料が設定番号を1/2/3/4と表示するが、主要解析・P-WORLD系で本機は設定1/2/5/6の4段階。設定3/4表記は数値配列のラベル誤りとみられるためcanonicalへ採用しない。

## missingFields
- certificationNumber: `UNVERIFIED_AFTER_RESEARCH`
- RT具体純増/G: `UNVERIFIED_AFTER_RESEARCH`
- 据え置き単独条件を純電断と分離したRT内部状態契約: `UNVERIFIED_AFTER_RESEARCH`
- 本機固有ガックン確率/確定判別: `UNVERIFIED_AFTER_RESEARCH`

## sources
取得日: 2026-09-10

1. SANYO公式 — パチスロ大海物語4
   - https://www.sanyobussan.co.jp/products/slot_ooumi4/
   - 現存公式製品ページ。
   - confidence: `OFFICIAL`
2. Amusement Japan — いつでもワクワクの海スロ（2018-03-19）
   - https://amusement-japan.co.jp/article/detail/10000557/
   - 三洋内覧会、Aタイプ、RT概要、2018-05-07導入予定。
   - confidence: `INDUSTRY`
3. P-WORLD / グリーンべると — 海スロ最新作、ボーナス当選メイン契機はリプレイ（2018-03-19）
   - https://news.p-world.co.jp/articles/10018/greenbelt
   - A+RT、合算1/168.9〜1/140.6、BIG約300枚、REG約100枚、納品5/6開始予定。
   - confidence: `INDUSTRY`
4. K-Navi — パチスロ 大海物語4
   - https://p-kn.com/slot/2986/
   - 2018-05-07導入、設定別BIG/REG/合算、RT構成。
   - confidence: `ANALYSIS_HIGH`
5. パチビー — パチスロ 大海物語4
   - https://www.pachibee.jp/machines/index/218030001
   - 2018-05-07、5.9号機、設定別機械割/合算、BIG300枚/REG約100枚、RT20G/40G。
   - confidence: `ANALYSIS_HIGH`
6. 一撃 — パチスロ 大海物語4 / 天井・設定変更
   - https://1geki.jp/slot/s_ooumi4/
   - https://1geki.jp/slot/s_ooumi4/3/
   - 設定別機械割、A+RT、2018-05-07、天井非搭載。設定変更時と電源ON/OFF時のモード・出目・RT状態を直接比較。
   - confidence: `ANALYSIS_HIGH`
7. パチマガスロマガ — パチスロ大海物語4 小役確率
   - https://cs62.cs-plaza.com/g/pachi/pla/s_conq/sanyo_slot/33/c-2.php
   - 設定1の50枚あたり35.3G、RT昇格関連解析値。
   - confidence: `ANALYSIS_HIGH`
8. すろかい — パチスロ大海物語4 解析情報
   - https://slotkaiseki.hatenablog.com/entry/ooumi
   - 型式表記`パチスロ大海物語4KF`、2018-05-07、35.3G〜、設定別スペック。
   - confidence: `ANALYSIS_SINGLE`
9. すろぱちくえすと — 大海物語4
   - https://www.slopachi-quest.com/article/slot-ooumimonogatari4/
   - 2018-05-07、A+RT、33.3G/50枚、設定別スペック、天井非搭載。ベース競合資料。
   - confidence: `ANALYSIS_SINGLE`
10. P-WORLD — パチスロ大海物語4
   - https://www.p-world.co.jp/machine/database/8622
   - 三洋物産、RT/リアルボーナス、BIG300枚/REG約100枚、20G/40G RT。
   - confidence: `ANALYSIS_HIGH`
