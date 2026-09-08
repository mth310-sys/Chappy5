machineName: パチスロ未来日記
manufacturer: EXCITE（ニューギン系）
releaseDate: 2016-09-05
recordNumber: 1007
generation: 5号機 / 5.5号機期
systemType: ボーナス主体 / A+プチART（サバイバルZONE）
formalModelName: UNVERIFIED_AFTER_RESEARCH
certificationNumber: UNVERIFIED_AFTER_RESEARCH
recordStatus: COMPLETE_CORE_WITH_RESET_BEHAVIOR_V0_7_PARTIAL

## identity
- 2016-07-20の大阪ショールーム内覧会を報じた日刊スポーツ系業界記事で、ニューギン販売・EXCITE製「パチスロ未来日記」を確認。
- グリーンべると2016-08-02記事では納品開始予定を2016-09-04、K-Navi・ちょんぼりすた等はホール導入開始を2016-09-05とする。DBのreleaseDateは全国ホール導入日のcanonicalとして2016-09-05を採用し、09-04は納品開始日として定義分離。
- 正式型式名・検定番号は「未来日記」「パチスロ未来日記」「EXCITE」「エキサイト」「ニューギン」「型式」「検定番号」「5S/6S」「回胴式遊技機」「公安委員会」等へ検索語・資料系統を変えて再探索したが、今回直接固定できず推測しない。
reliability: INDUSTRY_ANALYSIS_HIGH_MULTI_SOURCE / FORMAL_ID_UNVERIFIED

## payoutRateBySetting
| 設定 | 機械割 |
|---:|---:|
| 1 | 97.9% |
| 2 | 99.3% |
| 3 | 100.4% |
| 4 | 104.0% |
| 5 | 105.9% |
| 6 | 110.0% |
- P-WORLDとちょんぼりすたで同系列を確認。
reliability: ANALYSIS_HIGH_MULTI_SOURCE

## initialHitBySetting
| 設定 | BIG | REG | ボーナス合算 |
|---:|---:|---:|---:|
| 1 | 1/299.3 | 1/392.4 | 1/169.8 |
| 2 | 1/293.9 | 1/378.8 | 1/165.5 |
| 3 | 1/291.3 | 1/364.1 | 1/161.8 |
| 4 | 1/276.5 | 1/343.1 | 1/153.1 |
| 5 | 1/265.3 | 1/326.0 | 1/146.3 |
| 6 | 1/261.1 | 1/290.0 | 1/137.4 |
- P-WORLD精密値。ちょんぼりすた掲載の丸め値（BIG 1/299→1/261、REG 1/392→1/290、合算1/170→1/137）と整合。
reliability: ANALYSIS_HIGH_MULTI_SOURCE

## baseGamesPer50
- 約35.8〜39.4G/50枚（ART含む、設定差を含むレンジ）。
- 別解析整理では代表値約37G/50枚。
- 定義を混ぜず、canonicalは設定差を含む35.8〜39.4Gレンジとする。
reliability: ANALYSIS_HIGH_MULTI_SOURCE

## netIncrease
- プチART「サバイバルZONE」: 約0.6枚/G。
- 平均継続ゲーム数: 約12.2G（設定1基準の掲載値）。
reliability: ANALYSIS_HIGH_MULTI_SOURCE

## basicPayout
- BIG BONUS: 最大約312枚。
- REG BONUS: 最大約91枚。
- 2016-07-21日刊スポーツ系記事、2016-08-02グリーンべると、P-WORLD、K-Naviで一致。
reliability: INDUSTRY_ANALYSIS_HIGH_MULTI_SOURCE

## modeSpecificMinimumData
- 通常はボーナス主体。チャンスリプレイを主契機として押し順ナビ前兆兼プチART「サバイバルZONE」へ移行する。
- サバイバルZONEは平均約12.2G、純増約0.6枚/G。ベルこぼし・転落リプレイ・ボーナス入賞等で終了。
- ゲーム数天井は非搭載。

