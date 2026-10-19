# ニューハナハナ-30

machineName: ニューハナハナ-30
manufacturer: パイオニア
releaseDate: 2007-02（パイオニア公式・P-WORLDで月単位確認。日単位の全国納品/稼働開始日は今回確定できず）
generation: 5号機初期
systemType: ノーマル / 完全告知 / 30Φ

## payoutRateBySetting

### 市場掲載値
- 設定1: 95%
- 設定2: 98%
- 設定3: 100%
- 設定4: 103%
- 設定5: 105%
- 設定6: 107%

P-WORLDとpacnkの掲載値が一致。

信頼度: ANALYSIS_HIGH

### パチマガスロマガ旧攻略 シミュレート値
- 設定1: 96.80%
- 設定2: 98.99%
- 設定3: 101.16%
- 設定4: 103.39%
- 設定5: 105.10%
- 設定6: 106.87%

市場掲載の機械割とシミュレート値は定義を分離して保持し、平均しない。

信頼度: ANALYSIS_HIGH

## initialHitBySetting

### BIG
- 設定1: 1/327.68
- 設定2: 1/315.08
- 設定3: 1/303.41
- 設定4: 1/292.57
- 設定5: 1/284.94
- 設定6: 1/277.69

### REG
- 設定1: 1/555.39
- 設定2: 1/512.00
- 設定3: 1/474.90
- 設定4: 1/442.81
- 設定5: 1/420.10
- 設定6: 1/399.61

### ボーナス合成
- 設定1: 1/206.09
- 設定2: 1/195.05
- 設定3: 1/185.13
- 設定4: 1/176.17
- 設定5: 1/169.78
- 設定6: 1/163.84

P-WORLDの丸め値（BIG 1/327→1/277、REG 1/555→1/399、合算1/206→1/163）と整合。

信頼度: ANALYSIS_HIGH

## baseGamesPer50

UNVERIFIED_AFTER_RESEARCH

「ニューハナハナ-30 / ニューハナハナ30 / P5NHD-30 / パイオニア」に「50枚 / 1000円 / 千円 / ベース / コイン持ち / ゲーム数 / 1k」を組み合わせ、P-WORLD、旧パチマガスロマガ、pacnk、ハナハナ系後年回顧、業界記事を横断したが、本機固有の比較可能な公表値を確定できなかった。後継・別機種の37〜40G台の値は混入させない。

信頼度: UNVERIFIED_AFTER_RESEARCH

## netIncrease

- 非該当。RT/ART/AT等の付加機能なし。

## basicPayout

- BIG: 348枚を超える払い出しで終了、純増目安 約300枚
- REG: 168枚を超える払い出しで終了、純増目安 約150枚

P-WORLDと旧パチマガスロマガで一致。

信頼度: ANALYSIS_HIGH

## modeSpecificMinimumData

- 5号機 / 5ライン
- 30Φ沖スロ
- 完全告知
- ボーナスは単独成立のみ
- RTなどの付加機能なし
- 告知タイミングは成立ゲームのレバーON約90%、成立次ゲームのレバーON約10%
- ハイビスカス告知。通常以外の点滅パターンはBIG確定
- 型式名: P5NHD-30
- 検定番号: 5S1305
- 天井機能: 本機固有の天井は確認できず。ゲーム性資料上もボーナスのみの純Aタイプに近い構成
- 有利区間制度導入前

## resetBehavior

schemaVersion: v0.7
resetQaStatus: COMPLETE_WITH_SOURCE_LIMITS
resetQaLastUpdated: 2026-09-07

- settingChangeBehavior: ボーナスのみのノーマル機で、設定変更時に再抽選される天井・規定Gモード・AT/ART/RT状態は確認なし。本機固有のリール初期化契約は当時一次資料で固定できず `UNVERIFIED_AFTER_RESEARCH`
- carryOverBehavior: 据え置き時に引き継ぐ天井・規定Gモード・有利区間は `NOT_APPLICABLE`。リール初期位置・告知用内部処理の据え置き契約は `UNVERIFIED_AFTER_RESEARCH`
- powerCycleBehavior: 設定変更なしの電源OFF→ONについて、本機固有のリール初期位置、告知用内部状態、ボーナス成立状態の処理を直接比較する高信頼資料を確定できず `UNVERIFIED_AFTER_RESEARCH`
- gameCounterReset: `NOT_APPLICABLE_NO_CEILING_OR_GAME_NUMBER_RELEASE`
- ceilingAfterReset: `NOT_APPLICABLE_NO_CEILING`
- modeAfterReset: `NOT_APPLICABLE_NO_GAME_NUMBER_MODE`
- stateAfterReset: 朝一に再抽選対象となるAT/ART/RTの内部状態は `NOT_APPLICABLE`
- advantageousSectionReset: `NOT_APPLICABLE_5TH_GEN_PRE_5_9`
- resetBenefits: 朝一/設定変更固有の出玉恩恵は `NONE_CONFIRMED_AFTER_RESEARCH`
- resetPenalties: 設定変更固有の主要不利要素は `NONE_CONFIRMED_AFTER_RESEARCH`
- resetDetection: 後年ハナハナ専門回顧には本機の朝一ガックンチェックへの言及があるが、2007年当時のメーカー一次・業界一次・直接比較資料を固定できず `UNVERIFIED_AFTER_RESEARCH / PERIOD_PRIMARY_NOT_CONFIRMED`。後継ハナハナのガックン仕様を本機へ流用しない
- numericResetData: 設定変更時専用の比較可能な公開朝一数値は `NONE_CONFIRMED_AFTER_RESEARCH`
- publicMorningNumbers: `NONE_CONFIRMED_AFTER_RESEARCH`

