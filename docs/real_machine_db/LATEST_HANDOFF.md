# 実機DB 最新リレー引継ぎ

更新日: 2026-09-03

## 現在地点

- recordCount: **472**
- latestMachineAdded: **パチスロ「宇宙戦艦ヤマト」**（山佐 / 2010-04-05）
- latestRecord: `docs/real_machine_db/machines/2010-04-05_pachislot-space-battleship-yamato.md`
- chronologicalFrontier: **2010-04-05**
- frontierLatestMachine: **パチスロ「宇宙戦艦ヤマト」**（山佐 / 2010-04-05）
- schema: **resetBehavior v0.7**
- status: **READY_TO_CONTINUE**

## 今回の継続確認

- 最新mainの `README.md`、正本ミッション `docs/CHAPPY5_REAL_MACHINE_DATABASE_MISSION_V01.md` v0.7、`INDEX.md`、`LATEST_HANDOFF.md`、直近471「スーパーマジカルセブン」を再取得。
- `INDEX.md` は旧19件地点のため、README規定どおり `LATEST_HANDOFF.md`＋main実レコードを進捗正本として使用。
- 開始時正本は recordCount **471** / chronologicalFrontier **2010-04-05**。
- LATEST_HANDOFFで2010-04-05同日群の未処理確認済み候補だった **パチスロ「宇宙戦艦ヤマト」** を472件目として追加。
- 山佐公式、グリーンべると、P-WORLD、パチビー、旧パチマガスロマガ、pacnkを横断。性能コアに加え、設定変更時の周期/天井進捗リセットと客側変更推測条件まで回収。

## 472 — パチスロ「宇宙戦艦ヤマト」 要約

- メーカー: **山佐**
- 型式/検定番号: **UNVERIFIED_AFTER_RESEARCH**
- 導入: **2010-04-05**（山佐公式は2010年4月、業界発表は4/4納品予定）
- 世代/タイプ: **5号機 / A+ART / 150G周期CZ・ストックART・無限ART**
- BIG合成: **1/412.18 / 1/412.18 / 1/407.06 / 1/397.19 / 1/392.43 / 1/392.43**
- REG: **1/624.15 / 1/590.41 / 1/560.14 / 1/532.81 / 1/508.03 / 1/485.45**
- ボーナス合成: **1/248.24 → 1/217.01**
- 機械割: **CONFLICT**
  - パチマガスロマガ simulation: **96.64 / 98.88 / 100.97 / 104.51 / 109.12 / 115.82%**
  - pacnk: **97.07 / 99.21 / 100.93 / 104.54 / 108.06 / 114.70%**
- 50枚ベース: **30.56 / 30.58 / 30.60 / 30.62 / 30.64 / 30.66G**
- ART「ヤマトラッシュ」: **30G / 約+1.2枚/G**
- BIG: **約210枚 / 最大217枚**、REG: **約49枚 / 49枚固定**
- 通常天井: **ボーナス間1480G経過後の周期到達、最大1630Gで超ヤマトラッシュ**
- coreStatus: **COMPLETE_CORE_RESET_HIGH_VALUE_PAYOUT_CONFLICT_FORMAL_IDENTITY_PARTIAL**

## resetBehavior v0.7 — パチスロ「宇宙戦艦ヤマト」

- **設定変更**: P-WORLD本機ページで **150G周期ゲーム数と天井までのゲーム数がリセット** と直接確認。
- **据え置き**: 「1480G以内に天井ARTへ入れば据え置き濃厚」という公開判別ロジックから、少なくとも周期/天井進捗の前日引継ぎを確認。
- **電源OFF→ON**: 単純電源断のみの本機固有処理は高信頼資料で確定できず `UNVERIFIED_AFTER_RESEARCH`。
- **ゲーム数/天井**: 設定変更で周期・天井進捗RESET、据え置きでCARRYOVER。
- **リセット天井短縮**: 専用短縮値は `NONE_CONFIRMED_AFTER_RESEARCH`。通常天井を0から再スタート。
- **モード/状態**: 150G周期のリセットは確定。通常時2モードの変更時振り分け、高確/潜伏/ARTストック等の処理は `UNVERIFIED_AFTER_RESEARCH`。
- **有利区間**: `NOT_APPLICABLE`。
- **朝一恩恵/不利**: 特別な短縮恩恵は未確認。前日の周期/天井進捗消失は宵越し狙い上の明確な不利要素。
- **変更判別**: ①前日と周期Gがずれれば設定変更濃厚、②1480G以内の天井ARTなら据え置き濃厚。ガックン/初期出目/ランプは未確定。
- resetBehaviorQA: **HIGH_VALUE_CORE_RESET_CONFIRMED_POWER_CYCLE_AND_STATE_PARTIAL**

## 主要出典（取得日 2026-09-03）

- 山佐ネクスト公式: `https://yamasa-next.co.jp/model_ymt/`
- グリーンべると: `https://web-greenbelt.jp/00002555/`
- パチビー: `https://www.pachibee.jp/machines/about/210020014`
- P-WORLD: `https://www.p-world.co.jp/machine/database/5838`
- パチマガスロマガ 基本: `https://cs62.cs-plaza.com/g/pachi/pla/s_conq/yamasa_slot/171/a.php`
- パチマガスロマガ 確率/PAYOUT: `https://cs62.cs-plaza.com/g/pachi/pla/s_conq/yamasa_slot/171/h.php`
- パチマガスロマガ 小役/ベース: `https://cs62.cs-plaza.com/g/pachi/pla/s_conq/yamasa_slot/171/c.php`
- pacnk: `https://pacnk.com/slot/tools/sh_yamato.html`
- 5号機クロニクル山佐一覧: `https://5goki.com/yamasa`（導入月/ARTセットG数が主要資料と不整合のためCONFLICT監査用）

## resetBehavior 遡及QA進捗

- 既存遡及補完は **スロ原人（`docs/real_machine_db/machines/2006-10_surogenjin.md`）まで補完済み**という正本進捗を維持。
- 前線収集を優先し、推測で遡及QA済み範囲を進めない。
- 再開時はmachine tree/履歴から **スロ原人直後の最初の `resetBehavior` 欠損実ファイル**を一意特定して補完する。

## 次回再開地点

1. **recordCount 472 / chronologicalFrontier 2010-04-05**。
2. **2010-04-05同日群を継続**。未処理確認済みの **ハッピージャグラーV（北電子）** を最優先にrepo重複確認→性能コア＋resetBehavior v0.7調査→追加する。
3. 同日群を閉じる前にK-Navi導入カレンダー、メーカー別一覧、当時業界記事、旧解析DBを横断し、4/5の追加漏れを最終監査する。
4. **スパイガール日付CONFLICT監査を保持**: K-Navi `2010-02-22` vs パチビー/当時スケジュール `2010-04-19` / 複数DB `2010-04`。4月境界で既存登録有無とreleaseDate定義を再確認する。
5. 遡及QAは **スロ原人直後の最初のresetBehavior欠損実ファイル**を特定して再開。
6. 次回追加前も必ず最新mainのREADME / mission / INDEX / LATEST_HANDOFF / 前線実レコード / main状態を再取得し、他リレー競合・重複を防ぐ。
