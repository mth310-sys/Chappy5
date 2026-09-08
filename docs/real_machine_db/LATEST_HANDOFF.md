更新日: 2026-09-08

## 現在地点
- recordCount: **1002**
- latestRecordAdded: **クレアの秘宝伝～眠りの塔とめざめの石～**（大都技研）
- latestRecordAddedPath: `docs/real_machine_db/machines/2016-08-22_claire-hihouden-nemuri-no-tou.md`
- chronologicalFrontier: **2016-08-22**
- frontierLatestMachine: **クレアの秘宝伝～眠りの塔とめざめの石～**（大都技研）
- schema: **resetBehavior v0.7**
- status: **2016-08-22_GROUP_OPEN**

## 今回の同期 / 正本確認
- 最新mainの `README.md`、`docs/CHAPPY5_REAL_MACHINE_DATABASE_MISSION_V01.md`（v0.7）、`docs/real_machine_db/INDEX.md`、`LATEST_HANDOFF.md`、直前No.1001 `2016-08-22_queen-jack-neo.md` を再取得して開始。
- INDEXは19件時点の旧集約なので、README規定どおり **LATEST_HANDOFF + 実レコード + 最新main** を進捗正本として使用。
- 開始時点の正本は recordCount **1001** / chronologicalFrontier **2016-08-22** / `2016-08-22_GROUP_OPEN`。
- 既存性能値をやり直さず、handoff指定の次未処理 `クレアの秘宝伝～眠りの塔とめざめの石～` をNo.1002として処理。

## No.1002 — クレアの秘宝伝～眠りの塔とめざめの石～
- manufacturer: **大都技研**
- releaseDate: **2016-08-22**
- formalModelName: **クレアの秘宝伝眠りの塔と目覚めの石／A2**
- certificationNumber: **6S0476**
- generation/system: **5号機 / A+RT / ボーナス主体**
- recordStatus: **COMPLETE_CORE_WITH_RESET_BEHAVIOR_V0_7**

### performanceCore
- 標準機械割: **97.2 / 98.7 / 101.6 / 106.1 / 108.5 / 114.6%**。
- ボーナス最速察知時: **98.6 / 100.1 / 103.1 / 107.1 / 109.3 / 115.2%**。攻略条件差なので平均せず別系列保持。
- BIG: **1/299.3 / 292.6 / 280.1 / 265.3 / 257.0 / 232.4**。
- REG: **1/364.1 / 341.3 / 303.4 / 287.4 / 264.3 / 232.4**。
- 合算: **1/164.3 / 157.5 / 145.6 / 138.0 / 130.3 / 116.2**。
- ベース: **約33.46～34.91G/50枚（設定1～6）**。
- BIG **最大304枚** / REG **最大106枚**。
- BIG後RT: **30G / 約0.2枚/G**。
- 通常時ゲーム数天井なし。

### resetBehavior v0.7
- 天井・AT/ART長期ゲーム数モード非搭載のため gameCounterReset / ceilingAfterReset は **NOT_APPLICABLE**。
- 設定変更専用短縮天井、朝一専用モード、高確/CZ、初当たり優遇: **NONE_CONFIRMED_AFTER_RESEARCH**。
- 据え置き/純電源OFF→ONで引き継ぐ通常時天井・長期モードはなし。
- RT途中など一時的内部状態の設定変更/純電断契約は本機固有資料を固定できず **UNVERIFIED_AFTER_RESEARCH**。一般的な大都筐体挙動から推測しない。
- HAZUSEでは隠しコマンドによる楽曲解放が電源断まで継続するため、演出解放状態は純電断で初期化されることを確認。ただし性能/朝一恩恵ではないため参考情報。
- 有利区間: **NOT_APPLICABLE_5TH_GEN_PRE_5_9**。
- 本機固有のガックン・初期出目・液晶表示等による確定的変更判別: **NONE_CONFIRMED_AFTER_RESEARCH**。

### quality
- 大都技研公式製品一覧で2016年8月・BB後30G RTを確認。
- 2016-07-15遊技日本記事で導入開始2016-08-22、合算、設定6標準出玉率114.6%、30G RTを確認。
- HAZUSEで型式A2・検定番号6S0476・導入日を固定。
- BIG/REG/合算は一撃・2-9伝説・アタリ7等で一致。
- ベースはなな徹の設定別解析値33.46～34.91G/50枚。
- 標準機械割と最速察知時機械割は同一定義の競合ではなく攻略条件差として分離。

## 2016-08-22群 — OPEN
登録済み:
- SLOTデッド オア アライブ5
- クイーンジャックネオ
- クレアの秘宝伝～眠りの塔とめざめの石～

未処理候補:
- **スーパープラネットデラックス**（山佐）
- **パチスロ戦姫絶唱シンフォギア**（SANKYO）
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
1. 最新mainの README / mission v0.7 / INDEX / LATEST_HANDOFF / No.1002を再取得。
2. **1002件 / 2016-08-22群OPEN → スーパープラネットデラックス（山佐）**を次の未処理機として収集。
3. 続いて **パチスロ戦姫絶唱シンフォギア → 仄暗い水の底から** を処理し、08/22同日群をメーカー横断再監査してCLOSED可否判定。
4. `Aさくらももこ劇場 ミラくるずきんちゃん` / `鉄拳2` はパチスロ機種単独で正体確認してから本線採否判定。
5. 遡及QAは `2006-03-27_golgo13-the-professional.md` から順次継続。
6. PARTIAL/UNVERIFIEDは表記・検索語・資料系統変更後のみ確定。競合は平均せずCONFLICT。

## 主要出典 — 取得日 2026-09-08
### No.1002 クレアの秘宝伝～眠りの塔とめざめの石～
- 大都技研公式: https://www.daitogiken.com/products/slot/
- 遊技日本 2016-07-15: https://yugi-nippon.com/pachinko-news/post-8706/
- 長崎県遊協 / 遊技通信web転載: https://nagasaki-yukyo.or.jp/information/%E5%A4%A7%E9%83%BD%E6%8A%80%E7%A0%94%E3%81%8C%E3%80%8C%E3%82%AF%E3%83%AC%E3%82%A2%E3%81%AE%E7%A7%98%E5%AE%9D%E4%BC%9D%E3%80%9C%E7%9C%A0%E3%82%8A%E3%81%AE%E5%A1%94%E3%81%A8%E3%82%81%E3%81%96%E3%82%81/
- HAZUSE: https://hazuse.com/machine/pachislot/6S0476/
- 2-9伝説: https://2-9densetsu.com/creanohihouden2/
- 一撃: https://1geki.jp/slot/s_creanohihouden2/
- 一撃 ボーナス確率: https://1geki.jp/slot/s_creanohihouden2/1/
- なな徹 機種概要: https://nana-press.com/kaiseki/machine/60/
- なな徹 小役/ベース: https://nana-press.com/kaiseki/machine/60/1130/
- アタリ7: https://www.atari7.com/slot/date1468479990.php
- 5号機クロニクル 大都技研: https://5goki.com/daito
- 中一商事 型式参照: https://www.nakaiti.com/html/sDaitogiken090.html

### 直前No.1001
- `docs/real_machine_db/machines/2016-08-22_queen-jack-neo.md`
