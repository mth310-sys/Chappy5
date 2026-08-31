# 実機DB 最新リレー引継ぎ

更新日: 2026-09-01

## 現在地点

- 最新mainの `README.md`、実機DBミッションv0.7、`INDEX.md`、既存レコード、直前 `LATEST_HANDOFF.md` を再読して継続。
- `INDEX.md` は旧19件地点のままなので、README規定どおり本 `LATEST_HANDOFF.md` を進捗正本とする。
- 直前地点は201件目 `哲也～雀聖と呼ばれた男～`。
- 11/26次候補 `赤ドン` / `ファイアーヒーローS` をmain内検索し、既存/別名登録がないことを確認。
- **202件目 `赤ドン` を追加済み。**

## 202. 赤ドン

- new record: `docs/real_machine_db/machines/2007-11-26_akadon.md`
- commit: `85d4a6d19830a8c421e0d4e01ae8887b9a8248ec`
- manufacturer: ミズホ / アルゼマーケティングジャパン
- releaseDate: 2007-11-26
- generation: 5号機
- systemType: ボーナス + CZ + ART（リプパン回避）
- coreStatus: `COMPLETE_CORE`
- resetBehaviorQA: `PARTIAL`

### 導入・系統

- 型式名 `赤ドン3`。
- グリーンべると2007-11-02当時記事でミズホ製造、ATRT「ドンちゃんゲーム」、BIGのみ搭載を確認。
- パチビー導入カレンダーで2007-11-26導入。
- P-WORLDは2007年11月、ミズホ、5号機ARTとして掲載。

### 性能コア

- 設定: 1 / 4 / 6 / H。
- BIG合算: 約 `1/431.15 → 1/348.59`。
- 50枚ベース: `34.76 / 35.21 / 35.67 / 36.14G`。
- BIG: 465枚超払い出し終了、平均約370枚、最大384枚。
- ART `ドンちゃんゲーム`: 1セット33G、約+1.0枚/G。
- 通常時1200G消化でCZへ移行し、ボーナスまでART突入ナビを受ける救済仕様。

### 機械割 CONFLICT

資料系統で差が大きく、平均せず全て保持:
- 解析シミュレーション: `96.34 / 103.64 / 109.33 / 115.93%`
- 後年スペック整理: `96.51 / 102.63 / 107.60 / 113.15%`
- 当時攻略/旧DB系: `94.0 / 98.0 / 105.0 / 114.0%`

算定条件差の可能性はあるが原典条件を確定できないため `CONFLICT`。

### v0.7 resetBehavior

- settingChangeBehavior: `CONFIRMED`。設定変更時はCZ「チャレンジゾーン」開始。
- stateAfterReset: 解析資料では `ナビストック0のCZ状態`。
- gameCounterReset: 通常救済は1200GでCZ。設定変更後は1200G待ちではなくCZ開始。
- ceilingAfterReset: 「○Gへ短縮」という別数値は `NONE_CONFIRMED`。変更時CZ開始そのものを主要恩恵として保持。
- carryOverBehavior: 据え置き時の1200Gカウンタ/CZ/ART/ナビ状態引継ぎ `UNVERIFIED`。
- powerCycleBehavior: 電源OFF→ONのみ時の同状態 `UNVERIFIED`。
- modeAfterReset: CZ開始以外の朝一専用モード `NONE_CONFIRMED`。
- advantageousSectionReset: `NOT_APPLICABLE`。
- resetBenefits: 設定変更時CZ開始 `CONFIRMED`。
- resetPenalties: ナビストック0とする解析資料あり。
- resetDetection: パチビーに2008-03-31「カラ回し設定変更判別」動画の存在を確認。ただし具体的判別手順を検索可能テキストから復元できず `PARTIAL / UNVERIFIED_DETAIL`。本機固有ガックンも未確定。
- numericResetData: 通常救済1200G、設定変更時0GからCZ、ART33G・約+1.0枚/G。朝一CZ→ART確率/期待度は `UNVERIFIED`。

