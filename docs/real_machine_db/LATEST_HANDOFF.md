# 実機DB 最新リレー引継ぎ

更新日: 2026-09-02

## 現在地点

- 最新mainの `README.md`、実機DBミッションv0.7、`INDEX.md`、既存レコード、直前進捗を再取得して継続。
- `INDEX.md` は旧19件地点のため、README規定どおり本 `LATEST_HANDOFF.md` を進捗正本とする。
- 直前HANDOFFは364件地点 `もっと楽シーサー30Φ沖縄バージョン`。
- **今回 365「タイムリミット」（JPS）を追加。既存365件の再追加禁止。**

## 365. タイムリミット

record:
- `docs/real_machine_db/machines/2009-05-07_time-limit.md`

要点:
- manufacturer: JPS
- formalModelName: `タイムリミットX`
- inspectionNumber: `8S1329`
- releaseDate: **2009-05-07**。パチ＆スロ必勝本が「5/7導入開始予定」、当時のパチスロ業界初まとめもタイムリミットXを2009/5/7発売確定としており、P-WORLD/5号機クロニクルの2009年5月表記とも整合。
- generation: 5号機
- systemType: **AT + ART / TYPE-F / JACボーナス保持型ART**
- settings: 1 / 2 / 3 / 4 / 5 / 6
- 機械割: **97.7 / 99.2 / 101.5 / 104.0 / 107.2 / 112.0%**。P-WORLD、必勝本、当時Wiki、5号機クロニクルで一致。
- 主JAC確率: **1/112.2 / 1/111.5 / 1/110.7 / 1/110.0 / 1/109.2 / 1/108.5**。P-WORLD/必勝本一致。
- 当時5号機まとめwikiにはREG **1/129.0→1/123.9** の別系列があり、定義差または解析更新差を解消できないため `CONFLICT` として双方保持。
- JAC約36枚。
- ART「バトルモード」純増約**+1.5枚/G**、ライフポイント消滅または最大約**857G**まで継続。
- AT「フォルトゥナタイム」は**20G+30%ループ**、EXモードは次回ボーナスまで継続。
- 通常時は通常 / 高確 / 高確+ATの3状態。
- 50枚ベースは機種名/型式タイムリミットX/検定8S1329/JPSと「50枚/1000円/千円/ベース/コイン持ち/1k」を組み替え、P-WORLD、必勝本、パチマガスロマガ、当時Wiki、回顧資料を横断したが直接値を確定できず `UNVERIFIED_AFTER_RESEARCH`。

### v0.7 resetBehavior

- settingChangeBehavior: `UNVERIFIED_AFTER_RESEARCH`。パチマガスロマガに設定変更時専用攻略項目の存在までは確認したが本文条件を取得できず、通常/高確/高確+ATのどこから開始するかは推測しない。
- carryOverBehavior: `UNVERIFIED_AFTER_RESEARCH`。据え置き時の通常/高確/AT、EXモード、ART残状態の翌日引継ぎを直接確認できず。
- powerCycleBehavior: `UNVERIFIED_AFTER_RESEARCH`。単純電源OFF→ON時の内部状態・AT/ART残状態を直接確認できず。
- gameCounterReset: `NOT_APPLICABLE_NO_GAME_COUNT_CEILING_CONFIRMED_IN_AVAILABLE_SYSTEM_DESCRIPTIONS`。
- ceilingAfterReset: `NOT_APPLICABLE_NO_GAME_COUNT_CEILING_CONFIRMED`。
- modeAfterReset / stateAfterReset: `UNVERIFIED_AFTER_RESEARCH`。通常/高確/高確+ATおよび高確ショート/ミドル/ロング等の設定変更時初期状態を直接確認できず。
- advantageousSectionReset: `NOT_APPLICABLE`（5号機・有利区間制度前）。
- resetBenefits / resetPenalties: `NONE_CONFIRMED_AFTER_RESEARCH`。
- resetDetection: ガックン、初期出目、液晶、ランプ等を機種名・型式・メーカー・設定変更/リセット/朝一/据え置き等で多段検索したが直接根拠を確認できず `UNVERIFIED_AFTER_RESEARCH`。
- numericResetData: normalCeiling=`NOT_APPLICABLE_NO_GAME_COUNT_CEILING_CONFIRMED`、resetSpecificCeiling=`NOT_APPLICABLE`、resetModeDistribution/resetStateDistribution=`UNVERIFIED_AFTER_RESEARCH`、morningHitRate/resetBenefitRate=`NONE_CONFIRMED_AFTER_RESEARCH`。

