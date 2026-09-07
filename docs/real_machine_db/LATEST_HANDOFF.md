# 実機DB 最新リレー引継ぎ

更新日: 2026-09-08

## 現在地点
- recordCount: **956**
- latestRecordAdded: **PACHISLOT NINJA GAIDEN**（七匠）
- latestRecordAddedPath: `docs/real_machine_db/machines/2016-02-08_ninja-gaiden.md`
- chronologicalFrontier: **2016-02-08**
- frontierLatestMachine: **PACHISLOT NINJA GAIDEN**
- schema: **resetBehavior v0.7**
- status: **2016-02-08_GROUP_OPEN_FINAL_CROSS_AUDIT_PENDING_WITH_2016-02-01_30PHI_VARIANT_DATE_AUDIT_PENDING**

## 今回の同期 / 正本確認
- 最新mainの `README.md`、mission v0.7、`INDEX.md`、`LATEST_HANDOFF.md`、No.955 `2016-02-08_hidan-no-aria.md` を再取得。
- INDEXは19件時点の旧集約なのでREADME規定どおり **LATEST_HANDOFF + 実レコード** を進捗正本として使用。
- 開始時正本は recordCount **955** / chronologicalFrontier **2016-02-08** / 02-08群OPEN。
- mainにNINJA GAIDEN先行レコードがないことを確認しNo.956として追加。
- 遡及QAは `2006-02_jinzo-ningen-kikaider-k.md` を再探索・更新。

## No.956 — PACHISLOT NINJA GAIDEN
- record: `docs/real_machine_db/machines/2016-02-08_ninja-gaiden.md`
- manufacturer: **七匠**
- releaseDate: **2016-02-08**
- formalModelName: **パチスロニンジャガイデンN**（流通実機DB確認、公式型式一次照合は今後可）
- generation/system: **5号機 / AT / CZ / 高ベース高純増**

### performanceCore
- 機械割: **97.4 / 98.8 / 99.8 / 103.8 / 107.8 / 111.2%**。
- AT初当たり: **1/475 / 457 / 438 / 393 / 343 / 317**。
- 別資料精密値: **1/475.3 / 456.7 / 437.7 / 393.1 / 342.6 / 317.4**。丸め差として扱いCONFLICT化しない。
- 50枚ベース: **約47G**。
- AT純増: **約3.0枚/G**。
- AT「超忍道」: **1セット30G+α**。
- 天井: **AT間999G**、最大32G前兆後AT。

### resetBehavior v0.7
- 設定変更時: **天井再抽選 / 内部状態再抽選 / SCモード再抽選**。
- 純電源OFF→ON: **天井CARRYOVER**。内部状態は当時資料自体が調査中。
- 据え置き単独の独立比較契約: **UNVERIFIED_AFTER_RESEARCH**。純電断から無条件拡張しない。
- 固定リセット短縮天井: **NONE_CONFIRMED_AFTER_RESEARCH**。
- 朝一SCモード公開数値:
  - 設定1・2: SC1 40.6 / SC2 40.6 / SC3 12.5 / SC4 6.3%
  - 設定3: 37.5 / 37.5 / 12.5 / 12.5%
  - 設定4〜6: 25.0 / 25.0 / 25.0 / 25.0%
- SC4は全シナリオ80%以上継続とされるため、設定4〜6の朝一25%は客行動に影響し得る主要数値として収録。
- ガックン: 当時解析では設定変更時 **有り!?** / 電源ON-OFF **無し**。断定資料ではないため `ANALYSIS_INDICATIVE_NOT_GUARANTEED`。
- 200/400/600Gでニューヨークステージへ移行しない場合は据え置き濃厚とする解析記述あり。ただし確定判別扱いしない。
- 有利区間: **NOT_APPLICABLE_5TH_GEN_PRE_5_9**。

## 2016-02-08群 — OPEN / 最終横断監査待ち
処理済み:
1. **まつりば！** — 大都技研 — No.954
2. **パチスロ 緋弾のアリア** — 藤商事 — No.955
3. **PACHISLOT NINJA GAIDEN** — 七匠 — No.956

- 今回の追加検索では、後年の「設置期限/さよなら予定日」系一覧が多数の別時期機種を2016-02-08として掲示する例を確認したため、これを導入日根拠として採用しない。
- 例: コードギアス反逆のルルーシュR2は一部一覧で2016-02-08と出るが、サミー/サミーネットワークス一次系では2016年5月下旬ホール導入予定・2016年5月導入と確認できるため02/08候補から除外。
- 02/08群はメーカー別一覧・当時新台カレンダー・業界記事・古DBをもう一巡し、具体的な追加機がなければCLOSED判定して02/09〜02/21境界へ進む。

## 2016-02-01群監査
全国本線処理済み:
1. スーパーオアシス — No.950
2. キュインハナチャン-25 — No.951
3. キュインハナチャン-30 — No.952
4. 沖ドキ！トロピカル（25φ） — No.953

