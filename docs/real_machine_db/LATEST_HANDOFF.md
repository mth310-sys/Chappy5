# 実機DB 最新リレー引継ぎ

更新日: 2026-09-08

## 現在地点
- recordCount: **955**
- latestRecordAdded: **パチスロ 緋弾のアリア**（藤商事）
- latestRecordAddedPath: `docs/real_machine_db/machines/2016-02-08_hidan-no-aria.md`
- chronologicalFrontier: **2016-02-08**
- frontierLatestMachine: **パチスロ 緋弾のアリア**
- schema: **resetBehavior v0.7**
- status: **2016-02-08_GROUP_OPEN_WITH_2016-02-01_VARIANT_DATE_AUDIT_PENDING**

## 今回の同期 / 正本確認
- 最新mainの `README.md`、mission v0.7、`INDEX.md`、`LATEST_HANDOFF.md`、No.954 `2016-02-08_matsuriba.md` を再取得。
- INDEXは19件時点の旧集約なのでREADME規定どおり **LATEST_HANDOFF + 実レコード** を進捗正本として使用。
- 開始時正本は recordCount **954** / chronologicalFrontier **2016-02-08** / 02-08群OPEN。
- mainに「パチスロ 緋弾のアリア」先行レコードがないことを確認しNo.955として追加。

## No.955 — パチスロ 緋弾のアリア
- record: `docs/real_machine_db/machines/2016-02-08_hidan-no-aria.md`
- manufacturer: **藤商事**
- releaseDate canonical: **2016-02-08**
- regional/alternate release source: **2016-02-01**
- formalModelName: **緋弾のアリアFSB**
- inspectionNumber: **5S0988**
- generation/system: **5号機 / ART / 周期CZ / ボーナス併用**

### release-date audit
- 一撃、泰成産業は **2016-02-08**。
- ちょんぼりすたは **2016-02-08、ただし一部地域では2/1** と明記。
- K-Navi、パチビー、期待値見える化は **2016-02-01** と掲示。
- よって日付は平均・単純統合せず `RELEASE_DATE_CONFLICT_2016_02_01_VS_2016_02_08_WITH_REGIONAL_NOTE`。
- 本線canonicalは **2016-02-08**、2/1はregional/alternate startとして保持。これによりアリア由来の02/01 `REGIONAL_DATE_AUDIT_PENDING` は解消扱い。ただし沖ドキ！トロピカル-30のvariant時系列監査は残る。

### performanceCore
- 機械割: **97.5 / 98.7 / 100.2 / 103.2 / 106.2 / 109.1%**。
- ART初当たり精密値: **1/300.77 / 285.74 / 267.54 / 232.54 / 206.88 / 176.97**。
- 藤商事公式は丸め値 **1/300.7 / 285.7 / 267.5 / 232.5 / 206.8 / 176.9**。
- 50枚ベース: **約37.5G**。
- ART純増: **約2.0枚/G**。
- ART「バレットゾーン」: **1セット30G+α**。
- 弾丸図柄揃いボーナス: 解析資料で **純増約120枚**。
- 天井: **ART間999G（通常時消化G数）**。内部ボーナス/CZ中はカウント除外され、データ表示と内部進捗がズレ得る。

### resetBehavior v0.7
- 設定変更時: **天井ゲーム数RESET / モード再抽選 / 液晶ステージ再選択**。
- 純電源OFF→ON: **天井ゲーム数・モード・液晶ステージCARRYOVER**。
- 据え置き単独の独立比較契約: **UNVERIFIED_AFTER_RESEARCH**。純電断の直接資料を据え置き一般へ無条件拡張しない。
- 固定リセット短縮天井: **NONE_CONFIRMED_AFTER_RESEARCH**。
- 設定変更時モード振り分け数値: **UNVERIFIED_AFTER_RESEARCH**。
- 公開朝一特定G以内当選率: **UNVERIFIED_AFTER_RESEARCH**。
- 朝一特別恩恵: 当時整理資料は「存在しない可能性が高い」。数値化できる専用恩恵は確認できず。
- 有利区間: **NOT_APPLICABLE_5TH_GEN_PRE_5_9**。
- 設定変更時は液晶再選択、純電断時は引継ぎなので補助判別材料にはなり得るが、ステージ単独の確定判別、ガックン/初期出目/ランプ等のメーカー保証判別は **NONE_CONFIRMED_AFTER_RESEARCH**。

## 2016-02-01群監査
全国本線処理済み:
1. スーパーオアシス — No.950
2. キュインハナチャン-25 — No.951
3. キュインハナチャン-30 — No.952
4. 沖ドキ！トロピカル（25φ） — No.953

