# 実機DB 最新リレー引継ぎ

更新日: 2026-09-03

## 現在地点

- recordCount: **496**
- latestMachineAdded: **トップをねらえ2!**（平和 / 2010-07-05）
- latestRecord: `docs/real_machine_db/machines/2010-07-05_top-wo-nerae2.md`
- chronologicalFrontier: **2010-07-05**
- frontierLatestMachine: **トップをねらえ2!**
- schema: **resetBehavior v0.7**
- status: **READY_TO_CONTINUE**

## 今回の継続確認

- 最新mainの `README.md`、正本ミッション `docs/CHAPPY5_REAL_MACHINE_DATABASE_MISSION_V01.md` v0.7、`INDEX.md`、`LATEST_HANDOFF.md`、前線実レコード495「アイムラッキーパレード」を再取得。
- `INDEX.md` は旧19件地点のため、README規定どおり `LATEST_HANDOFF.md`＋main実レコードを進捗正本として使用。
- 開始時の最新mainは recordCount **495** / chronologicalFrontier **2010-06-28**。会話上の古い491地点へ戻らず最新mainを採用。
- K-Navi 2010年7月導入カレンダーで6/29〜7/4を境界監査。次の明確な全国導入パチスロ群は **2010-07-05「トップをねらえ2!」「お座敷の茶々」**。
- repo検索で「トップをねらえ2!」未登録を確認し、496件目として追加。

## 496 — トップをねらえ2! 要約

- メーカー: **平和**
- 型式名: **トップをねらえ2！X**
- 検定番号: **0S0074**
- 導入主値: **2010-07-05**。K-Navi・パチビーで一致。当時グリーンべるとは納品7/4予定と報道し、物流開始とホール導入を分離。
- 世代/タイプ: **5号機 / A+ART / セットストックART + ゲーム数管理ART / 無限ART / 3段階天井**
- 機械割主系列: **97.3 / 99.5 / 101.9 / 105.2 / 108.8 / 114.3%**（P-WORLD/pacnk）
- 機械割CONFLICT: 当時パチマガスロマガシミュレート **96.95 / 99.38 / 102.17 / 105.92 / 110.03 / 114.73%**。平均化せず定義差保持。
- 通常BIG合算: **1/318.14 → 1/258.02**
- 黒BIG: **1/5041.23（全設定共通）**
- 全BIG合算: **1/299.25 → 1/245.45**
- ART初当り: **1/555 → 1/283**
- 50枚ベース: **34.78 / 34.82 / 34.86 / 34.92 / 34.98 / 35.06G/1000円**（当時パチマガスロマガ直接値）
- BIG: **約204枚**
- ART「バスターゾーン」: **30G / 約+1.4枚/G**
- ART「バスターミッション」: **5G+α / 約+1.4枚/G**
- 無限ART「ダイバスターゾーン」: **次回ボーナスまで / 約+1.4枚/G**
- 通常天井: **600 / 900 / 1200Gの3段階**
- coreStatus: **COMPLETE_CORE_RESET_BEHAVIOR_PARTIAL**

## resetBehavior v0.7 — トップをねらえ2!

- **設定変更**: P-WORLDは「ボーナス終了後および設定変更後」600/900/1200Gと明記、pacnkも**設定変更時は天井までのG数リセット**と明記。設定変更後は0Gから3段階天井を再計測。
- **据え置き**: 設定変更時のみG数リセットは直接確認したが、「据え置きなら前日G数を引き継ぐ」と明記する本機固有高信頼資料は今回確定できず `UNVERIFIED_AFTER_RESEARCH`。一般論で断定しない。
- **電源OFF→ON**: 2010年当時実戦記で設定変更・単純電源ON/OFF双方で**ダイナーステージ開始**との報告あり。ただし単一ユーザー資料なので補助扱い。天井G数/ARTストック/内部状態の電源OFF→ON処理は `UNVERIFIED_AFTER_RESEARCH`。
- **ゲーム数/天井**: 設定変更でカウンタリセット。リセット後も **600 / 900 / 1200G**、専用短縮天井なし確認。
- **モード/状態**: 低確/高確あり。設定変更時の低確スタートは同2010年実戦記で報告されるが、K-Navi「設定変更時の挙動」本文が現状403で直接回収できず、高信頼確定にはしない。ARTストック/準備/潜伏の設定変更時処理も `UNVERIFIED_AFTER_RESEARCH`。
- **有利区間**: **NOT_APPLICABLE**（5号機・制度前）。
- **朝一恩恵**: 設定変更専用短縮天井・専用当選率・モード優遇は `NONE_CONFIRMED_AFTER_RESEARCH`。
- **朝一不利**: **前日の天井進捗を失う**ことは確定。その他ストック/高確消失は直接高信頼根拠がなく断定しない。
- **変更判別**: 単一当時実戦記では設定変更時も電源ON/OFF時もダイナーステージになるため、ステージでは変更判別困難との報告。ガックン/初期出目/ランプ等の本機固有高信頼情報は `UNVERIFIED_AFTER_RESEARCH`。
- **公開朝一数値**: リセット後天井 **600 / 900 / 1200G**。朝一専用当選率/恩恵率は確認されず。

