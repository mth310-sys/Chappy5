# 実機DB 最新リレー引継ぎ

更新日: 2026-09-04

## 現在地点

- recordCount: **592**
- latestMachineAdded: **トリプルクラウン25Φ**（清龍ゲームジャパン / releaseDate 2011-07-15）
- latestRecord: `docs/real_machine_db/machines/2011-07-15_triple-crown-25.md`
- chronologicalFrontier: **2011-07-15**
- frontierLatestExactDateMachine: **トリプルクラウン25Φ**
- schema: **resetBehavior v0.7**
- status: **READY_TO_CONTINUE**

## 今回の本線追加 — トリプルクラウン25Φ

- 最新mainのREADME、正本ミッションv0.7、INDEX、LATEST_HANDOFF、直前frontierレコード「ペガサスNEO」を再取得して開始。
- 開始時main正本は recordCount 591 / chronologicalFrontier 2011-07-11。
- 直前handoff指定に従い2011-07-11同日群と07-12〜07-14境界を監査。より古い具体日付き未登録5号機を安全に確定できなかったため、次候補「トリプルクラウン25Φ」へ進行。
- グリーンべると/娯楽産業の2011-06-08業界記事がともに **2011-07-15納品開始予定**を報道。P-WORLD/5号機クロニクルの2011年7月表記とも整合。
- repo内重複確認後、592件目として `docs/real_machine_db/machines/2011-07-15_triple-crown-25.md` を追加。

### 性能コア

- 型式名: **トリプルクラウン25T** / 検定番号 **1S0376**。
- 5号機ノーマル / 完全先告知 / シリーズ初25Φ仕様。
- 機械割(P-WORLD): **96.72 / 98.95 / 100.66 / 102.65 / 105.45 / 108.28%**。
- 5号機クロニクルは **96.7 / 99.0 / 100.7 / 102.7 / 105.5 / 108.3%**で丸め差として整合。
- BIG: **1/309.1 / 297.9 / 287.4 / 278.9 / 268.6 / 258.0**。
- REG/BG: **1/569.9 / 504.1 / 481.9 / 436.9 / 397.2 / 368.2**。
- 合算: **1/200.4 / 187.2 / 180.0 / 170.2 / 160.2 / 151.7**。
- BIG約 **312枚**、REG/BG約 **104〜105枚**。104/105差は平均せず定義/丸め差候補として保持。
- 50枚ベースは表記揺れ・型式名・メーカー名・50枚/1000円/ベース/コイン持ち等で再探索したが本機固有直接値を確定できず **UNVERIFIED_AFTER_RESEARCH**。後継機値は流用しない。

### resetBehavior v0.7

- 通常ゲーム数天井・規定G数当選・長期ゲーム数モードは複数資料再探索後も確認されず、`gameCounterReset` / `ceilingAfterReset` は **NOT_APPLICABLE_NO_GAME_COUNT_CEILING_CONFIRMED_AFTER_RESEARCH**。
- 設定変更時の出目/ランプ/低レベル状態、据え置き時の保持、単純電源OFF→ON時の挙動は本機固有直接資料を確定できず **UNVERIFIED_AFTER_RESEARCH**。
- 朝一専用短縮天井、リセット専用ボーナス優遇、朝一特定G以内当選率は **NONE_CONFIRMED_AFTER_RESEARCH**。
- ガックン、初期出目、バットチャンスランプ状態等による変更判別は **UNVERIFIED_AFTER_RESEARCH**。
- 有利区間は **NOT_APPLICABLE**。
- ノーマル機一般論から未確認のreset挙動を補完していない。

## 主要出典 — トリプルクラウン25Φ（取得日 2026-09-04）

- グリーンべると: `https://web-greenbelt.jp/00002140/`
- 娯楽産業: `https://www.goraku-sangyo.com/%E6%B8%85%E9%BE%8D%E8%B2%A9%E5%A3%B2%E3%80%80%E3%83%91%E3%83%81%E3%82%B9%E3%83%AD%E6%96%B0%E6%A9%9F%E7%A8%AE%E3%80%8C%E3%83%88%E3%83%AA%E3%83%97%E3%83%AB%E3%82%AF%E3%83%A9%E3%82%A6%E3%83%B325%CF%86/`
- P-WORLD: `https://www.p-world.co.jp/machine/database/6415`
- 5号機クロニクル: `https://5goki.com/seiryu`
- 型式検定回顧: `https://q-and-a.hatenablog.com/entry/2016/10/21/095330`

## 遡及QA継続地点

- **美川〜さそり座のサラリーマン〜 (`docs/real_machine_db/machines/2006-11_mikawa-sasoriza-no-salaryman.md`) までresetBehavior v0.7補完済み**。
- `docs/real_machine_db/machines/2006-11-27_thunder-v-special.md` は既にresetBehavior収集済みなので重複更新せずスキップする。
- その後は recursive tree / contentsの実パス順に進み、Thunder V SPECIALの次に存在する最初のresetBehavior欠損レコードを直接fetchして確定してから遡及QA再開。code search未ヒットだけでQA前線を動かさない。

## 本線の次回再開地点

1. **recordCount 592 / chronologicalFrontier 2011-07-15**から開始。
2. **2011-07-15同日群の残存監査**を先に行い、tree実パス/contentsと外部導入カレンダーを照合。未登録があれば同日群優先。
3. 同日群が閉じたら **2011-07-16〜07-17境界**を監査。
4. より古い未登録がなければ、次の強い候補 **ミルキーマーチ（2011-07-18納品予定）**を重複確認後に処理する。
5. 続く候補は **GRADIUS THE SLOT**。到達時は **2011-07-22導入開始 / 07-24納品 / 07-25導入**の資料差を定義別に分離し、平均せずCONFLICT/DATE_DEFINITION_DIFFERENCEとして保持する。
6. PARTIAL/UNVERIFIEDは表記揺れ・型式名・メーカー・シリーズ名・設定変更/朝一/据え置き/電源OFF ON/天井/モード/ガックン等へ検索語を変え、公式・業界・当時解析・古いDB・アーカイブ・回顧資料まで横断してから確定する。
