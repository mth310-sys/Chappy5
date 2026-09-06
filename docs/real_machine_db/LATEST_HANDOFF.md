# 実機DB 最新リレー引継ぎ

更新日: 2026-09-06

## 現在地点

- recordCount: **765**
- latestMachineAddedByChronology: **デビル メイ クライ 4**（エンターライズ）
- latestRecord: `docs/real_machine_db/machines/2013-09-17_devil-may-cry-4.md`
- chronologicalFrontier: **2013-09-17**
- frontierLatestExactDateMachine: **デビル メイ クライ 4**
- schema: **resetBehavior v0.7**
- status: **OPEN_2013-09-17_GROUP__NEXT_LIBERTY_BELL_V**

## 今回の同期 / 重要事項

- 最新mainの `README.md`、`docs/CHAPPY5_REAL_MACHINE_DATABASE_MISSION_V01.md`（v0.7）、`docs/real_machine_db/INDEX.md`、`LATEST_HANDOFF.md`、直前レコード `2013-09-17_bomber-powerful-ii.md` を読んでから継続。
- INDEXは旧集約状態（19件表記）のため、README規定どおり **LATEST_HANDOFF + 実レコード** を正として扱う。
- 開始時正本は recordCount **764** / chronologicalFrontier **2013-09-17** / 09-17群OPEN。
- handoff先頭候補 **デビル メイ クライ 4（エンターライズ）** は同名レコード不在を確認し、765件目として新規登録。
- 09-17同日群は **リバティベルV（アクロス）** が未登録候補として残るためOPEN維持。その他同日候補も次回メーカー横断で再監査する。

## 今回追加 — デビル メイ クライ 4

### identity / 性能コア

- manufacturer: **エンターライズ**。
- releaseDate: **2013-09-17**。K-Navi・DMMぱちタウンで一致。
- 型式: **デビルメイクライ4 覚醒YA**（DMMぱちタウン掲載）。
- generation/system: **5号機 / A+ART / ボーナス+自力高確CZ / ゲーム数上乗せART**。
- 機械割: **97.1 / 98.2 / 100.2 / 103.1 / 107.6 / 113.3%**。
- ボーナス合成: **1/266.4 / 264.3 / 260.1 / 256.0 / 250.1 / 242.7**。
- ART初当たり: **1/339.1 / 316.1 / 317.7 / 286.0 / 273.3 / 216.1**。
- 1000円ベース: **30.3G**。
- ART「DEVIL RUSH」: **純増約2.1枚/G、40/80/120G+α**。
- 基本獲得: ジャックポット/エネミーアタックバースト **約130枚**、エネミーアタック/セイバーアタック **約65枚**。
- 天井: **ボーナス(RT)終了後999G**でART当選。666GもST確定だが通常ゲーム性のゾーンとして分離。
- 通常時ART抽選状態: **低確 / 高確 / 超高確 / 魔人**。
- recordStatus: **COMPLETE_CORE_WITH_RESET_BEHAVIOR_RESEARCHED**。

### resetBehavior v0.7

- 設定変更時:
  - 天井までのゲーム数 **クリア**。
  - ART抽選状態 **再抽選**。
  - 液晶ステージ **市街地**。
- 電源OFF→ONのみ:
  - 天井までのゲーム数 **引き継ぐ**。
  - ART抽選状態 **引き継ぐ**。
  - 液晶ステージ **市街地**。
- 設定変更時と電断時で初期液晶が同じため、**市街地開始だけでは変更判別不可**。
- 設定変更後の公開朝一数値として **設定6は62%で高確以上スタート**を取得。
- 設定1～5を含む完全な状態振り分け表は取得本文が画像表中心で安全に文字回収できず `UNVERIFIED_FOR_EXACT_FULL_TABLE`。
- 純据え置きを独立して列挙した本機固有契約は今回固定できず `UNVERIFIED_AFTER_RESEARCH`。ただし電源OFF→ONのみのKEEP契約は直接取得。
- 設定変更専用短縮天井: **NONE_CONFIRMED_AFTER_RESEARCH**。
- 有利区間: **NOT_APPLICABLE_5TH_GEN**。
- ガックン/初期出目/ランプ等の本機固有判別: **UNVERIFIED_AFTER_RESEARCH**。

