# 実機DB 最新リレー引継ぎ

更新日: 2026-09-03

## 現在地点

- recordCount: **462**
- latestMachineAdded: **パチスロポパイブリッド**（時系列主値2010-03-08 / 2010-03-15資料とCONFLICT）
- latestRecord: `docs/real_machine_db/machines/2010-03-08_pachislot-popeyebrid.md`
- chronologicalFrontier: **2010-03-08**
- schema: **resetBehavior v0.7**
- status: **READY_TO_CONTINUE**

## 今回の継続確認

- 最新mainの `README.md`、正本ミッション `docs/CHAPPY5_REAL_MACHINE_DATABASE_MISSION_V01.md` v0.7、旧 `INDEX.md`、`LATEST_HANDOFF.md`、最新mainコミット/実レコードを再取得。
- `INDEX.md` は旧19件地点のため、README規定どおり進捗正本には使わず、LATEST_HANDOFF＋main実レコード＋直近コミットを優先。
- 開始時にLATEST_HANDOFFは460件「新世紀エヴァンゲリオン～魂の軌跡～」地点だったが、main HEAD `d06cd8ab8334741da29a467d559bea0582a66bc8` には既に「麻雀王利一」が追加済み。直前コミット群で458「真田純勇士」も確認し、実レコードを優先して461件地点として継続した。
- 2010-03-01同日群は「新世紀エヴァンゲリオン～魂の軌跡～」「真田純勇士」「麻雀王利一」を確認済みとして閉じた。
- 当時導入スケジュール/ALL7で次の明確な具体日群は2010-03-08。パチスロ候補は「パチスロポパイブリッド」「青ドン～花火の匠～」「パチスロまことちゃん」「哲也 新宿VS上野天涯孤独DX」。
- repo/commit検索で「パチスロポパイブリッド」未登録を確認し462件目へ追加。

## 462 — パチスロポパイブリッド 要約

- メーカー: **サミー**
- 正式型式: **ポパイ2ZR**（グリーンべると当時記事）
- 検定番号: **UNVERIFIED_AFTER_RESEARCH**
- 導入: **CONFLICT**。ALL7/当時導入スケジュール/アタリ7 `2010-03-08`、パチビー/パチ＆スロ必勝本 `2010-03-15`、グリーンべると「3月上旬納品予定」。時系列主値は複数当時スケジュールが一致する2010-03-08。
- 世代: **5号機**
- タイプ: **A+ART / ボーナス + 押し順ART**
- 機械割: **CONFLICT**。旧パチマガ/必勝本系列 `97.3 / 99.1 / 102.0 / 106.0 / 111.0 / 119.9%`、アタリ7/Seven Peace系列 `96.4 / 98.2 / 100.7 / 104.0 / 108.5 / 119.9%`。平均しない。
- BIG合算: **1/334.37 → 1/296.54**
- MIDDLE/REG: **1/496.48 → 1/451.97**
- ボーナス合算: **1/199.80 → 1/179.06**
- 50枚ベース: **31.38 / 31.47 / 31.55 / 31.64 / 31.70 / 31.82G**
- BIG: **約252枚**
- MIDDLE: **約84枚**
- ART「プルート追跡モード」: **1セット20G・約+1.0枚/G**
- 通常救済: **通常状態999G消化で天井ART**。パチビーは「RTパンク後999G」と説明。

## resetBehavior v0.7 — パチスロポパイブリッド

