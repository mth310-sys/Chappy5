# 実機DB 最新リレー引継ぎ

更新日: 2026-09-07

## 現在地点

- recordCount: **839**
- latestRecordAdded: **沖ドキ！-30**（アクロス）— 2014-08-18
- latestRecord: `docs/real_machine_db/machines/2014-08-18_okidoki-30.md`
- chronologicalFrontier: **2014-08-18**
- frontierLatestMachine: **沖ドキ！-30**
- schema: **resetBehavior v0.7**
- status: **2014-08-18_GROUP_CLOSED_FOR_CURRENT_RESEARCH**

## 今回の同期 / 正本確認

- 最新mainの `README.md`、`docs/CHAPPY5_REAL_MACHINE_DATABASE_MISSION_V01.md`、`docs/real_machine_db/INDEX.md`、`docs/real_machine_db/LATEST_HANDOFF.md`、838件目 `2014-08-18_okidoki.md` を再読。
- INDEXは19件表記の旧集約状態のため、README規定どおり **LATEST_HANDOFF + 実レコード** を進捗正本として使用。
- 作業開始時の正本は **838件 / 2014-08-18 / 08-18_GROUP_OPEN**。
- 前回handoff指定の「沖ドキ！-30」独立性確認を完了し、No.839として登録。
- 遡及QAは `2007-02_pachislot-tekken-den-tough.md` をv0.7再QA。

## 今回追加 — 沖ドキ！-30

### 独立レコード判定

- P-WORLDは **「沖ドキ!‐30」** を25Φ版とは別DBページとして掲載。
- 1GAME/一撃系も **沖ドキ！-30専用解析ページ**を持つ。
- 中古実機/業界報道で型式表記 **沖ドキ！LL-30** を確認。25Φ版の `沖ドキ！LL` と型式名が異なる。
- 本DBにはCT5/CT30等の径違い独立レコード前例があるため、資料上の独立性を十分固定できたと判断。
- 30Φ版検定番号は今回高信頼固定できず `UNVERIFIED_AFTER_RESEARCH`。

### 性能コア

- manufacturer: **アクロス**。
- hall start: **2014-08-18**。
- type: **5号機 / モード管理型AT / 疑似ボーナス / 完全告知 / 30Φ**。
- 型式: **沖ドキ！LL-30**。
- 機械割: **97.0 / 99.7 / 101.7 / 103.9 / 106.2 / 107.9%**。
- BIG: **1/394.1 → 1/322.6**。
- REG: **1/632.1 → 1/452.1**。
- 合成: **1/242.8 → 1/188.3**。
- 50枚ベース: **約23G**。
- 純増: **約3.0枚/G**。
- BIG **70G / 約210枚**、REG **30G / 約90枚**。
- 天井: 通常A/B **999G**、引き戻し/チャンス **199G**、天国以上/保証 **31G**。
- coreStatus: **COMPLETE_CORE**。

## resetBehavior v0.7 — 沖ドキ！-30

- 設定変更: **天井G RESET / 内部モード再抽選**。
- 電源OFF→ONのみ: **天井G CARRYOVER / モード CARRYOVER**。
- 据え置き: 電断契約と整合するCARRYOVER支持。純据え置き単独一次対照表は未取得。
- 設定変更時モード振り分け:
  - 通常A **57.03%**
  - 通常B **9.77%**
  - チャンス **33.20%**
- チャンス選択時最大天井 **199G（実質200G）**。
- 有利区間: **NOT_APPLICABLE_5TH_GEN_PRE_5_9**。
- 朝一独立高確/低確状態: `NONE_CONFIRMED_AFTER_RESEARCH`。
- 変更判別: 本機固有の確実なガックン判別は `UNVERIFIED_AFTER_RESEARCH`。
- publicMorningNumbers: **57.03 / 9.77 / 33.20%**。
- resetBehaviorQA: **COMPLETE_WITH_SOURCE_LIMITS**。

## 2014-08-18群監査 — CLOSED_FOR_CURRENT_RESEARCH

