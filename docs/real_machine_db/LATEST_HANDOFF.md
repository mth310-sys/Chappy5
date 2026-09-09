更新日: 2026-09-10

## 現在地点
- recordCount: **1149**
- latestRecordAdded: **乱嵐エイサーver.100**（オーイズミ）
- latestRecordAddedPath: `docs/real_machine_db/machines/2017-09-19_ranran-eisa-ver100.md`
- chronologicalFrontier: **2017-09-19**
- frontierLatestMachine: **乱嵐エイサーver.100 — No.1149**
- schema: **resetBehavior v0.7**
- status: **2017-09-19_GROUP_OPEN**

## 今回の同期 / 進捗
- 最新mainの `README.md`、mission v0.7、旧 `INDEX.md`、`LATEST_HANDOFF.md`、No.1148「紅き魂は桜の如く」を再取得して開始。
- INDEXは初期19件時点の旧スナップショット。README規定どおり最新 `LATEST_HANDOFF.md` + 実レコードを進捗正本として採用。
- 開始時正本は **1148件 / chronologicalFrontier 2017-09-19 / 9/19群OPEN**。
- 前handoff最優先候補 **「乱嵐エイサーver.100」** を重複・型式・導入日・性能値・resetBehavior検索し、**No.1149** としてmainへ保存。

## No.1149 — 乱嵐エイサーver.100
- manufacturer: **オーイズミ**
- releaseDate canonical: **2017-09-19**
- formalModelName: **ランランエイサー2/CX**
- certificationNumber: **UNVERIFIED_AFTER_RESEARCH**
- generation/system: **5号機（5.5号機世代） / ノーマル完全告知Aタイプ**
- recordStatus: **COMPLETE_CORE_WITH_RESET_BEHAVIOR_V0_7_PARTIAL_BASE**

### identity / release conflict
- 型式 `ランランエイサー2/CX` は2017-07-24の公安委員会告示ベース検定情報、検定DB、Re.designで一致。Re.design掲載のBIG/REG/出率も商品公開値と一致するため商品名との対応を固定。
- K-Navi、すろぱちくえすと、ちょんぼりすたは **2017-09-19**。Re.design最短納期は **2017-09-18** で整合。
- 一方、新台カレンダー1系統が **2017-09-04** とするため `CONFLICT_RELEASE_DATE_2017_09_19_VS_2017_09_04` を保持。canonicalは9/19。
- 検定番号は型式/メーカー/検定/告示/古いDBへ検索語を変更しても直接固定できず `UNVERIFIED_AFTER_RESEARCH`。

### 性能コア
- BIG: **1/282.5 / 277.7 / 271.9 / 265.3 / 258.0 / 249.2**。
- REG: **1/458.3 / 442.8 / 434.0 / 417.4 / 412.2 / 360.1**。
- 合算: **1/174.8 / 170.7 / 167.2 / 162.2 / 158.7 / 147.3**。
- 機械割 canonical: **100.0 / 101.2 / 102.4 / 104.2 / 105.5 / 108.0%**。
- 設定2のみ K-Navi **104.2%** vs Re.design/すろぱちくえすと/ちょんぼりすた **101.2%**。平均せず `CONFLICT_PAYOUT_S2_101_2_VS_104_2`、101.2%をcanonical。
- BIG: **336枚払い出し / 純増約300枚**。
- REG: **112枚払い出し / 純増約108枚 canonical**。すろぱちくえすと機種情報サマリのみ約104枚のため `CONFLICT_REG_PAYOUT_108_VS_104`。
- 50枚ベース: **UNVERIFIED_AFTER_RESEARCH**。ちょんぼりすた/Re.designとも未掲載で、50枚/1000円/ベース/コイン持ち/回転数へ検索語変更後も固定不能。
- 天井: **非搭載**。

### resetBehavior v0.7
- settingChange: 天井・ゲーム数モード・CZ/ART/AT・朝一高確構造を持たないノーマル機。設定変更専用の天井短縮/モード/状態/初当たり優遇は **NONE_CONFIRMED_AFTER_RESEARCH**。本機固有の初期出目等は `UNVERIFIED_AFTER_RESEARCH`。
- stay setting: 引継ぎ対象となる天井・ゲーム数モード・内部高確状態は **NOT_APPLICABLE**。「据え置き」と明記した本機固有初期出目/ランプ契約は `UNVERIFIED_AFTER_RESEARCH`。
- pure power OFF→ON: ゲーム性上の天井/モード/状態は **NOT_APPLICABLE**。リール初期挙動・告知ランプ等の直接契約は `UNVERIFIED_AFTER_RESEARCH`。
- gameCounterReset: **NOT_APPLICABLE_NO_GAME_COUNT_CEILING**。
- ceilingAfterReset: **NONE / NOT_APPLICABLE**。
- modeAfterReset/stateAfterReset: **NOT_APPLICABLE / NONE_CONFIRMED_AFTER_RESEARCH**。
- advantageousSection: **NOT_APPLICABLE_5TH_GEN_PRE_5_9**。
- resetBenefits/resetPenalties: **NONE_CONFIRMED_AFTER_RESEARCH**。通常の設定差はリセット恩恵と分離。
- resetDetection: 本機固有ガックン/初期出目/ランプ判別を機種名・型式・メーカー・シリーズ名と「ガックン/リール/朝一/設定変更/据え置き/電源OFF ON」で再探索したが直接資料を固定できず **UNVERIFIED_AFTER_RESEARCH**。他オーイズミ機から類推しない。
- numericResetData: 公開朝一数値 **NONE_CONFIRMED_AFTER_RESEARCH**。

