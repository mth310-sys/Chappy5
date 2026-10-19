# パチスロ リング 呪いの7日間

machineName: パチスロ リング 呪いの7日間
formalModelName: パチスロ リング ノロイノナノカカンFSB
inspectionNumber: 4S0053
manufacturer: 藤商事
releaseDate: 2014-07-22
releaseDatePrecision: exact_start
generation: 5号機
systemType: AT / 疑似ボーナス / CZ / ゲーム数解除 / 天井
recordStatus: COMPLETE_CORE_WITH_PARTIAL_RESET_BEHAVIOR_V0_7

## identity

- 藤商事公式製品ページ、K-Navi、パチビー、HAZUSEで2014-07-22導入を照合。
- HAZUSEで型式名 **パチスロ リング ノロイノナノカカンFSB**、検定番号 **4S0053** を確認。
- confidence: OFFICIAL / ANALYSIS_HIGH_MULTI_SOURCE

## payoutRateBySetting

| 設定 | 出玉率 |
|---:|---:|
| 1 | 97.2% |
| 2 | 98.6% |
| 3 | 100.6% |
| 4 | 104.1% |
| 5 | 107.2% |
| 6 | 113.2% |

- 藤商事公式掲載値。K-Navi等でも一致。
- confidence: OFFICIAL

## initialHitBySetting

| 設定 | 貞子BONUS | 呪縛RUSH |
|---:|---:|---:|
| 1 | 1/242.8 | 1/573.6 |
| 2 | 1/232.7 | 1/550.2 |
| 3 | 1/218.5 | 1/517.1 |
| 4 | 1/196.4 | 1/464.9 |
| 5 | 1/182.6 | 1/433.1 |
| 6 | 1/159.7 | 1/379.0 |

- 藤商事公式掲載値。疑似ボーナス初当たりとAT初当たりを別定義で保持。
- confidence: OFFICIAL

## baseGamesPer50

- **UNVERIFIED_AFTER_RESEARCH**。
- `50枚 / 1000円 / ベース / コイン持ち / 回転数` を機種名・型式名と組み合わせ、公式、K-Navi、パチマガスロマガ、HAZUSE、旧解析まとめを再探索したが、比較可能な直接値を安全に固定できなかった。

## netIncrease

- 貞子BONUS / 呪縛RUSHともAT純増 **約3.0枚/G**。
- 藤商事公式、パチビー、パチマガスロマガ、当時アプリ発表資料で一致。
- confidence: OFFICIAL / MULTI_SOURCE

## basicPayout

- 貞子BONUS: **40G、平均約120枚**。
- 呪縛RUSH: **1セット40G+α、純増約3.0枚/G**。ゲーム数上乗せ+継続抽選+セットストック型、ループ率最大80%。
- CZ「亡魂ZONE」: 10G / 20G / 当選まで、疑似ボーナス期待度約35%。
- confidence: OFFICIAL / ANALYSIS_HIGH_MULTI_SOURCE

## modeSpecificMinimumData

- 通常時は通常A / 通常B / 天国準備 / 天国の4モード。
- モード別天井: **通常A 900G / 通常B 999G / 天国準備 400G / 天国 99G**。
- 最大ゲーム数天井は **999G**。995G以降の当選は次回天国確定とする解析が複数資料で一致。
- AT非当選の貞子BONUSが9回続いた後、次回（10回目）でAT当選となるスルー天井も解析されている。
- 通常時全モード移行・全ゲーム数振り分けは物差し用途を超えるため収集しない。

## resetBehavior

schemaVersion: v0.7
resetQaStatus: PARTIAL
resetQaLastUpdated: 2026-09-07

### settingChangeBehavior

- **設定変更で天井までのゲーム数はクリア / G数リセット**。当時攻略資料系統を変えて照合。
- ボーナス後・AT後とは別に、設定変更時専用のモード振り分けが存在。
- confidence: ANALYSIS_HIGH_MULTI_SOURCE

### carryOverBehavior

