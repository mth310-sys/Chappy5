# No.1236 パチスロ 大海物語4 with すーぱーそに子

- recordStatus: `COMPLETE_CORE_WITH_RESET_BEHAVIOR_V0_7`
- machineName: パチスロ 大海物語4 with すーぱーそに子
- manufacturer: 三洋物産 / SANYO
- releaseDateCanonical: 2018-10-15
- generation: 5.9号機
- systemType: A+RT / ノーマル+2段階RT
- formalModelName: `UNVERIFIED_AFTER_RESEARCH`
- certificationNumber: `UNVERIFIED_AFTER_RESEARCH`
- settings: `1 / 2 / 5 / 6`
- collectedAt: 2026-09-10

## releaseDateEvidence
- Amusement Japan 2018-08-08内覧会記事が導入を2018-10-15からと明記。
- グリーンべると/P-WORLD業界記事は納品2018-10-14予定と掲載し、翌15日稼働開始と整合。
- ちょんぼりすた、すろぱちくえすと、パチ7も2018-10-15導入で一致。
- canonical: `2018-10-15`。
- confidence: `INDUSTRY_PLUS_MULTIPLE_ANALYSIS_CROSSCHECKED`。

## identificationEvidence
- SANYO公式現存製品ページで機種名・メーカーを確認。
- P-WORLD、パチ7、ちょんぼりすた、すろぱちくえすとでも三洋物産/SANYOとして一致。
- 正式型式名・検定番号は「大海物語4 withすーぱーそに子」「大海物語4withすーぱーそに子」「スーパーそに子」「型式」「検定」「8S」等へ検索語を変え、公式・業界・解析・中古実機/検定通過記載まで再探索したが、今回高信頼で直接固定できず `UNVERIFIED_AFTER_RESEARCH`。
- 中古実機資料には北海道公安委員会検定通過状況2018-06-15付の記載があるが、型式/検定番号そのものは取得できなかったため推定しない。

## performanceCore
### payoutRateBySetting
- setting1: 97.9%
- setting2: 101.0%
- setting5: 104.1%
- setting6: 108.0%
- ちょんぼりすた、すろぱちくえすと、後年整理DBで一致。

### initialHitBySetting
BIG合算:
- setting1: 1/269.7
- setting2: 1/266.4
- setting5: 1/255.0
- setting6: 1/241.8

REG合算:
- setting1: 1/334.4
- setting2: 1/322.8
- setting5: 1/278.9
- setting6: 1/242.7

ボーナス合算:
- setting1: 1/149.3
- setting2: 1/146.0
- setting5: 1/133.2
- setting6: 1/121.1

- 業界一次記事は設定1〜6レンジとしてBIG 1/269.7〜1/241.8、REG 1/334.4〜1/242.7、合算1/149.3〜1/121.1を掲載。
- P-WORLD、ちょんぼりすた、すろぱちくえすとで設定別値を照合。

### baseGamesPer50
- setting1: 約35.6G/50枚。
- setting1〜6レンジ: 約35.6〜38.3G/50枚。
- ちょんぼりすたと後年解析で一致。

### netIncrease
- RT純増はP-WORLDが「現状維持程度」と説明。
- 主要解析資料では枚/Gの比較可能な数値を `-` / 調査中としており、`UNVERIFIED_AFTER_RESEARCH`。
- 物差し用途では「現状維持程度」を定性的補助値として保持し、枚/Gへ換算しない。

### basicPayout
- BIG: 250枚。
- REG: 約100枚。
- BIG後はRT「そに子TIME」へ必ず突入。

### ceiling
- 天井機能: `NONE / NOT_EQUIPPED`。
- パチ7、ちょんぼりすた、すろぱちくえすと、後年解析で一致。

## modeSpecificMinimumData
- BIG後にRT1段階目「そに子TIME」20Gへ突入。
- 「そに子TIME」中の特殊リプレイ等でRT2段階目「すーぱーそに子TIME」30Gへ昇格。
- 昇格率: setting1 約70%、setting2 約70%、setting5 約65%、setting6 約60%。
- P-WORLDはRT純増を現状維持程度と説明。
- A+RT機で、AT/ARTの出玉管理を有利区間に依存するゲーム性ではないため、物差し用途の有利区間項目は `N/A_NOT_APPLICABLE_TO_CORE_GAMEPLAY`。

