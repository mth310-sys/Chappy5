# 実機DB 最新リレー引継ぎ

更新日: 2026-09-03

## 現在地点

- recordCount: **500**
- latestMachineAdded: **科学忍者隊ガッチャマンGR**（岡崎産業 / 主値2010-07-26）
- latestRecord: `docs/real_machine_db/machines/2010-07-26_kagaku-ninjatai-gatchaman-gr.md`
- chronologicalFrontier: **2010-07-26**
- frontierLatestMachine: **科学忍者隊ガッチャマンGR**
- schema: **resetBehavior v0.7**
- status: **READY_TO_CONTINUE**

## 今回の継続確認

- 最新mainの `README.md`、正本ミッション `docs/CHAPPY5_REAL_MACHINE_DATABASE_MISSION_V01.md` v0.7、`INDEX.md`、`LATEST_HANDOFF.md`、前線499実レコードを再取得。
- `INDEX.md` は旧地点のためREADME規定どおり `LATEST_HANDOFF.md`＋main実レコードを進捗正本として使用。
- 開始時正本地点は recordCount **499** / chronologicalFrontier **2010-07-20** / 最新「幕末浪漫 月華の剣士外伝～あかりと七つの妖珠～」。
- 2010-07-20同日群の主要候補は既存499までで処理済み。LATEST_HANDOFF指定候補「科学忍者隊ガッチャマンGR」をrepo検索し未登録を確認して500件目として追加。
- 書き込み直前にも最新mainのコミット列を再確認し、別リレーによる実機DB先行更新がない状態で追加した。

## 500 — 科学忍者隊ガッチャマンGR 要約

- メーカー: **岡崎産業**
- 型式名: **ガッチャマン**（2010年当時グリーンべると）
- 検定番号: **UNVERIFIED_AFTER_RESEARCH**
- 導入主値: **2010-07-26**（K-Navi全国一斉導入開始日）
- 導入日競合: HAZUSE **2010-07-23**。グリーンべるとの**2010-08-15**は「割勘」販路の納品開始で通常全国導入とは別定義。
- 世代/タイプ: **5号機 / A+ART / 次回ボーナスまで継続するストック型ART**
- 機械割: **97.25 / 98.99 / 101.08 / 104.23 / 107.42 / 112.62%**
- BIG合算: **1/399.61 / 1/390.10 / 1/381.02 / 1/360.09 / 1/341.33 / 1/330.99**
- REG: **1/399.61 / 1/390.10 / 1/381.02 / 1/360.09 / 1/341.33 / 1/330.99**
- ボーナス合算: **1/199.80 / 1/195.05 / 1/190.51 / 1/180.04 / 1/170.67 / 1/165.49**
- 50枚ベース: **37.04 / 37.48 / 37.92 / 38.39 / 38.65 / 39.37G/1000円**（当時パチマガスロマガ精密値）。HAZUSE概算36.5〜38.7Gと小差あり。
- BIG **約210枚** / REG(BG) **約63枚**。
- ART「ゴッドラッシュ」: **約+1.0枚/G**、次回ボーナスまで継続、1回の当選で最低2〜最大7セット。
- 内部状態: **低確 / 通常 / 高確 / 超高確**。
- ゲーム数天井: ボーナス後のパンクリプレイ入賞後、通常状態**1280G**でART突入。別にART非当選BIG回数天井あり。
- coreStatus: **COMPLETE_CORE_RESET_BEHAVIOR_PARTIAL_APPROVAL_NUMBER_UNVERIFIED_RELEASE_DATE_CONFLICT**

## resetBehavior v0.7 — 科学忍者隊ガッチャマンGR

