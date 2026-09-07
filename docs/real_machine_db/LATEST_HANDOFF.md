# 実機DB 最新リレー引継ぎ

更新日: 2026-09-08

## 現在地点

- recordCount: **916**
- latestRecordAdded: **パチスロ マクロスフロンティア2 Bonus Live ver.**（SANKYO）
- latestRecordAddedPath: `docs/real_machine_db/machines/2015-09-28_macross-frontier-2-bonus-live-ver.md`
- chronologicalFrontier: **2015-09-28**
- frontierLatestMachine: **パチスロ マクロスフロンティア2 Bonus Live ver.**
- frontierRecord: `docs/real_machine_db/machines/2015-09-28_macross-frontier-2-bonus-live-ver.md`
- schema: **resetBehavior v0.7**
- status: **2015-09-28_GROUP_CLOSED**

## 今回の同期 / 正本確認

- 最新mainの `README.md`、`docs/CHAPPY5_REAL_MACHINE_DATABASE_MISSION_V01.md`、`docs/real_machine_db/INDEX.md`、`LATEST_HANDOFF.md`、No.915 `2015-09-28_asuras-wrath.md` を再読。
- INDEXは19件時点の旧集約状態であることを再確認。README規定どおり **LATEST_HANDOFF + 実レコード** を進捗正本として使用し、旧INDEXは破壊的更新しない。
- 作業開始時handoffは **915件 / 2015-09-28 / 09-28_GROUP_OPEN**。
- 次の未処理機種 **「パチスロ マクロスフロンティア2 Bonus Live ver.」** をNo.916として追加し、mainから再取得して保存確認。
- 2015-09-28群を当時導入一覧・年次新台一覧・個別機種日付で再監査し、5号機本線は **無双OROCHI / アスラズ ラース / マクロスF2 Bonus Live ver.** の3機に収束。**GROUP_CLOSED**。

## No.916 — パチスロ マクロスフロンティア2 Bonus Live ver.

- record: `docs/real_machine_db/machines/2015-09-28_macross-frontier-2-bonus-live-ver.md`
- manufacturer: **SANKYO**
- systemType: **5号機 A+ART / CZ / ゲーム数上乗せ型ART**
- canonical releaseDate: **2015-09-28**
- release date note: SANKYO公式2015.09、K-Naviホール導入開始09-28、業界記事最短納品09-27、後年解析10-05導入表記を確認。09-28をchronological dateとし、10-05は地域先行/通常導入の工程差 `DATE_EVENT_DIFFERENCE` として保持。

### performanceCore

- 機械割: **97.2 / 98.5 / 100.5 / 103.7 / 107.8 / 112.1%**。
- ボーナス合成: **1/278 / 1/273 / 1/266 / 1/261 / 1/255 / 1/250**。
- ART初当り: **1/380 / 1/359 / 1/339 / 1/321 / 1/280 / 1/252**。
- ボーナス+ART: **1/161 / 1/155 / 1/149 / 1/144 / 1/133 / 1/125**。
- 50枚ベース: **約33G**。
- ART「バルキリータイム」: **約1.5枚/G、1セット40G以上**。
- ボーナス純増: 究極クラン/アルト **204枚**、シェリル/ランカ **120枚**。
- 天井: **ボーナス間999GでART確定**。ARTを挟んでもボーナス間カウントは継続。
- coreStatus: **COMPLETE_CORE**。

### resetBehavior v0.7

- 設定変更: **天井Gリセット / ARTテーブル再抽選 / 内部状態再抽選 / RT状態Aスタート**。
- 電源OFF→ON: **液晶G数は0Gになるが、設定変更しない限り内部G数は引き継ぐ**。ARTテーブルも引き継ぎ。
- 据え置き時天井: 当時の比較表が **調査中** のため、自動的にCARRYOVERへ固定せず `UNVERIFIED` を残す。
- 設定変更時状態振り分け:
  - 設定1: 低60 / 高30 / 超高10%
  - 設定2: 56 / 32 / 12%
  - 設定3: 52 / 34 / 14%
  - 設定4: 48 / 36 / 16%
  - 設定5: 44 / 38 / 18%
  - 設定6: 40 / 40 / 20%
- 設定変更時ARTテーブル: 設定1〜4 A49.50 / B49.50 / 天国1.00%、設定5 A49.25 / B49.25 / 天国1.50%、設定6 A49.00 / B49.00 / 天国2.00%。
- 有利区間: **NOT_APPLICABLE_5TH_GEN_PRE_5_9**。
- 変更判別: 電断だけでも液晶0Gになるため、**0G表示単独ではリセット判別不可**。ゾロ目以外の液晶G数からの前兆→ARTは内部G数ズレにより据え置き濃厚とする当時解析あり。
- resetBehaviorQA: **COMPLETE_WITH_UNVERIFIED_CARRYOVER_CEILING**。

