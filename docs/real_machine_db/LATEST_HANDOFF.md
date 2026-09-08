更新日: 2026-09-09

## 現在地点
- recordCount: **1041**
- latestRecordAdded: **SLOTスターオーシャン4**（ユニバーサルブロス）
- latestRecordAddedPath: `docs/real_machine_db/machines/2017-01-30_slot-star-ocean-4.md`
- chronologicalFrontier: **2017-01-30**
- frontierLatestMachine: **SLOTスターオーシャン4 — No.1041**
- schema: **resetBehavior v0.7**
- status: **2017-01-30_GROUP_OPEN**

## 今回の同期 / 進捗
- 最新mainの `README.md`、mission v0.7、旧 `INDEX.md`、`LATEST_HANDOFF.md`、No.1040実レコードを再取得して開始。
- 旧INDEXは19件表示のままのため進捗正本にせず、README規定どおり最新 `LATEST_HANDOFF.md` と実レコードを優先。
- 開始時main正本は **1040件 / chronologicalFrontier 2017-01-16 / 1/16群CLOSED / 1/17〜29境界CLOSED / 1/30群OPEN**。
- handoff指定の次未処理 **ユニバーサルブロス「SLOTスターオーシャン4」** をNo.1041として登録。
- パチビー、K-Navi、P-WORLD、PiDEA、検定通過記事、ちょんぼりすた、期待値見える化等を横断し、性能コアとresetBehavior v0.7を同時収集。
- 2017-01-30同日群の未処理候補を再確認し、次に **山佐「パチスロ ソウルキャリバー」** が2017-01-30ホールデビューであることをメーカー発表転載（4Gamer）と当時解析で先行固定。
- 同日には **パイオニア「オアシスデイズ」** も2017-01-30導入をHAZUSE/2-9伝説で再確認。1/30群はまだCLOSEDにしない。

## No.1041 — SLOTスターオーシャン4
- manufacturer: **ユニバーサルブロス**
- releaseDate canonical: **2017-01-30**
- formalModelName: **SLOTスターオーシャン4TR**
- certificationNumber: **UNVERIFIED_AFTER_RESEARCH**
- generation/system: **5号機 / 5.5号機期 / A+ART / 周期管理CZ+HP管理型ART**
- recordStatus: **COMPLETE_CORE_WITH_RESET_BEHAVIOR_V0_7**

### performanceCore
- 機械割: **98.6 / 99.6 / 102.1 / 105.1 / 107.6 / 110.3%**。
- BIG: **1/425.6 / 414.8 / 394.8 / 381.0 / 368.2 / 346.8**。
- REG: **1/668.7 / 668.7 / 655.4 / 630.2 / 618.3 / 585.1**。
- ART初当たり: **1/582.8 / 516.2 / 531.8 / 456.8 / 460.8 / 334.3**。
- baseGamesPer50: **約32G/50枚**。
- ART純増canonical: **約1.4枚/G**。攻略資料の約1.5枚/G、ボーナス込み約2.0枚/Gは定義/丸め差として別記録。
- BIG/EPISODE BB: **204枚**、REG/ウェルチボーナス: **54枚**。
- 通常天井: **ボーナス間17周期（平均約1080G）でART**。途中ARTでは天井周期進捗をリセットしない。

### resetBehavior v0.7
- settingChangeBehavior: **天井周期RESET / 内部状態RESELECT / 周期管理モードRESELECT / プライベートポイントRESELECT**。
- carryOverBehavior: **据え置きは天井周期・内部状態・周期モード・プライベートポイントCARRYOVER**。
- powerCycleBehavior: **純電源OFF→ONも上記内部値をCARRYOVER**。開始ステージの厳密な純電断契約のみ `DISPLAY_START_STAGE_UNVERIFIED_AFTER_RESEARCH`。
- gameCounterReset: 設定変更RESET / 据え置きCARRYOVER / 純電断CARRYOVER。
- ceilingAfterReset: 通常17周期。設定変更専用固定短縮天井は **NONE_CONFIRMED_AFTER_RESEARCH**。
- modeAfterReset: 設定変更時 **A 37.5% / B 37.5% / C 22.6% / D 1.6% / E 0.8%**。C以上合計25.0%。据え置き/純電断はCARRYOVER。
- stateAfterReset: 設定変更で再抽選、据え置き/純電断で引継ぎ。具体的状態振り分けは再探索後も `UNVERIFIED_AFTER_RESEARCH`。
- advantageousSectionReset: **NOT_APPLICABLE_5TH_GEN_PRE_5_9**。
- resetBenefits: 周期モードC以上25.0%。朝一に「おはよう」を含むプライベートアクション出現で設定変更濃厚とする当時解析あり。
- resetPenalties: 前日17周期進捗、内部モード/状態、蓄積プライベートポイントを設定変更で失う可能性。
- resetDetection: 「おはよう」アクションを主要材料として保存。本機固有のガックン確定契約は十分な再探索後も **UNVERIFIED_AFTER_RESEARCH**。