- **設定変更**: 後年5号機天井整理資料で、**1280G天井までのゲーム数は設定変更後もクリアされない**、かつ**高確率状態からスタート**と明記。当時パチマガスロマガには設定変更専用解析項目の存在を確認したが、検索可能本文から詳細を直接回収できなかったため信頼度は `ANALYSIS_SECONDARY`。
- **据え置き**: 設定変更でも1280G進捗非クリアのため、据え置き時も前日進捗利用可能と整合。ARTストック、ART非当選BIG回数天井、4状態の保持範囲は `UNVERIFIED_AFTER_RESEARCH`。
- **電源OFF→ON**: 1280Gカウンタ、4状態、ARTストック、回数天井の単純電源再投入時処理は `UNVERIFIED_AFTER_RESEARCH`。設定変更と同一視しない。
- **ゲーム数/天井**: 通常天井**1280G**。設定変更でカウンタ非クリア。リセット専用短縮天井は `NONE_CONFIRMED_AFTER_RESEARCH`。
- **モード/状態**: 長期ゲーム数モードは確認されず。低確/通常/高確/超高確の4状態あり。設定変更後は高確率状態スタートという公開情報あり。具体振り分け率は未確認。
- **有利区間**: **NOT_APPLICABLE**（5号機・制度前）。
- **朝一恩恵**: 設定変更時の**高確率状態スタート**。1280G天井進捗を消さないため、変更で宵越し天井を潰す仕様ではない。
- **朝一不利**: 明確な公開不利要素は `NONE_CONFIRMED_AFTER_RESEARCH`。ARTストック/回数天井の処理は未確認。
- **変更判別**: 機種名/型式/メーカーとガックン・初期出目・リール・朝一ステージ等まで変えて再探索したが、本機固有の確定法は `UNVERIFIED_AFTER_RESEARCH`。高確示唆ステージは内部状態推測であり変更確定法とは扱わない。
- **公開朝一数値**: 通常天井**1280G**、設定変更後はその進捗**非クリア**。高確スタートの具体率、朝一特定G以内当選率、リセット恩恵率は `NONE_CONFIRMED_AFTER_RESEARCH`。

## resetBehavior 遡及QA — 継続地点

- `2006-11_jack-to-mamenoki.md` までv0.7遡及追加済み、という既存正本進捗を維持。
- ジャックと豆の木直後の実在 `resetBehavior` 欠損ファイルを順序保証付きで確定してから補完する。推測でQA進捗を進めない。
- 新規機種の時系列前進を止めない。

## 主要出典（取得日 2026-09-03）

### 科学忍者隊ガッチャマンGR
- 岡崎産業 〜2010年販売機種: `https://okazakisangyo.com/machine/past/`
- グリーンべると 2010-04-22: `https://web-greenbelt.jp/00002642/`
- K-Navi 2010年7月導入カレンダー: `https://p-kn.com/calendar/201007/`
- HAZUSE DATA: `https://data.hazuse.com/?machine_code=SX0035`
- パチマガスロマガ 基本システム: `https://cs62.cs-plaza.com/g/pachi/pla/s_conq/okazaki_slot/61/a.php`
- パチマガスロマガ ボーナス確率/PAYOUT: `https://cs62.cs-plaza.com/g/pachi/pla/s_conq/okazaki_slot/61/h.php`
- パチマガスロマガ 1000円あたりゲーム数: `https://cs62.cs-plaza.com/g/pachi/pla/s_conq/okazaki_slot/61/c.php`
- P-WORLD: `https://www.p-world.co.jp/machine/database/5953`
- パチスロ立ち回り講座 5号機天井: `https://crankyseven.com/sp/tenjo-5ka.htm`
- グリーンべると 2010-07-29: `https://web-greenbelt.jp/00006631/`

## 今回のGitHub更新

- 500 科学忍者隊ガッチャマンGR追加: commit `0a5df306beebfa4ad829082e61c803fd6ed73891`
- LATEST_HANDOFF更新: このコミット

## 次回再開地点

1. **recordCount 500 / chronologicalFrontier 2010-07-26**。開始時は必ず最新mainのREADME / mission / INDEX / LATEST_HANDOFF / 前線実レコードを再取得。
2. **2010-07-26同日群の最終漏れ監査**後、2010-07-27〜08-01境界を監査する。
3. K-Navi全国導入カレンダー上、次の明確なパチスロ群は **2010-08-02「ゴルゴ13 あの男に連絡だ!」（オリンピア）／「ギラギラ爺サマー」（大都技研）**。repo重複確認後、最古未処理から501件目候補とする。
4. 8/2群へ進む前に7月末のメーカー別一覧・当時業界記事で漏れを再確認する。
5. 遡及QAは `2006-11_jack-to-mamenoki.md` 直後の実在resetBehavior欠損パス確定から再開。
6. 500の後続QA対象は検定番号、単純電源OFF→ON、ARTストック/ART非当選BIG回数天井の設定変更処理、高確スタート具体率、ガックン/初期出目等の変更判別。既存性能コアは再調査しない。
