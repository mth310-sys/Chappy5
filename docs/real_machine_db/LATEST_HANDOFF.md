# 実機DB 最新リレー引継ぎ

更新日: 2026-09-08

## 現在地点

- recordCount: **920**
- latestRecordAdded: **サイレントヒル**（TAKASAGO / 高砂電器産業）
- latestRecordAddedPath: `docs/real_machine_db/machines/2015-10-05_silent-hill.md`
- chronologicalFrontier: **2015-10-05**
- frontierLatestMachine: **サイレントヒル**
- frontierRecord: `docs/real_machine_db/machines/2015-10-05_silent-hill.md`
- schema: **resetBehavior v0.7**
- status: **2015-10-05_GROUP_OPEN**

## 今回の同期 / 正本確認

- 最新mainの `README.md`、`docs/CHAPPY5_REAL_MACHINE_DATABASE_MISSION_V01.md`（v0.7）、`docs/real_machine_db/INDEX.md`、`LATEST_HANDOFF.md`、No.919 `2015-10-05_z-gold-infinity.md` を再読。
- INDEXは19件時点の旧集約状態。README規定どおり **LATEST_HANDOFF + 実レコード** を進捗正本として使用。
- 開始時の正本は recordCount 919 / 2015-10-05_GROUP_OPEN。前チャットの915地点には戻らず、HANDOFF指定の次未処理「サイレントヒル」へ継続。
- GitHub既存検索でサイレントヒルの未登録を確認。
- 書き込み直前にLATEST_HANDOFFを再取得し、recordCount 919のままで同期競合がないことを確認してNo.920を追加。

## No.920 — サイレントヒル

- record: `docs/real_machine_db/machines/2015-10-05_silent-hill.md`
- manufacturer: **TAKASAGO（高砂電器産業） / KPE・高砂販売**
- releaseDate: **2015-10-05**
- generation/system: **5号機 AT / 擬似ボーナス+ゲーム数上乗せAT / スラッシュAT**
- formalModelName: **サイレントヒルCP**
- inspectionNumber: **5S0444**

### performanceCore

- 機械割: **96.5 / 97.5 / 99.1 / 101.8 / 105.0 / 110.7%**。
- BIG: **1/433.9 / 409.7 / 392.5 / 385.2 / 363.1 / 355.4**。
- REG: **1/750.2 / 700.3 / 672.3 / 652.8 / 612.5 / 595.0**。
- 擬似ボーナス合算: **1/274.9 / 258.5 / 247.8 / 242.3 / 228.0 / 222.5**。
- AT初当たり: **1/702.8 / 654.4 / 612.7 / 589.2 / 548.7 / 529.3**。
- ボーナス+AT初当たり合成: **1/197.6 / 185.3 / 176.5 / 171.7 / 161.1 / 156.7**。
- 50枚ベース: **約36.5G**（通常のBAR付近狙い前提）。
- AT純増: **約3.0枚/G**。
- NIGHTMARE RUSH: **50G+α**。
- BIG/SUPER BIG: **約100枚**、REG: **約50枚**。
- 通常天井: **ベルこぼし559回**（通常手順時、約1000G目安）で擬似ボーナス。
- 天国/超天国: **ベルこぼし1〜54回**（通常手順時、約100G以内目安）。
- スラッシュATのためBAR付近を狙わずベルを取得すると内部天井カウントが進まず、液晶/外部G数と内部進捗が乖離し得る点を性能上の重要注意として保存。

### resetBehavior v0.7

- 設定変更時: **通常時モード再抽選あり**。
- 設定変更時モード振り分けは資料競合。平均せず `CONFLICT_RESET_MODE_DISTRIBUTION` として保存。
  - HAZUSE: 設定1 85/15、2 77.5/22.5、3 85/15、4 75/25、5 85/15、6 75/25%（通常/天国）。
  - すろぱちくえすと: 設定1 87.5/12.5、2 75/25、3 87.5/12.5、4 75/25、5 87.5/12.5、6 66.7/33.3%。
- 設定変更時ベルこぼし天井カウンタRESET/CARRY: **UNVERIFIED_AFTER_RESEARCH**。
- 据え置き時の天井進捗・モード・内部状態: **UNVERIFIED_AFTER_RESEARCH**。
- 純電源OFF→ON時の天井進捗・モード・状態・表示: **UNVERIFIED_AFTER_RESEARCH**。
- 設定変更専用固定短縮天井: **NONE_CONFIRMED_AFTER_RESEARCH**。
- 朝一恩恵: モード再抽選で天国に入ればベルこぼし1〜54回の早いボーナス天井契約になる。固定短縮天井とは分離。
- 本機固有ガックン/初期出目/ステージ等の高信頼変更判別: **NONE_CONFIRMED_AFTER_RESEARCH**。
- 有利区間: **NOT_APPLICABLE_5TH_GEN_PRE_5_9**。

### conflicts

- `CONFLICT_RESET_MODE_DISTRIBUTION`: HAZUSE vs すろぱちくえすと。設定4のみ一致、他設定は数値差。平均化していない。
- `INITIAL_HIT_DEFINITION_SEPARATION`: AT初当たりとボーナス+AT初当たり合成は別定義として分離。

## 2015-10-05群 — OPEN

