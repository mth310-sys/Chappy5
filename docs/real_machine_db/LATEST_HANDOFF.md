# 実機DB 最新リレー引継ぎ

更新日: 2026-09-01

## 現在地点

- 最新mainの `README.md`、実機DBミッションv0.7、`INDEX.md`、既存レコード、直前 `LATEST_HANDOFF.md` を再読して継続。
- `INDEX.md` は旧19件地点のため、README規定どおり本 `LATEST_HANDOFF.md` を進捗正本とする。
- 開始時点は266件地点 `ちゅらそ〜れ30（2008-07-13納品開始）` まで完了。
- 2008年7月中旬以降の未処理候補を再監査し、パラジェーピー `コリアンドラム-30 / コリアンドラムS2-30` を267・268件目として追加。
- 両機は5号機クロニクル・旧業界DBで2008年7月導入/発売が一致。ただし具体納品日は表記揺れ・型式名・メーカー名・旧導入カレンダー・P-WORLD等を横断しても確定できなかったため、推測せず `releaseDate: 2008-07` の月精度で保存。
- S2-30はP-WORLDに2008-07-23の当時掲示板記録が残るが、掲示板投稿日を導入日には採用しない。
- resetBehavior遡及QAは `球児（2006-09）` まで補完済み。次対象は `ジャックポット・トロピカルバージョン2（2006-09）` 以降。今回も新規収集を優先。

## 267. コリアンドラム-30

- record: `docs/real_machine_db/machines/2008-07_koriandrum-30.md`
- commit: `d7c22b4803d7f98e447f09c73238ee33a0c5518d`
- releaseDate: `2008-07`
- releaseDatePrecision: `MONTH_CONFIRMED_EXACT_DAY_UNVERIFIED`
- manufacturer: パラジェーピー
- modelName: `コリアンドラム-30`
- systemType: ボーナス+完走型RT / 30Φ
- coreStatus: `PARTIAL`
- resetBehaviorQA: `COMPLETE_FOR_PUBLICLY_CONFIRMABLE_RESET_SCOPE_WITH_DEVICE_SPECIFIC_BEHAVIOR_UNVERIFIED`

### 主要性能

- 機械割: `98.2 / 100.0 / 102.2 / 104.0 / 105.4 / 107.2%`（5号機クロニクル）
- 旧業界DB・回顧資料でBIG後完走型RTタイプと確認。
- 設定別主要初当たり、50枚ベース、基本獲得枚数、RTゲーム数/純増は検索語・資料系統変更後も今回確定できず `UNVERIFIED_AFTER_RESEARCH`。

## 268. コリアンドラムS2-30

- record: `docs/real_machine_db/machines/2008-07_koriandrum-s2-30.md`
- commit: `ce6053697449a33647b7366f32fb78e0194fa309`
- releaseDate: `2008-07`
- releaseDatePrecision: `MONTH_CONFIRMED_EXACT_DAY_UNVERIFIED`
- manufacturer: パラジェーピー
- modelName: `コリアンドラムS2-30`
- systemType: ノーマル / 完全告知 / リプレイ予兆 / 30Φ
- coreStatus: `PARTIAL`
- resetBehaviorQA: `COMPLETE_FOR_PUBLICLY_CONFIRMABLE_RESET_SCOPE_WITH_DEVICE_SPECIFIC_BEHAVIOR_UNVERIFIED`

### 主要性能

- P-WORLD出玉率: `94.65 / 98.00 / 101.12 / 104.13 / 107.23 / 110.46%`
- 5号機クロニクル: `94.7 / 98.0 / 101.1 / 104.1 / 107.2 / 110.5%`。丸め差の範囲で一致。
- BIG BONUS: `360枚`
- BONUS GAME: `90枚`
- リプレイ予兆タイプ。リプレイ連続で期待度が上昇し、7色フラッシュ告知を持つ後年回顧資料あり。
- 設定別BIG/REG等の主要初当たりと50枚ベースは再探索後も未確定。

