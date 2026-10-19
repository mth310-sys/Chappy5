machineName: パチスロ薄桜鬼蒼焔録
manufacturer: D-light / ディ・ライト
releaseDate: 2016-11-07
recordNumber: 1022
generation: 5号機 / 5.5号機期
systemType: ノーマルAタイプ / ボーナス主体 / 技術介入
formalModelName: 薄桜鬼蒼焔録WV
certificationNumber: 6S0586
recordStatus: COMPLETE_CORE_WITH_RESET_BEHAVIOR_V0_7_AND_BASE_CONFLICT

## identity
- D-light公式製品ページで「パチスロ薄桜鬼 蒼焔録」を確認。
- PiDEA Xの2016-09-15当時業界記事はD-lightの新機種発表、BIG約400枚 / REG約100枚、導入（オープン）日2016-11-07予定を記録。
- HAZUSEは導入開始日2016-11-07、型式 `薄桜鬼蒼焔録WV`、検定番号 `6S0586`。K-Naviもホール導入開始2016-11-07で一致。
- releaseDate canonical: 2016-11-07。
reliability: INDUSTRY_ANALYSIS_HIGH_MULTI_SOURCE

## payoutRateBySetting
| 設定 | 機械割 |
|---:|---:|
| 1 | 97.4% |
| 2 | 98.7% |
| 3 | 99.8% |
| 4 | 102.7% |
| 5 | 106.2% |
| 6 | 110.1% |
- HAZUSE、K-Navi、ちょんぼりすたで一致。
reliability: ANALYSIS_HIGH_MULTI_SOURCE

## initialHitBySetting
| 設定 | BIG | REG | ボーナス合算 |
|---:|---:|---:|---:|
| 1 | 1/370.26 | 1/431.16 | 1/199.20 |
| 2 | 1/364.09 | 1/417.43 | 1/194.47 |
| 3 | 1/360.09 | 1/402.06 | 1/189.96 |
| 4 | 1/350.46 | 1/390.10 | 1/184.61 |
| 5 | 1/344.93 | 1/378.82 | 1/180.54 |
| 6 | 1/322.84 | 1/337.81 | 1/165.08 |
- HAZUSEの精密値をcanonicalとし、K-Navi/ちょんぼりすたの丸め値（例: 370.3、431.2、199.2）で照合。
reliability: ANALYSIS_HIGH_MULTI_SOURCE

## baseGamesPer50
- HAZUSE: 約36.4〜38.7G/50枚。
- ちょんぼりすた詳細設定別: 37.6 / 37.9 / 38.2 / 38.7 / 40.0 / 40.1G（設定1〜6）。ページ上部概要は38G/50枚。
- すろぱちくえすと: 37.6〜40.1G。
- 両系列は高設定側で差が大きく、単純な丸め差だけでは説明し切れないため平均せず `CONFLICT_BASE_36_4_TO_38_7_VS_37_6_TO_40_1` として保持。
reliability: CONFLICT_MULTI_SOURCE

## netIncrease
- NOT_APPLICABLE_NORMAL_TYPE。ボーナスのみで出玉を増やすノーマルAタイプ。

## basicPayout
- BIG: 約400枚。464枚を超える払い出しで終了。
- REG: 約100枚。104枚を超える払い出しで終了。
- BIG中は簡単な技術介入により最大獲得を狙える仕様。
reliability: INDUSTRY_ANALYSIS_HIGH_MULTI_SOURCE

## modeSpecificMinimumData
- ボーナス主体のノーマルAタイプ。AT/ARTは非搭載。
- 天井機能非搭載。
- 通常時は任意に5種類の演出モードを選択可能だが、これは液晶演出モードであり、AT/ART機の朝一内部モードとは別物として扱う。

## resetBehavior
schemaVersion: v0.7
resetQaStatus: COMPLETE_PUBLIC_MACRO_BEHAVIOR_WITH_NO_RESET_ECONOMIC_MECHANISM_CONFIRMED
resetQaLastUpdated: 2026-09-08

### settingChangeBehavior
- 本機は天井非搭載の純ボーナス型ノーマルAタイプで、設定変更による天井短縮・朝一専用当選モード・CZ/AT優遇は該当しない。
- 設定変更時の一時的RT/プチRT状態、演出状態、内部リプレイ状態等の本機固有処理は、機種名・型式名・メーカー名と「設定変更 / リセット / 朝一 / 据え置き / 電源OFF ON / ガックン / プチRT」を組み替えて公式・業界・当時解析・古いDBを再探索したが直接固定できず `UNVERIFIED_AFTER_RESEARCH`。

### carryOverBehavior
- 天井/ゲーム数モードが存在しないため、経営シミュレーション上の天井進捗CARRYOVERは `NOT_APPLICABLE`。
- 本機固有のプチRT等、一時的内部状態の据え置き契約は `UNVERIFIED_AFTER_RESEARCH`。

### powerCycleBehavior
- 天井/ゲーム数モードが存在しないため、天井進捗に関する純電源OFF→ON契約は `NOT_APPLICABLE`。
- 純電源OFF→ON時の本機固有の一時的内部状態/液晶状態は、十分な再探索後も直接資料を固定できず `UNVERIFIED_AFTER_RESEARCH`。

