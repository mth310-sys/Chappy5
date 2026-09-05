# 実機DB 最新リレー引継ぎ

更新日: 2026-09-06

## 現在地点

- recordCount: **738**
- latestMachineAdded: **まじかるすいーとプリズム・ナナ**（DAXEL）
- latestRecord: `docs/real_machine_db/machines/2013-05-20_magical-suite-prism-nana.md`
- chronologicalFrontier: **2013-05-20**
- frontierLatestExactDateMachine: **まじかるすいーとプリズム・ナナ**
- schema: **resetBehavior v0.7**
- status: **CLOSED_2013-05-20_GROUP__NEXT_AUDIT_2013-05-21_FORWARD**

## 今回の同期

- 最新mainの `README.md`、`docs/CHAPPY5_REAL_MACHINE_DATABASE_MISSION_V01.md`（v0.7）、`docs/real_machine_db/INDEX.md`、`LATEST_HANDOFF.md`、直前レコード `2013-05-20_captain-pulsar.md` を確認。
- INDEXは19件地点の旧集約状態なので、README規定どおり最新HANDOFFと実レコードを正本として優先。
- 開始時main正本は recordCount **737** / chronologicalFrontier **2013-05-20** / 05-20群OPEN。
- 前リレー指定の最優先候補 **まじかるすいーとプリズム・ナナ** がrepo未登録であることを確認し、738件目として追加。

## 今回追加 — まじかるすいーとプリズム・ナナ

### identity / 性能コア

- manufacturer: **DAXEL**。
- releaseDate: **2013-05-20**。K-Navi、パチビーで一致。
- systemType: **5号機 / ART疑似ボーナス型**。
- 機械割: **97.0 / 98.3 / 99.7 / 104.0 / 107.2 / 110.8%**。
- 疑似ボーナス合算: **1/125.3 / 122.5 / 116.5 / 111.3 / 98.1 / 93.5**。
- プリズムチャンス: **1/358.9 / 338.7 / 336.3 / 308.0 / 286.2 / 244.6**。
- プリズムボーナス: **1/229.5 / 216.6 / 215.2 / 197.2 / 181.7 / 172.4**。
- スーパープリズムボーナス: **1/1192.9 / 1680.3 / 1035.3 / 1500.7 / 835.7 / 1246.7**。
- ART純増: **約2.0枚/G**。
- プリズムボーナス: **100G / 約200枚**。
- プリズムチャンス: **小役7回成立で1セット / 最大7セット**。基本獲得性能はK-Naviの42枚表記とパチマガスロマガ等の約75枚表記があり、平均せず `CONFLICT_OR_DEFINITION_DIFFERENCE_PC_42_VS_APPROX75`。
- baseGamesPer50: **約33G/50枚**。2013年版を明示した後年整理資料から取得。高信頼当時資料の同値クロスチェックは未回収のため `ANALYSIS_SINGLE_RETROSPECTIVE`。
- ART間 **900G** で天井、ART＋次回天国以上。別に **1～400G/1周期、4周期目**の周期天井あり。

### resetBehavior v0.7

- 本機専用の当時天井解析で、設定変更時は **天井到達までのゲーム数クリア**を直接確認。
- K-Naviに本機専用「設定変更後の挙動」項目が存在することも確認したが、現存キャッシュから本文を安全に回収できず、内容を推測して補完していない。
- 設定変更後専用の短縮天井は、2013年版について再探索後も `NONE_CONFIRMED_AFTER_RESEARCH`。2025年スマスロ版の555G+α短縮は別機種のため混入禁止。
- 純据え置き時のART間G/周期/モード/状態保持契約は、表記揺れ・DAXEL・据え置き/宵越し/朝一等で再探索後も直接固定できず `UNVERIFIED_AFTER_RESEARCH`。
- 単純電源OFF→ON時のART間G/周期/モード/状態も、電源OFF ON/電断等で再探索後 `UNVERIFIED_AFTER_RESEARCH`。
- 設定変更時の内部モード再抽選有無・具体振り分け、内部状態初期値、ガックン/初期出目/液晶・NeXTカウンター判別も直接本文を固定できず `UNVERIFIED_AFTER_RESEARCH`。
- advantageousSectionReset: **NOT_APPLICABLE_5TH_GEN**。
- resetQaStatus: **RESEARCHED__SETTING_CHANGE_GAME_COUNTER_RESET_CONFIRMED__NO_DIRECT_PURE_CARRYOVER_OR_POWER_CYCLE_INTERNAL_CONTRACT_FOUND**。