### resetBehavior 再探索メモ

2026-09-07に再監査。

「ニューハナハナ-30 / ニューハナハナ30 / P5NHD-30 / ハナハナ / パイオニア」に「設定変更 / リセット / 朝一 / 据え置き / 電源OFF ON / 電断 / 電源入切 / 天井 / モード / ガックン / リール / 初期出目 / 状態」を組み合わせ、メーカー公式、P-WORLD、旧攻略、設定判別DB、ハナハナ専門回顧資料まで再探索した。

純ノーマル機ゆえゲーム数天井・規定Gモード・AT/ART/RT状態は非該当。一方、純電源OFF→ONと設定変更時のリール初期化差、およびガックン判別については、後年の別ハナハナ機種情報が検索結果に大量混入する。2007年本機固有の高信頼な直接契約を固定できないため推測せず `UNVERIFIED_AFTER_RESEARCH` とした。

## sources

取得日: 2026-09-07（性能コア初回取得 2026-08-31、resetBehavior再監査 2026-09-07）

1. パイオニア公式 — パチスロ機種情報2001年〜2009年 / ニューハナハナ-30
   - https://www.slot-pioneer.co.jp/products/2009.html
   - https://www.slot-pioneer.co.jp/product/new_hanahana/nh1.html
   - 2007年発売、メーカー/シリーズ同定
   - reliability: OFFICIAL
2. P-WORLD — ニューハナハナ30
   - https://www.p-world.co.jp/machine/database/4539
   - 5号機ノーマル/完全告知/沖スロ、設定別BIG/REG/合算、市場掲載機械割、BIG約300枚/REG約150枚、型式P5NHD-30、検定番号5S1305、2007年2月導入
   - reliability: INDUSTRY
3. パチマガスロマガ旧攻略 — 基本システム
   - https://cs62.cs-plaza.com/g/pachi/pla/s_conq/pioneer_slot/82/a.php
   - 5号機/5ライン、付加機能なし、BIG348枚超/約300枚、REG168枚超/約150枚
   - reliability: ANALYSIS_HIGH
4. パチマガスロマガ旧攻略 — ボーナス抽選確率
   - https://cs62.cs-plaza.com/g/pachi/pla/s_conq/pioneer_slot/82/h-2.php
   - 設定別BIG/REG/合成確率、PAYOUTシミュレート値96.80〜106.87%
   - reliability: ANALYSIS_HIGH
5. pacnk — ニューハナハナ30 設定判別ツール
   - https://pacnk.com/slot/tools/sh_newhana.html
   - 2007年2月導入、BIG/REG、市場掲載PAYOUT 95〜107%の照合
   - reliability: ANALYSIS_SINGLE
6. ハナハナ専門回顧資料 — ハナハナ機種情報
   - https://hanahana-blog.com/category/model-information
   - ニューハナハナ30の設定差整理と朝一ガックンチェックへの言及
   - reliability: ANALYSIS_SINGLE_RETROSPECTIVE

## missingFields

- 正確な全国納品/稼働開始日（日単位）
- 50枚あたりゲーム数 / 1000円ベース
- 電源OFF→ONのみと設定変更時のリール初期化挙動の厳密な差
- ガックン判別のメーカー一次/当時一次資料照合

## conflicts

- 機械割はP-WORLD/pacnkの市場掲載値95/98/100/103/105/107%と、旧パチマガスロマガのシミュレート値96.80/98.99/101.16/103.39/105.10/106.87%がある。定義が異なるため平均せず別系列として保持。

coreStatus: PARTIAL_WITH_RESEARCHED_MISSING_BASE
resetBehaviorQA: COMPLETE_WITH_SOURCE_LIMITS
