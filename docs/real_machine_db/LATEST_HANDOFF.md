# 実機DB 最新リレー引継ぎ

更新日: 2026-09-02

## 現在地点

- 最新mainの `README.md`、実機DBミッションv0.7、`INDEX.md`、既存レコード、直前 `LATEST_HANDOFF.md` を再読して継続。
- `INDEX.md` は旧19件地点のため、README規定どおり本 `LATEST_HANDOFF.md` を進捗正本とする。
- 直前正本は **310 `南国育ち`（オリンピア / 2008-11-03）**。
- 2008-11-04〜11-16境界を再監査し、11月16日納品開始が当時業界記事で確定する未収録機を発見。
- **311 `ランブルローズXX`（KPE / 型式 ランブルローズXXJF / 2008-11-16）** を追加。
- 性能コア + v0.7 `resetBehavior` を同時収集。ART純増競合は平均せず `CONFLICT`。設定変更/据え置き/電源OFF→ONの本機固有処理は検索語・資料系統を変えた再探索後のみ `UNVERIFIED_AFTER_RESEARCH` とした。

## 311. ランブルローズXX

- record: `docs/real_machine_db/machines/2008-11-16_rumble-roses-xx.md`
- manufacturer: KPE
- modelNumber: `ランブルローズXXJF`
- releaseDate: **2008-11-16**。2008-09-29グリーンべるとが「納品は11月16日からスタートする予定」と明記。
- generation: 5号機
- systemType: ボーナス + RT/CZ + ループ型ART `ランブルタイム` / パンク回避型ART。
- BIG合成: **1/383.25 / 1/374.49 / 1/352.34 / 1/334.37 / 1/318.14 / 1/286.18**。
- REG: **1/524.29 / 1/516.03 / 1/500.27 / 1/478.36 / 1/471.48 / 1/445.82**。
- ボーナス合算: **1/221.41 / 1/217.01 / 1/206.74 / 1/196.80 / 1/189.96 / 1/174.30**。
- 機械割: **97.8 / 99.2 / 102.7 / 106.3 / 109.4 / 119.0%**。P-WORLD、2008年更新5号機wiki、当時新台記事で一致。
- 50枚ベース: **38.26 / 38.29 / 38.50 / 38.76 / 38.98 / 39.11G**。パチマガスロマガと当時wikiで照合。
- ボーナス: BIG約**203枚**、REG約**96枚**。
- `ランブルタイム`: **50G/1セット**、継続率 **55 / 70 / 80 / 90%**。
- ART純増: **CONFLICT**。当時グリーンべると/P-WORLD **約+0.5枚/G**、2008-11-20更新5号機wiki **約+0.3枚/G**。平均化禁止。
- 天井: **ボーナス間777Gで天井状態**。リプレイ確率は上がらず、その後の次回ボーナス成立でART突入確定。
- `coreStatus: COMPLETE_CORE_WITH_ART_NET_CONFLICT`。

### resetBehavior（311）

- `settingChangeBehavior`: `UNVERIFIED_AFTER_RESEARCH`。設定変更時の777G天井カウンタ初期化/引継ぎ、RT/ART状態処理を本機固有本文で確定できず。
- `carryOverBehavior`: `UNVERIFIED_AFTER_RESEARCH`。据え置き時の777Gカウンタ、ロッカールームRT、ART継続状態の翌日処理は未確定。
- `powerCycleBehavior`: `UNVERIFIED_AFTER_RESEARCH`。電源OFF→ONのみの天井/RT/ART/初期表示処理は未確定。
- `gameCounterReset`: `UNVERIFIED_AFTER_RESEARCH`。通常777G天井は確定、設定変更時のカウンタ扱いのみ未確定。
- `ceilingAfterReset`: `NONE_CONFIRMED_AFTER_RESEARCH`。設定変更専用短縮天井/固定朝一G数は確認できず。ただし777Gを変更時に新規計数すると推測はしない。
- `modeAfterReset`: `NONE_CONFIRMED_AFTER_RESEARCH`。朝一専用モード/ART優遇モードの公開情報なし。
- `stateAfterReset`: `UNVERIFIED_AFTER_RESEARCH`。ロッカールームRT/ランブルタイム/ランブルチャンスの変更・電断時処理は未確定。
- `advantageousSectionReset`: `NOT_APPLICABLE`（5号機・有利区間制度前）。
- `resetBenefits`: `NONE_CONFIRMED_AFTER_RESEARCH`。
- `resetPenalties`: `NONE_CONFIRMED_AFTER_RESEARCH`。
- `resetDetection`: `UNVERIFIED_AFTER_RESEARCH`。ガックン/初期出目/据え置き判別を追加して再探索したが本機固有確定手段を回収できず。
- `resetBehaviorQA: RESET_FIELDS_RESEARCHED_NORMAL_777G_CEILING_CONFIRMED_DEVICE_SPECIFIC_CHANGE_CARRYOVER_POWER_CYCLE_UNVERIFIED`。

## 311主要出典

取得日: 2026-09-02

- https://web-greenbelt.jp/00003794/ — 2008-11-16納品開始予定、50G ART、約+0.5枚/G、継続率55/70/80/90%。
- https://www.p-world.co.jp/machine/database/5345 — BIG/REG/合算、機械割97.8〜119.0%、約203/96枚、ART約+0.5枚/G、777G仮天井、ランブルチャンス。
- https://cs62.cs-plaza.com/g/pachi/pla/s_conq/kpe_slot/11/c.php — 38.26〜39.11G/50枚。
- https://cs62.cs-plaza.com/g/pachi/pla/s_conq/kpe_slot/11/h.php — BIG合成/REG/合算の第二照合。
- https://w.atwiki.jp/5gouki/pages/128.html — 2008-11-20更新。当時機械割/ボーナス/ベース/777G天井、ART約+0.3枚/Gの競合値。
- https://www.nakaiti.com/html/sKpe054.html — 型式 `ランブルローズXXJF`、基本獲得/ART/天井の補助照合。
- https://pachinko.hatenablog.jp/entry/2008/11/rumbleRoses-XX — 型式・各ボーナス確率の補助照合。

## 境界監査・重複防止

- **既存311件の再追加禁止。**
- 310 `南国育ち` は2008-11-03処理済み。
- 311 `ランブルローズXX` は2008-11-16納品開始。当初キューの `クラッピーパーク`（2008-11-17）より先に入るため今回先行処理した。
- `クラッピーパーク` はパチビーで **2008-11-17導入**を確認済み。次の最優先候補。
- `鬼火` / `サイサイ` は2008-11-24納品開始資料があるため11月17日より前へ混入させない。
- `南国育ち30` は後発30φ版（2009-01-18納品候補）のため別機として後続処理。

## 次回再開地点

1. **LATEST_HANDOFF基準311件地点。2008-11-04〜15に確定未収録機が残っていないか最終境界監査を継続。**
2. それ以前の確定未収録機がなければ **312候補 `クラッピーパーク`（ビーム / 2008-11-17導入）** の性能コア＋v0.7 `resetBehavior` を収集する。
3. 11月17〜23の同日/先行候補を確認後、`鬼火` / `サイサイ`（2008-11-24）へ進む。
4. resetBehavior遡及QAは2006-09群を継続し、`大山鳴動 漢みちスロ！` → `竹中直人のパチスロ太閤記` の順に欠損再探索する。
