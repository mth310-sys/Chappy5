更新日: 2026-09-10

## 現在地点
- recordCount: **1200**
- latestRecordAdded: **ちゃぶ台返し**
- latestRecordAddedPath: `docs/real_machine_db/machines/2018-06-04_chabudai-gaeshi.md`
- chronologicalFrontier: **2018-06-04**
- frontierLatestMachine: **ちゃぶ台返し — No.1200**
- schema: **resetBehavior v0.7**
- status: **2018-06-04_GROUP_CLOSED_AFTER_CROSS_SOURCE_AUDIT**

## 今回の同期 / 進捗
- 最新mainのREADME / mission v0.7 / INDEX / LATEST_HANDOFF / No.1198を再取得して開始。
- `INDEX.md` は19件時点の旧スナップショットのため、README規定どおりLATEST_HANDOFF + main実レコードを正本として採用。
- 開始時点は **1198件 / chronologicalFrontier 2018-06-04 / 6/4群OPEN**。
- No.1199 `パチスロ 貞子vs伽椰子`、No.1200 `ちゃぶ台返し` をperformance core + resetBehavior v0.7で追加。
- 6/4候補に含まれていた `シークレットハイビスカス` は、実レコードを再確認した結果すでに **No.1194** として登録済み。canonical 2018-05-21で、2018-05-28表記および発表時2018-06-03納品予定をDATE CONFLICTとして保持済み。6/4カレンダー掲載を理由に別レコード化しない。
- 6/4同日群を再監査し、既知候補 `ディスクアップ / 黄門ちゃまV / 天元突破グレンラガン極 / 貞子vs伽椰子 / ちゃぶ台返し` は登録済み、`シークレットハイビスカス` はNo.1194の既存日付競合に吸収。追加の独立未処理機を今回固定できなかったため6/4群をCLOSED。
- 次の日付群の境界監査では2018-06-18導入として `大神～回胴編～ / 十字架4 / 沖ドキ！バケーション（25φ） / 沖ドキ！バケーション-30` を確認。次回は6/11以前の漏れがないか短い境界監査を行ってから6/18群へ進む。

## No.1199 — パチスロ 貞子vs伽椰子
- path: `docs/real_machine_db/machines/2018-06-04_sadako-vs-kayako.md`
- manufacturer: **藤商事**
- releaseDateCanonical: **2018-06-04**
- formalModelName: `貞子VS伽椰子FSC`
- certificationNumber: `7S0824`
- generation/system: **5.9号機 / A+RT**
- settings: **1 / 2 / 5 / 6**
- payout: **97.4 / 98.7 / 104.0 / 108.5%**
- completeStrategyPayout: **100.2 / 101.5 / 105.5 / 110.0%**
- BIG合算: **1/306.2 / 1/300.6 / 1/291.3 / 1/275.4**
- REG: **1/352.3 / 1/348.6 / 1/327.7 / 1/312.1**
- bonus combined: **1/163.8 / 1/161.4 / 1/154.2 / 1/146.3**
- base: **約35G/50枚**
- basic payout: **BIG最大311枚 / REG最大52枚**
- RT: **20G / 40G / 77G**
- normal ceiling: **非搭載**
- RT net increase: `UNVERIFIED_AFTER_RESEARCH`

### resetBehavior v0.7
- settingChange: 設定変更後初回ボーナス終了時のみ「呪いの手役物」の設定変更専用色テーブルを使用。RT状態等は `UNVERIFIED_AFTER_RESEARCH`。
- carryOver: 純電断と独立した据え置き時RT/内部状態契約 `UNVERIFIED_AFTER_RESEARCH`。
- powerOFF→ON: RT/内部状態の本機固有契約 `UNVERIFIED_AFTER_RESEARCH_AS_DISTINCT_CONDITION`。
- gameCounter/ceiling: `NOT_APPLICABLE_NO_CEILING`。
- advantageousSection: 本機固有契約 `UNVERIFIED_AFTER_RESEARCH`。5.9号機A+RT一般論から補完しない。
- resetDetection: ガックンは当時解析で判別不可。設定変更後初回ボーナス終了時の**紫**は設定変更確定。
- numericResetData: 紫出現率 **設定1 15.0% / 設定2 20.0% / 設定5 15.0% / 設定6 25.0%**。色テーブル全値は機種レコードへ保存。