- 緋弾のアリアはNo.955で canonical 02/08 / regional-alternate 02/01 と分離したため、アリア起因の地域日付保留は解消。
- **沖ドキ！トロピカル-30（HH-30 / アクロス）** は25φと別型式で、2016-02-01/2016年3月の資料差が残る。variant時系列監査は継続。
- status: **2016-02-01_NATIONWIDE_MAINLINE_CONVERGED_VARIANT_DATE_AUDIT_PENDING**。

## 2016-02-08群 — OPEN
処理済み:
1. **まつりば！** — 大都技研 — No.954
2. **パチスロ 緋弾のアリア** — 藤商事 — No.955

次の強い候補:
3. **NINJA GAIDEN** — 七匠 — 複数資料2016-02-08。次回最優先。

- NINJA GAIDEN処理後、02/08同日群をメーカー別一覧、新台一覧、業界記事、古DBまで横断し、漏れがない場合のみCLOSED判定。

## 遡及 resetBehavior QA
- retroQaScanConfirmedThrough: **2006-01_birei2.md**
- retroQaNextInspection: **2006-02_jinzo-ningen-kikaider-k.md**
- retroQaStatus: **SEQUENTIAL_SCAN_ACTIVE**
- 新規時系列収集を優先し、遡及QA再開地点は変更しない。

## 次回再開地点
1. **recordCount 955 / chronologicalFrontier 2016-02-08 / 02-08群OPEN** から開始。
2. README / mission v0.7 / INDEX / LATEST_HANDOFF / No.955をmainから再取得。
3. **NINJA GAIDEN**（七匠）を最優先で処理する。
4. その後02/08同日群を全メーカー横断監査し、漏れがなければCLOSED。
5. 02/01群は **沖ドキ！トロピカル-30** の25φ別variant・地域/時期差だけ継続監査する。
6. 遡及QAは `2006-02_jinzo-ningen-kikaider-k.md` から継続。
7. PARTIAL/UNVERIFIEDは表記揺れ・正式型式・メーカー・設定変更/据え置き/電源OFF ON/天井短縮/モード/状態/ガックン/有利区間へ検索語を変え、公式・業界・当時解析・古DB・アーカイブ・回顧資料まで再探索後のみ付与。
8. 競合は平均せずCONFLICT/定義差として双方保存。

## safeguard
- INDEXは旧集約状態なので進捗正本にしない。LATEST_HANDOFF + 実レコードを優先。
- 全国導入日と一部地域先行日を混同しない。
- 25φ/30φや型式・メーカー・導入時期が分かれるvariantを同名だけで統合しない。
- 検定日/認定日/発表日/納品予定日をホール導入日と自動同一視しない。
- 設定変更・据え置き・純電断・RAMクリアを同義扱いしない。
- 前作/後継機・別variantのresetBehaviorを無条件流用しない。

## 主要出典 — 取得日 2026-09-08
### No.955 パチスロ 緋弾のアリア
- 藤商事公式: https://www.fujimarukun.co.jp/products/s_aria/
- 広島県公安委員会告示: https://www.pref.hiroshima.lg.jp/soumu/soumu/kenpo/pdf27/11gatsu/091/20151124300085.pdf
- 一撃 機種ページ: https://1geki.jp/slot/aria/
- 一撃 天井/設定変更: https://1geki.jp/slot/aria/3/
- ちょんぼりすた: https://chonborista.com/slot/fuji-slot/15513/comment-page-2/
- 泰成産業: https://www.taisei777.co.jp/slot.html
- K-Navi: https://p-kn.com/slot/2415/
- パチビー: https://www.pachibee.jp/machines/index/216010004
- すろぱちくえすと: https://www.slopachi-quest.com/article/hidannoaria/
- P-WORLD: https://www.p-world.co.jp/machine/database/7943

### 次候補
- NINJA GAIDEN ちょんぼりすた: https://chonborista.com/slot/nanashow/15586/

## confidence
- No.955 identity/formalModel/inspection: **OFFICIAL_PUBLIC_HIGH**
- No.955 releaseDate: **CONFLICT_WITH_REGIONAL_EXPLANATION**
- No.955 performanceCore: **OFFICIAL_PLUS_ANALYSIS_HIGH_MULTI_SOURCE**
- No.955 settingChangeBehavior: **ANALYSIS_HIGH_DIRECT**
- No.955 purePowerCycleBehavior: **ANALYSIS_HIGH_DIRECT**
- No.955 carryOverSettingIndependentContract: **UNVERIFIED_AFTER_RESEARCH**
- 2016-02-01 nationwide mainline: **HIGH_WITH_30PHI_VARIANT_DATE_AUDIT_PENDING**
- next machine identity: **HIGH — NINJA GAIDEN**
