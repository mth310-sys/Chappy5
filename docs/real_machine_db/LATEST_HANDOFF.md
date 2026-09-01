# 実機DB 最新リレー引継ぎ

更新日: 2026-09-02

## 現在地点

- 最新mainの `README.md`、実機DBミッションv0.7、`INDEX.md`、既存レコード、直前 `LATEST_HANDOFF.md` を再読して継続。
- `INDEX.md` は旧19件地点のため、README規定どおり本 `LATEST_HANDOFF.md` を進捗正本とする。
- 直前正本は **309 `ハードボイルド～グリフォンの幻影～`（サミー / 2008-11-03）**。
- **310 `南国育ち`（オリンピア / 型式 南国育ちR2 / 25φ）** を追加。
- 性能コア + v0.7 `resetBehavior` を同時収集。設定変更時の天井カウンタと開始モードについて本機固有の公開解析を回収できた。
- resetBehavior遡及QAは **`南国娘（2006-09）`** を補完。既存 `coreStatus: PARTIAL` を維持し、reset QAを別管理した。

## 310. 南国育ち

- record: `docs/real_machine_db/machines/2008-11-03_nangoku-sodachi.md`
- manufacturer: オリンピア
- modelNumber: `南国育ちR2`
- releaseDate: **2008-11-03**。2008-10-03グリーンべるとが「納品は11月3日からを予定」と明記。後年の導入日表記差は当時業界の納品開始日を優先。
- generation: 5号機
- systemType: ボーナス + 通常モード管理 + ART `南国チャンス` + 996G天井RT / 完全告知・パンク回避型ART。
- BIG: **1/397.19 / 1/392.43 / 1/387.79 / 1/383.25 / 1/378.82 / 1/374.49**。
- REG: **1/668.73 / 1/661.98 / 1/655.36 / 1/648.87 / 1/642.51 / 1/636.27**。
- 合算: **1/249.19 / 1/246.38 / 1/243.63 / 1/240.94 / 1/238.31 / 1/235.74**。P-WORLDとCrankySevenで整合。
- 機械割: **CONFLICT**。P-WORLD/CrankySeven **95.5 / 98.1 / 100.7 / 104.0 / 107.2 / 110.1%**。別回顧資料 **96.02 / 98.50 / 101.21 / 104.41 / 107.60 / 110.34%**。平均化禁止。
- 50枚ベース: **約35.1G/50枚**。当時グリーンべるとの約35G/1000円と丸め一致。
- ボーナス: BIG約**204枚**、REG約**48枚**。
- `南国チャンス`: **50G/1セット、約+1.5枚/G**。平均継続率80%以上とする当時資料あり。無限南国チャンスあり。
- 通常モード: **低確率 / 高確率 / 天国**。ボーナス成立時の滞在モードでART突入率が変化。
- 天井: **通常状態996Gで待機ゾーン経由の天井RT**。天井RT純増約**+0.3枚/G**。
- `coreStatus: COMPLETE_CORE_WITH_PAYOUT_RATE_CONFLICT`。

### resetBehavior（310）

- `settingChangeBehavior`: **CONFIRMED**。設定変更後も**天井までのゲーム数はクリアされず、高確率モードからスタート**。
- `gameCounterReset`: **NOT_RESET_ON_SETTING_CHANGE**。996G天井までの既存ゲーム数を設定変更でゼロにしない。
- `modeAfterReset`: **HIGH_MODE_START_CONFIRMED**。
- `resetBenefits`: **CONFIRMED**。高確率モード開始のため、朝一の最初のボーナス成立時ART抽選は低確開始より有利。CrankySevenも「朝一はチャンス」と記載。
- 高確率モード時ART突入率: 設定1〜6 **25.0 / 28.1 / 32.6 / 36.0 / 40.0 / 75.0%**。公開朝一比較値として保存。
- `carryOverBehavior`: **PARTIAL**。少なくとも天井G数は設定変更でも維持。ART/無限ART/天井RT内部状態の翌日処理は未確定。
- `powerCycleBehavior`: `UNVERIFIED_AFTER_RESEARCH`。設定変更を伴わない電源OFF→ONのみの996Gカウンタ/モード/ART・RT処理を25φ本機固有資料で確定できず。
- `stateAfterReset`: `PARTIAL`。通常モードは高確開始確定。ART/無限ART/天井RT中変更時の残G・内部状態処理は未確定。
- `advantageousSectionReset`: `NOT_APPLICABLE`（5号機・有利区間制度前）。
- `resetDetection`: `UNVERIFIED_AFTER_RESEARCH`。ガックン/初期出目/ランプ等の確定変更判別を回収できず。「遅れ＋ハズレ」は高確以上示唆であり、設定変更確定演出とは扱わない。
- `resetBehaviorQA: SUBSTANTIAL_RESET_BEHAVIOR_CONFIRMED_COUNTER_CARRYOVER_AND_HIGH_MODE_START_POWER_CYCLE_AND_DETECTION_UNVERIFIED`。

