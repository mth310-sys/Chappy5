# 実機DB 最新リレー引継ぎ

更新日: 2026-09-06

## 現在地点

- recordCount: **763**
- latestMachineAddedByChronology: **パチスロ笑ゥせぇるすまん2**（三洋物産 / SANYO）
- latestRecord: `docs/real_machine_db/machines/2013-09-02_pachislot-warausalesman2.md`
- chronologicalFrontier: **2013-09-02**
- frontierLatestExactDateMachine: **パチスロ笑ゥせぇるすまん2**
- schema: **resetBehavior v0.7**
- status: **CLOSED_2013-09-02_GROUP__NEXT_BOUNDARY_AUDIT_2013-09-03_TO_2013-09-16**

## 今回の同期 / 重要事項

- 最新mainの `README.md`、`docs/CHAPPY5_REAL_MACHINE_DATABASE_MISSION_V01.md`（v0.7）、`docs/real_machine_db/INDEX.md`、`LATEST_HANDOFF.md`、直前レコード `2013-09-02_pachislot-chameleon.md` を再読してから継続。
- INDEXは旧集約状態（19件表記）のため、README規定どおり **LATEST_HANDOFF + 実レコード** を正として扱う。
- 開始時正本は recordCount **762** / chronologicalFrontier **2013-09-02** / 09-02群OPEN。
- handoff先頭の未処理候補 **パチスロ笑ゥせぇるすまん2（三洋）** は同名レコード不在を確認後、763件目として新規登録。
- 09-02同日群をK-Navi/当時業界記事/機種DBで再監査。既登録4機+今回機以外に具体日付きの未登録パチスロを追加確認できず、**2013-09-02群をCLOSED** とする。
- `CR Gレーサー` 等、同日導入のパチンコ機は対象外のまま維持。

## 今回追加 — パチスロ笑ゥせぇるすまん2

### identity / 性能コア

- manufacturer: **三洋物産 / SANYO**。
- releaseDate: **2013-09-02**。パチビーが導入日を明記。当時グリーンべるとは **2013-09-01納品開始予定** と報道し、時系列上整合。
- generation/system: **5号機 / ART / 擬似ボーナス / ゲーム数上乗せ+セットストック**。
- 機械割: **97.73 / 98.51 / 100.33 / 103.27 / 106.96 / 112.18%**。
- ART初当たり: **1/325.6 / 316.4 / 300.4 / 279.1 / 243.5 / 198.7**。
- ドーンボーナス: **全設定1/21845.33**。
- 1000円ベース: **約34.3～34.4G**。
- ART「フクゾーラッシュ」: **1セット40G+α / 純増約2.3枚/G**。
- 擬似BIG: **ベルナビ20回**。赤7揃いでART突入確定。
- 最大規定ゲーム数天井: **1500GでART突入**。
- パチマガスロマガ系インデックスの「1000Gハマリ以上に特典あり」は存在を保存したが、具体恩恵本文を今回回収できなかったため推定していない。
- recordStatus: **COMPLETE_CORE_WITH_RESET_BEHAVIOR_RESEARCHED_PARTIAL**。

### resetBehavior v0.7

- パチマガスロマガ系の本機インデックスに **「朝イチ・設定変更」専用項目が存在**することは確認。
- ただしアクセス可能な現存本文/検索キャッシュから、その具体契約を回収できなかった。
- settingChangeBehavior: **UNVERIFIED_AFTER_RESEARCH**。
- carryOverBehavior: **UNVERIFIED_AFTER_RESEARCH**。
- powerCycleBehavior: **UNVERIFIED_AFTER_RESEARCH**。
- gameCounterReset: 設定変更/据え置き/電源OFF→ONの各ケースとも **UNVERIFIED_AFTER_RESEARCH**。
- ceilingAfterReset: 通常最大 **1500G**。設定変更専用短縮天井は **NONE_CONFIRMED_AFTER_RESEARCH**。
- modeAfterReset / stateAfterReset: **UNVERIFIED_AFTER_RESEARCH**。
- advantageousSectionReset: **NOT_APPLICABLE_5TH_GEN**。
- resetBenefits / resetPenalties: 数値付き専用恩恵・不利要素は **NONE_CONFIRMED_AFTER_RESEARCH**。
- resetDetection: ガックン、初期出目、液晶、ランプ等の本機固有判別情報は **UNVERIFIED_AFTER_RESEARCH**。
- publicMorningNumbers: **UNVERIFIED_AFTER_RESEARCH / NONE_CONFIRMED_AFTER_RESEARCH**。
- 初代「パチスロ笑ゥせぇるすまん」の設定変更時モード振り分け（通常A/B/天国、天国5%）は検索で強く出るが、**2011年初代の別機種資料**なので本機2へ混入させていない。
- 同様に「3」「絶笑」「4」のリセット/有利区間仕様も別機種として除外。

