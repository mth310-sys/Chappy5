# 実機DB 最新リレー引継ぎ

更新日: 2026-09-06

## 現在地点

- recordCount: **716**
- latestMachineAdded: **メタルスラッグ3**（SNKプレイモア）
- latestRecord: `docs/real_machine_db/machines/2013-02-18_metal-slug-3.md`
- chronologicalFrontier: **2013-02-18**
- frontierLatestExactDateMachine: **メタルスラッグ3**
- schema: **resetBehavior v0.7**
- status: **OPEN_2013-02-18_GROUP__NEXT_VAN_HELSING_HUNTING_RUSH**

## 今回の同期

- 最新mainの `README.md`、`docs/CHAPPY5_REAL_MACHINE_DATABASE_MISSION_V01.md`（v0.7）、`docs/real_machine_db/INDEX.md`、`LATEST_HANDOFF.md`、直前最新レコード `2013-02-18_sky-girls-yoroshiku-zero.md` を確認。
- `INDEX.md` は19件地点の旧集約状態のため、README規定どおり最新 `LATEST_HANDOFF.md` と実レコードを直近進捗の正本として優先。
- 開始時main正本は recordCount **715** / chronologicalFrontier **2013-02-18** / 02-18群OPEN / 次候補メタルスラッグ3。
- repo検索でメタルスラッグ3未登録を確認し、**716件目: メタルスラッグ3（SNKプレイモア）** を追加。

## 今回追加 — メタルスラッグ3

### 性能コア

- releaseDate: **2013-02-18**。K-Navi、パチビー、HAZUSEで一致。グリーンべるとは2013-02-06記事で2月17日から納品と報道。
- 型式名: **メタルスラッグ3C** / 検定番号 **2S1023**。
- systemType: **5号機 / ボーナス非搭載ART / 規定ゲーム数管理+自力契機 / G数上乗せ+セットストック**。
- 機械割主系列: **96.7 / 98.3 / 99.9 / 104.2 / 108.5 / 113.1%**（P-WORLD、パチマガスロマガ、5号機クロニクル一致）。
- ART初当たり: **1/278.89 / 1/270.61 / 1/256.64 / 1/218.25 / 1/206.48 / 1/187.34**。
- ART合成（1G連込み）: **1/129.41 / 1/127.42 / 1/119.76 / 1/105.54 / 1/95.21 / 1/84.79**。
- 50枚ベース: パチマガスロマガの **30.02～31.38G/1000円**。当時別解析は約30.0G/1000円で整合。
- ART「メタスラッシュ」: **1セット40G+α / 純増約+2.3枚/G**。
- 通常モード: **通常A最大999G / 通常B最大768G / 天国最大128G**。最大999G到達はART+1G連5個。

### resetBehavior v0.7

- 設定変更時: **天井消化Gクリア / 内部モード再抽選 / 規定G再セット**。内部状態も設定変更時に移行抽選ありとの当時解析。
- 設定変更後モード公開値:
  - 設定1～3: **通常A30% / 通常B50% / 天国20%**。
  - 設定4～6: **通常A20% / 通常B50% / 天国30%**。
- 固定短縮天井ではないが、全設定で通常B50%のため最大768Gとなる朝一比率が高く、設定4～6は天国30%。
- 設定変更時も電源OFF→ONのみでも液晶は **ジャングルステージ開始**との当時資料があり、表示単独では変更判別に不向き。
- 電源OFF→ONについて **ART中は引継ぎ**の記載を確認。ただし通常時天井G・通常モード・通常内部状態の保持契約は直接確定できず **UNVERIFIED_AFTER_RESEARCH**。
- 純据え置き時の通常時天井G・モード・状態保持も、資料系統を変えた再探索後も直接確定できず **UNVERIFIED_AFTER_RESEARCH**。
- 本機固有のガックン等変更判別は **UNVERIFIED_AFTER_RESEARCH**。
- `advantageousSectionReset`: **NOT_APPLICABLE_5TH_GEN**。

### CONFLICT / 品質注記

