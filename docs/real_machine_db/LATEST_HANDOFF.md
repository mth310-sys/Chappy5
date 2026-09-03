# 実機DB 最新リレー引継ぎ

更新日: 2026-09-03

## 現在地点

- recordCount: **464**
- latestMachineAdded: **まことちゃん**（ホール導入予定2010-03-08）
- latestRecord: `docs/real_machine_db/machines/2010-03-08_makotochan.md`
- chronologicalFrontier: **2010-03-08**
- schema: **resetBehavior v0.7**
- status: **READY_TO_CONTINUE**

## 今回の継続確認

- 最新mainの `README.md`、正本ミッション `docs/CHAPPY5_REAL_MACHINE_DATABASE_MISSION_V01.md` v0.7、`INDEX.md`、`LATEST_HANDOFF.md`、直前実レコード「青ドン～花火の匠～」を再取得。
- `INDEX.md` は旧19件地点のため、README規定どおりLATEST_HANDOFF＋main実レコードを進捗正本として使用。
- 開始時正本はrecordCount 463 / chronologicalFrontier 2010-03-08 / latestMachineAdded「青ドン～花火の匠～」。
- LATEST_HANDOFF指定の次候補「まことちゃん」（ヤーマ）について候補パス未存在を確認し、公式・当時スケジュール・P-WORLD・旧パチマガ・後年DBを横断して464件目へ追加。

## 464 — まことちゃん 要約

- メーカー: **ヤーマ**
- 正式型式: **まことちゃんK**
- 検定番号: **9S0955**
- 導入: **2010-03-08**をALL7のホール導入予定主値。ベルコ現存公式の旧ヤーマページは2010年3月登場、2010-01-20コミックナタリーは3月上旬より全国ホールで順次稼働予定。
- 世代: **5号機**
- タイプ: **ART主体 + BIG / 周期抽選型ART**
- 機械割: **96.5 / 98.5 / 101.0 / 103.0 / 105.0 / 107.0%**
- BIG: **設定1〜5 1/1892、設定6 1/5461**
- 初当たりART: **1/280 / 1/256 / 1/232 / 1/211 / 1/197 / 1/196**
- BIG+初ART合成: **1/271 / 1/249 / 1/225 / 1/206 / 1/193 / 1/190**
- 50枚ベース: **UNVERIFIED_AFTER_RESEARCH**。旧パチマガ本機ページ自体が「現在調査中」で、別系統でも比較可能な直接値を確定できず。
- ART「よいこコンサート」: **約+2.0枚/G**、**100枚 or 500枚**獲得まで継続。
- ARTループ率: **66 / 80 / 86 / 90%**。終了後最大7Gのアンコールタイム。
- BIG: **約150枚**、終了後ART確定。
- 通常時は**約72Gに1回の周期抽選機会**。P-WORLDの「仮天井」はこの周期を指すため固定ゲーム数天井と混同しない。

## resetBehavior v0.7 — まことちゃん

- **設定変更**: `UNVERIFIED_AFTER_RESEARCH`。設定変更時の約72G周期進捗、前兆、ART状態処理を本機固有資料で直接確定できず。
- **据え置き**: `UNVERIFIED_AFTER_RESEARCH`。周期進捗の前日引継ぎを直接明記した高信頼資料なし。
- **電源OFF→ON**: `UNVERIFIED_AFTER_RESEARCH`。周期進捗・前兆・ART/アンコール状態の単純電断処理を確定できず。
- **ゲーム数/天井**: 固定天井としては `NOT_APPLICABLE_AS_FIXED_CEILING`。主要ゲーム数要素は約72G周期。設定変更/電断時の周期リセット/引継ぎは `UNVERIFIED_AFTER_RESEARCH_PERIODIC_COUNTER`。
- **リセット短縮**: `NONE_CONFIRMED_AFTER_RESEARCH`。
- **モード/状態**: 朝一専用モード・変更時振分・状態再抽選の公開値なし。前兆/ART/アンコール中の変更・電断処理は未確定。
- **有利区間**: `NOT_APPLICABLE`（5号機・制度前）。
- **朝一恩恵/不利**: 設定変更専用の比較可能な恩恵・不利は `NONE_CONFIRMED_AFTER_RESEARCH`。
- **変更判別**: `UNVERIFIED_AFTER_RESEARCH`。ガックン、初期出目、リール、液晶、ランプ、据え置き判別まで検索語変更済み。
- **公開朝一数値**: 通常時の約72G周期のみ。リセット専用モード振分、朝一当選率、恩恵率は確認なし。

## 主要出典（取得日 2026-09-03）

- ベルコ株式会社 現存公式・旧ヤーマ機種情報: `https://www.s-bellco.co.jp/products/slot/yama_makotochan/`
- ALL7 2010年3月導入一覧: `https://www.all7.jp/plans/index/2010/03/10`
- コミックナタリー 2010-01-20: `https://natalie.mu/comic/news/26578`
- P-WORLD: `https://www.p-world.co.jp/machine/database/5831`
- パチマガスロマガ旧解析 基本: `https://cs62.cs-plaza.com/g/pachi/pla/s_conq/yama_slot/13/a.php`
- パチマガスロマガ旧解析 ボーナス/PAYOUT: `https://cs62.cs-plaza.com/g/pachi/pla/s_conq/yama_slot/13/h.php`
- パチマガスロマガ旧解析 小役/ベース: `https://cs62.cs-plaza.com/g/pachi/pla/s_conq/yama_slot/13/c.php`
- パチマガスロマガ旧解析トップ: `https://cs62.cs-plaza.com/g/pachi/pla/s_conq/yama_slot/13/yama_slot_13.php`
- 5号機クロニクル ヤーマ: `https://5goki.com/yama`

## resetBehavior 遡及QA進捗

- 既存遡及補完は **スロ原人（`docs/real_machine_db/machines/2006-10_surogenjin.md`）まで補完済み**という正本進捗を維持。
- 本線前進を止めず、次の遡及QA対象はスロ原人直後の実ファイル順で最初の `resetBehavior` 欠損機を一意特定してから補完する。

## 次回再開地点

1. **recordCount 464 / chronologicalFrontier 2010-03-08**。最新追加は「まことちゃん」。
2. **2010-03-08同日群を最終監査**。当時スケジュール上の残候補を既存レコードと突合する。
3. 特に **「哲也 新宿VS上野天涯孤独DX」** は既存457「哲也 新宿VS上野DX」/型式「哲也DX2」と同一機・別表記/別スペックの可能性を先に照合し、重複なら新規追加しない。別型式・別スペックと確定した場合のみ独立レコード化。
4. 2010-03-08同日群を閉じたら、次の具体日 **2010-03-15「満福箱」（メテオ/ラスター）** へ進む。当時スケジュールでは3月14日納品・3月15日導入。
5. **スパイガール日付CONFLICT監査を保持**: K-Navi `2010-02-22` vs パチビー/当時スケジュール `2010-04-19` / 複数DB `2010-04`。現時点では4月側を優勢とし、4月境界で再確認。
6. 次回追加前も必ず最新mainのREADME / mission / INDEX / LATEST_HANDOFF / 前線実レコード / 直近main状態を再取得し、他リレー競合・重複を防ぐ。
