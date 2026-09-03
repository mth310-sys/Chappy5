# 実機DB 最新リレー引継ぎ

更新日: 2026-09-04

## 現在地点

- recordCount: **519**
- latestMachineAdded: **出番だ！葉月ちゃん**（エレコ / 全国一斉導入基準 2010-10-04）
- latestRecord: `docs/real_machine_db/machines/2010-10-04_deban-da-hazuki-chan.md`
- chronologicalFrontier: **2010-10-04**
- frontierLatestMachine: **出番だ！葉月ちゃん**
- schema: **resetBehavior v0.7**
- status: **READY_TO_CONTINUE**

## 今回の継続確認

- 最新mainの `README.md`、正本ミッション `docs/CHAPPY5_REAL_MACHINE_DATABASE_MISSION_V01.md` v0.7、`INDEX.md`、`LATEST_HANDOFF.md`、前線実レコードを再取得。
- `INDEX.md` は旧19件地点のため、README規定どおり最新 `LATEST_HANDOFF.md`＋main実レコードを進捗正本として使用。
- 開始時正本は recordCount **518** / chronologicalFrontier **2010-10-04** / latestMachineAdded **極お父さん ～舞い降りた天使???～**。
- LATEST_HANDOFFの2010-10-04同日群を継続。パチスロピンポン、ロケットパニック、極お父さんは登録済みを確認し、repo未登録の**出番だ！葉月ちゃん**を519件目として追加。
- K-Navi 2010年10月4日全国一斉導入カレンダーのパチスロ5機種（ビッグシオV / ロケットパニック / 極お父さん / 出番だ!葉月ちゃん / パチスロピンポン）は全てmain登録済みとなった。
- 既登録性能値は再調査せず、新規対象の性能コア＋resetBehavior v0.7に限定して収集した。

## 519 — 出番だ！葉月ちゃん

- メーカー: **エレコ / ユニバーサルエンターテインメント**
- 全国一斉導入基準: **2010-10-04**（K-Navi＋2010-08-17当時解析記事）
- 別日付資料: **2010-09-21**（HAZUSE） / **2010年9月発売**（メーカー公式） → `CONFLICT`、定義差を分離
- 世代/タイプ: **5号機 / ノーマル / A+RT**
- 型式: **出番だ！葉月ちゃんEA**
- 検定番号: **0S0151**
- 機械割: **97.2 / 99.9 / 104.8 / 108.5 / 113.1 / 119.1%**
- BIG: **1/299.3 → 1/219.9**
- REG: **1/431.2 → 1/219.9**
- ボーナス合算: **約1/177 → 約1/110**
- 50枚/1000円: **約34G**（2010-08-17当時解析）
- BIG: **約310枚**
- REG / 葉月ボーナス: **最大約116枚**を主値。5号機クロニクル最大104枚は `CONFLICT`
- 5GプチRT「葉月チャンス」
- 次回ボーナスまでRT「葉月タイム」: **約+0.3枚/G**
- 固定ゲーム数天井: **NO_FIXED_GAME_COUNT_CEILING_CONFIRMED_AFTER_RESEARCH**
- coreStatus: **COMPLETE_CORE_RESET_BEHAVIOR_PARTIAL**

### resetBehavior v0.7 — 出番だ！葉月ちゃん

- 「出番だ！葉月ちゃん / 出番だ葉月ちゃん / 出番だ！葉月ちゃんEA / エレコ / ユニバーサル / HANABI / ドンちゃん」と「設定変更 / リセット / 朝一 / 据え置き / 宵越し / 電源OFF ON / RT / 葉月タイム / 天井 / ガックン」を組み替え、公式・当時解析・HAZUSE・保存実機資料・回顧DBを横断。
- 規定ゲーム数解除型の通常天井、設定変更専用の短縮天井、朝一専用天井数値は確認できず **NONE_CONFIRMED_AFTER_RESEARCH**。
- 設定変更時・据え置き・単純電源OFF→ON時の5GプチRT「葉月チャンス」/次回ボーナスまでRT「葉月タイム」の状態保持/初期化は本機固有の直接高信頼資料を確定できず **UNVERIFIED_AFTER_RESEARCH**。
- 設定変更専用の高確/RT優遇、朝一ボーナス/RT確率、公開リセットモード振り分けは **NONE_CONFIRMED_AFTER_RESEARCH / UNVERIFIED_AFTER_RESEARCH**。
- ガックン、初期出目、液晶/ランプ等による変更判別も本機固有の直接根拠を確定できず。
- 有利区間は5号機のため **NOT_APPLICABLE**。
- 一般的な5号機・ノーマル機の挙動から推測補完しない。

## CONFLICT / 注意

- 導入時期: K-Navi全国一斉導入＋2010-08-17当時解析 **2010-10-04**（納品10-03〜）、HAZUSE **2010-09-21**、メーカー公式 **2010年9月発売**。地域先行/発売月/全国一斉導入の定義差を含むため平均化しない。
- REG基本獲得: 当時解析＋A-SLOT保存説明 **最大約116枚** / 5号機クロニクル **最大104枚**。平均化せずCONFLICT保持。

## 主要出典（取得日 2026-09-04）

- ユニバーサル公式: `https://www.universal-777.com/product/slot/hazukichan/`
- K-Navi 2010年10月導入カレンダー: `https://p-kn.com/calendar/201010/`
- HAZUSE: `https://hazuse.com/machine/pachislot/0S0151/`
- 当時2010-08-17解析記事: `https://ameblo.jp/pachimatome/`
- A-SLOT保存実機説明: `https://www.a-slot.com/SHOP/eleco30.html`
- 5号機クロニクル ユニバーサル一覧: `https://5goki.com/universal`
- なな徹 ハナビシリーズ回顧: `https://nana-press.com/post/1570386`

## 今回のGitHub更新

- 519 出番だ！葉月ちゃん追加: `docs/real_machine_db/machines/2010-10-04_deban-da-hazuki-chan.md`
- レコード追加commit: `f7ad854c8a2fea94a1be238384b1cdadd7183e45`
- LATEST_HANDOFF: このコミット

## 遡及QA継続地点

- **ジャックポット・トロピカルバージョンまで補完済み**。
- machine tree上の次の候補は `docs/real_machine_db/machines/2006-11_kaidouou.md`。resetBehavior欠損なら次回QA対象。
- COMPLETE_CORE性能判定はreset欠損のみを理由に崩さず、reset QA状態を別管理する。

## 次回再開地点

1. **recordCount 519 / chronologicalFrontier 2010-10-04**。開始時は最新mainのREADME / mission / INDEX / LATEST_HANDOFF / 前線実レコードを必ず再取得。
2. **2010-10-04 K-Navi全国一斉導入群は5機種すべて登録済み**。メーカー別・当時業界記事で同日/先行日の漏れを最終監査し、重複追加しない。
3. 2010-10-05〜10-15境界を監査。K-Naviの次の明確なパチスロ節点は **2010-10-16 コルモ「天空のシンフォニア」**。境界に未登録がなければ520件目候補として進む。
4. その次はK-Navi基準 **2010-10-18「舞-HiME」（岡崎産業）/「ジャイアン」（ニューアーク）**。
5. 遡及QAは `2006-11_kaidouou.md` を次候補とする。
