# 実機DB 最新リレー引継ぎ

更新日: 2026-09-06

## 現在地点

- recordCount: **762**
- latestMachineAddedByChronology: **パチスロ カメレオン**（タイヨーエレック）
- latestRecord: `docs/real_machine_db/machines/2013-09-02_pachislot-chameleon.md`
- chronologicalFrontier: **2013-09-02**
- frontierLatestExactDateMachine: **パチスロ カメレオン**
- schema: **resetBehavior v0.7**
- status: **OPEN_2013-09-02_GROUP__ONE_CONFIRMED_OMISSION_REMAINS**

## 今回の同期 / 重要事項

- 最新mainの `README.md`、`docs/CHAPPY5_REAL_MACHINE_DATABASE_MISSION_V01.md`（v0.7）、`docs/real_machine_db/INDEX.md`、`LATEST_HANDOFF.md`、直前レコード `2013-09-02_pachislot-rave-endless-rush.md` を再読してから継続。
- INDEXは旧集約状態のため、README規定どおり **LATEST_HANDOFF + 実レコード** を正として扱う。
- 開始時正本は recordCount **761** / chronologicalFrontier **2013-09-02** / 09-02群OPEN。
- handoff先頭の未処理候補 **パチスロ カメレオン（タイヨーエレック）** は同名候補ファイル不在を確認後、762件目として新規登録。
- 2013-09-02同日群はまだ閉じない。**パチスロ笑ゥせぇるすまん2（三洋）** が未処理候補として残る。
- 旧handoffで除外済みの **Gレーサー（ニューギン）** はCRパチンコ機なので本線へ戻さない。

## 今回追加 — パチスロ カメレオン

### identity / 性能コア

- manufacturer: **タイヨーエレック**。
- releaseDate本線: **2013-09-02**。当時グリーンべるとは **2013-09-01納品開始予定**、後年の5号機クロニクルは **2013/8** と整理しており、期間差は `CONFLICT_RELEASE_PERIOD_2013_08_VS_2013_09_02_CHRONOLOGY` として保持。
- generation/system: **5号機 / A+ART / ゲーム数上乗せ**。
- 機械割: **96.2 / 99.5 / 101.4 / 104.0 / 107.9 / 111.5%**。
- ボーナス合算: **1/244.5 / 240.9 / 230.8 / 227.6 / 212.8 / 210.1**。
- BIG: **1/399.6 / 399.6 / 381.1 / 381.1 / 348.6 / 348.6**。
- REG: **1/630.2 / 606.8 / 585.2 / 565.0 / 546.2 / 528.5**。
- ART初当たり: **1/495.7 / 423.2 / 437.7 / 377.5 / 380.1 / 331.0**。
- ART「爆走YAZAWA猛怒」: **1セット50G+α / 純増約1.6枚/G**。
- BIG: **約200枚** / REG: **約42枚**。
- 天井: **ボーナス間1200GでART確定**。
- baseGamesPer50: 機種名・メーカー名と50枚/1000円/1K/コイン持ち/ベース等を組み替え、当時解析・機種DB・後年資料を横断後も直接値を固定できず **UNVERIFIED_AFTER_RESEARCH**。
- coreStatus相当: **PARTIAL_CORE_AFTER_RESEARCH_WITH_RESET_BEHAVIOR_RESEARCHED_PARTIAL**。

### resetBehavior v0.7

- パチマガスロマガ系の本機インデックスに **「朝イチ・設定変更」専用項目が存在したこと**までは確認。
- ただし現存ページ/検索キャッシュから具体本文を回収できず、設定変更時の天井G・モード・内部状態を推定で埋めていない。
- settingChangeBehavior: **UNVERIFIED_AFTER_RESEARCH**。
- carryOverBehavior: 純据え置き時の天井進捗/モード/状態は **UNVERIFIED_AFTER_RESEARCH**。
- powerCycleBehavior: 設定変更なしの電源OFF→ON時の天井進捗/モード/状態/液晶は **UNVERIFIED_AFTER_RESEARCH**。
- gameCounterReset: 設定変更/据え置き/電断のいずれも本機固有の直接契約を固定できず **UNVERIFIED_AFTER_RESEARCH**。
- ceilingAfterReset: 通常天井 **ボーナス間1200G**。設定変更専用短縮天井は **NONE_CONFIRMED_AFTER_RESEARCH**。
- modeAfterReset / stateAfterReset: **UNVERIFIED_AFTER_RESEARCH**。
- advantageousSectionReset: **NOT_APPLICABLE_5TH_GEN**。
- resetBenefits / resetPenalties: 設定変更専用の数値付き恩恵・不利要素は **NONE_CONFIRMED_AFTER_RESEARCH**。
- resetDetection: ガックン、初期出目、液晶、ランプ等の本機固有判別情報は **UNVERIFIED_AFTER_RESEARCH**。
- publicMorningNumbers: **UNVERIFIED_AFTER_RESEARCH / NONE_CONFIRMED_AFTER_RESEARCH**。
- 重要: 設定変更時の天井進捗CLEARを直接確認できていないため、一般的な5号機挙動から宵越し可否を逆算しない。

