更新日: 2026-09-09

## 現在地点
- recordCount: **1118**
- latestRecordAdded: **イノキロードトゥゴッド**（ミズホ）
- latestRecordAddedPath: `docs/real_machine_db/machines/2017-08-21_inoki-road-to-god.md`
- chronologicalFrontier: **2017-08-21**
- frontierLatestMachine: **イノキロードトゥゴッド — No.1118**
- schema: **resetBehavior v0.7**
- status: **2017-08-21_GROUP_OPEN**

## 今回の同期 / 進捗
- 最新mainのREADME、mission v0.7、INDEX、LATEST_HANDOFF、No.1117「パチスロ 世界でいちばん強くなりたい！」を再取得して開始。
- INDEXは初期19件時点の旧スナップショットのため、README規定どおりLATEST_HANDOFF＋実レコードを進捗正本として採用。
- 開始時mainは **1117件 / chronologicalFrontier 2017-08-07 / 8/7群OPEN_RELEASE_DATE_CONFLICT_AUDIT_REQUIRED**。
- HANDOFF最優先の「イノキロードトゥゴッド」導入日競合を再監査。HAZUSE、ALL7、パチ7、ちょんぼりすた、2017年新台カレンダー、中古実機資料を横断し **2017-08-21** をcanonicalに固定。2-9伝説系の8/7表記はCONFLICTとして保持し、8/7機としては登録しない。
- 2017年導入日順一覧では8/7群が「アイムジャグラーEX-AE / 世界でいちばん強くなりたい！」の2機で一致し、個別機種資料でも両機の8/7を確認。8/14に独立した全国パチスロ導入群は固定できず、次の明確な全国導入群が8/21のため **2017-08-07_GROUP_CLOSED / 2017-08-08_TO_08-20_BOUNDARY_CLOSED** とした。
- PiDEA設置期限一覧に北斗の拳 新伝説創造 / ぱちスロ ウルトラセブン等を8/7とする値があるが、機種個別導入日一覧は9月導入で一致するため、同表の日付をホール導入canonicalへ転用しない。
- No.1118「イノキロードトゥゴッド」をperformance core + resetBehavior v0.7で登録。

## No.1118 — イノキロードトゥゴッド
- manufacturer: **ミズホ**
- releaseDate canonical: **2017-08-21**
- formalModelName: **イノキロードトゥゴッドMG**
- certificationNumber: **7S0109**
- generation/system: **5号機 / A+ART / CZ / ゲーム数天井**
- recordStatus: **COMPLETE_CORE_WITH_RESET_BEHAVIOR_V0_7**

### performanceCore
- 機械割: **98.3 / 99.6 / 101.8 / 105.7 / 107.3 / 115.6%**。
- ART初当たり: **1/432.0 / 404.7 / 365.2 / 309.1 / 288.2 / 180.3**。
- 道BIG: **1/32768.0**、闘神BIG: **1/1337.5**、ボーナス合成 **1/1285.0**。
- ベース: **約36.1G/50枚**。
- ART純増: **約1.8枚/G**、ボーナス込み約**1.9枚/G**。
- ARTは1レベル20G、初当たりレベル3以上で最低60G保証。
- 天井: **ボーナス＋ART間999G**。

### resetBehavior v0.7
- settingChange: **天井RESET / 内部状態RESELECT**。
- pure power OFF→ON: **天井CARRYOVER / 内部状態CARRYOVER**。
- explicit stay-setting contract: 純電断表から推測転記せず **UNVERIFIED_AFTER_RESEARCH**。
- resetInternalStateDistribution: **低確87.1% / 高確12.5% / 超高確0.4%**。
- resetCeiling: **999G**。設定変更専用の固定短縮天井はNONE_CONFIRMED。
- settingChange/ART/bonus後の **300〜349G / 600〜649G** は闘神ゾーン。リセット専用ゾーンではない。
- resetBenefits: 当時解析では**目立った恩恵なし**。天井短縮・専用ゾーン強化なし。
- resetDetection: **ガックン判別不可**。設定変更後は雪山/砂漠/密林開始。純電断時ステージ契約が固定できないため確定判別には使わない。
- advantageousSectionReset: **NOT_APPLICABLE_5TH_GEN_PRE_5_9**。

