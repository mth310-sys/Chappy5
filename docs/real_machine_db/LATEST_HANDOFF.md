# 実機DB 最新リレー引継ぎ

更新日: 2026-09-04

## 現在地点

- recordCount: **507**
- latestMachineAdded: **パチスロスパイダーマン3**（サミー / 2010-09-06）
- latestRecord: `docs/real_machine_db/machines/2010-09-06_pachislot-spider-man-3.md`
- chronologicalFrontier: **2010-09-06**
- frontierLatestMachine: **パチスロスパイダーマン3**
- schema: **resetBehavior v0.7**
- status: **READY_TO_CONTINUE**

## 今回の継続確認

- 最新mainの `README.md`、正本ミッション `docs/CHAPPY5_REAL_MACHINE_DATABASE_MISSION_V01.md` v0.7、`INDEX.md`、`LATEST_HANDOFF.md`、前線506実レコード「マイジャグラー」を再取得。
- `INDEX.md` は旧19件地点のため、README規定どおり最新 `LATEST_HANDOFF.md`＋main実レコードを進捗正本として使用。
- 開始時正本地点は recordCount **506** / chronologicalFrontier **2010-09-06**。
- LATEST_HANDOFFが同日群の最優先未処理候補として指定した「パチスロスパイダーマン3」をrepo検索し、未登録を確認して507件目として追加。
- K-Naviがホール導入開始2010-09-06を明記。2010-07-20グリーンべると発表記事は9月上旬納品開始予定で時期整合。
- 同日群はまだ完全には閉じず、次回もう一段K-Navi/P-WORLD/HAZUSE/パチビー/当時業界記事で9/6全候補を監査してから9/7以降へ進む。

## 507 — パチスロスパイダーマン3 要約

- メーカー: **サミー**
- 導入: **2010-09-06**
- 世代/タイプ: **5号機 / A+ART / 押し順ART**
- BIG: **1/595.78 / 1/574.88 / 1/537.18 / 1/508.03 / 1/478.36 / 1/439.84**
- MB: **BIGと同値**
- ボーナス合算: **1/297.89 / 1/287.44 / 1/268.59 / 1/254.02 / 1/239.18 / 1/219.92**
- ART「アクロバティックゾーン」: **50G / 約+1.0枚/G**
- ART「クライムチャレンジ」: 継続G数不定 / **約+1.0枚/G**
- BIG **MAX306枚**（解析上約303枚）、MB **MAX162枚**（解析上約160枚）。MAX値と解析純増値は定義を分離。
- 通常天井: **ボーナス間1200G**。到達後はチェリー成立（約1/45）ごとにART2個以上当選、ボーナス成立まで反復上乗せ可能。
- 50枚ベース: 検索語/資料系統を変えて再探索したが比較可能な直接値を確定できず **UNVERIFIED_AFTER_RESEARCH**。
- coreStatus: **COMPLETE_CORE_RESET_BEHAVIOR_PARTIAL_BASE_UNVERIFIED_PAYOUT_CONFLICT**

## payout CONFLICT

### P-WORLD/K-Navi公称系列
- **97.0 / 98.7 / 101.3 / 106.8 / 112.3 / 119.99%**

### パチマガスロマガ・シミュレート
- **97.71 / 99.63 / 102.62 / 106.94 / 112.75 / 119.99%**

設定1〜5は平均化せずCONFLICT保持。設定6は119.99%で一致する系列あり。

## resetBehavior v0.7 — パチスロスパイダーマン3

- **設定変更**: 旧解析で **「高確＋周期CZ」スタート**を直接確認。朝一恩恵として保存。
- **ゲーム数/天井**: 通常天井はボーナス間1200Gで複数資料一致。ただし **設定変更時に1200Gカウンタがクリアされるか/引き継ぐかは直接確定できず UNVERIFIED_AFTER_RESEARCH**。当時旧解析自身も当該点を「調査中」としているため、推測部分は採用していない。
- **据え置き**: 1200G天井進捗、高確/周期CZ、ARTストックの直接引継ぎ仕様を高信頼本機資料で確定できず `UNVERIFIED_AFTER_RESEARCH`。
- **電源OFF→ON**: 天井進捗、高確/周期CZ、ARTストック/AT待機状態の復帰処理は `UNVERIFIED_AFTER_RESEARCH`。
- **モード/状態**: 設定変更後の高確＋周期CZスタートは単一旧解析で確認。正確な振り分け率/継続G数は未確定。
- **有利区間**: **NOT_APPLICABLE**（5号機・制度前）。
- **朝一恩恵**: 高確＋周期CZスタート。
- **朝一不利**: 天井進捗消失はカウンタ処理自体が未確定のため断定せず。
- **変更判別**: 当時系解析の実戦記述で「ガックンなし（無対策ホール）」を変更推測材料として使用していたことは確認。ただし発生条件/確率/非ガックン時の判別精度は未確定のため確定判別には使わない。
- **公開朝一数値**: 設定変更専用のモード振り分け、恩恵率、短縮天井数値は今回確定できず。高確＋周期CZスタートという定性的情報のみ直接回収。

