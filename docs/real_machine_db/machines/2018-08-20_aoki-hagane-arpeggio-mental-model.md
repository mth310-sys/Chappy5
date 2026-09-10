# No.1223 パチスロ蒼き鋼のアルペジオ‐アルス・ノヴァ‐ Mental Model ver.

- recordStatus: `COMPLETE_CORE_WITH_RESET_BEHAVIOR_V0_7`
- machineName: パチスロ蒼き鋼のアルペジオ‐アルス・ノヴァ‐ Mental Model ver.
- manufacturer: タイヨーエレック製造 / サミー販売・ブランド
- releaseDateCanonical: 2018-08-20
- generation: 5.9号機
- systemType: A+RT / GRT / 技術介入
- formalModelName: `蒼き鋼のアルペジオ アルスノヴァ2／ZS`
- certificationNumber: `7S1689`
- settings: `1 / 2 / 3 / 4 / 5 / 6`
- collectedAt: 2026-09-10

## releaseDateEvidence
- サミー公式は2018-05-28の発売告知で「8月中旬より全国のホールで稼動予定」と公表。
- HAZUSE、必勝本、ちょんぼりすた等の実導入資料は2018-08-20で一致。
- 当時業界記事PiDEA Xはサミー発表・タイヨーエレック製として紹介。
- confidence: `OFFICIAL_INDUSTRY_AND_ANALYSIS_CROSSCHECKED`。

## performanceCore

### payoutRateBySetting
市場予測/通常:
- setting1: 97.9%
- setting2: 98.8%
- setting3: 100.6%
- setting4: 103.2%
- setting5: 106.2%
- setting6: 110.0%

フル攻略:
- setting1: 98.9%
- setting2: 99.9%
- setting3: 101.7%
- setting4: 104.3%
- setting5: 107.3%
- setting6: 111.1%

- 通常値とフル攻略値は技術介入条件差として分離し、CONFLICT扱いしない。

### initialHitBySetting
エピソードBIG:
- setting1: 1/32768.0
- setting2: 1/32768.0
- setting3: 1/32768.0
- setting4: 1/21845.3
- setting5: 1/21845.3
- setting6: 1/21845.3

トライデントボーナス:
- setting1: 1/993.0
- setting2: 1/993.0
- setting3: 1/978.1
- setting4: 1/978.1
- setting5: 1/949.8
- setting6: 1/949.8

ノーマルBIG:
- setting1: 1/425.5
- setting2: 1/425.5
- setting3: 1/420.1
- setting4: 1/420.1
- setting5: 1/404.6
- setting6: 1/364.1

BIG合算:
- setting1: 1/295.2
- setting2: 1/295.2
- setting3: 1/291.3
- setting4: 1/290.0
- setting5: 1/280.1
- setting6: 1/260.1

MIDDLE BONUS / MB:
- setting1: 1/360.1
- setting2: 1/348.6
- setting3: 1/337.8
- setting4: 1/309.2
- setting5: 1/287.6
- setting6: 1/260.1

ボーナス合算:
- setting1: 1/162.2
- setting2: 1/159.8
- setting3: 1/156.4
- setting4: 1/149.6
- setting5: 1/141.9
- setting6: 1/130.0

### baseGamesPer50
- 約31G/50枚。

### netIncrease
- RT純増: 約0.2枚/G。

### basicPayout
- EPISODE BIG BONUS: 252枚。
- Trident BONUS: 最大250枚。
- BIG BONUS: 最大205枚。
- MIDDLE BONUS: 最大60枚。

### ceiling
- 通常ゲーム数天井: `NONE / 非搭載`。

## modeSpecificMinimumData
- 全ボーナス後にRTへ突入。
- EPISODE BIG後: `ARS NOVA MODE`、次回ボーナスまでの無限RT。
- Trident BONUS / BIG後: `BLUE STEEL MODE`、100G RT。
- MB後: `MENTAL MODEL MODE`、50G+α RT。消化中のBAR揃いの一部で無限RTへ昇格。
- RTは約0.2枚/G。
- 通常時の全小役確率、ボーナス同時当選内訳、演出期待度等は実機完全再現用詳細のため収集対象外。

## resetBehavior

### settingChangeBehavior
- 当時解析の朝一比較表では設定変更時のRT状態を「リセット?」と疑問符付きで掲載しており、確定契約ではない。
- 機種名、正式型式、サミー/タイヨーエレック、GRT、設定変更/リセット/朝一/RT状態/ガックン等で再探索したが、設定変更時RT状態を断定できる別系統の公開資料を固定できず `UNVERIFIED_AFTER_RESEARCH_SOURCE_SUGGESTS_RESET_WITH_QUESTION_MARK`。

### carryOverBehavior
- 据え置き時を設定変更・純電源OFF→ONから独立して説明する本機固有公開資料は固定できず `UNVERIFIED_AFTER_RESEARCH_AS_DISTINCT_CONDITION`。
- 純電断の一般論を据え置き契約へ自動転記しない。

### powerCycleBehavior
- 当時解析の朝一比較表では純電源OFF→ON時のRT状態・ステージとも「調査中」。
- 型式名を含めて検索語・資料系統を変更したが、本機固有の確定契約を追加固定できず `UNVERIFIED_AFTER_RESEARCH`。

### gameCounterReset
- 通常ゲーム数天井非搭載のため天井ゲーム数カウンタは `NOT_APPLICABLE_NO_NORMAL_CEILING`。
- 朝一客行動へ影響する別の公開ゲーム数カウンタ持越しは `NONE_CONFIRMED_AFTER_RESEARCH`。

