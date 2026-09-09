更新日: 2026-09-09

## 現在地点
- recordCount: **1138**
- latestRecordAdded: **ぱちスロ ウルトラセブン**（オッケー. / 京楽系列）
- latestRecordAddedPath: `docs/real_machine_db/machines/2017-09-19_ultra-seven.md`
- chronologicalFrontier: **2017-09-19**
- frontierLatestMachine: **ぱちスロ ウルトラセブン — No.1138**
- schema: **resetBehavior v0.7**
- status: **2017-09-19_GROUP_OPEN**

## 今回の同期 / 進捗
- 最新mainの `README.md`、mission v0.7、旧 `INDEX.md`、`LATEST_HANDOFF.md`、No.1137「パチスロ蒼き鋼のアルペジオ -アルス・ノヴァ-」を再取得して開始。
- INDEXは初期19件時点の旧スナップショットのため、README規定どおり最新 `LATEST_HANDOFF.md` + 実レコードを進捗正本として採用。
- 開始時正本は **1137件 / chronologicalFrontier 2017-09-19 / 9/19群OPEN**。
- **「ぱちスロ ウルトラセブン」No.1138** を追加。
- パチビー2017-08-01先行試打会、グリーンべると2017-08-04業界記事、K-Navi、パチ＆スロ必勝本、一撃でオッケー.製・2017-09-19導入を照合。
- formalModelNameは中古実機DB/ホール表記の **`パチスロウルトラセブンKC`** を採用。検定番号は表記揺れ・KC・オッケー・検定通過・7S系まで再探索したが高信頼の直接値を固定できず **UNVERIFIED_AFTER_RESEARCH**。
- 性能コア: 機械割 **97.5 / 98.9 / 100.3 / 104.2 / 107.9 / 112.6%**、ベース **約48G/50枚**、ART純増 **約2.0枚/G**、ART初期 **40G or 100G+α**。
- ART初当たりは資料系統が二分。一撃/必勝本 **1/548.3 / 531.3 / 513.6 / 449.4 / 417.5 / 375.1** をcanonical、K-Navi/P-WORLD/すろぱちくえすと系 **1/548.1 / 529.4 / 516.0 / 452.7 / 414.1 / 375.1** を `CONFLICT_ART_INITIAL_HIT_TABLE` として保持。平均化しない。
- 通常天井 **ART間1280G+前兆**。設定変更時は **777G+前兆**へ短縮（名目503G短縮）。
- resetBehavior v0.7: 設定変更で **天井RESET / CZ規定G数側RESELECT / 内部状態RESELECT**。純電源OFF→ONは **天井・CZ規定G数側・内部状態CARRYOVER**。据え置きも同系統の引継ぎ扱い。
- 設定変更時内部状態の公開値: 奇数設定1/3/5 **低確39.8 / 通常39.8 / 高確20.3%**、偶数設定2/4/6 **低確30.1 / 通常30.1 / 高確39.8%**。
- 朝一ゾーンは期待値見える化の新台初日集計で通常ゾロ目より約60G前倒し観測。ただし「内部的にART後503Gから開始」は記事筆者の推測なので内部仕様として固定しない。
- resetDetectionはガックン/初期出目/ステージまで検索語・資料系統を変えて再探索。本機固有の確定ガックン契約は固定できず **UNVERIFIED_AFTER_RESEARCH**。期待値見える化の実戦では昼ステージ開始を観測するが、一撃の直接比較表は設定変更/電源OFFともステージ調査中のため確定判別には採用しない。
- 有利区間は **NOT_APPLICABLE_5TH_GEN_PRE_5_9**。

## No.1138 — ぱちスロ ウルトラセブン
- manufacturer: **オッケー.（京楽系列）**
- releaseDate: **2017-09-19**
- formalModelName: **パチスロウルトラセブンKC**
- certificationNumber: **UNVERIFIED_AFTER_RESEARCH**
- generation/system: **5号機（5.5号機世代） / ART / CZ搭載 / ゲーム数上乗せ型**
- recordStatus: **COMPLETE_CORE_WITH_RESET_BEHAVIOR_V0_7_IDENTITY_PARTIAL_AND_INITIAL_HIT_CONFLICT**