主要出典（取得日 2026-09-02）:
- パチ＆スロ必勝本 / 基本スペック[タイムリミット] — ANALYSIS_HIGH
  - https://p.hisshobon.jp/machine/1353/1/20669
- P-WORLD / タイムリミット — ANALYSIS_HIGH_DATABASE
  - https://www.p-world.co.jp/machine/database/5515
- グリーンべると / ライフポイント制ARTを搭載、『タイムリミット』 — INDUSTRY
  - https://web-greenbelt.jp/00003037/
- パチ＆スロ必勝本 / 通常時の状態[タイムリミット] — ANALYSIS_HIGH
  - https://p.hisshobon.jp/machine/1353/1/20673
- K-Navi / フォルトゥナタイム&EXモード(AT) — OLD_ANALYSIS
  - https://p-kn.com/slot/953/10132/
- パチスロ5号機まとめwiki / タイムリミット — OLD_CONTEMPORARY_DATABASE
  - https://w.atwiki.jp/5gouki/pages/165.html
- パチマガスロマガ / タイムリミット — OLD_ANALYSIS_INDEX
  - https://cs62.cs-plaza.com/g/pachi/pla/s_conq/jps_slot/18/jps_slot_18.php
- パチスロ業界初まとめ ～更新情報7 — OLD_CONTEMPORARY_DATABASE
  - https://slothistory.com/kousin_kako07.html
- 5号機クロニクル / JPS 5号機全機種一覧 — RETROSPECTIVE_SECONDARY
  - https://5goki.com/jps

commit:
- 365 タイムリミット: `aca238055e53007a3d374226ec052b6705b4d21a`

## 2009年5月初頭 境界監査

- 2009-05-07群として `もっと楽シーサー25Φ / 30Φ全国 / 30Φ沖縄 / タイムリミット` まで収録。
- 次は**2009-05-07同日群〜5月10日**を具体日付き資料で監査する。
- `スーパーアロハ/-30` は当時更新資料内に **2009/5/11発売** と **2009/5/7発売** に読める記載が混在するため、別資料で具体日を再照合してから挿入する。
- その後 `スターマンアイズ / スロットニュートラッド / デュエルドラゴンキングダム / パチスロアタックNo.1 / レキオ2-30 / 琉球浪漫25 / 琉球浪漫30 / 緑ドン` 等を具体導入日順に監査する。
- `天誅` はALL7 2009-05-01とK-Navi 2009-06-01/回顧2009-06が競合するため、推測で5月1日へ遡及挿入しない。

## resetBehavior遡及QA進捗

- **竹中直人のパチスロ太閤記（2006-09）** までv0.7化済み。
- 遡及QAは竹中直人のパチスロ太閤記より後の最初のresetBehavior未補完機から継続する。
- 新規収集を止めず、既存性能値を無駄にやり直さず、既にv0.7化済み機種は飛ばす。

## 次回再開地点

1. **LATEST_HANDOFF基準365件地点。既存365件の再追加禁止。**
2. **2009-05-07同日群〜5月10日の未処理機を具体日順に境界監査する。**
3. 最優先候補は `スーパーアロハ/-30`。2009/5/7と5/11の具体日競合を別系統資料で解消/CONFLICT確定し、未登録なら次件として処理する。
4. その後2009年5月月内候補を具体導入日順に進める。
5. 毎回GitHub最新mainで既存登録を確認し、未処理のみ追加する。
6. 遡及QAは **竹中直人のパチスロ太閤記より後の最初のresetBehavior未補完機**から再開する。

## 直近コミット

- 362 もっと楽シーサー25Φ: `addc89840a0572f7b11c261ae832db3dabe2444b`
- 363 もっと楽シーサー30Φ全国バージョン: `2a46545e16bd7cdab4b46f1fdbfa2c9d7db8ee82`
- 364 もっと楽シーサー30Φ沖縄バージョン: `6e39c042e4c0333b7d3a0b883e0c3111eb5b9b10`
- 365 タイムリミット: `aca238055e53007a3d374226ec052b6705b4d21a`