### data quality
- 導入日はパチビー/K-Navi/複数解析で2017-01-30一致。
- 型式 `SLOTスターオーシャン4TR` は検定通過記事で確認。
- 検定番号は表記揺れ・型式・メーカー・6S・公安委員会等で再探索したが直接固定できず推測しない。
- 性能コアはP-WORLDと複数解析で一致。
- material conflict: **NONE_CONFIRMED**。ART純増1.4/1.5は現時点では丸め・定義差扱い。

## 境界監査
- **2017-01-30_GROUP_OPEN**。
- 登録済み: SLOTスターオーシャン4 — No.1041。
- 未処理確認済み候補:
  - **パチスロ ソウルキャリバー**（山佐） — 2017-01-30。4Gamerのメーカー発表転載が「ホールデビューに合わせて」同日アプリ配信と明記、当時解析も1/30一致。
  - **オアシスデイズ**（パイオニア） — 2017-01-30。HAZUSE/2-9伝説一致。型式 `オアシスデイズ/DX`、検定番号 `6S1149` をHAZUSEで先行確認。
  - **ニューペガサスREVIVAL**（エマ） — handoff旧候補。導入日を再固定してから登録判断する。
- 同日全メーカー監査を継続し、1/30群を閉じてから次境界へ進む。

## 遡及 resetBehavior QA
- retroQaScanConfirmedThrough: **2006-03-27_golgo13-the-professional.md**
- retroQaStatus: **SEQUENTIAL_SCAN_ACTIVE**
- 新規本線を止めず、既存未QAレコードを最新main実体から順次補完する。

## 次回再開地点
1. 最新mainの README / mission v0.7 / INDEX / LATEST_HANDOFF / No.1041を再取得。
2. **1041件 / chronologicalFrontier 2017-01-30 / 1/30群OPEN** を正本として継続。
3. 次の未処理機種は **山佐「パチスロ ソウルキャリバー」** をNo.1042候補として処理。
4. 性能コア＋resetBehavior v0.7を同時収集。設定変更/据え置き/純電断、天井、内部状態/モード、朝一恩恵、変更判別を検索語・資料系統を変えて再探索する。
5. ソウルキャリバー後、**オアシスデイズ → ニューペガサスREVIVAL候補 → 1/30同日全メーカー監査** の順で未処理を確認。
6. 既登録No.1041以前を重複追加しない。

## 主要出典 — 取得日 2026-09-09
### No.1041 SLOTスターオーシャン4
- パチビー: https://www.pachibee.jp/machines/index/216120004
- K-Navi: https://p-kn.com/slot/2681/
- P-WORLD: https://www.p-world.co.jp/machine/database/8239
- PiDEA: https://www.pidea.jp/articles/%E3%82%B9%E3%82%AF%E3%82%A8%E3%83%8B%E3%81%AE%E5%90%8DRPG%E3%80%8C%E3%82%B9%E3%82%BF%E3%83%BC%E3%82%AA%E3%83%BC%E3%82%B7%E3%83%A3%E3%83%B3%E3%80%8D%E3%82%92%E3%83%91%E3%83%81%E3%82%B9%E3%83%AD%E5%8C%96%EF%BC%8F%E3%83%A6%E3%83%8B%E3%83%90
- P-MEDIA検定通過: https://p-media.info/%E3%83%A6%E3%83%8B%E3%83%90%E3%83%BC%E3%82%B5%E3%83%AB%E3%83%96%E3%83%AD%E3%82%B9%E3%80%8C%E3%82%B9%E3%82%BF%E3%83%BC%E3%82%AA%E3%83%BC%E3%82%B7%E3%83%A3%E3%83%B34%E3%80%8D%E6%A4%9C%E5%AE%9A%E9%80%9A/
- ちょんぼりすた: https://chonborista.com/slot/universal-slot/29639/
- 期待値見える化: https://slotjin.com/tenjoukitaichi/starocean4/
- pacnk: https://pacnk.com/slot/tools/sh_sutaoshan4.html

### 次回候補
- 4Gamer / 山佐発表転載 ソウルキャリバー: https://www.4gamer.net/games/370/G037006/20170130057/
- ちょんぼりすた / ソウルキャリバー: https://chonborista.com/slot/yamasa-slot/29992/
- HAZUSE / オアシスデイズ: https://hazuse.com/machine/pachislot/6S1149/
- 2-9伝説 / オアシスデイズ: https://29den.com/oasisdays/
