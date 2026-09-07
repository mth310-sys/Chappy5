# 実機DB 最新リレー引継ぎ

更新日: 2026-09-08

## 現在地点
- recordCount: **944**
- latestRecordAdded: **パチスロ ヱヴァンゲリヲン～魂を繋ぐもの～**（ビスティ）
- latestRecordAddedPath: `docs/real_machine_db/machines/2015-12-07_evangelion-tamashii-wo-tsunagu-mono.md`
- chronologicalFrontier: **2015-12-07**
- frontierLatestMachine: **パチスロ ヱヴァンゲリヲン～魂を繋ぐもの～**
- schema: **resetBehavior v0.7**
- status: **2015-12-07_GROUP_CLOSED_AND_2015-12-08_TO_2015-12-20_CLOSED_FOR_CURRENT_RESEARCH**

## 今回の同期 / 正本確認
- 最新mainの `README.md`、mission v0.7、旧 `INDEX.md`、`LATEST_HANDOFF.md`、No.943 `2015-12-07_reno.md` を再取得。
- INDEXは19件時点の旧集約なのでREADME規定どおり **LATEST_HANDOFF + 実レコード** を進捗正本として使用。
- 開始時正本は recordCount **943** / chronologicalFrontier **2015-12-07** / 12-07群OPEN。
- main先行を確認し、旧会話のNo.939地点には戻らず最新handoff指定の未処理機から継続。

## No.944 — パチスロ ヱヴァンゲリヲン～魂を繋ぐもの～
- record: `docs/real_machine_db/machines/2015-12-07_evangelion-tamashii-wo-tsunagu-mono.md`
- manufacturer: **ビスティ**
- releaseDate: **2015-12-07**
- formalModelName: **パチスロ ヱヴァンゲリヲン・魂を繋ぐものF**
- inspectionNumber: **UNVERIFIED_AFTER_RESEARCH**
- generation/system: **5号機 / ノーマルA / リアルボーナス / 天井RT / 技術介入**

### performanceCore
- canonical機械割: **97.37 / 98.05 / 100.04 / 103.90 / 107.71 / 112.34%**。
- BIG: **1/399.6 / 399.6 / 392.4 / 376.6 / 356.2 / 337.8**。
- REG: **1/595.8 / 574.9 / 546.1 / 520.1 / 496.5 / 404.5**。
- ボーナス合算: **1/239.2 / 235.7 / 228.3 / 218.5 / 207.4 / 184.1**。
- 50枚ベース（RT非考慮、1枚役以外取得前提の設定別比較値）: **39.91 / 40.48 / 41.87 / 43.10 / 45.32 / 47.48G**。
- 一般スペック表の「約42G/50枚」は代表値として分離し、設定1値へ変換しない。
- BIG: **最大402枚** / REG: **104枚**。
- 天井RT「ヴンダーモード」: BIG後 **999G** / REG後 **799G** → 次回ボーナスまでRT。
- RT純増は攻略資料で **約0.1～0.2枚/G**。主出玉純増ではないため補助値。

### resetBehavior v0.7
- settingChange ceiling counter: **CARRYOVER**。
- carryOver ceiling counter: **CARRYOVER**。
- purePowerCycle ceiling counter: **CARRYOVER**。
- 設定変更/純電源OFF→ONとも液晶は **司令室**スタート。
- settingChange dedicated shortened ceiling: **NONE**。そもそも天井進捗を設定変更で消さず、前日BIG/REG後からのG数を引き継ぐ。
- modeAfterReset: 規定Gモード再抽選型ではなく `NOT_APPLICABLE_NORMAL_A_TYPE`。
- stateAfterReset: AT系高確/低確は `NOT_APPLICABLE`。天井RT中そのものの設定変更/純電断時RT物理状態は直接資料を固定できず `UNVERIFIED_AFTER_RESEARCH`。
- advantageousSectionReset: `NOT_APPLICABLE_5TH_GEN_PRE_5_9`。
- resetBenefits: 設定変更でも天井Gを引継ぐため宵越し天井狙いが有効。設定変更後最初のREGでは設定示唆パターン選択率が通常より上昇。
- resetPenalties: `NONE_CONFIRMED_AFTER_RESEARCH`。
- resetDetection: 設定変更時ガックン報告あり。ただしメーカー保証の確定判別ではなく対策可能な補助情報。
- BAR揃いBIGムービー順は設定変更だけでなく電源OFF→ONでも初期化されるため、朝一ムービー初回化は変更判別に使えない。

