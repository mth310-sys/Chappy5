# 実機DB 最新リレー引継ぎ

更新日: 2026-09-03

## 現在地点

- recordCount: **501**
- latestMachineAdded: **ゴルゴ13 あの男に連絡だ!**（オリンピア製造 / 平和 / 2010-08-02）
- latestRecord: `docs/real_machine_db/machines/2010-08-02_golgo13-ano-otoko-ni-renrakuda.md`
- chronologicalFrontier: **2010-08-02**
- frontierLatestMachine: **ゴルゴ13 あの男に連絡だ!**
- schema: **resetBehavior v0.7**
- status: **READY_TO_CONTINUE**

## 今回の継続確認

- 最新mainの `README.md`、正本ミッション `docs/CHAPPY5_REAL_MACHINE_DATABASE_MISSION_V01.md` v0.7、`INDEX.md`、`LATEST_HANDOFF.md`、前線500実レコード「科学忍者隊ガッチャマンGR」を再取得。
- `INDEX.md` は旧19件地点のためREADME規定どおり `LATEST_HANDOFF.md`＋main実レコードを進捗正本として使用。
- 開始時正本地点は recordCount **500** / chronologicalFrontier **2010-07-26**。
- K-Navi 2010年7月全国一斉導入カレンダーでは7/26「科学忍者隊ガッチャマンGR」が月内最後のパチスロ掲載。7/27〜8/1について導入日・メーカー別・機種一覧系統でも再監査し、本線へ割り込む全国導入機を今回確定できなかった。
- LATEST_HANDOFF指定の2010-08-02候補「ゴルゴ13 あの男に連絡だ!」「ギラギラ爺サマー」をrepo検索し双方未登録を確認。記載順に「ゴルゴ13 あの男に連絡だ!」を501件目として追加。
- 書き込み直前にもLATEST_HANDOFFを再取得し500地点のまま＝別リレー先行更新なしを確認してから追加した。

## 501 — ゴルゴ13 あの男に連絡だ! 要約

- メーカー: **オリンピア製造 / 平和**
- 型式名: **UNVERIFIED_AFTER_RESEARCH**
- 検定番号: **UNVERIFIED_AFTER_RESEARCH**
- 導入主値: **2010-08-02**（K-Navi / 必勝本）。グリーンべるとの**2010-08-01**は納品開始予定で定義差として分離。
- 世代/タイプ: **5号機 / A+ART / CZ経由セットストックART / 無限ART**
- 機械割（必勝本シミュレート）: **97.17 / 99.73 / 102.34 / 105.00 / 107.65 / 112.08%**。グリーンべると端点97.3〜112.1%と丸め差で整合。
- ボーナス合算: **1/229.95 / 1/222.91 / 1/216.29 / 1/210.05 / 1/204.16 / 1/198.59**
- BIG合算: **1/344.9 / 1/334.4 / 1/324.4 / 1/315.1 / 1/306.2 / 1/297.9**
- REG: **1/689.85 / 1/668.73 / 1/648.87 / 1/630.15 / 1/612.49 / 1/595.78**
- 50枚ベース: **約32.5G/1000円**（当時グリーンべると直接値）
- SGB **約240枚** / GB **約180枚** / REG **約60枚**
- ART「ゴルゴチャンス」: **13G / 約+1.3枚/G**
- 無限ART「スーパーゴルゴチャンス」: **次回ボーナスまで / 約+1.3枚/G**
- 天井: **3択リプレイ失敗後999Gで無限ART**
- coreStatus: **COMPLETE_CORE_RESET_BEHAVIOR_PARTIAL_MODEL_APPROVAL_UNVERIFIED**

## resetBehavior v0.7 — ゴルゴ13 あの男に連絡だ!

