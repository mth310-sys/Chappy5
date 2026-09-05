# ニューパルサーSP

machineName: ニューパルサーSP
manufacturer: 山佐
releaseDate: 2012-06-04
releaseDatePrecision: exact_day_with_source_conflict
releaseDateNotes: K-Naviおよび2012-06-04当時新台一覧はホール導入2012-06-04。HAZUSEは導入開始日2012-06-11、P-WORLD/A-SLOTは2012年6月。平均せず日付差を保持し、本DBの時系列キーは最古の明示的ホール導入日2012-06-04を採用。
generation: 5号機
systemType: ノーマル / ボーナス主体 / BIG+REG / 2演出モード選択式
formalModelName: ニューパルサーSP-B
approvalNumber: 2S0079
recordStatus: COMPLETE_CORE_RESET_RESEARCHED_WITH_PARTIAL_RESET_DATA

## payoutRateBySetting

### 市場掲載/通常表示

| 設定 | 機械割 |
|---|---:|
| 1 | 96.9% |
| 2 | 98.3% |
| 3 | 100.1% |
| 4 | 102.4% |
| 5 | 105.2% |
| 6 | 110.0% |

reliability: ANALYSIS_HIGH_CROSSCHECKED
notes: P-WORLDとパチマガスロマガ通常スペック表が一致。K-Naviも設定6でシリーズ最高峰110%と説明。

### パチマガスロマガ別表示

| 設定 | PAYOUT |
|---|---:|
| 1 | 97.27% |
| 2 | 98.33% |
| 3 | 100.14% |
| 4 | 103.12% |
| 5 | 106.23% |
| 6 | 110.48% |

reliability: ANALYSIS_HIGH_PERIOD_SOURCE_DEFINITION_UNRESOLVED
notes: 同一サイトの h-1.php に別PAYOUT値が残る。通常表示との差の定義（攻略条件/算出条件等）を本文から確定できないため平均せずCONFLICTとして保持。

## initialHitBySetting

| 設定 | BIG | REG | ボーナス合算 |
|---|---:|---:|---:|
| 1 | 1/282.4 | 1/420.1 | 1/168.9 |
| 2 | 1/281.2 | 1/402.0 | 1/165.4 |
| 3 | 1/275.3 | 1/381.0 | 1/159.8 |
| 4 | 1/263.2 | 1/350.4 | 1/150.3 |
| 5 | 1/252.0 | 1/321.2 | 1/141.2 |
| 6 | 1/236.5 | 1/289.9 | 1/130.2 |

reliability: ANALYSIS_HIGH_PERIOD_SOURCE_CROSSCHECKED
notes: P-WORLDとパチマガスロマガ本機専用表が完全一致。2012-06-04当時新台一覧にも同BIG/REG値が掲載されるが合算欄に転記ずれがあるため、合算は一致する2系統を採用。

## baseGamesPer50

value: 35.01〜36.98G/50枚（1000円あたり）
reliability: ANALYSIS_HIGH_PERIOD_SOURCE
notes: パチマガスロマガ本機専用小役ページ。設定差のある小役確率に対応したレンジとして掲載。

## netIncrease

value: NOT_APPLICABLE_NORMAL_TYPE
reliability: SYSTEM_CONFIRMED
notes: AT/ART非搭載。ボーナスのみでコインを増やすノーマルタイプ。

## basicPayout

- BIG: 約312枚（360枚超払い出しで終了）。
- REG: 約104枚（120枚超払い出しで終了）。
- ボーナス中は基本フリー打ちで、通常時小役も取りこぼし防止設計が確認される。

reliability: ANALYSIS_HIGH_CROSSCHECKED

## modeSpecificMinimumData

- 天井: 非搭載/天井恩恵なしとして扱う。後年の本機専用立ち回り資料でも「天井なし」の趣旨が明示され、設定変更後の特別恩恵も「特にありません」とされる。
- 通常時はプレイヤーが「ノーマルモード」「フラッシュモード」を任意選択する演出モードを搭載。これはAT/ARTの内部モードではない。
- 全小役確率・同時当選詳細・全リーチ目等は物差し用途外のため収集対象外。

