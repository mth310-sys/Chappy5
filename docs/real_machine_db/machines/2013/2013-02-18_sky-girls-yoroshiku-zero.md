# スカイガールズ～よろしく！ゼロ～

machineName: スカイガールズ～よろしく！ゼロ～
manufacturer: TAKASAGO（高砂電器産業 / 現コナミアミューズメント系アーカイブ）
releaseDate: 2013-02-18
releaseDatePrecision: exact_day
releaseDateNotes: K-Navi全国一斉導入開始日およびHAZUSE導入開始日が2013-02-18で一致。コナミアミューズメント公式アーカイブは2013年2月稼働開始。
generation: 5号機
systemType: A+ART / ボーナス+ゲーム数上乗せ・セットストック・継続抽選ART
recordStatus: COMPLETE_CORE_RESET_RESEARCHED

## identity

- 型式名: **スカイガールズFU**。
- 検定番号: **2S1107**（HAZUSE）。
- メーカー表記: 当時TAKASAGO。現コナミアミューズメント公式アーカイブにも2013年機として掲載。
- confidence: OFFICIAL_PLUS_DATABASE_HIGH

## payoutRateBySetting

| 設定 | 機械割 |
|---|---:|
| 1 | 96.8% |
| 2 | 97.5% |
| 3 | 99.4% |
| 4 | 104.1% |
| 5 | 107.0% |
| 6 | 118.7% |

- HAZUSE、pacnk、後年整理資料で一致。
- confidence: ANALYSIS_HIGH_MULTI_SOURCE

## initialHitBySetting

### ART「ソニックダイブゾーン」初当たり

| 設定 | ART初当たり |
|---|---:|
| 1 | 1/538.3 |
| 2 | 1/488.0 |
| 3 | 1/509.1 |
| 4 | 1/389.2 |
| 5 | 1/414.1 |
| 6 | 1/297.1 |

- HAZUSEとpacnkで一致（pacnkは小数を丸めて掲載）。
- 奇数/偶数で非単調なため補間しない。

### ボーナス

| 設定 | BIG合算 | REG | ボーナス合算 |
|---|---:|---:|---:|
| 1 | 1/394.8 | 1/840.2 | 1/268.6 |
| 2 | 1/383.3 | 1/675.6 | 1/244.5 |
| 3 | 1/368.2 | 1/728.2 | 1/244.5 |
| 4 | 1/378.8 | 1/580.0 | 1/229.1 |
| 5 | 1/368.2 | 1/606.8 | 1/229.1 |
| 6 | 1/327.7 | 1/512.0 | 1/199.8 |

- K-NaviのBIG値、HAZUSE/Pacnkの構成値で照合。
- SKY BIGは全設定共通 **1/16384**。HAZUSEでは音羽BIG/赤7BIGを別掲するため、上表BIGは比較用の合算系列。
- confidence: ANALYSIS_HIGH_MULTI_SOURCE

## baseGamesPer50

- **約31G / 50枚**。
- HAZUSEが「50枚あたりのゲーム数 約31G」と明記。
- confidence: ANALYSIS_HIGH_SINGLE_DIRECT

## netIncrease

- ART「ソニックダイブゾーン」: **約+1.5枚/G**。
- 1セット **30G+α**。
- コナミアミューズメント公式は5号機ART機であることを確認、K-Navi・P-WORLD・HAZUSE・パチマガスロマガ系で30G+α / 約1.5枚/Gが一致。
- confidence: OFFICIAL_CLASSIFICATION_PLUS_ANALYSIS_HIGH_MULTI_SOURCE

## basicPayout

- SKY BIG BONUS: **210枚 + ART確定**。
- BIG BONUS: **210枚**。
- REGULAR BONUS: **最大56枚**。
- ART初当たり時はLOCK（デルタロック or クアドラロック）を1個以上ストックして開始。
- P-WORLD/HAZUSEで一致。

## modeSpecificMinimumData