### safeguards

- 2025年スマスロ「デビル メイ クライ5 スタイリッシュトライブ」、2021年「デビル メイ クライ5」、2018年パチンコDMC4の情報を別機種として除外。
- 現時点で性能コア主要値に実質的CONFLICTなし。

## 境界監査

### 2013-09-17同日群

- **パチスロ ボンバーパワフルII（SANKYO）** — 登録済み #764。
- **デビル メイ クライ 4（エンターライズ）** — 今回登録 #765。
- **リバティベルV（アクロス）** — K-Naviで2013-09-17導入候補、未登録。次回最優先。
- その他同日候補は次回全メーカー横断で再監査。
- **2013-09-17群: OPEN**。

## 遡及resetBehavior QA 進捗

- QAカーソルは `2007-01_karate-baka-ichidai.md` の次の実ファイル順を維持。
- 今回は本線765件目を優先し、QAカーソルは前進させていない。
- 既存 `COMPLETE_CORE` / `PARTIAL` 等の性能側完了判定は変更していない。

## 次回再開地点

1. **recordCount 765 / chronologicalFrontier 2013-09-17 / 09-17群OPEN** から開始。
2. まず **2013-09-17「リバティベルV」（アクロス）** の重複確認 → 性能コア + resetBehavior v0.7を収集し、766件目候補として処理。
3. 続いて09-17同日群を全メーカー横断で監査し、漏れがなければCLOSED判定へ進む。
4. 導入日・納品日・検定日・記事公開日・業界機材更新日を分離して保持。
5. 遡及QAは `2007-01_karate-baka-ichidai.md` 直後の実ファイル順から、最初のresetBehavior欠損機を確定して補完。

## 主要出典 — 取得日 2026-09-06

### デビル メイ クライ 4

- K-Navi: `https://p-kn.com/slot/1914/` — 導入2013-09-17、エンターライズ、ART純増約2.1枚/G、基本獲得。
- DMMぱちタウン: `https://p-town.dmm.com/machines/968` — 型式、導入日、機械割、999G天井、設定変更/電源OFF→ON契約、設定6高確以上62%。
- パチマガスロマガ ボーナス確率: `https://cs62.cs-plaza.com/g/pachi/pla/s_conq/enterrise_slot/07/h.php` — 設定別ボーナス合成/ART初当たり/PAYOUT。
- パチマガスロマガ 小役確率: `https://cs62.cs-plaza.com/g/pachi/pla/s_conq/enterrise_slot/07/c.php` — 1000円30.3G。
- パチマガスロマガ 基本情報: `https://cs62.cs-plaza.com/g/pachi/pla/s_conq/enterrise_slot/07/a.php` — ART/ボーナス基本性能。
- 必勝本 状態移行抽選: `https://p.hisshobon.jp/machine/2268/1/41840` — 低確/高確/超高確/魔人、設定変更後の状態移行抽選。
- 必勝本 ST: `https://p.hisshobon.jp/machine/2268/1/41687` — ボーナス間999G天井→ART確定ST。
- 必勝本 ART: `https://p.hisshobon.jp/machine/2268/1/41688` — 純増約2.1枚/G、初期40/80/120G。
- 5号機クロニクル: `https://5goki.com/enterrise` — 2013/9、機械割系列を照合。

### 次候補

- K-Navi「リバティベルV」: `https://p-kn.com/slot/1909/` — ホール導入開始2013-09-17。

## commits

- 765th record add: `1e25907c17926f16d7e4993cc4382e16b290a461` (`db: add Devil May Cry 4 with resetBehavior v0.7`)
- handoff update: current run (`db: advance relay to Devil May Cry 4`)
