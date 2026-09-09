更新日: 2026-09-09

## 現在地点
- recordCount: **1077**
- latestRecordAdded: **ラッキーベガス**（KPE）
- latestRecordAddedPath: `docs/real_machine_db/machines/2017-05-08_lucky-vegas.md`
- chronologicalFrontier: **2017-05-08**
- frontierLatestMachine: **ラッキーベガス — No.1077**
- schema: **resetBehavior v0.7**
- status: **2017-05-08_GROUP_OPEN_AUDIT_FOUND_MISSES**

## 今回の同期 / 進捗
- 最新mainの `README.md`、mission v0.7、旧 `INDEX.md`、`LATEST_HANDOFF.md`、No.1075「忍魂 ～暁ノ章～」実レコードを取得して開始。
- INDEX本文は初期19件時点の旧スナップショットのため、README規定どおり最新handoffと実レコードを進捗正本として採用。
- 開始時mainは **1075件 / chronologicalFrontier 2017-05-08 / 5/8群OPEN**。
- handoff指定の次候補は「ラッキーベガス」だったが、5/8群横断監査で未登録の **「パチスロ グラップラー刃牙」（七匠）** を検出。READMEの漏れ防止優先ルールに従い、同日漏れを先にNo.1076として補完。
- 続いて **「ラッキーベガス」** をNo.1077として登録。
- 5/8群の別系統カレンダー監査で、さらに **「水戸黄門」（京楽）** と **「ハッピージャックポット」（岡崎産業）** の未登録を検出したため、5/8群はOPENを維持。
- すろぱちくえすと2017年導入日一覧では5/8群にサクラ大戦、 水戸黄門、グラップラー刃牙、忍魂、呪怨、ラッキーベガス、ハッピージャックポットを掲載。マクロスF3は同一覧では5/1、既存DBではregionalEarly 5/1 / canonical 5/8として処理済み。
- 水戸黄門はちょんぼりすたで京楽 / 2017-05-08 / A+ART / 約44G/50枚 / ART純増約1.6枚（別表記約1.7枚） / 11周期天井を事前確認済み。
- ハッピージャックポットはHAZUSEで岡崎産業 / 2017-05-08 / 型式 `ハッピージャックポット／H1` / 検定番号 `6S1329` を直接確認。すろぱちくえすとでAタイプ・天井非搭載・機械割96.7〜110.5%を事前確認済み。
- 遡及reset QAカーソルは `2006-05-15_looney-tunes-bia.md` を維持。新規本線優先で今回は未更新。

## No.1076 — パチスロ グラップラー刃牙
- manufacturer: **七匠**
- releaseDate: **2017-05-08**
- generation/system: **5号機 / 5.5号機 / ART / リアルボーナス+ART**
- recordStatus: **COMPLETE_CORE_WITH_RESET_BEHAVIOR_V0_7_AND_PAYOUT_CONFLICT**

### performanceCore
- ART初当たり: **1/432.3 / 412.5 / 387.5 / 337.8 / 310.4 / 283.3**。
- 力みゾーン: 約 **1/240.9〜1/241.0**。
- ベース: **約41G/50枚**。
- ART純増: **約2.0枚/G**。
- 力みゾーン等リアルボーナス: **36枚**。
- ART「地上最強トーナメント」はバトル敗北まで継続、EX「地上最強の親子喧嘩」は1セット20G・約85%ループ。
- 機械割は資料競合: パチビー等解析 **98.34/99.35/100.79/103.95/105.98/108.19%** vs PiDEA X業界記事 **96.7/98.5/100.8/104.5/106.8/110.1%**。平均せずCONFLICT。
- CZ確率もパチビー **1/249.3→1/191.1** vs PiDEA X **1/227→1/176** の差があり、定義差可能性を含めCONFLICT。

### resetBehavior v0.7
- 通常天井: 400/800/1300G振り分け、最大1300G。天井ARTは青7約40%。
- settingChange: 天井RESET、専用振り分け **400G 25.0% / 800G 75.0%**、1300Gなし。
- powerCycle: 天井CARRYOVER。
- carryOver: 天井CARRYOVER。
- state/stage: 当時資料でも調査中のため `UNVERIFIED_AFTER_RESEARCH`。
- resetBenefits: 最大天井800Gへ短縮。
- resetDetection: 当日液晶800G超で据え置き濃厚。すろぱちくえすとにガックン有効記述あり（ANALYSIS_SINGLE）。朝一フェイク前兆は設定変更/電断双方で起こり得るため単独判別不可。
- advantageousSectionReset: `NOT_APPLICABLE_5TH_GEN_PRE_5_9`。

## No.1077 — ラッキーベガス
- manufacturer: **KPE**
- releaseDate: **2017-05-08**
- generation/system: **5号機 / 5.5号機 / A+ART / 完全告知 / モード管理**
- recordStatus: **COMPLETE_CORE_WITH_RESET_BEHAVIOR_V0_7**

