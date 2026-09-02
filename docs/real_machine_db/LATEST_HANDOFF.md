# 実機DB 最新リレー引継ぎ

更新日: 2026-09-03

## 現在地点

- 毎回最新mainの `README.md`、実機DBミッションv0.7、旧 `INDEX.md`、本 `LATEST_HANDOFF.md`、既存レコード、直近コミットを再取得する。
- `INDEX.md` は19件地点の旧履歴集計。運用上の正本は本 `LATEST_HANDOFF.md` とrepoの実ファイル/直近mainコミット。
- 今回開始時の最新mainは397件 `侍ジャイアンツ2` まで完了済み。README→ミッションv0.7→INDEX→LATEST_HANDOFF→既存397レコード→直近コミットを再取得し、397を正本として継続。
- 2009-08-18〜23を境界監査。安全に確定できる別の未処理機を確認できず、JPS `2027II ～すべてはここから～` は2009-08-23納品開始 / 2009-08-24ホール導入開始を確認、repo未登録のため **398** に追加。

## 398. 2027II ～すべてはここから～

record:
- `docs/real_machine_db/machines/2009-08-23_2027ii.md`

machine record commit:
- `550285467e30f0e7b46231a94fdf938755ac680f`

要点:
- manufacturer: **JPS**
- formalModelName: **ニーマルニーナナセカンド**
- releaseDate: **2009-08-23納品開始 / 2009-08-24ホール導入開始 CONFLICT_DEFINITION_DELIVERY_VS_HALL_START**
- generation: **5号機**
- systemType: **ボーナス+ART / 無限ART（次回ボーナスまで） / 高確・潜航系モード**
- P-WORLD掲載BIG **1/2730.67→1/2048.00**、REG **1/67.70→1/66.60**、合算 **1/66.1→1/64.5**、ART初当たり **1/518.3→1/210.5**。
- 機械割はP-WORLD・5号機クロニクルで **96.8/99.8/101.6/105.9/109.9/115.7%** が一致。当時業界回顧の発売前整理は最高115.0%のため、設定6最大値は平均せず `CONFLICT_PAYOUT_MAX_115_7_VS_115_0`。
- BIG約**112枚**、REG約**35枚**。
- ART「BATTLE MODE」は **約+2.0枚/G、次回ボーナスまで継続**。継続率70〜95%。低確REGでも当時業界発表で約10%の自力ART突入期待。
- 50枚ベースは表記揺れ/型式/メーカー/50枚/1000円/ベース/コイン持ちで、P-WORLD・K-Navi・旧パチマガ・5号機クロニクル・当時業界資料・777TOWN・公式派生資料・回顧まで再探索したが直接値を確定できず `UNVERIFIED_AFTER_RESEARCH`。
- 通常ゲーム数到達型のボーナス/ART確定天井は再探索後も確認できず。
- `coreStatus=PARTIAL_CORE_BASE_UNVERIFIED_PAYOUT_MAX_CONFLICT`。

### v0.7 resetBehavior — 2027II

- 旧パチマガスロマガに本機専用 **「攻め時・ヤメ時・設定変更時」** 項目の存在までは確認。
- settingChangeBehavior: **UNVERIFIED_AFTER_RESEARCH**。設定変更時の高確/潜航/追跡/ART潜伏状態の具体処理を回収できず、一般的5号機挙動から補完しない。
- carryOverBehavior / powerCycleBehavior: **UNVERIFIED_AFTER_RESEARCH**。据え置き/単純電源OFF→ON時の内部モード・ART潜伏等の処理を本機固有資料で確定できず。
- gameCounterReset / ceilingAfterReset: **NOT_APPLICABLE_NO_GAME_COUNT_CEILING_CONFIRMED**。通常時ゲーム数天井を確認できず、朝一短縮天井数値も未確認。
- modeAfterReset / stateAfterReset / resetDetection: **UNVERIFIED_AFTER_RESEARCH**。
- resetBenefits / resetPenalties: **NONE_CONFIRMED_AFTER_RESEARCH**。朝一専用モード振り分け・当選率・恩恵率も未確認。
- advantageousSectionReset: **NOT_APPLICABLE**（5号機・有利区間制度前）。
- `2027II / 2027Ⅱ / 2027セカンド / 2027II すべてはここから / ニーマルニーナナセカンド / JPS` と `設定変更 / リセット / 朝一 / 据え置き / 電源OFF ON / 宵越し / 天井 / 高確 / 潜航 / 追跡 / ART潜伏 / ガックン` を組み替えて再探索済み。
- 2010年 `2027IINEO` のリセット/高確仕様は別スペックのため本機へ逆輸入しない。

## resetBehavior遡及QA

既補完:
- バーグラー
- 快盗天使ツインエンジェル
- 格闘激戦区
- 南国娘30

性能コアの既存COMPLETE_CORE完了判定は不用意に崩さず、resetBehavior QAを別管理する。

## 次回再開地点

### 本線
1. **398件地点 / 2027IIまで完了**から再開。
2. **2009-08-24同日群を継続監査**。候補 `神たま～ARTやで!全員集合～`、`パチスロがんばれ!!ロボコン`、`めぞん一刻2` はrepo既存有無を確認し、納品開始/ホール導入の具体日を資料横断で比較して最古の未処理から追加する。
3. 同日群終了後、2009-08-25〜29を境界監査する。
4. `サンサンハナハナ-30` はパイオニア公式2009年8月発売、当時グリーンべるとで2009-08-30納品予定確認済み。8月末群で具体日順を再確認する。

### resetBehavior遡及QA
1. **南国娘30まで補完済み**。
2. 次の実ファイルは `docs/real_machine_db/machines/2006-10_spiderman2g.md`。設定変更/据え置き/電断時の最大150G/50G RT残G・内部RT状態、パンク回避状態、変更判別を当時業界/旧解析中心に再探索する。
3. その後 `2006-10_surogenjin.md` を確認。補完済みなら次の未補完実ファイルへ進む。

### 次回の必須開始手順
- 最新mainのREADME / 最新ミッション / INDEX / LATEST_HANDOFF / 既存machine tree / 直近コミットを再取得。
- 本handoffよりmainが進んでいれば、**必ず最新mainを優先**。
- 候補名をrepo実ファイル/検索で未登録確認後、性能コア＋v0.7 resetBehaviorを同じ基準で収集。
- 欠損判定前に機種名/型式/メーカー/シリーズ名と、設定変更/リセット/朝一/据え置き/電源OFF ON/天井短縮/モード/ガックン/有利区間を組み替えて再探索。

## 今回の保存

- 398 2027II ～すべてはここから～: `docs/real_machine_db/machines/2009-08-23_2027ii.md`
- machine record commit: `550285467e30f0e7b46231a94fdf938755ac680f`
- 本 `LATEST_HANDOFF.md` を398件地点へ更新。