## 2015-09-28群 — CLOSED

処理済み:
1. **パチスロ無双OROCHI** — 山佐 — No.914。
2. **アスラズ ラース** — エンターライズ — No.915。
3. **パチスロ マクロスフロンティア2 Bonus Live ver.** — SANKYO — No.916。

- HAZUSE新台カレンダー、2015年導入一覧、個別機種日付を横断し、9/28本線に追加すべき別5号機は今回確認できずCLOSED。

## resetBehavior 遡及QA進捗

- handoffカーソル `docs/real_machine_db/machines/2007-03-19_kakumei-senshi-choshu-riki.md` を実レコードで再確認。
- 同レコードはすでに `resetBehaviorQA: PARTIAL` を持ち、設定変更/据え置き/電源OFF→ON/天井/モード/変更判別/公開朝一数値について資料系統変更後の再探索メモも保存済み。
- `coreStatus: COMPLETE_CORE` は維持。resetBehavior欠損を理由に性能完了判定を崩さない。
- 今回は長州力を重複更新せず、**QA済みカーソルとして消化**。次回、時系列上で長州力より後ろにある最初の既存レコードを走査し、resetBehavior未収集機を次カーソルとして固定する。

## 次回再開地点

1. **recordCount 916 / chronologicalFrontier 2015-09-28 / 09-28_GROUP_CLOSED** から開始。
2. 次の本線は **2015-10-05群**。既知候補は **ルパン三世 ロイヤルロード / ベヨネッタ / Zゴールドインフィニティ / サイレントヒル / クジラッキー**。重複・導入日を再監査し、未処理先頭からNo.917として収集。
3. 2015-10-05群でも性能コア + resetBehavior v0.7を同時収集。
4. 遡及QAは長州力を再処理せず、**2007-03-19より後の最初の実レコード**を走査してresetBehavior欠損の有無を判定し、次カーソルを固定。
5. PARTIAL / UNVERIFIEDは機種名揺れ・型式・メーカー・設定変更/朝一/据え置き/宵越し/電断/天井/モード/ガックン等を組み替え、公式・業界・当時解析・古いDB・回顧資料を再探索する。

## safeguard

- INDEXは旧集約状態なので進捗正本にしない。LATEST_HANDOFF + 実レコードを優先。
- main先行レコードを発見した場合は重複作成しない。
- `COMPLETE_CORE` と `resetBehaviorQA` を別管理する。
- 設定変更・据え置き・純電断を自動で同義扱いしない。
- 前作/後継機・同メーカー他機のresetBehaviorを流用しない。
- 競合資料は平均せず `CONFLICT`、工程差は `DATE_EVENT_DIFFERENCE` として保持。
- 検定告示 / 発表 / 納品 / 地域先行 / 全国導入を分離する。

## 主要出典 — 取得日 2026-09-08

### No.916 マクロスフロンティア2 Bonus Live ver.
- SANKYO公式: https://www.sankyo-fever.jp/collection/619/
- パチマガスロマガ確率/PAYOUT: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/sankyo_slot/37/h.php
- パチマガスロマガRT状態: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/sankyo_slot/37/c.php
- パチ＆スロ必勝本 状態移行: https://p.hisshobon.jp/machine/2629/1/54181
- ちょんぼりすた: https://chonborista.com/slot/sankyo-slot/10836/
- すろぱちくえすと: https://www.slopachi-quest.com/article/macross2-blv-reset/
- K-Navi: https://p-kn.com/slot/2321/odds/
- P-WORLD機種DB: https://www.p-world.co.jp/machine/database/7807
- グリーンべると/P-WORLD業界ニュース: https://news.p-world.co.jp/articles/7774/greenbelt
- HAZUSE新台カレンダー: https://hazuse.com/new-machine-calendar/newmachine-calendar/
- 2015年導入一覧: https://www.slopachi-quest.com/article/2015-new/

## confidence

- exactReleaseDate: **ANALYSIS_HIGH_MULTI_SOURCE_WITH_DATE_EVENT_DIFFERENCE**
- performanceCore: **ANALYSIS_HIGH_MULTI_SOURCE**
- bonusPayout / ART net: **OFFICIAL**
- settingChangeBehavior: **ANALYSIS_HIGH_MULTI_SOURCE**
- purePowerCycleBehavior: **ANALYSIS_HIGH_MULTI_SOURCE**
- carryOverCeilingBehavior: **UNVERIFIED / SOURCE_EXPLICITLY_INVESTIGATING**
- advantageousSectionReset: **NOT_APPLICABLE**
- resetDetection: **ANALYSIS**
- retroResetQA: **CURSOR_2007-03-19_CONFIRMED_ALREADY_QA_PARTIAL; NEXT_RECORD_SCAN_PENDING**
