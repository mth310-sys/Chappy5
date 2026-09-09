更新日: 2026-09-09

## 現在地点
- recordCount: **1081**
- latestRecordAdded: **パチスロ 逆転裁判**（エンターライズ）
- latestRecordAddedPath: `docs/real_machine_db/machines/2017-05-22_gyakuten-saiban.md`
- chronologicalFrontier: **2017-05-22**
- frontierLatestMachine: **パチスロ 逆転裁判 — No.1081**
- schema: **resetBehavior v0.7**
- status: **2017-05-22_GROUP_OPEN**

## 今回の同期 / 進捗
- 最新mainの `README.md`、mission v0.7、旧 `INDEX.md`、`LATEST_HANDOFF.md`、No.1079「ハッピージャックポット」実レコードを取得して開始。
- INDEX本文は初期19件時点の旧スナップショットのため、README規定どおり最新handoffと実レコードを進捗正本として採用。
- 開始時mainは **1079件 / chronologicalFrontier 2017-05-08 / 5/8群CLOSED / 5/22群OPEN**。
- handoff指定の次候補 **「タイムクロス2」** をNo.1080として登録。
- 続いて **「パチスロ 逆転裁判」** をNo.1081として登録。
- 両機とも性能コアとresetBehavior v0.7を同時収集。最初の検索のみで欠損判定せず、機種名・型式・メーカー・設定変更/リセット/朝一/据え置き/電源OFF ON/天井/モード/ガックン等を組み替えて再探索した。
- 5/22群は未処理候補が残るためOPENを維持。

## No.1080 — タイムクロス2
- manufacturer: **山佐**
- releaseDate: **2017-05-22**
- generation/system: **5号機 / 5.5号機 / ノーマルAタイプ / 技術介入**
- formalModelName: **タイムクロス2／DD**
- certificationNumber: **6S1083**
- recordStatus: **COMPLETE_CORE_WITH_RESET_BEHAVIOR_V0_7_AND_TECHNICAL_INTERVENTION_SPLIT**

### performanceCore
- 平均/通常攻略機械割: **97.5 / 99.0 / 101.1 / 102.0 / 106.3 / 110.5%**。
- フル攻略機械割: **99.1 / 100.3 / 102.3 / 105.4 / 110.2 / 115.0%**。
- BIG: **1/280.07 / 276.52 / 268.59 / 254.02 / 235.74 / 219.92**。
- REG: **1/348.60 / 324.44 / 303.41 / 275.36 / 245.45 / 228.35**。
- ボーナス合算: **1/155.30 / 149.28 / 142.47 / 132.13 / 120.25 / 112.03**。
- ベース: 代表 **約35G/50枚**。設定別独自算出 **33.81〜36.94G/50枚**は定義分離。
- BIG最大 **311枚**、REG **100枚**。
- 天井なし。

### resetBehavior v0.7
- 天井・AT/ART/CZ・ゲーム数管理モードはNOT_APPLICABLE。
- 設定変更専用の朝一天井短縮/当選率優遇/専用モードはNONE_CONFIRMED_AFTER_RESEARCH。
- 純電源OFF→ON専用の主要恩恵/不利もNONE_CONFIRMED_AFTER_RESEARCH。
- ガックンは、すろぱちくえすとが「山佐なので可能性大」と推測表現。2-9伝説には本機のガックンリール動画項目があるが、取得テキスト上で設定変更との決定的1対1契約は固定できないため `GAKKUN_OBSERVATION_AVAILABLE_BUT_NOT_DETERMINISTIC`。
- advantageousSectionReset: `NOT_APPLICABLE_5TH_GEN_PRE_5_9`。

### conflict / definition split
- 2-9伝説は平均値とフル攻略値を2系列で明示。
- HAZUSE/すろぱちくえすとは **97.5 / 99.0 / 101.1 / 105.4 / 110.2 / 115.0%** を単一機械割系列として掲載。
- 技術介入定義差として全系列を保持し、平均化しない。

## No.1081 — パチスロ 逆転裁判
- manufacturer: **エンターライズ**
- releaseDate: **2017-05-22**
- generation/system: **5号機 / 5.5号機 / ART / 周期管理 / CZ経由**
- formalModelName: **逆転裁判／ZW**
- certificationNumber: **6S1366**
- recordStatus: **COMPLETE_CORE_WITH_RESET_BEHAVIOR_V0_7**

