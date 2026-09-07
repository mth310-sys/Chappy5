# 実機DB 最新リレー引継ぎ

更新日: 2026-09-08

## 現在地点
- recordCount: **937**
- latestRecordAdded: **パチスロ鬼武者3 時空天翔**（Sammy / サミー）
- latestRecordAddedPath: `docs/real_machine_db/machines/2015-11-16_pachislot-onimusha3-jiku-tensho.md`
- chronologicalFrontier: **2015-11-16**
- frontierLatestMachine: **パチスロ鬼武者3 時空天翔**
- schema: **resetBehavior v0.7**
- status: **2015-11-16_GROUP_OPEN**

## 今回の同期 / 正本確認
- 最新mainの `README.md`、mission v0.7、旧 `INDEX.md`、`LATEST_HANDOFF.md`、No.936 `2015-11-09_pachislot-yatterman.md` を再取得。
- INDEXは19件時点の旧集約なのでREADME規定どおり **LATEST_HANDOFF + 実レコード** を進捗正本として使用。
- 開始時正本 recordCount **936** / 2015-11-09群CLOSED。
- 11/10～11/15境界は直前handoffの監査結果を再確認し、次未処理 **パチスロ鬼武者3 時空天翔** をNo.937として追加。

## No.937 — パチスロ鬼武者3 時空天翔
- record: `docs/real_machine_db/machines/2015-11-16_pachislot-onimusha3-jiku-tensho.md`
- manufacturer: **Sammy / サミー**
- releaseDate: **2015-11-16**
- formalModelName: **鬼武者3 時空天翔AS**
- inspectionNumber: **5S0745**
- generation/system: **5号機・新基準AT / 疑似ボーナス経由+AT直撃**

### performanceCore
- 機械割: **97.4 / 98.9 / 100.6 / 102.6 / 105.2 / 110.2%**。
- AT初当たり: **1/439.9 / 424.2 / 394.6 / 376.9 / 353.1 / 344.3**。
- 50枚ベース: **約44.9G**（別資料は約45Gで丸め一致）。
- 純増: **約2.5枚/G**。
- AT「時空天翔」: **1セット50G+α**。
- 疑似ボーナス「斬魔一閃BATTLE」: **1セット約16G**、勝利で時空天翔、AT期待度約50%。
- 通常天井: **斬魔一閃BATTLE or 時空天翔間1280G+前兆**。

### resetBehavior v0.7
- 設定変更: **天井RESET / 800G+前兆へ短縮 / 内部状態RESELECT**。
- 据え置き: **天井進捗・内部状態CARRYOVER**。
- 純電源OFF→ON: **天井進捗・内部状態CARRYOVER**。
- ceilingAfterReset: **800G+前兆**（通常1280Gから480G短縮）。
- stateAfterReset: 高確スタートの可能性あり。ただし設定変更時高確率の確定解析値は確認できず `UNVERIFIED_AFTER_RESEARCH`。
- 当時実戦記事の「12.5〜20%程度」は記事自身が解析未公表の推測と明記するため、解析数値へ昇格させず参考注記のみ。
- resetStartStage: **凱旋門**とする当時解析あり。
- purePowerCycle startStage: `UNVERIFIED_AFTER_RESEARCH`。
- resetDetection: **設定変更時ガックンあり / 据え置きなし**とする当時実戦・動画資料あり。左リールは疑似リールのため中・右を確認対象とする。ホール側1G回し等の一般的対策可能性があるため絶対確定判別にはしない。
- advantageousSectionReset: `NOT_APPLICABLE_5TH_GEN_PRE_5_9`。

### conflict / definition control
- AT初当たり精密系列と1/440〜1/344の丸め系列は同定義の丸め差として扱う。
- 機械割は複数当時解析で設定1=97.4%。後年回顧記事の一部に97.0%表記があるため `CONFLICT_SECONDARY_RETROSPECTIVE_SETTING1` として保持。
- 設定変更時高確率12.5〜20%は推測値であり、公開解析数値として扱わない。

## 2015-11-16群 — OPEN
直前handoffと2015年11月導入カレンダー系資料から同日候補を継続監査。

処理済み:
1. パチスロ鬼武者3 時空天翔 — No.937