- 緋弾のアリアはNo.955で canonical 02/08 / regional-alternate 02/01 と分離済み。
- **沖ドキ！トロピカル-30（HH-30 / アクロス）** は25φと別型式で、2016-02-01/2016年3月の資料差が残るためvariant時系列監査継続。
- status: **2016-02-01_NATIONWIDE_MAINLINE_CONVERGED_VARIANT_DATE_AUDIT_PENDING**。

## 遡及 resetBehavior QA
- retroQaScanConfirmedThrough: **2006-02_jinzo-ningen-kikaider-k.md**
- retroQaNextInspection: **2006-02_crash-bandicoot-s.md**
- retroQaStatus: **SEQUENTIAL_SCAN_ACTIVE**

### 人造人間キカイダーK QA結果
- performance側 `status: PARTIAL` は維持。
- reset QAのみ **PARTIAL_RESEARCH_EXHAUSTED** へ更新。
- パチマガスロマガの当時ページを再確認し、BIG後50G RTおよびボーナス単独抽選確率表を追加確認。
- ただし設定変更/据え置き/純電断時のBIG後RT残G数・RT状態処理、本機固有ガックン等は検索語・資料系統を変えても直接根拠を固定できず `UNVERIFIED_AFTER_RESEARCH`。
- 単独抽選確率は小役同時成立を含む総初当たりではないため `initialHitBySetting` に混入しない。

## 次回再開地点
1. **recordCount 956 / chronologicalFrontier 2016-02-08 / 02-08群最終横断監査** から開始。
2. README / mission v0.7 / INDEX / LATEST_HANDOFF / No.956をmainから再取得。
3. 02/08群をメーカー別一覧・当時新台カレンダー・業界記事・古DBで再監査し、追加機がなければ **CLOSED**。
4. その後 **2016-02-09〜02-21境界**を監査し、最初の未処理全国導入機へ進む。現時点で2016-02-22には「パチスロひぐらしのなく頃に絆」など複数候補を確認しているが、境界監査前に日付を飛ばさない。
5. 02/01群は **沖ドキ！トロピカル-30** の25φ別variant・地域/時期差だけ継続監査。
6. 遡及QAは `2006-02_crash-bandicoot-s.md` から継続。
7. PARTIAL/UNVERIFIEDは表記揺れ・正式型式・メーカー・設定変更/据え置き/電源OFF ON/天井短縮/モード/状態/ガックン/有利区間へ検索語を変え、公式・業界・当時解析・古DB・アーカイブ・回顧資料まで再探索後のみ付与。
8. 競合は平均せずCONFLICT/定義差として双方保存。

## safeguard
- INDEXは旧集約状態なので進捗正本にしない。LATEST_HANDOFF + 実レコードを優先。
- 全国導入日と一部地域先行日を混同しない。
- 25φ/30φや型式・メーカー・導入時期が分かれるvariantを同名だけで統合しない。
- 検定日/認定日/発表日/納品予定日/設置期限起点日をホール導入日と自動同一視しない。
- 設定変更・据え置き・純電断・RAMクリアを同義扱いしない。
- 前作/後継機・別variantのresetBehaviorを無条件流用しない。

## 主要出典 — 取得日 2026-09-08
### No.956 PACHISLOT NINJA GAIDEN
- グリーンべると: https://web-greenbelt.jp/00008352/
- ちょんぼりすた: https://chonborista.com/slot/nanashow/15586/
- P-WORLD: https://www.p-world.co.jp/machine/database/7961
- 期待値見える化: https://slotjin.com/zone/ninja-gaiden/
- みんスロ: https://minslo.com/ninja-gaiden/
- 中一商事（型式補助）: https://www.nakaiti.com/html/sNanashow002.html

### retroQA 人造人間キカイダーK
- パチマガスロマガ基本: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/heiwa_slot/28/a.php
- パチマガスロマガ単独抽選: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/heiwa_slot/28/k.php

### 日付誤採用防止
- サミーネットワークス一次（コードギアスR2 2016年5月下旬導入予定）: https://www.sammy-net.jp/news/2016/05/-android777town-for-android-for-android-2016510.html

## confidence
- No.956 identity/releaseDate: **HIGH_MULTI_SOURCE**
- No.956 performanceCore: **INDUSTRY_PLUS_ANALYSIS_HIGH_MULTI_SOURCE**
- No.956 resetSettingChange: **ANALYSIS_HIGH_DIRECT**
- No.956 resetNumericData: **ANALYSIS_HIGH_DIRECT**
- No.956 powerCycleCeiling: **ANALYSIS_HIGH_DIRECT**
- No.956 resetDetection: **ANALYSIS_INDICATIVE_NOT_GUARANTEED**
- Kikaider reset QA: **PARTIAL_RESEARCH_EXHAUSTED_WITH_CORE_STATUS_UNCHANGED**
- 2016-02-08 group completeness: **OPEN_PENDING_FINAL_CROSS_AUDIT**
