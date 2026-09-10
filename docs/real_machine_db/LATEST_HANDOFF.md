更新日: 2026-09-10

## 現在地点
- recordCount: **1184**
- latestRecordAdded: **パチスロGirls Guns Groovy（ガールズガンズグルービー）**
- latestRecordAddedPath: `docs/real_machine_db/machines/2018-04-02_girls-guns-groovy.md`
- chronologicalFrontier: **2018-04-02**
- frontierLatestMachine: **ガールズガンズグルービー — No.1184**
- schema: **resetBehavior v0.7**
- status: **2018-04-02_GROUP_CLOSED_AFTER_CROSS_SOURCE_AUDIT**

## 今回の同期 / 進捗
- 最新mainの `README.md`、mission v0.7、旧 `INDEX.md`、`LATEST_HANDOFF.md`、直前No.1182 `カンフーレディ・テトラ` を再取得して開始。
- INDEXは初期19件時点の旧スナップショットのため、README規定どおり `LATEST_HANDOFF.md` + main実レコードを正本として採用。
- 開始時正本は **1182件 / chronologicalFrontier 2018-03-19 / 3/19群CLOSED**。
- 2018-03-20〜04-01境界を導入日一覧、HAZUSE、当時業界記事、解析DBで再監査。独立した3/26パチスロ新台群は固定できず、年次導入一覧も3/19→4/2と直接前進するため4/2群をOPEN。
- `押忍！番長A` と `ガールズガンズグルービー` を既存GitHub検索で未登録確認し、No.1183 / No.1184としてperformance core + resetBehavior v0.7で追加。
- 2018年導入一覧では4/2群はこの2機で、HAZUSE・K-Navi・パチビー・当時業界記事でも日付を相互確認。追加候補を固定できなかったため4/2群をCLOSE。

## No.1183 — 押忍！番長A
- path: `docs/real_machine_db/machines/2018-04-02_osu-bancho-a.md`
- manufacturer: **大都技研**
- releaseDateCanonical: **2018-04-02**
- formalModelName: `押忍！番長A／A3`
- certificationNumber: `7S1429`
- generation/system: **5.9号機 / A+RT / 技術介入機**
- settings: **1 / 2 / 5 / 6**
- 通常機械割: **98.5 / 101.4 / 105.2 / 109.7%**
- 攻略打ち機械割: **100.7 / 103.2 / 107.2 / 111.8%**
- BB合成: **1/273.1 / 1/273.1 / 1/237.4 / 1/240.9**
- REG: **1/331.0 / 1/273.1 / 1/331.0 / 1/240.9**
- ボーナス合成: **1/149.6 / 1/136.5 / 1/138.3 / 1/120.5**
- 50枚ベース: **約33〜35G/50枚**
- RT純増: **約0.2枚/G**
- 青7BIG: **最大304枚+RT50G** / その他BIG: **最大260枚+RT20G** / REG: **最大106枚**
- 天井: **非搭載**

### resetBehavior v0.7
- 天井非搭載なので天井カウンタ/短縮天井は`NOT_APPLICABLE`。
- 本機専用朝一資料では設定変更時RT状態/ステージは「調査中」、電源OFF→ON時RT状態は「引き継ぎ?」。疑問符付きのため後者も確定値へ昇格せず`UNVERIFIED_AFTER_RESEARCH_WITH_LOW_CONFIDENCE_CARRYOVER_INDICATION`。
- 朝一/設定変更専用の主要恩恵は解析上`NONE_CONFIRMED_AFTER_RESEARCH`。ちょんぼりすたは「Aタイプなのでリセット恩恵なし」と記載。
- 大都機はガックン判別が効かない可能性が高いとの記載は推測表現であり、本機固有の確定契約として採用せず`UNVERIFIED_AFTER_RESEARCH`。
- 5.9号機一般論から有利区間使用/変更時処理を推定転記しない。

## No.1184 — パチスロGirls Guns Groovy
- path: `docs/real_machine_db/machines/2018-04-02_girls-guns-groovy.md`
- manufacturer: **ニューギン**
- releaseDateCanonical: **2018-04-02**
- formalModelName: `GirlsGunsGroovy-V`
- certificationNumber: `7S0994`
- generation/system: **5.9号機 / A+RT / ボーナス+CZ+ループRT**
- settings: **1 / 2 / 5 / 6**
- 機械割: **98.5 / 99.9 / 106.8 / 111.1%**
- BIG: **1/327.7 / 1/318.1 / 1/275.4 / 1/273.1**
- REG: **1/504.1 / 1/481.9 / 1/425.6 / 1/327.7**
- ボーナス合成: **1/198.6 / 1/191.6 / 1/167.2 / 1/148.9**
- 50枚ベース: **約35G/50枚**
- BIG: **約300枚** / REG: **約90枚**
- RT: **1セット30G / 純増約0.2枚/G**
- 天井: **非搭載**

### resetBehavior v0.7
- 本機専用朝一比較表では設定変更/電源OFF→ONとも状態・ステージ「調査中」。検索語と資料系統を変えた再探索後もCZ/RT状態、開始ステージ、純電断、据え置きの直接契約は`UNVERIFIED_AFTER_RESEARCH`。
- 天井非搭載のため通常天井カウンタ/短縮天井は`NOT_APPLICABLE`。
- 2020年ユーザーコメントに「設定変更時は内部CZスタートではないか」という実戦報告があるが、管理人も未把握で解析裏取りなし。`ANECDOTAL_UNVERIFIED_RESET_CZ_START_REPORT`として品質メモのみ保持し、朝一恩恵/数値へ採用しない。
- 本機固有ガックン/初期出目/ランプ変更判別、有利区間処理は`UNVERIFIED_AFTER_RESEARCH`。

