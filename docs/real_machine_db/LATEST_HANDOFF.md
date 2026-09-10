更新日: 2026-09-11

## 現在地点
- recordCount: **1253**
- latestRecordAdded: **パチスロ聖闘士星矢 海皇覚醒Special**
- latestRecordAddedPath: `docs/real_machine_db/machines/2019-01-07_saint-seiya-kaiou-kakusei-special.md`
- chronologicalFrontier: **2019-01-07**
- frontierLatestMachine: **パチスロ聖闘士星矢 海皇覚醒Special — No.1253**
- schema: **resetBehavior v0.7**
- status: **2019-01-07_GROUP_OPEN_1_MACHINE_PROCESSED**

## 今回の同期 / 進捗
- 最新mainのREADME / mission v0.7 / INDEX / LATEST_HANDOFF / No.1252を再取得して開始。
- mainはNo.1252 / 2018-12-17群CLOSEDまで進行済みだったため、その正本地点から継続。
- 2018-12-18〜2019-01-06境界と2019-01-07群候補を再監査。
- `パチスロ聖闘士星矢 海皇覚醒Special` をNo.1253として登録。
- 2019-01-07群には少なくとも `パチスロ蒼天の拳 朋友`、`戦国パチスロ花の慶次～天を穿つ戦槍～剛弓ver.` が同日導入であることを再確認。`Sミクちゃん` は次回個別再照合を継続するため群はOPEN。

## No.1253 — パチスロ聖闘士星矢 海皇覚醒Special
- manufacturer: **三洋物産**
- releaseDateCanonical: **2019-01-07**
- formalModelNameCanonical: **S聖闘士星矢海皇覚醒SP-KF**
- certificationNumber: **UNVERIFIED_AFTER_RESEARCH**
- generation/system: **6号機 / AT**
- settings: **1 / 2 / 3 / 4 / 5 / 6**
- payoutRate: **97.7 / (98.7 vs 98.9 CONFLICT) / 100.6 / 103.7 / 105.0 / 107.1%**
- GB/AT endpoints: 設定1 **1/523.6 / 1/1748.0**、設定6 **1/217.8 / 1/288.2**
- baseGamesPer50: **約51〜53.4G**
- AT純増: **約2.8枚/G**
- ceiling: **最大736GでGB**。通常736 / 天国準備536 / 海底736 / SP536 / 天国136G。

### resetBehavior v0.7
- settingChange: **天井RESET / 内部状態RESET / 非有利区間スタート → 1G目有利区間セット**。火時計ステージ移行。小宇宙pt / 不屈pt / GBレベル等は有利区間移行時に再抽選。
- carryOver: 据え置きを純電断と分離した全内部契約は **UNVERIFIED_AFTER_RESEARCH_AS_DISTINCT_CONDITION**。
- powerOFF→ON: 本機固有朝一資料で **天井引継ぎ / 内部状態据え置き**。別解析で有利区間、小宇宙pt、不屈pt、GBレベル引継ぎ整理あり。ステージは調査中。
- gameCounter: 設定変更RESET / pure power cycle CARRY_OVER。
- advantageousSectionReset: 設定変更で非有利区間へ。pure power cycleは引継ぎ報告。
- resetBenefits: 有利区間移行時GB高確 **100%**、10G保証。小宇宙pt / 不屈ptの公開振り分けあり。
- resetDetection: 非有利区間→1G目有利区間セット、火時計ステージ、初回アイキャッチ/火時計役物が補助材料。本機固有ガックン率・確定性は **UNVERIFIED_AFTER_RESEARCH**。

### 公開朝一/有利区間移行時数値
- 小宇宙pt: **0pt 62.6 / 600pt 27.9 / 700pt 8.6 / 800pt 0.8%**。
- 不屈pt: **0pt 58.4 / 5pt 6.4 / 10pt 12.3 / 20pt 6.4 / 30pt 10.8 / 40pt 5.0 / 45pt 0.7 / 50pt 0.002%**。
- GB高確: **100%移行、10G保証**。
- GBレベルは滞在モード別の有利区間移行時振り分けをrecordへ保存済み。
- 上記は設定変更だけでなくGB敗北/AT終了後等の有利区間移行時にも適用される公開値であり、設定変更専用抽選値とは扱わない。

