machineName: A-SLOT 偽物語
manufacturer: サミー
releaseDate: 2016-07-04
recordNumber: 993
generation: 5号機 / 5.5号機期
systemType: ノーマル / A+RT / 技術介入 / 4段階設定（1・2・5・6）
formalModelName: A-SLOT偽物語/ZR
certificationNumber: UNVERIFIED_AFTER_RESEARCH
recordStatus: COMPLETE_CORE_WITH_RESET_BEHAVIOR_V0_7

## identity
- サミー公式マイスロが2016-07-04を「本日ホール導入日」と明記。地域差注記あり。
- P-WORLD / K-Navi / 一撃も2016-07-04で一致。
- 実機流通資料で型式表記 `A-SLOT偽物語/ZR` を確認。検定番号は高信頼資料で固定できずUNVERIFIEDのまま保持。
reliability: OFFICIAL_INDUSTRY_ANALYSIS_HIGH

## payoutRateBySetting
### 市場掲載値
| 設定 | 機械割 |
|---:|---:|
| 1 | 98.32% |
| 2 | 99.98% |
| 5 | 104.58% |
| 6 | 109.70% |

### 上級打法 / 完全攻略系
- 一撃: **100.43 / 102.12 / 105.96 / 112.65%**（設定1/2/5/6、スイカ/チェリー全取得＋成立後3G以内揃え）。
- ちょんぼりすた等に完全攻略値 **100.4 / 102.1 / 106.0 / 112.7%** の丸め値。
- 市場掲載値と攻略条件付き値は定義差なので別系列で保持し、CONFLICT化しない。
reliability: ANALYSIS_HIGH_MULTI_SOURCE

## initialHitBySetting
| 設定 | BIG合算 | REG | ボーナス合算 |
|---:|---:|---:|---:|
| 1 | 1/227.56 | 1/455.11 | 1/151.70 |
| 2 | 1/224.44 | 1/422.81 | 1/146.61 |
| 5 | 1/210.05 | 1/385.51 | 1/135.97 |
| 6 | 1/189.41 | 1/318.14 | 1/118.72 |
- BIGは同色/異色を搭載。P-WORLD・一撃で設定別詳細値が一致。
reliability: INDUSTRY_ANALYSIS_HIGH_MULTI_SOURCE

## baseGamesPer50
- 設定1代表値: **約34.1G/50枚**。
- 解析値（プチRT非考慮）: 設定1〜6 **32.67 / 33.16 / 33.69 / 34.28G**。
- プチRT込みでは解析資料に **34〜36G/50枚** の説明あり。算定条件が違うため混ぜず併記。
reliability: ANALYSIS_HIGH

## netIncrease
- BIG後RT「倖時間（ハッピータイム）」: **20G固定**。
- 怪異リプレイ後のチャンスゾーンは最大**8GのプチRT**。
- 比較可能な純増枚数/Gは高信頼資料で固定できず **UNVERIFIED**。
reliability: INDUSTRY_ANALYSIS_HIGH

## basicPayout
- 同色BIG: **最大312枚**。
- 異色BIG: **208枚**。
- REG: **104枚**。
reliability: INDUSTRY_ANALYSIS_HIGH_MULTI_SOURCE

## modeSpecificMinimumData
- 通常時ゲーム数天井: **非搭載**。
- 怪異リプレイ後は最大8GのプチRT型チャンスゾーン。
- BIG終了後は20GのRT「倖時間」。
- 通常A/B・天国等のゲーム数モード管理型AT機ではない。
- 実機完全再現用の全重複役確率・設定示唆振り分けは物差し用途外。

## resetBehavior
schemaVersion: v0.7
resetQaStatus: COMPLETE_PUBLIC_MACRO_BEHAVIOR_WITH_UNVERIFIED_RT_POWER_CONTRACT
resetQaLastUpdated: 2026-09-08

### settingChangeBehavior
- 通常時ゲーム数天井非搭載のため天井進捗リセット/短縮は **NOT_APPLICABLE**。
- 一撃の当時「天井/設定変更」では、設定変更時の液晶ステージを **現在調査中** と記録。
- 20G RT「倖時間」中、または最大8GプチRT中に設定変更した際の内部RT状態保持/終了は、本機固有の直接資料を固定できず **UNVERIFIED_AFTER_RESEARCH**。

### carryOverBehavior
- ゲーム数天井・長期ゲーム数モードがないため、それらの据え置き恩恵は **NOT_APPLICABLE**。
- RT/プチRT中の据え置きで残G・内部RT状態が翌営業へ保持されるかは **UNVERIFIED_AFTER_RESEARCH**。

### powerCycleBehavior
- 一撃の当時資料では純電源OFF/ON時の液晶ステージも **現在調査中**。
- RT/プチRT中の純電源OFF→ON時の内部状態保持/終了も **UNVERIFIED_AFTER_RESEARCH**。
- 設定変更/据え置き/純電断を一般論で同一扱いしない。

### gameCounterReset
- **NOT_APPLICABLE_NO_GAME_CEILING**。

### ceilingAfterReset
- **NOT_APPLICABLE_NO_GAME_CEILING**。
- リセット専用短縮天井なし。

### modeAfterReset
- AT/ART機の通常A/B・天国等のゲーム数モードは **NOT_APPLICABLE**。
- 朝一専用内部モード振り分けは **NONE_CONFIRMED_AFTER_RESEARCH**。