reliability: ANALYSIS_HIGH_FOR_SYSTEM; ANALYSIS_SINGLE_RETROSPECTIVE_FOR_RESET_NO_BENEFIT

## resetBehavior

schemaVersion: v0.7
resetQaStatus: RESEARCHED
resetQaLastUpdated: 2026-09-05

settingChangeBehavior: NO_SPECIAL_RESET_BENEFIT_CONFIRMED_SINGLE_RETROSPECTIVE。本機固有の後年立ち回り資料で「設定変更後 特にありません」と明記。ノーマル機で天井/AT・ART内部モードは非搭載。設定変更時に客の朝一狙いを生む固有恩恵は確認できない。
carryOverBehavior: PERFORMANCE_RELEVANT_CARRYOVER_NOT_APPLICABLE; PRESENTATION_MODE_PERSISTENCE_UNVERIFIED。天井ゲーム数・AT/ART状態・有利区間など翌日へ引き継ぐ性能契約は本機のシステム上非該当。プレイヤー選択の演出モードが据え置き時に保持されるかは直接資料未確認。
powerCycleBehavior: UNVERIFIED_AFTER_RESEARCH。設定変更を伴わない単純電源OFF→ONで演出モード選択状態・停止出目等がどう扱われるか、本機固有の直接資料を確定できず。性能上の天井/内部AT・ART状態は非搭載。
gameCounterReset: NOT_APPLICABLE_NO_GAME_COUNT_CEILING。天井用ゲーム数カウンタ非搭載。
ceilingAfterReset: NOT_APPLICABLE_NO_CEILING。設定変更専用の短縮天井なし。
modeAfterReset: INTERNAL_PERFORMANCE_MODE_NOT_APPLICABLE。ノーマル/フラッシュはプレイヤー選択の演出モードであり、朝一当選率を左右する内部モードではない。設定変更時の演出モード初期化/保持は未確認。
stateAfterReset: NOT_APPLICABLE_NO_AT_ART_STATE_CONFIRMED。朝一性能を左右す高確/AT・ART内部状態は本機の通常性能構造として確認されない。
advantageousSectionReset: NOT_APPLICABLE_5TH_GEN
resetBenefits: NONE_CONFIRMED_AFTER_RESEARCH。設定変更後の特別恩恵は本機固有資料で「特にありません」。
resetPenalties: NONE_CONFIRMED_AFTER_RESEARCH。失われる天井進捗やAT/ART状態は非搭載。その他の設定変更固有不利は確認できず。
resetDetection: UNVERIFIED_AFTER_RESEARCH。本機固有の設定変更ガックン・朝一出目・表示による確定/推測判別資料を確定できず。通常演出として「バウンドスタート/バウンドストップ」が存在するため、これを設定変更ガックンと混同しない。
publicMorningNumbers: NONE_CONFIRMED。短縮天井、リセットモード振り分け、朝一特定G以内当選率、リセット恩恵発生率などの公開値は確認できず。
numericResetData: none

notes:
- 「ニューパルサーSP / ニューパルサーSP-B / 山佐 / パルサー」と「設定変更 / リセット / 朝一 / 据え置き / 電源OFF ON / 天井 / モード / ガックン / 50枚 / 1000円 / ベース」を組み替えて再探索。
- P-WORLD、K-Navi、HAZUSE、パチマガスロマガ、2012年当時新台一覧、当時〜後年の本機立ち回り資料、中古実機DBを横断。
- SP II / SP III / SP4 with 太鼓の達人等の後継機の朝一仕様は初代SPへ流用していない。
- 本機通常演出の「バウンドスタート」はボーナス期待演出であり、設定変更判別のガックン根拠には採用しない。

resetQaReliability: ANALYSIS_SINGLE_RETROSPECTIVE_FOR_NO_SPECIAL_SETTING_CHANGE_BENEFIT__SYSTEM_CONFIRMED_FOR_NON_APPLICABLE_CEILING_AT_ART_ADVANTAGEOUS_SECTION__UNVERIFIED_AFTER_RESEARCH_FOR_POWER_CYCLE_AND_DETECTION

## conflicts