- 機械割はP-WORLD / パチマガスロマガ / 5号機クロニクルの **96.7 / 98.3 / 99.9 / 104.2 / 108.5 / 113.1%** に対し、2013年当時の天井ハイエナ生活が **97.0 / 98.6 / 100.3 / 104.6 / 109.0 / 113.6%**。平均せず `CONFLICT_PAYOUT_SERIES` として両系列保持。
- LackLuckLifeのART基本50G表記は、グリーンべると・K-Navi・P-WORLD・パチビー・パチマガスロマガの40G+αと競合。多数一致の40G+αを主値、50Gを `CONFLICT_SINGLE_SECONDARY_APPARENT_SPEC_ERROR` として保持。
- パチマガスロマガ検索インデックスの一部には先頭桁崩れがあるため、同サイト詳細ページと複数別資料で補正確認した。

## 2013-02-18同日群監査

K-Navi 2013年2月新台カレンダーの全国一斉導入開始日ベースで2013-02-18パチスロは以下3機種:

1. スカイガールズ～よろしく！ゼロ～（TAKASAGO） — **715件目 / 登録済み**。
2. メタルスラッグ3（SNKプレイモア） — **716件目 / 今回登録**。
3. ヴァン・ヘルシング ハンティングラッシュ（藤商事） — **次回処理**。

- 02-18群は **OPEN**。
- repo検索で「ヴァン・ヘルシング ハンティングラッシュ」は現時点未登録。
- その後02-18群残存監査を行いCLOSED判定し、02-19～02-24境界監査 → 02-25群へ進む。

## 次回再開地点

1. **recordCount 716 / chronologicalFrontier 2013-02-18 / 02-18群OPEN** から開始。
2. **2013-02-18「ヴァン・ヘルシング ハンティングラッシュ」（藤商事）** を性能コア+resetBehavior v0.7で収集。最新mainで重複再確認してから追加。
3. 02-18群残存監査後にCLOSED。
4. 02-19～02-24境界監査後、未登録がなければ02-25群へ進む。
5. 欠損は表記揺れ・型式名・メーカー・シリーズ名と「設定変更/リセット/朝一/据え置き/電源OFF ON/天井短縮/モード/状態/ガックン/有利区間」を組み替え、公式・業界・当時解析・古いDB・アーカイブ・回顧資料を横断後のみUNVERIFIED。競合は平均せずCONFLICT。

## 遡及resetBehavior QA 進捗

- 本線と別のQA再開地点: `docs/real_machine_db/machines/2007-01_karate-baka-ichidai.md`。
- 新規本線を止めず、QAリレーで継続。

## 主要出典 — 取得日 2026-09-06

### メタルスラッグ3
- グリーンべると: `https://web-greenbelt.jp/00000778/`
- K-Navi: `https://p-kn.com/slot/1796/`
- パチビー: `https://www.pachibee.jp/machines/index/213010008`
- HAZUSE: `https://hazuse.com/machine/pachislot/2S1023/`
- P-WORLD: `https://www.p-world.co.jp/machine/database/6981`
- パチマガスロマガ スペック: `https://cs62.cs-plaza.com/g/pachi/pla/s_conq/snk_slot/43/a.php`
- パチマガスロマガ ボーナス確率/PAYOUT詳細: `https://cs62.cs-plaza.com/g/pachi/pla/s_conq/snk_slot/43/h-1.php`
- パチマガスロマガ 小役/1000円あたりゲーム数: `https://cs62.cs-plaza.com/g/pachi/pla/s_conq/snk_slot/43/c.php`
- パチマガスロマガ ARTフロー: `https://cs62.cs-plaza.com/g/pachi/pla/s_conq/snk_slot/43/l.php`
- 天井ハイエナ生活 解析/朝一設定変更: `https://macerate.seesaa.net/article/323688647.html`
- 天井ハイエナ生活 設定変更後モード/期待値: `https://macerate.seesaa.net/article/351532215.html`
- 5号機クロニクル: `https://5goki.com/snkplaymore`
- LackLuckLife（競合確認のみ）: `https://l-l-life.com/33120286/`