### 通常時内部状態

- 低確率A/B、高確率A/B、超高確率の5状態が存在。
- 全状態移行テーブルは実機完全再現用のため本DB対象外。設定変更時の扱いだけresetBehaviorへ記録。

### 規定ゲーム数ART抽選

- ボーナス後: 93G 5.0% / 393G 5.0% / 693G 5.0% / 993G 15.0% / 振り分けなし70.0%。
- 設定変更後の専用振り分けはresetBehaviorへ記録。

### 天井

- **ボーナス間1500G**で天井到達。
- 恩恵: 次回ボーナスまで継続する無限ART **V-1モード** + ART中ライジングモード **SONICモード** + **LOCKストック**。
- HAZUSE、必勝本、CrankySeven、当時天井攻略記事で整合。
- confidence: ANALYSIS_HIGH_MULTI_SOURCE

## resetBehavior

schemaVersion: v0.7
resetQaStatus: RESEARCHED_MULTI_SOURCE__SETTING_CHANGE_COUNTER_MODE_REGULATION_RESET__POWER_CYCLE_ALL_CARRY_OVER_CONFIRMED__PUBLIC_RESET_GAMES_CONFIRMED
resetQaLastUpdated: 2026-09-06

### settingChangeBehavior

- **天井までのゲーム数: RESET/CLEAR_CONFIRMED**。
- **モード: 再抽選**。
- **規定ゲーム数: リセット後専用振り分けで再セット**。
- **RT状態: 設定変更後状態へ**。
- 液晶ステージ: 横須賀・追浜ステージ中は引き継ぎ、それ以外はリセット。
- 必勝本の「天井&設定変更」が上記を直接明記。CrankySevenも天井Gクリアを明記。
- confidence: ANALYSIS_HIGH_DIRECT_PLUS_SECONDARY_CONFIRMATION

### carryOverBehavior

- 純据え置き時は、電源OFF→ONのみの契約と合わせて **天井G・モード・規定ゲーム数・RT状態等を引き継ぐ** と扱う。
- 根拠: 必勝本が電源OFF→ON時を「全て引き継ぐ」と直接記載。設定変更がない据え置き運用の朝一契約として採用。
- confidence: ANALYSIS_HIGH_DIRECT

### powerCycleBehavior

- **電源OFF→ONのみ: 全て引き継ぐ**。
- 天井までのゲーム数、モード、規定ゲーム数、RT状態等を設定変更せず保持。
- confidence: ANALYSIS_HIGH_DIRECT

### gameCounterReset

- 設定変更時: **CLEAR_CONFIRMED**。
- 据え置き時: **CARRY_OVER_CONFIRMED**。
- 電源OFF→ONのみ: **CARRY_OVER_CONFIRMED**。

### ceilingAfterReset

- ボーナス間1500G天井の進捗は設定変更で消去され、**1500Gを新規カウント**。
- 設定変更専用の天井短縮は確認されない。
- ただし設定変更後には別系統の**早い規定ゲーム数ART直撃抽選**が存在するため、朝一恩恵として分離して扱う。

### modeAfterReset

- **設定変更時: モード再抽選CONFIRMED**。
- 具体的な通常内部モード振り分け率は、今回の必須粒度で直接確定できず **UNVERIFIED_AFTER_RESEARCH**。
- 電源OFF→ONのみ: **引継ぎCONFIRMED**。

### stateAfterReset

- RT状態: **設定変更後状態へ移行**。
- 通常時の低確A/B・高確A/B・超高確の設定変更時個別振り分け率は、機種名/型式/メーカーと「設定変更・朝一・状態・高確・低確・再抽選」を組み替え、K-Navi/HAZUSE/必勝本/CrankySeven/旧攻略系を横断したが比較可能な直接数値を確定できず **UNVERIFIED_AFTER_RESEARCH**。
- 電源OFF→ONのみ: **引継ぎCONFIRMED**。

