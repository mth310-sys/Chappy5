更新日: 2026-09-09

## 現在地点
- recordCount: **1101**
- latestRecordAdded: **A-SLOTエイリヤンエボリューション**（サミー）
- latestRecordAddedPath: `docs/real_machine_db/machines/2017-07-03_a-slot-alien-evolution.md`
- chronologicalFrontier: **2017-07-03**
- frontierLatestMachine: **A-SLOTエイリヤンエボリューション — No.1101**
- schema: **resetBehavior v0.7**
- status: **2017-07-03_GROUP_OPEN**

## 今回の同期 / 進捗
- 最新mainの `README.md`、mission v0.7、旧 `INDEX.md`、`LATEST_HANDOFF.md`、No.1100「パチスロ 閃乱カグラ」実レコードを再取得して開始。
- INDEX本文は初期19件時点の旧スナップショットのため、README規定どおりLATEST_HANDOFFと実レコードを進捗正本として採用。
- 開始時mainは **1100件 / chronologicalFrontier 2017-07-03 / 7/3群OPEN**。
- handoff指定の次未処理 **「エイリヤンエボリューション」** をNo.1101として登録。
- HAZUSE、PiDEA X、すろぱちくえすと、ちょんぼりすた、パチ7、すろかい、2017年度新台カレンダー、5号機クロニクルを横断し、型式・検定番号・導入日・4段階設定の機械割/完全攻略値・ボーナス確率・50枚ベース・基本獲得・RT構造・天井非搭載を照合。
- resetBehaviorでは、天井/ゲーム数管理が非搭載であることを複数資料で固定。設定変更時のガックンは当時解析に「有効の可能性大」とあるが確定挙動ではないため `POSSIBLE_GAKKUN_INDICATOR_NOT_DETERMINISTIC` として保存。
- 設定変更/据え置き/純電断時のRT内部状態の保持・初期化を本機固有で直接明記した契約は、機種名・型式・メーカー・シリーズ名と設定変更/リセット/朝一/据え置き/電源OFF ON/RT/状態/ガックンへ検索語を変更して再探索しても固定できず `UNVERIFIED_AFTER_RESEARCH`。一般的なA+RT機やサミー機から推定しない。
- 設定変更専用の天井短縮・朝一モード・高確スタート・主要初当たり優遇は `NONE_CONFIRMED_AFTER_RESEARCH` / 天井関連は `NOT_APPLICABLE_NO_CEILING`。
- 5号機クロニクルのボーナス獲得枚数は当時業界記事/HAZUSE/複数解析と大きく不一致のため `CONFLICT_SOURCE_MISMATCH` としてcanonicalから除外。

## No.1101 — A-SLOTエイリヤンエボリューション
- manufacturer: **サミー**
- releaseDate: **2017-07-03**
- formalModelName: **エイリヤンエボリューション／XR**
- certificationNumber: **7S0001**
- generation/system: **5号機 / A+RT / ボーナス主体 / 技術介入RT**
- recordStatus: **COMPLETE_CORE_WITH_RESET_BEHAVIOR_V0_7**

### performanceCore
- 通常機械割（設定1/2/5/6）: **98.0 / 99.9 / 103.0 / 105.2%**。
- フル攻略時: **100.0 / 101.8 / 104.9 / 107.1%**。
- ボーナス合算: **1/192.8 / 1/182.0 / 1/169.8 / 1/163.8**。
- PBB: **1/5041.2 / 1/5041.2 / 1/5041.2 / 1/4369.1**。
- HBB: **1/630.2 / 1/606.8 / 1/585.1 / 1/565.0**。
- BIG: **1/585.1 / 1/565.0 / 1/528.5 / 1/512.0**。
- REG: **1/590.4 / 1/532.8 / 1/478.4 / 1/464.8**。
- ベース: **約37.3〜38.6G/50枚**（代表値約37〜37.3G）。
- RT: コンタクトゾーン最大20G → レイブモード20G/50G、PBB後100G。exact純増/Gは再探索後も未固定。
- PBB/HBB **最大303枚** / BIG **最大209枚** / REG **最大110枚**、全ボーナス後RT。
- 通常ゲーム数天井: **非搭載**。

### resetBehavior v0.7
- settingChangeBehavior: 天井関連 **NOT_APPLICABLE_NO_CEILING**。RT状態の設定変更契約は **UNVERIFIED_AFTER_RESEARCH**。
- carryOverBehavior: 宵越しゲーム数天井なし。据え置き時RT状態の直接契約は **UNVERIFIED_AFTER_RESEARCH**。
- powerCycleBehavior: 純電源OFF→ON時RT/液晶状態の直接契約は **UNVERIFIED_AFTER_RESEARCH**。
- gameCounterReset: **NOT_APPLICABLE_NO_GAME_COUNT_CEILING**。
- ceilingAfterReset: **NOT_APPLICABLE_NO_CEILING**。
- modeAfterReset: 設定変更専用朝一モード/解除モード **NONE_CONFIRMED_AFTER_RESEARCH**。
- stateAfterReset: 低確/高確型ではない。RT状態の保持/初期化のみ直接契約未確認で **UNVERIFIED_AFTER_RESEARCH**。
- advantageousSectionReset: **NOT_APPLICABLE_5TH_GEN_PRE_5_9**。
- resetBenefits: 天井短縮・高確スタート・朝一専用モード・初当たり優遇 **NONE_CONFIRMED_AFTER_RESEARCH**。
- resetPenalties: ゲーム数天井消滅は **NOT_APPLICABLE**。RT状態契約未確認のため推定不利は記録しない。
- resetDetection: 当時解析に「ガックンでの変更判別は有効の可能性大」。確定ではないため **POSSIBLE_GAKKUN_INDICATOR_NOT_DETERMINISTIC**。
- numericResetData: 公開された設定変更専用モード率/恩恵率/ガックン発生率 **NONE_CONFIRMED_AFTER_RESEARCH / UNVERIFIED_AFTER_RESEARCH**。

