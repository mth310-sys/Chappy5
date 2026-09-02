# 実機DB 最新リレー引継ぎ

更新日: 2026-09-03

## 現在地点

- 毎回最新mainの `README.md`、実機DBミッションv0.7、旧 `INDEX.md`、本 `LATEST_HANDOFF.md`、既存レコード、直近コミットを再取得する。
- `INDEX.md` は19件地点の旧履歴集計。運用上の正本は本 `LATEST_HANDOFF.md` とrepoの実ファイル/直近mainコミット。
- 今回開始時の最新mainは398件 `2027II ～すべてはここから～` まで完了済み。古い395件地点には戻らず398を正本として継続。
- 2009-08-24同日群のrepo treeを確認し、`神たま～ARTやで!全員集合～`、`パチスロがんばれ!!ロボコン`、`めぞん一刻2` は2009年版の未登録候補。K-Naviで3機とも2009-08-24ホール導入開始を確認し、handoff記載順の最初の未処理 `神たま～ARTやで!全員集合～` を **399** に追加。

## 399. 神たま～ARTやで!全員集合～

record:
- `docs/real_machine_db/machines/2009-08-24_kamitama-art.md`

machine record commit:
- `f9b7c96cc03f221a70f9376b6ebc4da9634abb81`

要点:
- manufacturer: **SNKプレイモア**
- formalModelName: **カミタマART** / 検定9S0424
- releaseDate: **2009-08-24**（K-Naviホール導入開始 / パチ＆スロ必勝本8/24導入開始予定）
- generation: **5号機**
- systemType: **ボーナス+ART / CZ経由ナビストック型ART / 周期CZ / 高確 / ボーナス間天井高確**
- BIG/MID/REGは各設定同率で設定1 **1/682.67** → 設定6 **1/537.18**、合算 **1/227.56 → 1/179.06**。P-WORLD/K-Navi/必勝本で整合。
- 50枚ベースは必勝本解析で設定1〜6 **35.64 / 36.11 / 36.59 / 37.09 / 37.60 / 38.13G**。
- ART「みこし祭」は **30G・約+1.0枚/G**、CZ経由。ナビストック保有時はART突入ナビが発生。
- BIG約252枚 / MID約168枚 / REG約84枚。
- ボーナス間**999G**で次回ボーナスまで高確に滞在する天井高確。出玉直撃天井とは区別。
- 機械割はP-WORLD/pacnk **97.3〜109.0%** と必勝本/P_Style777のシミュレート **96.65〜108.08%** に定義差。平均せず `CONFLICT_PAYOUT_MARKET_97_3_TO_109_0_VS_SIMULATED_96_65_TO_108_08`。
- `coreStatus=COMPLETE_CORE_WITH_PAYOUT_DEFINITION_CONFLICT`。

### v0.7 resetBehavior — 神たまART

- pacnk回顧解析で **設定変更時ナビストック消滅 / 1/2で高確スタート**を回収。
- `settingChangeBehavior=PARTIAL_CONFIRMED`。
- `modeAfterReset=CONFIRMED_HIGH_PROBABILITY_50_PERCENT`。
- `stateAfterReset=PARTIAL_CONFIRMED_NAV_STOCK_CLEAR`。
- `resetBenefits=CONFIRMED`（50%高確スタート）、`resetPenalties=CONFIRMED`（ナビストック消滅）。
- 999G天井高確カウンタ、150/450G周期CZカウンタの設定変更clear/retain、据え置き、単純電源OFF→ON、ガックン/初期出目/液晶等の変更判別は本機固有直接資料を確定できず `UNVERIFIED_AFTER_RESEARCH`。
- 有利区間は5号機のため `NOT_APPLICABLE`。
- 2008年初代神たま・2011年神たま2のリセット値は逆輸入しない。

## resetBehavior遡及QA

既補完:
- バーグラー
- 快盗天使ツインエンジェル
- 格闘激戦区
- 南国娘30
- **スパイダーマン2G**（今回）