### advantageousSectionReset

- **NOT_APPLICABLE_5TH_GEN**。

### resetBenefits

- 設定変更後は通常のボーナス後とは異なる規定ゲーム数ART抽選を実施。
- 設定変更後: **23G 2.5% / 93G 10.0% / 193G 7.5% / 振り分けなし80.0%**。
- したがって設定変更だけで合計 **20.0%** が193Gまでの規定ゲーム数ART直撃を持つ。
- 必勝本とCrankySevenが一致。HAZUSEも同表を掲載するが193G欄が「75.0%」となっており合計が100%を超えるため表示/転記誤りと判断しCONFLICT注記。HAZUSEの他3項目（2.5/10/80）は一致。

### resetPenalties

- 設定変更で前日の**ボーナス間1500G天井進捗を消失**。
- 前日から保持していたモード・規定ゲーム数も再抽選/リセットされる。

### resetDetection

- BIG中の告知タイプ選択カーソルを利用した変更判別情報あり。
- **設定変更時は次回BIGで「音羽BIG」にカーソルが戻る**。
- 設定変更なしでは前日の最後に選択したBIGのカーソル位置を引き継ぐ。
- 前日最後に音羽BIG以外を選択していたことを把握できる場合、翌日最初のBIGのカーソルで変更/据え置きを高精度に推測可能。前日最後が音羽BIGなら判別不能。
- CrankySevenの直接記述を採用。ガックン固有挙動は、検索語を変えた再探索後も **UNVERIFIED_AFTER_RESEARCH**。

### publicMorningNumbers

- settingChangeGameCounter: **CLEAR_CONFIRMED**。
- normalCeilingAfterReset: **1500Gボーナス間**。
- resetSpecificShortCeiling: **NONE_CONFIRMED**（天井短縮ではなく別系統の規定G ART抽選あり）。
- settingChangeRegulationGameDistribution:
  - 23G: **2.5%**
  - 93G: **10.0%**
  - 193G: **7.5%**
  - none: **80.0%**
  - within193GTotal: **20.0%**
- settingChangeModeBehavior: **RESELECT_CONFIRMED**。
- powerCycleAllBehavior: **CARRY_OVER_CONFIRMED**。

### numericResetData

- settingChangeGameCounter: CLEAR_CONFIRMED
- ceilingAfterReset: 1500G_BONUS_INTERVAL
- settingChangeRegulationGame23G: 2.5%
- settingChangeRegulationGame93G: 10.0%
- settingChangeRegulationGame193G: 7.5%
- settingChangeRegulationGameNone: 80.0%
- settingChangeRegulationGameWithin193G: 20.0%
- settingChangeMode: RESELECT_CONFIRMED
- powerCycle: ALL_CARRY_OVER_CONFIRMED
- advantageousSection: NOT_APPLICABLE_5TH_GEN

resetQaReliability: ANALYSIS_HIGH_DIRECT_FOR_SETTING_CHANGE_AND_POWER_CYCLE__MULTI_SOURCE_FOR_COUNTER_AND_PUBLIC_REGULATION_GAMES__SINGLE_SECONDARY_FOR_BIG_CURSOR_DETECTION

## missingFields

- 設定変更時の低確A/B・高確A/B・超高確の個別振り分け率。
- 設定変更時の通常内部モード具体振り分け率。
- ガックン固有の変更判別挙動。

## conflicts

- **設定変更後193G規定ゲーム数振り分け**: 必勝本とCrankySevenは **7.5%**。HAZUSE本文は **75.0%** と表示するが、同じ表の23G 2.5% + 93G 10.0% + none 80% と合わせると167.5%となり成立しない。2系統一致かつ総和100%となる **7.5%** を主値採用し、HAZUSE表示を `CONFLICT_APPARENT_TRANSCRIPTION_OR_DISPLAY_ERROR` として保持。
- 重大な性能コア競合は今回確認なし。
- シリーズ混同注意: 2015年「スカイガールズ～ゼロ、ふたたび～」、2020年「スカイガールズ～ゼロノツバサ～」のリセット短縮天井・有利区間仕様は本機へ転記しない。

