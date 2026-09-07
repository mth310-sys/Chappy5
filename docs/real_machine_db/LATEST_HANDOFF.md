# 実機DB 最新リレー引継ぎ

更新日: 2026-09-08

## 現在地点
- recordCount: **957**
- latestRecordAdded: **パチスロひぐらしのなく頃に絆**（D-light）
- latestRecordAddedPath: `docs/real_machine_db/machines/2016-02-22_higurashi-no-naku-koro-ni-kizuna.md`
- chronologicalFrontier: **2016-02-22**
- frontierLatestMachine: **パチスロひぐらしのなく頃に絆**
- schema: **resetBehavior v0.7**
- status: **2016-02-22_GROUP_OPEN_WITH_2016-02-01_30PHI_VARIANT_DATE_AUDIT_PENDING**

## 今回の同期 / 正本確認
- 最新mainの `README.md`、mission v0.7、`INDEX.md`、`LATEST_HANDOFF.md`、No.956 `2016-02-08_ninja-gaiden.md` を再取得。
- INDEXは19件時点の旧集約なのでREADME規定どおり **LATEST_HANDOFF + 実レコード** を進捗正本として使用。
- 開始時正本は recordCount **956** / chronologicalFrontier **2016-02-08** / 02-08群OPEN最終監査待ち。
- 02/08群を日付表記・メーカー・当時新台記事・機種DBで再監査し、具体的な追加全国導入機を固定できなかったためCLOSED判定。
- 02/09〜02/21境界も日付指定検索を含めて監査し、全国導入日を具体的に固定できる未登録パチスロを確認できなかったためCLOSED判定。
- 次の明確な全国導入群2016-02-22へ進み、「パチスロひぐらしのなく頃に絆」をNo.957として追加。

## No.957 — パチスロひぐらしのなく頃に絆
- record: `docs/real_machine_db/machines/2016-02-22_higurashi-no-naku-koro-ni-kizuna.md`
- manufacturer: **D-light（ディ・ライト）**
- releaseDate: **2016-02-22**
- formalModelName: **パチスロひぐらしのなく頃に絆S**
- certificationNumber: **5S1193**
- generation/system: **5号機 / A+ART / CZ / 周期天井**

### performanceCore
- 機械割: **97.5 / 98.6 / 100.5 / 104.6 / 109.3 / 113.1%**。
- ART初当たり: **1/377.5 / 354.5 / 341.9 / 291.8 / 253.4 / 218.6**。
- ボーナス合算: **全設定1/565.0**。
- 50枚ベース: **約34.5〜35G**。
- ART純増: **約1.7枚/G**。
- BIG: **約204枚**。
- ART「Day Break RUSH」: **1セット40G**。
- 通常天井: ART間最大 **40周期**。1周期は資料により平均約30〜32G、40周期で約1200〜1280G+α目安。CZ中など周期非進行要素があるため固定G数天井と混同しない。

### resetBehavior v0.7
- 設定変更時: **周期天井再抽選 / L5メーター各キャラ内部レベル再抽選 / 液晶ステージ再選択 / ARTレベル再抽選**。
- リセット後は通常最大40周期から **最大20周期へ短縮**。
- 設定変更時周期天井振り分け（全設定共通）:
  - 1周期 **0.39〜0.4%**
  - 4周期 **24.61〜24.6%**
  - 6周期 **1.56〜1.6%**
  - 10周期 **3.13〜3.1%**
  - 20周期 **70.31〜70.3%**
- 設定変更時L5内部レベル: Lv1 **39.06%** / Lv2 **50.00%** / Lv3 **9.71%前後** / Lv4 **1.17%前後**。
- 設定変更時ARTレベル: Lv1 **92.97%** / Lv2 **6.25%** / Lv3 **0.78%**。
- 純電源OFF→ON: **周期天井CARRYOVER / 液晶ステージRESELECT** を直接資料で確認。
- L5メーターの純電断時内部処理は、一撃の比較表では「調査中」、別解析は据え置き時レベル引継ぎを前提に判別法を記載するため `PARTIAL_SOURCE_CONFLICT_AFTER_RESEARCH`。推定一本化しない。
- ガックン: 設定変更・電源ON/OFFとも **しない** とする当時解析。メーカー保証の確定判別には格上げしない。
- リセット・据え置きとも見た目上L5メーターLv1開始とされ、即時見た目判別は困難。前日レベル把握時の次回レベルアップ差を変更推測に使えるとする解析あり。
- 有利区間: **NOT_APPLICABLE_5TH_GEN_PRE_5_9**。