### quality notes
- 設定2機械割は主要解析で **98.7% / 98.9%** が競合するためCONFLICT保持。
- 50枚ベースは初期約51Gと後発解析51.6〜53.4Gを範囲保持。
- 型式名は中古実機DBで確認したが、検定番号は十分な再探索後も高信頼固定できずUNVERIFIED。

## 2019-01-07群
### 登録済み
- No.1253 パチスロ聖闘士星矢 海皇覚醒Special

### 確認済み未処理候補
- **パチスロ蒼天の拳 朋友** — K-Navi/ちょんぼりすた等で2019-01-07一致。
- **戦国パチスロ花の慶次～天を穿つ戦槍～剛弓ver.** — ちょんぼりすた/解析DB等で2019-01-07一致。
- **Sミクちゃん** — 前handoff候補。次回、型式/導入日を個別再照合して収録可否確定。

### 判定
- **2019-01-07_GROUP_OPEN_1_MACHINE_PROCESSED**。

## 遡及 resetBehavior QA
- retroQaStatus: **SEQUENTIAL_SCAN_ACTIVE**。
- retroQaScanConfirmedThrough: **`docs/real_machine_db/machines/2006-12_comic-world-oki.md`**。
- nextRetroQaCandidate: **`docs/real_machine_db/machines/2006-12_moeru-marine-battle.md`（モエる まりんバトる）**。
- 今回は時系列frontier機種を優先し、遡及QA地点は変更していない。

## 継続注意事項
- `INDEX.md`は旧スナップショット。`LATEST_HANDOFF.md` + main実レコードを優先。
- 毎回、最新mainのREADME / mission / INDEX / LATEST_HANDOFF / latest recordを読み直す。
- 並行更新があれば最新HEADを優先し、古い番号で上書きしない。
- COMPLETE_CORE等の性能完了判定をreset欠損だけで崩さない。reset QA状態は別管理。
- 据え置きと純電断を同義扱いしない。
- 同一/近似ゲーム性の先行・後継機からresetBehaviorを自動転記しない。
- 同日群は全メーカー/別型式/別スペック/PB/地域差監査後にのみCLOSED判定する。
- 競合値は平均せずCONFLICTを保持。

## 次回再開地点
1. 最新mainのREADME / mission v0.7 / INDEX / LATEST_HANDOFF / No.1253を再取得。
2. **1253件 / chronologicalFrontier 2019-01-07 / `2019-01-07_GROUP_OPEN_1_MACHINE_PROCESSED`** を正本として継続。並行更新があれば最新HEAD優先。
3. **No.1254候補 `パチスロ蒼天の拳 朋友`** を先頭に性能コア + resetBehavior v0.7を収集。
4. 続いて `戦国パチスロ花の慶次～天を穿つ戦槍～剛弓ver.`、`Sミクちゃん` の順序/収録可否を個別導入日照合で確定。
5. 2019-01-07群を全メーカー/別型式/別スペック/PB/地域差で横断監査後にCLOSED可否判定。
6. `戦国BASARA HEROES PARTY` は **2019-01-21候補**として保持。
7. 遡及QAは **`docs/real_machine_db/machines/2006-12_moeru-marine-battle.md`** から再開。

## 主要出典 — 取得日 2026-09-11
### No.1253 パチスロ聖闘士星矢 海皇覚醒Special
- ちょんぼりすた: https://chonborista.com/slot/sanyo-slot/69654/
- パチマガスロマガ 小役/50枚: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/sanyo_slot/35/c.php
- パチマガスロマガ AT: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/sanyo_slot/35/13.php
- 1geki: https://1geki.jp/slot/s_seiya_ks/
- K-Navi: https://p-kn.com/slot/3139/
- P-WORLD: https://www.p-world.co.jp/machine/database/8817
- おスロおパチおいでやす: https://oslo-opachi.com/2019/01/03/post-3809/
- パチマ（型式確認）: https://www.pachima.com/c/slot/s_28sonota/S00217

### 2019-01-07群監査
- K-Navi 蒼天の拳 朋友: https://p-kn.com/slot/3147/
- ちょんぼりすた 蒼天の拳 朋友: https://chonborista.com/slot/sammy-slot/69735/
- ちょんぼりすた 花の慶次 剛弓ver.: https://chonborista.com/slot/newgin-slot/71777/
