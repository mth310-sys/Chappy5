更新日: 2026-09-10

## 現在地点
- recordCount: **1228**
- latestRecordAdded: **パチスロ ベン・トー ～狼たちの夜～**
- latestRecordAddedPath: `docs/real_machine_db/machines/2018-09-18_ben-to-wolves-night.md`
- chronologicalFrontier: **2018-09-18**
- frontierLatestMachine: **パチスロ ベン・トー ～狼たちの夜～ — No.1228**
- schema: **resetBehavior v0.7**
- status: **2018-09-18_GROUP_OPEN_1_OF_AT_LEAST_5_PROCESSED**

## 今回の同期 / 進捗
- 最新mainのREADME / mission v0.7 / INDEX / LATEST_HANDOFF / No.1227を再取得して開始。
- mainは並行進捗により1227件 / 2018-09-03群CLOSEDまで進んでいたため、その地点を正本として継続。既存性能値は再収集しなかった。
- 9/4～9/17境界を日刊スポーツ導入カレンダー、後年導入一覧、機種別資料で監査。9/3の次の主要導入群は9/18として進行。
- 既知先頭候補 `パチスロ ベン・トー ～狼たちの夜～` をGitHub検索で重複なし確認後、No.1228として登録。
- 型式 `パチスロベントー／BA`、検定番号 `7S1703`、メーカー バルテックをHAZUSEで固定。
- ホール導入日は日刊スポーツ/K-Navi/ちょんぼりすた/すろぱちくえすとが2018-09-18で一致。HAZUSEは9/17導入開始、グリーンべるとは9/17納品予定のため `CONFLICT_RELEASE_DATE_2018_09_17_VS_2018_09_18` を保持し、canonicalは9/18。
- 設定1/3/5/7、機械割98.4/100.7/105.4/109.2%、SBIG全設定1/8192、BIG 1/297.9→1/258.0、REG 1/312.1→1/262.1、合算1/149.6→1/128.0。
- ベースはHAZUSEの約32.4～34.8G/50枚を設定差レンジとしてcanonical。RT純増約0.2枚/G。SBIG/BIG最大252枚、REG最大98枚、RT20G、CZとのループ率約60%over。SBIG後は次回BIGまで無限RT。
- 333G/555G到達で周期CZへ移るハマり救済あり。REGでは周期到達までのゲーム数がリセットされない解析を確認。一般的な強制当選天井とは別定義で保存。
- resetBehaviorは当時解析の朝一比較表自体が設定変更/電源OFF→ONの天井・内部状態・ステージを全て「調査中」。型式名/メーカー/設定変更/リセット/朝一/据え置き/電断/333G/555G/RT/CZまで検索語を変えて再探索したが確定契約を別資料で固定できず、一般論を補完せずUNVERIFIED_AFTER_RESEARCH。
- 後年5号機クロニクルの機械割98.79/100.52/104.17/107.07%は当時複数資料系列と異なるため `CONFLICT_PAYOUT_RETROSPECTIVE` として分離。
- 9/18群の横断監査で、日刊スポーツ掲載のベン・トー/闇芝居/アレックスに加え、別導入一覧・機種別資料から `パチスロ南国育ち～蝶々ver～30Φ` と `パチスロ ロックマン アビリティ 史上最大の試練` も2018-09-18導入対象と確認。9/18群は少なくとも5機でOPEN維持。

## No.1228 — パチスロ ベン・トー ～狼たちの夜～
- manufacturer: **バルテック**
- releaseDateCanonical: **2018-09-18**
- formalModelName: **パチスロベントー／BA**
- certificationNumber: **7S1703**
- generation/system: **5号機 / A+RT**
- settings: **1 / 3 / 5 / 7**
- payoutRate: **98.4 / 100.7 / 105.4 / 109.2%**
- SUPER BIG: **全設定1/8192.0**
- BIG: **1/297.9 / 1/288.7 / 1/269.7 / 1/258.0**
- REG: **1/312.1 / 1/295.2 / 1/277.7 / 1/262.1**
- bonusCombined: **1/149.6 / 1/143.4 / 1/134.6 / 1/128.0**
- baseGamesPer50: **約32.4～34.8G/50枚**
- netIncrease: **RT約0.2枚/G**
- basicPayout: **SBIG最大252枚 / BIG最大252枚 / REG最大98枚 / RT20G / CZ-RTループ約60%over / SBIG後次回BIGまで無限RT**
- ceiling/relief: **通常333Gまたは555Gで周期CZ。REGでは周期G非リセット。強制当選型天井とは区別**

### resetBehavior v0.7
- settingChange: **UNVERIFIED_AFTER_RESEARCH**（当時解析も天井/内部状態/ステージ「調査中」）。
- carryOver: **UNVERIFIED_AFTER_RESEARCH_AS_DISTINCT_CONDITION**。
- powerOFF→ON: **UNVERIFIED_AFTER_RESEARCH**（当時解析も天井/内部状態/ステージ「調査中」）。
- gameCounter: REG当選では333G/555G周期カウンタ非リセット。設定変更/純電断時はUNVERIFIED。
- ceilingAfterReset: 設定変更専用短縮/変更値 `NONE_CONFIRMED_AFTER_RESEARCH`。
- mode/state: 朝一専用モードNONE_CONFIRMED、CZ/RT/ステージ処理UNVERIFIED。
- advantageousSection: **UNVERIFIED_AFTER_RESEARCH**。一般論から補完しない。
- resetBenefits/resetPenalties: **NONE_CONFIRMED_AFTER_RESEARCH**。
- resetDetection: **UNVERIFIED_AFTER_RESEARCH**。
- numericResetData: **NONE_CONFIRMED_AFTER_RESEARCH**。

