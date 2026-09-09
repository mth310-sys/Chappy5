更新日: 2026-09-09

## 現在地点
- recordCount: **1106**
- latestRecordAdded: **パチスロ 聖闘士星矢 海皇覚醒**（三洋物産 / SANYO）
- latestRecordAddedPath: `docs/real_machine_db/machines/2017-07-18_saint-seiya-kaiou-kakusei.md`
- chronologicalFrontier: **2017-07-18**
- frontierLatestMachine: **パチスロ 聖闘士星矢 海皇覚醒 — No.1106**
- schema: **resetBehavior v0.7**
- status: **2017-07-18_GROUP_OPEN**

## 今回の同期 / 進捗
- 最新mainの `README.md`、mission v0.7、旧 `INDEX.md`、`LATEST_HANDOFF.md`、No.1105「ロイヤルマハロ-30」を再取得して開始。
- INDEX本文は初期19件時点の旧スナップショットのため、README規定どおりLATEST_HANDOFFと実レコードを進捗正本として採用。
- 開始時mainは **1105件 / chronologicalFrontier 2017-07-03 / 7/3群CLOSED**。
- 7/4～7/17境界を前handoffの監査結果に従い継続し、次の明確な導入群 **2017-07-18** へ前進。
- 7/18群先行候補 **「パチスロ 聖闘士星矢 海皇覚醒」** をNo.1106として登録。
- 2017年5号機版と2019年「海皇覚醒Special」、2024年スマスロ「CUSTOM EDITION」の混同を避けるため、型式 `パチスロ聖闘士星矢海皇覚醒KH` / 検定 `7S0460` を軸に資料を分離。
- resetBehaviorは一撃・なな徹等で設定変更/据え置き/純電断契約と設定変更時GBレベル・内部状態・不屈ポイントを数値まで固定。

## No.1106 — パチスロ 聖闘士星矢 海皇覚醒
- manufacturer: **三洋物産 / SANYO**
- releaseDate: **2017-07-18**
- formalModelName: **パチスロ聖闘士星矢海皇覚醒KH**
- certificationNumber: **7S0460**
- generation/system: **5号機（5.5号機） / ART / バトル突破型ART→ゲーム数上乗せART**
- recordStatus: **COMPLETE_CORE_WITH_RESET_BEHAVIOR_V0_7**

### performanceCore
- 機械割: **97.8 / 98.8 / 100.8 / 103.9 / 107.5 / 113.1%**。
- 海将軍激闘（GB）初当たり: **1/376 / 362 / 344 / 324 / 299 / 275**。
- 聖闘士RUSH（SR）初当たり: **1/1311.34 / 1263.84 / 1137.00 / 980.51 / 769.01 / 683.12**。
- ベース: **約45.3～45.9G/50枚**、比較用代表約45G/50枚。
- ART純増: **約2.0枚/G**。
- GB: **25G＋バトル**、最大3戦突破でSR。
- SR: **100G以上＋α**。
- GB間天井: **最大999G**、SPモードなら **536G**。
- SRスルー天井: **9回連続非当選→10回目GBでSR確定**。

### resetBehavior v0.7
- settingChange: **GB間天井 / SR間天井 / GB抽選状態 / CZ抽選状態 / GBレベル / 不屈ptをRESET/RESELECT**。RT状態は引継ぎ。
- carryOver / powerCycle: **GB間天井 / SR間天井 / GB抽選状態 / CZ抽選状態 / GBレベル / 不屈pt / RT状態をCARRYOVER**。
- 朝一液晶: 設定変更・電源ON/OFFとも **アンドロメダ島**。ステージ単独では変更判別不可。
- GB抽選状態: **低確50.0% / 高確50.0%**。
- CZ抽選状態: **低確50.0% / 高確ショート46.88～46.9% / 高確ロング3.13～3.1%**。
- 設定変更時GBレベル:
  - 設定1～3: Lv1 **49.2%** / Lv2 **25.0%** / Lv3 **12.5%** / Lv4 **12.5%** / Lv5 **0.8%**。
  - 設定4: **47.7 / 24.2 / 12.1 / 14.1 / 1.9%**。
  - 設定5: **47.3 / 24.0 / 12.0 / 14.5 / 2.2%**。
  - 設定6: **41.5 / 21.1 / 10.6 / 20.1 / 6.5%**。