## 境界監査 / 2013-09-02同日群

### 登録済み

1. **パチスロ PROJECT ARMS**（ニューギン）
2. **回胴黙示録カイジ3**（ロデオ / 製造元銀座）
3. **パチスロ RAVE エンドレスラッシュ**（藤商事）
4. **パチスロ カメレオン**（タイヨーエレック） — 今回追加

### 未処理候補

1. **パチスロ笑ゥせぇるすまん2**（三洋） — 2013-09-02候補を前回監査で当時業界/機種DBから確認済み。次回先頭。

### 除外

- **Gレーサー（ニューギン）** — `CR Gレーサー` のパチンコ機。対象外。

- **2013-09-02群: OPEN**。

## 遡及resetBehavior QA 進捗

- QAカーソルは `2007-01_karate-baka-ichidai.md` の次の実ファイル順を維持。
- `2007-01_karate-baka-ichidai.md` 自体は既にresetBehavior v0.7収集済みのため重複更新しない。
- 今回は本線762件目を優先し、QAカーソルは前進させていない。
- 既存 `COMPLETE_CORE` / `PARTIAL` 等の性能側完了判定は変更していない。

## 次回再開地点

1. **recordCount 762 / chronologicalFrontier 2013-09-02 / 09-02群OPEN** から開始。
2. 最優先: **パチスロ笑ゥせぇるすまん2（三洋）** を重複確認 → 性能コア + resetBehavior v0.7収集 → 763件目候補。
3. その後、09-02同日群をメーカー横断・当時導入一覧で再監査し、漏れがなければCLOSEDへ戻す。
4. 09-02群CLOSED後、**2013-09-03〜09-16境界監査 → 2013-09-17「パチスロ ボンバーパワフルII」**へ進む。
5. 遡及QAは `2007-01_karate-baka-ichidai.md` 直後の実ファイル順から、最初のresetBehavior欠損機を確定して補完。

## 主要出典 — 取得日 2026-09-06

### パチスロ カメレオン

- グリーンべると: `https://web-greenbelt.jp/00000997/` — ボーナス+ART、ART50G+α・約1.6枚/G、BIG約200枚、REG42枚、2013-09-01納品開始予定。
- パチマガスロマガ系性能表: `https://cs62.cs-plaza.com/g/pachi/pla/s_conq/taiyoelec_slot/15/h-1.php` — 設定別BIG/REG/ボーナス合算/ART初当たり/PAYOUT。
- パチマガスロマガ系ART: `https://cs62.cs-plaza.com/g/pachi/pla/s_conq/taiyoelec_slot/15/l.php` — ART基本性能。
- パチマガスロマガ系インデックス: `https://cs62.cs-plaza.com/g/pachi/pla/s_conq/taiyoelec_slot/15/taiyoelec_slot_15.php` — 「モード移行率」「天井・ヤメ時」「朝イチ・設定変更」の項目存在確認。朝一本文の具体値は今回取得不能。
- P-WORLD: `https://www.p-world.co.jp/machine/database/7155` — 5号機ART、基本獲得性能、ART、ボーナス間1200G天井。
- 5号機クロニクル: `https://5goki.com/yaiyoelec` — 機械割照合、2013/8月表記差。
- K-Navi: `https://p-kn.com/slot/1906/direct/` — 当時運用痕跡/補助情報。

## commits

- 762nd record add: `06e4b32b9e547524e19528c3abb553a22ed98c36` (`db: add Pachislot Chameleon with resetBehavior v0.7`)
- handoff update: current run (`db: advance relay handoff after Pachislot Chameleon`)
