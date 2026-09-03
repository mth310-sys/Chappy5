# 実機DB 最新リレー引継ぎ

更新日: 2026-09-03

## 現在地点

- recordCount: **446**
- latestMachineAdded: **シオサー-30**
- latestRecord: `docs/real_machine_db/machines/2010-01_shiosa-30.md`
- chronologicalFrontier: **2010-01-25**
- schema: **resetBehavior v0.7**
- status: **READY_TO_CONTINUE**
- note: 今回446は2010年1月既知漏れの遡及補完。具体日境界は引き続き2010-01-25の先を監査する。

## 今回の継続確認

- GitHub最新mainの `README.md`、正本ミッション `docs/CHAPPY5_REAL_MACHINE_DATABASE_MISSION_V01.md` v0.7、旧 `INDEX.md`、`LATEST_HANDOFF.md`、最新445 `2010-01-25_pachislot-ashita-no-joe.md` を再読。
- `INDEX.md` は旧19件地点のため、README規定どおり進捗正本には使わず、LATEST_HANDOFF＋実レコードを優先。
- 開始時mainは445件 / chronologicalFrontier 2010-01-25 / latestMachineAdded パチスロあしたのジョー。
- 2010-01-25同日群〜01-31境界を再監査する過程で、P-WORLDの2010年1月新台一覧にある10パチスロのうち `シオサー-30` がmain未登録であることをrepo検索で確認。
- パイオニア公式2010年製品一覧・シオサイシリーズ一覧も `シオサー-30` を **2010年1月発売**としているため、月精度の既知漏れを飛ばさず446件目として遡及追加。
- 一方、パチ＆スロ必勝本には **2010/2/1導入開始予定**とあり、発売月/九州限定導入スケジュールの定義差が疑われる。平均化せずレコード内に `CONFLICT_DATE_GRANULARITY_OR_REGIONAL_SCHEDULE` として保持。

## 446 — シオサー-30 要約

- メーカー: **パイオニア**
- 型式名: **シオサイVZ-30**
- 検定番号: **9S1166**
- 導入/発売: **2010年1月**（パイオニア公式・P-WORLD） / **2010-02-01導入開始予定**（必勝本）
- 世代: **5号機**
- システム: **ノーマルタイプ + 救済天井RT / 30Φ / 九州限定**
- 機械割: **96.7 / 98.6 / 100.7 / 103.8 / 106.1 / 108.1%**
- BIG: **1/319 / 1/307 / 1/293 / 1/283 / 1/274 / 1/266**
- REG: **1/532 / 1/512 / 1/500 / 1/445 / 1/425 / 1/394**
- 合算: **1/199 / 1/192 / 1/185 / 1/173 / 1/166 / 1/159**
- BIG: **最大322枚**
- REG: **最大151枚**
- 天井RT: **BIG後1200G / REG後1000G**
- 50枚ベース: **UNVERIFIED_AFTER_RESEARCH**。パチマガスロマガの本機専用「1000円あたりのゲーム数」欄も「現在調査中」。
- 天井RT純増: **UNVERIFIED_AFTER_RESEARCH**

## resetBehavior v0.7 — シオサー-30

- **設定変更**: `PARTIALLY_VERIFIED`
- **gameCounterReset**: `CARRY_OVER_ON_SETTING_CHANGE_VERIFIED_ANALYSIS`。設定変更後もBIG後1200G / REG後1000Gの天井進捗を引き継ぐ。
- **据え置き**: `PARTIALLY_VERIFIED_BY_CEILING_CONTINUITY`。少なくとも変更でも消えない天井進捗は据え置きで失われる根拠なし。ただし表示/リール状態等の全挙動は直接確認できず。
- **電源OFF→ON**: `UNVERIFIED_AFTER_RESEARCH`
- **ceilingAfterReset**: `NO_RESET_SPECIFIC_SHORTENING_CONFIRMED`。通常天井はBIG後1200G / REG後1000G、変更専用短縮値なし。
- **modeAfterReset**: `NOT_APPLICABLE_NO_GAME_COUNT_MODE_CONFIRMED`
- **stateAfterReset**: `UNVERIFIED_AFTER_RESEARCH`。天井RT中の変更時状態処理は直接確定できず。
- **有利区間**: `NOT_APPLICABLE`（5号機・制度前）
- **朝一恩恵**: 設定変更でも天井進捗が保持されるため、深いハマリ台では宵越し天井狙い価値が残りうる。
- **朝一不利**: `NONE_CONFIRMED_AFTER_RESEARCH`
- **変更判別**: `UNVERIFIED_AFTER_RESEARCH`。ガックン/初期出目/ハイビスカス等を本機固有高信頼資料で確定できず。
- **公開朝一数値**: 設定変更専用のモード振分/当選率/恩恵率は `NONE_CONFIRMED_AFTER_RESEARCH`。