主要出典:
- グリーンべると: https://web-greenbelt.jp/00004436/
- パチビー導入日: https://www.pachibee.jp/machines/schedule/2007-11
- P-WORLD: https://www.p-world.co.jp/machine/database/4980
- けんのスロットシミュレーション: https://kenslo65536.com/kaiseki/akadon.html
- SLONET: https://slonet.sakura.ne.jp/kouryaku/akadon.html
- 後年スペック整理: https://pachinko.hatenablog.jp/entry/2007/11/akadon
- 5号機クロニクル: https://5goki.com/universal
- パチビー動画一覧: https://www.pachibee.jp/movies/index/456

## 直前の既存群

- 198件目 `華一番-30`
- 199件目 `スーパービンゴV`
- 200件目 `超お父さん2`
- 201件目 `哲也～雀聖と呼ばれた男～`
- 202件目 `赤ドン`

## resetBehavior 遡及QA

### クランキーコンドルX（2006-08）

- `電撃フランケン（2006-07-24）` より後の既存レコードを時系列走査し、最古側の未補完候補として処理。
- 既存性能コア値・既存CONFLICTを維持したままv0.7 `resetBehavior` を追加。
- QA commit: `866b551249aab530513527a8dae09955e359ad9c`
- resetBehaviorQA: `PARTIAL`
- ユニバーサル公式でエレコ、5号機、ボーナス+RT、2006年8月発売を再確認。
- パチ7専門回顧で、RT中にボーナス成立しても規定G終了まで継続する完走型RTを確認。
- 設定変更/据え置き/電源OFF→ON時のRT状態・残G、本機固有ガックン/初期出目判別は、表記揺れ・型式・メーカー・朝一/リセット/据え置き/電断等を組み替え、公式・当時業界・当時攻略・旧DB・回顧資料を横断しても直接資料を確定できず `UNVERIFIED`。
- 通常時ゲーム数天井、リセット短縮天井、朝一専用モード/公開数値は `NONE_CONFIRMED`。
- 100Gは通常時天井ではなく完走型RTの継続G数として分離。
- 有利区間は `NOT_APPLICABLE`。

主要追加出典:
- ユニバーサル公式: https://www.universal-777.com/product/slot/cranky_condor_x/
- K-Navi当時記事: https://p-kn.com/topics/news/11/
- パチ7 5号機システム回顧: https://pachiseven.jp/articles/detail/14435%26title%3Dpachiseven.jp

## 次回再開地点

1. **LATEST_HANDOFF基準202件地点から継続。**
2. 2007-11-26同日未処理 `ファイアーヒーローS` を最優先。パチビーで2007-11-26導入、P-WORLDでアトム/5号機RT/2007年11月まで確認済み。main内重複なしも確認済み。
3. `ファイアーヒーローS` は性能コア（設定別機械割/ボーナス確率、50枚ベース、RT純増・継続G、獲得枚数）とv0.7 resetBehaviorを検索語・資料系統を変えて十分再探索してから保存する。
4. 2007年11月月次候補 `パチってスロット / パチスロシティーハンター / ビーチクラブ` は具体導入日を継続監査し、11/20〜11/26の間またはそれ以前と確定した場合は漏れ防止で時系列位置へ遡及差し込みする。
5. `赤ドン` 追加QAは機械割3系統の算定条件原典、据え置き/電断時1200Gカウンタ/CZ/ART/ナビ状態、パチビー「カラ回し設定変更判別」の具体手順を優先。
6. resetBehavior遡及QAは `クランキーコンドルX` の次の既存レコードを時系列走査し、`resetBehavior`節未収集の最古機から継続する。2006年8月群（`じゃりン子チエ` / `ランブルローズ` / `逮捕しちゃうぞ` 等）の順序と既補完有無をmainで確認してから処理。
7. 既存 `COMPLETE_CORE` は性能コア完了判定を不用意に崩さず、resetBehaviorQAを別管理する。
8. PARTIAL/UNVERIFIEDは表記揺れ・型式・メーカー・シリーズ・設定変更/リセット/朝一/据え置き/電断/天井/モード/ガックン/有利区間を組み替え、公式・業界・当時解析・旧DB・アーカイブ・回顧資料を横断する。
9. 競合値は平均せず `CONFLICT`。別機種・兄弟スペック・後継機仕様は根拠なしに流用しない。

取得日: 2026-09-01