## 資料競合監査

- 後年5号機クロニクルは本機を「2010/8・BIG約204枚/REG約48枚・ART約+1.4枚/G」と整理しているが、2010年当時グリーンべると、K-Navi、P-WORLD、パチマガスロマガが一致する **2010-09-06 / BIG約303〜306枚 / MB約160〜162枚 / ART約+1.0枚/G** と大幅不一致。
- 別機/後年整理混同の可能性が高いため、当時複数資料を主値として採用し、5号機クロニクル値は平均化せず競合注記のみ保存。

## resetBehavior 遡及QA — 継続地点

- `2006-11_jack-to-mamenoki.md` までv0.7遡及追加済み、という既存正本進捗を維持。
- `2006-11-27_thunder-v-special.md` は既にresetBehaviorありのため重複QAしない。
- ジャックと豆の木直後かつresetBehavior欠損の最初の実レコードは、次回以降recursive tree / commit history / 実ファイルpathで順序を確定してからパッチする。
- 新規機種の時系列前進は止めない。

## 主要出典（取得日 2026-09-04）

### パチスロスパイダーマン3
- グリーンべると: `https://web-greenbelt.jp/00002740/`
- K-Navi本機: `https://p-kn.com/slot/1256/`
- K-Navi 2種類ART: `https://p-kn.com/slot/1256/26571/`
- P-WORLD: `https://www.p-world.co.jp/machine/database/6048`
- パチマガスロマガ 基本システム: `https://cs62.cs-plaza.com/g/pachi/pla/s_conq/sammy_slot/125/a.php`
- パチマガスロマガ ボーナス/PAYOUT: `https://cs62.cs-plaza.com/g/pachi/pla/s_conq/sammy_slot/125/h.php`
- パチマガスロマガ 機種INDEX: `https://cs62.cs-plaza.com/g/pachi/pla/s_conq/sammy_slot/125/sammy_slot_125.php`
- slot-navi当時系解析: `https://slot-navi.com/10/spiderman3/`
- PachiSeven回顧: `https://pachiseven.jp/articles/detail/14268`
- 5号機クロニクル（競合監査のみ）: `https://5goki.com/sammy`

## 今回のGitHub更新

- 507 パチスロスパイダーマン3追加: commit `bcaf8df6cd93616b6587ca44640f2bed3d1498db`
- LATEST_HANDOFF更新: このコミット

## 次回再開地点

1. **recordCount 507 / chronologicalFrontier 2010-09-06**。開始時は必ず最新mainのREADME / mission / INDEX / LATEST_HANDOFF / 前線実レコードを再取得。
2. **2010-09-06同日群を最終監査**。K-Navi/P-WORLD/HAZUSE/パチビー/当時業界記事・月間導入一覧を横断し、マイジャグラー/スパイダーマン3以外の未登録パチスロがないか確認する。
3. 同日群を閉じられた場合のみ **2010-09-07以降**を時系列監査し、最古の未登録機を508件目として性能コア＋resetBehavior v0.7収集する。9月中旬〜下旬候補は月間一覧を正として具体導入日を再確定してから採用する。
4. 507の追加QAは、設定変更時1200G天井カウンタ処理、据え置き/単純電源OFF→ON、高確＋周期CZの正確な公開数値、50枚ベース、型式/検定番号の一次または当時高信頼直接資料が見つかった場合のみ追補。推測で埋めない。
5. 遡及QAは `2006-11_jack-to-mamenoki.md` 直後の実ファイルpath確定から再開し、既にresetBehavior済みの `2006-11-27_thunder-v-special.md` はスキップする。
