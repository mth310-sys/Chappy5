machineName: クレアの秘宝伝～眠りの塔とめざめの石～
manufacturer: 大都技研
releaseDate: 2016-08-22
recordNumber: 1002
generation: 5号機 / 5.5号機期
systemType: A+RT / ボーナス主体
formalModelName: クレアの秘宝伝眠りの塔と目覚めの石／A2
certificationNumber: 6S0476
recordStatus: COMPLETE_CORE_WITH_RESET_BEHAVIOR_V0_7

## identity
- 大都技研公式製品一覧で2016年8月導入、BB終了後30G RTを確認。
- 遊技日本の2016-07-15当時記事で導入開始予定2016-08-22、ボーナス主体+30G RTを確認。
- HAZUSEで導入2016-08-22、型式 `クレアの秘宝伝眠りの塔と目覚めの石／A2`、検定番号 `6S0476` を確認。
reliability: OFFICIAL_INDUSTRY_HIGH_MULTI_SOURCE

## payoutRateBySetting
### 市場掲載/標準値
| 設定 | 機械割 |
|---:|---:|
| 1 | 97.2% |
| 2 | 98.7% |
| 3 | 101.6% |
| 4 | 106.1% |
| 5 | 108.5% |
| 6 | 114.6% |
- 2-9伝説、アタリ7、当時業界記事の設定6値等で整合。

### ボーナス最速察知時
| 設定 | 機械割 |
|---:|---:|
| 1 | 98.6% |
| 2 | 100.1% |
| 3 | 103.1% |
| 4 | 107.1% |
| 5 | 109.3% |
| 6 | 115.2% |
- 一撃・5号機クロニクル・中古実機資料で一致。
- 標準値とは攻略条件が異なるため平均せず別定義として保持。
reliability: ANALYSIS_HIGH_MULTI_SOURCE

## initialHitBySetting
### BIG
| 設定 | BIG |
|---:|---:|
| 1 | 1/299.3 |
| 2 | 1/292.6 |
| 3 | 1/280.1 |
| 4 | 1/265.3 |
| 5 | 1/257.0 |
| 6 | 1/232.4 |

### REG
| 設定 | REG |
|---:|---:|
| 1 | 1/364.1 |
| 2 | 1/341.3 |
| 3 | 1/303.4 |
| 4 | 1/287.4 |
| 5 | 1/264.3 |
| 6 | 1/232.4 |

### ボーナス合算
- 設定1: 1/164.3
- 設定2: 1/157.5
- 設定3: 1/145.6
- 設定4: 1/138.0
- 設定5: 1/130.3
- 設定6: 1/116.2
reliability: ANALYSIS_HIGH_MULTI_SOURCE

## baseGamesPer50
- **約33.46G～34.91G/50枚（設定1～6）**。
- なな徹の小役解析値を採用。
reliability: ANALYSIS_HIGH

## netIncrease
- BIG後RT: **約0.2枚/G**。
- RTは30G継続。
reliability: ANALYSIS_SINGLE_WITH_OFFICIAL_RT_DURATION

## basicPayout
- BIG BONUS: **最大304枚**。
- REG BONUS: **最大106枚**。
- 大都技研発表を伝える業界資料で確認。
reliability: INDUSTRY_HIGH

## modeSpecificMinimumData
- ボーナス主体のA+RT機。
- BIG終了後は必ず30G RTへ突入。
- 通常時ゲーム数天井: **非搭載**。
- AT/ARTの長期ゲーム数モード・CZ天井: **NOT_APPLICABLE**。
- 有利区間制度導入前。

## resetBehavior
schemaVersion: v0.7
resetQaStatus: COMPLETE_PUBLIC_MACRO_BEHAVIOR_WITH_UNVERIFIED_TRANSIENT_RT_STATE
resetQaLastUpdated: 2026-09-08

