# 実機DB 最新リレー引継ぎ

更新日: 2026-09-08

## 現在地点
- recordCount: **954**
- latestRecordAdded: **まつりば！**（大都技研）
- latestRecordAddedPath: `docs/real_machine_db/machines/2016-02-08_matsuriba.md`
- chronologicalFrontier: **2016-02-08**
- frontierLatestMachine: **まつりば！**
- schema: **resetBehavior v0.7**
- status: **2016-02-08_GROUP_OPEN_WITH_2016-02-01_REGIONAL_DATE_AUDIT_PENDING**

## 今回の同期 / 正本確認
- 最新mainの `README.md`、mission v0.7、`INDEX.md`、`LATEST_HANDOFF.md`、No.953 `2016-02-01_okidoki-tropical-25.md` を再取得。
- INDEXは19件時点の旧集約なのでREADME規定どおり **LATEST_HANDOFF + 実レコード** を進捗正本として使用。
- 開始時正本は recordCount **953** / chronologicalFrontier **2016-02-01** / 02-01群OPEN_AUDIT_PENDING。
- mainに「まつりば！」先行レコードがないことを確認しNo.954として追加。

## 2016-02-01群監査
処理済み:
1. スーパーオアシス — No.950
2. キュインハナチャン-25 — No.951
3. キュインハナチャン-30 — No.952
4. 沖ドキ！トロピカル（25φ） — No.953

### audit finding
- HAZUSEの2016年2月カレンダーは02/01の次に02/07・02/08を持つが、02/07についてパチスロ機種を具体的に固定できず、日付リンクだけを機種導入根拠にしない。
- 月次一覧で2月機種に含まれる「ひぐらしのなく頃に絆」は、メーカー側発表資料で **2016年3月からホール設置予定** と確認できるため02/01へ混入させない。
- **パチスロ緋弾のアリア**は主要解析で **2016-02-08** 導入だが、「一部地域では2/1」または「2/1導入、一部地域2/8」とする資料が存在する。
- よって02/01群は全国本線4機種としては収束しているが、アリアの earliest regional start / national canonical の扱いを確定するまで `REGIONAL_DATE_AUDIT_PENDING` を残す。
- **沖ドキ！トロピカル-30（HH-30 / アクロス）** は25φと別型式。導入時期に2016-02-01/2016年3月の資料差があるため、引き続き独立時系列監査対象。

## No.954 — まつりば！
- record: `docs/real_machine_db/machines/2016-02-08_matsuriba.md`
- manufacturer: **大都技研**
- releaseDate canonical: **2016-02-08**
- formalModelName: **まつりば！／A5**
- inspectionNumber: **5S0999**
- generation/system: **5号機 / A+ART / 完走型ART**

### performanceCore
- 機械割: **97.4 / 98.7 / 100.4 / 105.3 / 108.5 / 112.4%** canonical。
- 設定6のみ別資料 **112.3%** があるため `PAYOUT_SETTING6_ROUNDING_CONFLICT_112_3_VS_112_4`。
- ボーナス合算: **1/150.3 / 146.9 / 141.9 / 137.4 / 131.9 / 125.4**。
- ART初当たり: **1/370.4 / 361.7 / 349.6 / 332.6 / 317.8 / 303.3**。
- 50枚ベース: **約31G**。
- ART純増: **約0.8枚/G**。
- 祭ボーナス約200枚、花火大会最大/約200枚、神輿チャレンジ最大104枚。
- ART「祭」: **1セット30G・完走型**。
- 通常時 **777G** で次回ボーナスまで継続する無限ART。

### resetBehavior v0.7
- 設定変更時は **ベルメーター初期pt再抽選**。
- 初期pt: **0=20.7 / 1=20.3 / 2=20.3 / 3=14.8 / 4=9.8 / 5=6.3 / 6=4.7 / 7=3.1% / 平均2.3pt**。
- 設定変更後1回目ボーナスは低確→高確ボーナス相当への昇格抽選が大幅優遇。設定1〜3 **50%**、設定4〜6 **66%級**として当時/後年解析を保存。ただし一部HTML表崩れがあるため `RESET_FIRST_BONUS_TABLE_PRESENTATION_CAUTION` を付与。
- 設定変更時の777G天井カウンタRESET/CARRYOVERは、当時解析が「調査中」で、検索語・資料系統変更後も直接契約を固定できず **UNVERIFIED_AFTER_RESEARCH**。
- 据え置き一般の天井/状態/ベルメーター完全契約も **UNVERIFIED_AFTER_RESEARCH**。
- **純電源OFF→ONのみでは天井ゲーム数CARRYOVER** を直接確認。
- 純電断時の内部状態は **UNVERIFIED_AFTER_RESEARCH**。
- 固定短縮天井: **NONE_CONFIRMED_AFTER_RESEARCH**。
- 有利区間: **NOT_APPLICABLE_5TH_GEN_PRE_5_9**。
- 朝一町ステージの記録あり。ただし町ステージ単独は変更確定ではない。
- 本機固有のガックン/初期出目/ランプ等のメーカー保証変更判別は **NONE_CONFIRMED_AFTER_RESEARCH**。

