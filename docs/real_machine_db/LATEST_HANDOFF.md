更新日: 2026-09-09

## 現在地点
- recordCount: **1093**
- latestRecordAdded: **ケロロ軍曹**（大都技研）
- latestRecordAddedPath: `docs/real_machine_db/machines/2017-06-19_keroro-gunsou.md`
- chronologicalFrontier: **2017-06-19**
- frontierLatestMachine: **ケロロ軍曹 — No.1093**
- schema: **resetBehavior v0.7**
- status: **2017-06-19_GROUP_OPEN**

## 今回の同期 / 進捗
- 最新mainの `README.md`、mission v0.7、旧 `INDEX.md`、`LATEST_HANDOFF.md`、No.1092「パチスロ ベン・トー～半額弁当争奪戦!!～」実レコードを再取得して開始。
- INDEX本文は初期19件時点の旧スナップショットのため、README規定どおり最新handoffと実レコードを進捗正本として採用。
- 開始時mainは **1092件 / chronologicalFrontier 2017-06-19 / 6/19群OPEN**。
- handoff指定の次未処理 **「ケロロ軍曹」** をNo.1093として登録。
- 大都技研公式、HAZUSE、一撃、P-WORLD、パチビー、K-Navi、アタリ7、すろぱちくえすと、ちょんぼりすた、pachislo-dataを横断し、型式/検定番号、導入日、設定別ART/機械割、CZ、ベース、ART純増、天井、設定変更時129G短縮抽選、純電源OFF→ON挙動を固定。
- `共鳴数` と `惑星麻酔ポイント` は別内部要素として扱い、純電源OFF→ON時の共鳴数RESETと惑星麻酔ポイントCARRYOVERをCONFLICT扱いせず分離保存。
- 据え置き独立契約、一般的な低確/高確状態の設定変更時公開振り分け、本機固有の確定ガックン/リール/ランプ契約は、表記揺れ・型式・メーカー・シリーズ名と「設定変更/朝一/据え置き/電源OFF ON/状態/高確/ガックン」を組み替えて再探索したが直接固定できずUNVERIFIEDとして保存。

## No.1093 — ケロロ軍曹
- manufacturer: **大都技研**
- releaseDate: **2017-06-19**
- formalModelName: **ケロロ軍曹／A2**
- certificationNumber: **6S1378**
- generation/system: **5号機 / 5.5号機 / ART / ボーナス非搭載 / セット継続+ストック**
- recordStatus: **COMPLETE_CORE_WITH_RESET_BEHAVIOR_V0_7**

### performanceCore
- 機械割: **98.0 / 99.9 / 102.4 / 105.2 / 110.4 / 115.3%**。
- ART初当たり: **1/398.2 / 1/380.0 / 1/363.6 / 1/317.2 / 1/340.0 / 1/260.4**。
- CZ「ストーリー」: **1/149.5 / 1/145.7 / 1/135.6 / 1/133.6 / 1/141.5 / 1/125.0**。
- ベース: **約45.7G/50枚**（他資料の約45Gは丸め差）。
- ART純増: **約2.0枚/G**。
- ART「共鳴タイム」: **1セット30G以上 / 初回40G以上**。侵略タイム10G。
- 通常天井: **1556G**。

### resetBehavior v0.7
- 設定変更: **天井RESET/RESELECT・共鳴数RESET・惑星麻酔ポイントRESELECT・日向家ステージ開始**。
- 設定変更後129G天井選択率:
  - 設定1 **12.5%**
  - 設定2 **14.1%**
  - 設定3 **15.6%**
  - 設定4 **17.2%**
  - 設定5 **20.3%**
  - 設定6 **25.0%**