### settingChangeBehavior
- 通常時ゲーム数天井を持たず、AT/ARTの長期ゲーム数モードも非搭載のため、天井リセット/モード再抽選は **NOT_APPLICABLE**。
- 設定変更専用の短縮天井、朝一専用モード、専用CZ、初当たり優遇は、機種名表記揺れ・型式・大都技研・設定変更・リセット・朝一・据え置き・ガックン等へ検索語を変更して再探索したが **NONE_CONFIRMED_AFTER_RESEARCH**。
- 設定変更時のRT途中状態そのものの扱いを直接示す本機固有資料は今回固定できず、実機完全再現用の推測はしない。

### carryOverBehavior
- 通常時天井/ゲーム数モードは非搭載のため、据え置き時に引き継ぐ天井進捗はなし。
- ボーナス成立状態やRT途中など一時的な内部状態の細部は本DBの性能物差し目的外。朝一挙動として固定できる本機固有契約は今回未確認。

### powerCycleBehavior
- 純電源OFF→ONで引き継ぐべき通常時天井/長期モードは非搭載。
- HAZUSEでは隠しコマンドによる楽曲開放状態が「電源断まで継続」とされ、純電断で演出解放状態が初期化されることは確認できるが、これは性能コア/朝一恩恵ではないため参考情報扱い。
- RT途中など一時的内部状態の純電断時契約は **UNVERIFIED_AFTER_RESEARCH**。

### gameCounterReset
- 通常時ゲーム数天井: **NOT_APPLICABLE**。

### ceilingAfterReset
- 天井非搭載のため **NOT_APPLICABLE**。
- 設定変更専用短縮天井: **NONE**。

### modeAfterReset
- AT/ARTの長期通常時モード/朝一専用モード: **NOT_APPLICABLE / NONE_CONFIRMED_AFTER_RESEARCH**。

### stateAfterReset
- 朝一客行動へ影響する設定変更専用高確・状態優遇: **NONE_CONFIRMED_AFTER_RESEARCH**。
- 通常時の「高確率」演出はチャンス目後のボーナス告知用プチRT/演出状態であり、設定変更専用朝一状態として扱わない。

### advantageousSectionReset
- **NOT_APPLICABLE_5TH_GEN_PRE_5_9**。

### resetBenefits
- 短縮天井、朝一専用高確、専用CZ、専用初当たり優遇: **NONE_CONFIRMED_AFTER_RESEARCH**。

### resetPenalties
- 設定変更で失われる通常時天井進捗・長期AT/ARTモードは非搭載。
- その他の設定変更専用不利要素: **NONE_CONFIRMED_AFTER_RESEARCH**。

### resetDetection
- 本機固有のガックン、初期出目、液晶表示、ゲーム数挙動などによる確定的な設定変更判別は、検索語・資料系統を変えて再探索したが **NONE_CONFIRMED_AFTER_RESEARCH**。
- 一般的な大都筐体挙動からの推測は採用しない。

### numericResetData
- 設定変更時モード振り分け: NOT_APPLICABLE / NONE_CONFIRMED
- 短縮天井: NOT_APPLICABLE
- 朝一一定G以内当選率/設定変更専用恩恵発生率: NONE_CONFIRMED_AFTER_RESEARCH

## dataQualityNotes
- 導入日・メーカー・方式は公式/当時業界/解析の複数系統で一致。
- 型式/検定番号はHAZUSEで固定し、中古実機資料で型式を照合。
- 機械割は標準掲載値とボーナス最速察知時で明確に定義が異なるため、CONFLICTではなく `DIFFERENT_CONDITION_SERIES` として分離。
- ベースは設定差を含む約33.46～34.91G/50枚を採用。
- resetBehaviorは天井・長期モード非搭載により大半が非該当。RT途中の設定変更/純電断契約は性能物差し目的で推測補完しない。