未処理強候補:
1. **パチスロ ゴッドイーター 荒神Ver.**
2. **パチスロ ああっ女神さまっ**
3. **スーパーブラックジャック2**
4. **パチスロ銀と金2**

- 候補だけに限定せず、11/16同日を全メーカー横断で再監査してからCLOSED判定する。
- 地域先行/後発、納品日/全国導入日の定義差を混同しない。

## 遡及 resetBehavior QA
- retroQaScanConfirmedThrough: **2005-12_nobunaga-no-yabou-tenka-sousei-r.md**
- retroQaNextInspection: **2005-12_haisai-shiohime.md**
- retroQaStatus: **SEQUENTIAL_SCAN_ACTIVE**
- 今回は本線No.937新規収集を優先し、遡及QA地点は前進させていない。

## 次回再開地点
1. **recordCount 937 / chronologicalFrontier 2015-11-16 / 11/16群OPEN** から開始。
2. README / mission v0.7 / INDEX / LATEST_HANDOFF / No.937を再取得。
3. 本線は **2015-11-16 パチスロ ゴッドイーター 荒神Ver.** を最初の強い未処理候補として、既存レコード重複を確認してから性能コア + resetBehavior v0.7で登録。
4. 続いて **ああっ女神さまっ → スーパーブラックジャック2 → 銀と金2** を候補順に照合し、同日全メーカーを横断監査する。候補だけに限定しない。
5. 遡及QAは `2005-12_haisai-shiohime.md` から継続。
6. 欠損は表記揺れ・型式・メーカー・設定変更/据え置き/電源OFF ON/天井/モード/ガックン等へ検索語を変更し、公式・業界・当時解析・古DB・アーカイブ・回顧資料まで再探索後のみUNVERIFIED。
7. 競合は平均せずCONFLICT/定義差として双方保存。
8. 全変更後、mainから新規レコード・LATEST_HANDOFFを再取得して保存検証する。

## safeguard
- INDEXは旧集約状態なので進捗正本にしない。LATEST_HANDOFF + 実レコードを優先。
- main先行レコードを発見した場合は重複作成しない。
- 設定変更・据え置き・純電断を自動で同義扱いしない。
- 前作/後継機・同メーカー他機のresetBehaviorを流用しない。
- 解析未公表と明記された実戦推測値を公開解析数値へ昇格させない。

## 主要出典 — 取得日 2026-09-08
### No.937 パチスロ鬼武者3 時空天翔
- HAZUSE: https://hazuse.com/machine/pachislot/5S0745/
- P-WORLD / グリーンべると: https://news.p-world.co.jp/articles/7893/greenbelt
- ちょんぼりすた: https://chonborista.com/slot/sammy-slot/12723/
- スロパチクエスト本体: https://www.slopachi-quest.com/article/onimusha3/
- スロパチクエスト リセット: https://www.slopachi-quest.com/article/onimusya-reset/
- 期待値見える化: https://slotjin.com/zone/onimusha3/
- man-soft: https://smaslo.man-soft.com/slot-kaiseki/onimusya3.html
- Pachinavi: https://pachinavi.net/machines/onimusha-3/

## confidence
- No.937 exactReleaseDate: ANALYSIS_HIGH_MULTI_SOURCE_PLUS_PERIOD_INDUSTRY_SCHEDULE
- No.937 formalModelName: ANALYSIS_HIGH_PERIOD_DB
- No.937 inspectionNumber: ANALYSIS_HIGH_PERIOD_DB
- No.937 performanceCore: ANALYSIS_HIGH_MULTI_SOURCE
- No.937 resetGameCounter: ANALYSIS_HIGH_MULTI_SOURCE
- No.937 resetCeiling800G: ANALYSIS_HIGH_MULTI_SOURCE
- No.937 purePowerCycle ceiling/state: ANALYSIS_HIGH_DIRECT_COMPARISON
- No.937 resetStateBehavior: ANALYSIS_HIGH_MULTI_SOURCE
- No.937 resetStateNumericDistribution: UNVERIFIED_AFTER_RESEARCH
- No.937 resetDetectionGakkun: ANALYSIS_SINGLE_DIRECT_PRACTICAL_PLUS_CORROBORATION
