# 実機DB 最新リレー引継ぎ

更新日: 2026-09-04

## 現在地点

- recordCount: **579**
- latestMachineAdded: **鬼浜外伝 ハヤト疾風伝**（高砂電器産業 / primary 2011-06-17、導入開始/納品開始の日付定義差あり）
- latestRecord: `docs/real_machine_db/machines/2011-06-17_onihama-gaiden-hayato-shippuden.md`
- chronologicalFrontier: **2011-06-17**
- frontierLatestExactDateMachine: **鬼浜外伝 ハヤト疾風伝**
- schema: **resetBehavior v0.7**
- status: **READY_TO_CONTINUE**

## 今回の継続確認

- 最新mainの `README.md`、正本ミッションv0.7、`INDEX.md`、`LATEST_HANDOFF.md`、前線レコード「蝶々乱舞」を再取得して開始。
- `INDEX.md` は旧情報を含むため、README規約どおり最新 `LATEST_HANDOFF.md` とmachineレコードを進捗正本として使用。
- 2011-06-14〜06-19境界を再監査し、repo未登録の **鬼浜外伝 ハヤト疾風伝** を579件目として追加。
- 導入日は HAZUSE **2011-06-17導入開始** / 当時グリーンべると **2011-06-19納品開始**。定義差を平均せず保持し、主releaseDateは具体的な導入開始日2011-06-17を採用。

## 今回追加 — 579 鬼浜外伝 ハヤト疾風伝

- メーカー: **高砂電器産業**
- 型式名: **鬼浜外伝ハヤト疾風伝**
- 検定番号: **1S0286**
- 5号機 / **A+ART**
- PAYOUT: **97.1 / 99.1 / 100.1 / 103.9 / 107.0 / 110.1%**
- BIG+疾風ボーナス: **1/255.0 / 1/255.0 / 1/249.2 / 1/249.2 / 1/245.5 / 1/241.8**
- BG: **1/1110.8 / 1/1110.8 / 1/1040.3 / 1/1040.3 / 1/978.2 / 1/978.2**
- ボーナス合算: **1/207.39 / 1/207.39 / 1/201.03 / 1/201.03 / 1/196.22 / 1/193.89**
- ART初当たり: **1/451.3 / 1/402.2 / 1/397.8 / 1/366.8 / 1/326.3 / 1/272.1**
- BIG約207枚 / 疾風ボーナス最大198枚 / BG約50枚
- ART「ハヤブサRUSH」: **基本50G+α、約+1.4枚/G**。当時業界記事の上乗せ幅 **10〜150G**。
- 天井: **ボーナス間1280G消化 → 最低150GのART**。
- 50枚ベース: 同じ旧パチマガスロマガ資料系統に **36.83〜37.57G/1000円** と **34.70〜35.35G/1000円** の2版が残存。小役確率も版間で異なるため、訂正前後を断定せず **CONFLICT_SAME_ARCHIVE_REVISION**。

### resetBehavior v0.7 — 579

- 旧パチマガスロマガの本機ページに **「朝イチ・設定変更」** 解析項目が存在することを確認。
- ただし具体本文を安全に回収できず、設定変更時の1280G天井進捗 CLEAR/RETAIN、通常時モード、CZ/前兆、ARTストック・残G等は **UNVERIFIED_AFTER_RESEARCH**。一般的5号機挙動から補完しない。
- 据え置き時の天井進捗・内部状態、単純電源OFF→ON、ガックン/出目/液晶等の変更判別も **UNVERIFIED_AFTER_RESEARCH**。
- 設定変更専用短縮天井、朝一特定G以内ART率等の比較可能な公開朝一数値は **NONE_CONFIRMED_AFTER_RESEARCH**。
- 有利区間は **NOT_APPLICABLE**。
- reset QA状態は性能コアと分離し、`COMPLETE_CORE_RESET_BEHAVIOR_PARTIAL`。既存性能完了判定をreset欠損だけで崩していない。

## 主要出典 — 579（取得日 2026-09-04）

- HAZUSE: `https://hazuse.com/machine/pachislot/1S0286/`
  - 型式名、検定番号1S0286、メーカー、導入開始2011-06-17
- P-WORLD: `https://www.p-world.co.jp/machine/database/6381`
  - 5号機A+ART、BIG207枚/疾風最大198枚/BG約50枚、ART50G・約+1.4枚/G、天井1280G→最低150G ART
- グリーンべると: `https://news.p-world.co.jp/articles/4675/greenbelt`
  - 2011-05-17当時記事、高砂電器産業、ART50G+α・約+1.4枚/G、上乗せ10〜150G、CZ期待度、ボーナス合算1/207.4〜1/193.9、出玉率97.1〜110.1%、2011-06-19納品開始
- パチマガスロマガ旧解析: `https://cs62.cs-plaza.com/g/pachi/pla/s_conq/takasago_slot/01/takasago_slot_01.php`
  - 本機専用「天井」「朝イチ・設定変更」解析項目の存在
- 同旧解析 `h-1.php` / `c.php` / `c-1.php`
  - ボーナス・ART・PAYOUT、1000円あたりG数2版のCONFLICT
- 5号機クロニクル `https://5goki.com/konami`
  - 性能値の後年クロスチェック

## 遡及QA継続地点

- **怪胴王 (`docs/real_machine_db/machines/2006-11_kaidouou.md`) まで補完済み**を維持。
- `2006-11-27_thunder-v-special.md` は既にresetBehavior収集済みのため重複QA対象外。
- recursive tree / machine listingを再取得したが、怪胴王直後の「最初の実在resetBehavior欠損path」を順序保証付きで一意確定できるところまで今回は到達しなかった。QA済み範囲は推測で動かさない。

## 次回再開地点

1. **recordCount 579 / chronologicalFrontier 2011-06-17**。最新main README / mission / INDEX / LATEST_HANDOFF / 578・579レコードを再取得。
2. **2011-06-17同日群を最終監査 → 06-18以降の最古未登録機**を処理。
3. 既知後続候補は **リオスパ Rioの大温泉（2011-06-20候補）**、**プロゴルファー猿（2011-06-20 / 06-27の資料差候補）**。他の06-18〜19機を先に確認し、時系列を飛ばさない。
4. 後続に **ハネスロ林家一家（2011-06-26納品開始予定）**、**スカイラブ3（2011-06-27ホール導入）**を保持。
5. 遡及QAは怪胴王直後の実machine pathをtree順に直接確定し、`resetBehavior`欠損なら補完。既収集なら次へ送り、最初の欠損から再開する。
6. PARTIAL/UNVERIFIEDは表記揺れ・型式・メーカー・シリーズ・reset検索語を変え、公式/業界/当時解析/旧DB/アーカイブ/回顧資料を横断した後だけ残す。CONFLICTは平均しない。