## sources

取得日: **2026-09-06**

1. コナミアミューズメント公式 機種アーカイブ — スカイガールズ ～よろしく!ゼロ～
   - https://www.konami.com/amusement/psm/archive/ps/2013/skygirls/index.html
   - 2013年2月稼働開始、5号機ART。
   - reliability: OFFICIAL
2. K-Navi — スカイガールズ～よろしく！ゼロ～
   - https://p-kn.com/slot/1783/
   - 2013-02-18導入、BIG確率、ART 30G+α / 約1.5枚/G、攻略項目。
   - reliability: ANALYSIS_HIGH_DATABASE
3. K-Navi — 2013年2月新台導入カレンダー
   - https://p-kn.com/calendar/201302/
   - 02-04の次は02-18で、02-18同日群は本機・メタルスラッグ3・ヴァン・ヘルシング ハンティングラッシュ。全国一斉導入開始日ベース。
   - reliability: DATABASE_HIGH
4. HAZUSE — スカイガールズ～よろしく！ゼロ～
   - https://hazuse.com/machine/pachislot/2S1107/
   - 型式スカイガールズFU、検定2S1107、導入2013-02-18、機械割、ボーナス/ART初当たり、50枚約31G、ART、天井。
   - reliability: ANALYSIS_HIGH
5. HAZUSE — ART抽選（規定ゲーム数）
   - https://hazuse.com/machine/pachislot/2S1107/genre/209/
   - 設定変更後23G/93G/193G/なしの表。ただし193Gが75.0%表示のためCONFLICT注記。
   - reliability: ANALYSIS_HIGH_WITH_DISPLAY_CONFLICT
6. P-WORLD — スカイガールズ～よろしく!ゼロ～
   - https://www.p-world.co.jp/machine/database/6963
   - BIG 210枚、REG最大56枚、ART 30G+α / 約1.5枚/G、天井搭載。
   - reliability: DATABASE_HIGH
7. パチ＆スロ必勝本 — 天井&設定変更
   - https://p.hisshobon.jp/machine/2150/1/38561
   - 天井1500G、設定変更で天井G/規定Gリセット・モード再抽選・RT状態変更、電源OFF→ONは全て引継ぎ、液晶ステージ契約。
   - reliability: ANALYSIS_HIGH_DIRECT
8. パチ＆スロ必勝本 — 規定ゲーム数振り分け
   - https://p.hisshobon.jp/machine/2150/1/38600
   - 設定変更後23G 2.5% / 93G 10.0% / 193G 7.5% / なし80.0%。
   - reliability: ANALYSIS_HIGH_DIRECT
9. CrankySeven — スカイガールズ～よろしく！ゼロ～
   - https://crankyseven.com/skygirls-pc.htm
   - 設定変更後規定G分布、天井Gクリア、BIGカーソルによる変更判別。
   - reliability: ANALYSIS_SECONDARY_LONG_RUNNING
10. pacnk — スカイガールズ-よろしく!ゼロ-
   - https://pacnk.com/slot/2013/skygirls/top.php
   - 設定別BIG/REG/ART初当たり/機械割を照合。
   - reliability: ANALYSIS_SECONDARY
11. パチマガスロマガ — スカイガールズ～よろしく!ゼロ～
   - https://cs62.cs-plaza.com/g/pachi/pla/s_conq/takasago_slot/05/l.php
   - ART 1セット30G / +1.5枚/G、規定ゲーム数によるART構造。
   - reliability: ANALYSIS_HIGH
12. 天井ハイエナ生活 — 2013年当時記事
   - https://macerate.seesaa.net/article/344017004.html
   - ボーナス間1500G天井の当時認識を照合。
   - reliability: PERIOD_SECONDARY
