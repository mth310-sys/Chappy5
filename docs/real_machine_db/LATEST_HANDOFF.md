# 実機DB 最新リレー引継ぎ

更新日: 2026-09-07

## 現在地点

- recordCount: **834**
- latestRecordAdded: **ぱちスロ 必殺仕事人**（京楽産業.）— 2014-07-22
- latestRecord: `docs/real_machine_db/machines/2014-07-22_pachislot-hissatsu-shigotonin.md`
- chronologicalFrontier: **2014-07-22**
- frontierLatestMachine: **ぱちスロ 必殺仕事人**
- schema: **resetBehavior v0.7**
- status: **2014-07-22_GROUP_CLOSED_FOR_CURRENT_RESEARCH**

## 今回の同期 / 正本確認

- 最新mainの `README.md`、`docs/CHAPPY5_REAL_MACHINE_DATABASE_MISSION_V01.md`（v0.7）、`docs/real_machine_db/INDEX.md`、`docs/real_machine_db/LATEST_HANDOFF.md`、833件目 `2014-07-22_midori-no-makibao-todoke-nihonichi-no-goal-e.md` を再読。
- INDEXは19件表記の旧集約状態のため、README規定どおり **LATEST_HANDOFF + 実レコード** を進捗正本として使用。
- 作業開始時の正本は **833件 / 2014-07-22 / 07-22_GROUP_OPEN**。次の未処理「ぱちスロ 必殺仕事人」から継続した。

## 今回追加 — ぱちスロ 必殺仕事人

### identity / 性能コア

- manufacturer: **京楽産業.**。
- hall start: **2014-07-22**。
- generation/system: **5号機 / ART / 疑似ボーナス / CZ / 天井**。
- payoutRate: **97.6 / 98.7 / 100.2 / 104.5 / 107.8 / 112.5%**。
- 疑似BONUS合算: **1/251.6 / 246.2 / 227.5 / 217.4 / 191.0 / 175.5**。
- baseGamesPer50: **約31.5G/50枚**。
- netIncrease: **約2.0枚/G**。
- 必殺BONUS/殲滅BONUS: 各40G。出陣BONUS: 最大100G。
- ART「必殺モード」: **1セット40G、純増約2.0枚/G**。
- 通常天井: **BONUS・ART間999G+前兆**。到達後は出陣RUSH+ART確定。700G以降のBONUSは必殺BONUS以上確定。
- coreStatus: **COMPLETE_CORE**。

## resetBehavior v0.7 — ぱちスロ 必殺仕事人

- settingChangeBehavior: **天井G RESET_TO_0G / 内部モード再抽選 / 恨み玉メーター再抽選 / ステージランダム**。
- carryOverBehavior: **天井G / 内部モード / 恨み玉メーターを引継ぎ**。
- powerCycleBehavior: 当時解析が「据え置き（電源ON/OFFのみ）」として上記3項目の引継ぎを直接明記。ステージはランダム。
- gameCounterReset: 設定変更 **0G**、据え置き/純電断 **CARRYOVER**。
- ceilingAfterReset: リセット専用固定短縮天井は **NONE_CONFIRMED_AFTER_RESEARCH**。通常999G+前兆を0Gから再計数。
- modeAfterReset: 設定変更 **再抽選**、据え置き/純電断 **引継ぎ**。具体振分は未固定。
- stateAfterReset: 恨み玉は設定変更 **再抽選**、据え置き/純電断 **引継ぎ**。その他内部高確等は未固定。
- advantageousSectionReset: **NOT_APPLICABLE_5TH_GEN_PRE_5_9**。
- resetDetection: 朝一初回「恨一撃必殺チャレンジ」で前日把握分の恨み玉が反映されれば **据え置き濃厚**、反映されなければ **リセット濃厚**。ただし2個以下は3個表示へ補正されるため判別不能/精度低下ケースあり。
- publicMorningNumbers: 設定変更時の天井再計数開始 **0G**。具体的モード振分、恨み玉再抽選振分、朝一当選率は未固定。
- resetBehaviorQA: **PARTIAL**。主要な店側/朝一挙動は直接回収済みだが、再抽選の具体振分を未回収。

## 2014-07-22群監査

- K-Navi 2014年7月導入カレンダーで同日パチスロを **パチスロ リング 呪いの7日間 / みどりのマキバオー 届け!!日本一のゴールへ!! / ぱちスロ 必殺仕事人** の3機として再確認。
- No.832 リング、No.833 マキバオー、No.834 必殺仕事人をすべて登録済み。
- 2014-07-28掲載はパチンコのみのため、現調査範囲で **2014-07-22_GROUP_CLOSED_FOR_CURRENT_RESEARCH** とする。
- 次の具体的パチスロ導入候補としてK-Naviで **2014-08-04「ニューアイムジャグラーEX-KT」（北電子）** を確認。次回は8/1〜8/3境界と8/4同日群をメーカー横断で監査してから登録開始する。