### performanceCore
- 機械割: **97.65 / 98.10 / 100.30 / 101.25 / 105.23 / 111.69%**。
- BIG: **1/299.3 / 299.3 / 299.3 / 299.3 / 296.5 / 293.9**。
- REG: **1/601.2 / 601.2 / 601.2 / 601.2 / 550.7 / 500.3**。
- ART初当たり: **1/400.6 / 393.9 / 345.9 / 335.4 / 280.8 / 256.6**。
- ベース: **約31G/50枚**。
- ART: 公開表記 **約1.9枚/G（ボーナス込み）**、開始30/50/100/300G。
- BIG200枚 / REG100枚。
- 通常天井: ボーナス&ART間777GでART確定。

### resetBehavior v0.7
- settingChange: 天井RESET / モードは**高確以上確定**。
- powerCycle: 天井CARRYOVER / モードCARRYOVER。
- carryOver: 天井/モードCARRYOVER。
- 設定変更後32G: 高確以上確定。
- 設定1の公開朝一値: **32G以内ART約25% / 100G以内ART約40%**。
- 設定変更後100G以内にボーナス当選した場合、次回モード移行優遇。
- 高確/天国/アメリカンドリームの設定変更時フル振り分けは `UNVERIFIED_AFTER_RESEARCH`。
- 決定的な本機固有ガックン/初期出目/ランプ判別は `NONE_CONFIRMED_AFTER_RESEARCH`。
- advantageousSectionReset: `NOT_APPLICABLE_5TH_GEN_PRE_5_9`。

## 2017-05-08群監査
- status: **OPEN**。
- 登録済み:
  1. パチスロ マクロスフロンティア3 — No.1072（regionalEarly 5/1 / canonical 5/8として既存処理）
  2. パチスロサクラ大戦～熱き血潮に～ — No.1073
  3. パチスロ 呪怨 — No.1074
  4. 忍魂 ～暁ノ章～ — No.1075
  5. パチスロ グラップラー刃牙 — No.1076
  6. ラッキーベガス — No.1077
- 未処理候補（複数系統で5/8導入確認済み）:
  1. **水戸黄門**（京楽）
  2. **ハッピージャックポット**（岡崎産業）
- この2機処理後、5/8群を再度全メーカー横断監査しCLOSED可否を判定する。

## 遡及 resetBehavior QA
- retroQaScanConfirmedThrough: **2006-05_gold-shio-30.md**。
- retroQaStatus: **SEQUENTIAL_SCAN_ACTIVE**。
- 次カーソル: `2006-05-15_looney-tunes-bia.md`。

## 次回再開地点
1. 最新mainの README / mission v0.7 / INDEX / LATEST_HANDOFF / No.1077を再取得。
2. **1077件 / chronologicalFrontier 2017-05-08 / 5/8群OPEN** を正本として継続。
3. 次未処理 **「水戸黄門」** をNo.1078候補として性能コア+resetBehavior v0.7まで処理。
4. 続いて **「ハッピージャックポット」** を処理。
5. 5/8群を全メーカー横断監査し、漏れがなければCLOSED判定して次の日付境界へ進む。
6. 遡及QAは `2006-05-15_looney-tunes-bia.md` から継続。

## 主要出典 — 取得日 2026-09-09
### No.1076 グラップラー刃牙
- パチビー: https://www.pachibee.jp/machines/index/217040002
- ちょんぼりすた: https://chonborista.com/slot/nanashow/34781/
- すろぱちくえすと: https://www.slopachi-quest.com/article/baki-slot/
- PiDEA X: https://www.pidea.jp/articles/%E4%B8%89%E6%9C%A8%E6%B5%81%E3%80%81%E3%82%B0%E3%83%A9%E3%83%83%E3%83%97%E3%83%A9%E3%83%BC%E5%88%83%E7%89%99%E3%81%AE%E8%A9%95%E4%BE%A1%E3%81%AF%EF%BC%9F
- 期待値見える化: https://slotjin.com/zone/baki/

### No.1077 ラッキーベガス
- コナミ公式アーカイブ: https://www.konami.com/amusement/psm/archive/ps/2017/luckyvegas/
- パチビー: https://www.pachibee.jp/machines/index/217040003
- K-Navi: https://p-kn.com/slot/2746/
- すろぱちくえすと: https://www.slopachi-quest.com/article/lucky-vegas/
- 一撃: https://1geki.jp/slot/s_luckybegas/
- 一撃 ART概要: https://1geki.jp/slot/s_luckybegas/81/
- P-WORLD: https://www.p-world.co.jp/machine/database/8314

### 5/8群監査 / 次候補
- すろぱちくえすと 2017年導入一覧: https://www.slopachi-quest.com/article/2017-sindai/
- 水戸黄門: https://chonborista.com/slot/kyoraku-slot/34909/
- ハッピージャックポット HAZUSE: https://hazuse.com/machine/pachislot/6S1329/
- ハッピージャックポット すろぱちくえすと: https://www.slopachi-quest.com/article/happyjackpot/
