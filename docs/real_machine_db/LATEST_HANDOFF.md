更新日: 2026-09-11

## 現在地点
- recordCount: **1252**
- latestRecordAdded: **アナザーゴッドハーデス-冥王召喚-**
- latestRecordAddedPath: `docs/real_machine_db/machines/2018-12-17_another-god-hades-meiou-shoukan.md`
- chronologicalFrontier: **2018-12-17**
- frontierLatestMachine: **アナザーゴッドハーデス-冥王召喚- — No.1252**
- schema: **resetBehavior v0.7**
- status: **2018-12-17_GROUP_CLOSED_AFTER_CROSS_SOURCE_AUDIT**

## 今回の同期 / 進捗
- 最新mainのREADME / mission v0.7 / INDEX / LATEST_HANDOFF / No.1251を再取得して開始。
- INDEXは旧スナップショットのためREADME指示どおりLATEST_HANDOFF + main実レコードを正本として継続。
- 12/17群の未処理 `アナザーゴッドハーデス-冥王召喚-` をNo.1252として登録。
- 同日群を全メーカー/別型式/別スペック/PB/地域差観点で再監査。
- `戦国BASARA HEROES PARTY` を12/17扱いする後年一覧を検出したが、当時業界発表は1月中旬予定、複数解析/導入資料は **2019-01-21** で一致するため12/17群へは混入させない。
- 2018-12-17群は LoV Re: / カイジ4 / ハーデス冥王召喚の3機でCLOSED判定。

## No.1252 — アナザーゴッドハーデス-冥王召喚-
- manufacturer: **ミズホ**
- releaseDateCanonical: **2018-12-17**
- formalModelNameCanonical: **アナザーゴッドハーデス冥王／GL**
- certificationNumber: **8S0069**
- generation/system: **5.9号機 / ART**
- settings: **1 / 2 / 3 / 4 / 5 / 6**
- payoutRate: **97.4 / 98.3 / 99.3 / 104.4 / 105.7 / 106.8%**
- CZ合算: **1/228.7 / 1/230.3 / 1/232.8 / 1/235.3 / 1/237.1 / 1/239.8**
- GG初当たり: **1/737.0 / 1/740.9 / 1/744.6 / 1/749.6 / 1/752.7 / 1/756.1**
- baseGamesPer50 canonical range: **約40.6〜45.9G**
- ART純増: **約2.0枚/G**
- GG: **初期100G+α**
- ceiling: **非搭載**

### resetBehavior v0.7
- settingChange: **内部状態再抽選 / MB状態リセット / 液晶123**。
- carryOver: 据え置き独立条件の全内部契約は **UNVERIFIED_AFTER_RESEARCH_AS_DISTINCT_CONDITION**。前日MB出目が既知なら、据え置き時に朝一2枚掛け13枚獲得となる可能性があり据え置き濃厚材料。
- powerOFF→ON: **内部状態引継ぎ / MB状態引継ぎ / 液晶123**。
- gameCounterReset / ceilingAfterReset: **NOT_APPLICABLE_NO_GAME_COUNT_CEILING**。
- modeAfterReset: 設定変更で内部状態再抽選。GG/JOT/HZのリセット専用数値振り分けは未確認。
- stateAfterReset: 設定変更は再抽選、純電断は引継ぎ。
- advantageousSectionReset: 5.9号機として有利区間搭載は確認。ただし設定変更/据え置き/純電断ごとの本機固有RESET/CARRY_OVER直接契約は固定できず **APPLICABLE_BUT_RESET_CONTRACT_UNVERIFIED_AFTER_RESEARCH**。
- resetBenefits: 専用短縮天井なし。設定変更専用CZ/GG優遇率・朝一専用モード値は **NONE_CONFIRMED_AFTER_RESEARCH**。
- resetPenalties: **NONE_CONFIRMED_AFTER_RESEARCH**。
- resetDetection: **設定変更後リールガックンなし**という本機固有解析あり。液晶123は設定変更/純電断共通で判別不可。MB出目は据え置き補助判別に利用可能。

### quality notes
- baseGamesPer50はHAZUSE `40.6G（設定1〜6）` と複数解析 `40.6〜45.9G` が競合するため **CONFLICT** として保持し平均化しない。
- reset内部状態はモゲスロが `再抽選/引継ぎ`、ちょんぼりすたが `リセット!?/据え置き!?`。方向性は一致するが確定度表現差を保持。
- 一般5.9号機仕様から有利区間reset契約を自動補完していない。

