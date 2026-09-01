# 実機DB 最新リレー引継ぎ

更新日: 2026-09-01

## 現在地点

- 最新mainの `README.md`、実機DBミッションv0.7、`INDEX.md`、既存レコード、直前 `LATEST_HANDOFF.md` を再読して継続。
- `INDEX.md` は旧19件地点のため、README規定どおり本 `LATEST_HANDOFF.md` を進捗正本とする。
- 直前handoffは209件地点（`パチスロシティーハンター` 追加済み）。
- 2007年12月境界をメーカー別一覧・旧DB・当時業界記事で再監査した結果、既存209件より時系列上前に入る未処理機 `名門!夢色学園生徒会` を発見。
- 当時グリーンべると記事で **2007-12-02納品開始** が具体日まで確定したため、漏れ防止優先ルールに従い遡及追加。
- **210件目として `名門!夢色学園生徒会` を追加済み。**

## 210. 名門!夢色学園生徒会

- new record: `docs/real_machine_db/machines/2007-12-02_meimon-yumeiro-gakuen-seitokai.md`
- commit: `c0d8b2a5dbe6675aeb6c9f5f6295a5a7ec070243`
- manufacturer: オーイズミ（オーイズミNEOブランド）
- formalType: ユメガク
- generation: 5号機
- systemType: ボーナス + CZ + RT
- coreStatus: `PARTIAL`
- resetBehaviorQA: `PARTIAL`

### 導入・同定

- グリーンべると2007-11-16記事は、オーイズミNEOブランド、型式名 `ユメガク`、**2007-12-02納品開始**を明記。
- P-WORLD業界ニュース保存版でも同内容を確認。
- HAZUSE旧解析は `<2007年11月>`、後年整理は `2007.12` のため `CONFLICT_DATE_MONTH`。具体日を持つ当時業界記事を優先して12/2採用。

### 性能コア

- BIG: `1/390 / 1/372 / 1/356 / 1/341 / 1/328 / 1/315`。
- REG: `1/780 / 1/745 / 1/712 / 1/683 / 1/655 / 1/630`。
- 合算: `1/260 / 1/248 / 1/237 / 1/228 / 1/218 / 1/210`。
- BIG純増平均約237枚、REG純増平均約102枚。
- 全ボーナス後にCZ。CZ中の特殊リプレイから60G RT `ストーリーモード`、純増約 `+0.7枚/G`。
- 当時業界記事ではCZ↔RT約50%ループ、RT中ボーナス成立期待20〜25%。
- HAZUSEには最大1000GのプレミアムRTも記載されるが突入条件は資料自体が調査中のため、内部抽選は補完していない。
- 設定別機械割/出玉率は表記揺れ・型式・メーカー名まで変えて業界/旧解析/後年DBを横断したが高信頼数値を確定できず `UNVERIFIED_AFTER_RESEARCH`。
- 50枚ベースも `50枚 / 1000円 / ベース / コイン持ち / 千円ゲーム数` まで検索語変更後も確定できず `UNVERIFIED_AFTER_RESEARCH`。

### v0.7 resetBehavior

- settingChangeBehavior: 設定変更時の通常/CZ/60G RT/プレミアムRT状態、残G処理は `UNVERIFIED_AFTER_RESEARCH`。
- carryOverBehavior: 据え置き時のCZ/RT残G・内部状態は `UNVERIFIED_AFTER_RESEARCH`。
- powerCycleBehavior: 電源OFF→ONのみの場合のCZ/RT残G・内部状態・表示は `UNVERIFIED_AFTER_RESEARCH`。
- gameCounterReset: 通常時ハマリ天井は `NONE_CONFIRMED`。60G/最大1000GはRT継続G数であり通常時天井ではない。
- ceilingAfterReset: 設定変更後短縮天井/朝一専用天井 `NONE_CONFIRMED`。
- modeAfterReset: 朝一専用モード/公開変更時モード振り分け `NONE_CONFIRMED`。
- stateAfterReset: CZ/RT中の設定変更・据え置き・電断処理 `UNVERIFIED_AFTER_RESEARCH`。
- advantageousSectionReset: `NOT_APPLICABLE`。
- resetBenefits / resetPenalties: 公開朝一固有恩恵・不利要素 `NONE_CONFIRMED`。
- resetDetection: 本機固有ガックン/初期出目/液晶・ランプ等の変更判別 `UNVERIFIED_AFTER_RESEARCH`。
- numericResetData: 公開設定変更時専用数値 `NONE_CONFIRMED`。