## resetBehavior
### settingChangeBehavior
- 本機固有の設定変更時RT状態・液晶状態・ボーナス内部成立状態を直接比較した高信頼資料を固定できず `UNVERIFIED_AFTER_RESEARCH`。
- 「設定変更」「リセット」「朝一」「RT」「設定変更時」「スーパーそに子」「SANYO」等へ検索語を変え、公式・業界・当時解析・後年整理資料を再探索済み。
- 先行機「パチスロ大海物語4」とゲーム性が近いことは業界資料で確認できるが、別機種のresetBehaviorを自動転記しない。

### carryOverBehavior
- 据え置きを独立条件として記述した本機固有資料を固定できず `UNVERIFIED_AFTER_RESEARCH_AS_DISTINCT_CONDITION`。
- 純電断と据え置きを同義扱いしない。

### powerCycleBehavior
- 電源OFF→ONのみの場合のRT/液晶/成立ボーナス状態の本機固有直接資料を固定できず `UNVERIFIED_AFTER_RESEARCH`。

### gameCounterReset
- 通常ゲーム数天井非搭載のため、天井ゲーム数カウンターについては `NOT_APPLICABLE_NO_CEILING`。
- RT残Gや特殊内部状態の設定変更/据え置き/純電断時処理は直接資料不足のため推定しない。

### ceilingAfterReset
- `NOT_APPLICABLE_NO_CEILING`。
- リセット短縮天井: `NONE_CONFIRMED_AFTER_RESEARCH`。

### modeAfterReset
- 朝一専用モード/設定変更専用モード振り分け: `NONE_CONFIRMED_AFTER_RESEARCH`。
- 通常時演出モードはラグーン/アトランティス/トレジャー/クリスタルの選択式だが、これは内部朝一モードとは別概念。

### stateAfterReset
- 設定変更・据え置き・純電断時のRT内部状態の直接契約: `UNVERIFIED_AFTER_RESEARCH`。

### advantageousSectionReset
- `N/A_NOT_APPLICABLE_TO_CORE_GAMEPLAY`。
- 5.9号機A+RTとして、今回の物差し用途で朝一有利区間処理を主要性能変数とする本機固有資料は確認していない。

### resetBenefits
- ちょんぼりすたは「朝一の恩恵などは存在しない可能性が高い」と推測表現で記載。
- 推測文を確定契約へ昇格させず、設定変更専用の短縮天井・専用モード・専用当選率UP等は `NONE_CONFIRMED_AFTER_RESEARCH`。

### resetPenalties
- 設定変更専用の明示的不利要素: `NONE_CONFIRMED_AFTER_RESEARCH`。

### resetDetection
- 本機固有のリールガックン、初期出目、液晶表示、ランプ等による設定変更/据え置き判別条件・発生率は十分な再探索後も固定できず `UNVERIFIED_AFTER_RESEARCH`。

### numericResetData
- 通常天井: 非搭載。
- 設定変更時短縮天井: `NOT_APPLICABLE`。
- 設定変更専用モード振り分け: `NONE_CONFIRMED_AFTER_RESEARCH`。
- 朝一特定G以内当選率/リセット恩恵発生率: `NONE_CONFIRMED_AFTER_RESEARCH`。
- ガックン発生率: `UNVERIFIED_AFTER_RESEARCH`。

## conflicts
- 性能コア主要値に重大なCONFLICTなし。
- 一部百科系後年資料に設定1ボーナス合算1/143.1との記載があるが、2018年当時業界一次記事・P-WORLD・ちょんぼりすた・すろぱちくえすと・後年設定DBはいずれも1/149.3で一致。低信頼の孤立値はcanonicalへ混ぜず、`CONFLICT_LOW_CONFIDENCE_OUTLIER_SETTING1_COMBINED_1_143_1_VS_CROSSCHECKED_1_149_3` として保持。
- パチ7のBIG個別ページ断片に「300枚」と表示される検索結果がある一方、同サイトの機種基本情報、P-WORLD、Amusement Japan、グリーンべると、ちょんぼりすた、すろぱちくえすとは250枚で一致。`CONFLICT_PACHI7_CUTOUT_BIG_300_VS_MULTIPLE_SOURCES_250` として平均せず保持し、canonicalは250枚。

