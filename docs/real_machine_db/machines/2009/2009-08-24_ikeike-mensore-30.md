# イケイケめんそーれ-30

machineName: イケイケめんそーれ-30
manufacturer: エマ
formalModelName: メンソーレ3H-30
inspectionNumber: UNVERIFIED_AFTER_RESEARCH
releaseDate: 2009-08-24（K-Naviホール導入開始。グリーンべると2009-07-30記事は8月下旬納品開始。5号機クロニクルは2009-09、後年筐体回顧は2009-06表記のため時期表現差をCONFLICTとして保持）
generation: 5号機
systemType: ノーマル / 完全告知 / 30Φ / BB+RB
coreStatus: COMPLETE_CORE_WITH_PAYOUT_AND_RELEASE_DATE_CONFLICT_INSPECTION_UNVERIFIED

## payoutRateBySetting

資料間で機械割系列が一致しないため平均せず `CONFLICT_PAYOUT_RATE` として保持。

### 当時パチマガスロマガ — PAYOUT（シミュレート値）

| 設定 | 機械割 |
|---:|---:|
| 1 | 96.54% |
| 2 | 98.68% |
| 3 | 100.93% |
| 4 | 103.06% |
| 5 | 105.26% |
| 6 | 107.42% |

### 5号機クロニクル

| 設定 | 機械割 |
|---:|---:|
| 1 | 97.1% |
| 2 | 99.1% |
| 3 | 101.2% |
| 4 | 103.2% |
| 5 | 105.2% |
| 6 | 107.3% |

### pacnk整理値

| 設定 | 機械割 |
|---:|---:|
| 1 | 96.2% |
| 2 | 98.5% |
| 3 | 100.3% |
| 4 | 103.3% |
| 5 | 106.1% |
| 6 | 109.0% |

- パチマガスロマガと5号機クロニクルは設定6で約0.1pt差だが、設定1〜4にも差がある。
- pacnk系列は設定5・6で差が大きく、算出条件を直接解消できなかった。
- 定義不明のため単一値へ統合しない。

confidence: CONFLICT_MULTI_SOURCE

## initialHitBySetting

当時パチマガスロマガの精密値。K-Naviの丸め表示および2009年当時グリーンべると記事の設定1/6端点と整合。

| 設定 | BIG | REG | ボーナス合算 |
|---:|---:|---:|---:|
| 1 | 1/318.14 | 1/537.18 | 1/199.80 |
| 2 | 1/306.24 | 1/496.48 | 1/189.41 |
| 3 | 1/295.21 | 1/461.52 | 1/180.04 |
| 4 | 1/284.94 | 1/431.16 | 1/171.56 |
| 5 | 1/275.36 | 1/404.54 | 1/163.84 |
| 6 | 1/266.41 | 1/381.02 | 1/156.78 |

confidence: OLD_ANALYSIS_HIGH_MULTI_SOURCE

## baseGamesPer50

当時パチマガスロマガ「1000円あたりのゲーム数」。本DBでは50枚貸し相当のベースとして保存。

| 設定 | 50枚あたりゲーム数 |
|---:|---:|
| 1 | 38.02G |
| 2 | 38.21G |
| 3 | 38.46G |
| 4 | 38.67G |
| 5 | 38.93G |
| 6 | 39.14G |

confidence: OLD_ANALYSIS_HIGH_SINGLE_DIRECT_TABLE

## netIncrease

NOT_APPLICABLE

- RT/ART/AT非搭載の純正ノーマルタイプ。

## basicPayout

- BIG: 約312枚（345枚超払い出しで終了）
- REG: 約130枚（135枚超払い出しで終了）

2009年当時グリーンべるととK-Naviで整合。

confidence: INDUSTRY_AND_OLD_ANALYSIS_HIGH

## modeSpecificMinimumData

