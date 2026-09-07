# 実機DB 最新リレー引継ぎ

更新日: 2026-09-08

## 現在地点
- recordCount: **943**
- latestRecordAdded: **リノ**（山佐）
- latestRecordAddedPath: `docs/real_machine_db/machines/2015-12-07_reno.md`
- chronologicalFrontier: **2015-12-07**
- frontierLatestMachine: **リノ**
- schema: **resetBehavior v0.7**
- status: **2015-12-07_GROUP_OPEN**

## 今回の同期 / 正本確認
- 最新mainの `README.md`、mission v0.7、旧 `INDEX.md`、`LATEST_HANDOFF.md`、No.942 `2015-11-24_devilman3-akuma-no-mokushiroku.md` を再取得。
- INDEXは19件時点の旧集約なのでREADME規定どおり **LATEST_HANDOFF + 実レコード** を進捗正本として使用。
- 開始時正本は recordCount **942** / chronologicalFrontier **2015-11-24** / 11/23〜11/24帯CLOSED。
- 11/25〜11/29を再監査後、旧handoffの「11/30強候補」を各機種の実ホール導入日で再検証。

## 重要訂正 — 旧handoffの2015-11-30候補はホール導入日ではない
旧handoffに強候補として置かれていた以下5機種の「2015-11-30」は、PiDEA設置期限一覧等にある検定/行政系日付をホール導入候補として誤読した可能性が高い。

実ホール導入日を別系統で再照合した結果:
- **鉄拳3rd エンジェルVer.**: 2016-03-07（Pachibee/グリーンべると等）
- **スーパーリノMAX**: 2016-04-18（K-Navi等）
- **パチスロ緋弾のアリア**: 2016-02-01（K-Navi/Pachibee）
- **スーパーオアシス**: 2016-02-01（Pachibee、グリーンべると納品1/31）
- **ユルビスカス-30**: 2016-02-22（Pachibee）

したがって5機種を2015-11-30群へ登録しない。PiDEAの該当日付は今後も導入日正本として単独使用しない。

## 2015-11-25〜12-06境界
- K-Navi/時系列機種一覧/メーカー別一覧を再探索。
- man-softの時系列一覧では、2015-11-24デビルマンIIIの次の具体的ホール導入が2015-12-07の「ヱヴァンゲリヲン 魂を繋ぐもの」「リノ」。
- 旧11/30候補5機種は上記の通り全て2016年実導入と確認。
- 現時点で11/25〜12/06に全国ホール導入を具体日付きで固定できる未登録5号機を追加発見できず、**2015-11-25_TO_2015-12-06_CLOSED_FOR_CURRENT_RESEARCH** とする。

## No.943 — リノ
- record: `docs/real_machine_db/machines/2015-12-07_reno.md`
- manufacturer: **山佐**
- releaseDate: **2015-12-07**
- formalModelName: **リノNGTCC**
- inspectionNumber: **UNVERIFIED_AFTER_RESEARCH**
- generation/system: **5号機 / ノーマル / リノ方式 / リアルボーナス連チャン**

### performanceCore
- canonical機械割: **96.6 / 98.2 / 99.6 / 103.0 / 106.3 / 108.1%**。
- 初当たり: **1/393.3 / 381.6 / 370.6 / 349.1 / 327.6 / 314.0**。
- BIG（連チャン込み）: **1/162.1 / 157.7 / 153.5 / 145.3 / 137.1 / 132.0**。
- REG（連チャン込み）: **1/243.3 / 236.7 / 230.4 / 218.1 / 205.8 / 198.0**。
- 50枚ベース: **約29G**。
- BIG: **約200枚** / REG: **約80枚**。
- 高確率状態中ボーナス合成: **約1/8.84**。
- 天井: **非搭載**。
- 後年みんスロの機械割 **97.2 / 98.8 / 101.7 / 103.8 / 109.0 / 113.0%** は当時複数解析と競合するため平均せず `CONFLICT_PAYOUT_RATE_96_6_TO_108_1_VS_97_2_TO_113_0` として保持。

### resetBehavior v0.7
- settingChange state: **CARRYOVER_SUPPORTED**。
- carryOver state: **CARRYOVER_SUPPORTED**。
- purePowerCycle state: **CARRYOVER_SUPPORTED**。
- gameCounter/ceiling: **NOT_APPLICABLE_NO_CEILING**。
- reset-specific shortened ceiling: **NOT_APPLICABLE**。
- modeAfterReset: 一般AT機型の再抽選ではなく、ボーナス高確/低確に相当する内部状態を設定変更でも保持。
- **RAMクリアのみ別挙動**で、ボーナス高確率状態スタート。
- settingChange専用の状態振り分け数値: **NOT_APPLICABLE_STATE_CARRYOVER**。
- advantageousSectionReset: `NOT_APPLICABLE_5TH_GEN_PRE_5_9`。
- resetDetection: ガックン・後年の音量変化報告はあるがメーカー保証の確定判別ではないため補助情報扱い。
- 当時一撃は設定変更/電源OFF ONを「調査中」のまま残すが、後年の必勝本特集・複数整理資料が状態引継ぎを明示。解析進展としてcanonicalを引継ぎに更新。

## 2015-12-07群
現時点で実ホール導入を複数資料で具体日固定できている未処理候補:
1. **ヱヴァンゲリヲン 魂を繋ぐもの**（ビスティ）— 2015-12-07

