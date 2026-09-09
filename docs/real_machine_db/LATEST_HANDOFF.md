更新日: 2026-09-09

## 現在地点
- recordCount: **1129**
- latestRecordAdded: **回胴性ミリオンアーサー**（ミズホ）
- latestRecordAddedPath: `docs/real_machine_db/machines/2017-09-04_kaidousei-million-arthur.md`
- chronologicalFrontier: **2017-09-04**
- frontierLatestMachine: **回胴性ミリオンアーサー — No.1129**
- schema: **resetBehavior v0.7**
- status: **2017-09-04_GROUP_OPEN**

## 今回の同期 / 進捗
- 最新mainの `README.md`、mission v0.7、旧 `INDEX.md`、`LATEST_HANDOFF.md`、直前No.1128「ぱちスロAKB48 勝利の女神」を再取得して開始。
- INDEXは初期19件時点の旧スナップショットのため、README規定どおり最新 `LATEST_HANDOFF.md` + 実レコードを進捗正本として採用。
- 開始時mainは **1128件 / chronologicalFrontier 2017-09-04 / 9/4群OPEN**。
- No.1129候補「回胴性ミリオンアーサー」の既存ファイル不存在を確認し新規登録。
- HAZUSEで **2017-09-04 / ミズホ / 型式 回胴性ミリオンアーサーBN / 検定番号 6S0693** を直接確認。パチビー・すろぱちくえすと・ちょんぼりすた・当時解析ブログでも導入日を照合。
- 性能コアは機械割 **98.4 / 99.6 / 101.4 / 104.3 / 107.1 / 110.0%**、ART初当たり **1/326.9 / 315.0 / 310.6 / 269.7 / 260.0 / 242.4**、BIG **1/431.2 → 1/354.2**、MB合算 **1/372.4 → 1/337.8**、ベース **約33G/50枚**。
- ART「エクスカリバーラッシュ」は **初期50G+α / 純増約1.3枚/G**。ボーナス込み純増は資料に **約1.7枚/G / 約1.8枚/G** の表記差があるため平均せず両表記を保持。
- BIG/ミリオンBIGは **204枚**、MBは **36枚（6G）**。
- 通常時は **1周期40G**。**15周期目以降**はカード昇格抽選が大幅優遇されるが、即ART確定型天井ではないため一般的なG数天井と分離。
- 設定変更時は **周期/天井進行RESET + 内部モードRESET**。純電源OFF→ONは比較表で **天井/周期進行CARRYOVER + 内部状態CARRYOVER** を確認。
- リセット専用の短縮周期天井、朝一専用モード、具体的モード/状態振り分け、確定高確スタート等は検索語・資料系統を変えて再探索したが固定できず、確認できた契約と分離して `UNVERIFIED_AFTER_RESEARCH` / `NONE_CONFIRMED_AFTER_RESEARCH`。
- 本機固有の確定的ガックン、ランプ、初期出目、開始ステージによる設定変更判別も十分な再探索後に直接固定できず `UNVERIFIED_AFTER_RESEARCH`。
- 据え置きと明記した独立操作契約は直接固定できず、純電断契約を推測で転記していない。
- 有利区間は **NOT_APPLICABLE_5TH_GEN_PRE_5_9**。

## No.1129 — 回胴性ミリオンアーサー
- manufacturer: **ミズホ**
- releaseDate: **2017-09-04**
- formalModelName: **回胴性ミリオンアーサーBN**
- certificationNumber: **6S0693**
- generation/system: **5号機（5.5号機世代） / A+ART / 40G周期CZ・ゲーム数上乗せ型**
- recordStatus: **COMPLETE_CORE_WITH_RESET_BEHAVIOR_V0_7**

### resetBehavior v0.7 要点
- settingChange: **周期/天井進行RESET / 内部モードRESET**。
- pure power OFF→ON: **周期/天井進行・内部状態CARRYOVER**。
- normal periodic threshold: **15周期目以降でカード昇格抽選大幅UP**。
- reset shortening: **NONE_CONFIRMED_AFTER_RESEARCH**。
- reset numeric mode/state distribution: **UNVERIFIED_AFTER_RESEARCH**。
- reset detection: **本機固有の確定ガックン/ランプ/初期出目/開始ステージ契約はUNVERIFIED_AFTER_RESEARCH**。

