# 実機DB 最新リレー引継ぎ

更新日: 2026-09-03

## 現在地点

- recordCount: **468**
- latestMachineAdded: **続・お見事！サブちゃん**（オリンピア / 2010-03-23）
- latestRecord: `docs/real_machine_db/machines/2010-03-23_zoku-omigoto-sabuchan.md`
- chronologicalFrontier: **2010-03-23**
- frontierLatestMachine: **続・お見事！サブちゃん**（オリンピア / 2010-03-23）
- schema: **resetBehavior v0.7**
- status: **READY_TO_CONTINUE**

## 今回の継続確認

- 最新mainの `README.md`、正本ミッション `docs/CHAPPY5_REAL_MACHINE_DATABASE_MISSION_V01.md` v0.7、`INDEX.md`、`LATEST_HANDOFF.md`、直近レコードを再取得。
- `INDEX.md` は旧地点（19件）のため、README規定どおりLATEST_HANDOFF＋main実レコード＋直近コミットを進捗正本として使用。
- 開始時正本は recordCount **467** / chronologicalFrontier **2010-03-23** / latestMachineAdded「ノーマルだよ！サブちゃん」。
- 最新コミット列で467追加・handoff更新がmain先頭であることを確認してから調査を開始。
- LATEST_HANDOFF指定の未処理最優先候補「続・お見事！サブちゃん」を468件目として追加。
- 兄弟機「ノーマルだよ！サブちゃん」は467件目で登録済み。「デジスロA」はベルコ公式2010年4月登場のため03-23群から除外済み。

## 468 — 続・お見事！サブちゃん 要約

- メーカー: **オリンピア**
- 型式: **お見事！サブちゃん2A**
- 検定番号: **9S1123**
- 導入: **2010-03-23**（K-Navi / パチビー）
- 世代/タイプ: **5号機 / A+ART / 押し順ART / 天井無限ART**
- ボーナス合算: **1/281.27 → 1/249.19**
- BIG合算: **1/468.11 → 1/455.11**
- REG: **1/704.69 → 1/550.72**
- 50枚ベース: **36.1G / 1000円（全設定共通）**
- ART「サブロウチャンス」: **30G/セット・約+1.3枚/G**
- 真サブロウチャンス: **次回ボーナスまで継続**
- BIG: **301枚** / REG: **56枚**
- 天井: **ボーナス間1476Gで真サブロウチャンス**
- 通常時はART突入率の異なる複数内部モードを持つ。

## 機械割CONFLICT

- パチマガスロマガ / K-Navi / パチンコビスタ: **96.1 / 98.0 / 100.1 / 104.1 / 108.2 / 111.1%**
- P-WORLD / パチビー: **97.31 / 99.19 / 101.34 / 104.15 / 108.23 / 111.07%**
- 特に設定1〜3は丸め差を超えるため平均せず `CONFLICT_PAYOUT_DEFINITION_OR_METHOD` として双方をレコードへ保存。

## resetBehavior v0.7 — 続・お見事！サブちゃん

- **設定変更**: K-Naviと旧パチマガスロマガに設定変更専用項目の存在までは確認したが、取得可能本文から直接処理を確定できず `UNVERIFIED_AFTER_RESEARCH`。
- **据え置き**: 1476G天井・ART非当選で進む内部モードとも据え置き時の引継ぎを高信頼本文で確定できず `UNVERIFIED_AFTER_RESEARCH`。
- **電源OFF→ON**: 天井ゲーム数、内部モード、ARTストック/状態、表示・リール挙動を直接確定できず `UNVERIFIED_AFTER_RESEARCH`。
- **ゲーム数/天井**: 通常天井はボーナス間1476Gで確定。設定変更時リセット/引継ぎと短縮天井は `UNVERIFIED_AFTER_RESEARCH`。
- **モード/状態**: 複数内部モードと高確状態は存在するが、設定変更時再抽選/引継ぎは `UNVERIFIED_AFTER_RESEARCH`。
- **有利区間**: `NOT_APPLICABLE`（5号機・制度前）。
- **朝一恩恵/不利**: 設定変更時のみの公開朝一数値・短縮天井・専用当選率は `NONE_CONFIRMED_AFTER_RESEARCH`。
- **変更判別**: ガックン、初期出目、表示/ランプ等の本機固有高信頼資料を確定できず `UNVERIFIED_AFTER_RESEARCH`。

## 主要出典（取得日 2026-09-03）

- K-Navi: `https://p-kn.com/slot/1158/`
- パチマガスロマガ ボーナス/PAYOUT: `https://cs62.cs-plaza.com/g/pachi/pla/s_conq/olympia_slot/89/h.php`
- パチマガスロマガ 小役/1000円あたり: `https://cs62.cs-plaza.com/g/pachi/pla/s_conq/olympia_slot/89/c.php`
- P-WORLD: `https://www.p-world.co.jp/machine/database/5858`
- パチビー: `https://www.pachibee.jp/machines/index/210020007`
- グリーンべると: `https://news.p-world.co.jp/articles/3810/greenbelt`
- パチンコビスタ: `https://www.pachinkovista.com/pfactory/model.php?dsp=0&nid=17989`

## resetBehavior 遡及QA進捗

- 既存遡及補完は **スロ原人（`docs/real_machine_db/machines/2006-10_surogenjin.md`）まで補完済み**という正本進捗を維持。
- 新規前線収集を止めず、後続QAでスロ原人直後の最初の `resetBehavior` 欠損実ファイルをmachine tree/履歴から一意特定して再開する。

## 次回再開地点

1. **recordCount 468 / chronologicalFrontier 2010-03-23**。
2. **03-23同日群の最終監査**を行い、新鬼武者・続/ノーマルのサブちゃん以外の未登録5号機が残っていないか当時導入一覧・メーカー別一覧で確認する。
3. 03-23群を閉じたら **2010-03-24〜2010-04-04境界監査**へ進む。今回確認した当時スケジュールでは3/29導入欄はパチンコのみで、次の明確なパチスロ導入群は **2010-04-05**（宇宙戦艦ヤマト / ハッピージャグラーV / スーパーマジカルセブン / 鮪伝説）として掲載されている。別系統資料で漏れを再監査してから4/5群へ進む。
4. **スパイガール日付CONFLICT監査を保持**: K-Navi `2010-02-22` vs パチビー/当時スケジュール `2010-04-19` / 複数DB `2010-04`。4月境界で再確認。
5. 次回追加前も必ず最新mainのREADME / mission / INDEX / LATEST_HANDOFF / 前線実レコード / 直近main状態を再取得し、他リレー競合・重複を防ぐ。