- RT非搭載、ART/AT/CZ非搭載の純正ノーマルタイプ。
- ハイビスカス/ドットによる完全告知。
- 当時パチマガスロマガは「攻め時・ヤメ時→特にナシ」と整理。
- ゲーム数天井、朝一専用モード、ゲーム数管理状態は本機固有資料で確認できず、純正ノーマル構造とも整合するため比較用の天井/モード数値は `NOT_APPLICABLE_NO_PUBLISHED_CEILING_OR_MODE_SYSTEM` とする。

## resetBehavior — v0.7

settingChangeBehavior: UNVERIFIED_AFTER_RESEARCH_FOR_HARDWARE_STARTUP_BEHAVIOR。設定変更操作時のリール初期位置、ランプ、ドット表示、その他の本機固有起動挙動を直接説明する資料を確定できず。天井・RT/ART・ゲーム数モード非搭載のため、これらをリセットする朝一恩恵は該当しない。

carryOverBehavior: NOT_APPLICABLE_FOR_CEILING_MODE_STATE / HARDWARE_DETAILS_UNVERIFIED。据え置き時に引き継ぐ天井ゲーム数、ART/RTストック、ゲーム数モード等は確認されない。ボーナス成立中など通常営業上の特殊ケースを除く電源跨ぎ内部状態の実機完全再現は本DB対象外。表示/リール位置等の本機固有据え置き判別要素は未確認。

powerCycleBehavior: UNVERIFIED_AFTER_RESEARCH。設定変更を伴わない単純電源OFF→ON時のリール初期位置、ハイビスカス/ドット表示等を本機固有の直接資料で確定できず。

gameCounterReset: NOT_APPLICABLE_NO_CEILING_OR_GAME_COUNT_SYSTEM_CONFIRMED。天井・周期CZ・ゲーム数管理モードを確認できないため、朝一天井カウンタのreset/carry-over比較対象なし。

ceilingAfterReset: NOT_APPLICABLE_NO_CEILING_CONFIRMED。設定変更時の短縮天井/再抽選天井の公開値なし。

modeAfterReset: NOT_APPLICABLE_NO_GAME_COUNT_MODE_SYSTEM_CONFIRMED。朝一専用モード、通常/天国等のゲーム数管理モードを確認できず。

stateAfterReset: NOT_APPLICABLE_FOR_RT_ART_CZ_STATE / OTHER_INTERNAL_START_STATE_UNVERIFIED。RT/ART/CZ状態は非搭載。その他の内部状態初期化を示す本機固有資料は確認できず、推測しない。

advantageousSectionReset: NOT_APPLICABLE（5号機・有利区間制度前）

resetBenefits: NONE_CONFIRMED_AFTER_RESEARCH。設定変更時だけ適用される短縮天井、モード優遇、初当たり/CZ優遇などの公開朝一恩恵は確認できず。

resetPenalties: NONE_CONFIRMED_AFTER_RESEARCH。設定変更時だけ適用される主要な不利要素の公開情報は確認できず。

resetDetection: UNVERIFIED_AFTER_RESEARCH。本機固有のガックン、リール初期出目、ランプ/ドット表示等による設定変更・据え置き判別法を直接確認できず。ボーナス/小役確率による通常の設定推測はリセット判別と分離する。

numericResetData:
  publishedMorningModeDistribution: NONE_CONFIRMED
  publishedResetHitRate: NONE_CONFIRMED
  shortenedCeiling: NOT_APPLICABLE_NO_CEILING_CONFIRMED
  resetBenefitRate: NONE_CONFIRMED
  resetSpecificCZInitialHit: NOT_APPLICABLE_NO_CZ

resetBehaviorQA: STRUCTURAL_NA_CONFIRMED_HARDWARE_POWER_RESET_DETAILS_UNVERIFIED_AFTER_RESEARCH