## resetBehavior
schemaVersion: v0.7
resetQaStatus: COMPLETE_NO_CEILING_WITH_TRANSIENT_STATE_UNVERIFIED
resetQaLastUpdated: 2026-09-08

### settingChangeBehavior
- 本機はゲーム数天井を搭載しないため、設定変更による天井ゲーム数RESET/短縮という概念は **NOT_APPLICABLE**。
- 朝一専用の固定モード、設定変更専用当選テーブル、設定変更専用の公開恩恵率は、機種名表記揺れ・「設定変更」「リセット」「朝一」「天井」「据え置き」「電源OFF ON」「ガックン」「サバイバルZONE」等へ検索語を変え、当時攻略・古DB・回顧資料を横断しても直接確認できず **NONE_CONFIRMED_AFTER_RESEARCH**。
- サバイバルZONE等の一時的な内部状態を設定変更でどう扱うかについて、本機固有の直接契約を固定できず **UNVERIFIED_AFTER_RESEARCH**。

### carryOverBehavior
- 天井・周期・通常時モードといった朝一の累積進捗項目は非搭載のため **NOT_APPLICABLE**。
- 据え置き時のサバイバルZONE等、一時状態の翌日保持契約は直接資料を固定できず **UNVERIFIED_AFTER_RESEARCH**。

### powerCycleBehavior
- ゲーム数天井/周期/通常時モードの累積進捗は非搭載のため **NOT_APPLICABLE**。
- 純電源OFF→ON時にサバイバルZONE等の一時状態が内部的に保持されるか、表示がどう復帰するかは、本機固有の比較資料を再探索後も固定できず **UNVERIFIED_AFTER_RESEARCH**。
- 一般的なノーマル/A+RT機の挙動から推定補完しない。

### gameCounterReset
- CEILING_COUNTER_NOT_APPLICABLE。
- 通常ゲーム数の液晶/データ表示を設定変更・純電断でどう初期化するかについて、客側判別に使える本機固有の契約は **UNVERIFIED_AFTER_RESEARCH**。

### ceilingAfterReset
- 通常時ゲーム数天井: **NOT_APPLICABLE / 天井非搭載**。
- 設定変更専用短縮天井: **NOT_APPLICABLE**。

### modeAfterReset
- 天井を管理する通常時モード/朝一専用モード: **NONE_CONFIRMED_AFTER_RESEARCH**。
- サバイバルZONEはボーナス前兆兼プチARTであり、朝一累積モードとしては扱わない。

### stateAfterReset
- 低確/高確等の設定変更時・据え置き時・純電断時の朝一比較テーブルは **UNVERIFIED_AFTER_RESEARCH**。
- サバイバルZONEの設定変更/据え置き/純電断を直接比較する公開契約も **UNVERIFIED_AFTER_RESEARCH**。

### advantageousSectionReset
- NOT_APPLICABLE_5TH_GEN_PRE_5_9。

### resetBenefits
- 固定短縮天井、朝一高確率、朝一専用モード等の主要リセット恩恵は **NONE_CONFIRMED_AFTER_RESEARCH**。
- 天井非搭載のため、設定変更により天井進捗を失う不利益もない。

### resetPenalties
- ゲーム数天井/周期の宵越し価値喪失は **NOT_APPLICABLE**。
- その他の公開された設定変更専用不利率は **NONE_CONFIRMED_AFTER_RESEARCH**。

### resetDetection
- 本機固有のメーカー保証されたガックン、初期出目、ランプ、液晶ステージ、ゲーム数表示等による設定変更/据え置き確定判別は、検索語・資料系統変更後も **NONE_CONFIRMED_AFTER_RESEARCH**。
- 一般的なリールガックン論は本機固有根拠なしでは採用しない。

