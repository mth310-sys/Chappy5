# 実機DB 最新リレー引継ぎ

更新日: 2026-09-01

## 現在地点

- 最新mainの `README.md`、実機DBミッションv0.7、`INDEX.md`、既存レコード、直前 `LATEST_HANDOFF.md` を再読して継続。
- `INDEX.md` は旧19件地点のため、README規定どおり本 `LATEST_HANDOFF.md` を進捗正本とする。
- 開始時点は264件地点 `スペシャルハナハナ-30（2008-07-13納品開始）` まで完了。
- 2008-07-13/14境界を再監査し、当時グリーンべるとでエマ `ちゅらそ〜れ` の25φ・30φが **2008-07-13同時納品** と直接確認できたため、別型式/別筐体として265・266件目に追加。
- resetBehavior遡及QAは `球児（2006-09）` まで補完済み。次対象は `ジャックポット・トロピカルバージョン2（2006-09）` 以降。今回も新規収集を優先。

## 265. ちゅらそ〜れ25

- record: `docs/real_machine_db/machines/2008-07-13_churasore-25.md`
- commit: `2e6309e4c3fd6f3dd002007a593d471986b5162f`
- releaseDate: `2008-07-13`
- releaseDatePrecision: `DELIVERY_START_CONFIRMED_INDUSTRY`
- manufacturer: エマ
- modelName: `チュラソーレX`
- testNumber: `8S0247`
- systemType: ノーマル / 完全告知 / 同時成立あり / 25Φ
- coreStatus: `PARTIAL`
- resetBehaviorQA: `COMPLETE_FOR_PUBLICLY_CONFIRMABLE_RESET_SCOPE_WITH_DEVICE_SPECIFIC_BEHAVIOR_UNVERIFIED`

### 主要性能

- 合算: `1/199.80 → 1/153.84`
- 出玉率レンジ: `96.6% → 115.1%`
- BIG: 約312枚（345枚超払い出し終了）
- REG: 最大209枚（209枚超払い出し終了）
- RT/ART/AT: なし
- 25Φと30Φの違いはパチマガスロマガで「基本的にリプレイ成立時の同時成立期待度とその時の告知パターンのみ」と確認。
- 25Φ単独の設定別BIG/REG内訳・50枚ベースは、表記揺れ/型式名まで再探索したが直接資料を確定できず、30Φ値を無条件転記しない。

### 機械割CONFLICT

- パチマガスロマガ系列: `96.6 / 98.0 / 100.5 / 105.3 / 110.0 / 115.1%`
- 5号機クロニクル系列: `96.6 / 97.9 / 100.5 / 104.6 / 109.4 / 113.9%`
- 平均せず `CONFLICT` で保持。

## 266. ちゅらそ〜れ30

- record: `docs/real_machine_db/machines/2008-07-13_churasore-30.md`
- commit: `d5da2cf1e6cb62db7cda400831181731bb47ee69`
- releaseDate: `2008-07-13`
- releaseDatePrecision: `DELIVERY_START_CONFIRMED_INDUSTRY`
- manufacturer: エマ
- modelName: `チュラソーレX-30`
- systemType: ノーマル / 完全告知 / 同時成立あり / 30Φ
- coreStatus: `COMPLETE_CORE`
- resetBehaviorQA: `COMPLETE_FOR_PUBLICLY_CONFIRMABLE_RESET_SCOPE_WITH_DEVICE_SPECIFIC_BEHAVIOR_UNVERIFIED`

### 主要性能

- BIG: `1/420.10 → 1/292.57`
- REG: `1/381.02 → 1/324.44`
- 合算: `1/199.80 → 1/153.84`
- 50枚ベース: `36.18 → 39.22G`
- BIG: 約312枚（345枚超払い出し終了）
- REG: 最大209枚（209枚超払い出し終了）
- RT/ART/AT: なし

### 機械割CONFLICT

- パチマガスロマガ: `96.6 / 98.0 / 100.5 / 105.3 / 110.0 / 115.1%`
- 5号機クロニクル: `96.6 / 97.9 / 100.5 / 104.6 / 109.4 / 113.9%`
- 平均せず `CONFLICT` で保持。

## v0.7 resetBehavior（265/266共通の公開確認範囲）