- releaseDate: K-Navi/2012-06-04当時新台一覧=2012-06-04、HAZUSE=2012-06-11、P-WORLD/A-SLOT=2012年6月。平均せず保持。
- payoutRateBySetting: P-WORLD/パチマガ通常表示=96.9/98.3/100.1/102.4/105.2/110.0%。パチマガ別表示=97.27/98.33/100.14/103.12/106.23/110.48%。定義差を確定できないためCONFLICT。
- 2012-06-04当時新台一覧の表はBIG/REG値は一致するが、設定3以降の「ボーナス合成」欄が1行ずつずれたような値を掲載しているため、合算値の照合元には使用しない。

## missingFields

- 据え置き時の演出モード選択状態の保持/初期化
- 単純電源OFF→ON時の演出モード/停止出目等の直接契約
- 本機固有の設定変更判別（ガックン/初期出目/表示）
- パチマガ通常PAYOUTと別表示PAYOUTの条件定義
- 設定変更専用の公開朝一数値（存在を確認できず）

## sources

取得日: 2026-09-05

1. P-WORLD「ニューパルサーSP」 https://www.p-world.co.jp/machine/database/6724
   - 5号機ノーマル、BIG/REG/合算、通常機械割、BIG312枚/REG104枚、型式ニューパルサーSP-B、検定番号2S0079、2012年6月。
   - reliability: ANALYSIS_HIGH / DATABASE
2. K-Navi「ニューパルサーSP」 https://p-kn.com/slot/1626/
   - ホール導入開始2012-06-04、ノーマルタイプ、BIG360枚超/REG120枚超払い出し、BIG約312枚/REG約104枚、設定6機械割110%。
   - reliability: ANALYSIS_HIGH / PERIOD_SOURCE
3. HAZUSE「ニューパルサーSP」 https://hazuse.com/machine/pachislot/2S0079/
   - 導入開始2012-06-11、型式ニューパルサーSP-B、検定番号2S0079、BIG約312枚/REG約104枚。
   - reliability: OLD_DATABASE / PERIOD_SOURCE
4. パチマガスロマガ「スペック」 https://cs62.cs-plaza.com/g/pachi/pla/s_conq/yamasa_slot/187/a.php
   - ボーナスのみのノーマル、BIG約312枚/REG約104枚、2演出モード。
   - reliability: ANALYSIS_HIGH / PERIOD_SOURCE
5. パチマガスロマガ「ボーナス確率」 https://cs62.cs-plaza.com/g/pachi/pla/s_conq/yamasa_slot/187/h.php
   - BIG/REG/合算、PAYOUT 96.9〜110.0%。
   - reliability: ANALYSIS_HIGH / PERIOD_SOURCE
6. パチマガスロマガ「ボーナス確率 別表示」 https://cs62.cs-plaza.com/g/pachi/pla/s_conq/yamasa_slot/187/h-1.php
   - 同じBIG/REG/合算だがPAYOUT 97.27〜110.48%。通常表示との定義未解決。
   - reliability: ANALYSIS_HIGH / PERIOD_SOURCE_DEFINITION_UNRESOLVED
7. パチマガスロマガ「小役確率」 https://cs62.cs-plaza.com/g/pachi/pla/s_conq/yamasa_slot/187/c.php
   - 1000円あたり35.01〜36.98G。
   - reliability: ANALYSIS_HIGH / PERIOD_SOURCE
8. 2012-06-04当時新台一覧 https://macerate.seesaa.net/article/273495238.html
   - 6/4〜6/10導入予定群にニューパルサーSP、導入開始2012-06-04、BIG/REG/機械割を掲載。合算欄の転記ずれに注意。
   - reliability: PERIOD_SECONDARY_WITH_TABLE_TRANSCRIPTION_ISSUE
9. メタボ教授「ニューパルサーSPは小役の出現率を見て設定狙いをすれば勝てる？」 https://metabopro.com/newparutorimu/
   - 本機固有「天井」なしの趣旨、および「設定変更後 特にありません」と記載。
   - reliability: ANALYSIS_SINGLE_RETROSPECTIVE
10. A-SLOT「山佐 ニューパルサーSP」 https://www.a-slot.com/SHOP/yamasa101.html
   - 山佐、2012年6月導入開始、5号機、2演出モード。
   - reliability: RETROSPECTIVE_DATABASE