## 2017-09-04群 — CLOSED
登録済み No.1127〜No.1134。個別導入日CONFLICTは各レコード保持。

## 2017-09-19群 — OPEN
登録済み No.1135〜No.1149。今回 **乱嵐エイサーver.100 No.1149** を追加。

### 同日横断監査・次候補
- **`闘え!サラリーマン` を9/19群CLOSED前に再監査する。**
- 型式 **闘え！サラリーマン／XA** は検定DBで確認済み。
- 導入日は楽スロ等が **2017-09-19** とする一方、新台カレンダーは **2017-09-04**。フィールズ公式2017-07-11発売発表は全国発売を告知するが今回確認範囲では具体導入日を示さない。次回、当時業界資料・ホール納品日・解析DBを増やし、既存登録有無も照合して9/19追加対象か、既存別日レコードのCONFLICT追記対象かを決める。
- 先行reset情報では通常天井 **3年=約1095G**、設定変更時 **2年=730Gへ短縮**との解析があるため、独立追加対象ならv0.7収集価値が高い。
- `闘え!サラリーマン` 処理後、2017-09-19全メーカー・表記揺れ・地域導入差を横断監査し、追加漏れがなければCLOSED判定して次導入日群へ進む。

## 遡及 resetBehavior QA
- 最新カーソルは `docs/real_machine_db/machines/2006-07_ooedo-manyuuki.md`（大江戸漫遊記）。
- retroQaScanConfirmedThrough: **2006-06_lord-of-the-rings.md**。
- retroQaStatus: **SEQUENTIAL_SCAN_ACTIVE**。
- 新規機種収集本線を止めず、別QAリレーで順次補完する。

## 次回再開地点
1. 最新mainの README / mission v0.7 / INDEX / LATEST_HANDOFF / No.1149を再取得。
2. **1149件 / chronologicalFrontier 2017-09-19 / 9/19群OPEN** を正本として継続。
3. 最優先は **`闘え!サラリーマン` の導入日・既存レコード有無再監査**。9/19独立未登録ならNo.1150候補としてperformance core + resetBehavior v0.7を収集。既存登録済みなら重複を作らずCONFLICT/identityを正本側へ反映する。
4. その後2017-09-19同日全メーカー監査を完了し、漏れがなければ群CLOSED → 次導入日へ進む。
5. 遡及QAは `docs/real_machine_db/machines/2006-07_ooedo-manyuuki.md` から継続。

## 主要出典 — 取得日 2026-09-10
### No.1149 乱嵐エイサーver.100
- K-Navi: https://p-kn.com/slot/2878/
- P-WORLD: https://www.p-world.co.jp/machine/database/8486
- すろぱちくえすと: https://www.slopachi-quest.com/article/ranran-eisa-100/
- ちょんぼりすた: https://chonborista.com/slot/oizumi-slot/46606/
- Re.design: https://www.redesign777.tokyo/Spec/SlotView?flag=True&id=S2017080913222401
- パチマガスロマガ検定情報（7/24）: https://cs62.cs-plaza.com/g/pachi/column/detail.php?mcl_cd=0098&mwr_cd=090&tac_cd=00044201&type=1
- すろ・ぱち(解)検定DB: https://kaiseki.sulopachinews.com/archives/2352
- 2017新台カレンダー（導入日競合）: https://slotnews777.blog.fc2.com/blog-entry-3121.html

### 次回 `闘え!サラリーマン` 先行監査
- フィールズ公式発売発表（2017-07-11）: https://www.tsuburaya-fields.co.jp/ir/j/files/press/2017/press_20170711a.pdf
- 楽スロ（2017-09-19導入表記/リセット730G天井）: https://rakuslo.com/tatakae_salaryman-tenjyo.html
- 2017新台カレンダー（2017-09-04表記）: https://slotnews777.blog.fc2.com/blog-entry-3121.html
