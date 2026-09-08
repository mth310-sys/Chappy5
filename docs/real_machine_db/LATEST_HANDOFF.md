更新日: 2026-09-08

## 現在地点
- recordCount: **1004**
- latestRecordAdded: **パチスロ 戦姫絶唱シンフォギア**（SANKYO）
- latestRecordAddedPath: `docs/real_machine_db/machines/2016-08-22_senki-zesshou-symphogear.md`
- chronologicalFrontier: **2016-08-22**
- frontierLatestMachine: **パチスロ 戦姫絶唱シンフォギア**（SANKYO）
- schema: **resetBehavior v0.7**
- status: **2016-08-22_GROUP_OPEN**

## 今回の同期 / 正本確認
- 最新mainの `README.md`、`docs/CHAPPY5_REAL_MACHINE_DATABASE_MISSION_V01.md`（v0.7）、`docs/real_machine_db/INDEX.md`、`LATEST_HANDOFF.md`、直前No.1003 `2016-08-22_super-planet-deluxe.md` を再取得して開始。
- INDEXは19件時点の旧集約なので、README規定どおり **LATEST_HANDOFF + 実レコード + 最新main** を進捗正本として使用。
- 開始時点の正本は recordCount **1003** / chronologicalFrontier **2016-08-22** / `2016-08-22_GROUP_OPEN`。
- 既存性能値をやり直さず、handoff指定の次未処理 `パチスロ戦姫絶唱シンフォギア` をNo.1004として処理。

## No.1004 — パチスロ 戦姫絶唱シンフォギア
- manufacturer: **SANKYO**
- releaseDate: **2016-08-22**
- formalModelName: **パチスロ戦姫絶唱シンフォギアS**
- certificationNumber: **5S1161**
- generation/system: **5号機 / A+ART**
- recordStatus: **COMPLETE_CORE_WITH_RESET_BEHAVIOR_V0_7**

### performanceCore
- 機械割: **97.4 / 99.1 / 100.9 / 103.6 / 106.3 / 110.1%**。
- ボーナス合算: **1/489 / 471 / 458 / 428 / 409 / 399**。
- ART初当り: **1/337 / 327 / 309 / 288 / 268 / 256**。
- ボーナス+ART合算: **1/199 / 193 / 184 / 172 / 162 / 156**。
- CZ TOTAL: **1/133 / 128 / 120 / 112 / 103 / 98**。
- ベース: **約34G/50枚**。
- ART「シンフォギアRUSH」: **約1.5枚/G、最低30G+α**。ボーナス込み約2.0枚/G。
- 同色BIG/LIVE BONUS: **約290枚** / 異色: **約180枚** / ツヴァイウィングLIVE・限定解除: **約30枚**。
- 天井: **ボーナス&ART間777GでCZ / 1000GでART**。

### resetBehavior v0.7
- 本機の重要特性: **設定変更でも内部天井G数を引き継ぐ**。2016年当時すろぱちくえすと、pachislo-data、期待値見える化系、ちょんぼりすたで複数一致。
- **音符メーターも設定変更/電源OFF→ONで内部前日値を引き継ぐ**が、朝一液晶上は1個点灯へ戻る。
- 液晶G数は朝一0G、ステージは学校ステージ系。これらは設定変更と純電断双方で生じ得るため単独の変更判別には使えない。
- **RAMクリアは別挙動**で、ゲーム数・音符メーターとも0から開始すると当時解析が報告。
- 純電源OFF→ON: 天井CARRYOVER、音符内部CARRYOVER、通常/高確内部状態はCARRYOVER_SUPPORTED。
- 設定変更時の通常/高確内部状態: 当時主要資料が調査中。後年単一整理資料に引継ぎ記述があるが複数高信頼照合できず **UNVERIFIED_AFTER_RESEARCH**。
- 設定変更専用短縮天井/朝一専用モード/専用当選率優遇: **NONE_CONFIRMED_AFTER_RESEARCH**。
- 有利区間: **NOT_APPLICABLE_5TH_GEN_PRE_5_9**。
- 変更判別: リールガックンの実戦報告あり。ただし停止形依存等が指摘されるため **POSSIBLE_GACKUN_NOT_DETERMINISTIC**。
- 朝一の実質的狙い要素は、前日ハマリ/音符蓄積が設定変更を跨いでも残るCARRYOVER特性。設定変更専用の恩恵抽選ではない。

