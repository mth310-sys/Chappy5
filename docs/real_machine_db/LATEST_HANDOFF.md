更新日: 2026-09-13

## 現在地点
- recordCount: **1562**
- latestRecordAdded: **マイフラワー2-30 — No.1562**
- latestRecordAddedPath: `docs/real_machine_db/machines/2023-05-08_my-flower2-30.md`
- chronologicalFrontier: **2023-05-08**
- frontierLatestMachine: **マイフラワー2-30 — No.1562**
- schema: **resetBehavior v0.7**
- status: **2023-05-08_GROUP_CLOSED_3_OF_3_CANONICAL_PROCESSED / NEXT_NO1563_SWORD_ART_ONLINE_2023-05-15**

## 今回の同期 / 進捗
- 最新mainの `README.md`、正本 `docs/CHAPPY5_REAL_MACHINE_DATABASE_MISSION_V01.md` v0.7、旧表示 `docs/real_machine_db/INDEX.md`、最新 `LATEST_HANDOFF.md`、直前No.1561 `パチスロ 炎炎ノ消防隊` を確認して開始。
- INDEXは19件の旧表示のためREADME規定どおりLATEST_HANDOFFとmain実レコードを進捗正本として採用。
- handoff指定の次機種 `マイフラワー2-30` を調査し、No.1562を性能コア + resetBehavior v0.7で追加。
- 2023-05-08群は複数導入一覧・業界スケジュールを再監査。canonical実導入として `L主役は銭形4 / パチスロ 炎炎ノ消防隊 / マイフラワー2-30` の3機でCLOSED。
- `L戦国BASARAギガZE` は5/8スケジュール掲載が存在するが、発売発表・実導入側との日付差があるため既存handoffどおり2023-08-07境界へdeferしCONFLICT保持。
- 次のcanonical導入日は2023-05-15 `スロット ソードアート・オンライン` と業界記事・導入一覧で確認。

## No.1562 — マイフラワー2-30
- manufacturer: **北電子**
- formalModel: **SマイフラワーⅡEE-30**
- inspectionCode: **UNVERIFIED_AFTER_RESEARCH**
- releaseDate: **2023-05-08**
- generation/system: **6.5号機 / 30ΦメダルAT / 擬似ボーナス + 32G CZ / シナリオ管理型**
- settings: **1 / 2 / 3 / 4 / 5 / 6**
- payoutRate: **97.7 / 99.2 / 100.8 / 102.9 / 105.2 / 107.5%**
- ボーナス初当り: **1/210 / 1/200 / 1/190 / 1/180 / 1/170 / 1/160**
- baseGamesPer50: **約39G/50枚**
- netIncrease: **約3.5枚/G**
- basicPayout: **BIG 60G/平均約210枚、REG 20G/平均約70枚**
- coreStatus: **COMPLETE_CORE**
- resetBehaviorQA: **COMPLETE_RESET_CORE_WITH_PUBLIC_MORNING_NUMBER_AND_PARTIAL_STATE_SECTION**

### resetBehavior v0.7 — No.1562
- 設定変更: **天井RESET / モードRESET**。
- 据え置き: **天井CARRY_OVER / モードCARRY_OVER**。
- 純電源OFF→ON: **天井CARRY_OVER / モードCARRY_OVER**を機種固有比較資料で固定。
- 通常最大天井: **1280G+α**。
- 設定変更時: **約70%で300G+αへ短縮**。
- 有利区間ランプではリセット判別不可。
- 朝一300G+αでの当選は設定変更期待度UP材料。前日+当日で1280G+αを超えた当選挙動は据え置き濃厚材料とする解析あり。
- 内部状態、有利区間そのものの設定変更/据え置き/純電断契約は本機固有の独立明示を固定できず `UNVERIFIED_AFTER_RESEARCH`。
- 本機固有ガックン/リール初動固定契約も `UNVERIFIED_AFTER_RESEARCH`。

## 2023-05-08群 — CLOSED 3/3 canonical
1. L主役は銭形4 — No.1560 **DONE**
2. パチスロ 炎炎ノ消防隊 — No.1561 **DONE**
3. マイフラワー2-30 — No.1562 **DONE**

### 境界CONFLICT / deferred
- `L戦国BASARAギガZE`: P-WORLD/Greenbelt 5/8更新スケジュールに掲載される一方、実導入側資料との日付差がある。**2023-08-07境界へdeferしCONFLICT保持**。
- `パチスロ ジャベリン`: 5/8表記資料 vs なな徹・導入一覧の5/22。**2023-05-22をcanonical候補としてdefer**。
- `課長 熊田工作`: **2023-05-22**導入として複数資料一致。5/8群には含めない。

## 次の本線候補
### No.1563候補 — スロット ソードアート・オンライン
- canonical release candidate: **2023-05-15**
- manufacturer: **大都技研**
- formalModel candidate: **Lスロット ソードアート・オンラインB2**
- system: **スマスロAT**
- 業界記事で2023-05-15からホール導入開始を確認。
- 5/15群に追加機がないかPB・別型式・地域先行・延期/段階導入を再監査してからCLOSED判定する。

## resetBehavior 遡及QA
### 次の遡及QAカーソル
- `docs/real_machine_db/machines/2007-07-08_caribbean-queen.md` — **カリビアンクイーン**
- 現状: `coreStatus: COMPLETE_CORE / qaResetBehavior: PARTIAL`
- 既存レコード自体には設定変更/据え置き/純電断時の「モード・ローズマリー」残G/AT状態を検索語・資料系統変更後も直接固定できなかった旨が保存済み。
- 次回QAでは重複探索を避け、追加一次/当時資料が見つからなければ性能完了判定を維持したまま `PARTIAL_RESEARCH_EXHAUSTED` への正式化を検討する。

## 今回の主要資料
### No.1562 マイフラワー2-30
- 北電子 検定情報: https://www.kitadenshi.co.jp/slot-kentei/myflower2-30/
- 遊技日本 / P-WORLD: https://news.p-world.co.jp/articles/23188
- グリーンべると: https://web-greenbelt.jp/post-69711/
- 一撃: https://1geki.jp/slot/s_myflower2_30/
- 必勝本 天井&設定変更: https://p.hisshobon.jp/machine/4070/1/93928
- フリック7 2023朝一リセットガイド: https://flick7.net/slot/reset_guide2023.php
- イチカツ！: https://ichikatsu.com/myflower2/

### 2023-05-08 / 次境界監査
- P-WORLD / グリーンべると 2023-05-08新台スケジュール: https://news.p-world.co.jp/articles/23998/greenbelt
- 2023導入日一覧: https://www.slopachi-quest.com/article/2023-dounyuukisyu/
- P-WORLD / グリーンべると SAO 5/15導入記事: https://news.p-world.co.jp/articles/24079/greenbelt

## 保存コミット
- No.1562追加: `28b3a4a910e6e5a640428c85502406f57e4592b3`
- handoff更新: 本コミット

## 次回再開地点
**本線はNo.1563候補 `スロット ソードアート・オンライン`（2023-05-15）から継続。性能コア + resetBehavior v0.7を収集し、同日PB・別型式・地域先行・延期/段階導入を監査して2023-05-15群のCLOSED可否を判定する。その後は2023-05-22境界の `課長 熊田工作 / パチスロ ジャベリン` を再監査。遡及QAは `2007-07-08_caribbean-queen.md`（カリビアンクイーン）から継続し、既存性能値はやり直さない。`L戦国BASARAギガZE` は2023-08-07境界で導入日CONFLICTを再監査する。**
