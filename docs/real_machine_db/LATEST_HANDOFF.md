# 実機DB 最新リレー引継ぎ

更新日: 2026-09-01

## 現在地点

- 最新mainの `README.md`、実機DBミッションv0.7、`INDEX.md`、既存レコード、直前 `LATEST_HANDOFF.md` を再読して継続。
- `INDEX.md` は旧19件地点のため、README規定どおり本 `LATEST_HANDOFF.md` を進捗正本とする。
- 直前handoffは281 `スーパージャックポット（2008/ヤーマ）`。mainにはhandoff未反映の `爺サマー` レコードが既に存在していたため、重複追加せず内容をQAして **282** として統合した。
- 今回新規で **283 `海人`（トリビー / 2008-08-04）** を追加した。
- 性能コア + ミッションv0.7 `resetBehavior` を同時収集。既存レコードの性能値を無駄にやり直していない。

## 282. 爺サマー

- record: `docs/real_machine_db/machines/2008-07_jii-summer.md`
- manufacturer: 大都技研
- modelName: `ジイサマー7`
- releaseDate: `2008-07-28`
- systemType: 完全告知ノーマル / BIG+MB / リプレイ同時成立
- BIG: `1/287.44 / 1/275.36 / 1/264.26 / 1/252.06 / 1/236.59 / 1/219.92`
- MB: `1/512.00 / 1/504.12 / 1/496.48 / 1/489.07 / 1/474.90 / 1/394.80`
- 合算: `1/184.09 / 1/178.09 / 1/172.46 / 1/166.34 / 1/157.92 / 1/141.24`
- BIG約312枚、MB約104枚。
- 50枚ベースは再探索後も `UNVERIFIED_AFTER_RESEARCH`。
- 当初レコードは7月下旬までの精度だったが、当時業界アーカイブに **2008-07-28発売** の直接記録を確認して日精度へ更新。
- 機械割は当時攻略シミュレート `96.66〜111.99%` と後年資料 `95.84〜112.14%`、整数丸め `97〜112%` が競合。平均せず `CONFLICT_PAYOUT_METHOD_OR_SOURCE` として全系列保持。

### resetBehavior（282）

- 通常ゲーム数天井/周期CZ/持続RT/ART/ATは確認されず。
- `gameCounterReset`: `NOT_APPLICABLE_OR_NONE_CONFIRMED`
- `ceilingAfterReset`: `NONE_CONFIRMED_AFTER_RESEARCH`
- `modeAfterReset`: `NOT_APPLICABLE_OR_NONE_CONFIRMED`
- `advantageousSectionReset`: `NOT_APPLICABLE`
- 設定変更/据え置き/電源OFF→ON/ガックン・初期出目は、初代2008年機に限定して再探索したが本機固有の直接資料を確定できず `UNVERIFIED_AFTER_RESEARCH`。
- 2010年 `ギラギラ爺サマー`、2022年 `超ギラギラ爺サマー` のリセット・天井・有利区間情報は流用禁止。

## 283. 海人

- record: `docs/real_machine_db/machines/2008-08-04_uminchu.md`
- manufacturer: トリビー
- modelName: `ウミンチュ`
- releaseDate: `2008-08-04`
- systemType: 25Φ・完全告知ノーマル / ボーナス主体
- BIG: `1/325 / 1/312 / 1/303 / 1/293 / 1/275 / 1/257`
- REG: `1/362 / 1/354 / 1/334 / 1/315 / 1/284 / 1/260`
- 合算: `1/168 / 1/165 / 1/159 / 1/152 / 1/140 / 1/129`
- 機械割: `95.9 / 97.6 / 99.9 / 102.0 / 106.0 / 110.1%`
- BIG約312枚、REG約104枚。払い出し終了条件はBIG345枚超、REG105枚超。
- 50枚ベースは表記揺れ・型式・海人-25・1000円/50枚/コイン持ちまで再探索しても確定できず `UNVERIFIED_AFTER_RESEARCH`。

### resetBehavior（283）

- 通常ゲーム数天井/周期CZ/RT/ART/AT/朝一専用モードは確認されず。
- `gameCounterReset` / `ceilingAfterReset`: `NOT_APPLICABLE`
- `modeAfterReset`: `NOT_APPLICABLE_OR_NONE_CONFIRMED`
- `advantageousSectionReset`: `NOT_APPLICABLE`
- 設定変更/据え置き/電源OFF→ON/ガックン・初期出目は本機固有の直接資料を確定できず `UNVERIFIED_AFTER_RESEARCH`。
- 4号機時代の初代海人-30や裏物資料は除外。

## 今回の主要出典

取得日: 2026-09-01

### 爺サマー
- https://web-greenbelt.jp/00003743/
- https://slothistory.com/kousin_kako05.html
- https://cs62.cs-plaza.com/g/pachi/pla/s_conq/daitogiken_slot/41/h.php
- https://pachinko.hatenablog.jp/entry/2008/07/G-summer
- https://pachimaga.com/free/special/92f47d856bd09b78e06942216886cc2ee130a79a.php

### 海人
- https://p-kn.com/slot/834/
- https://slothistory.com/kousin_kako05.html
- https://news.p-world.co.jp/articles/2959/greenbelt

## 重複防止・境界管理

- 既存283件の再追加禁止。
- `完熟チェリー` は7月候補ではない。2008年機であることは確認済みだが、現行年別DBでは2008年10月側に掲載されるため、7月末キューから除外し10月境界で再確認する。
- `爺サマー` はmainに既存ファイルが先行していたため、今回重複ファイルを作らず既存ファイルをQA更新した。
- `海人G-30` は `海人` と同じ2008-08-04発売資料を確認済みだが、今回の設定別詳細値は25Φ `海人` に対するもの。兄弟機へ自動流用せず、別レコードとして次回調査する。
- 情報提供端子板の対応機種化日だけを導入日として扱わない。

## resetBehavior 遡及QA

- 最終補完済み地点 `球児（2006-09）` を維持。
- 2006年ヤーマ `ジャックポット トロピカルバージョン` の実ファイル同定問題は未解消。2017年 `Ver.2` と混同せず、パス/本文を直接同定してからQA再開する。
- 新規収集本線を止めない。

## 次回再開地点

1. **LATEST_HANDOFF基準283件地点。時系列は2008-08-04 `海人` まで進行。**
2. 次は同日兄弟機 **`海人G-30`** を最優先。25Φ値を流用せず、30Φ固有の設定別確率/機械割/ベース/獲得枚数を旧攻略・P-WORLD・当時資料で再探索する。
3. 同日候補 **`爆音伝説サクラ`**、その後 `犬キングX` 等の8月初旬群を具体日順に監査する。
4. `スーパージャックポットK / P-30` は別型式痕跡の同一機/別機判定を後続QAで継続する。
5. 欠損は表記揺れ・型式名・メーカー・シリーズ名と設定変更/リセット/朝一/据え置き/電源OFF ON/天井短縮/モード/ガックン/有利区間等へ検索語を変え、公式・業界・当時解析・旧DB・アーカイブ・回顧資料を横断してから `UNVERIFIED` 判定する。
