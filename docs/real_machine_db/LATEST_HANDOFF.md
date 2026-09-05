# 実機DB 最新リレー引継ぎ

更新日: 2026-09-05

## 現在地点

- recordCount: **696**
- latestMachineAdded: **パチスロ 一騎当千XX**（バルテック）
- latestRecord: `docs/real_machine_db/machines/2012-10-22_ikkitousen-xx.md`
- chronologicalFrontier: **2012-10-22**
- frontierLatestExactDateMachine: **パチスロ 一騎当千XX**
- schema: **resetBehavior v0.7**
- status: **CLOSED_2012-10-22_GROUP__NEXT_BOUNDARY_AUDIT_2012-10-23_TO_2012-11-04**

## 今回の同期

- 最新mainの `README.md`、`docs/CHAPPY5_REAL_MACHINE_DATABASE_MISSION_V01.md`（v0.7）、`docs/real_machine_db/INDEX.md`、`LATEST_HANDOFF.md`、直前最新レコード `2012-10-22_dokaben.md` を確認。
- `INDEX.md` は19件地点の古い集約状態。README規定どおり、より新しい `LATEST_HANDOFF.md` を直近進捗の正本として優先。
- 開始時main正本は recordCount **695** / chronologicalFrontier **2012-10-22** / 10-22群OPEN / 次機種「パチスロ一騎当千XX」。
- repoを `一騎当千XX` で検索し既存レコードなしを確認後、696件目として追加。

## 今回追加 — パチスロ 一騎当千XX

### 識別

- manufacturer: **バルテック**
- releaseDate: **2012-10-22**（K-Navi / 当時解析Wiki）。後年資料に2012-09リリース表記があるため製品リリース月との定義差として保持。
- generation: **5号機**
- systemType: **A+ART / CZ / 天井あり / ゲーム数上乗せART**
- modelName: **一騎当千XX 3**
- approvalNumber: **UNVERIFIED_AFTER_RESEARCH**

### 性能コア

- 機械割: **96.4 / 98.7 / 99.4 / 104.4 / 108.8 / 113.3%**
- ART初当り: **1/415.7 / 347.0 / 432.7 / 327.4 / 369.0 / 269.1**
- BIG: **1/458.2 / 445.8 / 434.0 / 422.8 / 414.8 / 402.1**
- REG: **1/655.3 / 630.0 / 606.8 / 585.1 / 564.9 / 546.1**
- ボーナス合算: **1/269.7 / 261.1 / 253.0 / 245.4 / 239.2 / 231.6**
- 50枚ベース: **UNVERIFIED_AFTER_RESEARCH**
- ART純増: **約+1.5枚/G**
- BIG: **約207枚**
- REG: **約54枚**
- ART「一騎当千」: **1セット40G+α**
- 通常天井: **ボーナス間1500G+α**

### resetBehavior v0.7

- `settingChangeBehavior`: **設定変更で1500G天井までの消化GをCLEAR、内部モード移行抽選、液晶左上の勾玉を白から開始**。
- `gameCounterReset`: **CONFIRMED_CLEAR_ON_SETTING_CHANGE**。当時天井狙い資料でも「宵越し×」。
- `ceilingAfterReset`: 通常1500G+α天井を再スタート。設定変更専用短縮天井は **UNVERIFIED_AFTER_RESEARCH**。
- `modeAfterReset`: **内部モード再抽選を確認**。高確スタートの可能性は当時記述あり。ただし振り分け数値は未確認。
- `stateAfterReset`: 低確/高確の存在と再抽選概念は確認、具体振り分けは未確認。
- `carryOverBehavior`: 純据え置きの天井進捗/内部状態/CZ失敗回数の完全契約は **UNVERIFIED_AFTER_RESEARCH**。
- `powerCycleBehavior`: **単純電源OFF→ONでは勾玉表示を引き継ぐ**。その他の天井カウンタ/内部モード/CZ失敗回数の完全契約は未確認。
- `resetBenefits`: 高確スタートの可能性はあるが公開率なし。朝一短縮天井/確定CZ等は確認できず。
- `resetPenalties`: **前日の1500G天井進捗消失**。
- `resetDetection`: **設定変更時は勾玉白、電断のみなら勾玉引継ぎ**のため前日状態既知なら変更推測材料。液晶ステージは設定変更時も電源ON/OFF時も成都学園or馬超ステージから選択されるため単独判別には使いにくい。ガックンは未確認。
- `advantageousSectionReset`: **NOT_APPLICABLE_5TH_GEN**。
- `publicMorningNumbers`: **NONE_CONFIRMED_AFTER_RESEARCH**。

