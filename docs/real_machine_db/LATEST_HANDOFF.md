# 実機DB 最新リレー引継ぎ

更新日: 2026-09-01

## 現在地点

- 最新mainの `README.md`、実機DBミッションv0.7、`INDEX.md`、既存レコード、直前 `LATEST_HANDOFF.md` を確認して継続。
- `INDEX.md` は旧19件地点のままなので、README規定どおり `LATEST_HANDOFF.md` を進捗正本とする。
- 185件目 `ストップ!! ひばりくん!` までを継承。
- **186件目として `ハワイ-30`（ネット、2007年9月・当時発表では9月上旬ホールデビュー予定）を9月漏れとして追加済み。**
- 新規レコード: `docs/real_machine_db/machines/2007-09_hawaii-30.md`
- coreStatus: `PARTIAL`
- resetBehaviorQA: `PARTIAL`
- 新規レコードcommit: `55e78d3b3b5a94622bdf66e2df8d92d375e17143`

## 186. ハワイ-30

- manufacturer: ネット
- releaseDate: `2007-09`（2007-07-25付K-Navi当時業界記事は「9月上旬ホールデビュー予定」）
- generation: 5号機初期
- systemType: ノーマル / ボーナス主体 / 30Φ / 完全告知系
- coreStatus: `PARTIAL`
- resetBehaviorQA: `PARTIAL`

### 性能コア

- 30Φ派生。パチマガスロマガは「同名機種の30パイバージョンだが、内部確率が若干異なる」と明記しているため、25Φ `ハワイ` の数値を自動流用しない。
- Pacnk後年整理値: 設定1/3/5/7。
  - BIG: `1/284.00 / 1/268.00 / 1/254.00 / 1/235.00`
  - REG: `1/344.00 / 1/327.00 / 1/312.00 / 1/295.00`
  - 合算: 約 `1/155.6 / 1/147.3 / 1/140.0 / 1/130.8`
- BIG約312枚、REG約104枚。K-NaviではBIG345枚超、REG119枚超払い出し終了。
- 設定別機械割はK-Naviが未発表表示、5号機クロニクルも30Φ欄が空欄のため `UNVERIFIED`。
- 50枚ベースも表記揺れ・項目語・資料系統を変えて再探索したが30Φ固有値を確定できず `UNVERIFIED`。
- Pacnkは天井機能非搭載と明記。

### v0.7 resetBehavior

- settingChangeBehavior: `UNVERIFIED`
- carryOverBehavior: 天井G数は `NOT_APPLICABLE`、その他本機固有状態は `UNVERIFIED`
- powerCycleBehavior: `UNVERIFIED`
- gameCounterReset: 通常時天井非搭載のため `NOT_APPLICABLE`
- ceilingAfterReset: `NOT_APPLICABLE / NONE_CONFIRMED`
- modeAfterReset: `NONE_CONFIRMED`
- stateAfterReset: RT/ART/CZは `NOT_APPLICABLE`、成立済みボーナス等の処理は `UNVERIFIED`
- advantageousSectionReset: `NOT_APPLICABLE`
- resetBenefits / resetPenalties: `NONE_CONFIRMED`
- resetDetection: `UNVERIFIED`
- numericResetData: `NONE_CONFIRMED`
- `ハワイ-30 / ハワイ30 / NET / ネット` と `設定変更 / リセット / 朝一 / 据え置き / 電源OFF ON / ガックン / 天井 / モード / 変更判別` を組み替え、当時業界記事、K-Navi、パチマガスロマガ、Pacnk、5号機クロニクル、旧DB/回顧資料を横断。

## 主要出典

### ハワイ-30
- K-Navi 当時業界ニュース（2007-07-25）: https://p-kn.com/topics/news/286/
- K-Navi 機種ページ: https://p-kn.com/slot/570/
- パチマガスロマガ: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/net_slot/136/a.php
- Pacnk 設定判別: https://pacnk.com/slot/tools/sh_hay2007b.html
- 5号機クロニクル NET一覧: https://5goki.com/net
- Pacnk 2007年度一覧: https://pacnk.com/photoslot/plist2007_0_0.html

取得日: 2026-09-01

## 9月漏れ監査メモ

- `ハワイ-30` を186件目として追加。
- 日単位の具体納品/実導入日は確定できず、当時一次に近い業界記事の「9月上旬予定」を超えて推定しない。
- `熊酒場-30` はmainに既存レコード `2007-09-02_kuma-sakaba-30.md` を確認済みのため重複追加しない。
- Pacnk 2007年9月一覧には `南国姉妹-30`、`クレイジージョーカー` 等も載る。`クレイジージョーカー` は2007-08-24付グリーンべるとで納品9月17日と確認できるため、main独立レコード有無を次回確認する。
- `南国姉妹-30` はK-Navi機種ページ現存を確認したが、具体導入日・main独立レコード有無は次回継続監査。
- P-WORLD/Pacnkの2007年9月一覧とmain既存群を引き続き突合し、未登録を残したまま10月へ進まない。

## resetBehavior 遡及QA

- 2006年5〜6月群は既補完機を重複改変せず通過済み。
- 2006年7月 `新造人間キャシャーン` は補完済み。
- **2006年7月 `花盛` にv0.7 resetBehaviorを遡及追加済み。**
- 既存性能コア `PARTIAL` は維持し、resetBehavior QAを別管理。
- 設定変更/据え置き/電源OFF→ON、通常時天井、朝一専用モード、ガックン、公開朝一数値を表記揺れ・資料系統変更で再探索したが、本機固有の直接資料は確認できず、`NONE_CONFIRMED / UNVERIFIED` を項目ごとに分離した。
- 花盛QA commit: `fe6a61d86ab1dbac3e703381115b18c5fbeae017`
- **次の最古resetBehavior欠損候補は2006年7月 `大江戸漫遊記`。** 現レコード `docs/real_machine_db/machines/2006-07_ooedo-manyuuki.md` にresetBehavior未収集を確認済み。

## 次回再開地点

1. **LATEST_HANDOFF基準186件地点から継続。** 2007年9月一覧とmainを突合し、`南国姉妹-30`、`クレイジージョーカー` など独立未登録機を確認する。
2. `クレイジージョーカー` は当時グリーンべるとで `2007-09-17` 納品開始を確認済み。main未登録なら性能コア＋v0.7 resetBehaviorを収集して次レコード化する。
3. 9月漏れ監査を閉じた後、2007年10月へ前進。既確認候補は `マッドジー` 2007-10-09、`マジックモンスター2` 2007-10-22予定。
4. resetBehavior遡及QAは **2006年7月 `大江戸漫遊記`** から再開。既存性能コアは不用意に変更せず、v0.7 resetBehaviorを別管理で補完する。
5. PARTIAL/UNVERIFIEDやリセット欠損は検索語・型式/メーカー/シリーズ表記・資料系統を変えて十分再探索し、競合値は平均せず `CONFLICT` を維持する。
