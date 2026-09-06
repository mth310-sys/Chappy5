# 実機DB 最新リレー引継ぎ

更新日: 2026-09-07

## 現在地点

- recordCount: **853**
- latestRecordAdded: **パチスロ カウボーイビバップ**（オリンピア）— 2014-10-20
- latestRecord: `docs/real_machine_db/machines/2014-10-20_pachislot-cowboy-bebop.md`
- chronologicalFrontier: **2014-10-20**
- frontierLatestMachine: **パチスロ カウボーイビバップ**
- schema: **resetBehavior v0.7**
- status: **2014-10-20_GROUP_OPEN**

## 今回の同期 / 正本確認

- 最新mainの `README.md`、`docs/CHAPPY5_REAL_MACHINE_DATABASE_MISSION_V01.md`、`docs/real_machine_db/INDEX.md`、`docs/real_machine_db/LATEST_HANDOFF.md`、No.851 `2014-10-20_super-bingo-neo.md`、No.852 `2014-10-06_pachislot-burst-angel.md` を再読。
- INDEXは旧集約状態（19件）のため、README規定どおり **LATEST_HANDOFF + 実レコード** を進捗正本として使用。
- 作業開始時の正本は **852件 / frontier 2014-10-20 / 10-20_GROUP_OPEN**。
- 次の未処理だった「パチスロ カウボーイビバップ」を処理した。

## No.853 — パチスロ カウボーイビバップ

- record: `docs/real_machine_db/machines/2014-10-20_pachislot-cowboy-bebop.md`
- manufacturer: **オリンピア**。
- releaseDate: **2014-10-20**。K-Naviおよび当時新台情報で一致。
- modelName: **パチスロカウボーイビバップC1**。中古実機DB複数系統で一致。
- 数字形式検定番号: `UNVERIFIED_AFTER_RESEARCH`。

### 性能コア

- 機械割: **96.5 / 97.9 / 100.9 / 106.3 / 110.2 / 115.3%**。K-Navi / P-WORLD一致。
- AT初当たり:
  - 設定1 **1/344.6**
  - 設定2 **1/327.4**
  - 設定3 **CONFLICT: K-Navi 1/312.1 vs P-WORLD 1/321.2**
  - 設定4 **1/262.3**
  - 設定5 **1/232.5**
  - 設定6 **1/200.2**
- AT「スパイクRUSH」純増: **約2.5枚/G**。
- CZ「東風モード」AT期待度: **約35%**。
- 前兆「堕天使たちのバラッド」AT期待度: **約50%**。
- TANK! BONUS: **20G**、突入時点で初期100G AT確定。
- 通常AT間最大天井: **999G**。
- 50枚ベース: 検索語・資料系統変更後も比較可能値を固定できず `UNVERIFIED_AFTER_RESEARCH`。
- coreStatus: **PARTIAL_CORE**（baseGamesPer50欠損 + AT設定3CONFLICT）。

### resetBehavior v0.7

- 設定変更時: **天井ゲーム数 RESET / COMBOカウンター RESET**。
- 設定変更なしの電源OFF→ON: **天井ゲーム数・COMBOカウンター CARRYOVER** とする当時訂正版解析あり。
- 据え置き: 同じ電源ON/OFF引継ぎ資料により **CARRYOVER_SUPPORTED**。
- 通常天井999Gを基点に、設定変更後は**百・十・一の各桁で独立した減算抽選**。
- 設定変更後モード: **モードA確定（最低モード）**とする当時訂正版解析。
- 設定変更時AT当選では賞金首RUSHに一定優遇あり。
- 本機固有ガックン: `NONE_CONFIRMED_AFTER_RESEARCH`。
- 有利区間: `NOT_APPLICABLE_5TH_GEN_PRE_5_9`。

### 朝一公開数値 — 訂正版

設定変更後の天井減算抽選（百/十/一の位）:

- 0: **37.50 / 37.50 / 37.50%**
- 1: **25.00 / 25.00 / 25.00%**
- 2: **12.50 / 12.50 / 12.50%**
- 3: **6.25 / 6.25 / 6.25%**
- 4: **1.56 / 3.13 / 3.13%**
- 5: **1.56 / 3.13 / 3.13%**
- 6: **6.25 / 3.13 / 3.13%**
- 7: **1.56 / 3.13 / 3.13%**
- 8: **1.56 / 3.13 / 3.13%**
- 9: **6.25 / 3.13 / 3.13%**

重要: 2014-12-20に流布した **「400G以内81.25%で天井当選」**は、2014-12-29の同サイト訂正版で**誤報**と明記された。DBでは `RETRACTED_RESET_400G_WITHIN_81_25_PERCENT` として履歴だけ残し、canonical値へ採用しない。