### stateAfterReset
- 20G RT「倖時間」および最大8GプチRTの設定変更/据え置き/純電断時契約は **UNVERIFIED_AFTER_RESEARCH**。
- それ以外の通常時高低状態を管理する公開リセット契約は **NONE_CONFIRMED_AFTER_RESEARCH**。

### advantageousSectionReset
- **NOT_APPLICABLE_5TH_GEN_PRE_5_9**。

### resetBenefits
- 設定変更専用の天井短縮、朝一専用モード、公開された朝一特定G以内当選率は **NONE_CONFIRMED / NOT_APPLICABLE**。

### resetPenalties
- 前日天井進捗を失う不利は **NOT_APPLICABLE**。
- RT状態の設定変更処理が未固定のため、RT中変更に伴う不利を推測しない。

### resetDetection
- 機種名/型式/Sammy/設定変更/リセット/朝一/据え置き/電源OFF ON/RT/プチRT/倖時間/ガックン/液晶ステージを組み替えて再探索。
- ガックン可能との予測記事は存在するが予測止まりのため確定情報へ格上げしない。
- 本機固有の確定ガックン・初期出目・ランプ・ステージ判別契約は **NONE_CONFIRMED_AFTER_RESEARCH**。
- 一撃でも設定変更時/電源OFF ON時の液晶ステージは「現在調査中」。

### numericResetData
- 設定変更時モード振り分け: **NONE_CONFIRMED / NOT_APPLICABLE**。
- 朝一特定G以内当選率: **NOT_APPLICABLE_NO_GAME_NUMBER_HIT_SYSTEM**。
- 短縮天井: **NOT_APPLICABLE**。
- 設定変更固有の公開数値恩恵: **NONE_CONFIRMED_AFTER_RESEARCH**。

## dataQualityNotes
- 導入日はサミー公式を最優先し、K-Navi/P-WORLD/一撃で照合。
- 機械割は市場掲載値と攻略条件付き値を分離。サイトごとの小数丸め差は定義CONFLICT扱いしない。
- 50枚ベースは通常計算とプチRT込みで条件差があるため別系列で保持。
- resetBehaviorは一般的Aタイプ論から推測せず、当時一撃が未確定としていた液晶/RT電源契約はUNVERIFIEDを維持。
- ガックン「可能と予測」は解析確定値ではないため変更判別器として採用しない。

## sources
取得日: 2026-09-08

1. Sammy マイスロ — 2016/07/04 A-SLOT 偽物語登場
   - https://new.sammy.co.jp/japanese/myslot/news/
   - 2016-07-04を「本日ホール導入日」と公式確認。
   - reliability: OFFICIAL
2. P-WORLD — A-SLOT 偽物語
   - https://www.p-world.co.jp/machine/database/8064
   - 5号機RT、ボーナス獲得枚数、設定別ボーナス確率/市場機械割、8GプチRT、20G倖時間。
   - reliability: INDUSTRY_DATABASE
3. K-Navi — A-SLOT偽物語
   - https://p-kn.com/slot/2523/
   - 導入日、ボーナス獲得枚数、合算、8GプチRT、BIG後20G RT。
   - reliability: PERIOD_ANALYSIS
4. 一撃 — A-SLOT偽物語 機種概要/スペック
   - https://1geki.jp/slot/s_aslot_nisemono/
   - 合算、機械割、上級打法値、導入日、ゲーム性。
   - reliability: PERIOD_ANALYSIS
5. 一撃 — ボーナス確率
   - https://1geki.jp/slot/s_aslot_nisemono/1/
   - BIG/REG/合算の設定別精密値。
   - reliability: PERIOD_ANALYSIS
6. 一撃 — 天井/設定変更
   - https://1geki.jp/slot/s_aslot_nisemono/3/
   - 天井非搭載、設定変更時/純電源OFF ON時の液晶ステージは「現在調査中」。
   - reliability: PERIOD_ANALYSIS
7. 一撃 — RT概要
   - https://1geki.jp/slot/s_aslot_nisemono/81/
   - BIG後RT「倖時間」20G。
   - reliability: PERIOD_ANALYSIS
8. ちょんぼりすた — A-SLOT 偽物語
   - https://chonborista.com/slot/sammy-slot/20560/
   - 設定別機械割、50枚ベース、設定別ボーナス、導入日。
   - reliability: PERIOD_ANALYSIS
9. 愛品館 実機情報
   - https://www.aihin.co.jp/new/news-1043582/
   - 型式表記 `A-SLOT偽物語/ZR`。
   - reliability: OLD_MACHINE_MARKET_REFERENCE

## missingFields
- certificationNumber: UNVERIFIED_AFTER_RESEARCH
- RT「倖時間」純増/G: UNVERIFIED
- プチRT純増/G: UNVERIFIED
- 設定変更時の液晶ステージ: UNVERIFIED_AFTER_RESEARCH
- 純電源OFF→ON時の液晶ステージ: UNVERIFIED_AFTER_RESEARCH
- RT/プチRT中の設定変更・据え置き・純電断契約: UNVERIFIED_AFTER_RESEARCH

## conflicts
- 市場機械割と完全攻略/上級打法値は条件差でありCONFLICTではない。
- 50枚ベースはプチRT非考慮の設定別値とプチRT込み34〜36Gがあり、算定条件差として分離。

## QA note
- 新規時点からresetBehavior v0.7を収録。
- 性能コアは複数当時/業界資料で必要項目を確保。
- RT電源契約と変更判別は十分再探索後も直接固定できないため、推測せずUNVERIFIED_AFTER_RESEARCH/NONE_CONFIRMED_AFTER_RESEARCHを保持。
