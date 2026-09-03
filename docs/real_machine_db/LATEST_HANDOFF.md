# 実機DB 最新リレー引継ぎ

更新日: 2026-09-04

## 現在地点

- recordCount: **540**
- latestMachineAdded: **じゃりン子チエ 雷蔵伝説**（バルテック / 2011-01-24）
- latestRecord: `docs/real_machine_db/machines/2011-01-24_jarinko-chie-raizo-densetsu.md`
- chronologicalFrontier: **2011-01-24**
- frontierLatestMachine: **じゃりン子チエ 雷蔵伝説**（同日群継続中）
- schema: **resetBehavior v0.7**
- status: **READY_TO_CONTINUE**

## 今回の継続確認

- 最新mainの `README.md`、正本ミッションv0.7、`INDEX.md`、`LATEST_HANDOFF.md`、538「燃えよ!功夫大戦」、539「凄忍」を再取得。
- `INDEX.md` は旧19件地点のためREADME規定どおり `LATEST_HANDOFF.md`＋main実レコードを進捗正本として使用。
- 開始時は recordCount 539 / chronologicalFrontier 2011-01-24。
- LATEST_HANDOFF最優先の「じゃりン子チエ 雷蔵伝説」をrepo検索し、未登録を確認して540件目として追加。
- chronologicalFrontierは2011-01-24同日群継続のため維持。

## 540 — じゃりン子チエ 雷蔵伝説

- メーカー: **バルテック / BALTEC**
- 型式名: **ジャリンコチエ2**
- 検定番号: **0S0992**
- 世代/タイプ: **5号機 / A+ART / 押し順ART / セットストック / 引き戻しCZ / 2種天井**
- 導入主値: **2011-01-24**（K-Navi、パチ＆スロ必勝本等）。HAZUSEは2011-01-21で日付CONFLICT。
- 機械割主系列: **97.1 / 99.0 / 100.3 / 104.6 / 106.2 / 111.0%**。CrankySevenは設定6のみ110.0%でCONFLICT。
- ボーナス合算: **1/137.68 / 135.69 / 133.20 / 130.81 / 128.50 / 124.12**
- すぺしゃるBONUS: **1/1985.94 / 1927.53 / 1820.44 / 1771.24 / 1638.40 / 1985.94**
- ばくだんBONUS: **1/374.49 / 370.26 / 364.09 / 364.09 / 352.34 / 374.49**
- じゃりン子BONUS: **1/244.54 / 240.94 / 237.45 / 230.76 / 230.76 / 204.80**
- 50枚ベース: **約33.6G/1000円**
- 各ボーナス: **約56枚**
- ART「闘猫」: **30G / 約+1.6枚/G / セットストック式**
- ART終了後: **起死回生モード**。最大3回の転落2択リプレイ回避またはボーナスで復帰条件。
- 通常ゲーム数天井: **通常状態555G -> 次回ボーナスまで3択ベル完全ナビAT**
- ART非当選ボーナス回数天井: **10回（K-Navi/P-WORLD/CrankySeven） vs 13回（パチ＆スロ必勝本/pacnk） = CONFLICT**
- coreStatus: **COMPLETE_CORE_RESET_BEHAVIOR_PARTIAL**

### resetBehavior v0.7

- settingChangeBehavior: **VERIFIED_PARTIAL**。設定変更で高確スタート、ゲーム数天井と回数天井を双方リセット、ホルモン屋店内ステージスタート。
- carryOverBehavior: **UNVERIFIED_AFTER_RESEARCH**。据え置き時の555G進捗/回数天井/高確/ART-CZ状態は本機固有直接資料を確定できず。
- powerCycleBehavior: **UNVERIFIED_AFTER_RESEARCH**。単純電源OFF→ON時の天井/状態/ART-CZ処理を直接確定できず。
- gameCounterReset: **CLEAR_ON_SETTING_CHANGE / VERIFIED_MULTI_SOURCE**
- ceilingAfterReset: **通常天井をゼロから再計数。設定変更専用短縮天井はNONE_CONFIRMED_AFTER_RESEARCH**
- modeAfterReset: **長期ゲーム数モードなし確認範囲。通常時状態は高確スタート**
- stateAfterReset: **HIGH_PROBABILITY_STATE_START / VERIFIED_MULTI_SOURCE**
- advantageousSectionReset: **NOT_APPLICABLE**（5号機）
- resetBenefits: **高確スタート / ホルモン屋店内ステージスタート**
- resetPenalties: **555G天井進捗消失 / ART非当選ボーナス回数進捗消失**
- resetDetection: **PARTIAL**。設定変更時の開始ステージは公開。ガックン/初期出目等はUNVERIFIED_AFTER_RESEARCH。据え置き時開始ステージが同条件で未確認なのでステージ単独で確定判別とはしない。