## 2017-09-04群 — OPEN
登録済み:
1. **パチスロ北斗の拳 新伝説創造 — No.1127**
2. **ぱちスロAKB48 勝利の女神 — No.1128**
3. **回胴性ミリオンアーサー — No.1129**

次候補:
1. **パチスロ笑ゥせぇるすまん3～笑撃のドーン～**
2. **亜人**
3. **デビルマンχ**
4. **アメイジング・スパイダーマン**
5. **セイクリッドセブン**
6. **YASUDA7**
7. 資料によっては **蒼き鋼のアルペジオ -アルス・ノヴァ-** 等も9/4表記があるため、地域導入/掲載定義差を横断監査する。

### 次候補の先行確認
- **パチスロ笑ゥせぇるすまん3～笑撃のドーン～** はPiDEA X、K-Navi、ちょんぼりすた、すろぱちくえすと等で **2017-09-04** 導入一致。
- PiDEA Xは2017-07-12内覧会と導入予定9/4を報道。次回No.1130候補として優先。

## 遡及 resetBehavior QA
- retroQaScanConfirmedThrough: **2006-06_churahime-sun.md**。
- retroQaStatus: **SEQUENTIAL_SCAN_ACTIVE**。
- 次カーソル: `docs/real_machine_db/machines/2006-06_thunderbirds-neo-xx.md`。
- 今回は本線No.1129を優先し、QAカーソルは進めていない。

## 次回再開地点
1. 最新mainの README / mission v0.7 / INDEX / LATEST_HANDOFF / No.1129を再取得。
2. **1129件 / chronologicalFrontier 2017-09-04 / 9/4群OPEN** を正本として継続。
3. 最優先は **「パチスロ笑ゥせぇるすまん3～笑撃のドーン～」No.1130候補**。重複確認後、performance core + resetBehavior v0.7を収集。
4. 同機は設定変更時の天国移行率・笑ゥポイント等に公開数値があるため、通常モード移行全表へ拡張せず朝一関連値だけを取得する。
5. その後9/4群を全メーカー・表記揺れ・地域導入差まで横断し、候補を順次登録してからCLOSED判定。
6. 遡及QAは `docs/real_machine_db/machines/2006-06_thunderbirds-neo-xx.md` から継続。

## 主要出典 — 取得日 2026-09-09
### No.1129 回胴性ミリオンアーサー
- HAZUSE 型式/検定番号/導入日: https://hazuse.com/machine/pachislot/6S0693/genre/202/
- HAZUSE 初打講座/周期構造: https://hazuse.com/machine/pachislot/6S0693/genre/203/
- パチビー 機種/ART仕様: https://www.pachibee.jp/machines/about/217080006
- ちょんぼりすた スペック/天井/朝一比較: https://chonborista.com/slot/universal-slot/44512/
- すろぱちくえすと スペック/獲得枚数/ART仕様: https://www.slopachi-quest.com/article/million-arthur/
- 当時解析ブログ 設定変更/性能値: https://slotkaiseki.hatenablog.com/entry/MillionArthur
- パチナビ 型式/検定番号/解析照合: https://pachinavi.net/machines/million-arthur/

### 次候補 笑ゥせぇるすまん3
- PiDEA X 内覧会/導入予定日: https://www.pidea.jp/articles/%E7%AC%91%E6%92%83%E3%83%93%E3%82%B8%E3%83%A7%E3%83%B3%E3%81%8C%E3%83%89%E3%83%BC%E3%83%B3%EF%BC%81%E3%80%8C%E7%AC%91%E3%82%A5%E3%81%9B%E3%81%87%E3%82%8B%E3%81%99%E3%81%BE%E3%82%933%E3%80%8D%EF%BC%8F%E4%B8%89%E6%B4%8B
- K-Navi: https://p-kn.com/slot/2855/
- ちょんぼりすた: https://chonborista.com/slot/sanyo-slot/43684/
- すろぱちくえすと: https://www.slopachi-quest.com/article/warau-salesman3/
