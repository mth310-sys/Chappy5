# 実機DB 最新リレー引継ぎ

更新日: 2026-09-07

## 現在地点

- recordCount: **852**
- latestRecordAdded: **パチスロ バーストエンジェル**（山佐）— exact date CONFLICT / earliest database anchor 2014-10-06
- latestRecord: `docs/real_machine_db/machines/2014-10-06_pachislot-burst-angel.md`
- chronologicalFrontier: **2014-10-20**
- frontierLatestMachine: **スーパービンゴNEO**
- schema: **resetBehavior v0.7**
- status: **2014-10-20_GROUP_OPEN**

## 今回の同期 / 正本確認

- 最新mainの `README.md`、`docs/CHAPPY5_REAL_MACHINE_DATABASE_MISSION_V01.md`、`docs/real_machine_db/INDEX.md`、`docs/real_machine_db/LATEST_HANDOFF.md`、No.851 `2014-10-20_super-bingo-neo.md` を再読。
- INDEXは旧集約状態のため、README規定どおり **LATEST_HANDOFF + 実レコード** を進捗正本として使用。
- 作業開始時の正本は **851件 / frontier 2014-10-20 / 10-20_GROUP_OPEN**。
- No.851後の最優先候補だった「パチスロ バーストエンジェル」を処理したが、exact release date再監査で10/20単独扱いを訂正し、遡及バックフィルとして登録した。

## No.852 — パチスロ バーストエンジェル

- record: `docs/real_machine_db/machines/2014-10-06_pachislot-burst-angel.md`
- manufacturer: **山佐**。
- official archive: **5号機 / AT / 2014年10月稼働**。
- exact release date: **CONFLICT**。
  - K-Navi: **2014-10-06 ホール導入開始**。
  - 2014-10-08実ホール告知: **同日新台導入済み**。
  - ALL7: **2014-10-20導入予定**。
  - 複数の2014年10〜11月当時解析: **10/20導入**。
- 10/08実導入が確認できるため、10/20を全国一律の最初の実稼働日として固定しない。
- DBファイル日は現時点の最古具体日 **2014-10-06** を採用し、`CONFLICT_RELEASE_DATE_2014-10-06_VS_2014-10-20` を保持。
- chronologicalFrontierは後退させず **2014-10-20** のまま。
- 型式/数字形式検定番号は `UNVERIFIED_AFTER_RESEARCH`。

### 性能コア

- AT初当たり: **1/394.7 / 382.4 / 357.9 / 331.8 / 288.3 / 248.6**。
- 機械割: **96.2 / 98.7 / 100.1 / 104.5 / 109.1 / 113.5%**。
- CZ「四天使モード」: **1/287.5 / 277.1 / 251.0 / 231.8 / 210.1 / 185.4**（二次解析系列）。
- 50枚ベース: **約30.4G**（旧パチマガスロマガ現存解析）。
- AT「BURST RUSH」: **1セット50G + 継続バトル / 純増約2.7枚/G**。
- AT間天井: **974G+前兆**。
- 天井AT: **継続率60%以上**。当時解析の通常天井振り分け 60%:95 / 80%:4 / 90%:1 を保持。
- coreStatus: **COMPLETE_CORE**。

### resetBehavior v0.7

- 設定変更時: **AT間天井G RESET**。
- 設定変更時状態: **低確75% / 高確25%**。
- 朝一比較可能公開値として上記75/25を保存。
- 固定リセット短縮天井: **NONE_CONFIRMED_AFTER_RESEARCH**。
- 据え置き時のAT間G/状態引継ぎ: 本機固有の直接対照表を固定できず `UNVERIFIED_AFTER_RESEARCH`。
- 純電源OFF→ON時のAT間G/状態保持: `UNVERIFIED_AFTER_RESEARCH`。
- 本機固有ガックン等の変更判別: `UNVERIFIED_AFTER_RESEARCH`。
- 有利区間: `NOT_APPLICABLE_5TH_GEN_PRE_5_9`。
- resetBehaviorQA: **COMPLETE_WITH_SOURCE_LIMITS**。

## 重要境界訂正 — 2014-10-06 / 10-20

- 前回handoffではALL7を主アンカーにバーストエンジェルを10/20未処理候補としていた。
- 今回、K-Naviの10/06表記に加え、**2014-10-08時点で実ホール導入済み**の一次性が高い当時告知を確認。
- したがって10/06群の旧 `CLOSED_FOR_CURRENT_RESEARCH` は、バーストエンジェルの遡及バックフィルを受けて **CLOSED_WITH_LATE_BACKFILL_AND_DATE_CONFLICT** と読み替える。
- 10/07〜10/19境界も「未登録機ゼロ」と断定しない。少なくとも10/08の実導入例があるため、候補日付は資料の全国/地域/予定/実導入の差を分離する。

## 2014-10-20群 — OPEN

### 登録済み

- No.851 スーパービンゴNEO（ベルコ）— 2014-10-20。

### 10/20候補から遡及バックフィルへ移したもの

- No.852 パチスロ バーストエンジェル（山佐）— 10/06 vs 10/20 CONFLICT。10/20重複作成禁止。

### 次の強い未処理候補

