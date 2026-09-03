# 実機DB 最新リレー引継ぎ

更新日: 2026-09-03

## 現在地点

- recordCount: **471**
- latestMachineAdded: **スーパーマジカルセブン**（トリビー / 2010-04-05）
- latestRecord: `docs/real_machine_db/machines/2010-04-05_super-magical-seven.md`
- chronologicalFrontier: **2010-04-05**
- frontierLatestMachine: **スーパーマジカルセブン**（トリビー / 2010-04-05）
- schema: **resetBehavior v0.7**
- status: **READY_TO_CONTINUE**

## 今回の継続確認

- 最新mainの `README.md`、正本ミッション `docs/CHAPPY5_REAL_MACHINE_DATABASE_MISSION_V01.md` v0.7、`INDEX.md`、`LATEST_HANDOFF.md`、直近470「鮪伝説」を再取得。
- `INDEX.md` は旧地点のため、README規定どおりLATEST_HANDOFF＋main実レコードを進捗正本として使用。
- 開始時正本は recordCount **470** / chronologicalFrontier **2010-04-05** / latestMachineAdded「鮪伝説」。
- 2010-04-05同日群を継続し、repo内検索で「スーパーマジカルセブン」「パチスロ宇宙戦艦ヤマト」「ハッピージャグラーV」が未登録であることを確認。
- K-Navi導入カレンダーは3機とも2010-04-05群に置く。今回は業界発表・P-WORLD・旧パチマガ・当時解析に加えてresetBehaviorの特殊電源リセット情報まで回収できた「スーパーマジカルセブン」を471件目として追加。

## 471 — スーパーマジカルセブン 要約

- メーカー: **トリビー**
- 型式/検定番号: **UNVERIFIED_AFTER_RESEARCH**
- 導入: **2010-04-05**（業界発表では納品4/4予定）
- 世代/タイプ: **5号機 / ボーナス非搭載・ナビ回数管理ART / AT・CZ併用**
- ART初当たり: **1/300 / 1/287 / 1/269 / 1/257 / 1/245 / 1/218**
- 機械割: **CONFLICT**
  - パチマガスロマガ: **97.0 / 98.5 / 99.9 / 102.0 / 105.0 / 111.1%**
  - P-WORLD / 5号機クロニクル: **97.9 / 99.7 / 101.2 / 103.1 / 104.8 / 111.1%**
- 50枚ベース: **約35G**（当時解析単独の直接値）
- ART「ドリームラッシュ」: **約+2.0枚/G**
- 基本獲得性能: **20回≈120枚 / 50回≈300枚 / 80回≈480枚**
- 通常天井: 特殊リプレイ成立回数管理。通常A/B系最大34回、ハマリ系最大50回、天国1〜5回。
- coreStatus: **COMPLETE_CORE_RESET_PARTIAL_PAYOUT_CONFLICT_FORMAL_IDENTITY_PARTIAL**

## resetBehavior v0.7 — スーパーマジカルセブン

- **設定変更**: 当時解析に設定変更時モード選択を確認。全設定共通で **通常A25% / 通常B25% / ハマリ40% / 天国10%**。
- **据え置き**: 通常の「据え置き=前日状態保持」と単純化できない。本機には約150分経過でモード/天井が自動リセットされる特殊電源挙動の記録があり、設定据え置きでも朝一リセット状態になり得る。
- **電源OFF→ON**: **約150分でリセット**する特殊挙動は複数の当時/回顧資料で一致。ただし起算点が「電源OFF後150分」対「電源ON後150分」で資料競合するため `CONFLICT`。
- **ゲーム数/天井**: G数ではなく特殊リプレイ成立回数管理。設定変更または150分経過リセット時に天井進捗がリセットされる資料を採用。
- **リセット時モード**: 通常A25% / 通常B25% / ハマリ40% / 天国10%。
- **朝一恩恵**: リセット時 **10%で天国**。天国なら特殊リプレイ **1〜5回**でART天井。振分は **1回25% / 2回12.5% / 3回25% / 4回12.5% / 5回25%**。
- **有利区間**: `NOT_APPLICABLE`（5号機・制度前）。
- **変更判別**: 本機固有の高信頼なガックン/初期出目条件は未確定。150分自動リセット仕様のため、朝一挙動のみで設定変更と据え置きを区別しにくい。
- resetBehaviorQA: **PARTIAL_HIGH_VALUE_RESET_BEHAVIOR_RECOVERED_WITH_TIMER_ORIGIN_CONFLICT**

## 主要出典（取得日 2026-09-03）

- グリーンべると/P-WORLD「トリビーが『スーパーマジカルセブン』を発表」: `https://news.p-world.co.jp/articles/3834/greenbelt`
- K-Navi 2010年4月導入カレンダー: `https://p-kn.com/calendar/201004/`
- P-WORLD「スーパーマジカルセブン」: `https://www.p-world.co.jp/machine/database/5871`
- パチマガスロマガ ART確率/PAYOUT: `https://cs62.cs-plaza.com/g/pachi/pla/s_conq/trivy_slot/14/h.php`
- パチマガスロマガ 基本システム: `https://cs62.cs-plaza.com/g/pachi/pla/s_conq/trivy_slot/14/a.php`
- 当時解析まとめ: `https://ameblo.jp/pachimatome/entry-10499026926.html`
- My パチスロ覚書 解析情報: `https://wikiwiki.jp/miduki/トリビー/スーパーマジカルセブン/解析情報`
- My パチスロ覚書 立ち回り: `https://wikiwiki.jp/miduki/トリビー/スーパーマジカルセブン/立ち回り`
- 旧HAZUSE記述引用の過去ログ: `https://kako.5ch.io/test/read.cgi/slot/1247787165`
- 5号機クロニクル トリビー一覧: `https://5goki.com/trivy`

## resetBehavior 遡及QA進捗

- 既存遡及補完は **スロ原人（`docs/real_machine_db/machines/2006-10_surogenjin.md`）まで補完済み**という正本進捗を維持。
- 前線収集を優先し、推測で遡及QA済み範囲を進めない。
- 次回はmachine tree/履歴を用いて、**スロ原人直後の最初の `resetBehavior` 欠損実ファイル**を一意特定してから補完する。

## 次回再開地点

1. **recordCount 471 / chronologicalFrontier 2010-04-05**。
2. **2010-04-05同日群を継続**。未処理確認済みの **パチスロ宇宙戦艦ヤマト（山佐） / ハッピージャグラーV（北電子）** を優先し、repo重複を再確認して次を追加する。
3. 同日群を閉じる前にK-Navi導入カレンダー、メーカー別一覧、当時業界記事・旧解析DBを横断し、4/5の追加漏れを再監査する。
4. **スパイガール日付CONFLICT監査を保持**: K-Navi `2010-02-22` vs パチビー/当時スケジュール `2010-04-19` / 複数DB `2010-04`。4月境界で再確認し、既存登録有無とreleaseDate定義を混同しない。
5. 遡及QAは **スロ原人直後の最初のresetBehavior欠損実ファイル**を特定して再開。
6. 次回追加前も必ず最新mainのREADME / mission / INDEX / LATEST_HANDOFF / 前線実レコード / main状態を再取得し、他リレー競合・重複を防ぐ。