### CONFLICT

- 導入時期: 当時グリーンべると `2007-12-02` 納品開始、HAZUSE `<2007年11月>`、後年整理 `2007.12`。12/2を採用し差を保持。
- RT終了条件: グリーンべるとは「60G完走型RT」、HAZUSEは終了条件を「ボーナス当選/60G消化」と記載。物差し確定値は60G・約+0.7枚/Gに限定し、細則は `CONFLICT_DETAIL`。

主要出典:
- グリーンべると: https://web-greenbelt.jp/00004412/
- P-WORLD業界ニュース保存: https://news.p-world.co.jp/articles/2489/greenbelt
- P-WORLD機種DB: https://www.p-world.co.jp/machine/database/4992
- HAZUSE旧解析: https://hazuse.com/i/data/yumeirogakuen/top.html
- 後年スペック整理: https://pachinko.hatenablog.jp/entry/2007/12/meimon-yumeiro-gakuen-seitokai

## 直前の209件目

### パチスロシティーハンター

- record: `docs/real_machine_db/machines/2007-12-06_pachislot-city-hunter.md`
- commit: `d891b7962592cf032410cf203000f682cc0596c5`
- coreStatus: `PARTIAL`
- resetBehaviorQA: `PARTIAL`
- 当時業界記事の具体納品日は2007-12-06。REG後100G RT `XYZタイム`、約+0.9枚/G。

## 直前の208件目

### パチスロ「機動戦士ガンダムII～哀・戦士編～」

- record: `docs/real_machine_db/machines/2007-12-03_mobile-suit-gundam-ii-ai-senshi.md`
- commit: `b5e3ca63f3e0de363b559bf63f28e879b859961a`
- coreStatus: `COMPLETE_CORE`
- resetBehaviorQA: `PARTIAL`

## resetBehavior 遡及QA

### じゃりン子チエ（2006-08）

- QA record: `docs/real_machine_db/machines/2006-08_jarinko-chie.md`
- QA commit: `37577b33bcf0bafe7accd4cff7d807fd47899f6f`
- 既存性能 `PARTIAL` を維持しv0.7 `resetBehavior` 追加済み。
- 次の未補完既存レコードは時系列で再監査する。直前候補 `ランブルローズ（2006-08）` は検索インデックス不安定のためmachinesディレクトリ実体を先に確認する。

## 重複防止

- `NEO花物語`: 既存レコードあり。再追加禁止。
- `スーパービンゴV`: 既存レコードあり。再追加禁止。
- `CANスロ`: 既存レコードあり。再追加禁止。
- `パチスロ「機動戦士ガンダムII～哀・戦士編～」`: 208件目として追加済み。
- `パチスロシティーハンター`: 209件目として追加済み。
- `名門!夢色学園生徒会`: 210件目として今回追加済み。

## 次回再開地点

1. **LATEST_HANDOFF基準210件地点から継続。**
2. 今回12/2の遡及漏れが見つかったため、2007-12-01〜12-16境界をもう一度メーカー別一覧・P-WORLD旧導入情報・当時業界記事で監査し、12/2より早い未処理機または12/3〜12/16の未処理機があれば時系列優先で追加する。
3. 現時点で具体導入日が確認できている後続候補は `ダイナマイトリターンズ`（2007-12-16〜17納品/導入）、`ハナマル!学園奮闘記!`（2007-12-17資料あり）、`パンドラ`（2007-12-25設置開始）。月単位候補として `ぴかっとシーサー / バーチャファイターT/F / バミューダ / サンバ×サンバ / 学習パチスロ理科 / まぁさん` 等も未登録有無と具体導入日を確認する。
4. `ぴかっとシーサー` はmain検索で未登録。性能値は一部回収可能だが具体導入日をまだ確定できていないため、月だけで先送り順を決めず境界監査を優先する。
5. 新規機種は性能コア + v0.7 resetBehaviorを同時収集。欠損は表記揺れ・型式・メーカー・シリーズ、設定変更/リセット/朝一/据え置き/電断/天井/モード/ガックン/有利区間まで検索語を変え、別系統資料を横断した後だけ `UNVERIFIED_AFTER_RESEARCH` とする。
6. resetBehavior遡及QAは新規キューを止めず、`じゃりン子チエ` の次の未補完既存レコードをmachines実体から特定して進める。
7. 競合値は平均せず `CONFLICT`。別機種・兄弟スペック・後継機仕様は根拠なしに流用しない。

取得日: 2026-09-01