## CONFLICT / 品質メモ
- No.1183の設定段階は複数解析で`1/2/5/6`。グリーンべると記事中の「設定1〜4」は4段階設定の一般表現とみなし、数値テーブル上は1/2/5/6をcanonical採用。
- No.1184はPiDEA X本文が`A+ART`と表記する一方、HAZUSE/パチビー/ちょんぼりすたは30G・約0.2枚/GのRTとして具体的に記述。本DBでは`A+RT`をcanonicalとし`CONFLICT_CLASSIFICATION_LABEL`を保持。
- No.1184の朝一内部CZ説は実戦コメントのみで、解析値と混同しない。

## 2018-04-02群監査
- 真パチスロ備忘録2018導入一覧: 4/2は `番長Aタイプ` / `ガールズガンズグルービー` の2機、次は4/9 `これはゾンビですか？`。
- HAZUSEでNo.1183/1184とも2018-04-02を型式/検定番号付きで確認。
- K-Navi/パチビー/当時業界記事でも4/2または4月上旬/納品4/1を相互確認。
- 追加の独立4/2パチスロ機を固定できず、status: `2018-04-02_GROUP_CLOSED_AFTER_CROSS_SOURCE_AUDIT`。

## 次導入日群の先行確認
- **2018-04-09**: `パチスロ これはゾンビですか？` — 北電子。
- パチビー、K-Naviがホール導入2018-04-09で一致。
- 5.9号機 / ボーナス+ART、ART純増はボーナス込み約1.9枚/Gとして先行確認。
- 次回は既存重複を確認後、No.1185候補としてperformance core + resetBehavior v0.7を処理し、4/9同日全メーカー監査を行う。

## 継続注意事項
- `美ラメキ！`を2018-03-12へ登録しない。canonicalは2018-07-02として後続キューで処理する。
- `押忍！番長A`の攻略機械割と通常打ち機械割を混同しない。
- `ガールズガンズグルービー`はPiDEAのA+ART表記だけでART機へ分類しない。具体的30G RT仕様を優先。
- resetBehaviorで推測表現「?」「可能性が高い」やユーザー実戦コメントを確定契約へ昇格しない。

## 遡及 resetBehavior QA
- 最新カーソルは `docs/real_machine_db/machines/2006-07_ooedo-manyuuki.md`（大江戸漫遊記）。
- retroQaScanConfirmedThrough: **2006-06_lord-of-the-rings.md**。
- retroQaStatus: **SEQUENTIAL_SCAN_ACTIVE**。
- 新規機種収集本線を止めず、別QAリレーで順次補完する。

## 次回再開地点
1. 最新mainのREADME / mission v0.7 / INDEX / LATEST_HANDOFF / No.1183 / No.1184を再取得。
2. **1184件 / chronologicalFrontier 2018-04-02 / 4/2群CLOSED** を正本として継続。
3. **2018-04-09群OPEN**。`パチスロ これはゾンビですか？` をNo.1185候補として既存重複確認。
4. performance core + resetBehavior v0.7（設定変更/据え置き/純電断/天井/モード/状態/有利区間/朝一恩恵・不利/変更判別/公開朝一数値）を収集。
5. 4/9同日全メーカー・別スペック・表記揺れを横断監査して群CLOSE判定。
6. 既知の次導入日は2018-04-16 `不二子TYPE-A+`、その後4/23 `パックマン`。境界を毎回再監査してから前進する。
7. 遡及QAは `2006-07_ooedo-manyuuki.md` から継続。

## 主要出典 — 取得日 2026-09-10
### No.1183 押忍！番長A
- HAZUSE: https://hazuse.com/machine/pachislot/7S1429/
- パチビー: https://www.pachibee.jp/machines/index/218020004
- ちょんぼりすた: https://chonborista.com/slot/daito-slot/53886/
- グリーンべると: https://web-greenbelt.jp/00010275/
- K-Navi: https://p-kn.com/slot/2981/
- さむらい流スロプロ道: https://sloter-samurai.com/practicing/banchoua_jissen01

### No.1184 ガールズガンズグルービー
- HAZUSE: https://hazuse.com/machine/pachislot/7S0994/
- HAZUSE 基本スペック: https://hazuse.com/machine/pachislot/7S0994/genre/201/
- ちょんぼりすた: https://chonborista.com/slot/newgin-slot/55074/
- パチビー: https://www.pachibee.jp/movies/index/14407
- PiDEA X: https://www.pidea.jp/articles/%E3%80%8C%E5%A4%A7%E6%B1%9F%E6%88%B8%E5%AD%A6%E5%9C%92%E3%80%8D%E5%88%B6%E9%99%90%E6%99%82%E9%96%93%E5%BC%8F%E3%81%AE%E6%96%B0%E7%B6%99%E7%B6%9A%E3%82%B7%E3%82%B9%E3%83%86%E3%83%A0%EF%BC%8F%E3%83%8B%E3%83%A5%E3%83%BC%E3%82%AE%E3%83%B3
- pachislo-data: https://pachislo-data.com/newgin/63760

### 導入順監査 / 次群
- 真パチスロ備忘録 2018導入日一覧: https://sin-surobi.com/dounyubi/23041/
- これはゾンビですか？ パチビー: https://www.pachibee.jp/movies/index/14444
- これはゾンビですか？ K-Navi: https://p-kn.com/slot/2961/