処理済み:
- **リノ**（山佐）— No.943

12/07群はまだ全メーカー横断最終監査前なので **OPEN**。候補に限定せず漏れ監査する。

## 次回再開地点
1. **recordCount 943 / chronologicalFrontier 2015-12-07 / 12-07群OPEN** から開始。
2. README / mission v0.7 / INDEX / LATEST_HANDOFF / No.943を再取得。
3. 次の未処理機種 **「ヱヴァンゲリヲン 魂を繋ぐもの」**（ビスティ）を性能コア + resetBehavior v0.7で登録。
4. 同機処理後、2015-12-07群をK-Navi/P-WORLD/当時業界資料/解析一覧で全メーカー横断再監査してCLOSED判定。
5. その後の具体日候補は2015-12-21「秘宝伝 ～伝説への道～」等だが、12/08〜12/20境界を先に監査する。
6. 欠損は表記揺れ・型式・メーカー・設定変更/据え置き/電源OFF ON/天井/モード/ガックン等へ検索語変更し、公式・業界・当時解析・古DB・アーカイブ・回顧資料まで再探索後のみUNVERIFIED。
7. 競合は平均せずCONFLICT/定義差として双方保存。
8. 全変更後、mainから新規レコード・LATEST_HANDOFFを再取得して保存検証する。

## 遡及 resetBehavior QA
- retroQaScanConfirmedThrough: **2005-12_haisai-shiohime.md**
- retroQaNextInspection: **2005-12_dokonjo-gaeru-s.md**
- retroQaStatus: **SEQUENTIAL_SCAN_ACTIVE**
- 今回は本線No.943と時系列境界訂正を優先し、遡及QA地点は変更していない。

## safeguard
- INDEXは旧集約状態なので進捗正本にしない。LATEST_HANDOFF + 実レコードを優先。
- main先行レコードを発見した場合は重複作成しない。
- **検定日/認定系日付/設置期限表の起算日をホール導入日と自動同一視しない。**
- 設定変更・据え置き・純電断・RAMクリアを同義扱いしない。
- 前作/後継機・同メーカー他機のresetBehaviorを流用しない。
- 当時「調査中」資料は、その後の直接解析がある場合に解析進展を明示して更新する。

## 主要出典 — 取得日 2026-09-08
### No.943 リノ
- K-Navi: https://p-kn.com/slot/2409/
- パチ＆スロ必勝本 基本スペック: https://p.hisshobon.jp/machine/2683/1/55232
- パチ＆スロ必勝本 天井&設定変更: https://p.hisshobon.jp/vpage/2033/9
- すろぱちくえすと ゲーム性: https://www.slopachi-quest.com/article/reno-2015/
- すろぱちくえすと 設定判別: https://www.slopachi-quest.com/article/reno-2015-settei/
- すろぱちくえすと 設定変更/RAMクリア: https://www.slopachi-quest.com/article/reno-sindai/
- ちょんぼりすた: https://chonborista.com/slot/yamasa-slot/13676/
- 一撃 天井/設定変更: https://1geki.jp/slot/yamasarino/3/
- P-WORLD: https://www.p-world.co.jp/machine/database/7925
- pachinko’s blog: https://pachinko.hatenablog.jp/entry/2015/12/reno
- P-MEDIA検定通過: https://p-media.info/%E6%87%90%E3%81%8B%E3%81%97%E5%90%8D%E6%A9%9F%E3%80%8C%E3%83%AA%E3%83%8E%E3%82%B7%E3%83%AA%E3%83%BC%E3%82%BA%E3%80%8D%E3%81%8C%E5%BE%A9%E6%B4%BB%EF%BC%8F%E5%B1%B1%E4%BD%90%E3%81%8B%E3%82%89%E3%80%8C/
- スロがち: https://slogati.com/reno/
- みんスロ: https://minslo.com/%E3%83%AA%E3%83%8E/

### 境界/日付訂正
- man-soft時系列機種一覧: https://smaslo.man-soft.com/machine/makersearch/taiyo.html
- PiDEA 5号機設置期限一覧: https://www.pidea.jp/articles/1620982702
- 鉄拳3rd エンジェルVer. 参考: https://web-greenbelt.jp/00008416/ / https://p-kn.com/slot/2465/
- スーパーリノMAX: https://p-kn.com/slot/2513/
- 緋弾のアリア: https://p-kn.com/slot/2434/

## confidence
- No.943 exactReleaseDate: ANALYSIS_HIGH_MULTI_SOURCE
- No.943 formalModelName: INDUSTRY_PERIOD_MULTI_SOURCE
- No.943 performanceCore: ANALYSIS_HIGH_MULTI_SOURCE_WITH_PAYOUT_CONFLICT
- No.943 normalCeiling: ANALYSIS_HIGH_NOT_EQUIPPED
- No.943 settingChangeState: ANALYSIS_HIGH_RETROSPECTIVE_MULTI_SOURCE
- No.943 purePowerCycleState: ANALYSIS_HIGH_DIRECT_RESET_TABLE
- No.943 RAM-clear-start-state: ANALYSIS_HIGH_MULTI_SOURCE
- 2015-11-30 old candidate correction: HIGH_MULTI_SOURCE_DATE_DISAMBIGUATION