## conflicts
- NONE_FOR_SAME_DEFINITION_CORE_VALUES
- DIFFERENT_CONDITION_SERIES: payoutRate standard 97.2/98.7/101.6/106.1/108.5/114.6 vs bonus-fast-detection 98.6/100.1/103.1/107.1/109.3/115.2

## sources
取得日: 2026-09-08

1. 大都技研 — スロット機種 製品情報
   - https://www.daitogiken.com/products/slot/
   - 2016年8月、BB終了後30G RT、シリーズ公式説明
   - reliability: OFFICIAL
2. 遊技日本 — 4年の時を経て復活！／クレアの秘宝伝～眠りの塔とめざめの石～
   - https://yugi-nippon.com/pachinko-news/post-8706/
   - 2016-07-15当時記事、導入8/22、合算、設定6出玉率114.6%、30G RT
   - reliability: INDUSTRY
3. 長崎県遊技業協同組合（遊技通信web転載）
   - https://nagasaki-yukyo.or.jp/information/%E5%A4%A7%E9%83%BD%E6%8A%80%E7%A0%94%E3%81%8C%E3%80%8C%E3%82%AF%E3%83%AC%E3%82%A2%E3%81%AE%E7%A7%98%E5%AE%9D%E4%BC%9D%E3%80%9C%E7%9C%A0%E3%82%8A%E3%81%AE%E5%A1%94%E3%81%A8%E3%82%81%E3%81%96%E3%82%81/
   - BB最大304枚、RB最大106枚、30G RT、合算
   - reliability: INDUSTRY
4. HAZUSE — クレアの秘宝伝 ～眠りの塔とめざめの石～
   - https://hazuse.com/machine/pachislot/6S0476/
   - 導入2016-08-22、型式A2、検定6S0476
   - reliability: ANALYSIS_HIGH_ARCHIVE
5. 2-9伝説 — スペック解析
   - https://2-9densetsu.com/creanohihouden2/
   - 標準機械割97.2～114.6%、BIG/REG、天井なし、RT純増約0.2枚/G
   - reliability: ANALYSIS_SINGLE
6. 一撃 — クレアの秘宝伝 ～眠りの塔とめざめの石～
   - https://1geki.jp/slot/s_creanohihouden2/
   - ボーナス最速察知時PAY98.6～115.2%、BIG/REG/合算
   - reliability: ANALYSIS_HIGH
7. 一撃 — ボーナス確率
   - https://1geki.jp/slot/s_creanohihouden2/1/
   - 設定別BIG/REG/合算
   - reliability: ANALYSIS_HIGH
8. なな徹 — 小役確率
   - https://nana-press.com/kaiseki/machine/60/1130/
   - 50枚あたり約33.46～34.91G
   - reliability: ANALYSIS_HIGH
9. なな徹 — 機種概要
   - https://nana-press.com/kaiseki/machine/60/
   - A+RT、天井非搭載、導入2016-08-22、ベース
   - reliability: ANALYSIS_HIGH
10. アタリ7 — クレアの秘宝伝 ～眠りの塔とめざめの石～
   - https://www.atari7.com/slot/date1468479990.php
   - 設定別BIG/REG/合算、標準機械割、導入日
   - reliability: ANALYSIS_SINGLE
11. 5号機クロニクル — 大都技研
   - https://5goki.com/daito
   - 最速察知系機械割98.6～115.2%
   - reliability: ANALYSIS_HIGH_RETROSPECTIVE
12. 中一商事 — 中古実機
   - https://www.nakaiti.com/html/sDaitogiken090.html
   - 型式A2、BIG最大304枚、REG最大106枚、出玉率98.6%系
   - reliability: SECONDARY_HARDWARE_REFERENCE

## missingFields
- 設定変更/据え置き/純電源OFF→ON時のRT途中状態の本機固有直接契約
- 本機固有の確定的設定変更判別

## QA note
- 性能コアとv0.7 resetBehaviorを収録。
- 次は同日群の `スーパープラネットデラックス` を処理する。