- **設定変更**: `UNVERIFIED_AFTER_RESEARCH`。ポパイブリッド/ポパイ2ZR/サミーと設定変更・リセット・朝一・天井・999G・高確・ARTストック・RTを組み替え、旧解析/当時記事を横断したが直接本文を確定できず。
- **据え置き**: `UNVERIFIED_AFTER_RESEARCH`。999G進捗、高確、CZ/RT、ARTナビストック保持を本機固有資料で確定できず。
- **電源OFF→ON**: `UNVERIFIED_AFTER_RESEARCH`。
- **gameCounterReset**: `UNVERIFIED_AFTER_RESEARCH`。通常999G天井自体は確定、設定変更時clear/retainは不明。
- **ceilingAfterReset**: 通常天井999G。設定変更専用短縮/引継ぎは `UNVERIFIED_AFTER_RESEARCH`。
- **modeAfterReset / stateAfterReset**: `UNVERIFIED_AFTER_RESEARCH`。高確/CZ/RT/ARTストックのリセット処理を推定しない。
- **有利区間**: `NOT_APPLICABLE`（5号機・制度前）。
- **朝一恩恵/不利**: 設定変更専用は `NONE_CONFIRMED_AFTER_RESEARCH`。
- **変更判別**: `UNVERIFIED_AFTER_RESEARCH`。ガックン、初期出目、リール、液晶、ステージ、ランプまで再探索済み。
- **公開朝一関連数値**: 通常仕様の999G天井のみ。リセット専用当選率・モード振分・恩恵発生率は確認なし。

## 主要出典（取得日 2026-09-03）

- グリーンべると: `https://web-greenbelt.jp/00002556/`
- ALL7 2010年3月導入一覧: `https://www.all7.jp/plans/index/2010/03/10`
- 当時導入スケジュール再録: `https://ameblo.jp/pachimatome/entry-10470039494.html`
- パチマガスロマガ旧解析 基本: `https://cs62.cs-plaza.com/g/pachi/pla/s_conq/sammy_slot/123/a.php`
- パチマガスロマガ旧解析 小役/ベース: `https://cs62.cs-plaza.com/g/pachi/pla/s_conq/sammy_slot/123/c.php`
- パチマガスロマガ旧解析 ボーナス/PAYOUT: `https://cs62.cs-plaza.com/g/pachi/pla/s_conq/sammy_slot/123/h.php`
- パチ＆スロ必勝本: `https://p.hisshobon.jp/machine/1563/1/23881`
- パチビー: `https://www.pachibee.jp/machines/about/210020015`
- Seven Peace旧解析: `https://www.mb.ccnw.ne.jp/seven-peace.com/popai/popai.html`
- アタリ7: `https://www.atari7.com/slot/date1441784682.php`

## resetBehavior 遡及QA進捗

- 既存遡及補完は **スロ原人（`docs/real_machine_db/machines/2006-10_surogenjin.md`）まで補完済み**という正本進捗を維持。
- 本線前進を止めず、次の遡及QA対象はスロ原人直後の実ファイル順で最初の `resetBehavior` 欠損機を一意特定してから補完する。

## 次回再開地点

1. **recordCount 462 / chronologicalFrontier 2010-03-08**。最新追加は「パチスロポパイブリッド」。
2. **2010-03-08同日群を継続監査**。未登録候補の **「青ドン～花火の匠～」（エレコ/ユニバーサル）** と **「パチスロまことちゃん」（ヤーマ）** を最優先でrepo重複確認→当時資料横断→性能コア＋resetBehavior v0.7収集する。
3. 当時スケジュールの **「哲也 新宿VS上野天涯孤独DX」** は、既存457「哲也 新宿VS上野DX」/型式「哲也DX2」と同一機・別表記/別スペックの可能性を最初に照合し、重複なら新規追加しない。別型式・別スペックと確定した場合のみ独立レコード化する。
4. 3月8日同日群を閉じたら、次の具体日 **2010-03-15「満福箱」（メテオ/ラスター）** へ進む。当時スケジュールでは3月14日納品・3月15日導入。
5. **スパイガール日付CONFLICT監査を保持**: K-Navi `2010-02-22` vs パチビー/当時スケジュール `2010-04-19` / 複数DB `2010-04`。現時点では4月側を優勢とし、4月境界で再確認する。
6. 次回追加前も必ず最新mainのREADME / mission / INDEX / LATEST_HANDOFF / 前線実レコード / 直近コミットを再取得し、他リレー競合・重複を防ぐ。
