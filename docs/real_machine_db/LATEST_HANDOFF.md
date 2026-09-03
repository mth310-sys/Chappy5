# 実機DB 最新リレー引継ぎ

更新日: 2026-09-03

## 現在地点

- recordCount: **445**
- latestMachineAdded: **パチスロあしたのジョー**
- latestRecord: `docs/real_machine_db/machines/2010-01-25_pachislot-ashita-no-joe.md`
- chronologicalFrontier: **2010-01-25**
- schema: **resetBehavior v0.7**
- status: **READY_TO_CONTINUE**

## 今回の継続確認

- GitHub最新mainの `README.md`、正本ミッション `CHAPPY5_REAL_MACHINE_DATABASE_MISSION_V01.md` v0.7、旧 `INDEX.md`、`LATEST_HANDOFF.md`、最新444 `2009-11-15_shimauta-rxh-30.md` を再読。
- INDEXは旧19件地点のためREADME規定どおり進捗正本には使わず、LATEST_HANDOFF＋実レコードを優先。
- 開始時mainは444件 / chronologicalFrontier 2010-01-12 / latestMachineAdded 島唄RXH-30。
- 2010-01-13〜01-24境界をP-WORLD系・当時業界記事・回顧資料で再監査し、この期間に新たに高信頼な具体導入日を確定できる未登録パチスロは今回確認できなかったため境界を閉じた。
- 次具体日候補 `パチスロあしたのジョー` はグリーンべると2010-01-27記事で **2010-01-25からホールデビュー**と確認。パチンコ版は同記事で2010-02-08と明確に分離。
- repo検索で `パチスロあしたのジョー` の既存レコードなしを再確認後、445件目として追加。

## 445 — パチスロあしたのジョー 要約

- メーカー: **サミー**
- 導入開始: **2010-01-25**
- 世代: **5号機**
- システム: **ボーナス+ART / バトル型**
- 機械割: **95.7 / 97.6 / 99.8 / 103.0 / 107.4 / 112.5%**
- ボーナス合算: **1/86.8 / 1/85.9 / 1/85.0 / 1/84.1 / 1/83.3 / 1/82.4**
- 50枚ベース: **29.0 / 29.1 / 29.2 / 29.4 / 29.5 / 29.6G**
- BATTLE BONUS: **約36枚**
- ART「ジョーRUSH」: **次回ボーナスまで継続、約+1.6枚/G**
- 天井: **ボーナス後15回連続ART非突入で次回ボーナス後ART確定**。仮天井選択時は8回非突入で次回ART、仮天井選択率約1/8。

## resetBehavior v0.7 — パチスロあしたのジョー

- **設定変更**: `PARTIALLY_VERIFIED`。設定変更後の高確率状態移行率が公開されている。
- **設定変更後高確率状態移行率**: **40.0 / 40.7 / 43.2 / 44.6 / 46.8 / 48.7%**（設定1→6）
- **据え置き**: `UNVERIFIED_AFTER_RESEARCH`
- **電源OFF→ON**: `UNVERIFIED_AFTER_RESEARCH`
- **gameCounterReset**: `UNVERIFIED_AFTER_RESEARCH`。8回/15回のART非突入カウンタが変更時リセットか引継ぎかは直接確定できず。
- **ceilingAfterReset**: `UNVERIFIED_AFTER_RESEARCH`。設定変更専用の短縮/再セット数値なし。
- **modeAfterReset**: `UNVERIFIED_AFTER_RESEARCH_AS_SEPARATE_MODE`
- **stateAfterReset**: `VERIFIED_ANALYSIS_SINGLE`。上記の設定別高確移行率を確認。
- **有利区間**: `NOT_APPLICABLE`（5号機・制度前）
- **朝一恩恵**: 設定変更後40.0〜48.7%の高確スタート率を公開値として保存。確定ART等の追加恩恵は確認できず。
- **朝一不利**: `NONE_CONFIRMED_AFTER_RESEARCH`
- **変更判別**: `LOW_CONFIDENCE_EXPERIENCE_REPORT_ONLY`。当時実戦系ブログに朝一転落リプレイを変更の証として扱う記録があるが、高信頼資料で確定できず客AIの確定判別には使わない。
- **公開朝一数値**: 高確率状態移行率 **40.0〜48.7%** のみ高信頼解析値として保存。

## 主要CONFLICT / 欠損

- 後年5号機クロニクルにはBIG約204枚 / REG約48枚 / ART約+1.4枚/Gとある一方、当時グリーンべると・CrankySevenは6Gバトルボーナス約36枚 / ART約+1.6枚/G。本機仕様と整合する当時資料側を主値とし、後年値は `CONFLICT_RETROSPECTIVE_LIKELY_MIXED_DESCRIPTION` として分離。
- `formalModelName` / `approvalNumber` は表記揺れ・サミー・型式・検定番号で再探索したが確定できず `UNVERIFIED_AFTER_RESEARCH`。
- ART総合初当たりを単一の設定別比較値としては確定できず。状態別・ボーナス別ART抽選の詳細全表は実機完全再現用なので本DBでは収集しない。

## 主要出典（取得日 2026-09-03）

- グリーンべると 新台記事: `https://web-greenbelt.jp/00003376/`
- グリーンべると ホールデビュー記事: `https://web-greenbelt.jp/00002477/`
- CrankySeven解析: `https://crankyseven.com/ashitanojoe-pc.htm`
- pacnk設定判別: `https://pacnk.com/slot/tools/sh_asitanojyo.html`
- pachinko’s blog回顧: `https://pachinko.hatenablog.jp/entry/2010/01/tomorrows-joe`
- 5号機クロニクル サミー: `https://5goki.com/sammy`
- P-WORLD機種DB: `https://www.p-world.co.jp/machine/database/5792`
- 当時実戦系ブログ（変更判別補助証言）: `https://ameblo.jp/fen777/entry-10461816570.html`

## resetBehavior 遡及QA進捗

- 既存遡及補完は **スロ原人（`docs/real_machine_db/machines/2006-10_surogenjin.md`）まで補完済み**という正本進捗を維持。
- 本線新規収集を止めず、QAリレー時にその直後の最初のresetBehavior欠損実ファイルから補完する。

## 次回再開地点

1. **recordCount 445 / chronologicalFrontier 2010-01-25**。`パチスロあしたのジョー` まで登録済み。
2. **2010-01-25同日群を最終監査 → 2010-01-26〜01-31境界を導入日順に監査**し、未処理具体日機があれば最古から追加する。
3. `シオサー-30` はパイオニア公式で **2010-02-01** 確定済み。1月末まで他の未処理がなければ次の有力具体日候補として扱う。
4. `ニュートリプルクラウン30` は既存2009-11-24レコードがあるため再追加しない。
5. `ファイヤービーク` の正式具体導入日を一次/当時業界資料で発見した場合のみ既存 `2010-01_firepeak.md` を更新する。
6. `マジカルハロウィン2` の導入日CONFLICT（2010-01-05 / 2010-01-12）は新しい一次資料が得られた場合のみ解消する。
7. 追加前に必ずrepo既存検索＋LATEST_HANDOFF再取得を行い、重複・他リレー競合を防ぐ。