### 公開朝一数値 — REG設定示唆パターン合算
設定変更後/天井REG/REG3連続時:
- 設定2 **12.45%**
- 設定3 **9.34%**
- 設定4 **18.13%**
- 設定5 **15.38%**
- 設定6 **21.79%**

純電源OFF→ON後:
- 設定2 **10.38%**
- 設定3 **7.78%**
- 設定4 **15.11%**
- 設定5 **12.82%**
- 設定6 **18.16%**

通常REG（比較基準）:
- 設定2 **5.19%**
- 設定3 **3.89%**
- 設定4 **約7.56%**
- 設定5 **約6.40%**
- 設定6 **9.09%**

- 一撃の本機専用表とちょんぼりすたの丸め値が一致。
- これは設定変更そのものを検出する確率ではなく、該当条件REGで「設定1否定/設定4以上/設定6」パターンが出る合算率。

## CONFLICT / 定義差
- 導入日はメーカー公式月表示 + 2015年当時12/7資料 + 一撃 + 当時新台一覧で **2015-12-07**をcanonical。一部後年ページの12/21表記は `CONFLICT_RELEASE_DATE_SECONDARY_2015_12_21` として平均せず除外。
- 機械割97.4/98.1/100.0/103.9/107.7/112.3%は精密値の丸め差。
- 50枚ベース「約42G」と設定別39.91～47.48Gは定義粒度差なので平均化しない。

## 2015-12-07群 — CLOSED_FOR_CURRENT_RESEARCH
- 今回のNo.944とNo.943「リノ」を処理済み。
- 2015年当時の導入機種一覧、メーカー/解析DB、P-WORLD系、時系列資料を横断再監査。
- 現時点で2015-12-07全国ホール導入を具体日付きで固定できる未登録5号機を両機以外に追加発見できず、**12-07群CLOSED**。

## 2015-12-08〜12-20境界 — CLOSED_FOR_CURRENT_RESEARCH
- 2015年12月の複数時系列一覧では、12/07「リノ」「ヱヴァ魂」の次の強い具体日が **2015-12-21「秘宝伝 ～伝説への道～」**。
- 12/08〜12/20に全国ホール導入を具体日付きで固定できる未登録5号機を今回追加発見できず、境界を **CLOSED_FOR_CURRENT_RESEARCH** とする。
- 12/21は次群としてまだOPEN扱い。候補に限定せず同日全メーカー横断監査を行う。

## 次回再開地点
1. **recordCount 944 / chronologicalFrontier 2015-12-07 / 12-07群CLOSED / 12-08〜12-20境界CLOSED** から開始。
2. README / mission v0.7 / INDEX / LATEST_HANDOFF / No.944を再取得。
3. 次の未処理強候補 **「秘宝伝 ～伝説への道～」**（大都技研）— 2015-12-21 を性能コア + resetBehavior v0.7で登録。
4. 12/21群は候補限定せずK-Navi/P-WORLD/メーカー/当時業界記事/解析一覧で全メーカー横断再監査する。
5. 欠損は表記揺れ・型式・メーカー・設定変更/据え置き/電源OFF ON/天井/モード/状態/ガックン等へ検索語変更し、公式・業界・当時解析・古DB・アーカイブ・回顧資料まで再探索後のみUNVERIFIED。
6. 競合は平均せずCONFLICT/定義差として双方保存。
7. 全変更後、mainから新規レコード・LATEST_HANDOFFを再取得して保存検証する。

