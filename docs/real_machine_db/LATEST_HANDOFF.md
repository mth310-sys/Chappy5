# 実機DB 最新リレー引継ぎ

更新日: 2026-09-04

## 現在地点

- recordCount: **563**
- latestMachineAdded: **アイムジャグラーAPEX**（北電子 / 2011-03-22）
- latestRecord: `docs/real_machine_db/machines/2011-03-22_im-juggler-apex.md`
- chronologicalFrontier: **2011-03-22**
- frontierLatestExactDateMachine: **アイムジャグラーAPEX**
- schema: **resetBehavior v0.7**
- status: **READY_TO_CONTINUE**

## 今回の継続確認

- 最新mainの `README.md`、正本ミッションv0.7、`INDEX.md`、`LATEST_HANDOFF.md`、562レコード「GETだ!BILLY」を再取得して開始。
- 開始時正本は **recordCount 562 / chronologicalFrontier 2011-03-22**。
- LATEST_HANDOFF指定どおり2011-03-22同日群を継続。
- repo検索で **アイムジャグラーAPEX未登録**を確認し、563件目として追加。
- K-Navi 2011年3月導入カレンダーでは3/22パチスロ同日群が **G-SPIN / GETだ!BILLY / アイムジャグラーAPEX** の3機。3機とも登録済みとなったため **2011-03-22同日群を閉じる**。

## 今回追加 — 563 アイムジャグラーAPEX

- メーカー: **北電子**
- 5号機 / **ノーマルAタイプ / 完全告知**
- 導入: **2011-03-22**（K-Naviホール導入開始。月次資料とも整合）
- 北電子公式工場予測出玉率: **95.85 / 96.70 / 98.71 / 100.80 / 102.80 / 105.16%**
- BIG: **1/287.4 / 282.5 / 282.5 / 273.1 / 273.1 / 268.6**
- REG: **1/455.1 / 442.8 / 348.6 / 321.3 / 268.6 / 268.6**
- 合算: **1/176.2 / 172.5 / 156.0 / 147.6 / 135.4 / 134.3**
- BIG純増約 **325枚** / REG純増約 **104枚**
- 天井: **なし**

### 性能値CONFLICT / 定義差

- 機械割は北電子公式の工場予測値を主系列とする。
- 攻略側には **96.9〜106.6%** 等の理論/実戦想定系列があり、公式値と平均せず `CONFLICT_DEFINITION` として保持。
- 50枚ベースはK-Navi **34.21〜35.59G**、すろぱちくえすと **35.00〜36.38G**、別シミュレーターにも異なる算出値。取りこぼし/算出条件差があるため `CONFLICT_CALCULATION_ASSUMPTION` として平均しない。

### resetBehavior v0.7 — アイムジャグラーAPEX

- `settingChangeBehavior`: **SETTING_CHANGE_DETECTABLE_BY_REEL_GAKKUN_IF_NOT_COUNTERMEASURED / OTHERWISE_UNVERIFIED**
- `carryOverBehavior`: **NO_PERSISTENT_MODE_OR_CEILING_CONFIRMED / OTHERWISE_UNVERIFIED**
- `powerCycleBehavior`: **UNVERIFIED_AFTER_RESEARCH**
- `gameCounterReset`: **NOT_APPLICABLE_NO_CEILING**
- `ceilingAfterReset`: **NOT_APPLICABLE_NO_CEILING**
- `modeAfterReset`: **NOT_APPLICABLE_NO_MODE_SYSTEM_CONFIRMED**
- `stateAfterReset`: **NO_RESET_SENSITIVE_INTERNAL_STATE_CONFIRMED / OTHERWISE_UNVERIFIED**
- `advantageousSectionReset`: **NOT_APPLICABLE**
- `resetBenefits`: **NONE_CONFIRMED_AFTER_RESEARCH**
- `resetPenalties`: **NONE_CONFIRMED_AFTER_RESEARCH**
- `resetDetection`: **REEL_GAKKUN_AVAILABLE_IF_STORE_HAS_NOT_SPUN_REELS_AFTER_CHANGE**
- `numericResetData`: **NONE_CONFIRMED_AFTER_RESEARCH**

設定変更時ガックンは攻略資料で本機固有記述を確認。ただし店舗が1G回す等で対策可能。単純電源OFF→ONのみの挙動は表記・検索語・資料系統を変えて再探索しても直接確定できず推測補完していない。6号機アイムジャグラーEXのリセット情報は別機種なので転用していない。

## 主要出典 — 563（取得日 2026-09-04）

- 北電子公式: `https://www.kitadenshi.co.jp/slot/imjugglerapex/`
- P-WORLD: `https://www.p-world.co.jp/machine/database/6239`
- K-Navi基本情報: `https://p-kn.com/slot/1358/`
- K-Navi 1000円あたりゲーム数: `https://p-kn.com/slot/1358/29978/`
- K-Navi 2011年3月導入カレンダー: `https://p-kn.com/calendar/201103/`
- すろぱちくえすと: `https://www.slopachi-quest.com/article/imujagura-apex/`
- けんのスロットシミュレーション: `https://kenslo65536.com/kaiseki/juggler-im-apex.html`
- pachinavi.net（型式/検定番号の補助確認）: `https://pachinavi.net/machines/im-juggler-apex/`

## 今回のGitHub更新

- 563追加: `docs/real_machine_db/machines/2011-03-22_im-juggler-apex.md`
- 563 machine record commit: `71ea0ef64df886644b665febd69a7e6edbd0bd54`
- LATEST_HANDOFF: 本更新

## 遡及QA継続地点

- **怪胴王 (`docs/real_machine_db/machines/2006-11_kaidouou.md`) まで補完済み**を維持。
- `2006-11-27_thunder-v-special.md` はresetBehavior収集済みのため重複QA対象外。
- QA済み範囲を推測では動かさず、怪胴王直後のmachine treeを実パス/日付順に直接確認して最初のresetBehavior欠損から再開する。

## 次回再開地点

1. **recordCount 563 / chronologicalFrontier 2011-03-22**。最新mainのREADME / mission / INDEX / LATEST_HANDOFF / 563レコードを再取得。
2. **2011-03-23〜03-27境界を最終監査**。メーカー別一覧・当時導入カレンダー・業界記事を突合し、未登録5号機があれば最古から564件目として追加。
3. 境界に未登録機がなければ次の明確な全国導入アンカー **2011-03-28「ヱヴァンゲリヲン～真実の翼～」** へ進む。repo重複確認後、未登録なら次レコード候補。
4. PARTIAL/UNVERIFIEDは検索語・資料系統を変えて再探索し、競合は平均せずCONFLICT。
