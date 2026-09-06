# 実機DB 最新リレー引継ぎ

更新日: 2026-09-06

## 現在地点

- recordCount: **767**
- latestMachineAddedByChronology: **2027III**（スター）
- latestRecord: `docs/real_machine_db/machines/2013-09-17_2027-iii.md`
- chronologicalFrontier: **2013-09-17**
- frontierLatestExactDateMachine: **2027III**
- schema: **resetBehavior v0.7**
- status: **CLOSED_2013-09-17_GROUP__NEXT_2013-09-24_KING_OF_KEIBA**

## 今回の同期 / 重要事項

- 最新mainの `README.md`、`docs/CHAPPY5_REAL_MACHINE_DATABASE_MISSION_V01.md`（v0.7）、`docs/real_machine_db/INDEX.md`、`LATEST_HANDOFF.md`、直前レコードを再読してから継続。
- INDEXは旧集約状態（19件表記）のため、README規定どおり **LATEST_HANDOFF + 実レコード** を正として扱う。
- 作業開始時の正本は **recordCount 766 / chronologicalFrontier 2013-09-17 / 09-17群OPEN**。古い会話地点へ戻らず最新handoffを優先。
- handoff指定の未処理候補 **2027 3（スター）** は同名/正規表記 `2027III` の既存レコード不在を確認し、767件目として新規登録。
- 表記はALL7/天井DBで `2027 3` / `2027 3 Evolve`、K-Navi/P-WORLD/当時業界記事で `2027III` / `2027Ⅲ` / `ニーマルニーナナサード`。正規レコード名は当時資料優先で `2027III` とした。
- ALL7の2013年9月導入一覧を再監査すると、2013-09-17のパチスロは `2027 3 / デビル メイ クライ4 / ボンバーパワフル2 / リバティベル5` の4機。すべて登録済みとなったため **2013-09-17群をCLOSED**。
- 同一覧では次のパチスロ具体導入予定日は **2013-09-24「KING of KEIBA」（藤商事）**。2013-09-18～09-23に追加候補は当該月一覧では確認できず、次回は境界を別系統でも監査してから09-24群へ進む。

## 今回追加 — 2027III

### identity / 性能コア

- manufacturer: **スター**。
- releaseDate: **2013-09-17**。ALL7の月間導入一覧と当時試打回顧で一致し、K-Naviは9月中旬導入予定として報道。
- generation/system: **5号機 / ART / CZ / ゲーム数上乗せ + 継続率管理**。
- 機械割: **97.5 / 98.6 / 99.7 / 102.5 / 107.0 / 112.2%**。2-9伝説と5号機クロニクルで一致。
- BATTLE MODE初当たり: **1/259.4 / 235.7 / 246.4 / 215.5 / 224.8 / 188.2**。後年単一整理値なので `ANALYSIS_SINGLE_RETROSPECTIVE`。
- baseGamesPer50: **UNVERIFIED_AFTER_RESEARCH**。50枚/1000円/ベース/コイン持ち等と表記揺れを組み替えたが比較可能値を固定できず。
- ART純増: **約2.3枚/G**。P-WORLD・K-Navi等で一致。
- BATTLE MODE: **40G+α / 最大80%継続**。
- STORY MODE: **20G+α / 75～95%継続**。
- 天井: **ART間600 / 900 / 1200Gのいずれか**。1200G選択時は**80%継続BATTLE MODE**。
- recordStatus: **COMPLETE_CORE_WITH_RESET_BEHAVIOR_RESEARCHED_PARTIAL**。

### resetBehavior v0.7

- 設定変更時: **ART間天井G数リセット**を本機専用天井整理で直接確認。
- 設定変更時の600/900/1200G選択率、スパイラルZERO規定回数、CZ間カウンタの具体的再抽選契約: **UNVERIFIED_AFTER_RESEARCH**。
- 純据え置き時のART間G/周期/CZ間G/内部状態: **UNVERIFIED_AFTER_RESEARCH**。
- 設定変更なしの電源OFF→ON時のART間G/周期/CZ間G/内部状態/表示: **UNVERIFIED_AFTER_RESEARCH**。
- 設定変更専用短縮天井: **NONE_CONFIRMED_AFTER_RESEARCH**。
- 設定変更後専用モード・朝一優遇率: **UNVERIFIED_AFTER_RESEARCH**。
- 有利区間: **NOT_APPLICABLE_5TH_GEN**。
- resetPenalty: 設定変更で前日ART間ハマリの天井進捗が消えるため、宵越し天井狙いには不利。
- 本機固有ガックン/初期出目/液晶周期表示等による変更判別: **UNVERIFIED_AFTER_RESEARCH**。
- publicMorningNumbers: 通常天井候補600/900/1200Gと1200G時80%BM、設定変更で天井Gリセットまで固定。リセット専用振り分け率は未確認。

