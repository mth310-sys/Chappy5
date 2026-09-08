更新日: 2026-09-08

## 現在地点
- recordCount: **1003**
- latestRecordAdded: **スーパープラネットデラックス**（山佐）
- latestRecordAddedPath: `docs/real_machine_db/machines/2016-08-22_super-planet-deluxe.md`
- chronologicalFrontier: **2016-08-22**
- frontierLatestMachine: **スーパープラネットデラックス**（山佐）
- schema: **resetBehavior v0.7**
- status: **2016-08-22_GROUP_OPEN**

## 今回の同期 / 正本確認
- 最新mainの `README.md`、`docs/CHAPPY5_REAL_MACHINE_DATABASE_MISSION_V01.md`（v0.7）、`docs/real_machine_db/INDEX.md`、`LATEST_HANDOFF.md`、直前No.1002 `2016-08-22_claire-hihouden-nemuri-no-tou.md` を再取得して開始。
- INDEXは19件時点の旧集約なので、README規定どおり **LATEST_HANDOFF + 実レコード + 最新main** を進捗正本として使用。
- 開始時点の正本は recordCount **1002** / chronologicalFrontier **2016-08-22** / `2016-08-22_GROUP_OPEN`。
- 既存性能値をやり直さず、handoff指定の次未処理 `スーパープラネットデラックス` をNo.1003として処理。

## No.1003 — スーパープラネットデラックス
- manufacturer: **山佐**
- releaseDate: **2016-08-22**
- formalModelName: **UNVERIFIED_AFTER_RESEARCH**
- certificationNumber: **UNVERIFIED_AFTER_RESEARCH**
- generation/system: **5号機 / A+RT / 完全告知・ボーナス主体**
- recordStatus: **COMPLETE_CORE_WITH_RESET_BEHAVIOR_V0_7**

### performanceCore
- 機械割: **96.9 / 98.1 / 99.8 / 102.6 / 105.2 / 112.3%**。
- BIG: **1/286.1 / 284.9 / 280.0 / 273.0 / 268.5 / 238.3**。
- REG: **1/451.9 / 431.1 / 409.6 / 344.9 / 287.4 / 238.3**。
- 合算: **1/175.2 / 171.5 / 166.3 / 152.4 / 138.8 / 119.1**。
- ベース: **約34G/50枚**。
- SUPER BONUS: **312枚固定** / REGULAR BONUS: **104枚固定**。
- BIG後RT「フルーツゲーム」: **30G**。
- RT純増/G: **UNVERIFIED_AFTER_RESEARCH**（K-Naviの「出玉を減らすことなく」は確認したが比較可能な厳密値を固定せず）。
- 通常時ゲーム数天井: **非搭載**。

### resetBehavior v0.7
- 通常時天井・AT/ART長期ゲーム数モード非搭載のため gameCounterReset / ceilingAfterReset は **NOT_APPLICABLE**。
- 設定変更専用短縮天井、朝一専用モード、高確/CZ、初当たり優遇: **NONE_CONFIRMED_AFTER_RESEARCH**。
- 据え置き/純電源OFF→ONで引き継ぐ通常時天井・長期モードはなし。
- BIG後30G RT途中など一時的内部状態の設定変更/据え置き/純電断契約は、表記・検索語・資料系統を変えて再探索したが本機固有の直接資料を固定できず **UNVERIFIED_AFTER_RESEARCH**。一般的な5号機A+RT挙動から推測しない。
- 有利区間: **NOT_APPLICABLE_5TH_GEN_PRE_5_9**。
- 本機固有のガックン・初期出目・役物・ランプ等による確定的変更判別: **NONE_CONFIRMED_AFTER_RESEARCH**。
- 公開朝一モード振り分け/短縮天井/一定G以内当選率: **NOT_APPLICABLE / NONE_CONFIRMED_AFTER_RESEARCH**。

### quality
- 2016-06-13グリーンべると当時記事で山佐発表、ノーマルA、SB312枚、REG104枚、SB後30G RT、8月下旬納品予定を確認。
- K-Navi、必勝本、P-WORLD、ALL7で2016-08-22導入を確認。
- 機械割とBIG/REG/合算は必勝本・P-WORLD・2-9伝説・ちょんぼりすたで一致。
- 約34G/50枚は2-9伝説・ちょんぼりすたで一致。
- 正式型式名/検定番号は十分な再探索後も固定できずUNVERIFIED。

## 2016-08-22群 — OPEN
登録済み:
- SLOTデッド オア アライブ5
- クイーンジャックネオ
- クレアの秘宝伝～眠りの塔とめざめの石～
- スーパープラネットデラックス

未処理候補:
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
1. 最新mainの README / mission v0.7 / INDEX / LATEST_HANDOFF / No.1003を再取得。
2. **1003件 / 2016-08-22群OPEN → パチスロ戦姫絶唱シンフォギア（SANKYO）**を次の未処理機として収集。
3. 続いて **仄暗い水の底から** を処理し、08/22同日群をメーカー横断再監査してCLOSED可否判定。
4. `Aさくらももこ劇場 ミラくるずきんちゃん` / `鉄拳2` はパチスロ機種単独で正体確認してから本線採否判定。
5. 遡及QAは `2006-03-27_golgo13-the-professional.md` から順次継続。
6. PARTIAL/UNVERIFIEDは表記・検索語・資料系統変更後のみ確定。競合は平均せずCONFLICT。

## 主要出典 — 取得日 2026-09-08
### No.1003 スーパープラネットデラックス
- グリーンべると / P-WORLD: https://news.p-world.co.jp/articles/8440/greenbelt
- パチ＆スロ必勝本: https://p.hisshobon.jp/machine/2781/1/59137
- K-Navi: https://p-kn.com/slot/2536/
- P-WORLD機種DB: https://www.p-world.co.jp/machine/database/8076
- 2-9伝説: https://29den.com/superplanetdx/
- ちょんぼりすた: https://chonborista.com/slot/yamasa-slot/21577/
- パチ7: https://pachiseven.jp/machines/4870/cutout/5
- ALL7: https://www.all7.jp/plans/index/2016/08

### 直前No.1002
- `docs/real_machine_db/machines/2016-08-22_claire-hihouden-nemuri-no-tou.md`