- 純据え置き時に前日ゲーム数、モード、内部状態、ATスルー回数をどう保持するかを本機固有で直接明示した高信頼資料は、再探索後も安全に固定できず **UNVERIFIED_AFTER_RESEARCH**。
- 一般的な5号機AT機からの推定転記は行わない。

### powerCycleBehavior

- 設定変更なしの単純な電源OFF→ONのみについて、内部ゲーム数・モード・状態・スルー回数の処理を本機固有で明示した直接資料は **UNVERIFIED_AFTER_RESEARCH**。

### gameCounterReset

- 設定変更: **RESET_CONFIRMED**。天井G数クリア。
- 据え置き: **UNVERIFIED_AFTER_RESEARCH**。
- 電源OFF→ONのみ: **UNVERIFIED_AFTER_RESEARCH**。
- ATスルー回数の設定変更時処理: **UNVERIFIED_AFTER_RESEARCH**。

### ceilingAfterReset

- 通常最大天井は999G。
- 設定変更専用の固定短縮天井は **NONE_CONFIRMED_AFTER_RESEARCH**。
- ただし設定変更時は天国選択率が約24%あり、天国なら99G以内解除となる。これは固定天井短縮ではなくモード再抽選による朝一優遇として分離する。

### modeAfterReset

- **RESELECT_CONFIRMED**。
- 設定変更時モード振り分け（通常A / 通常B / 天国準備 / 天国）:
  - 設定1: **43.90 / 28.00 / 4.50 / 23.60%**
  - 設定2: **40.60 / 22.00 / 12.50 / 24.90%**
  - 設定3: **48.00 / 25.00 / 4.00 / 23.00%**
  - 設定4: **38.00 / 23.00 / 15.00 / 24.00%**
  - 設定5: **45.30 / 25.00 / 5.00 / 24.70%**
  - 設定6: **45.60 / 20.00 / 10.50 / 23.90%**
- K-Naviの自社調べ値を主値とし、HAZUSEおよび当時解析記事でも設定変更専用テーブルの存在と主要値を照合。
- confidence: ANALYSIS_HIGH_MULTI_SOURCE

### stateAfterReset

- 低確 / 高確 / 超高確等の内部状態について、設定変更時の初期状態振り分けを本機固有の直接表として今回固定できず **UNVERIFIED_AFTER_RESEARCH**。

### advantageousSectionReset

- **NOT_APPLICABLE_5TH_GEN_PRE_5_9**。

### resetBenefits

- 設定変更後は全設定で天国振り分けが **23.0〜24.9%**あり、天国選択時は99G以内解除確定。
- 天国準備も **4.0〜15.0%**で選択され、モード天井400G。
- 設定変更後に固定短縮天井がある、という意味ではない。

### resetPenalties

- 設定変更固有の主要な不利要素は **NONE_CONFIRMED_AFTER_RESEARCH**。

### resetDetection

- ガックン、初期表示、役物挙動など、本機固有で高信頼な設定変更判別契約は検索語・資料系統を変えた再探索でも **NONE_CONFIRMED_AFTER_RESEARCH**。
- 99G以内当選は設定変更後天国と整合するが通常運用でも天国は存在するため、単独で変更確定とは扱わない。

### numericResetData

- 設定変更時天国: **23.60 / 24.90 / 23.00 / 24.00 / 24.70 / 23.90%**（設定1〜6）。
- 設定変更時天国準備: **4.50 / 12.50 / 4.00 / 15.00 / 5.00 / 10.50%**。
- 設定変更時通常A: **43.90 / 40.60 / 48.00 / 38.00 / 45.30 / 45.60%**。
- 設定変更時通常B: **28.00 / 22.00 / 25.00 / 23.00 / 25.00 / 20.00%**。
- 固定短縮天井: **NONE_CONFIRMED_AFTER_RESEARCH**。

### publicMorningNumbers

- 朝一比較可能値として、設定変更時の4モード振り分け全設定分を保存。
- 特に天国選択率は全設定 **約24%**で、天国なら99G以内解除確定。

## resetBehavior 再探索メモ