### conflicts / safeguards

- `2027 3 Evolve` の「Evolve」は天井一覧上の名称として保持するが、当時一次寄り資料で正式型式名を固定できないため modelName へは転記しない。
- 旧作 `2027 Revise / 2027II / 2027IINEO` の設定変更・天井仕様を混入させない。
- BM初当たりは単一後年整理値なので複数一致確認前に信頼度を上げない。

## 境界監査

### 2013-09-17同日群 — CLOSED

登録済み:
- **パチスロ ボンバーパワフルII（SANKYO）** — #764。
- **デビル メイ クライ 4（エンターライズ）** — #765。
- **リバティベルV（アクロス）** — #766。
- **2027III（スター）** — #767、今回追加。

- ALL7の2013年9月一覧では09-17のパチスロ候補は上記4機。パチンコ同日候補は本DBの本線対象外。
- **2013-09-17群: CLOSED**。

### 次の境界

- 2013-09-18～09-23: ALL7月間一覧ではパチスロ具体導入候補なし。次回、別系統の当時導入カレンダー/メーカー資料でも最終監査する。
- 次の具体日候補: **2013-09-24「KING of KEIBA」（藤商事）**。
- その次: **2013-09-30「Persona4 The SLOT」（ニューギン）** がALL7月間一覧に掲載。

## 遡及resetBehavior QA 進捗

- QAカーソルは `2007-01_karate-baka-ichidai.md` の次の実ファイル順を維持。
- 今回は本線767件目を優先し、QAカーソルは前進させていない。
- 既存性能コアを無駄に再調査していない。

## 次回再開地点

1. **recordCount 767 / chronologicalFrontier 2013-09-17 / 09-17群CLOSED** から開始。
2. **2013-09-18～09-23境界**を別系統の当時導入カレンダー・メーカー横断資料で最終監査。
3. 漏れがなければ **2013-09-24「KING of KEIBA」（藤商事）** の重複確認 → 性能コア + resetBehavior v0.7を768件目候補として処理。
4. 09-24同日群をメーカー横断で監査し、未登録がなければCLOSED判定。
5. 次日群へ進む前に導入日・納品日・検定日・記事公開日を分離して保持。
6. 遡及QAは `2007-01_karate-baka-ichidai.md` 直後の実ファイル順から再開。

## 主要出典 — 取得日 2026-09-06

### 2027III

- ALL7 2013年9月一覧: `https://www.all7.jp/plans/index/2013/09` — 2027 3、スター、2013-09-17導入予定。
- K-Navi発表会: `https://p-kn.com/topics/exhibition/1114/` — シリーズ第6作、BM40G、SM20G、Wループ、9月中旬予定。
- グリーンべると: `https://web-greenbelt.jp/00001015/` — 2013-07-10、ART特化、スパイラルZERO、上乗せ。
- P-WORLD: `https://www.p-world.co.jp/machine/database/7144` — 5号機ART/CZ/天井、純増2.3枚/G、BM40G、SM20G、天井600/900/1200G、1200G時80%BM。
- K-Navi STORY MODE: `https://p-kn.com/slot/1897/45769/` — 20G+α、純増2.3枚/G、継続率75～95%。
- K-Navi スパイラルZERO: `https://p-kn.com/slot/1897/45758/` — 32G周期でレア役以上。
- K-Navi 急襲MODE: `https://p-kn.com/slot/1897/46375/` — 20G CZ、設定別トータル突入率。
- 2-9伝説: `https://29den.com/20273/` — 機械割、BM初当たり、ART間600/900/1200G、設定変更で天井Gリセット。
- 5号機クロニクル: `https://5goki.com/star` — 2013/9、設定別機械割。
- 天井一覧: `https://smaslo.man-soft.com/slot-tenzyou-itiran/` — 2027 3 Evolve、2013/09/17、ART後600/900/1200G。

### 09-17群 / 次候補

- ALL7 2013年9月一覧: `https://www.all7.jp/plans/index/2013/09` — 09-17のパチスロ4機を照合、次の掲載日は09-24 KING of KEIBA、09-30 Persona4 The SLOT。

## commits

- 767th record add: `4cbf423e14e0bb83bb408c155ee840cec90312eb` (`db: add 2027III with resetBehavior v0.7`)
- handoff update: current run (`db: advance relay through 2027III`)