## 主要CONFLICT / 欠損

- releaseDate: パイオニア公式・P-WORLDは2010年1月、必勝本は2010/2/1導入開始予定。平均せず双方保持。
- baseGamesPer50: 検索語・型式・資料系統を変えて再探索したが比較可能値なし。
- ceilingRT netIncrease: 本機固有の公開純増値を確定できず。
- powerCycleBehavior / active RT state after setting change / resetDetection: 十分な再探索後も直接根拠なし。

## 主要出典（取得日 2026-09-03）

- パイオニア公式 2010年製品一覧: `https://www.slot-pioneer.co.jp/products/2010.html`
- パイオニア公式 シオサイシリーズ一覧: `https://www.slot-pioneer.co.jp/products/siosai.html`
- パイオニア公式 発売のお知らせ: `https://www.slot-pioneer.co.jp/information/siosar.html`
- P-WORLD 機種DB: `https://www.p-world.co.jp/machine/database/5850`
- P-WORLD 2010年01月新台一覧: `https://www.p-world.co.jp/database/machine/introduce_calendar.cgi?type=Slot&year_month=2010-01`
- パチ＆スロ必勝本 基本スペック: `https://p.hisshobon.jp/machine/1528/1/23192`
- pacnk 設定判別/天井: `https://pacnk.com/slot/tools/sh_shiosa.html`
- パチマガスロマガ 基本システム: `https://cs62.cs-plaza.com/g/pachi/pla/s_conq/pioneer_slot/94/a.php`
- パチマガスロマガ 1000円G数: `https://cs62.cs-plaza.com/g/pachi/pla/s_conq/pioneer_slot/94/c.php`
- 5号機クロニクル パイオニア: `https://5goki.com/pioneer`

## resetBehavior 遡及QA進捗

- 既存遡及補完は **スロ原人（`docs/real_machine_db/machines/2006-10_surogenjin.md`）まで補完済み**という正本進捗を維持。
- 本線新規収集を止めず、QAリレー時にその直後の最初のresetBehavior欠損実ファイルから補完する。

## 次回再開地点

1. **recordCount 446 / chronologicalFrontier 2010-01-25**。`シオサー-30` は2010年1月既知漏れとして遡及追加済み。
2. **2010-01-26〜01-31境界の最終監査を継続**。具体導入日が判明する未登録機があれば最古から追加する。
3. 1月末を閉じられたら **2010-02-01同日群**へ進む。P-WORLD 2010年2月一覧には `鴉-KARAS-`、`パチスロスーパー海物語`、`ビューティフルジョー`、`ピカ吾郎V2`、`バイオレントゾーン`、`BLOOD+`、`ゼットゴールドEX`、`列強伝`、`新世紀エヴァンゲリオン～魂の軌跡～`、`ハイハイ30`、`みどりのマキバオー`、`アフロのモンチ`、`真田純勇士`、`哲也 新宿vs上野DX` が月内候補。具体日を当時資料で確定して最古から処理する。
4. `シオサー-30` は今回登録済みなので再追加しない。必勝本の2010-02-01予定日は日付CONFLICTとして既存レコードに保持。
5. `ニュートリプルクラウン30` は既存2009-11-24レコードがあるため再追加しない。
6. `ファイヤービーク` の正式具体導入日を一次/当時業界資料で発見した場合のみ既存 `2010-01_firepeak.md` を更新する。
7. `マジカルハロウィン2` の導入日CONFLICT（2010-01-05 / 2010-01-12）は新しい一次資料が得られた場合のみ解消する。
8. 追加前に必ずrepo既存検索＋LATEST_HANDOFF再取得を行い、重複・他リレー競合を防ぐ。