## 2017-08-21群監査 — OPEN
- 登録済み: **No.1118 イノキロードトゥゴッド**。
- 2017年導入日順一覧で同日候補: **ロボットガールズZ / 戦国乙女 Type-A / 花の慶次 天を穿つ戦槍 / ぱちスロ 仮面ライダーBLACK / 神の左手 悪魔の右目**。各機は未処理を確認しながら順次登録する。
- ALL7に同日「めぞん一刻～約束～」表記があるが、これはパチンコ `CRめぞん一刻4 約束` であり本パチスロDB対象外。
- ロボットガールズZ、神の左手 悪魔の右目は個別解析でも2017-08-21を確認済み。
- イミソーレ3A等の8月候補は日付を機種個別資料で再監査してから群へ含める。

## 遡及 resetBehavior QA
- retroQaScanConfirmedThrough: **2006-06_churahime-sun.md**。
- retroQaStatus: **SEQUENTIAL_SCAN_ACTIVE**。
- 次カーソル: `docs/real_machine_db/machines/2006-06_thunderbirds-neo-xx.md`。
- 今回は8/7境界監査＋新規本線No.1118を優先したため遡及カーソルは進めていない。

## 次回再開地点
1. 最新mainの README / mission v0.7 / INDEX / LATEST_HANDOFF / No.1118を再取得。
2. **1118件 / chronologicalFrontier 2017-08-21 / 8/21群OPEN** を正本として継続。
3. 次の未処理候補は **「ロボットガールズZ」No.1119**。型式/検定番号を固定し、performance core + resetBehavior v0.7を収集する。
4. 続いて **戦国乙女 Type-A → 花の慶次 天を穿つ戦槍 → ぱちスロ 仮面ライダーBLACK → 神の左手 悪魔の右目** を処理し、8/21全メーカー横断監査後に群CLOSED可否を判定。
5. イミソーレ3A等の8月候補も別系統カレンダー・型式名・メーカーで境界監査して漏れを防ぐ。
6. 遡及QAは `docs/real_machine_db/machines/2006-06_thunderbirds-neo-xx.md` から継続。

## 主要出典 — 取得日 2026-09-09
### No.1118 イノキロードトゥゴッド
- HAZUSE: https://hazuse.com/machine/pachislot/7S0109/
- HAZUSE AT/ART: https://hazuse.com/machine/pachislot/7S0109/genre/209/
- ちょんぼりすた: https://chonborista.com/slot/universal-slot/42702/
- 期待値見える化 朝一リセット: https://slotjin.com/slot/inokigod-reset/
- 期待値見える化 設定判別: https://slotjin.com/slot-tool/inokigod-settei/
- P-WORLD: https://www.p-world.co.jp/machine/database/8464
- パチ7: https://pachiseven.jp/machines/5247/cutout/72
- ALL7 2017年8月: https://www.all7.jp/plans/index/2017/08
- 2017年導入日順一覧: https://www.slopachi-quest.com/article/2017-sindai/
- 中古実機型式補助: https://pachislobank.com/SHOP/s-mizuho0015.html

### 8/7〜8/21境界監査
- 2017年導入日順一覧: https://www.slopachi-quest.com/article/2017-sindai/
- アイムジャグラーEX-AE HAZUSE: https://hazuse.com/machine/pachislot/7S0393/
- 世界でいちばん強くなりたい！ パチ7: https://pachiseven.jp/machines/5229/cutout/98
- PiDEA 5号機設置期限一覧（導入日canonicalには転用しない競合資料）: https://www.pidea.jp/articles/1620982702
- ロボットガールズZ: https://chonborista.com/slot/baltec/42647/
- 神の左手 悪魔の右目: https://chonborista.com/slot/high-enter/41803/
