# 実機DB 最新リレー引継ぎ

更新日: 2026-09-08

## 現在地点
- recordCount: **958**
- latestRecordAdded: **パチスロ偽物語**（Sammy）
- latestRecordAddedPath: `docs/real_machine_db/machines/2016-02-22_nisemonogatari.md`
- chronologicalFrontier: **2016-02-22**
- frontierLatestMachine: **パチスロ偽物語**
- schema: **resetBehavior v0.7**
- status: **2016-02-22_GROUP_CLOSED_FOR_CURRENT_RESEARCH_WITH_2016-02-01_30PHI_VARIANT_DATE_AUDIT_PENDING**

## 今回の同期 / 正本確認
- 最新mainの `README.md`、mission v0.7、`INDEX.md`、`LATEST_HANDOFF.md`、No.957 `2016-02-22_higurashi-no-naku-koro-ni-kizuna.md` を再取得。
- INDEXは19件時点の旧集約なのでREADME規定どおり **LATEST_HANDOFF + 実レコード** を進捗正本として使用。
- 開始時正本は recordCount **957** / chronologicalFrontier **2016-02-22** / 02-22群OPEN。
- 次の未処理 **「パチスロ偽物語」** をNo.958として追加。
- 02/22候補として後年の設置期限一覧に現れていた `ニューチバリヨ / ニューチバリヨ-30 / パチスロ ビッグドリームinロストアイランド2 / ミラクル` を再監査。メーカー・当時資料・機種DBでは全国導入がそれぞれ2016-04中旬 / 2016-06 / 2016-03-22等で、02/22導入とは一致しないため02/22群から除外。
- 日付指定・当時資料・機種DB横断で、No.957/958以外の全国導入パチスロを今回具体的に固定できなかったため **2016-02-22_GROUP_CLOSED_FOR_CURRENT_RESEARCH** とした。

## No.958 — パチスロ偽物語
- record: `docs/real_machine_db/machines/2016-02-22_nisemonogatari.md`
- manufacturer: **Sammy（サミー）**
- releaseDate: **2016-02-22**
- formalModelName: **偽物語／ZS**
- certificationNumber: **5S1298**
- generation/system: **5号機 / A+ART / CZ**

### performanceCore
- 通常掲載機械割: **97.9 / 99.3 / 100.9 / 104.3 / 108.6 / 112.1%**。
- 完全攻略時機械割: **98.5 / 100.1 / 101.7 / 105.2 / 109.5 / 113.1%**。定義を分離し平均しない。
- ART初当たり: **1/567.0 / 569.5 / 545.0 / 465.0 / 409.1 / 359.8**。
- ボーナス合算: **1/199.8 / 195.0〜195.1 / 190.5 / 186.2 / 182.0 / 178.1**。
- 50枚ベース: canonical **約35G**（34.9〜35.9G表記あり）。
- ART純増: **約1.2枚/G**。
- BIG: **150枚**。
- ART「倖時間」: **1セット20G**。
- 通常天井: **BIGおよびART間999G+前兆でART**。

### resetBehavior v0.7
- 設定変更: **天井RESET / 解呪抽選状態RESELECT / 家ステージ開始**。
- 据え置き・純電源OFF→ON: **天井CARRYOVER / 状態CARRYOVER / 家ステージ開始**。
- 設定変更専用固定短縮天井: **NONE_CONFIRMED_AFTER_RESEARCH**。
- 設定変更時解呪抽選状態:
  - 設定1: 通常64.84% / 高確30.08% / 超高確5.08%
  - 設定2: 通常59.77% / 高確35.16% / 超高確約5.08%
  - 設定3: 通常54.69% / 高確40.23% / 超高確約5.08%
  - 設定4〜6: 通常49.61% / 高確45.31% / 超高確5.08%
- 朝一恩恵: 高確以上開始が設定1でも **35.16%**、設定4〜6では **50.39%**。
- ガックン: 設定変更時あり / 電源ON-OFFなしとする解析あり。ただし7揃え等の対策で判別不能になり得るためメーカー保証の確定判別にはしない。
- 朝一専用の忍モード/解呪連モード初期振り分けは再探索後も直接固定できず `UNVERIFIED_AFTER_RESEARCH`。
- 有利区間: **NOT_APPLICABLE_5TH_GEN_PRE_5_9**。

## 2016-02-22群 — CLOSED_FOR_CURRENT_RESEARCH
処理済み:
1. **パチスロひぐらしのなく頃に絆** — D-light — No.957
2. **パチスロ偽物語** — Sammy — No.958

監査で除外/後送り:
- **ニューチバリヨ / ニューチバリヨ-30** — NET公式プレスは2016-03-01発表、2016年4月中旬全国導入予定。HAZUSEは30φを2016-04-11。
- **パチスロ ビッグドリーム in ロストアイランド2** — 2016-04-14発表、6月導入系資料。02/22ではない。
- **ミラクル** — HAZUSEは2016-03-22導入。
- 後年の設置期限一覧に出る「2016-02-22」は、上記では実ホール導入日と一致しないため導入日根拠に採用しない。