## 遡及 resetBehavior QA — TIMという名のパチスロ機

- `docs/real_machine_db/machines/2007-02-12_tim-to-iu-na-no-pachislotki.md` をv0.7 QA形式へ更新。
- 既存 `coreStatus: COMPLETE_CORE` は維持。
- CZ50G / RED ZONE RT100G / 純増約0.5枚/G / 通常時天井なし相当を再確認。
- 設定変更・据え置き・設定変更なし電源OFF→ON時のCZ/RT内部状態・残G数を本機固有で直接固定する資料は、当時業界記事、P-WORLD、旧パチマガスロマガ、HAZUSE、5号機クロニクル、後年回顧の再探索後も未取得。
- 推測補完せず `resetBehaviorQA: PARTIAL`、`UNVERIFIED_AFTER_RESEARCH`を維持。
- `publicMorningNumbers: NONE_CONFIRMED_AFTER_RESEARCH`を明示。
- 次の遡及QAカーソル: `docs/real_machine_db/machines/2007-02_pachislot-tekken-den-tough.md`（パチスロ鉄拳伝タフ）。

## safeguard

- ぱちスロ必殺仕事人は `ぱちスロ 必殺仕事人 / パチスロ必殺仕事人 / 京楽 / KYORAKU` と `設定変更 / リセット / 朝一 / 据え置き / 電源OFF ON / 天井 / 999G / 内部モード / 恨み玉 / 変更判別` を組み合わせ、公式・業界・当時攻略・後年DBを横断。
- 2025年以降のスマスロ「新・必殺仕置人」等の408G系リセット情報は別機種として除外。
- 恨み玉は解析上「再抽選」。ユーザー実戦の0スタート報告のみを根拠に0固定とはしていない。
- 2015-06-08到達時の **吉宗～極～（ヨシムネH2A4 / 3S1093）** 正式量産版処理注意を維持。

## 次回再開地点

1. **recordCount 834 / chronologicalFrontier 2014-07-22 / 07-22_GROUP_CLOSED_FOR_CURRENT_RESEARCH** から開始。
2. 最新mainで README / mission / INDEX / LATEST_HANDOFF / 834件目を再確認。
3. **2014-08-01〜08-03境界監査 → 2014-08-04同日群監査**。
4. 現在確認済みの先頭候補は **2014-08-04「ニューアイムジャグラーEX-KT」（北電子）**。同日漏れを確定してから性能コア + resetBehavior v0.7を収集する。
5. 遡及QAは **`2007-02_pachislot-tekken-den-tough.md`** から再開。

## 主要出典 — 取得日 2026-09-07

### ぱちスロ 必殺仕事人
- KYORAKU公式: `https://www.kyoraku.co.jp/event/surprisefestival2014/`
- グリーンべると/P-WORLD業界ニュース: `https://news.p-world.co.jp/articles/6626/greenbelt`
- K-Navi: `https://p-kn.com/slot/2094/`
- P-WORLD: `https://www.p-world.co.jp/machine/database/7453`
- パチマガスロマガ 50枚ベース: `https://cs62.cs-plaza.com/g/pachi/pla/s_conq/kyoraku_slot/02/c.php`
- パチ7 天井: `https://pachiseven.jp/machines/4184/cutout/78`
- スロパチクエスト 天井/スペック: `https://www.slopachi-quest.com/article/shigotonin-tenzyou/`
- スロパチクエスト 設定変更: `https://www.slopachi-quest.com/article/shigotonin-reset/`
- 5号機クロニクル: `https://5goki.com/kyoraku`

### 境界
- K-Navi 2014年7月導入カレンダー: `https://p-kn.com/calendar/201407/`
- K-Navi ニューアイムジャグラーEX-KT: `https://p-kn.com/slot/2097/`

### TIM QA
- グリーンべると: `https://web-greenbelt.jp/00003985/`
- P-WORLD: `https://www.p-world.co.jp/machine/database/4558`
- パチマガスロマガ: `https://cs62.cs-plaza.com/g/pachi/pla/s_conq/heiwabros_slot/02/heiwabros_slot_02.php`
- HAZUSE: `https://hazuse.com/i/data/tim/top.htm`
- 5号機クロニクル: `https://5goki.com/heiwa-olympia`