## resetBehavior 遡及QA — 継続地点

- `2006-11_jack-to-mamenoki.md` までv0.7遡及追加済みを維持。
- 次はmainのmachine tree / commit履歴 / 2006-11〜12実レコード群から「ジャックと豆の木」直後に実在する最初の `resetBehavior` 欠損ファイルをパスで確定してから補完する。
- 新規機種の時系列前進を止めない。

## 主要出典（取得日 2026-09-03）

### トップをねらえ2!
- グリーンべると 2010-05-31: `https://web-greenbelt.jp/00002682/`
- P-WORLD: `https://www.p-world.co.jp/machine/database/5984`
- パチビー: `https://www.pachibee.jp/machines/index/210050008`
- K-Navi機種ページ: `https://p-kn.com/slot/1228/`
- K-Navi 2010年7月導入カレンダー: `https://p-kn.com/calendar/201007/`
- pacnk: `https://pacnk.com/slot/2010/topoonerae/top.php`
- パチマガスロマガ 基本システム: `https://cs62.cs-plaza.com/g/pachi/pla/s_conq/heiwa_slot/38/a.php`
- パチマガスロマガ 小役/1000円: `https://cs62.cs-plaza.com/g/pachi/pla/s_conq/heiwa_slot/38/c.php`
- パチマガスロマガ ボーナス/PAYOUT: `https://cs62.cs-plaza.com/g/pachi/pla/s_conq/heiwa_slot/38/h.php`
- パチマガスロマガ 機種トップ: `https://cs62.cs-plaza.com/g/pachi/pla/s_conq/heiwa_slot/38/heiwa_slot_38.php`
- 立ち回り解析整理: `https://www.pachirinko.com/5.top.wo.nerae2.html`
- 2010年当時実戦記（補助証拠のみ）: `https://plaza.rakuten.co.jp/battensan/diary/201008270000/`

## 今回のGitHub更新

- 496 トップをねらえ2!追加: commit `5350a0e237b9f4a601580255482c71963dbfadc1`
- LATEST_HANDOFF更新: このコミット

## 次回再開地点

1. **recordCount 496 / chronologicalFrontier 2010-07-05**。開始時は必ず最新mainのREADME / mission / INDEX / LATEST_HANDOFF / 前線実レコードを再取得。
2. **2010-07-05同日群の未処理「お座敷の茶々」（バルテック）**を最優先でrepo重複確認し、未登録なら497件目として収集する。
3. 7/5同日群を別系統導入一覧でも再監査し、漏れがないことを確認後に前進する。
4. K-Navi 2010年7月導入カレンダー上、次の明確な全国導入パチスロ群は **2010-07-20「悪魔城ドラキュラII」「幕末浪漫 月華の剣士外伝～あかりと七つの妖珠～」**、その次が **2010-07-26「科学忍者隊ガッチャマンGR」**。ただし7/6〜19の別系統資料も境界監査してから進む。
5. トップをねらえ2! の `carryOverBehavior`、内部状態/ARTストックの設定変更・電源OFF→ON処理、ガックン等変更判別は後続QA対象。単一ユーザー実戦記を高信頼確定へ格上げしない。
6. 機械割の市場掲載系列とパチマガシミュレート系列はCONFLICTのまま保持し、平均化しない。