## 2018-09-18群監査
### 登録済み
- No.1228 パチスロ ベン・トー ～狼たちの夜～ — 2018-09-18 canonical（9/17資料差保持）。

### 未処理・同日候補
- パチスロ 闇芝居 — NET。日刊スポーツ/K-Navi/ちょんぼりすたで9/18確認。
- アレックス — アクロス。日刊スポーツ/必勝本/ちょんぼりすたで9/18確認。
- パチスロ南国育ち～蝶々ver～30Φ — アムテックス。パチビー/K-Navi/すろぱちくえすと/後年導入一覧で9/18確認。日刊スポーツカレンダーからは漏れているため要独立登録監査。
- パチスロ ロックマン アビリティ 史上最大の試練 — スパイキー製造/フィールズ発表系。後年導入一覧、解析、当時告知で9/18確認。日刊スポーツカレンダーからは漏れているため要独立登録監査。

### 群判定
- `2018-09-18_GROUP_OPEN_1_OF_AT_LEAST_5_PROCESSED`
- 日刊スポーツ単独では3機だが、別系統の導入一覧が南国育ち蝶々ver/ロックマンを追加掲載するため、少なくとも5機を処理するまでCLOSE禁止。
- 5機処理後も全メーカー/別スペック/PB/地域差監査を行ってからCLOSED判定する。

## 遡及 resetBehavior QA
- retroQaScanConfirmedThrough: **2006-09_kyuji.md**（球児）。
- latestRetroQaResult: **PARTIAL_RESEARCH_EXHAUSTED**。
- nextRetroQaCursor: `docs/real_machine_db/machines/2006-09_burichika-30.md`（ブリチカ-30）。
- retroQaStatus: **SEQUENTIAL_SCAN_ACTIVE**。
- 今回は新規時系列群の境界監査とNo.1228登録を優先し、QAカーソルは進めず維持。

## 継続注意事項
- `INDEX.md`は旧スナップショット。LATEST_HANDOFF + main実レコードを優先する。
- 毎回、最新mainのREADME / mission / INDEX / LATEST_HANDOFF / latest recordを読み直す。
- 並行更新がある場合は最新HEADを優先し、古い番号で上書きしない。
- resetBehaviorで一般論を本機固有契約へ昇格しない。据え置きと純電断を同義扱いしない。
- 同日/境界群は全メーカー/別スペック/PB/地域差監査後にのみCLOSED判定する。
- 技術介入機では通常/完全攻略等の機械割定義を混同しない。

## 次回再開地点
1. 最新mainのREADME / mission v0.7 / INDEX / LATEST_HANDOFF / No.1228を再取得。
2. **1228件 / chronologicalFrontier 2018-09-18 / `2018-09-18_GROUP_OPEN_1_OF_AT_LEAST_5_PROCESSED`**を正本として継続。ただし並行更新があれば最新HEADを優先。
3. 次の未処理は **`パチスロ南国育ち～蝶々ver～30Φ`** を優先候補とする。続いて `パチスロ ロックマン アビリティ 史上最大の試練`、`パチスロ 闇芝居`、`アレックス`。同日内の順序は漏れ防止を優先し、重複確認後に連番登録。
4. 南国育ち蝶々verは導入9/18、5.9号機ART、設定1/4/6、ART純増約1.8枚/G、初当たり全設定1/390.1、総出現1/78.4→1/72.3が先行確認済み。resetBehaviorは次回、設定変更/据え置き/電源OFF→ON/有利区間/朝一恩恵/判別数値まで再探索してから固定。
5. ロックマンは9/18導入を複数資料で確認済み。朝一資料に `CZ天井はリセット・据え置きとも引き継ぐ`、`RT/CZ/ボーナス中の設定変更後は見た目通常だが内部CZ相当` の有力な機種固有契約があるため、次回以降別ソース照合してnumeric/resetBehaviorへ反映する。
6. 遡及QAは `docs/real_machine_db/machines/2006-09_burichika-30.md`（ブリチカ-30）から継続。

## 主要出典 — 取得日 2026-09-10
### No.1228 パチスロ ベン・トー ～狼たちの夜～
- グリーンべると: https://web-greenbelt.jp/00010603/
- 日刊スポーツ導入カレンダー: https://www.nikkansports.com/amusement/pachislot/news/201808310000459.html
- HAZUSE: https://hazuse.com/machine/pachislot/7S1703/
- K-Navi: https://p-kn.com/slot/3061/
- ちょんぼりすた: https://chonborista.com/slot/baltec/65423/
- パチマガスロマガ: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/baltech_slot/60/a.php
- P-WORLD: https://www.p-world.co.jp/machine/database/8709
- 5号機クロニクル: https://5goki.com/baltec

### 9/18群追加候補監査
- 2-9伝説導入一覧: https://29den.com/newslot/
- パチビー 南国育ち～蝶々ver～30Φ: https://www.pachibee.jp/machines/index/218080000
- K-Navi 南国育ち～蝶々ver～: https://p-kn.com/slot/3074/
- すろぱちくえすと 南国育ち: https://www.slopachi-quest.com/article/nanngokusodachi-chocho-settei/
- PiDEA X ロックマン: https://www.pidea.jp/articles/%E5%90%8D%E4%BD%9C%E3%82%B2%E3%83%BC%E3%83%A0%E3%81%8C%E3%83%91%E3%83%81%E3%82%B9%E3%83%AD%E3%82%AA%E3%83%AA%E3%82%B8%E3%83%8A%E3%83%AB%E3%81%A7%E7%99%BB%E5%A0%B4%EF%BC%8F%E3%82%B9%E3%83%91%E3%82%A4%E3%82%AD%E3%83%BC
- すろぱちくえすと ロックマン朝一: https://www.slopachi-quest.com/article/rockman-abilty/
