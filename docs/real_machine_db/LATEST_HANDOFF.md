更新日: 2026-09-10

## 現在地点
- recordCount: **1160**
- latestRecordAdded: **タロットエンペラー**
- latestRecordAddedPath: `docs/real_machine_db/machines/2017-11-27_tarot-emperor.md`
- chronologicalFrontier: **2017-11-27**
- frontierLatestMachine: **タロットエンペラー — No.1160**
- schema: **resetBehavior v0.7**
- status: **2017-11-06_GROUP_CLOSED_AFTER_CROSS_SOURCE_AUDIT__2017-11-20_GROUP_CLOSED_AFTER_CROSS_SOURCE_AUDIT__2017-11-27_GROUP_CLOSED_AFTER_CROSS_SOURCE_AUDIT__2017-11_MONTH_DAY_UNRESOLVED_IMISORE_XX**

## 今回の同期 / 進捗
- 最新mainの `README.md`、mission v0.7、旧 `INDEX.md`、`LATEST_HANDOFF.md`、No.1157〜1159を再取得して開始。
- INDEXは初期19件時点の旧スナップショットのため、README規定どおり `LATEST_HANDOFF.md` + main実レコードを正本として採用。
- 開始時正本は **1159件 / 日単位chronologicalFrontier 2017-11-20 / 11/6・11/20群CLOSED**。
- handoff指定の次機種 **2017-11-27「タロットエンペラー」** をNo.1160としてperformance core + resetBehavior v0.7収集。
- パチビー2017年11月導入カレンダー、K-Navi、HAZUSE、複数年表を横断し、11/27導入のパチスロ新台は本機のみで一致。**2017-11-27_GROUP_CLOSED_AFTER_CROSS_SOURCE_AUDIT** とした。
- 2017年12月先頭群を先行監査。K-Naviと年表系資料で **2017-12-04「BLACK LAGOON3」「パチスロ ゴッドイーター2」「まめ」** の3機が一致するため、次回はこの同日群を時系列キューとして処理する。

## No.1160 — タロットエンペラー
- path: `docs/real_machine_db/machines/2017-11-27_tarot-emperor.md`
- manufacturer: ユニバーサルブロス
- releaseDate: 2017-11-27
- formalModelName: `タロットエンペラーRT`
- certificationNumber: `7S1246`
- systemType: A+RT / 技術介入 / 5.9号機
- 市場掲載機械割: **97.4 / 99.3 / 101.1 / 105.7 / 107.0 / 107.2%**
- 完全攻略時: **99.7 / 101.7 / 103.5 / 108.1 / 108.6 / 108.9%**
- BIG: **1/425.6 / 1/404.5 / 1/392.4 / 1/368.2 / 1/885.6 / 1/885.6**
- REG: **1/425.6 / 1/414.8 / 1/394.8 / 1/381.0 / 1/237.4 / 1/234.1**
- 合算: **1/212.8 → 1/185.1**
- 50枚ベース: **約39G**（別資料で38.9〜42.1Gレンジ）
- BIG最大311枚 / REG104枚
- RT: タロットチャンス約0.2枚/G、タロットゲーム約0.5枚/G。BIG後最大130G、REG後は約25%で100Gタロットゲーム。
- 天井: **なし**
- resetBehavior: 天井/ゲーム数解除は非搭載。設定変更・据え置き・純電源OFF→ON時のRT残G/RT種別/成立済みボーナス/初期出目・液晶状態を直接比較する本機固有資料は、表記・検索語・資料系統を変えて再探索しても固定できず `UNVERIFIED_AFTER_RESEARCH`。朝一専用モード、短縮天井、変更時初当たり優遇、確定ガックンも `NONE_CONFIRMED` / `UNVERIFIED`。一般論による補完はしていない。
- 設定5/6はBIGが1/885.6まで重く、REG・通常小役側へ大きく寄る特殊設計。朝一の設定推測には影響するが、これは設定変更そのものの判別契約とは分離。

## 品質メモ
- `イミソーレXX`の日単位導入日は引き続き `UNVERIFIED_AFTER_RESEARCH`。既に月単位No.1159として回収済みで、本線を止めない。
- タロットエンペラーの通常機械割と完全攻略時機械割は技術介入条件差のため別系列で保存し、平均化しない。
- タロットエンペラーの50枚ベースは「約39G」と「38.9〜42.1G」の資料表現差を代表値/設定差レンジとして分離。
- resetBehavior低レベル状態は「A+RTなら通常こうなる」という一般論で埋めず、本機固有直接資料が取れなかった項目のみ十分な再探索後UNVERIFIEDとした。
- 11/27群はパチビー・K-Navi系導入日資料で本機のみ一致しCLOSED。

## 遡及 resetBehavior QA
- 最新カーソルは `docs/real_machine_db/machines/2006-07_ooedo-manyuuki.md`（大江戸漫遊記）。
- retroQaScanConfirmedThrough: **2006-06_lord-of-the-rings.md**。
- retroQaStatus: **SEQUENTIAL_SCAN_ACTIVE**。
- 新規機種収集本線を止めず、別QAリレーで順次補完する。

## 次回再開地点
1. 最新mainの README / mission v0.7 / INDEX / LATEST_HANDOFF / No.1159〜1160を再取得。
2. **1160件 / chronologicalFrontier 2017-11-27 / 11/27群CLOSED** を正本として継続。
3. 2017-12-04群を処理。優先キューは **「BLACK LAGOON3」→「パチスロ ゴッドイーター2」→「まめ」**。採番はNo.1161から。
4. 各機種でperformance core + resetBehavior v0.7を同時収集し、同日全メーカー監査後に12/4群CLOSED判定。
5. その後、現時点の複数導入カレンダーでは次の確定日 **2017-12-18「SLOT魔法少女まどか☆マギカA」** へ前進。ただし12/5〜12/17の地域差/別スペック漏れをCLOSED前に横断監査する。
6. `イミソーレXX` exact dayは新しい決定的資料が出た場合のみ追補し、同じ検索の反復で本線を止めない。
7. 遡及QAは `docs/real_machine_db/machines/2006-07_ooedo-manyuuki.md` から継続。

## 主要出典 — 取得日 2026-09-10
- ユニバーサル公式 タロットエンペラー: https://www.universal-777.com/product/slot/tarot_emperor/
- グリーンべると: https://web-greenbelt.jp/00010014/
- HAZUSE タロットエンペラー: https://hazuse.com/machine/pachislot/7S1246/
- P-WORLD タロットエンペラー: https://www.p-world.co.jp/machine/database/8533
- ちょんぼりすた: https://chonborista.com/slot/universal-slot/49960/
- パチ7: https://pachiseven.jp/machines/5331/cutout/70
- パチマガスロマガ: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/universalbros_slot/07/l.php
- パチビー 2017年11月導入カレンダー: https://www.pachibee.jp/machines/schedule/2017-11
- K-Navi 2017年12月導入カレンダー: https://p-kn.com/calendar/201712/
- 2017年新台スロット導入日カレンダー: https://moge-site.com/new-slot2017