## CONFLICT / QA注意 — 540

1. 機械割設定6: **111.0%**（K-Navi/P-WORLD/必勝本/5号機クロニクル） vs **110.0%**（CrankySeven）。
2. ART非当選ボーナス回数天井: **10回** vs **13回**。平均せず双方保持。
3. 導入開始日: **2011-01-24**主系列 vs **2011-01-21** HAZUSE。

## 主要出典 — 540（取得日 2026-09-04）

- バルテック公式: `https://www.baltec.co.jp/product/product10.html`
- 日電協新機種情報: `https://www.nichidenkyo.or.jp/newcomer/list`
- Pマンズ/プレイグラフ転載: `https://p-mans.blogspot.com/2010/`
- K-Navi: `https://p-kn.com/slot/1338/`
- P-WORLD: `https://www.p-world.co.jp/machine/database/6212`
- パチ＆スロ必勝本 基本スペック: `https://p.hisshobon.jp/machine/1737/1/27333`
- パチ＆スロ必勝本 設定変更&天井: `https://p.hisshobon.jp/machine/1737/1/27337`
- CrankySeven: `https://crankyseven.com/sp/jarinkotie-raizou-pc.htm`
- pacnk: `https://pacnk.com/slot/tools/sh_jyarinkochie.html`
- HAZUSE: `https://hazuse.com/machine/pachislot/0S0992/`
- 5号機クロニクル: `https://5goki.com/baltec`

## 今回のGitHub更新

- 540追加: `docs/real_machine_db/machines/2011-01-24_jarinko-chie-raizo-densetsu.md`
- machine record commit: `b5195b8e1cf67e4c29fa9f379d26e81fcc9de1d2`
- LATEST_HANDOFF: 本更新

## 遡及QA継続地点

- **怪胴王 (`docs/real_machine_db/machines/2006-11_kaidouou.md`) まで補完済み**を維持。
- 新規収集を止めず、次回QA時に怪胴王直後の最初のresetBehavior欠損レコードを一意確定してから進める。

## 次回再開地点

1. **recordCount 540 / chronologicalFrontier 2011-01-24**。開始時は最新mainのREADME / mission / INDEX / LATEST_HANDOFF / 539「凄忍」/ 540「じゃりン子チエ 雷蔵伝説」を再取得。
2. **2011-01-24同日群を継続**。`超重神グラヴィオン`（ロデオ）はmain検索で未登録。P-WORLD/5号機クロニクル/当時業界記事で2011年1月機、グリーンべるとは2011年1月以降納品開始予定を確認。K-Navi等で具体導入日を再確定し、1/24同日なら541件目最優先候補。
3. `シスタークエスト2` は外部一覧で2011-01-11導入表記があるため、既存登録の有無を再確認し、未登録なら**時系列遡及漏れ**として先に補完する。
4. `あっぱれ剣士道`、`残機尽きるまで私は戦う` 等の2011年1月候補も実ホール導入/納品日を再照合。`残機尽きるまで私は戦う` の2011-01-21は展示会日なので導入日と混同しない。
5. 欠損は表記・型式・メーカー・項目語を変え、公式/業界/当時解析/古いDB/アーカイブ/回顧を横断後のみUNVERIFIED。競合は平均せずCONFLICT。