## 2012-10-22同日群監査

2012-10-04公開の当時導入予定一覧に、10月22日のパチスロとして以下4機種が列挙されていることを再確認。

1. **2027 Revise（スター）** — 登録済み
2. **パチスロ 一騎当千XX（バルテック）** — 今回登録
3. **KOF3（SNKプレイモア）** — 登録済み
4. **ドカベン（タイヨーエレック）** — 登録済み

- 同資料上では10/22パチスロ群は上記4機種で完結。
- K-Navi等でも一騎当千XXの10/22導入を照合。
- **2012-10-22群はCLOSED** とする。
- キュインぱちすろ南国育ち 1st vacation はHAZUSEに10/22表記があるが、K-Navi/当時導入予定一覧で10/15具体日を確認済み・repo登録済み。重複追加しない。

## 次の境界

- 2012-10-23〜10-31について「2012年10月29日 パチスロ」等で再監査したが、今回の検索では新規具体導入機種を確定できず。
- 当時導入予定一覧は10/22の次に11/4（パチンコのみ）、11/5群を掲載。
- 次の既知パチスロ候補は **2012-11-05「ランブルローズ3D」**、**「バスタード -暗黒の破壊神-」（DAXEL）**。
- 次回は漏れ防止のため **10/23〜11/04境界をK-Navi / HAZUSE / パチビー / ALL7 / メーカー・業界記事で最終監査**してから11/05群へ入る。

## 遡及resetBehavior QA 進捗

- 本線と別の遡及QA再開地点は維持: `docs/real_machine_db/machines/2007-01_karate-baka-ichidai.md`
- 本線時系列収集を止めず、QAは別リレーで進める。

## 次回再開地点

1. **recordCount 696 / chronologicalFrontier 2012-10-22 / 10-22群CLOSED** から開始。
2. **2012-10-23〜2012-11-04境界最終監査**。具体日付き未登録パチスロがあれば時系列順に先に処理。
3. 境界に漏れがなければ **2012-11-05群**へ進み、最優先候補をrepo重複確認して処理。既知候補: `ランブルローズ3D`、`バスタード -暗黒の破壊神-`。
4. 欠損は表記揺れ・型式名・メーカー・シリーズ名と「設定変更/リセット/朝一/据え置き/電源OFF ON/天井短縮/モード/状態/ガックン/有利区間」を組み替え、公式・業界・当時解析・古いDB・アーカイブ・回顧資料を横断後のみUNVERIFIED。競合は平均せずCONFLICT。

## 主要出典 — 取得日 2026-09-05

### パチスロ 一騎当千XX
- K-Navi: `https://p-kn.com/slot/1714/`
- P-WORLD: `https://www.p-world.co.jp/machine/database/6846`
- パチマガスロマガ スペック: `https://cs62.cs-plaza.com/g/pachi/pla/s_conq/baltech_slot/56/a.php`
- パチマガスロマガ ART突入フロー: `https://cs62.cs-plaza.com/g/pachi/pla/s_conq/baltech_slot/56/l.php`
- パチンコ・パチスロ.com解析情報@: `https://w.atwiki.jp/pachikaisekidata/pages/387.html`
- 天井ハイエナ生活 2012年当時更新: `https://macerate.seesaa.net/article/305411305.html`
- 天井ハイエナ生活 一騎当千XX: `https://macerate.seesaa.net/article/298605689.html`
- pachinko’s blog: `https://pachinko.hatenablog.jp/entry/2012/09/ikki-tousen-XX`

### 2012-10-22境界
- 2012-10-04当時導入予定一覧: `https://ameblo.jp/silver1x/`