resetBehaviorResearchNote:
- `イケイケめんそーれ-30 / イケイケめんそーれ30 / メンソーレ3H-30 / エマ` と `設定変更 / リセット / 朝一 / 据え置き / 電源OFF ON / 電源 / 天井 / モード / 状態 / RT / ガックン / リール / 初期出目 / 設定変更判別` を組み替えて再探索。
- 当時業界記事、K-Navi、当時パチマガスロマガ、5号機クロニクル、後年データベース/設定判別資料、回顧/筐体資料を横断。
- 4号機「めんそーれ30」には設定変更時モード振り分け等の解析があるが、本機は5号機純正ノーマルの別機種であり混入させない。
- 本機固有の設定変更/電断ハード挙動は確証なしのため一般的なノーマル機挙動で補完しない。

## sources

取得日: 2026-09-03

1. グリーンべると / P-WORLD業界ニュース「エマ、沖スロ最新作は『イケイケめんそーれ30』」2009-07-30 — https://news.p-world.co.jp/articles/3552/greenbelt — 型式名メンソーレ3H-30、8月下旬納品、純正ノーマル/RT非搭載、BB/RB/合算端点、BIG約312枚/REG約130枚 — reliability: INDUSTRY
2. K-Navi「イケイケめんそーれ-30」 — https://p-kn.com/slot/1032/ — 2009-08-24ホール導入、設定別BIG/REG/合算、払い出し終了条件 — reliability: OLD_ANALYSIS_HIGH
3. パチマガスロマガ「ボーナス抽選確率/PAYOUT」 — https://cs62.cs-plaza.com/g/pachi/pla/s_conq/ema_slot/35/h.php — 精密BIG/REG/合算、PAYOUTシミュレート96.54〜107.42% — reliability: OLD_ANALYSIS_HIGH
4. パチマガスロマガ「小役確率・1000円あたりゲーム数」 — https://cs62.cs-plaza.com/g/pachi/pla/s_conq/ema_slot/35/c.php — 設定別38.02〜39.14G/1000円 — reliability: OLD_ANALYSIS_HIGH
5. パチマガスロマガ「機種トップ」 — https://cs62.cs-plaza.com/g/pachi/pla/s_conq/ema_slot/35/ema_slot_35.php — 攻め時・ヤメ時「特にナシ」、解析項目構成 — reliability: OLD_ANALYSIS_HIGH
6. 5号機クロニクル「エマ5号機全機種一覧」 — https://5goki.com/ema — 2009/9表記、機械割97.1〜107.3% — reliability: RETROSPECTIVE_DATABASE
7. pacnk「イケイケめんそーれ-30 設定判別ツール」 — https://pacnk.com/slot/tools/sh_ikeikemensore.html — 精密BIG/REG、PAYOUT96.2〜109.0%、ノーマルタイプ/設定示唆なし整理 — reliability: RETROSPECTIVE_DATABASE
8. pachinko’s blog「エマ『イケイケめんそーれ-30』の筺体＆情報」 — https://pachinko.hatenablog.jp/entry/2009/06/ikeike-menthore — 2009.06表記、ノーマルタイプ、告知構造 — reliability: CONTEMPORARY_OR_RETROSPECTIVE_SECONDARY_DATE_CONFLICT

## missingFields

- inspectionNumber: UNVERIFIED_AFTER_RESEARCH
- settingChange hardware/startup behavior: UNVERIFIED_AFTER_RESEARCH
- powerCycleBehavior: UNVERIFIED_AFTER_RESEARCH
- reset-specific gakkun / initial reel position / display detection: UNVERIFIED_AFTER_RESEARCH

## conflicts

- payoutRateBySetting: 当時パチマガスロマガ96.54/98.68/100.93/103.06/105.26/107.42% vs 5号機クロニクル97.1/99.1/101.2/103.2/105.2/107.3% vs pacnk96.2/98.5/100.3/103.3/106.1/109.0%。算出条件を解消できず平均せず保持。
- releaseDate / releaseMonth: K-Naviは2009-08-24ホール導入、2009-07-30業界記事は8月下旬納品開始、5号機クロニクルは2009/9、筐体回顧は2009/6。時系列キューは具体的なホール導入日2009-08-24を採用し、月表記差はCONFLICTとして保持。
