# 実機DB 最新リレー引継ぎ

更新日: 2026-09-04

## 現在地点

- recordCount: **593**
- latestMachineAdded: **ミルキーマーチ**（パイオニア / releaseDate 2011-07-18）
- latestRecord: `docs/real_machine_db/machines/2011-07-18_milky-march.md`
- chronologicalFrontier: **2011-07-18**
- frontierLatestExactDateMachine: **ミルキーマーチ**
- schema: **resetBehavior v0.7**
- status: **READY_TO_CONTINUE**

## 今回の本線追加 — ミルキーマーチ

- 最新mainのREADME、正本ミッションv0.7、INDEX、LATEST_HANDOFF、直前frontierレコード「トリプルクラウン25Φ」を再取得して開始。
- 開始時main正本は recordCount 592 / chronologicalFrontier 2011-07-15。
- 直前handoff指定に従い2011-07-15同日群と07-16〜07-17境界を監査。今回の検索範囲で、より古い具体日付き未登録5号機を安全に確定できなかったため、次候補「ミルキーマーチ」へ進行。
- グリーンべると2011-06-09記事が **2011-07-18納品開始予定**を明記。パイオニア公式は2011年7月発売として整合。
- repo内重複確認後、593件目として `docs/real_machine_db/machines/2011-07-18_milky-march.md` を追加。

### 性能コア

- 5号機ノーマルAタイプ / 完全告知 / 25Φ。
- 機械割: **96.9 / 98.4 / 100.6 / 102.8 / 105.1 / 107.4%**。
- BIG: **1/287 / 282 / 277 / 270 / 268 / 264**。
- REG: **1/455 / 436 / 356 / 324 / 273 / 264**。
- 合算: **1/176 / 171 / 156 / 147 / 135 / 132**。
- 1000円ベース: **約35.0〜36.4G**。設定別内訳は直接資料不足のためレンジのまま保持。
- BIG約 **325枚**（336枚払い出し）、REG約 **104枚**（105枚払い出し）。
- 型式名・検定番号は表記揺れ/検定回顧まで再探索したが直接確定できず **UNVERIFIED_AFTER_RESEARCH**。

### resetBehavior v0.7

- pacnkが **天井機能非搭載**を明記。よって `gameCounterReset` / `ceilingAfterReset` は **NOT_APPLICABLE_NO_GAME_COUNT_CEILING**。
- 設定変更時の出目/ランプ/低レベル状態、据え置き時の保持、単純電源OFF→ON時の挙動は、本機専用「朝イチ・設定変更」項目の存在までは確認できるものの具体本文を安全に回収できず **UNVERIFIED_AFTER_RESEARCH**。
- 朝一専用短縮天井、設定変更後ボーナス優遇、特定G以内当選率などの公開数値は **NONE_CONFIRMED_AFTER_RESEARCH**。
- ガックン、初期出目、PAOPAO♪ランプ状態等による変更判別は **UNVERIFIED_AFTER_RESEARCH**。
- 有利区間は **NOT_APPLICABLE**。
- ノーマル機一般論から未確認のreset挙動を補完していない。

### CONFLICT / 注記

- 性能コアの設定別BIG/REG/機械割はパチマガスロマガとpacnkで一致し、両端はグリーンべるとでも整合。
- 告知タイミングはグリーンべると「1/4先告知・3/4後告知」に対し、パチマガスロマガ基本システム本文が「レバーON〜ストップボタン有効時まで1/3、第3停止後3/4」と記載。後者は合計が1にならないため、転記/表記不整合の可能性を含む **CONFLICT_NOTE** として平均・補正せず保持。物差しコアには不使用。

## 主要出典 — ミルキーマーチ（取得日 2026-09-04）

- パイオニア公式2011年製品一覧: `https://www.slot-pioneer.co.jp/products/2011.html`
- パイオニア公式発売案内: `https://www.slot-pioneer.co.jp/information/milkymarch.html`
- グリーンべると: `https://web-greenbelt.jp/00002137/`
- パチマガスロマガ基本システム: `https://cs62.cs-plaza.com/g/pachi/pla/s_conq/pioneer_slot/100/a.php`
- パチマガスロマガ確率/PAYOUT: `https://cs62.cs-plaza.com/g/pachi/pla/s_conq/pioneer_slot/100/h.php`
- パチマガスロマガ機種TOP: `https://cs62.cs-plaza.com/g/pachi/pla/s_conq/pioneer_slot/100/pioneer_slot_100.php`
- pacnk: `https://pacnk.com/slot/tools/sh_milkymarch.html`

## 遡及QA継続地点

- **美川〜さそり座のサラリーマン〜 (`docs/real_machine_db/machines/2006-11_mikawa-sasoriza-no-salaryman.md`) までresetBehavior v0.7補完済み**。
- `docs/real_machine_db/machines/2006-11-27_thunder-v-special.md` は既にresetBehavior収集済みなので重複更新せずスキップする。
- その後は recursive tree / contentsの実パス順に進み、Thunder V SPECIALの次に存在する最初のresetBehavior欠損レコードを直接fetchして確定してから遡及QA再開。code search未ヒットだけでQA前線を動かさない。

## 本線の次回再開地点

1. **recordCount 593 / chronologicalFrontier 2011-07-18**から開始。
2. **2011-07-18同日群の残存監査**を先に行い、tree実パス/contentsと外部導入カレンダーを照合。未登録があれば同日群優先。
3. 同日群が閉じたら **2011-07-19〜07-21境界**を監査。
4. より古い未登録がなければ次の強い候補 **GRADIUS THE SLOT** を重複確認後に処理する。
5. GRADIUS THE SLOTは到達時に **2011-07-22導入開始 / 07-24納品 / 07-25導入**の資料差を定義別に分離し、平均せず `CONFLICT` / `DATE_DEFINITION_DIFFERENCE` として保持する。
6. PARTIAL/UNVERIFIEDは表記揺れ・型式名・メーカー・シリーズ名・設定変更/朝一/据え置き/電源OFF ON/天井/モード/ガックン等へ検索語を変え、公式・業界・当時解析・古いDB・アーカイブ・回顧資料まで横断してから確定する。