### resetBehavior v0.7 要点
- settingChange: **天井RESET→777G / CZ側RESELECT / 内部状態RESELECT**。
- stay setting: **天井・CZ側・内部状態CARRYOVER**。
- pure power OFF→ON: **天井・CZ側・内部状態CARRYOVER**。
- normal ceiling: **ART間1280G+前兆**。
- reset ceiling: **777G+前兆**。
- odd settings reset state: **低確39.8 / 通常39.8 / 高確20.3%**。
- even settings reset state: **低確30.1 / 通常30.1 / 高確39.8%**。
- reset benefit: **天井503G短縮 + 偶数設定高確39.8%**。
- reset detection: **UNVERIFIED_AFTER_RESEARCH**。朝一昼ステージは実戦観測のみで確定契約ではない。

## 2017-09-04群 — CLOSED
登録済み No.1127〜No.1134。SLOTデビルマンχは9/4 vs 9/19の導入日CONFLICTを保持。

## 2017-09-19群 — OPEN
登録済み:
1. パチスロ ゴルゴ13（SANKYO 2017版）— No.1135
2. パチスロ亜人 — No.1136
3. パチスロ蒼き鋼のアルペジオ -アルス・ノヴァ- — No.1137
4. **ぱちスロ ウルトラセブン — No.1138**

優先未処理候補:
- **SLOT魁!!男塾〜目指せ！闘宴大武會〜** — 次本線。K-Navi / パチビー / ちょんぼりすたで2017-09-19導入を再確認。ミズホ製、A+ART、ボーナス込み純増約1.8枚/G、通常天井ボーナス・ART間1000G系を次回精査。
- **盗忍！剛衛門** — 2017-09-19導入。大都技研。型式 `番長外伝 盗忍!剛衛門／A8` の二次資料あり。盗目回数天井・設定変更確定終了画面等を次回以降v0.7粒度で精査。
- **シンデレラブレイド3** — HAZUSEで2017-09-19、型式 `シンデレラ×ブレイド3／NI`、検定番号 `7S0870` を直接DB確認済み。
- 同日・周辺日の全メーカー横断監査を継続し、漏れ確認後に群CLOSED判定する。

## 遡及 resetBehavior QA
- 最新カーソルは `docs/real_machine_db/machines/2006-07_ooedo-manyuuki.md`（大江戸漫遊記）。
- retroQaScanConfirmedThrough: **2006-06_lord-of-the-rings.md**。
- retroQaStatus: **SEQUENTIAL_SCAN_ACTIVE**。
- 新規機種収集本線を止めず、別QAリレーで順次補完する。

## 次回再開地点
1. 最新mainの README / mission v0.7 / INDEX / LATEST_HANDOFF / No.1138を再取得。
2. **1138件 / chronologicalFrontier 2017-09-19 / 9/19群OPEN** を正本として継続。
3. 最優先は **「SLOT魁!!男塾〜目指せ！闘宴大武會〜」— No.1139候補**。
4. 次に **盗忍！剛衛門 → シンデレラブレイド3** を優先し、全メーカー・表記揺れ・地域導入差で2017-09-19群を横断監査。
5. 遡及QAは `docs/real_machine_db/machines/2006-07_ooedo-manyuuki.md` から継続。

## 主要出典 — 取得日 2026-09-09
### No.1138 ぱちスロ ウルトラセブン
- パチビー 先行試打会: https://www.pachibee.jp/pparticles/view/988
- グリーンべると: https://web-greenbelt.jp/00009809/
- 一撃 基本スペック: https://1geki.jp/slot/s_ultraseven/
- 一撃 天井/設定変更: https://1geki.jp/slot/s_ultraseven/3/
- 一撃 状態移行: https://1geki.jp/slot/s_ultraseven/42/
- 一撃 CZ: https://1geki.jp/slot/s_ultraseven/43/
- パチ＆スロ必勝本: https://p.hisshobon.jp/machine/3058/1/66136
- K-Navi: https://p-kn.com/slot/2876/
- P-WORLD: https://www.p-world.co.jp/machine/database/8479
- ちょんぼりすた: https://chonborista.com/slot/kyoraku-slot/44095/
- 期待値見える化 リセット: https://slotjin.com/slot/ultra-seven-reset/
- すろぱちくえすと: https://www.slopachi-quest.com/article/ultra-seven/
- パチマ中古実機DB（型式）: https://www.pachima.com/c/slot/s_28sonota/S00445

### 次候補先行確認
- K-Navi SLOT魁!!男塾: https://p-kn.com/slot/2887/
- パチビー SLOT魁!!男塾: https://www.pachibee.jp/machines/index/217080025
- ちょんぼりすた SLOT魁!!男塾: https://chonborista.com/slot/universal-slot/45177/
- ちょんぼりすた 盗忍！剛衛門: https://chonborista.com/slot/daito-slot/44323/
- HAZUSE シンデレラブレイド3: https://hazuse.com/machine/pachislot/7S0870/