## 2016-02-01群監査
全国本線処理済み:
1. スーパーオアシス — No.950
2. キュインハナチャン-25 — No.951
3. キュインハナチャン-30 — No.952
4. 沖ドキ！トロピカル（25φ） — No.953

- 緋弾のアリアはNo.955で canonical 02/08 / regional-alternate 02/01 と分離済み。
- **沖ドキ！トロピカル-30（HH-30 / アクロス）** は25φと別型式で、2016-02-01/2016年3月の資料差が残るためvariant時系列監査継続。
- status: **2016-02-01_NATIONWIDE_MAINLINE_CONVERGED_VARIANT_DATE_AUDIT_PENDING**。

## 2016-02-08群 — CLOSED_FOR_CURRENT_RESEARCH
処理済み:
1. **まつりば！** — 大都技研 — No.954
2. **パチスロ 緋弾のアリア** — 藤商事 — No.955
3. **PACHISLOT NINJA GAIDEN** — 七匠 — No.956

## 2016-02-09〜02-21境界 — CLOSED_FOR_CURRENT_RESEARCH
- 日付指定検索、当時新台記事、古DBを横断し、全国導入日をこの区間に固定できる未登録パチスロを確認できず。

## 遡及 resetBehavior QA
- retroQaScanConfirmedThrough: **2006-02_jinzo-ningen-kikaider-k.md**
- retroQaNextInspection: **2006-02_crash-bandicoot-s.md**
- retroQaStatus: **SEQUENTIAL_SCAN_ACTIVE**
- 今回は新規時系列前進を優先し、遡及QA地点は変更していない。

## 次回再開地点
1. **recordCount 958 / chronologicalFrontier 2016-02-22 / 02-22群CLOSED** から開始。
2. README / mission v0.7 / INDEX / LATEST_HANDOFF / No.958をmainから再取得。
3. **2016-02-23以降の次の実ホール全国導入日を境界監査**し、最初に導入日を公式・業界・当時解析・古DBで固定できる未処理機種からNo.959を追加する。
4. 後年設置期限一覧の02/29等を導入日へ自動転記しない。今回、同一覧の複数機種で実導入月との差を確認済み。
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
### No.958 パチスロ偽物語
- Sammy公式: https://www.sammy.co.jp/japanese/news/2016/474.html
- グリーンべると: https://web-greenbelt.jp/00008395/
- HAZUSE: https://hazuse.com/machine/pachislot/5S1298/
- パチ＆スロ必勝本: https://p.hisshobon.jp/machine/2700/1/56560
- 一撃 天井/設定変更: https://1geki.jp/slot/nisemonogatari/3/
- 一撃 状態移行: https://1geki.jp/slot/nisemonogatari/48/
- 一撃 ART: https://1geki.jp/slot/nisemonogatari/81/
- 期待値見える化: https://slotjin.com/zone/nisemonogatari/
- ちょんぼりすた: https://chonborista.com/slot/sammy-slot/16232/
- スロがち.COM: https://slogati.com/nisemonogatari/
- パチ7: https://pachiseven.jp/machines/4755/cutout/2

### 02/22群境界監査
- NET/ニューチバリヨ発表: https://www.dreamnews.jp/press/0000127776
- HAZUSE ニューチバリヨ-30: https://hazuse.com/machine/pachislot/5S1398/
- 娯楽産業 ビッグドリームinロストアイランド2: https://www.goraku-sangyo.com/%E3%82%BF%E3%82%A4%E3%83%A8%E3%83%BC%E3%82%A8%E3%83%AC%E3%83%83%E3%82%AF%E3%80%80%E6%96%B0%E6%A9%9F%E7%A8%AE%E3%80%8C%E3%83%91%E3%83%81%E3%82%B9%E3%83%AD-%E3%83%93%E3%83%83%E3%82%B0%E3%83%89%E3%83%AA/
- HAZUSE ミラクル: https://hazuse.com/machine/pachislot/SX0126/

## confidence
- No.958 identity/releaseDate: **HIGH_OFFICIAL_PLUS_MULTI_SOURCE**
- No.958 performanceCore: **ANALYSIS_HIGH_MULTI_SOURCE_WITH_PAYOUT_DEFINITION_SEPARATED**
- No.958 resetSettingChange: **ANALYSIS_HIGH_DIRECT_MULTI_SOURCE**
- No.958 resetNumericData: **ANALYSIS_HIGH_DIRECT_MULTI_SOURCE**
- No.958 powerCycle: **ANALYSIS_HIGH_DIRECT_MULTI_SOURCE**
- No.958 resetDetection: **ANALYSIS_MULTI_SOURCE_NOT_MANUFACTURER_GUARANTEED**
- 2016-02-22 group completeness: **CLOSED_FOR_CURRENT_RESEARCH**