### スパイダーマン2G QA

record:
- `docs/real_machine_db/machines/2006-10_spiderman2g.md`

QA commit:
- `2412e7ff194ae127b67a76864a1c13c87a684276`

- 既存性能コア/数値は不用意に崩さず、v0.7 resetBehaviorを追加。
- 2006年当時グリーンべると、P-WORLD、旧パチマガスロマガ、回顧/実機解説を再探索。
- 全ボーナス後RT、BIG後最大150G / MID後最大50G、RT純増約+0.4枚/G、規定G/ボーナス/クモ役入賞で終了、クモ役回避可能を再確認。
- 設定変更時のRT残G/内部RT状態、据え置き時のRT残G/内部RT状態、単純電源OFF→ON、ガックン/初期出目/ランプ等の変更判別は本機固有本文を確定できず `UNVERIFIED_AFTER_RESEARCH`。一般的な5号機RT挙動から補完しない。
- 通常ゲーム数到達型天井は確認できないため `gameCounterReset / ceilingAfterReset = NOT_APPLICABLE_NO_NORMAL_GAME_COUNT_CEILING_CONFIRMED`。RT残Gは天井カウンタとは分離してUNVERIFIED管理。
- 有利区間は `NOT_APPLICABLE`。

性能コアの既存COMPLETE_CORE完了判定は不用意に崩さず、resetBehavior QAを別管理する。

## 次回再開地点

### 本線
1. **399件地点 / 神たま～ARTやで!全員集合～まで完了**から再開。
2. **2009-08-24同日群を継続**。repo未登録かつK-Naviで同日導入確認済みの `パチスロがんばれ!!ロボコン`、`めぞん一刻2` を収集し、性能コア＋v0.7 resetBehaviorを満たしたものから追加する。
3. ロボコンはK-Navi/P-WORLD/サミー公式2009年アーカイブ/777TOWN/pacnkを先行確認済み。合算全設定1/256、ART約+1.5〜1.56枚/G・50G・80%OVERループ、pacnk機械割97.27〜112.24%を候補値として必ず再照合する。
4. 同日群終了後、2009-08-25〜29を境界監査。
5. `サンサンハナハナ-30` はパイオニア公式2009年8月発売、当時グリーンべると2009-08-30納品予定を月末群で再確認する。

### resetBehavior遡及QA
1. **スパイダーマン2Gまで補完済み**。
2. 次は `docs/real_machine_db/machines/2006-10_surogenjin.md`。既にresetBehaviorがあれば飛ばし、次の未補完実ファイルへ進む。
3. PARTIAL/UNVERIFIEDは機種名/型式/メーカー/シリーズ名と `設定変更 / リセット / 朝一 / 据え置き / 電源OFF ON / 天井 / RT/ART状態 / ガックン` を組み替え、当時解析・古いDB・アーカイブ・回顧まで再探索する。

### 次回の必須開始手順
- 最新mainのREADME / 最新ミッション / INDEX / LATEST_HANDOFF / 既存machine tree / 直近コミットを再取得。
- 本handoffよりmainが進んでいれば、**必ず最新mainを優先**。
- 候補名をrepo実ファイル/検索で未登録確認後、性能コア＋v0.7 resetBehaviorを同じ基準で収集。
- 競合値は平均せずCONFLICT、欠損は十分な再探索後のみUNVERIFIED_AFTER_RESEARCH。

## 今回の保存

- 399 神たま～ARTやで!全員集合～: `docs/real_machine_db/machines/2009-08-24_kamitama-art.md`
- machine record commit: `f9b7c96cc03f221a70f9376b6ebc4da9634abb81`
- スパイダーマン2G v0.7 reset QA commit: `2412e7ff194ae127b67a76864a1c13c87a684276`
- 本 `LATEST_HANDOFF.md` を399件地点 / スパイダーマン2G QA済みへ更新。
