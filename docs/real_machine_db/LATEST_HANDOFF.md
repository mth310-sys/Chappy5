更新日: 2026-09-09

## 現在地点
- recordCount: **1063**
- latestRecordAdded: **ドキドキマンゴー-25**（パイオニア）
- latestRecordAddedPath: `docs/real_machine_db/machines/2017-04-03_dokidoki-mango-25.md`
- chronologicalFrontier: **2017-04-03**
- frontierLatestMachine: **ドキドキマンゴー-25 — No.1063**
- schema: **resetBehavior v0.7**
- status: **2017-04-03_GROUP_OPEN**

## 今回の同期 / 進捗
- 最新mainの `README.md`、mission v0.7、旧 `INDEX.md`、`LATEST_HANDOFF.md`、No.1062実レコードを取得して開始。
- INDEX本文は初期19件時点の旧スナップショットのため、README規定どおり最新handoffと実レコードを直近進捗正本として採用。
- 開始時mainは **1062件 / chronologicalFrontier 2017-04-03 / 2017-04-03_GROUP_OPEN**。次候補は「ドキドキマンゴー-25」。
- No.1063として **ドキドキマンゴー-25** を登録。
- K-NaviとP-WORLDで2017-04-03導入、25φ独立仕様、設定別BIG/MID/REG/合算、機械割、基本獲得枚数を照合。
- 25φと30φは機械割系列は同じだがボーナス確率が異なるため別レコードを維持。
- 25φ固有の50枚ベースは検索語・資料系統を変えて再探索したが直接固定できず、30φの約35Gを流用せず `UNVERIFIED_AFTER_RESEARCH`。
- 設定変更/据え置き/純電源OFF→ONについては、通常ゲーム数天井・周期・AT/ART/CZ・ゲーム数モードが非搭載のため該当項目を `NOT_APPLICABLE`。設定変更専用の朝一高確、短縮天井、専用モード、初当り優遇、確定的ガックン/初期出目/ランプ判別は `NONE_CONFIRMED_AFTER_RESEARCH`。

## No.1063 — ドキドキマンゴー-25
- manufacturer: **パイオニア**
- releaseDate: **2017-04-03**
- formalModelName: **UNVERIFIED_AFTER_RESEARCH**
- certificationNumber: **UNVERIFIED_AFTER_RESEARCH**
- generation/system: **5号機 / ノーマルA / 完全告知 / 25φ / BIG+MID+REG**
- recordStatus: **COMPLETE_CORE_WITH_RESET_BEHAVIOR_V0_7_BASE_UNVERIFIED**

### performanceCore
- 機械割: **98 / 99 / 100 / 103 / 106 / 110%**。
- BIG: **1/286 / 282 / 277 / 264 / 250 / 239**。
- MID: **1/1213 / 1170 / 1110 / 993 / 862 / 789**。
- REG: **1/712 / 704 / 704 / 697 / 697 / 689**。
- ボーナス合算: **1/174 / 172 / 168 / 160 / 151 / 144**。
- 50枚ベース: **UNVERIFIED_AFTER_RESEARCH**。
- BIG最大300枚 / MID最大200枚 / REG最大100枚。
- ノーマルタイプのためAT/ART純増は `NOT_APPLICABLE`。

### resetBehavior v0.7
- ゲーム数天井・周期天井・AT/ART/CZ・ゲーム数モード: `NOT_APPLICABLE`。
- 設定変更専用の短縮天井・朝一高確・専用モード・初当り優遇: `NONE_CONFIRMED_AFTER_RESEARCH`。
- 据え置き/純電源OFF→ONで客側朝一行動を変える公開天井・状態契約: `NOT_APPLICABLE / NONE_CONFIRMED_AFTER_RESEARCH`。
- 有利区間: `NOT_APPLICABLE_5TH_GEN_PRE_5_9`。
- 本機固有の確定的ガックン・初期出目・ハイビスカス/ランプ判別: `NONE_CONFIRMED_AFTER_RESEARCH`。

### dataQuality / conflicts
- 25φと30φはボーナス確率が異なるため独立レコード。
- 25φ固有のbaseGamesPer50は再探索後も直接値を固定できず `UNVERIFIED_AFTER_RESEARCH`。
- formalModelName / certificationNumber は表記揺れ・メーカー・型式・検定番号等を変えて再探索後も今回直接固定できず `UNVERIFIED_AFTER_RESEARCH`。