- 不屈pt: **30pt以上スタート43%以上**、0pt **14.1%**、49pt **1.6%**を確認。中間個別振り分けは現行資料の表レンダリング欠落のため推測しない。
- advantageousSectionReset: **NOT_APPLICABLE_5TH_GEN_PRE_5_9**。
- deterministic gakkun: 検索語/資料系統変更後も高信頼の本機固有確定契約を固定できず **UNVERIFIED_AFTER_RESEARCH**。

### conflict QA
- SR初当たりについて、みんスロに設定4 **1/1059** / 設定5 **1/879** / 設定6 **1/800** がある一方、一撃/すろぱちくえすと等は **1/980.51 / 1/769.01 / 1/683.12** で一致。
- 平均せず、後者をcanonical、前者を **CONFLICT_OUTLIER_SECONDARY_SOURCE** としてNo.1106レコードへ保存。

## 2017-07-18群 — OPEN
今回までの登録:
1. パチスロ 聖闘士星矢 海皇覚醒 — No.1106

未処理先行候補（個別処理時に導入日・型式・メーカーを再監査）:
1. ガールフレンド(仮)
2. 結城友奈は勇者である
3. ラグナロクサーガ
4. ワンバーワン-30
5. グレートキングハナハナ-30
6. トラッドサンダーブラック

## 遡及 resetBehavior QA
- retroQaScanConfirmedThrough: **2006-05_the-king-of-fighters.md**。
- retroQaStatus: **SEQUENTIAL_SCAN_ACTIVE**。
- 次カーソル: `2006-06_churahime-sun.md`。
- 今回は新規7/18群のNo.1106処理を優先し、遡及QAカーソルは進めていない。

## 次回再開地点
1. 最新mainの README / mission v0.7 / INDEX / LATEST_HANDOFF / No.1106を再取得。
2. **1106件 / chronologicalFrontier 2017-07-18 / 7/18群OPEN** を正本として継続。
3. 次の未処理 **「ガールフレンド(仮)」** をNo.1107候補として、導入日・型式・検定番号・性能コア・resetBehavior v0.7を再探索して処理。
4. 続いて **結城友奈は勇者である → ラグナロクサーガ → ワンバーワン-30 → グレートキングハナハナ-30 → トラッドサンダーブラック** を順に処理。
5. 7/18群処理後、同日全メーカー横断監査を行って漏れを確認しCLOSED可否を判断。
6. 遡及QAは `2006-06_churahime-sun.md` から継続。

## 主要出典 — 取得日 2026-09-09
### No.1106 パチスロ 聖闘士星矢 海皇覚醒
- SANYO公式製品一覧: https://www.sanyobussan.co.jp/products/slot.html
- HAZUSE: https://hazuse.com/machine/pachislot/7S0460/
- パチビー: https://www.pachibee.jp/machines/index/217060007
- PiDEA X: https://www.pidea.jp/articles/%E4%B8%89%E6%9C%A8%E6%B5%81%E3%80%81%E8%81%96%E9%97%98%E5%A3%AB%E6%98%9F%E7%9F%A2%E6%B5%B7%E7%9A%87%E8%A6%9A%E9%86%92%E3%81%AE%E8%A9%95%E4%BE%A1%E3%81%AF%EF%BC%9F
- 一撃 5号機版: https://1geki.jp/slot/s_seiya_kaiou/
- 一撃 天井/朝一: https://1geki.jp/slot/s_seiya_kaiou/3/
- なな徹 朝イチ/設定変更: https://nana-press.com/kaiseki/machine/37/641/
- なな徹 小役確率: https://nana-press.com/kaiseki/machine/37/644/
- すろぱちくえすと: https://www.slopachi-quest.com/article/seiya-poseidon/
- みんスロ（競合検知用）: https://minslo.com/%E8%81%96%E9%97%98%E5%A3%AB%E6%98%9F%E7%9F%A2-%E6%B5%B7%E7%9A%87%E8%A6%9A%E9%86%92/