### gameCounterReset
- NOT_APPLICABLE_NO_CEILING_GAME_COUNTER。

### ceilingAfterReset
- NOT_APPLICABLE_NO_CEILING。
- 設定変更専用の短縮天井: NONE / NOT_APPLICABLE。

### modeAfterReset
- 経営シミュレーション上の朝一当選モード: NONE_CONFIRMED_AND_NOT_STRUCTURALLY_APPLICABLE_TO_NORMAL_A_TYPE。
- 液晶の5演出モードはプレイヤー任意選択で、朝一リセットモードとして扱わない。

### stateAfterReset
- AT/ART用の低確/高確/CZ状態: NOT_APPLICABLE。
- プチRT等の一時的内部状態の設定変更/電断契約: UNVERIFIED_AFTER_RESEARCH。

### advantageousSectionReset
- NOT_APPLICABLE_5TH_GEN_PRE_5_9。

### resetBenefits
- 天井短縮、朝一専用モード、CZ/ART優遇等: NONE_CONFIRMED / STRUCTURALLY_NOT_APPLICABLE。

### resetPenalties
- 前日天井進捗消失等: NOT_APPLICABLE。
- その他の設定変更固有不利: NONE_CONFIRMED_AFTER_RESEARCH。

### resetDetection
- 本機固有のガックン、初期出目、ランプ、液晶状態等による設定変更確定/濃厚判別は、検索語と資料系統を変更して再探索しても直接固定できず `NONE_CONFIRMED_AFTER_RESEARCH`。
- 一般的なAタイプ筐体挙動から推測して補完しない。

### numericResetData
- 通常天井: NONE。
- 設定変更後天井: NONE。
- リセット専用モード振り分け: NONE_CONFIRMED / NOT_APPLICABLE。
- 朝一特定G以内の当選率/恩恵発生率: NONE_CONFIRMED。

## dataQualityNotes
- 導入日、型式、検定番号はHAZUSE、当時業界記事、K-Naviで整合。
- 機械割、BIG/REG/合算はHAZUSE・K-Navi・ちょんぼりすたで一致。
- BIG約400枚 / REG約100枚はD-light発表を伝えるPiDEA X、HAZUSE、K-Navi、P-WORLDで整合。
- 50枚ベースのみ資料系列差があるためCONFLICTを保持し、平均化しない。
- resetBehaviorは天井非搭載Aタイプとして経営上の主要リセット価値がN/Aであることを明示し、プチRT等の実機完全再現寄り内部状態は資料不足のため推測せずUNVERIFIEDとした。

## conflicts
- CONFLICT_BASE_36_4_TO_38_7_VS_37_6_TO_40_1: HAZUSEの約36.4〜38.7G/50枚と、ちょんぼりすた/すろぱちくえすとの37.6〜40.1G/50枚。定義差または算出差の可能性があるが直接解消資料を確認できず両方保持。

## missingFields
- 設定変更/据え置き/純電源OFF→ON時の本機固有プチRT・一時的内部状態: UNVERIFIED_AFTER_RESEARCH
- 本機固有の変更判別契約: NONE_CONFIRMED_AFTER_RESEARCH

## sources
取得日: 2026-09-08

1. D-light / Daiichi公式 — パチスロ薄桜鬼 蒼焔録
   - https://daiichi777.jp/product/detail/140/hakuoki
2. PiDEA X — MAX-Atypeの「パチスロ薄桜鬼蒼焔録」を発売／ディ・ライト（2016-09-15）
   - https://www.pidea.jp/articles/MAX-Atype%E3%81%AE%E3%80%8C%E3%83%91%E3%83%81%E3%82%B9%E3%83%AD%E8%96%84%E6%A1%9C%E9%AC%BC%E8%92%BC%E7%84%94%E9%8C%B2%E3%80%8D%E3%82%92%E7%99%BA%E5%A3%B2%EF%BC%8F%E3%83%87%E3%82%A3%E3%83%BB%E3%83%A9%E3%82%A4%E3%83%88
3. HAZUSE — パチスロ薄桜鬼蒼焔録（導入日、型式、検定、天井非搭載）
   - https://hazuse.com/machine/pachislot/6S0586/
4. HAZUSE — 基本スペック（BIG/REG/合算、機械割、50枚ベース、獲得枚数）
   - https://hazuse.com/machine/pachislot/6S0586/genre/201/
5. K-Navi — パチスロ薄桜鬼蒼焔録（導入日、確率、機械割、獲得枚数）
   - https://p-kn.com/slot/2616/
6. ちょんぼりすた — 薄桜鬼 蒼焔録（スペック、設定別50枚ベース、獲得枚数）
   - https://chonborista.com/slot/d-light/26047/
7. すろぱちくえすと — 設定判別・コイン持ち
   - https://www.slopachi-quest.com/article/hakuouki-settei/
8. P-WORLD — パチスロ薄桜鬼蒼焔録（ノーマルタイプ、技術介入、獲得枚数）
   - https://www.p-world.co.jp/machine/database/8168
9. 2016年新台導入日カレンダー（11/07群横断補助）
   - https://moge-site.com/new-slot2016