## 2018-12-17群
### 登録済み
- No.1250 パチスロ ロード オブ ヴァーミリオン Re:
- No.1251 回胴黙示録カイジ4
- No.1252 アナザーゴッドハーデス-冥王召喚-

### 群監査
- 2018年12月当時の新台一覧ではLoV Re: / カイジ4を12/17掲載。
- ハーデス冥王召喚はHAZUSE・ちょんぼりすた・K-Navi・アタリ7で2018-12-17が一致し、ミズホ/ユニバーサル系一覧でも同日導入を確認。
- 後年5.9号機一覧の一部が `戦国BASARA HEROES PARTY` を2018-12-17扱いするが、Amusement Japan 2018-11-20記事は「1月中旬から」、ちょんぼりすた・すろぱちくえすと等は **2019-01-21** で一致。よって12/17群から除外し、2019-01-21候補として保持。

### 判定
- **2018-12-17_GROUP_CLOSED_AFTER_CROSS_SOURCE_AUDIT**。

## 遡及 resetBehavior QA
- retroQaStatus: **SEQUENTIAL_SCAN_ACTIVE**。
- retroQaScanConfirmedThrough: **`docs/real_machine_db/machines/2006-12_comic-world-oki.md`**。
- nextRetroQaCandidate: **`docs/real_machine_db/machines/2006-12_moeru-marine-battle.md`（モエる まりんバトる）**。
- 今回は時系列frontier機種と12/17群監査を優先し、遡及QA地点は変更していない。

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
1. 最新mainのREADME / mission v0.7 / INDEX / LATEST_HANDOFF / No.1252を再取得。
2. **1252件 / chronologicalFrontier 2018-12-17 / `2018-12-17_GROUP_CLOSED_AFTER_CROSS_SOURCE_AUDIT`** を正本として継続。ただし並行更新があれば最新HEAD優先。
3. 2018-12-18〜2019-01-06境界を監査し、次の導入群 **2019-01-07** へ進む。
4. 2019-01-07群は少なくとも **パチスロ聖闘士星矢 海皇覚醒Special / パチスロ蒼天の拳 朋友** を複数一覧で確認。別資料では **戦国パチスロ花の慶次～天を穿つ戦槍～剛弓ver. / Sミクちゃん** も同日掲載されるため、導入日を個別再照合して未処理先頭をNo.1253候補として確定する。
5. `戦国BASARA HEROES PARTY` は現時点で **2019-01-21候補**として保持し、1/21群到達時に再監査する。
6. 遡及QAは **`docs/real_machine_db/machines/2006-12_moeru-marine-battle.md`（モエる まりんバトる）** から再開。

## 主要出典 — 取得日 2026-09-11
### No.1252 アナザーゴッドハーデス-冥王召喚-
- HAZUSE: https://hazuse.com/machine/pachislot/8S0069/
- ちょんぼりすた: https://chonborista.com/slot/universal-slot/71691/
- モゲスロ: https://moge-site.com/archives/22301
- 元プロMGのパチスロブログ: https://www.pachislotblog.tokyo/hades-meioushoukan-kaiseki/
- P-WORLD: https://www.p-world.co.jp/machine/database/8827
- グリーンべると/P-WORLD業界ニュース: https://news.p-world.co.jp/articles/10641/greenbelt
- アタリ7: https://www.atari7.com/slot/date1543922271.php
- スロット解析.com: https://slotkaiseki.com/hades_meiou-spec_/

### 12/17群 / 次群境界監査
- すろぱちくえすと 2018年12月新台一覧: https://www.slopachi-quest.com/article/erunote-12-shindai/
- 1geki ユニバーサル2018機種一覧: https://1geki.jp/maker/universal/
- Amusement Japan 戦国BASARA発表: https://amusement-japan.co.jp/article/detail/10000912/
- ちょんぼりすた 戦国BASARA HEROES PARTY: https://chonborista.com/slot/enta-slot/70813/
- すろぱちくえすと 2019年1月新台一覧: https://www.slopachi-quest.com/article/erunote-shindai-2019-1/