## No.1200 — ちゃぶ台返し
- path: `docs/real_machine_db/machines/2018-06-04_chabudai-gaeshi.md`
- manufacturer: **ベルコ**
- releaseDateCanonical: **2018-06-04**
- formalModelName: `チャブダイ/A1`
- certificationNumber: `UNVERIFIED_AFTER_RESEARCH`
- generation/system: **5.9号機 / ノーマルA / 完全告知**
- settings: **1 / 2 / 3 / 4 / 5 / 6**
- payout: **98.0 / 99.5 / 101.5 / 104.0 / 107.0 / 110.2%**
- bonus combined: **1/165 / 1/150 / 1/149 / 1/141 / 1/134 / 1/123**
- base: **35.8 / 35.6 / 36.2 / 36.6 / 36.8 / 36.9G/50枚**
- basic payout: **BIG312枚 / REG104枚**
- BIG/REG individual rates: `UNVERIFIED_AFTER_RESEARCH`（当時解析でも調査中。後年読者投稿値はcanonical不採用）
- ceiling: **非搭載**

### resetBehavior v0.7
- settingChange: 本機固有の成立済みボーナス/演出モード初期化/初期出目契約 `UNVERIFIED_AFTER_RESEARCH`。
- carryOver: 据え置きを独立条件とした契約 `UNVERIFIED_AFTER_RESEARCH`。
- powerOFF→ON: `UNVERIFIED_AFTER_RESEARCH_AS_DISTINCT_CONDITION`。
- gameCounter/ceiling: `NOT_APPLICABLE_NO_CEILING_OR_GAME_COUNT_RELEASE`。
- mode/state: AT/ART/CZモードはN/A。低レベル成立状態はUNVERIFIED。
- resetBenefits: 短縮天井N/A、設定変更専用初当たり優遇/朝一抽選 `NONE_CONFIRMED_AFTER_RESEARCH`。
- resetDetection: 本機固有ガックン/開始表示/初期出目契約 `UNVERIFIED_AFTER_RESEARCH`。

## 2018-06-04群監査
### 登録済み
- No.1196 パチスロディスクアップ
- No.1197 パチスロ黄門ちゃまV
- No.1198 パチスロ 天元突破グレンラガン極
- No.1199 パチスロ 貞子vs伽椰子
- No.1200 ちゃぶ台返し

### 既存レコードへ吸収した日付競合
- No.1194 シークレットハイビスカス
  - canonical: 2018-05-21
  - secondary: 2018-05-28
  - pre-release delivery plan: 2018-06-03
  - 6/4カレンダー掲載があっても同一型式の重複レコードを作成しない。

### 群判定
- `2018-06-04_GROUP_CLOSED_AFTER_CROSS_SOURCE_AUDIT`
- 既知6/4候補を登録/既存競合へ解決し、今回の横断再探索で追加の独立未処理型式を固定できなかったためCLOSED。

## 次群境界監査 — 2018-06-18
現時点で2018-06-18導入を複数資料または当時解析で確認した候補:
- **大神～回胴編～** — エンターライズ / A+ART
- **十字架4** — NET / A+ART
- **沖ドキ！バケーション** — アクロス / ノーマル / 25φ
- **沖ドキ！バケーション-30** — アクロス / ノーマル / 30φ（25φと別型式の有無を必ず確認して独立判定）

## 遡及 resetBehavior QA
- retroQaScanConfirmedThrough: **2006-07_hanasakari.md**（花盛）。
- nextRetroQaCursor: `docs/real_machine_db/machines/2006-07_dengeki-franken.md`（電撃フランケン）。
- retroQaStatus: **SEQUENTIAL_SCAN_ACTIVE**。
- 今回は前進レコードと6/4群CLOSEを優先し、QAカーソル自体は変更していない。

