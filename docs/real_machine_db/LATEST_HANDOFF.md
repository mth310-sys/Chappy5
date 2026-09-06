# 実機DB 最新リレー引継ぎ

更新日: 2026-09-06

## 現在地点

- recordCount: **751**
- latestMachineAddedByChronology: **学園黙示録 HIGH SCHOOL OF THE DEAD**（スパイキー）
- latestRecord: `docs/real_machine_db/machines/2013-08-05_gakuen-mokushiroku-high-school-of-the-dead.md`
- boundaryRepairRecord: `docs/real_machine_db/machines/2013-07-29_churanko-30.md`
- chronologicalFrontier: **2013-08-05**
- frontierLatestExactDateMachine: **学園黙示録 HIGH SCHOOL OF THE DEAD**
- schema: **resetBehavior v0.7**
- status: **OPEN_2013-08-05_GROUP__BOUNDARY_REPAIR_2013-07-29_CHURANKO30_ADDED__CONTINUE_SAME_DAY_AUDIT**

## 今回の同期

- 最新mainの `README.md`、`docs/CHAPPY5_REAL_MACHINE_DATABASE_MISSION_V01.md`（v0.7）、旧集約状態の `docs/real_machine_db/INDEX.md`、`LATEST_HANDOFF.md`、直前レコード `2013-07-22_pachislo-qp.md` を再読。
- INDEXは19件地点の旧集約状態なのでREADME規定どおり最新HANDOFFと実レコードを優先。
- 開始時main正本は recordCount **749** / chronologicalFrontier **2013-07-22** / 07-22群CLOSED。
- 07-23～08-04境界監査中、HAZUSEで **2013-07-29「美らん娘-30」**（岡崎産業）の未登録を検出。必勝本は2013-08-05、業界記事は8/4納品開始予定なので導入日はCONFLICTとして平均せず保持し、漏れ防止優先で750件目相当として遡及追加。
- 美らん娘-30の性能コア + resetBehavior v0.7を収集。設定変更/据え置き/電源OFF→ON時の独自キャリーオーバーモード契約は資料系統を変えて再探索後も安全に固定できずUNVERIFIED_AFTER_RESEARCH。
- その後、既知アンカー **2013-08-05「学園黙示録 HIGH SCHOOL OF THE DEAD」**（スパイキー）を751件目相当として追加。型式H.O.T.D_BB / 検定3S0304。
- 08-05同日群を再監査したところ、少なくとも **緑ドン ～キラメキ！炎のオーロラ伝説～ / ジャックポットドリーム / レインボースリーセブンS1-30** がK-Naviで2013-08-05導入。さらに岡崎産業 **パチスロBADBOYS** は2013-06業界記事で8/4納品開始予定のため同日群候補として要確認。よって08-05群はOPENのまま。

## 今回追加1 — 美らん娘-30

### identity / 性能コア

- manufacturer: **岡崎産業**。
- 型式/検定: **チュランコ01-30 / 3S0109**。
- releaseDate: **CONFLICT**。HAZUSE 2013-07-29 / 必勝本 2013-08-05 / グリーンべると2013-06-06記事は8月4日納品開始予定。
- system: **5号機ノーマル / 30φ / 完全告知 / キャリーオーバーシステム・内部モード**。
- 機械割: **96.5 / 98.0 / 99.5 / 101.0 / 105.0 / 110.0%**。
- BIG: **全設定共通1/218**、REG: **全設定共通1/312**、合算: **全設定共通1/128**。
- baseGamesPer50: **37～38G/1000円**。
- BIG最大純増 **約311枚**、REG純増 **約98枚**。
- 天国モード時のボーナス確率は全設定共通1/128と解析資料に記載。

### resetBehavior v0.7

- 独自のキャリーオーバーモード搭載は複数資料で確認。
- 設定変更時に内部成立ボーナス/モードをクリア・再抽選・保持するかは **UNVERIFIED_AFTER_RESEARCH**。
- 純据え置き時のキャリーオーバーモード/内部成立ボーナス保持契約も **UNVERIFIED_AFTER_RESEARCH**。
- 単純電源OFF→ON時の内部成立ボーナス・モード・告知状態・初期出目も **UNVERIFIED_AFTER_RESEARCH**。
- 通常のゲーム数天井/規定G解除、リセット短縮天井は **NOT_APPLICABLE_OR_NONE_CONFIRMED**。
- 本機固有ガックン等の変更判別は **UNVERIFIED_AFTER_RESEARCH**。
- advantageousSectionReset: **NOT_APPLICABLE_5TH_GEN**。

## 今回追加2 — 学園黙示録 HIGH SCHOOL OF THE DEAD

### identity / 性能コア

