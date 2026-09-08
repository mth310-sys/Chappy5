# 実機DB 最新リレー引継ぎ

更新日: 2026-09-08

## 現在地点
- recordCount: **975**
- latestRecordAdded: **ニューチバリヨ-30**（ネット）
- latestRecordAddedPath: `docs/real_machine_db/machines/2016-04-18_new-chibariyo-30.md`
- chronologicalFrontier: **2016-04-18**
- frontierLatestMachine: **ニューチバリヨ-30**
- schema: **resetBehavior v0.7**
- status: **2016-04-18_GROUP_OPEN**

## 今回の同期 / 正本確認
- 最新mainの `README.md`、`docs/CHAPPY5_REAL_MACHINE_DATABASE_MISSION_V01.md`（v0.7）、`docs/real_machine_db/INDEX.md`、`LATEST_HANDOFF.md`、No.974 `2016-04-18_azteca-taiyo-no-monsho.md` を再取得してから作業。
- INDEXは19件時点の旧集約のため、README規定どおり **LATEST_HANDOFF + 実レコード + 最新main** を進捗正本として使用。
- 開始時点は recordCount 974 / chronologicalFrontier 2016-04-18 / 04-18群OPEN。前回指定のニューチバリヨ候補を再照合。
- 調査でネット公式プレスが **25Φ「ニューチバリヨ」/ 30Φ「ニューチバリヨ-30」を同時発売**と明記し、P-WORLDも別機種エントリを持つことを確認。variant混同防止のため、型式・検定番号を直接固定できた30Φ版をNo.975として先に登録し、25Φ版は次の同日候補として残す。

## 2016-04-04群 — CLOSED_FOR_CURRENT_RESEARCH
登録済み:
- No.968 パチスロ 機動警察パトレイバー（北電子）
- No.969 キングパルサー～DOT PULSAR～（山佐）
- No.970 探偵歌劇 ミルキィホームズ TD 消えた7と奇跡の歌（DAXEL）

## 2016-04-11群 — CLOSED_FOR_CURRENT_RESEARCH
登録済み:
- No.971 プチマーメイド（北電子）
- No.972 パチスロ マブラヴ オルタネイティヴ トータル・イクリプス（SANKYO、4/11 vs 4/18 CONFLICT保持）

## 2016-04-18群 — OPEN
登録済み:
- No.973 スーパーストリートファイターIV パチスロエディション（エンターライズ）
- No.974 アステカ-太陽の紋章-（エレコ）
- No.975 **ニューチバリヨ-30**（ネット、30Φ）
- No.972 トータル・イクリプスは4/18表記資料もあるが既登録のため重複登録しない。

## No.975 — ニューチバリヨ-30
- record: `docs/real_machine_db/machines/2016-04-18_new-chibariyo-30.md`
- manufacturer: **ネット**
- releaseDate canonical: **2016-04-18**
- formalModelName: **ニューチバリヨ／ND-30**
- certificationNumber: **5S1398**
- generation/system: **5号機 / AT / 枚数管理型擬似ボーナス / 30Φ完全告知**

### identity / release-date conflict
- ネット公式プレス（2016-03-01）は25Φ/30Φ同時発売、2016年4月中旬全国導入予定。
- パチ7、ちょんぼりすた、pachislo-data等は **2016-04-18**。
- HAZUSEとアタリ7は **2016-04-11**。
- 本DBは複数同系統一致の4/18をcanonicalとし、`CONFLICT_RELEASE_DATE_2016_04_18_MULTI_SOURCE_VS_2016_04_11_HAZUSE_ATARI7` を保持。
- 25Φ「ニューチバリヨ」は別variant。30Φの型式5S1398を流用しない。

### performanceCore
- 機械割: **96.8 / 98.1 / 99.5 / 101.0 / 103.1 / 105.5%**。
- 擬似ボーナス初当たり: **1/375 / 353 / 340 / 271 / 249 / 213**。
- 連チャン込みBIG: **1/175 / 168 / 164 / 157 / 149 / 140**。
- REG: **1/345 / 326 / 317 / 302 / 286 / 272**。
- 合算: **1/116 / 111 / 108 / 103 / 98 / 93**。
- ベース: **約45.7G/50枚**。
- 純増: **約3.0枚/G**。
- チバリヨBIG約200枚 / BIG約100枚 / REG約50枚。
- 通常A/B最大天井 **1280G**。

### resetBehavior v0.7
- 設定変更: **天井RESET / モードRESELECT**。
- 純電源OFF→ON: **天井CARRYOVER / モードCARRYOVER**。
- 据え置き主要契約: **天井進捗・モードCARRYOVER**として扱う。
- 設定変更時モード振り分け:
  - 設定1: 通常A58.6 / 通常B24.2 / 天国準備10.9 / 引き戻し6.3%
  - 設定2: 57.8 / 25.0 / 10.9 / 6.3%
  - 設定3: 56.3 / 26.6 / 10.9 / 6.3%
  - 設定4: 55.5 / 27.3 / 10.9 / 6.3%
  - 設定5: 55.5 / 27.3 / 10.9 / 6.3%
  - 設定6: 50.0 / 32.8 / 10.9 / 6.3%