### ceilingAfterReset
- 通常天井/短縮天井: `NOT_APPLICABLE_NO_NORMAL_CEILING`。

### modeAfterReset
- 設定変更専用/朝一専用モードやその振り分け: `NONE_CONFIRMED_AFTER_RESEARCH`。
- RT種別はボーナス契機で決まるゲーム性だが、設定変更によるRT状態処理自体は上記のとおり未確定。

### stateAfterReset
- 設定変更時のRT状態は疑問符付き資料のみ、純電断時は当時資料でも調査中。
- ステージは設定変更・純電断とも当時資料で調査中。
- よって確定契約へ昇格せず `UNVERIFIED_AFTER_RESEARCH`。

### advantageousSectionReset
- 公開ゲーム性はリアルボーナス+RTのGRT機で、ART/AT/CZ型の有利区間を用いた朝一契約は機種固有資料で確認できない。
- 一般的な5.9号機論から付与せず `NOT_APPLICABLE_TO_PUBLISHED_A_PLUS_RT_GAMEPLAY` とする。

### resetBenefits
- 通常天井短縮、朝一専用高確/モード、設定変更時のみの初当たり優遇など: `NONE_CONFIRMED_AFTER_RESEARCH`。

### resetPenalties
- 設定変更時のみの主要な不利要素: `NONE_CONFIRMED_AFTER_RESEARCH`。

### resetDetection
- 本機固有のガックン、初期出目、RT表示/ステージ等による設定変更・据え置き判別の確定条件/発生率は `UNVERIFIED_AFTER_RESEARCH`。
- サミートロフィー等の通常設定示唆はresetDetectionとは分離する。

### numericResetData
- 設定変更時のみの当選率、朝一特定G数内期待度、リセット恩恵率、ガックン率、短縮天井G数等の公開数値: `NONE_CONFIRMED_AFTER_RESEARCH`。

## conflicts
- `NONE_CONFIRMED_CORE_CONFLICTS`。
- サミー表記とタイヨーエレック表記はメーカー競合ではなく、サミー発売/ブランド・タイヨーエレック製造という役割差として保持。
- 設定変更時RT「リセット?」は断定値ではないためCONFLICTではなく、未確定ソース記述として保持。

## missingFields
- 設定変更時RT状態の確定契約。
- 据え置き時の本機固有RT/状態契約。
- 純電源OFF→ON時の本機固有RT/状態契約。
- 本機固有の朝一変更判別条件・公開数値。

## sources
取得日: 2026-09-10

1. Sammy公式 — 新機種発売のお知らせ
   - https://www.sammy.co.jp/japanese/news/2018/931.html
   - 2018-05-28発表、GRT第三弾、8月中旬稼動開始予定。
   - reliability: `OFFICIAL`
2. PiDEA X — GRT第3弾で「蒼き鋼のアルペジオ」再出航／サミー
   - https://www.pidea.jp/articles/GRT%E7%AC%AC3%E5%BC%BE%E3%81%A7%E3%80%8C%E8%92%BC%E3%81%8D%E9%8B%BC%E3%81%AE%E3%82%A2%E3%83%AB%E3%83%9A%E3%82%B8%E3%82%AA%E3%80%8D%E5%86%8D%E5%87%BA%E8%88%AA%EF%BC%8F%E3%82%B5%E3%83%9F%E3%83%BC
   - サミー発表、タイヨーエレック製、A+RT GRT第3弾。
   - reliability: `INDUSTRY`
3. HAZUSE — 機種DB
   - https://hazuse.com/machine/pachislot/7S1689/genre/201/
   - 導入2018-08-20、型式 `蒼き鋼のアルペジオ アルスノヴァ2／ZS`、検定7S1689。
   - reliability: `ANALYSIS_HIGH_PERIOD_DB`
4. ちょんぼりすた — 蒼き鋼のアルペジオ(RT)解析
   - https://chonborista.com/slot/sammy-slot/61580/
   - 導入日、約31G/50枚、設定別ボーナス確率、通常/フル攻略機械割、天井非搭載。朝一表で設定変更時RT「リセット?」、電源OFF→ON時RT/ステージ「調査中」。
   - reliability: `ANALYSIS_HIGH_PERIOD_SOURCE`
5. パチ＆スロ必勝本 — 機種情報
   - https://p.hisshobon.jp/machine/3220/1/70566
   - 導入2018-08-20、各ボーナス獲得枚数とRT構成。
   - reliability: `ANALYSIS_HIGH_PERIOD_SOURCE`
6. P-WORLD — 機種DB
   - https://www.p-world.co.jp/machine/database/8672
   - タイヨーエレック、RT純増0.2枚/G、各ボーナス獲得枚数・RT構成。
   - reliability: `INDUSTRY_DB`
7. すろかい — 2018年当時解析
   - https://slotkaiseki.hatenablog.com/entry/arpeggio2
   - 2018-08-20、ノーマル+RT、約31G/50枚、設定別スペック表。
   - reliability: `PERIOD_ANALYSIS_SECONDARY`
8. 日刊スポーツ — 2018年8月導入カレンダー
   - https://www.nikkansports.com/amusement/pachislot/news/201808100000381.html
   - 2018-08-20導入群の時系列監査根拠。
   - reliability: `INDUSTRY_CALENDAR`