## 2016-02-08群 — OPEN
現時点の強い候補:
1. **まつりば！** — 大都技研 — No.954処理済み。
2. **パチスロ緋弾のアリア** — 藤商事 — 主要資料2/8、一部地域2/1の競合あり。次回最優先。
3. **NINJA GAIDEN** — 七匠 — 複数資料2016-02-08。

- 02/08群はまだCLOSEDにしない。
- アリアの日付定義を解決/CONFLICT保存後、NINJA GAIDENを処理し、全メーカー横断監査を行う。

## 遡及 resetBehavior QA
- retroQaScanConfirmedThrough: **2006-01_birei2.md**
- retroQaNextInspection: **2006-02_jinzo-ningen-kikaider-k.md**
- retroQaStatus: **SEQUENTIAL_SCAN_ACTIVE**
- 新規時系列収集を優先し、遡及QA再開地点は変更しない。

## 次回再開地点
1. **recordCount 954 / chronologicalFrontier 2016-02-08 / 02-08群OPEN** から開始。
2. README / mission v0.7 / INDEX / LATEST_HANDOFF / No.954をmainから再取得。
3. **パチスロ緋弾のアリア**を最優先で処理する。2016-02-08全国/主要導入と2016-02-01一部地域導入の資料差を再探索し、releaseDate canonicalとregional startを分離、必要ならCONFLICT保存。
4. その後 **NINJA GAIDEN** を処理。
5. 02/01群についてはアリアの地域先行日と **沖ドキ！トロピカル-30** の時系列差を継続監査。variant/地域差を同名だけで統合しない。
6. 02/08同日群をメーカー別一覧、新台一覧、業界記事、古DBまで横断し、漏れがない場合のみCLOSED判定。
7. 遡及QAは `2006-02_jinzo-ningen-kikaider-k.md` から継続。
8. PARTIAL/UNVERIFIEDは表記揺れ・正式型式・メーカー・設定変更/据え置き/電源OFF ON/天井短縮/モード/状態/ガックン/有利区間へ検索語を変え、公式・業界・当時解析・古DB・アーカイブ・回顧資料まで再探索後のみ付与。
9. 競合は平均せずCONFLICT/定義差として双方保存。

## safeguard
- INDEXは旧集約状態なので進捗正本にしない。LATEST_HANDOFF + 実レコードを優先。
- 全国導入日と一部地域先行日を混同しない。
- 25φ/30φや型式・メーカー・導入時期が分かれるvariantを同名だけで統合しない。
- 検定日/認定日/発表日/納品予定日をホール導入日と自動同一視しない。
- 設定変更・据え置き・純電断・RAMクリアを同義扱いしない。
- 前作/後継機・別variantのresetBehaviorを無条件流用しない。

## 主要出典 — 取得日 2026-09-08
### 02/01〜02/08境界
- HAZUSE新台カレンダー: https://hazuse.com/new-machine-calendar/newmachine-calendar/
- ひぐらし絆メーカー発表引用資料: https://123deta.com/article/%E3%83%8B%E3%83%A5%E3%83%BC%E3%82%B9%E3%83%88%E3%83%94%E3%83%83%E3%82%AF%E3%82%B9%E7%9B%AE%E6%AC%A1%E8%A6%81%E7%B4%84%E4%B8%BB%E8%A6%81%E7%B5%8C%E5%96%B6%E6%8C%87%E6%A8%99%E3%81%AE%E6%8E%A8%E7%A7%BB.yd2jkggq
- 緋弾のアリア一撃: https://1geki.jp/slot/aria/
- 緋弾のアリアちょんぼりすた: https://chonborista.com/slot/fuji-slot/15513/comment-page-2/
- NINJA GAIDENちょんぼりすた: https://chonborista.com/slot/nanashow/15586/

### No.954 まつりば！
- HAZUSE: https://hazuse.com/machine/pachislot/5S0999/
- ちょんぼりすた: https://chonborista.com/slot/daito-slot/15540/
- すろぱちくえすと: https://www.slopachi-quest.com/article/matsuriba/
- P-WORLD: https://www.p-world.co.jp/machine/database/7938
- パチビー: https://www.pachibee.jp/machines/lecture/216010006
- スロットガーデン: https://xn--mckza4ard4ttb2d.com/matsuriba
- 楽スロ: https://rakuslo.com/matsuriba-asaiti.html
- 5号機クロニクル: https://5goki.com/daito

## confidence
- No.954 identity/formalModel/inspection: ANALYSIS_DATABASE_HIGH
- No.954 exactReleaseDate: ANALYSIS_MULTI_SOURCE_HIGH
- No.954 performanceCore: ANALYSIS_HIGH_MULTI_SOURCE
- No.954 resetNumericBenefit: ANALYSIS_HIGH_PLUS_RETROSPECTIVE_DIRECT_NUMERIC
- No.954 settingChangeCeilingContract: UNVERIFIED_AFTER_RESEARCH
- No.954 purePowerCycleCeiling: ANALYSIS_HIGH_DIRECT
- 2016-02-01 group nationwide closure: HIGH_BUT_REGIONAL_DATE_AUDIT_PENDING
- next machine identity: HIGH — パチスロ緋弾のアリア