### 変更判別

- 前日G数が分かれば、宵越し天井到達位置のズレを変更推測に利用可能。
- COMBO CHANCE周期は1〜64G。COMBOカウンターは変更でリセット、電源ON/OFFで引継ぎとする訂正版解析のため、前日周期を把握していれば朝一発生位置も判別材料になる。
- 例: 前日COMBO間40Gなら据え置き時は残り最大24G相当。朝一でそれを超えてCOMBO CHANCE非発生なら変更を強く支持するという当時攻略ロジックあり。

## 2014-10-20群 — OPEN継続

### 登録済み

- No.851 **スーパービンゴNEO**（ベルコ）— 2014-10-20。
- No.853 **パチスロ カウボーイビバップ**（オリンピア）— 2014-10-20。

### 10/20候補から遡及バックフィルへ移したもの

- No.852 **パチスロ バーストエンジェル**（山佐）— 10/06 vs 10/20 CONFLICT。10/20重複作成禁止。

### 次回の境界監査

- 10/20同日群はまだ **CLOSEDにしない**。
- K-Navi / P-WORLD / メーカー別一覧 / 当時新台記事 / ALL7以外のDBを横断し、未登録パチスロの有無を再監査する。
- 同日群に未登録機が見つかればその機種を先に処理する。
- 追加なしを複数系統で確認できたら10/20群をCLOSEDにし、次の具体的導入日へ進む。

## 重要境界訂正 — バーストエンジェル

- No.852 バーストエンジェルはK-Navi **2014-10-06**、2014-10-08実ホール導入済み、ALL7・複数当時解析 **2014-10-20**で日付競合。
- 10/20だけに正規化せず、ファイルは最古具体日10/06で遡及登録済み。
- 10/20に重複レコードを作らない。

## 遡及 resetBehavior QA カーソル

- 次: `docs/real_machine_db/machines/2007-03-19_kakumei-senshi-choshu-riki.md`（革命戦士長州力）。
- 新規本線を止めず、既存PARTIAL/COMPLETE_COREを1件ずつ再QAする。

## safeguard

- INDEXは旧集約状態なので進捗正本にしない。LATEST_HANDOFF + 実レコードを優先。
- exact release dateでは「導入予定」「全国導入」「地域先行」「実ホール導入済み」を区別する。
- ALL7単独で同日群CLOSED判定しない。
- カウボーイビバップのAT設定3は **1/312.1 vs 1/321.2 CONFLICT**。平均禁止。
- カウボーイビバップの旧「400G以内81.25%」リセット解析は**誤報訂正済み**。canonical値として復活させない。
- 一般的な5号機ATの電断挙動を本機固有契約として推定転記しない。
- 2015-06-08到達時の **吉宗～極～（ヨシムネH2A4 / 3S1093）** 正式量産版処理注意を維持。

## 次回再開地点

1. **recordCount 853 / chronologicalFrontier 2014-10-20 / 10-20_GROUP_OPEN** から開始。
2. 最新mainで README / mission / INDEX / LATEST_HANDOFF / No.851 / No.852 / No.853を再確認。
3. **2014-10-20同日群を全メーカー横断で再監査**。
4. 未登録同日機が見つかればその機種を次に処理。見つからなければ10/20群をCLOSEDにして次の具体日へ進む。
5. 遡及QAは `2007-03-19_kakumei-senshi-choshu-riki.md` から再開。

## 主要出典 — 取得日 2026-09-07

### カウボーイビバップ
- K-Navi: `https://p-kn.com/slot/2130/`
- P-WORLD: `https://www.p-world.co.jp/machine/database/7517`
- 旧パチマガスロマガ: `https://cs62.cs-plaza.com/g/pachi/pla/s_conq/olympia_slot/117/a.php`
- すろぱちくえすと 訂正版: `https://www.slopachi-quest.com/article/cowboy-bebop-2/`
- すろぱちくえすと 旧誤報: `https://www.slopachi-quest.com/article/cowboy-bebop-reset/`
- 5号機天井一覧: `https://crankyseven.com/sp/tenjo-5ka.htm`
- 中一商事型式DB: `https://www.nakaiti.com/html/sOlympia019.html`
- イニシャルP型式DB: `https://initialp.cart.fc2.com/ca18/2136/`

### バーストエンジェル（前回保持）
- 山佐公式: `https://yamasa-next.co.jp/model_brt/`
- K-Navi: `https://p-kn.com/slot/2126/`
- P-WORLD: `https://www.p-world.co.jp/machine/database/7514`
- ALL7: `https://www.all7.jp/plans/index/2014/10`