- No.838 **沖ドキ！ 25Φ** と No.839 **沖ドキ！-30** を処理。
- `2014-08-18 / 8月18日 / パチスロ / 新台 / 導入開始 / ホール導入 / 納品` を組み替え、業界記事・K-Navi・P-WORLD・HAZUSE・メーカー系列/機種DBを横断。
- パチンコ「CRぱちんこAKB48 バラの儀式」等は対象外。
- P-WORLDの「最終更新日2014/08/25」を導入日と誤認しない。例として「不二子～100億$の女神～」は実導入2012-01-03。
- 今回の検索範囲では、08-18同日群に上記2派生以外の未登録5号機を具体日で固定できなかったため **2014-08-18_GROUP_CLOSED_FOR_CURRENT_RESEARCH**。

## 遡及 resetBehavior QA — パチスロ鉄拳伝タフ

- `coreStatus: COMPLETE_CORE`は維持。
- v0.7項目を明示し、resetQaLastUpdatedを2026-09-07へ更新。
- 通常時ゲーム数天井なし相当、BIG後100P/REG後12Pの完走型RT仕様は再確認。
- 設定変更/据え置き/純電断時の **RT残G数・RT内部状態処理**を、旧攻略、設定判別DB、P-WORLD系、2008年回顧、中古実機資料まで変えて再探索したが直接固定できず `UNVERIFIED_AFTER_RESEARCH`。
- 本機固有ガックン/初期出目等も未固定。
- publicMorningNumbers: `NONE_CONFIRMED_AFTER_RESEARCH`。
- resetBehaviorQA: **PARTIAL** 維持。性能COMPLETE_COREは崩していない。
- Git履歴上、鉄拳伝タフ直後に追加された次レコードは `docs/real_machine_db/machines/2007-02_new-hanahana-30.md`（ニューハナハナ-30）。

## 遡及 resetBehavior QA カーソル

- 次: `docs/real_machine_db/machines/2007-02_new-hanahana-30.md`（ニューハナハナ-30）。
- 新規収集を止めず、本線と並行して1件ずつ前進する。

## safeguard

- 初代沖ドキ系に `トロピカル / パラダイス / DUO / GOLD / BLACK / ゴージャス`の後継機reset値を流用しない。
- 特に後継機のチャンス約39.8%、399G短縮等を初代へ混入させない。
- `999G/1000G`, `199G/200G`, `31G/32G`は内部最大規定Gと告知レンジの定義差として保持しCONFLICT化しない。
- P-WORLDの「最終更新日」はホール導入日ではない。必ず導入アンカーを別資料で確認する。
- 2015-06-08到達時の **吉宗～極～（ヨシムネH2A4 / 3S1093）** 正式量産版処理注意を維持。

## 次回再開地点

1. **recordCount 839 / chronologicalFrontier 2014-08-18 / 08-18_GROUP_CLOSED_FOR_CURRENT_RESEARCH** から開始。
2. 最新mainで README / mission / INDEX / LATEST_HANDOFF / 839件目を再確認。
3. **2014-08-19〜月末の境界監査**を行い、次の具体的ホール導入日を固定する。
4. 発見した次の未処理5号機を性能コア+resetBehavior v0.7で登録する。
5. 遡及QAは **`2007-02_new-hanahana-30.md`** から再開。

## 主要出典 — 取得日 2026-09-07

### 沖ドキ！-30
- P-WORLD: `https://www.p-world.co.jp/machine/database/7495`
- 一撃/1GAME系 30Φトップ: `https://1geki.jp/slot/okidoki30/`
- 一撃/1GAME系 天井・設定変更・電源ON/OFF: `https://1geki.jp/slot/okidoki30/3/`
- 一撃/1GAME系 モード移行: `https://1geki.jp/slot/okidoki30/62/`
- 中一商事 型式表示: `https://www.nakaiti.com/html/sAcross088.html`
- グリーンべると 旧規則機型式報道: `https://web-greenbelt.jp/post-47383/`
- グリーンべると 2014-08-01全国展開: `https://web-greenbelt.jp/00007110/`

### 鉄拳伝タフ QA
- パチマガスロマガ基本: `https://cs62.cs-plaza.com/g/pachi/pla/s_conq/oizumineo_slot/02/a.php`
- パチマガスロマガRT: `https://cs62.cs-plaza.com/g/pachi/pla/s_conq/oizumineo_slot/02/k_1.php`
- pacnk: `https://pacnk.com/slot/tools/sh_tekkendentafu.html`
- 回顧解析: `https://plaza.rakuten.co.jp/slotlife777/`