- **設定変更**: P-WORLDで**内部G-チャレンジ状態からスタート**を直接確認。
- **据え置き**: 999G進捗、G-チャレンジ、ARTストックの据え置き継承を直接確定できず `UNVERIFIED_AFTER_RESEARCH`。後年「宵越し天井」実戦説明は補助証拠のみ。
- **電源OFF→ON**: 999G進捗、CZ、ARTストック、リール初期挙動とも本機固有資料を確定できず `UNVERIFIED_AFTER_RESEARCH`。
- **ゲーム数/天井**: **3択リプレイ失敗後999G**で無限ART。設定変更時の前日999G進捗の厳密な消去処理は直接本文を確定できず、後年整理資料の「宵越し× / リセットCZスタート」をSECONDARYとして保持し、主値は `UNVERIFIED_AFTER_RESEARCH`。
- **モード/状態**: 長期ゲーム数解除モードは確認されず。設定変更後の主要状態として**G-チャレンジ**開始を確認。それ以外の高低状態やARTストック処理は未確認。
- **有利区間**: **NOT_APPLICABLE**（5号機・制度前）。
- **朝一恩恵**: 設定変更直後からG-チャレンジで3択成功ならARTへ直結可能。
- **朝一不利**: 前日天井進捗喪失を示唆する二次資料はあるが高信頼の直接解析本文未回収のため断定しない。
- **変更判別**: P-WORLDは**朝イチからARTに突入すれば設定変更の可能性大**と明記。確定法ではない。ガックン/初期出目/ランプ等は `UNVERIFIED_AFTER_RESEARCH`。
- **公開朝一数値**: 通常天井**999G**、設定変更後開始状態**G-チャレンジ**。固定短縮天井、設定変更専用当選率、恩恵率は `NONE_CONFIRMED_AFTER_RESEARCH`。

## resetBehavior 遡及QA — 継続地点

- `2006-11_jack-to-mamenoki.md` までv0.7遡及追加済み、という既存正本進捗を維持。
- ジャックと豆の木直後の実在 `resetBehavior` 欠損ファイルを順序保証付きで確定してから補完する。推測でQA進捗を進めない。
- 新規機種の時系列前進を止めない。

## 主要出典（取得日 2026-09-03）

### ゴルゴ13 あの男に連絡だ!
- グリーンべると 2010-06-16: `https://web-greenbelt.jp/00006599/`
- K-Navi 展示会速報 2010-06-15: `https://p-kn.com/topics/exhibition/677/`
- P-WORLD: `https://www.p-world.co.jp/machine/database/6007`
- パチ＆スロ必勝本 基本スペック: `https://p.hisshobon.jp/machine/1638/1/25474`
- パチマガスロマガ 基本システム: `https://cs62.cs-plaza.com/g/pachi/pla/s_conq/olympia_slot/92/a.php`
- VideoMarket 珍台さん!いらっしゃ～い!! #32前編: `https://www.videomarket.jp/title/288003/A288003062999H01`
- 天井ハイエナ生活 期待値リスト: `https://macerate.seesaa.net/article/226196713.html`

## 今回のGitHub更新

- 501 ゴルゴ13 あの男に連絡だ!追加: commit `f2f0c872a32a6818445656dd8a07c6c30bae9b19`
- LATEST_HANDOFF更新: このコミット

## 次回再開地点

1. **recordCount 501 / chronologicalFrontier 2010-08-02**。開始時は必ず最新mainのREADME / mission / INDEX / LATEST_HANDOFF / 前線実レコードを再取得。
2. **2010-08-02同日群を継続**。最優先の未処理候補は **「ギラギラ爺サマー」（大都技研）**。repo重複を再確認して502件目候補とする。
3. 8/2同日群はK-Navi月間カレンダー、P-WORLD導入カレンダー、メーカー別一覧、当時業界記事で再監査し、ほかのパチスロがあれば導入日定義を比較して漏れ防止を優先する。
4. 「ギラギラ爺サマー」はグリーンべるとで納品開始2010-08-01予定、K-Naviでホール導入2010-08-02を確認済み。物流開始と全国導入を分離して扱う。
5. 遡及QAは `2006-11_jack-to-mamenoki.md` 直後の実在resetBehavior欠損パス確定から再開。
6. 501の後続QA対象は型式名、検定番号、単純電源OFF→ON、999G天井進捗の設定変更/据え置き処理、ARTストック処理、ガックン/初期出目。既存性能コアは再調査しない。