- 純電源OFF→ON: **天井CARRYOVER / 共鳴数RESET / 惑星麻酔ポイントCARRYOVER / 日向家ステージ開始**。
- 据え置き独立契約: **UNVERIFIED_DIRECT_STAY_SETTING_CONTRACT_AFTER_RESEARCH**。
- 一般的低確/高確の設定変更時公開振り分け: **UNVERIFIED_AFTER_RESEARCH**。
- 有利区間: **NOT_APPLICABLE_5TH_GEN_PRE_5_9**。
- 本機固有の確定ガックン/ランプ/リール挙動: **UNVERIFIED_AFTER_RESEARCH**。

## conflicts / missing
- releaseDate: ちょんぼりすた冒頭に2017-06-05表記が残るが、同記事内導入日表・HAZUSE・パチビー・K-Navi・アタリ7等は2017-06-19で一致。canonicalは **2017-06-19**、平均しない。
- `共鳴数RESET` と `惑星麻酔ポイントCARRYOVER` は別変数なのでCONFLICTではない。
- MATERIAL_NUMERIC_CONFLICT: **NONE_CONFIRMED** for canonical payout/ART/reset-shortening values.
- missing: direct independent stay-setting behavior; classic low/high reset-state distribution; deterministic reset-detection contract.

## 2017-06-19群 — 継続中
- status: **OPEN**。
- 登録済み:
  1. ぱちスロ PSYCHO-PASS サイコパス — No.1089
  2. SLOTギルティクラウン — No.1090
  3. パチスロ リング 終焉ノ刻 — No.1091
  4. パチスロ ベン・トー～半額弁当争奪戦!!～ — No.1092
  5. ケロロ軍曹 — No.1093
- 次の確認済み候補:
  1. **ドリームジャンボ あの興奮をもう一度** — No.1094候補
  2. スーパーミラクルジャグラー
  3. ハイパーリノ
- K-Navi 6/19カレンダーではリング / ケロロ / スーパーミラクルジャグラー / SLOTギルティクラウンを確認。handoff既存候補のドリームジャンボ / ハイパーリノも別系統一覧との照合を維持し、処理後に全メーカー横断で同日群CLOSE判定する。

## 遡及 resetBehavior QA
- retroQaScanConfirmedThrough: **2006-05-15_looney-tunes-bia.md**。
- retroQaStatus: **SEQUENTIAL_SCAN_ACTIVE**。
- 次カーソル: `2006-05_the-king-of-fighters.md`。
- 新規本線優先のため今回未更新。

## 次回再開地点
1. 最新mainの README / mission v0.7 / INDEX / LATEST_HANDOFF / No.1093を再取得。
2. **1093件 / chronologicalFrontier 2017-06-19 / 6/19群OPEN** を正本として継続。
3. 次の未処理 **「ドリームジャンボ あの興奮をもう一度」** をNo.1094候補として導入日・型式・メーカーを再固定し、性能コア + resetBehavior v0.7で処理。
4. 続いて6/19同日群のスーパーミラクルジャグラー / ハイパーリノを処理し、全メーカー横断監査後にCLOSE判定。
5. 遡及QAは `2006-05_the-king-of-fighters.md` から継続。

## 主要出典 — 取得日 2026-09-09
### No.1093 ケロロ軍曹
- 大都技研公式: https://www.daitogiken.com/contents/product/slot/keroro/
- HAZUSE: https://hazuse.com/machine/pachislot/6S1378/
- HAZUSE 基本スペック: https://hazuse.com/machine/pachislot/6S1378/genre/201/
- 一撃 天井/設定変更/電源OFF ON: https://1geki.jp/slot/s_kelolo/3/
- P-WORLD: https://www.p-world.co.jp/machine/database/8408
- パチビー: https://www.pachibee.jp/machines/index/217050018
- K-Navi 2017年6月導入カレンダー: https://p-kn.com/calendar/201706/
- アタリ7: https://www.atari7.com/slot/date1496131540.php
- すろぱちくえすと: https://www.slopachi-quest.com/article/keroro-gunsou/
- ちょんぼりすた: https://chonborista.com/slot/daito-slot/36615/
- pachislo-data: https://pachislo-data.com/daito/36858
