更新日: 2026-09-13

## 現在地点
- recordCount: **1549**
- latestRecordAdded: **パチスロ戦国無双3 — No.1549**
- latestRecordAddedPath: `docs/real_machine_db/machines/2023-02-06_sengoku-musou3.md`
- chronologicalFrontier: **2023-02-06**
- frontierLatestMachine: **パチスロ戦国無双3 — No.1549**
- schema: **resetBehavior v0.7**
- status: **2023-02-06_GROUP_CLOSED_2_OF_2 / NEXT_2023-02-20_TATE_NO_YUUSHA**

## 今回の同期 / 進捗
- 最新mainの `README.md`、正本 `docs/CHAPPY5_REAL_MACHINE_DATABASE_MISSION_V01.md` v0.7、旧表示 `docs/real_machine_db/INDEX.md`、最新 `LATEST_HANDOFF.md`、直前No.1548 `パチスロ 緋弾のアリアⅡ` を確認して開始。
- INDEXは19件の旧表示のためREADME規定どおり、最新handoffとmain実レコードを進捗正本として採用。
- No.1549 `パチスロ戦国無双3` を性能コア + resetBehavior v0.7で追加。
- P-WORLD 2023年2月導入カレンダー、導入日順2023年一覧、K-Navi/業界資料で2/6群を再監査。パチスロは緋弾のアリアⅡ + 戦国無双3の2機で一致したため2023-02-06群をCLOSED。
- 次の導入境界は2023-02-20。既知は `パチスロ盾の勇者の成り上がり` と `パチスロ 探偵オペラ ミルキィホームズR 大収穫祭!!!!` の2機。

## No.1549 — パチスロ戦国無双3
- manufacturer: **山佐ネクスト**
- formalModel: **Sパチスロ戦国無双3ZYTCD**
- inspectionCode: **UNVERIFIED_AFTER_RESEARCH**
- releaseDate: **2023-02-06**
- generation/system: **6.5号機 / メダルAT / 規定刻数・疑似ボーナス経由AT**
- settings: **L / 1 / 2 / 4 / 5 / 6**
- payoutRate: **98.2 / 99.2 / 103.9 / 106.4 / 110.0%（設定1/2/4/5/6）**
- ボーナス合算: **1/271.6 / 1/216.0 / 1/174.5 / 1/147.1 / 1/127.6**
- AT初当たり: **1/582.0 / 1/483.2 / 1/385.3 / 1/310.2 / 1/247.8**
- baseGamesPer50: **約39.4G/50枚**
- netIncrease: **AT約1.8枚/G / 上位ATの一部約4.0枚/G**
- basicPayout: **REG約36枚 / BIG約120枚 / AT初期平均約50G**
- coreStatus: **COMPLETE_CORE**
- resetBehaviorQA: **COMPLETE_RESET_CORE_WITH_MODE_RESELECT_AND_PUBLIC_MODE_DISTRIBUTION_UNVERIFIED_AFTER_RESEARCH**

### resetBehavior v0.7 — No.1549
- **設定変更**: 有利区間・天井/刻数・内部状態RESET。通常モードを再抽選。甲斐国ステージ開始。
- **据え置き**: 天井/刻数・内部状態CARRY_OVER。有利区間継続側。モードそのものの直接対比契約は `UNVERIFIED_AFTER_RESEARCH`。
- **純電源OFF→ON**: 天井/刻数・内部状態CARRY_OVER、甲斐国ステージ開始。純電断単独のモード/有利区間直接契約は `UNVERIFIED_AFTER_RESEARCH`。
- **通常天井**: 通常A999 / 通常B888 / 通常C555 / 引き戻し333 / 天国111 / 慶次1029刻+α。慶次はAT当選時に天下無双への道。
- **リセット専用固定天井短縮**: `NONE_CONFIRMED_AFTER_RESEARCH`。
- **朝一モード**: 専用朝一モードは確認できず。設定変更時とAT終了後に通常モード再抽選。
- **公開朝一モード振り分け**: `PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH`。設定ごとの上位/慶次選択傾向は公開されるが具体率は固定できず。
- **朝一恩恵**: 全モード共通111刻のボーナス/AT期待度50%以上。ただし設定変更専用値ではないため分離保存。
- **変更判別**: 朝一データカウンタと液晶「刻」のズレが変更材料。設定変更/電断とも甲斐国開始のためステージ単独判別不可。有利区間ランプの機種固有高信頼契約とガックンは再探索後 `UNVERIFIED_AFTER_RESEARCH`。

### conflicts — No.1549
- 後年DBにボーナス1/290.0〜1/175.0、機械割98.0〜111.0%、純増約6.5枚/G等の主要解析と異なる値あり。canonicalは複数当時解析一致の `1/271.6〜1/127.6 / 98.2〜110.0% / 1.8 or 4.0枚/G`。`CONFLICT_LATE_DATABASE` としてレコード内保持。
- 天井をゲーム数換算800G+αとする後年DBがあるが、本機の管理単位は液晶「刻」。canonicalはモード別刻数天井とし定義混在させない。

## 2023-02-06群 — CLOSED 2/2
1. パチスロ 緋弾のアリアⅡ — No.1548
2. パチスロ戦国無双3 — No.1549

## 次群候補 — 2023-02-20
1. **パチスロ盾の勇者の成り上がり（サミー）** — 未処理
2. **パチスロ 探偵オペラ ミルキィホームズR 大収穫祭!!!!（カルミナ）** — 未処理

## 今回の主要資料
### No.1549
- Amusement Japan: https://amusement-japan.co.jp/article/detail/10003263/
- P-WORLD: https://www.p-world.co.jp/machine/database/9753
- K-Navi: https://p-kn.com/slot/3887/
- なな徹: https://nana-press.com/kaiseki/machine/482/
- なな徹 スペック: https://nana-press.com/kaiseki/machine/482/12550/
- なな徹 モード: https://nana-press.com/kaiseki/machine/482/13488/
- パチマガスロマガ モード: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/yamasanext_slot/11/tj04-2.php
- ちょんぼりすた: https://chonborista.com/slot/yamasa-slot/177507/
- イチカツ: https://ichikatsu.com/sengokumusou3/
- 一撃: https://1geki.jp/slot/s_sngkms3/

### 境界監査
- P-WORLD 2023年2月: https://www.p-world.co.jp/database/machine/introduce_calendar.cgi?year_month=2023-02
- 導入日順2023年一覧: https://www.slopachi-quest.com/article/2023-dounyuukisyu/
- 2/20予定一覧: https://marutto-w.com/industry_news/20230220

## 保存コミット
- No.1549追加: `3db255685d3cef836132afeb68df73509fa2c2c9`
- handoff更新: 本コミット

## 次回再開地点
**No.1550候補 `パチスロ盾の勇者の成り上がり`（サミー / 2023-02-20）から継続する。正式型式・検定番号、性能コア、resetBehavior v0.7（設定変更/据え置き/純電断、ゲーム数・天井、モード/状態、有利区間、朝一恩恵/不利、変更判別、公開朝一数値）を欠損判定前に表記揺れ・型式名・メーカー名・各リセット語で再探索する。その後 `パチスロ 探偵オペラ ミルキィホームズR 大収穫祭!!!!` を処理し、PB・別型式・地域先行・延期まで再監査して2023-02-20群をCLOSED判定する。既存No.1549以前の性能値はやり直さない。**