### performanceCore
- 機械割: **97.6 / 98.7 / 100.8 / 104.0 / 107.3 / 112.5%**。
- ART初当たり: **1/347.6 / 336.4 / 322.7 / 288.7 / 263.5 / 237.5**。
- CZ: **1/180.4 / 172.2 / 168.1 / 151.7 / 135.3 / 123.0**。
- ベース: **約46G/50枚**。
- ART純増: **約2.0枚/G**、1セット平均約40G、継続率約75%。
- 通常1周期40G。ART天井 **30周期**、CZ天井 **15周期**。

### resetBehavior v0.7
- settingChange: 周期/天井進捗RESET、サイコ・ロックpt内部モードRESELECT。
- powerCycle: 周期/天井進捗・内部モードCARRYOVER。
- 据え置き: 前日の液晶表示引継ぎ資料あり。
- 実戦観測の朝一初期表示: **ナゾpt 123pt / 弁護士レベル0 / 成歩堂法律事務所**。解析確定値ではなくOBSERVATIONALとして保持。
- 設定変更時モード振り分け:
  - 設定1・2: **A75.0 / B12.5 / C6.3 / D6.3%**
  - 設定3・4: **A62.5 / B25.0 / C6.3 / D6.3%**
  - 設定5: **A50.0 / B25.0 / C12.5 / D12.5%**
  - 設定6: **A37.5 / B25.0 / C18.8 / D18.8%**
- リセット後実践値では1周期目に特段強い当選傾向なし。
- resetDetection: 液晶表示リセット/前日表示引継ぎが主要手掛かり。本機固有ガックンは再探索後もUNVERIFIED。
- advantageousSectionReset: `NOT_APPLICABLE_5TH_GEN_PRE_5_9`。

## 2017-05-22群
- status: **OPEN**。
- 登録済み:
  1. タイムクロス2 — No.1080
  2. パチスロ 逆転裁判 — No.1081
- handoff由来の未処理先行候補:
  1. **ラストエグザイル 銀翼のファム**
  2. **パチスロ 黒神 The Animation**
  3. **賞金首2**
- この3機を固定リストと思い込まず、処理時に2017-05-22同日の全メーカー横断監査を継続する。

## 遡及 resetBehavior QA
- retroQaScanConfirmedThrough: **2006-05_gold-shio-30.md**。
- retroQaStatus: **SEQUENTIAL_SCAN_ACTIVE**。
- 次カーソル: `2006-05-15_looney-tunes-bia.md`。

## 次回再開地点
1. 最新mainの README / mission v0.7 / INDEX / LATEST_HANDOFF / No.1081を再取得。
2. **1081件 / chronologicalFrontier 2017-05-22 / 5/22群OPEN** を正本として継続。
3. 次未処理 **「ラストエグザイル 銀翼のファム」** をNo.1082候補として性能コア+resetBehavior v0.7まで処理。
4. 続いて **「パチスロ 黒神 The Animation」→「賞金首2」** を候補に導入日・重複を都度照合して処理。
5. 5/22群を全メーカー横断監査し、漏れがなければCLOSED判定して次の日付境界へ進む。
6. 遡及QAは `2006-05-15_looney-tunes-bia.md` から継続。

## 主要出典 — 取得日 2026-09-09
### No.1080 タイムクロス2
- HAZUSE: https://hazuse.com/machine/pachislot/6S1083/
- グリーンべると: https://web-greenbelt.jp/00009431/
- PiDEA X: https://www.pidea.jp/articles/%E3%82%B2%E3%83%BC%E3%83%A0%E6%80%A7%26%E3%83%AA%E3%83%BC%E3%83%AB%E5%88%B6%E5%BE%A1%E3%81%8C%E5%A4%89%E5%8C%96%E3%80%8C%E3%82%BF%E3%82%A4%E3%83%A0%E3%82%AF%E3%83%AD%E3%82%B92%E3%80%8D%EF%BC%8F%E5%B1%B1%E4%BD%90
- すろぱちくえすと: https://www.slopachi-quest.com/article/timecross2/
- ちょんぼりすた: https://chonborista.com/slot/yamasa-slot/35247/
- 2-9伝説: https://29den.com/timecross2/
- パチビー: https://www.pachibee.jp/machines/lecture/217040007

### No.1081 パチスロ 逆転裁判
- HAZUSE: https://hazuse.com/machine/pachislot/6S1366/
- パチビー: https://www.pachibee.jp/machines/index/217040008
- すろぱちくえすと: https://www.slopachi-quest.com/article/gyakutensaiban/
- ちょんぼりすた: https://chonborista.com/slot/enta-slot/36075/
- 期待値見える化: https://slotjin.com/zone/gyakutensaiban/
- スロがち: https://slogati.com/gyakutensaiban/
- P-WORLD: https://www.p-world.co.jp/machine/database/8358