- 通常ゲーム数天井、救済RT、周期CZ、公開モード、朝一専用モード、設定変更時の公開恩恵/不利数値は `NONE_CONFIRMED_AFTER_RESEARCH`。
- RT/ART/ATなしのノーマルタイプで、客行動へ影響する持続状態は確認されない。
- 有利区間は `NOT_APPLICABLE`。
- 設定変更・据え置き・電源OFF→ON、ガックン/初期出目について、機種名・型式名・メーカー名と「設定変更/リセット/朝一/据え置き/電源OFF ON/ガックン/天井」を組み替えて当時解析・P-WORLD・旧DB・後年資料を再探索したが、本機固有の直接資料は確定できず `UNVERIFIED_AFTER_RESEARCH`。
- 他エマ機や後年沖スロ一般の挙動は流用しない。

## 今回の主要出典

取得日: 2026-09-01

### ちゅらそ〜れ25 / 30
- https://web-greenbelt.jp/00003668/
- https://news.p-world.co.jp/articles/2883/greenbelt
- https://cs62.cs-plaza.com/g/pachi/pla/s_conq/ema_slot/29/a.php
- https://cs62.cs-plaza.com/g/pachi/pla/s_conq/ema_slot/28/a.php
- https://cs62.cs-plaza.com/g/pachi/pla/s_conq/ema_slot/28/h.php
- https://cs62.cs-plaza.com/g/pachi/pla/s_conq/ema_slot/28/c.php
- https://www.p-world.co.jp/machine/database/5216
- https://5goki.com/ema
- https://news.p-world.co.jp/articles/2959/greenbelt

## 重複防止

- 既存266件の再追加禁止。
- 264 `スペシャルハナハナ-30`、265 `ちゅらそ〜れ25`、266 `ちゅらそ〜れ30` はすべて2008-07-13納品開始。同日順はDB登録順であり優先順位を意味しない。
- `ちゅらそ〜れ / ちゅらそ〜れ25 / チュラソーレX` は265と同一。
- `ちゅらそ〜れ-30 / ちゅらそ〜れ30 / チュラソーレX-30` は266と同一。
- `コリアンドラム-30 / コリアンドラムS2-30` はパラジェーピーの別機種で2008年7月候補、未処理。
- `スーパールーレット / スーパールーレット30` はネイチャー・アセスメントの別機種候補。2008年6月発表記事では7月納品予定まで確認済みだが具体日未確定。
- `爺サマー` は大都技研。2008年7月下旬納品予定まで一次資料で確認済み。7/13より後ろ。
- `ザ・ブルーハーツ` は2008-07-14発表であり、発表日を導入日と誤認しない。

## resetBehavior 遡及QA

- 次対象: **`ジャックポット・トロピカルバージョン2（2006-09）` 以降**。
- resetBehavior節が既にある機種は飛ばし、性能コアをやり直さずresetBehaviorのみ補完する。

## 次回再開地点

1. **LATEST_HANDOFF基準266件地点。2008-07-13納品開始の `スペシャルハナハナ-30 / ちゅらそ〜れ25 / ちゅらそ〜れ30` まで完了。**
2. 次は `コリアンドラム-30 / コリアンドラムS2-30` の具体導入/納品日を、型式名・パラジェーピー・展示/販売記事・旧導入カレンダー・P-WORLD等で再探索し、7/14以降の最古未処理か確定する。
3. 同時に `スーパールーレット / スーパールーレット30` の7月具体納品日を詰める。2008-06-05業界記事では「洞爺湖サミット明けの7月予定」。
4. `爺サマー` は一次資料で7月下旬納品予定なので、より早い具体日機種を先に処理する。
5. 7月中旬候補として `花浪漫N-30 / スーパージャックポットN / スーパージャックポット / 海人G-30 / 海人` 等も業界端子板記事に出現するため、既存登録確認後に具体日順で監査する。
6. resetBehavior遡及QAは `ジャックポット・トロピカルバージョン2（2006-09）` から継続。
7. 欠損は表記揺れ・型式名・メーカー・シリーズ名と、設定変更/リセット/朝一/据え置き/電源OFF ON/天井短縮/モード/ガックン/有利区間等へ検索語を変え、公式・業界・当時解析・旧DB・アーカイブ・回顧資料を横断してから `UNVERIFIED` 判定する。
