# 実機DB 最新リレー引継ぎ

更新日: 2026-09-07

## 現在地点

- recordCount: **849**
- latestRecordAdded: **パチスロ三國志**（ニューギン）— 2014-10-06
- latestRecord: `docs/real_machine_db/machines/2014-10-06_pachislot-sangokushi.md`
- chronologicalFrontier: **2014-10-06**
- frontierLatestMachine: **パチスロ三國志**
- schema: **resetBehavior v0.7**
- status: **2014-10-06_GROUP_OPEN**

## 今回の同期 / 正本確認

- 最新mainの `README.md`、`docs/CHAPPY5_REAL_MACHINE_DATABASE_MISSION_V01.md`、`docs/real_machine_db/INDEX.md`、`docs/real_machine_db/LATEST_HANDOFF.md`、No.848 `2014-10-06_cinderella-blade-2.md` を再読。
- INDEXは旧集約状態（19件表示）のため、README規定どおり **LATEST_HANDOFF + 実レコード** を進捗正本として使用。
- 作業開始時の正本は **848件 / 2014-10-06 / 10-06_GROUP_OPEN**。
- handoff指定の次未処理 No.849 **パチスロ三國志**を追加。
- machine record commit: `ab6e9975033b0f922b6ef6dce9e84fda78efcded`。

## No.849 — パチスロ三國志

- record: `docs/real_machine_db/machines/2014-10-06_pachislot-sangokushi.md`
- manufacturer: **ニューギン**。
- hall start: **2014-10-06**。パチスロ必勝本、パチ7、ALL7で一致。2014年9月にニューギン直営店先行稼働あり。
- 型式名: **パチスロ三國志X**。数字形式検定番号は `UNVERIFIED_AFTER_RESEARCH`。
- system: **5号機 AT / ゲーム数解除 + CZ / ゲーム数上乗せ + セットストック**。
- AT初当たり: **1/288.57 / 1/279.50 / 1/267.03 / 1/246.91 / 1/219.03 / 1/194.78**。パチマガスロマガ、必勝本、当時ホール系記事で一致。pacnkの設定1だけ1/228.6のためCONFLICT保持。
- 50枚ベース: **32.82G/50枚**。
- AT純増: **約2.8枚/G**。
- AT「英傑乱舞」: **1セット30G+α**。
- 機械割は資料系列差を平均せずCONFLICT:
  - パチマガスロマガ: **97 / 98 / 100 / 102 / 106 / 110%**
  - パチスロ必勝本: **97.7 / 98.7 / 100.2 / 102.8 / 106.7 / 110.7%**
- 天井/最大規定Gも定義差候補を保持:
  - モード別整理: 通常A 950G / 通常B 950G / 通常C 1150G / 天国50G / 超天国1G / 引き戻し250G
  - 別資料: AT終了後 約1200G
  - 1150G+前兆等の同一定義とは断定せず `CONFLICT_OR_DEFINITION_DIFFERENCE_CEILING_1150_MODE_C_VS_APPROX_1200`。

## resetBehavior v0.7 — パチスロ三國志

- パチマガスロマガ現存機種トップに本機専用 **「朝イチ・設定変更」**項目があることまでは確認。
- しかし現存検索インデックスから当該本文の具体契約を安全に復元できず、表記揺れ/型式/メーカー/シリーズ名と `設定変更 / リセット / 朝一 / 据え置き / 電源OFF ON / 電断 / 天井短縮 / モード / ガックン` を組み替え、P-WORLD、パチマガスロマガ、パチ7、必勝本、旧攻略DB、当時ホール記事、回顧資料まで横断後に判定。
- 設定変更時の規定G進捗、モード/状態再抽選: **UNVERIFIED_AFTER_RESEARCH**。
- 据え置き時の天井/モード/状態保持: **UNVERIFIED_AFTER_RESEARCH**。
- 設定変更なし純電源OFF→ON: **UNVERIFIED_AFTER_RESEARCH**。
- 設定変更専用短縮天井: **NONE_CONFIRMED_AFTER_RESEARCH**。
- 設定変更専用初期モード振り分け/朝一当選率/CZ率等の公開数値: **NONE_CONFIRMED_AFTER_RESEARCH**。
- 本機固有ガックン/表示等の変更判別: **NONE_CONFIRMED_AFTER_RESEARCH**。
- 有利区間: **NOT_APPLICABLE_5TH_GEN_PRE_5_9**。
- 旧IGTジャパンの別機種「三國志」に存在する「設定変更後CZスタート」情報は別機種なので転記禁止。
- resetBehaviorQA: **COMPLETE_WITH_SOURCE_LIMITS**。

