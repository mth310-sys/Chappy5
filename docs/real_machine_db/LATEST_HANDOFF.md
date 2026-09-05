# 実機DB 最新リレー引継ぎ

更新日: 2026-09-05

## 現在地点

- recordCount: **690**
- latestMachineAdded: **パチスロ キン肉マン ～キン肉星王位争奪編～**（山佐）
- latestRecord: `docs/real_machine_db/machines/2012-10-08_kinnikuman-kinnikusei-oui-soudatsu-hen.md`
- chronologicalFrontier: **2012-10-09**
- frontierLatestExactDateMachine: **ドラゴンハナハナ-30**（10-09群OPEN）
- schema: **resetBehavior v0.7**
- status: **CLOSED_2012-10-02_TO_10-08_BOUNDARY__OPEN_2012-10-09_GROUP**

## 今回の同期・時系列監査

- 最新mainの `README.md`、正本ミッション、`INDEX.md`、`LATEST_HANDOFF.md`、直前最新レコード `2012-10-01_new-onebar-30.md` を確認して開始。
- 開始時main正本は recordCount 688 / chronologicalFrontier 2012-10-01 / 10-01群CLOSED。会話上の前回地点よりmainが先行していたため、GitHub正本を優先して重複を回避。
- 前handoff指定の2012-10-02〜10-08境界を日付別・機種名別に再探索。10/02〜10/07に本線へ追加すべき別機種の具体日根拠は今回確定できなかった。
- ただし「パチスロ キン肉マン ～キン肉星王位争奪編～」は、前handoff/K-Navi/HAZUSEでは2012-10-09候補だった一方、パチビーが**2012-10-08導入**と明記。境界漏れを防ぐためCONFLICT保持のうえ2012-10-08キーで690件目として追加。
- 先に10-09群の「ドラゴンハナハナ-30」を689件目として追加済み。その後の境界監査で10/08キン肉マンを発見したため、追加順は時系列と1件だけ前後するが、DB上の `releaseDate` と chronologicalFrontier は日付順で管理する。
- chronologicalFrontier はドラゴンハナハナ-30で2012-10-09まで到達済み。ただし10-09同日群には未処理候補が残るためOPEN。

## 今回の本線追加 1 — ドラゴンハナハナ-30

### 識別

- manufacturer: **パイオニア**
- releaseDate key: **2012-10-09**
- generation: **5号機**
- systemType: **ノーマル / ボーナス主体 / 完全告知 / 沖スロ**
- medalDiameter: **30φ**
- modelName: **Dハナハナ-30**
- approvalNumber: **2S0582**

### 性能コア

- 機械割: **96 / 98 / 101 / 104 / 107 / 111%**
- BIG: **1/297 / 287 / 275 / 262 / 248 / 235**
- REG: **1/496 / 464 / 431 / 397 / 366 / 336**
- 合算: **1/186 / 177 / 168 / 157 / 147 / 138**
- BIG約**312枚**、REG約**130枚**。
- 天井: **非搭載**。
- 50枚ベース: **UNVERIFIED_AFTER_RESEARCH**。2012年機の直接比較値を確定できず、後継「ドラゴンハナハナ～閃光～」の値は流用していない。

### resetBehavior v0.7

- 天井/規定G/ART/AT/CZ進捗: **NOT_APPLICABLE_NORMAL_TYPE**
- `advantageousSectionReset`: **NOT_APPLICABLE_5TH_GEN**
- 設定変更・単純電源OFF→ON時の停止出目/告知ランプ等の機種固有起動挙動: **UNVERIFIED_AFTER_RESEARCH**
- `resetDetection`: **UNVERIFIED_AFTER_RESEARCH**
- `publicMorningNumbers`: **NONE_CONFIRMED_AFTER_RESEARCH**
- 一般的なハナハナ挙動や2023年後継機の朝一挙動は流用していない。

### CONFLICT

- 導入時期:
  - パイオニア公式: **2012年10月発売**
  - K-Navi: **2012-10-09**
  - HAZUSE: **2012-10-09**
  - 後年実機DB: **2012-10-09**
  - pacnk: **2012年9月**
- `CONFLICT_RELEASE_MONTH` として全て保持し、具体日が複数一致する2012-10-09を本線キー採用。

## 今回の本線追加 2 — パチスロ キン肉マン ～キン肉星王位争奪編～

### 識別

- manufacturer: **山佐**
- releaseDate key: **2012-10-08**（10/09資料とCONFLICT）
- generation: **5号機**
- systemType: **ART / BR非搭載 / 擬似ボーナス / 天井あり**
- modelName: **パチスロキンニクマン2S-D**
- approvalNumber: **2S0595**

### 性能コア

- 機械割主系列: **97.0 / 98.5 / 100.0 / 103.0 / 106.0 / 110.0%**
  - HAZUSEは設定2を99%表記。98.5%系列と小差のため両値保持。
- ART初当り: **1/274.0 / 264.3 / 255.6 / 235.8 / 219.9 / 207.6**
- ART「マッスルボーナス」: **約+2.7枚/G**
- 通常ゲーム数天井: **ART終了後1400G**
- 高確率ステージ天井: **ART非突入の高確率ステージ7回スルー→8回目でART**
- 高確率ステージ天井でART当選した場合は、通常1400G天井のゲーム数進捗を**リセットせず継続**。
- 50枚ベース: **UNVERIFIED_AFTER_RESEARCH**。小役からの逆算なし。

### resetBehavior v0.7