### numericResetData
- 設定変更時モード振り分け: **NONE_CONFIRMED_AFTER_RESEARCH**。
- 朝一一定G以内当選率: **NONE_CONFIRMED_AFTER_RESEARCH**。
- 短縮天井G数: **NOT_APPLICABLE**。
- リセット恩恵発生率: **NONE_CONFIRMED_AFTER_RESEARCH**。

## dataQualityNotes
- 性能コアはP-WORLD・ちょんぼりすた・K-Navi・業界発表で高一致。
- 本機は攻略サイトにより「ノーマルタイプ」「A+ART」と分類表記が分かれるが、実態はボーナス主体にボーナス前兆兼プチART「サバイバルZONE」を付加した構造。分類差として保持し、出玉の主軸はボーナス主体とする。
- 50枚ベースは約35.8〜39.4G（ART含む）という設定差レンジと、代表値約37Gという丸め整理がある。競合ではなく精度/集約差として定義分離。
- リセット挙動は天井非搭載で多くの項目がNOT_APPLICABLE。一時状態の電断/設定変更契約は一般論で補完せずUNVERIFIED。

## conflicts
- `CLASSIFICATION_LABEL_VARIANT_NORMAL_VS_A_PLUS_PETIT_ART`: P-WORLD/業界記事はノーマル/Aタイプを強調、K-Navi/ちょんぼりすたはプチART搭載/A+ARTと表記。ゲーム性の実態は同じで数値競合ではない。
- 導入日について、グリーンべるとの「9月4日より納品開始予定」とK-Navi/解析の「9月5日ホール導入開始」はイベント定義が異なるためCONFLICT化せず `DELIVERY_START_2016_09_04 / HALL_INTRODUCTION_2016_09_05` として分離。

## missingFields
- formalModelName: UNVERIFIED_AFTER_RESEARCH
- certificationNumber: UNVERIFIED_AFTER_RESEARCH
- settingChange transient state contract: UNVERIFIED_AFTER_RESEARCH
- carryOver transient state contract: UNVERIFIED_AFTER_RESEARCH
- powerCycle transient state contract: UNVERIFIED_AFTER_RESEARCH

## sources
取得日: 2026-09-08

1. 日刊スポーツ / 娯楽産業 — 「パチスロ未来日記」発表（2016-07-21）
   - https://www.nikkansports.com/amusement/pachinko/news/1681991.html
   - EXCITE製、BIG最大312枚、REG91枚、サバイバルZONE概要。
2. グリーンべると — 前兆ゲーム数が長い程ボーナス期待度アップ（2016-08-02）
   - https://web-greenbelt.jp/00008846/
   - EXCITE製、Aタイプ、BIG約312枚、REG約91枚、9月4日納品開始予定。
3. P-WORLD — パチスロ未来日記
   - https://www.p-world.co.jp/machine/database/8114
   - 設定別BIG/REG/合算、機械割、ボーナス獲得枚数、ゲーム性。
4. ちょんぼりすた — 未来日記 スロット｜天井・打ち方・設定判別・解析・評価・PV動画
   - https://chonborista.com/slot/newgin-slot/22861/
   - 導入日、設定別スペック、35.8〜39.4G/50枚、天井非搭載、サバイバルZONE純増約0.6枚/G・平均12.2G。
5. K-Navi — パチスロ未来日記
   - https://p-kn.com/slot/2561/
   - ホール導入開始2016-09-05、BIG最大312枚、REG最大91枚、プチART構造。
6. 期待値見える化 — 未来日記 設定判別ツール＆設定差解析まとめ
   - https://slotjin.com/slot-tool/mirainikki/
   - 導入日9月5日予定、コイン持ち約37G/50枚、天井非搭載、プチART平均12.2G・純増0.6枚/G。
7. A-SLOT — EXCITE パチスロ未来日記 中古実機
   - https://www.a-slot.com/SHOP/excite17.html
   - EXCITE実機、ノーマル主体、最大312枚/91枚の後年実機流通確認。