## 遡及 resetBehavior QA
- retroQaScanConfirmedThrough: **2005-12_haisai-shiohime.md**
- retroQaNextInspection: **2005-12_dokonjo-gaeru-s.md**
- retroQaStatus: **SEQUENTIAL_SCAN_ACTIVE**
- 今回は本線No.944と12月時系列境界を優先し、遡及QA地点は変更していない。

## safeguard
- INDEXは旧集約状態なので進捗正本にしない。LATEST_HANDOFF + 実レコードを優先。
- main先行レコードを発見した場合は重複作成しない。
- **検定日/認定系日付/設置期限表の起算日をホール導入日と自動同一視しない。**
- 設定変更・据え置き・純電断・RAMクリアを同義扱いしない。
- 前作/後継機・同メーカー他機のresetBehaviorを流用しない。
- 朝一設定示唆率と変更判別率を混同しない。

## 主要出典 — 取得日 2026-09-08
### No.944 ヱヴァンゲリヲン～魂を繋ぐもの～
- SANKYOオンライン博物館: https://www.sankyo-fever.jp/collection/883/
- 一撃 機種トップ: https://1geki.jp/slot/evatsunagumono/
- 一撃 天井/設定変更: https://1geki.jp/slot/evatsunagumono/3/
- 一撃 REG中キャラ選択率: https://1geki.jp/slot/evatsunagumono/65/
- P-WORLD: https://www.p-world.co.jp/machine/database/7906
- ちょんぼりすた: https://chonborista.com/slot/bisty-slot/13409/
- すろぱちくえすと 天井/スペック: https://www.slopachi-quest.com/article/eva-tamashii/
- すろぱちくえすと 設定判別/朝一: https://www.slopachi-quest.com/article/eva-tamasi-settei/
- 期待値見える化 コイン持ち: https://slotjin.com/help-tool/eva-graph/
- P-MEDIA検定通過: https://p-media.info/%E3%80%90%E9%80%9F%E5%A0%B1%E3%80%91%E6%96%B0%E6%A9%9F%E7%A8%AE%E3%82%A8%E3%83%B4%E3%82%A1%E3%80%8C%E3%83%91%E3%83%81%E3%82%B9%E3%83%AD%E3%83%B1%E3%83%B4%E3%82%A1%E3%83%B3%E3%82%B2%E3%83%AA%E3%83%B2/
- man-soft リセット: https://smaslo.man-soft.com/slot-kaiseki/evangelion10-tamasiiwotunagumono.html

### 境界監査
- 2015年導入機種一覧: https://slotnews777.blog.fc2.com/blog-entry-2348.html
- 2015年機種一覧: https://www.nikuziru.com/slot/2015slot-list
- 秘宝伝2015-12-21補強: https://prtimes.jp/main/html/rd/p/000000075.000009755.html

## confidence
- No.944 exactReleaseDate: ANALYSIS_HIGH_MULTI_SOURCE_WITH_OFFICIAL_MONTH
- No.944 formalModelName: OFFICIAL_PLUS_INDUSTRY_PERIOD
- No.944 inspectionNumber: UNVERIFIED_AFTER_RESEARCH
- No.944 performanceCore: ANALYSIS_HIGH_MULTI_SOURCE
- No.944 normalCeiling: OFFICIAL_PLUS_ANALYSIS_HIGH
- No.944 settingChangeCeilingCounter: ANALYSIS_HIGH_DIRECT_RESET_TABLE_MULTI_SOURCE
- No.944 purePowerCycleCeilingCounter: ANALYSIS_HIGH_DIRECT_RESET_TABLE_MULTI_SOURCE
- No.944 morningNumericResetData: ANALYSIS_HIGH_MULTI_SOURCE_DIRECT_TABLE
- No.944 resetDetectionGakkun: ANALYSIS_SINGLE_EMPIRICAL_SUPPORTED
- 2015-12-07 group closure: HIGH_MULTI_SOURCE_BOUNDARY_AUDIT
- 2015-12-08_TO_2015-12-20 closure: MEDIUM_HIGH_MULTI_SOURCE_BOUNDARY_AUDIT
