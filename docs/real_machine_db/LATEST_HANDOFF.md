# 実機DB 最新リレー引継ぎ

更新日: 2026-09-04

## 現在地点

- recordCount: **590**
- latestMachineAdded: **竜馬翔ける**（岡崎産業 / releaseDate 2011-07-03 / BACKFILL）
- latestRecord: `docs/real_machine_db/machines/2011-07-03_ryoma-kakeru.md`
- chronologicalFrontier: **2011-07-04**
- frontierLatestExactDateMachine: **センゴク回胴記**
- schema: **resetBehavior v0.7**
- status: **READY_TO_CONTINUE**

## 今回の境界BACKFILL — 竜馬翔ける

- 最新mainのREADME、正本ミッションv0.7、INDEX、LATEST_HANDOFF、直前レコード「センゴク回胴記」を再取得して開始。
- main正本は recordCount 589 / chronologicalFrontier 2011-07-04。以前の会話上の件数ではなくLATEST_HANDOFFを正として継続。
- 2011-07-04同日群と直前境界を再監査したところ、岡崎産業「竜馬翔ける」がrepo未登録であることを確認。
- 当時グリーンべると/P-WORLD業界ニュースに **2011-07-03納品開始予定** の直接記述があり、既到達frontierより1日前の漏れと判定。590件目としてBACKFILL追加。
- chronologicalFrontierは既到達の2011-07-04を維持。

### 性能コア

- 機械割: **98.3 / 99.3 / 102.89 / 106.12 / 107.51 / 109.13%**。P-WORLDと5号機クロニクル（小数1桁丸め）で一致。
- RUSH初当り: **1/221 / 1/216 / 1/207 / 1/194 / 1/184 / 1/183**。
- 超竜馬BONUS: **1/8192 / 1/8192 / 1/7282 / 1/7282 / 1/7282 / 1/7282**。
- 竜馬BONUS: **1/358 / 1/352 / 1/343 / 1/312 / 1/305 / 1/303**。
- 突然RUSH: **1/603 / 1/596 / 1/558 / 1/550 / 1/493 / 1/489**。
- ボーナス合算: **1/343 / 1/338 / 1/328 / 1/299 / 1/293 / 1/291**。
- ART「竜馬ラッシュ」: **最低30G+α / 約+2.0枚/G**。
- 竜馬CHANCE: **約1/13**。ART中は5段階の内部モードを持つ。
- ART間**888G**後のART突入で引き戻しからのART復帰4回保障、ART間**1400G**後のART突入で超竜馬ラッシュ確定。
- 50枚ベースとボーナス実純増枚数は、表記・資料系統を変えて再探索したが比較可能な直接値を確定できず **UNVERIFIED_AFTER_RESEARCH**。

### resetBehavior v0.7

- 設定変更時のART間888G/1400G進捗CLEAR/RETAIN、内部5モード、引き戻し保障、ART状態の具体処理は **UNVERIFIED_AFTER_RESEARCH**。
- 据え置き時の天井進捗/モード/保障保持は **UNVERIFIED_AFTER_RESEARCH**。
- 単純電源OFF→ON時のカウンタ/モード/ART状態は **UNVERIFIED_AFTER_RESEARCH**。
- リセット専用短縮天井・朝一専用ART優遇・朝一特定G以内当選率は **NONE_CONFIRMED_AFTER_RESEARCH**。
- ガックン、初期出目、液晶、ランプ等による設定変更判別は **UNVERIFIED_AFTER_RESEARCH**。
- 有利区間は **NOT_APPLICABLE**。
- 一般的な5号機則から推測補完していない。

## 主要出典 — 竜馬翔ける（取得日 2026-09-04）

- グリーンべると / P-WORLD業界ニュース: `https://news.p-world.co.jp/articles/4679/greenbelt`
- P-WORLD: `https://www.p-world.co.jp/machine/database/6380`
- 5号機クロニクル: `https://5goki.com/okazaki`
- A-SLOT当時記事: `https://www.a-slot.com/hpgen/HPB/entries/169.html`

## source QA note

- P-WORLDの機械割精密値と5号機クロニクルの小数1桁値は丸め差のみで、意味の異なるCONFLICTとは扱わない。
- 当時業界記事の2011-07-03は「納品開始予定」。P-WORLD/5号機クロニクルは2011年7月導入表記であり矛盾しない。
- P-WORLDは「コイン持ち良し」とするが、比較可能な数値ではないためbaseGamesPer50へ転記しない。

## 直前までの重要重複監査情報

- `docs/real_machine_db/machines/2011-06-17_onihama-gaiden-hayato-shippuden.md`
- `docs/real_machine_db/machines/2011-06-20_riospa-rio-no-dai-onsen.md`
- `docs/real_machine_db/machines/2011-06-20_progolfer-saru.md`
- `docs/real_machine_db/machines/2011-06-27_skylove3.md`
- `docs/real_machine_db/machines/2011-06-27_daigyakuten.md`
- `docs/real_machine_db/machines/2011-06_warau-salesman.md`
- `docs/real_machine_db/machines/2011-07-03_ryoma-kakeru.md`
- `docs/real_machine_db/machines/2011-07-04_cyberdragon2.md`
- `docs/real_machine_db/machines/2011-07-04_sengoku-kaidouki.md`
- 以後もrecursive tree / contents実パス確認を重複判定の優先手順とし、code search未ヒットだけで未登録判定しない。

## 遡及QA継続地点

- **めぞん一刻 (`docs/real_machine_db/machines/2006-11_mezon-ikkoku.md`) までresetBehavior v0.7補完済み**。
- 次のtree実パスは **`docs/real_machine_db/machines/2006-11_mikawa-sasoriza-no-salaryman.md`**。
- `2006-11-27_thunder-v-special.md` は既にresetBehavior収集済みのため重複QA対象外。

## 本線の次回再開地点

1. **recordCount 590 / chronologicalFrontier 2011-07-04**から開始。
2. **2011-07-04同日群の残存監査を完了**し、tree実パス/contentsと外部導入カレンダーを照合。未登録があれば同日群を優先。
3. 同日群が閉じたら **2011-07-05〜07-10境界を監査**し、未登録がなければ **2011-07-11「ペガサスNEO」**を次の具体日候補としてrepo重複確認後に処理する。K-Naviは2011-07-11ホール導入開始、グリーンべるとは7月中旬納品としている。
4. 続く7月候補として **トリプルクラウン25φ（7/15納品予定）→ ミルキーマーチ（7/18納品予定）→ GRADIUS THE SLOT（7/22導入開始 / 7/24納品 / 7/25導入の資料差）** を時系列監査する。ただし、その間により古い未登録機がないか毎回先に確認する。
5. `GRADIUS THE SLOT` 到達時は **2011-07-22 / 07-24 / 07-25 の日付定義差・CONFLICT** を保持する。
6. PARTIAL/UNVERIFIEDは表記揺れ・型式名・メーカー・シリーズ名・設定変更/朝一/据え置き/電源OFF ON/天井/モード/ガックン等へ検索語を変え、公式・業界・当時解析・古いDB・アーカイブ・回顧資料まで横断してから確定する。競合は平均せずCONFLICT。