## 2013-05-20同日群

- 登録済み: **キャッツ・アイ－コレクション奪還作戦**、**キャプテンパルサー**、**まじかるすいーとプリズム・ナナ**。
- K-Navi/パチビーで3機の05-20導入を確認。
- ALL7の2013年5月導入予定一覧では05-20のパチスロとしてプリズム・ナナ、キャプテンパルサーを確認。キャッツ・アイは同一覧で05-07表記だが、K-Navi/パチビー/HAZUSEは05-20で一致するため、本DBでは高一致の05-20群に保持。
- 05-20について追加の未登録パチスロを、K-Navi/パチビー/HAZUSE/ALL7系検索で確認できなかったため **CLOSED**。

## 遡及resetBehavior QA 進捗

- 本線と別のQA再開地点は引き続き `docs/real_machine_db/machines/2007-01_karate-baka-ichidai.md`。
- 本線収集を優先し、既存性能値の無駄な再調査はしていない。

## 次回再開地点

1. **recordCount 738 / chronologicalFrontier 2013-05-20 / 05-20群CLOSED** から開始。
2. **2013-05-21以降**を導入日順に境界監査し、次の未登録5号機を確定して処理する。
3. 2013年5月末候補検索では後年の検定日/撤去期限資料が実導入日と混同されやすい。たとえば「忍魂弐 ～烈火ノ章～」はパチビーで2013-07-01、「パチスロQP」は2013-07-22、「緑ドン ～キラメキ！炎のオーロラ伝説～」はK-Naviで2013-08-05の実導入を確認しており、5月下旬候補へ誤投入しない。
4. プリズム・ナナの純据え置き/純電断内部契約、設定変更モード具体率、ガックン等は後続QAで直接資料が見つかった場合のみ補完する。

## 主要出典 — 取得日 2026-09-06

### まじかるすいーとプリズム・ナナ

- K-Navi: `https://p-kn.com/slot/1845/`
- パチビー: `https://www.pachibee.jp/machines/movie/213040000`
- P-WORLD: `https://www.p-world.co.jp/machine/database/7062`
- パチマガスロマガ: `https://cs62.cs-plaza.com/g/pachi/pla/s_conq/daxel_slot/04/a.php`
- パチマガスロマガ ARTフロー: `https://cs62.cs-plaza.com/g/pachi/pla/s_conq/daxel_slot/04/l.php`
- pacnk: `https://pacnk.com/slot/tools/sh_prismnana.html`
- パチスロ立ち回り講座 機種トップ: `https://crankyseven.com/magicalsweet-prismnana-pc.htm`
- パチスロ立ち回り講座 天井: `https://crankyseven.com/sp/magicalsweet-prismnana11-pc.htm`
- みんスロ: `https://minslo.com/%E3%81%BE%E3%81%98%E3%81%8B%E3%82%8B%E3%81%99%E3%81%84%E3%83%BC%E3%81%A8%E3%83%97%E3%83%AA%E3%82%BA%E3%83%A0%E3%83%BB%E3%83%8A%E3%83%8A/`
- ALL7 2013年5月導入予定一覧: `https://www.all7.jp/plans/index/2013/05`

### 05-20群照合

- キャッツ・アイ K-Navi: `https://p-kn.com/slot/1843/`
- キャッツ・アイ HAZUSE: `https://hazuse.com/machine/pachislot/2S1464/`
- キャプテンパルサー K-Navi: `https://p-kn.com/slot/1848/`

### 境界誤混入防止

- 忍魂弐 ～烈火ノ章～ パチビー: `https://www.pachibee.jp/movies/index/9551`
- パチスロQP パチビー: `https://www.pachibee.jp/movies/index/9600`
- 緑ドン ～キラメキ！炎のオーロラ伝説～ K-Navi: `https://p-kn.com/slot/1875/`