- `settingChangeBehavior`: **CONFIRMED_CLEAR_GAME_COUNT_AND_MODE_RELOTTERY**
- `gameCounterReset`: **CONFIRMED_CLEAR_ON_SETTING_CHANGE**
- `ceilingAfterReset`: **1400G_FROM_CLEARED_COUNT / RESET_SHORTENING_NONE_CONFIRMED**
- `modeAfterReset`: **CONFIRMED_RELOTTERY_ON_SETTING_CHANGE**
- 設定変更時モード選択率（全設定共通、資料公開値）:
  - 低確 **12.5%**
  - 通常 **31.3%**
  - 高確 **31.3%**
  - 天国 **12.5%**
  - 前兆 **6.3%**
  - 引き戻し **6.3%**
- 公開値合計は丸めで100.2%。再正規化せず原値保持。
- **同一設定への打ち直し時はモード移行抽選を行わない**。
- `resetBenefits`: 上位モード開始の可能性あり。朝一レア小役なしで上位ステージ移行なら変更のチャンスという当時解析あり（確定判別ではない）。
- `resetPenalties`: **1400G天井進捗消失**。
- 純据え置き時の厳密保持、単純電源OFF→ON、高確ステージ天井スルー回数の設定変更時処理、ガックン等は **UNVERIFIED_AFTER_RESEARCH**。
- `advantageousSectionReset`: **NOT_APPLICABLE_5TH_GEN**

### CONFLICT

- 導入日:
  - パチビー: **2012-10-08**
  - K-Navi: **2012-10-09**
  - HAZUSE: **2012-10-09**
  - 山佐公式: **2012年10月稼働**
- `CONFLICT_RELEASE_DATE_2012-10-08_VS_2012-10-09`。境界漏れ防止の本線キーは2012-10-08。

## 遡及resetBehavior QA 進捗

- 前handoffから継続するQA再開地点は変更しない。
- 遡及QA次回再開地点: **`docs/real_machine_db/machines/2007-01_karate-baka-ichidai.md`**。
- 本線時系列収集を止めず、QAは別リレーで既存レコードのresetBehavior欠損のみ補完する。

## 次回再開地点

1. **recordCount 690 / chronologicalFrontier 2012-10-09 / 10-09群OPEN** から開始。
2. 2012-10-02〜10-08境界は今回、キン肉マン10/08を回収してCLOSED扱い。キン肉マンの10/08 vs 10/09はCONFLICT保持。
3. 10-09群の次の最優先未処理は **「パチスロ 喰霊－零－」（オーイズミ）**。パチビー/HAZUSEで2012-10-09を確認済み。repo重複確認→具体日再照合→性能コア→resetBehavior v0.7の順で処理。
4. 続いて10-09候補 **「キュインぱちすろ 南国育ち 1st vacation」**、**「大工の源さん～炎のいただき!編～」** を時系列/重複監査。キン肉マンは今回登録済みなので再追加しない。
5. 10-09群をCLOSED後、次の具体日群へ進む。旧handoffに「ドンちゃん祭 10/15」候補があったが、ユニバーサル公式プレスリリースは**2012-08-20全国導入開始**と明記するため、10/15アンカーとしては採用しない。既登録有無と8月時系列のDATE_QA候補として別途確認する。
6. 欠損は表記揺れ・型式・メーカー・シリーズ名と、設定変更/リセット/朝一/据え置き/電源OFF ON/天井短縮/モード/ガックン等を組み替え、公式・業界・当時解析・古いDB・アーカイブ・回顧資料を横断後のみUNVERIFIED。競合は平均せずCONFLICT。

## 主要出典 — 取得日 2026-09-05

### ドラゴンハナハナ-30
- パイオニア公式2012製品一覧: `https://www.slot-pioneer.co.jp/products/2012.html`
- パイオニア公式更新履歴: `https://www.slot-pioneer.co.jp/news.html`
- K-Navi: `https://p-kn.com/slot/1702/`
- P-WORLD: `https://www.p-world.co.jp/machine/database/6832`
- HAZUSE: `https://hazuse.com/machine/pachislot/2S0582/`
- pacnk: `https://pacnk.com/slot/tools/sh_dragonhana.html`
- ハナハナタイム: `https://hanahana.man-soft.com/dragonhanahana/machine.html`
- スロ安サーチ: `https://slot-price.com/slot_price_details/id/559`

### キン肉マン ～キン肉星王位争奪編～
- 山佐公式: `https://yamasa-next.co.jp/model_knm2/`
- パチビー: `https://www.pachibee.jp/machines/index/212080004`
- K-Navi: `https://p-kn.com/slot/1704/`
- HAZUSE: `https://hazuse.com/machine/pachislot/2S0595/`
- P-WORLD: `https://www.p-world.co.jp/machine/database/6833`
- パチマガスロマガ 朝イチ・設定変更: `https://cs62.cs-plaza.com/g/pachi/pla/s_conq/yamasa_slot/189/rs.php`
- K-Navi 天井攻略: `https://p-kn.com/slot/1704/40636/`
- K-Navi 実戦レポ: `https://p-kn.com/slot/1704/40347/`
- 当時天井攻略: `https://macerate.seesaa.net/article/297010442.html`
- パチスロわっしょい: `https://www.pachislowasshoi.jp/SHOP/yamasa-slot0017.html`

### 次回アンカー
- パチビー 喰霊－零－: `https://www.pachibee.jp/movies/index/8518`
- HAZUSE 喰霊－零－: `https://hazuse.com/machine/pachislot/2S0497/`
- 南国育ち 1st vacation: `https://pachislot-guide.net/2012/nangokusodachi-1st-vacation/`
- ユニバーサル公式 ドンちゃん祭導入開始: `https://www.atpress.ne.jp/news/29284`

## GitHub commits

- ドラゴンハナハナ-30 machine record: `1a8e5aa4477c0cc3808957f1670e8ca650fb3de5`
- キン肉マン ～キン肉星王位争奪編～ machine record: `b06d5264085fbfa706a05124c2ff5058187c6dd4`