## conflicts / missing
- materialCoreNumericConflict: canonical当時資料間では **NONE_CONFIRMED_AFTER_MULTI_SOURCE_COMPARISON**。
- retrospectivePayoutConflict: 5号機クロニクルはHYPER BIG最大350枚/BIG最大259枚/REG最大103枚とするが、PiDEA X当時業界記事・HAZUSE・複数当時解析が303/209/110枚で一致。後年回顧側を **CONFLICT_SOURCE_MISMATCH** として除外。
- baseGames: 約37G / 37.3G / 設定別37.3〜38.6Gは代表値・設定別精度差として保持。
- exactRtNetIncreasePerGame: UNVERIFIED_AFTER_RESEARCH。
- direct setting-change/carry-over/power-cycle RT-state contract: UNVERIFIED_AFTER_RESEARCH。
- deterministicMachineSpecificGakkun: UNVERIFIED_AFTER_RESEARCH。

## 2017-07-03群 — OPEN
登録済み:
1. パチスロ アクエリオンEVOL — No.1097
2. パチスロ 悪魔城ドラキュラ Lords of Shadow — No.1098
3. パチスロ そらのおとしものフォルテ — No.1099
4. パチスロ 閃乱カグラ — No.1100
5. A-SLOTエイリヤンエボリューション — No.1101

確認済み未処理候補:
- **しすくえパラダイス** — 次のNo.1102候補。パチビー、すろぱちくえすと、ALL7で2017-07-03導入を再確認。
- SHAKE III SIDE-A — HAZUSEで2017-07-03導入、型式 `SHAKEIII SIDE-A／A7`、検定番号 `6S1514` を前回までに先行確認。
- 熊酒場2丁目店 — パチビー/K-Naviで2017-07-03導入を前回までに再確認。
- 上記を順次処理後、2017-07-03同日全メーカー横断監査を行いCLOSED判定する。

## 遡及 resetBehavior QA
- retroQaScanConfirmedThrough: **2006-05-15_looney-tunes-bia.md**。
- retroQaStatus: **SEQUENTIAL_SCAN_ACTIVE**。
- 次カーソル: `2006-05_the-king-of-fighters.md`。
- 新規本線優先のため今回未更新。

## 次回再開地点
1. 最新mainの README / mission v0.7 / INDEX / LATEST_HANDOFF / No.1101を再取得。
2. **1101件 / chronologicalFrontier 2017-07-03 / 7/3群OPEN** を正本として継続。
3. 次の未処理 **「しすくえパラダイス」** をNo.1102候補として性能コア + resetBehavior v0.7で処理。
4. 以降、**SHAKE III SIDE-A → 熊酒場2丁目店**を既存登録有無と導入日を再照合しながら処理。
5. 7/3群全メーカー監査後にCLOSED判定。遡及QAは `2006-05_the-king-of-fighters.md` から継続。

## 主要出典 — 取得日 2026-09-09
### No.1101 A-SLOTエイリヤンエボリューション
- HAZUSE: https://hazuse.com/machine/pachislot/7S0001/
- HAZUSE 初打講座: https://hazuse.com/machine/pachislot/7S0001/genre/203/
- PiDEA X: https://www.pidea.jp/articles/%E5%A5%B3%E5%AD%90%E9%AB%98%E7%94%9F%E3%81%A8%E3%80%8C%E3%82%A8%E3%82%A4%E3%83%AA%E3%83%A4%E3%83%B3%E3%80%8D%E6%8A%80%E8%A1%93%E4%BB%8B%E5%85%A5RT%E3%82%92%E6%90%AD%E8%BC%89%EF%BC%8F%E3%82%B5%E3%83%9F%E3%83%BC
- すろぱちくえすと: https://www.slopachi-quest.com/article/aliyan-evolution/
- ちょんぼりすた: https://chonborista.com/slot/sammy-slot/39693/
- パチ7: https://pachiseven.jp/machines/5190/
- すろかい: https://slotkaiseki.hatenablog.com/entry/eiriyan
- 2017年度新台カレンダー: https://slotnews777.blog.fc2.com/blog-entry-3121.html
- 5号機クロニクル サミー一覧: https://5goki.com/sammy

### 次候補 / 同日境界
- 次候補: しすくえパラダイス
- パチビー: https://www.pachibee.jp/machines/lecture/217060003
- すろぱちくえすと: https://www.slopachi-quest.com/article/sispara/
- ALL7 2017年7月導入一覧: https://www.all7.jp/plans/index/2017/07/10
- 以降: SHAKE III SIDE-A / 熊酒場2丁目店