## v0.7 resetBehavior（267/268）

- 267はBIG後完走型RTを持つが、設定変更/据え置き/電源OFF→ON時のRT残状態、ゲーム数/状態引継ぎを直接示す本機固有資料は確定できず `UNVERIFIED_AFTER_RESEARCH`。
- 268は通常ゲーム数天井、周期CZ、持続RT/ART/AT、公開モード、朝一専用モードを確認できず、該当項目は `NONE_CONFIRMED` / `NOT_APPLICABLE`。
- 両機とも有利区間は `NOT_APPLICABLE`。
- ガックン、初期出目、客側の設定変更判別についても本機固有の直接資料を確認できず `UNVERIFIED_AFTER_RESEARCH`。
- 他パラジェーピー機、一般的な5号機/沖スロ挙動は流用しない。

## 今回の主要出典

取得日: 2026-09-01

- https://5goki.com/parajp
- https://slothistory.com/kousin_kako05.html
- https://www.p-world.co.jp/machine/database/5286
- https://blog-pachislot.com/machines/1554.html
- https://plaza.rakuten.co.jp/kirialoverio/72000/
- https://kiokubako.blog.shinobi.jp/パチスロ/コリアンドラムｓ２－３０

## 重複防止

- 既存268件の再追加禁止。
- `コリアンドラム30 / コリアンドラム-30` は267と同一。
- `コリアンドラムS2-30 / コリアンドラムS2‐30` は268と同一。
- 267と268は兄弟機だが性能構造が異なる。267はBIG後RT、268はリプレイ予兆ノーマル。性能値の相互流用禁止。
- `スーパールーレット / スーパールーレット30` はネイチャー・アセスメント。2008-06-05業界記事で「洞爺湖サミット明けの7月納品予定」まで確認済み。具体日未確定で未処理。
- `スーパージャックポット / スーパージャックポットN` はヤーマ。2008年7月機で、7/19時点の業界端子板対応機種に列挙。具体導入日の再確認が必要。
- `花浪漫N-30` はタイヨー。2008-06-24発表、7/19時点で端子板対応機種に列挙。具体導入日の再確認が必要。
- `爺サマー` は大都技研。一次資料で2008年7月下旬納品予定。
- `海人 / 海人G-30` はトリビー。旧業界史で2008-08-04発売へ更新されているため、7月候補から先行登録しない。

## resetBehavior 遡及QA

- 次対象: **`ジャックポット・トロピカルバージョン2（2006-09）` 以降**。
- resetBehavior節が既にある機種は飛ばし、性能コアをやり直さずresetBehaviorのみ補完する。

## 次回再開地点

1. **LATEST_HANDOFF基準268件地点。2008年7月月精度の `コリアンドラム-30 / コリアンドラムS2-30` まで追加済み。**
2. 次は `スーパールーレット / スーパールーレット30` の具体納品日を、ネイチャー・アセスメント、型式名、当時ホール導入記録、旧カレンダー、P-WORLD等で再探索する。2008-06-05業界記事では「洞爺湖サミット明けの7月予定」。
3. 並行して `スーパージャックポット / スーパージャックポットN` と `花浪漫N-30` の具体導入日を再確認し、268件地点より後の最古未処理を確定する。
4. `爺サマー` は一次資料で7月下旬納品予定なので、上記候補の日付確定後に時系列順で処理する。
5. `海人 / 海人G-30` は2008-08-04発売資料があるため、7月列には混入させない。
6. resetBehavior遡及QAは `ジャックポット・トロピカルバージョン2（2006-09）` から継続。
7. 欠損は表記揺れ・型式名・メーカー・シリーズ名と、設定変更/リセット/朝一/据え置き/電源OFF ON/天井短縮/モード/ガックン/有利区間等へ検索語を変え、公式・業界・当時解析・旧DB・アーカイブ・回顧資料を横断してから `UNVERIFIED` 判定する。