## 継続注意事項
- `INDEX.md`は旧スナップショット。LATEST_HANDOFF + main実レコードを優先する。
- `美ラメキ！`を2018-03-12へ登録しない。canonicalは2018-07-02として後続キューで処理する。
- ディスクアップの導入日は2018-06-04 canonical、2018-05-21資料はCONFLICT保持済み。
- シークレットハイビスカスはNo.1194登録済み。6/4候補として重複追加しない。
- resetBehaviorで疑問符・「調査中」・一般論を確定契約へ昇格しない。
- 据え置きと純電断を同義扱いしない。直接資料がある場合のみ各契約へ記録する。
- 導入日・出玉率・型式等の競合は平均/統合せず`CONFLICT`として保持する。

## 次回再開地点
1. 最新mainのREADME / mission v0.7 / INDEX / LATEST_HANDOFF / No.1200を再取得。
2. **1200件 / chronologicalFrontier 2018-06-04 / 6/4群CLOSED**を正本として継続。
3. 2018-06-05～06-17の地域差・別スペック・日付境界を短く監査し、未処理独立型式がなければ2018-06-18群へ進む。
4. **大神～回胴編～をNo.1201先頭候補**としてperformance core + resetBehavior v0.7を収集。
5. 続いて `十字架4 / 沖ドキ！バケーション / 沖ドキ！バケーション-30` を処理。同日全メーカー/別スペック監査後にのみ6/18群をCLOSEする。
6. 遡及QAは `2006-07_dengeki-franken.md`（電撃フランケン）から継続。

## 主要出典 — 取得日 2026-09-10
### No.1199 パチスロ 貞子vs伽椰子
- HAZUSE: https://hazuse.com/machine/pachislot/7S0824/genre/201/
- K-Navi: https://p-kn.com/slot/3009/
- ちょんぼりすた: https://chonborista.com/slot/fuji-slot/57859/
- すろぱちくえすと: https://www.slopachi-quest.com/article/sadako-vs-kayako/
- パチマガスロマガ: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/fuji_slot/27/a.php

### No.1200 ちゃぶ台返し
- BELLCO公式: https://www.s-bellco.co.jp/products/slot/chabudai/
- PiDEA X: https://www.pidea.jp/articles/%E4%B8%89%E6%9C%A8%E6%B5%81%E3%80%81%E6%80%92%E3%82%8C%EF%BC%81%E3%81%A1%E3%82%83%E3%81%B6%E5%8F%B0%E8%BF%94%E3%81%97%E3%81%AE%E8%A9%95%E4%BE%A1%E3%81%AF%EF%BC%9F
- 娯楽産業: https://www.goraku-sangyo.com/%E3%83%99%E3%83%AB%E3%82%B3%E3%80%80%E6%96%B0%E6%A9%9F%E7%A8%AE%E3%80%8C%E3%81%A1%E3%82%83%E3%81%B6%E5%8F%B0%E8%BF%94%E3%81%97%E3%80%8D%E7%99%BA%E8%A1%A8/
- DMMぱちタウン: https://p-town.dmm.com/machines/3140/recommend
- すろぱちくえすと: https://www.slopachi-quest.com/article/chabudaigaesi/
- ちょんぼりすた: https://chonborista.com/slot/belko-slot/57588/
- P-WORLD: https://www.p-world.co.jp/machine/database/8638

### 次群境界
- 大神～回胴編～: https://chonborista.com/slot/enta-slot/58561/
- 十字架4: https://p-kn.com/slot/2994/
- 沖ドキ！バケーション: https://p.hisshobon.jp/machine/3182/1/69942

## 今回コミット
- No.1199追加: `9222b884d40641a8525782561eef5d6104e5a3c9`
- No.1200追加: `c92b50e5d27b01d1b3fce7e1017ad414ff159c27`