## 2016-02-08群 — CLOSED_FOR_CURRENT_RESEARCH
処理済み:
1. **まつりば！** — 大都技研 — No.954
2. **パチスロ 緋弾のアリア** — 藤商事 — No.955
3. **PACHISLOT NINJA GAIDEN** — 七匠 — No.956

- 最終横断監査で追加全国導入機を具体日付きで固定できずCLOSED。
- 後年の設置期限一覧に現れる日付を導入日へ自動転記しない。
- コードギアス反逆のルルーシュR2等、別時期が一次系で確認できるものは02/08候補から除外済み。

## 2016-02-09〜02-21境界 — CLOSED_FOR_CURRENT_RESEARCH
- 02/15等の日付指定検索、当時新台記事、古DBを横断したが、全国導入日をこの区間に固定できる未登録パチスロを今回確認できず。
- 次の明確な全国導入群を2016-02-22として前進。

## 2016-02-22群 — OPEN
今回処理済み:
1. **パチスロひぐらしのなく頃に絆** — D-light — No.957

次候補として確認済み:
- **パチスロ偽物語** — Sammy — 2016-02-22（HAZUSE / パチ7等で一致）
- 同日には **ニューチバリヨ / ニューチバリヨ-30 / パチスロ ビッグドリームinロストアイランド2 / ミラクル** 等の候補も後年一覧に存在するため、後年一覧だけで採用せずメーカー・当時資料で個別日付確認する。
- 02/22群は同日全メーカー監査を継続し、未処理機を順次追加する。

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
- 今回は新規時系列前進を優先し、遡及QA地点は変更していない。

## 次回再開地点
1. **recordCount 957 / chronologicalFrontier 2016-02-22 / 02-22群OPEN** から開始。
2. README / mission v0.7 / INDEX / LATEST_HANDOFF / No.957をmainから再取得。
3. 次の未処理候補 **「パチスロ偽物語」** を優先しつつ、02/22同日全メーカーを監査して未登録機を導入日根拠付きで順次追加。
4. 後年設置期限一覧だけの日付は採用せず、公式・業界記事・当時解析・古DBで全国導入日を照合する。
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
- 周期天井の「平均G数目安」を固定ゲーム数天井として保存しない。

## 主要出典 — 取得日 2026-09-08
### No.957 パチスロひぐらしのなく頃に絆
- K-Navi: https://p-kn.com/slot/2442/
- パチ＆スロ必勝本: https://p.hisshobon.jp/machine/2713/1/56216
- 一撃 基本: https://1geki.jp/slot/higurashi_kizuna/
- 一撃 天井/設定変更: https://1geki.jp/slot/higurashi_kizuna/3/
- 期待値見える化: https://slotjin.com/zone/higurasikizuna/
- すろぱちくえすと 朝一: https://www.slopachi-quest.com/article/higurashi-kizuna-reset/
- pachislo-data: https://pachislo-data.com/diright/22601
- パチ7 ベース: https://pachiseven.jp/machines/4746/cutout/70
- Sammy Networks: https://www.sammy-net.jp/news/2016/09/777townnet-17.html
- pachinavi 型式補助: https://pachinavi.net/machines/higurashi-kizuna/

### 02/22次候補確認
- HAZUSE 偽物語: https://hazuse.com/machine/pachislot/5S1298/genre/204/
- パチ7 偽物語: https://pachiseven.jp/machines/4755/cutout/2

## confidence
- No.957 identity/releaseDate: **HIGH_MULTI_SOURCE_WITH_OFFICIAL_VIDEO/INDUSTRY_SUPPORT**
- No.957 performanceCore: **ANALYSIS_HIGH_MULTI_SOURCE_PLUS_INDUSTRY_SUPPORT**
- No.957 resetSettingChange: **ANALYSIS_HIGH_DIRECT_MULTI_SOURCE**
- No.957 resetNumericData: **ANALYSIS_HIGH_DIRECT_MULTI_SOURCE**
- No.957 powerCycleCeiling: **ANALYSIS_HIGH_DIRECT_MULTI_SOURCE**
- No.957 purePowerCycleL5State: **PARTIAL_SOURCE_CONFLICT_AFTER_RESEARCH**
- 2016-02-08 group completeness: **CLOSED_FOR_CURRENT_RESEARCH**
- 2016-02-09〜02-21 boundary: **CLOSED_FOR_CURRENT_RESEARCH**
- 2016-02-22 group completeness: **OPEN**