## 2014-10-06群 — OPEN

### 登録済み/重複禁止

- No.848 シンデレラブレイド2（ネット）
- No.849 パチスロ三國志（ニューギン）
- 戦律のストラタス: 2014-09-29新潟先行としてNo.846登録済み。10/06全国稼働日で重複作成しない。
- バビロン(with桜丘ショコラ): No.847で09-29/10-06日付CONFLICT管理済み。10/06に重複作成しない。

### 同日未処理の強い候補

1. **パチスロ大海物語with T-ARA**（三洋物産）

- K-Navi/パチビーで2014-10-06導入、グリーンべると2014-08-04記事は10月6日より納品開始予定。
- この機種を処理後、10/06同日群をALL7・メーカー別一覧・業界記事・古いDBで最終監査し、漏れがなければ `2014-10-06_GROUP_CLOSED_FOR_CURRENT_RESEARCH` へ進める。

## 遡及 resetBehavior QA カーソル

- 次: `docs/real_machine_db/machines/2007-03-11_treasure-pirates.md`（トレジャーパイレーツ）。
- 新規本線を止めず、後続リレーで既存PARTIAL/COMPLETE_COREを1件ずつ再QAする。

## safeguard

- INDEXは旧集約状態なので進捗正本にしない。LATEST_HANDOFF + 実レコードを優先。
- パチスロ三國志の機械割2系列を平均しない。
- pacnkの設定1 AT 1/228.6を、多数一致の1/288.57へ黙って修正せずCONFLICTとして残す。
- 天井1150G/約1200Gを同一定義と断定・平均しない。
- 旧IGT「三國志」や「三国争覇伝」、2015年「CR三國志～英雄集結～」のreset情報を2014ニューギン機へ転記しない。
- 純電断契約を据え置き一般論から推定しない。
- 戦律のストラタス10/06全国稼働、バビロン10/06代替日で重複レコードを作らない。
- 2015-06-08到達時の **吉宗～極～（ヨシムネH2A4 / 3S1093）** 正式量産版処理注意を維持。

## 次回再開地点

1. **recordCount 849 / chronologicalFrontier 2014-10-06 / 10-06_GROUP_OPEN** から開始。
2. 最新mainで README / mission / INDEX / LATEST_HANDOFF / No.849を再確認。
3. 次の未処理は **パチスロ大海物語with T-ARA（三洋物産）**。
4. 同機処理後、2014-10-06同日群を全メーカー横断で最終監査してCLOSED判定。
5. CLOSEDなら10-07以降の境界監査へ前進。
6. 遡及QAは `2007-03-11_treasure-pirates.md` から再開。

## 主要出典 — 取得日 2026-09-07

### パチスロ三國志
- パチマガスロマガ 機種トップ: `https://cs62.cs-plaza.com/g/pachi/pla/s_conq/newgin_slot/34/newgin_slot_34.php`
- パチマガスロマガ AT初当たり/PAYOUT: `https://cs62.cs-plaza.com/g/pachi/pla/s_conq/newgin_slot/34/h.php`
- パチマガスロマガ 50枚ベース: `https://cs62.cs-plaza.com/g/pachi/pla/s_conq/newgin_slot/34/c.php`
- パチマガスロマガ ATフロー: `https://cs62.cs-plaza.com/g/pachi/pla/s_conq/newgin_slot/34/l.php`
- パチスロ必勝本: `https://p.hisshobon.jp/machine/list.php?c=1&d=48482&mid=2468&p=2`
- P-WORLD: `https://www.p-world.co.jp/machine/database/7497`
- パチ7: `https://pachiseven.jp/machines/4259/cutout/94`
- ALL7 2014年10月: `https://www.all7.jp/plans/index/2014/10`
- pacnk: `https://pacnk.com/slot/2014/sangokushi/top.php`
- パチスロ天井一覧: `https://pachi-data.com/tenjyoujyouhou/`
- 遊技日本 高射幸性遊技機リスト: `https://yugi-nippon.com/pachinko-news/post-17869/`
- 2014年当時ホール紹介: `https://ameblo.jp/deruderu-mashiko/entry-11933930625.html`

### 次候補 / 10-06境界
- K-Navi 大海物語with T-ARA: `https://p-kn.com/slot/2109/`
- パチビー 大海物語with T-ARA: `https://www.pachibee.jp/machines/index/214090006`
- グリーンべると発表: `https://news.p-world.co.jp/articles/6730/greenbelt`
- ALL7 2014年10月: `https://www.all7.jp/plans/index/2014/10`