## missingFields
- 正式型式名。
- 検定番号。
- RTの比較可能な純増枚/G。
- 設定変更/据え置き/純電断ごとのRT内部状態・液晶復帰の直接契約。
- 本機固有のガックン/初期出目等による変更判別条件・発生率。
- 設定変更専用の朝一数値（存在を示す公開値なし）。

## sources
取得日: 2026-09-10

1. SANYO公式 — https://www.sanyobussan.co.jp/products/slot_ooumi4_withsupersonico/
   - 現存公式製品ページ、機種同定。
2. SANYO公式 RT — https://www.sanyobussan.co.jp/products/slot_ooumi4_withsupersonico/rt/
   - RT機能ページ。
3. Amusement Japan — https://amusement-japan.co.jp/article/detail/10000761/
   - 2018-08-08内覧会、10/15導入、合算レンジ、BIG250枚/REG約100枚、RT概要。
4. グリーンべると / P-WORLD業界ニュース — https://news.p-world.co.jp/articles/10342/greenbelt
   - 2018-08-09発表、設定1/2/5/6、BIG/REG/合算レンジ、2段階RT、10/14納品予定。
5. P-WORLD — https://www.p-world.co.jp/machine/database/8738
   - 仕様、設定別BIG/REG/合算、獲得枚数、RT現状維持程度、RTゲーム数。
6. ちょんぼりすた — https://chonborista.com/slot/sanyo-slot/63469/
   - 導入日、設定別機械割/ボーナス、35.6〜38.3G/50枚、天井非搭載、朝一恩恵についての推測記載、RT昇格率。
7. すろぱちくえすと 基本 — https://www.slopachi-quest.com/article/ooumi4-supersoniko/
   - 導入日、5.9号機A+RT、setting1 35.6G/50枚、設定別ボーナス/機械割、天井非搭載、RT概要。
8. すろぱちくえすと 設定判別 — https://www.slopachi-quest.com/article/ooumi4-supersoniko-settei/
   - 設定差・RT昇格関連補助値。
9. パチ7 基本 — https://pachiseven.jp/machines/5541/cutout/3
   - 導入日、ノーマル+RT、天井なし、RTゲームフロー。
10. パチ7 REG — https://pachiseven.jp/machines/5541/cutout/8
   - REG約100枚。
11. pacnk後年整理 — https://pacnk.com/slot/tools/sh_oumimonogatarifuoizusupasoniko.html
   - 設定別PAYOUT・ボーナス値、天井非搭載のクロスチェック。
12. A-SLOT中古実機 — https://www.a-slot.com/SHOP/sanyo200.html
   - 2018-06-15北海道公安委員会検定通過状況の記載。型式/検定番号直接値は得られず。

## confidence
- releaseDate: `INDUSTRY_PLUS_MULTIPLE_ANALYSIS_CROSSCHECKED`
- identification: `OFFICIAL_FOR_PRODUCT / UNVERIFIED_FOR_FORMAL_MODEL_AND_CERTIFICATION`
- payoutRate: `ANALYSIS_HIGH_MULTIPLE_MATCH`
- initialHit: `INDUSTRY_PLUS_MULTIPLE_ANALYSIS_MATCH`
- baseGamesPer50: `ANALYSIS_HIGH_MULTIPLE_MATCH`
- basicPayout: `INDUSTRY_PLUS_MULTIPLE_ANALYSIS_MATCH_WITH_ONE_CONFLICTING_CUTOUT`
- resetBehavior: `MIXED_NO_CEILING_HIGH / OTHER_RESET_FIELDS_UNVERIFIED_AFTER_RESEARCH`