## 2017-04-03群監査
- status: **OPEN**。
- 登録済み:
  1. **ドキドキマンゴー-30 — No.1062**。
  2. **ドキドキマンゴー-25 — No.1063**。
- 次未処理候補:
  1. **パチスロ 機動戦士Zガンダム** — Bisty。HAZUSEで2017-04-03、型式 `パチスロ機動戦士ZガンダムS`、検定 `6S1412` を確認済み。SANKYO公式オンライン博物館も2017.04導入、ART初期40G以上・純増約1.7枚/Gを確認。
  2. **恵比寿マスカッツ** — ニューギン。複数解析で2017-04-03導入を確認済み。
- 4/3群には他機種もあり得るため、上記処理後に全メーカー横断監査してCLOSED可否を判定する。

## 次候補事前調査 — パチスロ 機動戦士Zガンダム
- releaseDate: **2017-04-03**。
- formalModelName: **パチスロ機動戦士ZガンダムS**。
- certificationNumber: **6S1412**。
- system: **A+ART**。
- payoutRateBySetting: **96.9 / 99.8 / 102.2 / 105.7 / 108.4 / 111.0%** を複数解析で一致確認。
- BB: **1/595.8 全設定共通**。CB: **1/182.6 → 1/165.9**。ボーナス合算 **1/139.7 → 1/129.8**。ART初当たり **1/429.7 → 1/297.9**。
- baseGamesPer50: 設定別 **33.3 / 33.4 / 33.6 / 33.9 / 34.2 / 34.6G**、概算約33G。
- ART: **純増約1.3枚/G、ボーナス込み約1.7枚/G、初回40G以上**。
- BB/CB基本獲得: **約56枚**。
- 天井: **通常時777G消化以降のボーナスでART濃厚**、および **ART非当選ボーナス9回連続後の10回目ボーナスでART濃厚**。BB非当選はスルー2回、CB非当選は1回としてカウント。
- resetBehavior: 一撃で **設定変更時 天井ゲーム数RESET / 電源OFF→ON 天井ゲーム数CARRYOVER** を直接確認。モード・状態・液晶ステージは当時ページ上 `現在調査中`。
- 別当時解析にはリセット時内部状態再抽選、電源OFF→ON内部状態引継ぎ、ステージ「フォウ・ブラウン」記載があるため、次回は資料定義を精査し、競合/補完可否を判定する。

## 遡及 resetBehavior QA
- retroQaScanConfirmedThrough: **2006-04_rock-you-queen-3.md**。
- retroQaStatus: **SEQUENTIAL_SCAN_ACTIVE**。
- 次カーソル: `2006-05_gold-shio-30.md`。
- 今回は時系列本線を優先し、遡及QAカーソルは変更していない。

## 次回再開地点
1. 最新mainの README / mission v0.7 / INDEX / LATEST_HANDOFF / No.1063を再取得。
2. **1063件 / chronologicalFrontier 2017-04-03 / 4/3群OPEN** を正本として継続。
3. 次の未処理候補 **「パチスロ 機動戦士Zガンダム」** をNo.1064候補として性能コア＋resetBehavior v0.7で処理。
4. 続いて **恵比寿マスカッツ** を処理し、4/3同日全メーカー監査を実施。
5. 遡及QAは `2006-05_gold-shio-30.md` から継続。

## 主要出典 — 取得日 2026-09-09
### No.1063 ドキドキマンゴー-25
- パイオニア更新履歴: https://www.slot-pioneer.co.jp/news.html
- K-Navi ドキドキマンゴー25: https://p-kn.com/slot/2730/
- P-WORLD ドキドキマンゴー-25: https://www.p-world.co.jp/machine/database/8301
- スロパチまとめ ドキドキマンゴー: https://slotblogpachinkoblog.com/dokidokimango/

### 次候補 — パチスロ 機動戦士Zガンダム
- SANKYOオンライン博物館: https://www.sankyo-fever.jp/collection/886/
- HAZUSE: https://hazuse.com/machine/pachislot/6S1412/
- 一撃 天井/設定変更: https://1geki.jp/slot/s_zgundam/3/
- 一撃 ART概要: https://1geki.jp/slot/s_zgundam/81/
- ちょんぼりすた: https://chonborista.com/slot/bisty-slot/32863/
- 当時解析まとめ: https://pachislo-data.com/bisty/34910

### 4/3群残候補
- ちょんぼりすた 恵比寿マスカッツ: https://chonborista.com/slot/newgin-slot/34518/

### 遡及QA 次カーソル
- `docs/real_machine_db/machines/2006-05_gold-shio-30.md`