処理済み:
1. **パチスロ ルパン三世 ロイヤルロード～金海に染まる黄金神殿～** — オリンピア / 平和 — No.917。
2. **パチスロ ベヨネッタ** — Sammy — No.918。
3. **Zゴールド・インフィニティ** — NET — No.919。
4. **サイレントヒル** — TAKASAGO — No.920。

既知未処理候補:
5. **パチスロ クジラッキー** — 三洋物産。

- クジラッキーはパチビー/DMMで **2015-10-05導入**を確認済み。
- PiDEA Xの2015-08-10業界発表で三洋の新機種として存在確認済み。
- 同日群は未処理候補が残るため **OPEN**。

## 次回再開地点

1. **recordCount 920 / chronologicalFrontier 2015-10-05 / 10-05_GROUP_OPEN** から開始。
2. README / mission v0.7 / INDEX / LATEST_HANDOFF / No.920を再確認。
3. 次の未処理候補 **「パチスロ クジラッキー」** を既存レコード検索後に処理する。
4. クジラッキーは既に当時解析で、設定変更時「天井リセット・内部モード再抽選」、電源ON/OFF「天井引継ぎ・内部モード引継ぎ」、RT状態は双方引継ぎ、という直接比較テーブルの存在を確認済み。次回は性能コアと設定変更後モード数値まで複数ソース照合する。
5. クジラッキー処理後、2015-10-05群を全メーカー横断で再監査し、追加がなければGROUP_CLOSEDへ進む。
6. resetBehaviorは設定変更・据え置き・純電断を分離し、欠損は表記揺れ/型式/メーカー/シリーズ名と検索語・資料系統変更後のみUNVERIFIEDとする。
7. 遡及resetBehavior QAカーソルは新規本線を止めず、既存未QAレコード探索を継続する。

## safeguard

- INDEXは旧集約状態なので進捗正本にしない。LATEST_HANDOFF + 実レコードを優先。
- main先行レコードを発見した場合は重複作成しない。
- `COMPLETE_CORE` と `resetBehaviorQA` を別管理する。
- 設定変更・据え置き・純電断を自動で同義扱いしない。
- 前作/後継機・同メーカー他機のresetBehaviorを流用しない。
- 競合値は平均せず `CONFLICT` / 定義差として双方保持。
- 検定告示 / 発表 / 納品 / 地域先行 / 全国導入を分離する。

## 主要出典 — 取得日 2026-09-08

### No.920 サイレントヒル
- KONAMI機種アーカイブ: https://www.konami.com/amusement/psm/archive/ps/2015/silenthill/
- KONAMI関連公式ブログ: https://www.konami.com/amusement/psm/portal/magihallo/blog_mh/2015/mhs_blog_150825.html
- PiDEA X: https://www.pidea.jp/articles/%E9%AB%98%E7%A0%82%E3%80%8C%E3%82%B5%E3%82%A4%E3%83%AC%E3%83%B3%E3%83%88%E3%83%92%E3%83%AB%E3%80%8D%E9%83%BD%E5%86%85%E5%BB%83%E7%97%85%E9%99%A2%E3%81%A7%E7%99%BA%E8%A1%A8
- K-Navi: https://p-kn.com/slot/2324/
- HAZUSE: https://hazuse.com/machine/pachislot/5S0444/
- パチトラ: https://p-tora.com/i4479a6/
- パチマガスロマガ: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/takasago_slot/10/a.php
- パチマガスロマガ ベース: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/takasago_slot/10/c.php
- すろぱちくえすと: https://www.slopachi-quest.com/article/silenthill/
- すろぱちくえすと モード: https://www.slopachi-quest.com/article/silenthill-mode/
- 期待値見える化: https://slotjin.com/zone/silenthill/
- ちょんぼりすた: https://chonborista.com/slot/kpe-slot/11554/comment-page-2/

### 次候補 クジラッキー 事前固定
- PiDEA X発表: https://www.pidea.jp/articles/SANYO%E3%80%8C%E6%98%9F%E7%9F%A2%E3%80%8D%E3%80%8C%E3%82%AF%E3%82%B8%E3%83%A9%E3%83%83%E3%82%AD%E3%83%BC%E3%80%8D%E5%90%8C%E6%99%82%E7%99%BA%E8%A1%A8
- パチビー: https://www.pachibee.jp/movies/index/12102
- DMMぱちタウン: https://p-town.dmm.com/machines/2248
- すろぱちくえすと reset: https://www.slopachi-quest.com/article/kujilucky-reset/

## confidence

- exactReleaseDate: ANALYSIS_HIGH_MULTI_SOURCE
- manufacturer/system: OFFICIAL_INDUSTRY_HIGH
- formalModelName/inspectionNumber: ANALYSIS_HIGH
- performanceCore: ANALYSIS_HIGH_MULTI_SOURCE
- baseGamesPer50: ANALYSIS_HIGH_MULTI_SOURCE
- normalCeiling: ANALYSIS_HIGH_MULTI_SOURCE
- settingChangeModeReselection: ANALYSIS_HIGH
- resetModeNumericData: CONFLICT
- settingChangeGameCounterReset: UNVERIFIED_AFTER_RESEARCH
- carryOverBehavior: UNVERIFIED_AFTER_RESEARCH
- purePowerCycleBehavior: UNVERIFIED_AFTER_RESEARCH
- advantageousSectionReset: NOT_APPLICABLE
- resetDetection: NONE_CONFIRMED_AFTER_RESEARCH
