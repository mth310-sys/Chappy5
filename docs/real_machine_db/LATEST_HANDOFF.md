更新日: 2026-09-09

## 現在地点
- recordCount: **1109**
- latestRecordAdded: **ラグナロクサーガ**（メーシー）
- latestRecordAddedPath: `docs/real_machine_db/machines/2017-07-18_ragnarok-saga.md`
- chronologicalFrontier: **2017-07-18**
- frontierLatestMachine: **ラグナロクサーガ — No.1109**
- schema: **resetBehavior v0.7**
- status: **2017-07-18_GROUP_OPEN**

## 今回の同期 / 進捗
- 最新mainの `README.md`、mission v0.7、旧 `INDEX.md`、`LATEST_HANDOFF.md`、No.1108「パチスロ 結城友奈は勇者である」を再取得して開始。
- INDEX本文は初期19件時点の旧スナップショットのため、README規定どおりLATEST_HANDOFFと実レコードを進捗正本として採用。
- 開始時mainは **1108件 / chronologicalFrontier 2017-07-18 / 7/18群OPEN**。
- handoff指定の次未処理 **「ラグナロクサーガ」** をNo.1109として登録。
- 導入日2017-07-18、メーカー メーシーをパチビー/K-Navi/HAZUSE/DMM等で照合。
- 型式 `ラグナロクサーガ／RN` をDMMぱちタウン・中古実機資料で確認。HAZUSE DATA当該ページの `machine_code=7S0502` を検定番号として保存。
- performance coreとresetBehavior v0.7を同時収集。設定変更/据え置き/純電断の天井・内部モード、朝一液晶357、アースガルド開始まで保存。

## No.1109 — ラグナロクサーガ
- manufacturer: **メーシー**
- releaseDate: **2017-07-18**
- formalModelName: **ラグナロクサーガ／RN**
- certificationNumber: **7S0502**
- generation/system: **5号機（5.5号機） / ボーナス+ART / ゲーム数上乗せ+セットストック / モード管理**
- recordStatus: **COMPLETE_CORE_WITH_RESET_BEHAVIOR_V0_7**

### performanceCore
- 機械割: **98.1 / 99.9 / 101.5 / 106.0 / 110.1 / 119.1%**。
- ART初当たり: **1/549.3 / 475.2 / 496.0 / 355.0 / 299.9 / 163.9**。
- グングニルボーナス: 全設定共通 **1/8192.0**。
- ベース: **約35.6～36.3G/50枚**。
- ART純増: **約2.0枚/G**。
- ART: **1セット60G以上**。
- SEVEN RUSH平均: **約132G**、神話RUSH平均: **約248G**。
- グングニルボーナス実獲得: **約56枚**、ダークサイドゾーン約**100枚**。
- 通常天井: **ART間999Gまたは1499G**、振り分け約**1:2**。

### resetBehavior v0.7
- settingChange: **天井RESET / 内部モードRESELECT**。RT状態は二次資料でRT0開始。
- powerCycle / 据え置き: **天井CARRYOVER / 内部モードCARRYOVER**。
- 設定変更時・電源OFF→ON時とも液晶出目 **357**。出目単独では変更判別不可。
- 朝一ステージ: **アースガルド**。
- 設定変更専用の天井短縮、朝一専用高確、専用初当たり優遇は **NONE_CONFIRMED_AFTER_RESEARCH**。
- 設定変更時の具体的ART抽選モード/神話モード/闇モード初期振り分けは **UNVERIFIED_AFTER_RESEARCH**。
- 純電断時RT状態は資料が「引き継ぐ？」表記のため **UNVERIFIED_AFTER_RESEARCH**。
- deterministic machine-specific gakkun/change detection: **UNVERIFIED_AFTER_RESEARCH**。
- advantageousSectionReset: **NOT_APPLICABLE_5TH_GEN_PRE_5_9**。

### conflict / definition QA
- 機械割設定6: HAZUSE/P-WORLD/期待値見える化 **119.1%** vs ちょんぼりすた **119.9%**。平均せず119.1%をcanonical、119.9%をCONFLICT保持。
- ART設定1: HAZUSE/P-WORLD **1/549.3** vs ちょんぼりすた **1/549.0**。精密値1/549.3をcanonicalとして差異を保持。

## 2017-07-18群 — OPEN
今回までの登録:
1. パチスロ 聖闘士星矢 海皇覚醒 — No.1106
2. パチスロ ガールフレンド（仮）～聖櫻学園メモリアル～ — No.1107
3. パチスロ 結城友奈は勇者である — No.1108
4. ラグナロクサーガ — No.1109

未処理先行候補（個別処理時に導入日・型式・メーカーを再監査）:
1. **ワンバーワン-30**
2. **グレートキングハナハナ-30**
3. **トラッドサンダーブラック**

### 次候補先行確認
- HAZUSEの導入開始日順一覧上、2017-07-18付近に **ワンバーワン-30 / グレートキングハナハナ-30 / トラッドサンダーブラック** が並ぶため、次回は「ワンバーワン-30」から個別再監査する。
- 同名の25φ「ワンバーワン」等と混同しないこと。

## 遡及 resetBehavior QA
- retroQaScanConfirmedThrough: **2006-05_the-king-of-fighters.md**。
- retroQaStatus: **SEQUENTIAL_SCAN_ACTIVE**。
- 次カーソル: `2006-06_churahime-sun.md`。
- 今回は新規7/18群No.1109処理を優先し、遡及QAカーソルは進めていない。

## 次回再開地点
1. 最新mainの README / mission v0.7 / INDEX / LATEST_HANDOFF / No.1109を再取得。
2. **1109件 / chronologicalFrontier 2017-07-18 / 7/18群OPEN** を正本として継続。
3. 次の未処理 **「ワンバーワン-30」** をNo.1110候補として処理。
4. 型式・検定番号・性能コア・resetBehavior v0.7を収集し、同名25φ「ワンバーワン」と30φ版を混同しない。
5. 続いて **グレートキングハナハナ-30 → トラッドサンダーブラック** を順に処理。
6. 7/18群処理後、同日全メーカー横断監査を行って漏れを確認しCLOSED可否を判断。
7. 遡及QAは `2006-06_churahime-sun.md` から継続。

## 主要出典 — 取得日 2026-09-09
### No.1109 ラグナロクサーガ
- パチビー: https://www.pachibee.jp/machines/about/217060006
- グリーンべると/P-WORLD業界ニュース: https://news.p-world.co.jp/articles/9428/greenbelt
- K-Navi: https://p-kn.com/slot/2833/
- HAZUSE DATA: https://data.hazuse.com/?machine_code=7S0502
- P-WORLD: https://www.p-world.co.jp/machine/database/8428
- DMMぱちタウン: https://p-town.dmm.com/machines/2916/recommend
- 期待値見える化: https://slotjin.com/zone/ragnaroksaga/
- ちょんぼりすた: https://chonborista.com/slot/universal-slot/40720/
- 2-9伝説: https://29den.com/ragnaroksaga/
- 中古実機型式補助: https://slot-kingdam.com/SHOP/raguna.html