- 固定の設定変更専用短縮天井: **NONE_CONFIRMED_AFTER_RESEARCH**。ただし再抽選されたモード固有天井により浅い当たりは発生し得るため分離管理。
- 有利区間: **NOT_APPLICABLE_5TH_GEN_PRE_5_9**。
- 朝一恩恵: 天国準備10.9% / 引き戻し6.3%で開始するモード再抽選。
- 朝一不利: 設定変更で前日1280G天井進捗・滞在モードを失う。
- 変更判別: 本機固有の確定ガックン/初期出目/ランプ契約は **NONE_CONFIRMED_AFTER_RESEARCH**。

## 04/18群 次の確認候補
1. **ニューチバリヨ（25Φ）**
   - 公式プレス・P-WORLDで30Φ版とは別variantとして存在確認済み。
   - 次回、正式型式・検定番号を古いDB/検定資料/アーカイブまで再探索してからNo.976候補として登録する。
   - 30Φ版の型式 `ニューチバリヨ／ND-30` / 5S1398を25Φへ自動転記しない。
2. 25Φ版処理後、04/18群を全メーカー横断監査し、追加候補がなければCLOSED判定する。

## 遡及 resetBehavior QA
- retroQaScanConfirmedThrough: **2006-02_nurse-witch-komugi-chan-magicalte.md**
- retroQaNextInspection: **2006-02_cutie-honey.md**
- retroQaStatus: **SEQUENTIAL_SCAN_ACTIVE**
- 小麦ちゃんは2026-09-08に設定変更/リセット/朝一/据え置き/電源OFF ON/電源断/ガックン/RT残Gへ検索語を再展開し、当時解析・古DB・業界・回顧を再探索。
- 本機固有の設定変更/据え置き/純電断時の60P RT残G・成立済みボーナス状態を固定できる追加資料は得られなかった。
- 性能側 `coreStatus: PARTIAL` は維持し、reset QAのみ **`PARTIAL_RESEARCH_EXHAUSTED`**へ更新。一般則で補完しない。

## 次回再開地点
1. **recordCount 975 / chronologicalFrontier 2016-04-18 / 04-18群OPEN** から開始。
2. README / mission v0.7 / INDEX / LATEST_HANDOFF / No.975を最新mainから再取得。
3. 次の未処理variant **ニューチバリヨ（25Φ）** の正式型式・検定番号・導入日を再探索。
4. 25Φを独立レコード化できたら、04/18群の全メーカー横断監査 → CLOSED可否判定。
5. PARTIAL/UNVERIFIEDは表記揺れ・型式・メーカー・設定変更/据え置き/電源OFF ON/天井短縮/モード/状態/ガックン/有利区間へ検索語を変え、公式・業界・当時解析・古DB・アーカイブ・回顧資料まで再探索後のみ付与。
6. 競合は平均せずCONFLICT/variant差/定義差として双方保存。
7. 遡及QAは `2006-02_cutie-honey.md` から継続。

## safeguard
- INDEXは旧集約状態なので進捗正本にしない。LATEST_HANDOFF + 実レコード + 最新mainコミットを優先。
- 全国導入日と記事公開日・公式ページ更新日・発表日・納品予定日・地域先行日を混同しない。
- 25φ/30φや型式・メーカー・導入時期が分かれるvariantを同名だけで統合しない。
- 設定変更・据え置き・純電断・RAMクリアを同義扱いしない。
- 設定変更RESETを根拠に据え置き/純電断を自動でCARRYOVER認定しない。
- 前作/後継機・同名別機種のresetBehaviorを流用しない。

## 主要出典 — 取得日 2026-09-08
### No.975 ニューチバリヨ-30
- ネット公式プレス（Dream News転載）: https://www.dreamnews.jp/press/0000127776
- HAZUSE: https://hazuse.com/machine/pachislot/5S1398/
- パチ7: https://pachiseven.jp/machines/4791/cutout/2
- パチ7 50枚ベース: https://pachiseven.jp/machines/4791/cutout/70
- ちょんぼりすた: https://chonborista.com/slot/net-slot/19241/
- P-WORLD 30Φ: https://www.p-world.co.jp/machine/database/8005
- P-WORLD 25Φ: https://www.p-world.co.jp/machine/database/8004
- スロパチクエスト: https://www.slopachi-quest.com/kisyubetsu/newchibariyo/
- pachislo-data: https://pachislo-data.com/net/24384
- アタリ7: https://www.atari7.com/slot/date1458185784.php