## 境界監査 / 2013-09-02同日群

### 登録済み

1. **パチスロ PROJECT ARMS**（ニューギン）
2. **回胴黙示録カイジ3**（ロデオ / 製造元銀座）
3. **パチスロ RAVE エンドレスラッシュ**（藤商事）
4. **パチスロ カメレオン**（タイヨーエレック）
5. **パチスロ笑ゥせぇるすまん2**（三洋物産） — 今回追加

### 除外

- **CR Gレーサー（ニューギン）** — パチンコ機。
- 同日のパチンコ新台は本DBのパチスロ本線へ入れない。

- **2013-09-02群: CLOSED**。

## 遡及resetBehavior QA 進捗

- QAカーソルは `2007-01_karate-baka-ichidai.md` の次の実ファイル順を維持。
- `2007-01_karate-baka-ichidai.md` 自体は既にresetBehavior v0.7収集済みのため重複更新しない。
- 今回は本線763件目と09-02群クローズを優先し、QAカーソルは前進させていない。
- 既存 `COMPLETE_CORE` / `PARTIAL` 等の性能側完了判定は変更していない。

## 次回再開地点

1. **recordCount 763 / chronologicalFrontier 2013-09-02 / 09-02群CLOSED** から開始。
2. **2013-09-03～2013-09-16境界**を、導入日・納品日・検定日の混同を避けてメーカー横断/当時導入一覧で最終監査する。
3. 境界に具体日付き未登録5号機がなければ、次の確認済み候補 **2013-09-17「パチスロ ボンバーパワフルII」（SANKYO）** を重複確認 → 性能コア + resetBehavior v0.7収集 → 764件目候補として処理。
4. ボンバーパワフルIIはK-Navi/パチビーで **2013-09-17導入**、SANKYO公式博物館で **2013.09** を確認済み。次回は同日群全体の漏れ監査も行う。
5. 遡及QAは `2007-01_karate-baka-ichidai.md` 直後の実ファイル順から、最初のresetBehavior欠損機を確定して補完。

## 主要出典 — 取得日 2026-09-06

### パチスロ笑ゥせぇるすまん2

- SANYO公式: `https://www.sanyobussan.co.jp/products/slot_warausalesman2/sp/about.html` — 公式製品同定。
- グリーンべると: `https://web-greenbelt.jp/00001016/` — 2013-09-01納品開始予定、ART40G+α、純増約2.3枚/G、上乗せ特化ゾーン。
- パチビー: `https://www.pachibee.jp/movies/index/9730` — 2013-09-02導入、三洋物産、5号機ART、約2.3枚/G。
- パチマガスロマガ系性能表: `https://cs62.cs-plaza.com/g/pachi/pla/s_conq/sanyo_slot/19/h-1.php` — ART初当たり/PAYOUT/ドーンボーナス。
- パチマガスロマガ系小役: `https://cs62.cs-plaza.com/g/pachi/pla/s_conq/sanyo_slot/19/c.php` — 1000円約34.3～34.4G。
- パチマガスロマガ系ART: `https://cs62.cs-plaza.com/g/pachi/pla/s_conq/sanyo_slot/19/l.php` — 最大天井1500G、ART40G+α・約2.3枚/G。
- パチマガスロマガ系インデックス: `https://cs62.cs-plaza.com/g/pachi/pla/s_conq/sanyo_slot/19/sanyo_slot_19.php` — 「天井・ヤメ時」「朝イチ・設定変更」等の項目存在を確認。本文未回収項目は推定していない。
- P-WORLD: `https://www.p-world.co.jp/machine/database/7131` — 5号機ART、40G+α・約2.3枚/G、擬似BIGベルナビ20回等を照合。

### 次候補 — ボンバーパワフルII

- K-Navi: `https://p-kn.com/slot/1911/` — ホール導入開始2013-09-17。
- SANKYOオンライン博物館: `https://www.sankyo-fever.jp/collection/546/` — 導入年月2013.09、型式ボンバーパワフルIIＺ、公式スペック。
- パチビー: `https://www.pachibee.jp/movies/index/9832` — 導入日2013-09-17、5号機ART、約2.4枚/G。

## commits

- 763rd record add: `d913d6a7a1edd05a9c6ae3cb27d5ced0fa47399a` (`db: add Pachislot Warau Salesman 2 with resetBehavior v0.7`)
- handoff update: current run (`db: close 2013-09-02 relay group after Warau Salesman 2`)