### conflicts / quality
- 5号機クロニクルのBIG/REG別確率・ART初当たり系列は、P-WORLD/一撃/pachislo-dataのcanonical系列と大きく異なるため `CONFLICT_5GOKI_BONUS_ART_BREAKDOWN` として平均せず分離。
- 5号機クロニクルのBIG約150枚/REG約50枚表記も、P-WORLD/HAZUSE/ちょんぼりすた/pachislo-dataで一致する290/180/30枚系列と整合せず `CONFLICT_5GOKI_BASIC_PAYOUT_LABELS` として保持。
- 一撃の2016-10-03時点設定変更ページは各項目「調査中」のため、後続当時解析で確定した天井/音符CARRYOVERとの情報成熟差として保持。

## 2016-08-22群 — OPEN
登録済み:
- SLOTデッド オア アライブ5
- クイーンジャックネオ
- クレアの秘宝伝～眠りの塔とめざめの石～
- スーパープラネットデラックス
- パチスロ 戦姫絶唱シンフォギア

未処理候補:
- **仄暗い水の底から**（藤商事）

注意:
- ALL7同日一覧の「Aさくらももこ劇場 ミラくるずきんちゃん」「鉄拳2」はパチンコ側混入/表記混在の可能性があるため、パチスロ本線へ自動登録しない。機種単独で再監査する。
- 同日群は未完了なので `GROUP_OPEN` を維持。

## 遡及 resetBehavior QA
- retroQaScanConfirmedThrough: **2006-03-27_kengou-musashi.md**
- retroQaNextInspection: **2006-03-27_golgo13-the-professional.md**
- retroQaStatus: **SEQUENTIAL_SCAN_ACTIVE**
- 今回は新規本線を優先し、遡及QA地点は変更なし。

## 次回再開地点
1. 最新mainの README / mission v0.7 / INDEX / LATEST_HANDOFF / No.1004を再取得。
2. **1004件 / 2016-08-22群OPEN → 仄暗い水の底から（藤商事）**を次の未処理機として収集。
3. その後08/22同日群をメーカー横断再監査しCLOSED可否判定。
4. `Aさくらももこ劇場 ミラくるずきんちゃん` / `鉄拳2` はパチスロ機種単独で正体確認してから本線採否判定。
5. 遡及QAは `2006-03-27_golgo13-the-professional.md` から順次継続。
6. PARTIAL/UNVERIFIEDは表記・検索語・資料系統変更後のみ確定。競合は平均せずCONFLICT。

## 主要出典 — 取得日 2026-09-08
### No.1004 パチスロ 戦姫絶唱シンフォギア
- HAZUSE: https://hazuse.com/machine/pachislot/5S1161/
- P-WORLD: https://www.p-world.co.jp/machine/database/8085
- 一撃: https://1geki.jp/slot/s_symphogear/
- 一撃 天井/設定変更: https://1geki.jp/slot/s_symphogear/3/
- すろぱちくえすと: https://www.slopachi-quest.com/article/symphogear-reset/
- ちょんぼりすた: https://chonborista.com/slot/sankyo-slot/21975/
- pachislo-data: https://pachislo-data.com/sankyo/26457
- K-Navi: https://p-kn.com/slot/2547/
- 5号機クロニクル: https://5goki.com/sankyo
- 期待値見える化: https://slotjin.com/zone/symphogear/

### 直前No.1003
- `docs/real_machine_db/machines/2016-08-22_super-planet-deluxe.md`