## 310主要出典

取得日: 2026-09-02

- https://web-greenbelt.jp/00003877/ — 2008-11-03納品予定、型式南国育ちR2、ART約+1.5枚/G、内部モード依存、約35G/1000円。
- https://www.p-world.co.jp/machine/database/5353 — 25φ本機の設定別BIG/REG/合算、機械割、約204/48枚、50G ART、996G天井RT。
- https://crankyseven.com/nangokusodati5-pc.htm — 約35.1G、各確率/機械割、996G天井RT、**設定変更後も天井G数非クリア＋高確率モード開始**、高確時ART突入率。
- https://web-greenbelt.jp/00003956/ — 後発30φ版は25φ版とゲーム性が全て同等との当時業界確認。
- https://www.p-world.co.jp/machine/database/5422 — 同ゲーム性30φ版でも設定変更後「天井G数非クリア＋高確開始」を補助照合。

## resetBehavior 遡及QA

### 南国娘（2006-09）

- record: `docs/real_machine_db/machines/2006-09_nangoku-musume.md`
- 既存 `coreStatus: PARTIAL` は維持。
- v0.7 `resetBehavior` を追加。
- 設定変更/据え置き/電源OFF→ON時のBIG後50G完走型RT残G・内部RT状態処理は、検索語・資料系統を変えた再探索後も本機固有の直接資料を確定できず `UNVERIFIED_AFTER_RESEARCH`。
- 通常ゲーム数天井、設定変更専用短縮天井、朝一専用モード、公開朝一当選率は `NONE_CONFIRMED`。有利区間は `NOT_APPLICABLE`。
- ガックン/初期出目/パトランプ等による設定変更確定判別も `UNVERIFIED_AFTER_RESEARCH`。
- `resetBehaviorQA: RESET_FIELDS_RESEARCHED_DEVICE_SPECIFIC_STATE_HANDLING_UNVERIFIED_NO_NORMAL_CEILING_CONFIRMED`。
- PARTIAL再探索の副産物として、回顧資料から機械割 **97.1 / 100.0 / 102.4 / 104.2 / 107.0 / 110.3%** を回収。ただし独立した当時解析との第二照合がないため `ANALYSIS_SINGLE_RETROSPECTIVE` とし、性能完了判定は変更しない。

## 境界監査・重複防止

- **既存310件の再追加禁止。**
- 309 `ハードボイルド～グリフォンの幻影～` と310 `南国育ち` は2008-11-03同日群として処理済み。
- `南国育ち30` は後発30φ版。2008-12-12発表資料で納品2009-01-18とされるため、310へ別機として混入させない。
- `クラッピーパーク` は2008-11-17導入候補として後続キュー保持。
- `鬼火`、`サイサイ` は2008-11-24納品開始資料があるため11月前半へ混入させない。

## 次回再開地点

1. **LATEST_HANDOFF基準310件地点。2008-11-04〜11-16の未処理機をALL7/P-WORLD/当時業界記事/メーカー別5号機一覧で境界監査。**
2. それ以前に確定未収録機がなければ **`クラッピーパーク`（2008-11-17候補）** の性能コア＋v0.7 resetBehaviorへ進む。
3. 11月後半は `鬼火` / `サイサイ`（2008-11-24）を後続候補として保持。
4. resetBehavior遡及QAは2006-09群を継続。**次は `大山鳴動 漢みちスロ！` を優先し、同月 `竹中直人のパチスロ太閤記` も続けて欠損確認する。**
5. 過去handoffで曖昧だったジャックポット系はrepo実ツリー上 `2006-11_jackpot-tropical-version.md` として初代実ファイルを確認済み。2017年Ver.2と混同せず、時系列到達時にこの実ファイルへQAする。