- manufacturer: **スパイキー**。
- releaseDate: **2013-08-05**。K-Navi、HAZUSE、パチビー、ドラス当日プレスリリースで照合。
- 型式/検定: **H.O.T.D_BB / 3S0304**。
- system: **5号機A+ART / 自力CZ「麗CHALLENGE」 + ゲーム数上乗せART**。
- 機械割: **97.2 / 98.4 / 100.4 / 104.1 / 107.1 / 110.3%**。
- ART初当たり: **1/488.7 / 471.1 / 473.6 / 451.5 / 430.9 / 373.3**。
- ボーナス合算: **1/255.0 / 250.1 / 244.5 / 238.3 / 232.4 / 222.9**。
- baseGamesPer50: **UNVERIFIED_AFTER_RESEARCH**。2018山佐版/2020ゴールド版の値は混入させていない。
- ART「All DEAD'S Attack」: **1セット50G+α / 純増約1.6枚/G**。
- BIG純増約**200枚**、殲滅/暴走BONUS約**40枚**。
- 天井: **ボーナス間1280G消化（当時解析では1280G+α表記）でART確定麗CHALLENGE、ボーナス成立までループ**。

### resetBehavior v0.7

- 2013-08-05当時天井解析で **設定変更でゲーム数リセット**を直接確認。ボーナス間天井進捗は設定変更時RESET。
- 設定変更時CZモードA～G再抽選/具体振り分け、内部状態開始契約は **UNVERIFIED_AFTER_RESEARCH**。
- 純据え置き時の天井G/モード/状態、単純電源OFF→ON時の内部/表示契約も **UNVERIFIED_AFTER_RESEARCH**。
- 設定変更専用固定短縮天井・公開朝一優遇率は **NONE_CONFIRMED_AFTER_RESEARCH**。
- ガックン/初期出目/液晶による本機固有変更判別は **UNVERIFIED_AFTER_RESEARCH**。
- advantageousSectionReset: **NOT_APPLICABLE_5TH_GEN**。

## 境界監査 2013-07-23～08-05

- 07-23～08-04を導入日、機種一覧、HAZUSE/K-Navi/パチビー/業界記事系の検索語を変えて監査。
- 新規漏れとして **美らん娘-30（HAZUSE 07-29）** を発見し遡及追加。
- 美らん娘-30は導入日自体に07-29 / 08-05 / 8/4納品予定のCONFLICTがあるため、その差をレコードに保持。
- 08-05はHOTD以外にも具体的同日機が存在することを確認。**08-05群OPEN**。

## 遡及resetBehavior QA 進捗

- QAカーソルは `2007-01_karate-baka-ichidai.md` の次の実ファイル順。
- 今回は時系列本線の漏れ修復 + 2レコード追加を優先し、QAカーソル自体は進めていない。

## 次回再開地点

1. **recordCount 751 / chronologicalFrontier 2013-08-05 / 08-05群OPEN** から開始。
2. まずrepoで同日候補の既登録有無を確認し、未登録なら **緑ドン ～キラメキ！炎のオーロラ伝説～** を次候補として性能コア + resetBehavior v0.7収集。
3. 続いて **ジャックポットドリーム（岡崎産業） / レインボースリーセブンS1-30（ベルコ）** を同日キューとして監査。
4. **パチスロBADBOYS（岡崎産業）** は8/4納品開始予定資料があるため、07-29～08-05の導入日差を別系統で再確認し、未登録なら時系列内に追加。
5. 08-05群をHOTDだけで閉じず、全メーカー横断監査後にCLOSED判定する。
6. 遡及QAは `2007-01_karate-baka-ichidai.md` 直後の実ファイル順から継続。

## 主要出典 — 取得日 2026-09-06

### 美らん娘-30

- HAZUSE: `https://hazuse.com/machine/pachislot/3S0109/`
- パチマガスロマガ 基本情報: `https://cs62.cs-plaza.com/g/pachi/pla/s_conq/okazaki_slot/67/a.php`
- パチマガスロマガ ボーナス確率: `https://cs62.cs-plaza.com/g/pachi/pla/s_conq/okazaki_slot/67/h.php`
- パチマガスロマガ 小役/1000円G: `https://cs62.cs-plaza.com/g/pachi/pla/s_conq/okazaki_slot/67/c.php`
- グリーンべると/P-WORLD業界ニュース: `https://news.p-world.co.jp/articles/5890/greenbelt`
- 必勝本: `https://p.hisshobon.jp/machine/2241/1/40906`
- 2013当時公式値転載: `https://slosoku.com/archives/28121773.html`

### 学園黙示録 HIGH SCHOOL OF THE DEAD

- K-Navi: `https://p-kn.com/slot/1890/`
- HAZUSE: `https://hazuse.com/machine/pachislot/3S0304/`
- パチビー: `https://www.pachibee.jp/movies/index/9657`
- ドラス/ValuePress: `https://www.value-press.com/pressrelease/114354`
- スロパチクエスト機種まとめ: `https://www.slopachi-quest.com/kisyubetsu/high-school-of-the-dead/`
- 2013-08-05天井解析: `https://www.slopachi-quest.com/article/371142555-html/`
- CrankySeven: `https://crankyseven.com/highschoolofthedead-pc.htm`

### 次候補 / 同日監査

- 緑ドン ～キラメキ！炎のオーロラ伝説～ K-Navi: `https://p-kn.com/slot/1875/`
- ジャックポットドリーム K-Navi: `https://p-kn.com/slot/1919/`
- レインボースリーセブンS1-30 K-Navi: `https://p-kn.com/slot/1921/`
- BADBOYS / 美らん娘-30 発表記事: `https://news.p-world.co.jp/articles/5890/greenbelt`
