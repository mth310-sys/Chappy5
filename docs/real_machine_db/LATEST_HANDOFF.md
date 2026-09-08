更新日: 2026-09-08

## 現在地点
- recordCount: **1000**
- latestRecordAdded: **SLOTデッド オア アライブ5**（ユニバーサルブロス）
- latestRecordAddedPath: `docs/real_machine_db/machines/2016-08-22_slot-dead-or-alive5.md`
- chronologicalFrontier: **2016-08-22**
- frontierLatestMachine: **SLOTデッド オア アライブ5**（ユニバーサルブロス）
- schema: **resetBehavior v0.7**
- status: **2016-08-22_GROUP_OPEN**

## 今回の同期 / 正本確認
- 最新mainの `README.md`、`docs/CHAPPY5_REAL_MACHINE_DATABASE_MISSION_V01.md`（v0.7）、`docs/real_machine_db/INDEX.md`、`LATEST_HANDOFF.md`、直前No.999 `2016-08-01_lupin-the-third-kesareta-lupin.md` を再取得して開始。
- INDEXは19件時点の旧集約なので、README規定どおり **LATEST_HANDOFF + 実レコード + 最新main** を進捗正本として使用。
- 開始時点の正本は recordCount **999** / chronologicalFrontier **2016-08-01** / `2016-08-01_GROUP_CLOSED_FOR_CURRENT_RESEARCH`。
- 既存性能値をやり直さず、08/02以降の境界監査から継続。

## 境界監査 2016-08-02～08-21
- 前handoffは、PiDEAの「5号機設置期限一覧」にある日付を根拠に **メタルギア ソリッド スネークイーター / 乱嵐エイサー-30 = 2016-08-08候補**としていた。
- 再監査の結果、この日付は全国初導入日正本として使用できない資料汚染と判定。
  - メタルギア ソリッド スネークイーター: PiDEAの2016-08-19当時記事が **納品10/16～** と明記。複数解析でも2016-10-17導入。
  - 乱嵐エイサー-30: K-Naviが **2016-09-20ホール導入開始**と明記。
- ALL7の2016-08-15「スーパー海物語」はパチンコCR系であり、本パチスロDB対象外。
- HAZUSEカレンダー、ALL7月次一覧、当時業界/解析記事を再横断したが、2016-08-02～08-21に全国初導入として追加すべき未登録パチスロを今回固定できなかったため、境界を `CLOSED_FOR_CURRENT_RESEARCH` 扱いとして08/22群へ前進。

## No.1000 — SLOTデッド オア アライブ5
- manufacturer: **ユニバーサルブロス**
- releaseDate canonical: **2016-08-22**
- formalModelName: **デッドオアアライブ5EK**
- certificationNumber: **6S0382**
- generation/system: **5号機 / 5.5号機期 / A+ART**
- recordStatus: **COMPLETE_CORE_WITH_RESET_BEHAVIOR_V0_7**

### performanceCore
- 機械割: **98.6 / 99.6 / 100.7 / 103.1 / 106.1 / 110.0%**。
- ART「霧幻RUSH」初当たり: **1/449.6 / 422.8 / 415.3 / 375.9 / 349.5 / 291.7**。
- BIG: 設定1 **1/963.8**、設定4 **1/910.2**、設定5 **1/862.3**、設定6 **1/819.2**。設定2/3の独立値は参照表で省略のため推測補完しない。
- ベース: **約37G/50枚**。設定1 37.3G / 設定4 37.2G / 設定5 37.1G / 設定6 37.0G。
- ART純増: **約1.74枚/G**（簡易資料は約1.7枚/G）。
- BIG: **約220枚**。
- ARTは霧幻JACナビ回数管理。平均継続目安は通常JAC約20G / 緑約30G / 赤約60G / 真約200G。
- ボーナス&ART間天井: **1199G**。CZ中ゲーム数は天井計算から除外。到達でα-BURST経由ART。

### resetBehavior v0.7
- 設定変更: **天井RESET / 内部状態再抽選**。朝一ステージはFS号。
- 据え置き: **天井CARRYOVER / 内部状態CARRYOVER**。
- 純電源OFF→ON: **天井CARRYOVER / 内部状態CARRYOVER**。
- 設定変更専用固定短縮天井: **NONE_CONFIRMED_AFTER_RESEARCH**。
- 当時解析ではリセット時に「特に強い挙動などは無し」。朝一確定CZ・専用初当たり優遇等は確認できず。
- FS号は通常ステージでもあるため、FS号開始だけを設定変更確定判別にはしない。
- 本機固有のガックン/初期出目/ランプによる確定判別: **NONE_CONFIRMED_AFTER_RESEARCH**。
- 有利区間: **NOT_APPLICABLE_5TH_GEN_PRE_5_9**。

### missing / conflicts
- 設定2/3の独立BIG確率は参照した性能表で省略。
- 設定変更時の内部状態別再抽選数値: **UNVERIFIED_AFTER_RESEARCH**。
- 本機固有の確定的変更判別: **NONE_CONFIRMED_AFTER_RESEARCH**。
- `FALSE_DATE_SOURCE_PIDEA_INSTALLATION_DEADLINE_LIST_2016_08_08`: PiDEA設置期限一覧の08/08表記を全国初導入日へ流用しない。

