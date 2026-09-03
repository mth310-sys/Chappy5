# 実機DB 最新リレー引継ぎ

更新日: 2026-09-03

## 現在地点

- recordCount: **481**
- latestMachineAdded: **押忍！操**（大都技研 / 2010-05-24）
- latestRecord: `docs/real_machine_db/machines/2010-05-24_osu-misao.md`
- chronologicalFrontier: **2010-05-24**
- frontierLatestMachine: **押忍！操**
- schema: **resetBehavior v0.7**
- status: **READY_TO_CONTINUE**

## 今回の継続確認

- 最新mainの `README.md`、正本ミッション `docs/CHAPPY5_REAL_MACHINE_DATABASE_MISSION_V01.md` v0.7、`INDEX.md`、`LATEST_HANDOFF.md`、前線480「パチスロ蒼天の拳」を再取得。
- `INDEX.md` は旧19件地点のため、README規定どおり `LATEST_HANDOFF.md`＋main実レコードを進捗正本として使用。
- 開始時正本は recordCount **480** / chronologicalFrontier **2010-05-10**。
- 2010-05-11〜23を導入日検索・当時ニュース・メーカー/攻略DBで境界監査し、今回5/24より前の新たな全国具体日未登録パチスロは高信頼に確定できず。
- 次の具体日候補「押忍！操」をrepo検索し未登録確認後、481件目として追加。
- 後継「押忍！番長2/3/4」「アオハル♪操 A-LIVE」、4号機「押忍！番長」のreset/性能情報は別機種として除外。

## 481 — 押忍！操 要約

- メーカー: **大都技研**
- 導入: **2010-05-24**（K-Navi・パチビー一致。2010-04-30当時ニュースの「5月下旬導入予定」とも整合）
- 世代/タイプ: **5号機 / ボーナス＋押し順ART / 高確周期 / 無限ART / 天井救済**
- ボーナス＋ART合算: **1/166.6 / 1/148.0 / 1/151.5 / 1/128.8 / 1/129.2 / 1/107.9**
- ART初当たり: **1/384.5 / 1/309.6 / 1/340.1 / 1/260.1 / 1/275.1 / 1/209.8**
- PAYOUT: **97.4 / 98.9 / 99.8 / 104.6 / 108.1 / 113.1%**。フル系列は後年単一二次資料、設定6 113.1%のみK-Naviで別系統照合。設定1〜5は追加照合待ち。
- 50枚ベース: **UNVERIFIED_AFTER_RESEARCH**
- SBB: **MAX408枚** / NBB: **MAX276枚** / REG: **約56枚**
- ART「操LIVE BONUS」: **1セット50G / 約+1.2枚/G / 1回当選最大10セット**
- SUPER 操LIVE BONUS: **次回ボーナスまで継続する無限ART**
- 通常高確率帯: **1-64 / 193-288 / 417-512 / 641-736 / 865-960 / 1089-1184G**
- 通常時 **1281G以降**は救済高確率域。到達時点でART1セット確定とはせず、次回ボーナスまでARTストック抽選が大幅優遇される仕様として保持。
- coreStatus: **PARTIAL_CORE_PAYOUT_FULL_SERIES_RETROSPECTIVE_SINGLE_BASE_UNVERIFIED_RESET_PARTIAL**

## resetBehavior v0.7 — 押忍！操

- **設定変更**: 1281G救済カウンタ、高確周期、ARTストック/内部状態のclear/retain/reselectを初代本機固有資料で直接確定できず `UNVERIFIED_AFTER_RESEARCH`。
- **据え置き**: 1281G進捗、高確周期、ARTストック/前兆状態の保持は `UNVERIFIED_AFTER_RESEARCH`。
- **電源OFF→ON**: ゲーム数進捗、高確周期、ART関連状態の保持/初期化は `UNVERIFIED_AFTER_RESEARCH`。
- **ゲーム数/天井**: 通常1281G以降の救済域は確認済み。設定変更時カウンタ処理は未確認。
- **リセット短縮**: `NONE_CONFIRMED_AFTER_RESEARCH`。
- **モード/状態**: 通常高確周期は確認済み。設定変更時の初期高確・再抽選・振り分けは `UNVERIFIED_AFTER_RESEARCH`。
- **有利区間**: `NOT_APPLICABLE`。
- **朝一恩恵/不利**: 設定変更専用の短縮天井・ART優遇・専用高確、および進捗消失等の不利は直接確認できず `NONE_CONFIRMED_AFTER_RESEARCH`。
- **変更判別**: ガックン、初期出目、液晶/ランプ等による本機固有判別は `UNVERIFIED_AFTER_RESEARCH`。
- **公開朝一数値**: 設定変更専用モード振分、朝一当選率、恩恵発生率は `NONE_CONFIRMED_AFTER_RESEARCH`。
- resetBehaviorQA: **SETTING_CHANGE_CARRYOVER_POWER_CYCLE_GAME_COUNTER_MODE_STATE_DETECTION_UNVERIFIED_AFTER_RESEARCH**

## resetBehavior 遡及QA — 継続地点

- CSスロ原人（2006-11-22）まで補完済み。
- `2006-11-27_thunder-v-special.md` は既にresetBehavior収集済みのため重複QAしない。
- 次の2006-11月精度レコード群から最初のresetBehavior欠損実ファイルを探して補完する。
- 既存 `COMPLETE_CORE` の性能完了判定は不用意に崩さず、resetBehavior QA状態を別管理する。

## 主要出典（取得日 2026-09-03）

### 押忍！操
- K-Navi: `https://p-kn.com/slot/1199/`
- パチビー: `https://www.pachibee.jp/machines/about/210030012`
- P-WORLD: `https://www.p-world.co.jp/machine/database/5919`
- K-Navi当時業界ニュース: `https://p-kn.com/topics/news/1026/`
- スロット専門ゲームセンター スパイダー: `https://ameblo.jp/kenchan-retro/entry-12851416258.html`

### 前線480 パチスロ蒼天の拳
- HAZUSE: `https://hazuse.com/machine/pachislot/9S1458/`
- パチビー: `https://www.pachibee.jp/machines/index/210030005`
- K-Navi: `https://p-kn.com/slot/1188/`

## 次回再開地点

1. **recordCount 481 / chronologicalFrontier 2010-05-24**。開始時は必ず最新mainのREADME / mission / INDEX / LATEST_HANDOFF / 前線実レコードを再取得。
2. **2010-05-24同日群と05-25〜06-06境界**を再監査し、押忍！操以外の未登録具体日機を優先する。
3. 今回の先行検索では、次の強い具体日群として **2010-06-07** に「南国育ちスペシャル」「ゴッドハンターV」「とんでも戦士ムテキング」「ガメラ」をK-Naviで確認。5/25〜6/6の漏れを閉じてから、同日群の最古未登録機を482件目候補とする。
4. 押忍！操の `baseGamesPer50`、設定1〜5機械割の当時/別系統照合、正式型式/検定番号、設定変更時1281Gカウンタclear/retain、据え置き、単純電源OFF→ON、変更判別は追加探索可能。ただし新規収集を止めない。
5. 競合/定義差は平均化せず保持。後継番長/後継操のreset情報を初代へ転記しない。