1. **パチスロ カウボーイビバップ**（オリンピア）— K-Naviで **2014-10-20ホール導入開始**。

- ALL7 2014年10月一覧にはカウボーイビバップが見当たらず、ALL7単独では同日群が欠落し得ることを確認。
- 次回はカウボーイビバップを最優先で性能コア + resetBehavior v0.7収集。
- その後もK-Navi/P-WORLD/当時解析/メーカー別一覧を横断し、10/20群を閉じる前に未登録パチスロを再監査する。

## 遡及 resetBehavior QA — トレジャーパイレーツ

- record: `docs/real_machine_db/machines/2007-03-11_treasure-pirates.md`
- 既存 `coreStatus: COMPLETE_CORE` を維持。
- resetBehaviorをv0.7構造へ正規化し、`resetQaLastUpdated: 2026-09-07` を追加。
- 通常時天井/ゲーム数解除/朝一専用モードは今回も確認できず、該当項目は非該当/`NONE_CONFIRMED_AFTER_RESEARCH`。
- 赤7後100G、青7後50Gの完走型RTは複数資料で再確認。
- ただし **RT中の設定変更 / 純据え置き / 純電源OFF→ON時の残G数・内部RT状態処理**は、本機固有の直接資料を再探索しても固定できず `UNVERIFIED_AFTER_RESEARCH`。
- 本機固有のガックン等変更判別、公開朝一専用数値も未固定。
- resetBehaviorQA: **PARTIAL**を維持。性能COMPLETE_COREは崩さない。

## 遡及 resetBehavior QA カーソル

- 次: `docs/real_machine_db/machines/2007-03-19_kakumei-senshi-choshu-riki.md`（革命戦士長州力）。
- Treasure Piratesの次に新規作成された実レコードであることをGit履歴から確認。
- 新規本線を止めず、既存PARTIAL/COMPLETE_COREを1件ずつ再QAする。

## safeguard

- INDEXは旧集約状態なので進捗正本にしない。LATEST_HANDOFF + 実レコードを優先。
- exact release dateでは「導入予定」「全国導入」「地域先行」「実ホール導入済み」を区別する。
- バーストエンジェルは **10/06 vs 10/20 CONFLICT**。10/20機として重複登録しない。
- ALL7はパチンコ/パチスロ混在かつ機種欠落の可能性があるため、同日群閉鎖に単独使用しない。
- 「龍が如く 見参！天照祇園編」はパチンコ機であり本線へ追加しない。
- バーストエンジェルの設定変更時75/25は低確/高確の**状態**振り分けで、ゲーム数解除モード振り分けとして扱わない。
- 一般的な5号機AT/RTの電断挙動を本機固有契約として推定転記しない。
- 2015-06-08到達時の **吉宗～極～（ヨシムネH2A4 / 3S1093）** 正式量産版処理注意を維持。

## 次回再開地点

1. **recordCount 852 / chronologicalFrontier 2014-10-20 / 10-20_GROUP_OPEN** から開始。
2. 最新mainで README / mission / INDEX / LATEST_HANDOFF / No.851 / No.852を再確認。
3. 次の未処理は **パチスロ カウボーイビバップ（オリンピア）— 2014-10-20**。
4. 同機処理後、2014-10-20同日群をALL7以外も含め全メーカー横断で再監査。
5. 遡及QAは `2007-03-19_kakumei-senshi-choshu-riki.md` から再開。

## 主要出典 — 取得日 2026-09-07

### バーストエンジェル
- 山佐公式: `https://yamasa-next.co.jp/model_brt/`
- K-Navi: `https://p-kn.com/slot/2126/`
- P-WORLD: `https://www.p-world.co.jp/machine/database/7514`
- ALL7: `https://www.all7.jp/plans/index/2014/10`
- 実ホール当時告知（ジャンボ御山店）: `https://ameblo.jp/jumbo-oyama/`
- 旧パチマガスロマガ: `https://cs62.cs-plaza.com/g/pachi/pla/s_conq/yamasa_slot/199/c-1.php`
- すろぱちくえすと状態移行: `https://www.slopachi-quest.com/article/burst-angel-mode/`
- すろぱちくえすと天井: `https://www.slopachi-quest.com/article/burst-angel/`
- 真パチスロ備忘録: `https://sin-surobi.com/bsa/6411`
- P-Summa: `https://psumma.jp/pachislo/3570/`
- pacnk: `https://pacnk.com/slot/tools/sh_burstangel.html`
- GONZO: `https://www.gonzo.co.jp/2014/11/05/1520/`

### 次候補 — カウボーイビバップ
- K-Navi: `https://p-kn.com/slot/2130/`
- パチマガスロマガ: `https://cs62.cs-plaza.com/g/pachi/pla/s_conq/olympia_slot/117/a.php`

### トレジャーパイレーツ QA
- グリーンべると: `https://web-greenbelt.jp/00004042/`
- P-WORLD業界ニュース: `https://news.p-world.co.jp/articles/2026/greenbelt`
- P-WORLD機種DB: `https://www.p-world.co.jp/machine/database/4581`
- 5号機クロニクル: `https://5goki.com/kpe`