## 2016-08-22群 — OPEN
- 登録済み: **SLOTデッド オア アライブ5**。
- ALL7同日候補として少なくとも以下を確認:
  - **クイーンジャックネオ**（岡崎産業）
  - **クレアの秘宝伝～眠りの塔とめざめの石～**（大都技研）
  - **スーパープラネットデラックス**（山佐）
  - **パチスロ戦姫絶唱シンフォギア**（SANKYO）
  - **仄暗い水の底から**（藤商事）
- クイーンジャックネオはALL7、当時解析で2016-08-22一致、P-WORLDでノーマルタイプ/BIG312枚/REG104枚まで先行確認。次の本線先頭とする。
- 同日群は未完了なので `GROUP_OPEN` を維持。

## 遡及 resetBehavior QA
- retroQaScanConfirmedThrough: **2006-03-27_kengou-musashi.md**
- retroQaNextInspection: **2006-03-27_golgo13-the-professional.md**
- retroQaStatus: **SEQUENTIAL_SCAN_ACTIVE**
- 剣豪！武蔵は性能側 `COMPLETE_CORE` を維持。
- reset側のみ、設定変更/据え置き/純電源OFF→ON時の100G RT「巌流島GAME」残G・内部状態処理、本機固有変更判別を検索語・資料系統を変更して再探索。追加の直接根拠を固定できなかったため **PARTIAL_RESEARCH_EXHAUSTED** とした。

## 次回再開地点
1. 最新mainの README / mission v0.7 / INDEX / LATEST_HANDOFF / No.1000を再取得。
2. **1000件 / 2016-08-22群OPEN → クイーンジャックネオ**を次の未処理機として収集。
3. 続いて **クレアの秘宝伝～眠りの塔とめざめの石～ → スーパープラネットデラックス → パチスロ戦姫絶唱シンフォギア → 仄暗い水の底から**等の08/22群をメーカー横断監査。
4. 遡及QAは **`2006-03-27_golgo13-the-professional.md`**から順次継続。
5. PARTIAL/UNVERIFIEDは表記・検索語・資料系統変更後のみ確定。競合は平均せずCONFLICT。

## 主要出典 — 取得日 2026-09-08
### No.1000 SLOTデッド オア アライブ5
- K-Navi: https://p-kn.com/slot/2564/
- P-WORLD: https://www.p-world.co.jp/machine/database/8113
- PiDEA X 発表記事: https://www.pidea.jp/articles/%E3%80%8CSLOT%E3%83%87%E3%83%83%E3%83%89%20%E3%82%AA%E3%82%A2%20%E3%82%A2%E3%83%A9%E3%82%A4%E3%83%965%E3%80%8D%E3%82%92%E6%96%B0%E7%AD%90%E4%BD%93%E3%81%A7%E7%99%BA%E8%A1%A8%EF%BC%8F%E3%83%A6%E3%83%8B%E3%83%90%E3%83%BC%E3%82%B5%E3%83%AB
- ちょんぼりすた: https://chonborista.com/slot/universal-slot/22945/
- HAZUSE: https://hazuse.com/machine/pachislot/6S0382/
- スロット解析情報~すろかい~: https://slotkaiseki.hatenablog.com/entry/DEAD_OR_ALIVE5
- ALL7 2016年8月: https://www.all7.jp/plans/index/2016/08

### 境界監査 / 日付競合
- PiDEA X 5号機設置期限一覧: https://www.pidea.jp/articles/1620982702
- PiDEA X メタルギア評価記事（2016-08-19、納品10/16～）: https://www.pidea.jp/articles/%E3%80%8C%E3%83%A1%E3%82%BF%E3%83%AB%E3%82%AE%E3%82%A2%E3%82%BD%E3%83%AA%E3%83%83%E3%83%89%20%E3%82%B9%E3%83%8D%E3%83%BC%E3%82%AF%E3%82%A4%E3%83%BC%E3%82%BF%E3%83%BC%E3%80%8D%E3%81%AE%E8%A9%95%E4%BE%A1%E3%80%81%E6%84%9F%E6%83%B3%E3%80%82
- K-Navi 乱嵐エイサー-30: https://p-kn.com/slot/2591/
- ALL7 2016年8月: https://www.all7.jp/plans/index/2016/08

### 遡及QA 剣豪！武蔵
- ユニバーサル公式: https://www.universal-777.com/product/slot/kengou_musashi/
- パチマガスロマガ: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/eleco_slot/61/k.php
- パチマガスロマガ 通常時/RT: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/eleco_slot/61/c.php
- P-WORLD: https://www.p-world.co.jp/machine/database/4151
- ALL7 2006年3月: https://www.all7.jp/plans/index/2006/03
- pachinko's blog: https://pachinko.hatenablog.jp/entry/2006/03/kengou-musashi