- `パチスロ リング 呪いの7日間 / リング 呪いの7日間 / パチスロ リング ノロイノナノカカンFSB / 4S0053 / 藤商事` と `設定変更 / リセット / 朝一 / 据え置き / 電源OFF ON / 天井 / 999G / 99G / モード / 天国準備 / 状態 / 高確 / ガックン / 変更判別` を組み合わせて再探索。
- 藤商事公式、K-Navi、パチマガスロマガ旧攻略、HAZUSE、当時天井・モード解析、後年解析まとめ、当時アプリ発表資料を横断。
- 2020年以降のパチンコ版・後継パチスロ「リング 運命の秒刻」等を除外。
- 据え置き/純電断/リセット時内部状態は直接契約が取れないため推測で補完していない。

## sources

取得日: **2026-09-07**

1. 藤商事公式 — パチスロ リング 呪いの7日間
   - https://www.fujimarukun.co.jp/products/s_ring/
   - 設定別貞子BONUS、呪縛RUSH、出玉率、純増約3.0枚/G、最大80%ループ
   - reliability: OFFICIAL
2. K-Navi — パチスロ リング 呪いの7日間
   - https://p-kn.com/slot/2090/
   - 導入日、設定別初当たり、基本仕様
   - reliability: ANALYSIS_HIGH
3. K-Navi — モード移行率
   - https://p-kn.com/slot/2090/50931/
   - 設定変更時4モード振り分け全設定
   - reliability: ANALYSIS_HIGH
4. HAZUSE — パチスロ リング 呪いの7日間
   - https://hazuse.com/machine/pachislot/4S0053/
   - 型式、検定番号、導入日、モード別天井、設定変更時モード抽選
   - reliability: ANALYSIS_HIGH
5. パチビー — パチスロ リング 呪いの7日間
   - https://www.pachibee.jp/machines/index/214060006
   - 導入日、AT/CZ仕様、40G、純増約3.0枚/G
   - reliability: INDUSTRY
6. パチマガスロマガ — パチスロ リング 呪いの7日間
   - https://cs62.cs-plaza.com/g/pachi/pla/s_conq/fuji_slot/16/a.php
   - 貞子BONUS平均約120枚、純増、基本仕様
   - reliability: ANALYSIS_HIGH_PERIOD_SOURCE
7. 真パチスロ備忘録 — リング 呪いの7日間 天井/設定変更時挙動
   - https://sin-surobi.com/ring/5327/
   - モード別天井、設定変更時G数リセット
   - reliability: ANALYSIS_SINGLE_PERIOD_SOURCE
8. クランキーセブン — リング 呪いの7日間解析
   - https://crankyseven.com/ring-pc.htm
   - 設定変更後の天井Gクリア、天井仕様、初当たり
   - reliability: ANALYSIS_SINGLE
9. ちょんぼりすた — 初代リング解析まとめ
   - https://chonborista.com/slot/fuji-slot/3896/
   - 999G天井、995G以降の次回天国、モード特性、設定変更専用テーブル存在
   - reliability: ANALYSIS_SINGLE
10. フューチャースコープ / ATPress — 実機アプリ発表
   - https://www.atpress.ne.jp/news/49700
   - 2014-07-22ホール導入、純増約3.0枚、最大80%ループ
   - reliability: INDUSTRY

## missingFields

- baseGamesPer50: UNVERIFIED_AFTER_RESEARCH
- carryOverBehavior: UNVERIFIED_AFTER_RESEARCH
- powerCycleBehavior: UNVERIFIED_AFTER_RESEARCH
- settingChange stateAfterReset: UNVERIFIED_AFTER_RESEARCH
- ATスルー回数の設定変更/据え置き/純電断処理: UNVERIFIED_AFTER_RESEARCH

## conflicts

- NONE_CONFIRMED_FOR_CORE_VALUES

## QA

- coreStatus: COMPLETE_CORE（baseGamesPer50は十分再探索後のUNVERIFIEDとして明示）
- resetBehaviorQA: PARTIAL
- identity: COMPLETE
- sourceRetrievalDate: 2026-09-07
