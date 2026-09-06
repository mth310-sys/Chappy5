# 実機DB 最新リレー引継ぎ

更新日: 2026-09-06

## 現在地点

- recordCount: **775**
- latestMachineAddedByChronology: **パチスロ ギルティギア**（D-light / ディ・ライト）
- latestRecord: `docs/real_machine_db/machines/2013-11-18_guilty-gear.md`
- chronologicalFrontier: **2013-11-18**
- frontierLatestExactDateMachine: **パチスロ ギルティギア**
- schema: **resetBehavior v0.7**
- status: **OPEN_2013-11-18_GROUP__GUILTY_GEAR_DONE__NEXT_TALES_OF_DESTINY**

## 今回の同期 / 重要事項

- 最新mainの `README.md`、`docs/CHAPPY5_REAL_MACHINE_DATABASE_MISSION_V01.md`、`docs/real_machine_db/INDEX.md`、`LATEST_HANDOFF.md`、直前レコードを再読してから継続。
- INDEXは旧集約状態のため、README規定に従い **LATEST_HANDOFF + 実レコード** を正本扱い。
- 作業開始時正本は **recordCount 774 / chronologicalFrontier 2013-11-05 / 11-05群CLOSED / 11-06〜11-17境界CLOSED_FOR_CURRENT_RESEARCH**。
- 2013-11-18同日群へ進み、既存レコード不在を確認した **「パチスロ ギルティギア」** を775件目として追加。
- 11-18群はまだOPEN。既知残存候補は **テイルズ オブ デスティニー / タイガーマスク / マジカルハロウィン4 / スタードライバー**。全メーカー横断監査後にCLOSED判定する。

## 今回追加 — パチスロ ギルティギア

### identity / 性能コア

- manufacturer: **D-light / ディ・ライト**。
- modelName: **ギルティギアヴァステッジXT**。
- releaseDate: **2013-11-18**。ディ・テクノ当時プレスリリース / パチビー / K-Naviで一致。
- generation/system: **5号機 / ART / 擬似ボーナス / 周期CZ / 天井**。
- 機械割: **98.0 / 99.4 / 101.1 / 104.4 / 107.3 / 111.6%**。複数資料で一致。
- ボーナス合算: **1/229 / 220 / 214 / 192 / 191 / 169**。
- ART初当たり: 設1〜5は丸め整合。設定6のみ **K-Navi 1/436 vs 後年解析 1/481.0 = CONFLICT**。平均しない。
- baseGamesPer50: **約32.5G/50枚 ANALYSIS_SINGLE**。
- ART「ブラストドライブ」: **40G + 継続バトル7G / 純増約2.4枚/G**。複数資料一致。
- 擬似ボーナス: PREMIUM約275枚 / SUPER GUILTY約240枚 / GUILTY約120枚 / REG約60枚。
- 周期: 最大200G、短縮込み平均約90GでCZ「審判の門」。
- 通常天井: **ボーナス＆ART間999G**。
- recordStatus: **COMPLETE_CORE_WITH_RESET_BEHAVIOR_RESEARCHED_WITH_CONFLICTS**。

### resetBehavior v0.7

- 設定変更後天井: 当時攻略資料で **555G**。通常999Gと分離。資料自身に推測注意書きがあるため **ANALYSIS_SINGLE** として保存。
- setting change game count: **RESET_TO_RESET_SPECIFIC_CEILING_555G_ANALYSIS_SINGLE**。
- 設定変更時の周期進捗 / CZ進捗 / 内部状態: **UNVERIFIED_AFTER_RESEARCH**。
- 純据え置き時の天井G / 周期 / 状態保持: **UNVERIFIED_AFTER_RESEARCH**。
- 設定変更なしの単純電源OFF→ON時の天井G / 周期 / 状態: **UNVERIFIED_AFTER_RESEARCH**。
- 有利区間: **NOT_APPLICABLE_5TH_GEN**。
- reset benefit: 555G解析が正しければ通常999Gより短縮。単一解析のため確定値へ格上げしない。
- 変更判別: 本機固有の高信頼ガックン/液晶判別契約は **NONE_CONFIRMED_AFTER_RESEARCH**。
- 公開朝一数値: **設定変更時555G天井 ANALYSIS_SINGLE**。その他の専用振り分け数値は固定できず。

### CONFLICT / safeguards

- ART初当たり設定6: **1/436 vs 1/481.0**。別資料系統の明確な競合として双方保持。
- REG設定6の1/481とART設定6競合側1/481.0は別指標。混同しない。
- 通常999G天井と設定変更後555Gを分離。
- ゲーム作品側の別リリース日表記をホール導入日へ混入させない。

## 遡及resetBehavior QA 進捗

- QAカーソルは引き続き `2007-01_karate-baka-ichidai.md` の次の実ファイル順。
- 今回はGitHub巨大tree/contentsから直後ファイルを安全に一意固定できず、誤更新回避のためカーソルを進めていない。
- 既存COMPLETE_CORE/PARTIAL等の性能側判定は変更していない。
- 次回は本線と並行し、tree/git-tree系取得方法を変えて最初のresetBehavior欠損機を確定してから遡及補完する。

## 次回再開地点

1. **recordCount 775 / chronologicalFrontier 2013-11-18 / 11-18群OPEN** から開始。
2. 次の未処理候補は **「パチスロ テイルズ オブ デスティニー」**（北電子）。既存レコード不在確認後、性能コア + resetBehavior v0.7を収集。
3. 続いて **タイガーマスク → マジカルハロウィン4 → スタードライバー**。
4. 11-18同日全メーカー監査を行い、追加候補があれば日付内で処理してからCLOSED。
5. 遡及QAは `2007-01_karate-baka-ichidai.md` 直後の実ファイル順から継続。
6. PARTIAL / UNVERIFIED / reset欠損は公式・業界・当時解析・古いDB・アーカイブ・回顧資料へ検索系統を変えて再探索し、競合はCONFLICTのまま保持。

## 主要出典 — 取得日 2026-09-06

### パチスロ ギルティギア

- ディ・テクノ当時プレスリリース: `https://www.atpress.ne.jp/news/40700` — 実機全国導入2013-11-18、平均周期約90G。
- パチビー: `https://www.pachibee.jp/machines/about/213100003` — 導入日、5号機ART、40G+7G、純増約2.4枚/G、最大200G周期。
- K-Navi: `https://p-kn.com/slot/1942/` — 導入日、ボーナス/ART初当たり、機械割、ART構造、周期CZ。
- パチマガスロマガ: `https://cs62.cs-plaza.com/g/pachi/pla/s_conq/d-light_slot/03/a.php` — ART40G+7G、純増約2.4枚/G、各擬似ボーナス枚数。
- P-WORLD: `https://www.p-world.co.jp/machine/database/7207` — 5号機ART、純増約2.4枚/G、ボーナス枚数、最大継続率80%。
- すろぱちくえすと機種まとめ: `https://www.slopachi-quest.com/kisyubetsu/guilty-gear/` — 999G天井、機械割、ART初当たり精密系列（設定6 1/481.0）。
- すろぱちくえすと当時記事: `https://www.slopachi-quest.com/article/379981997-html/` — 通常999G、設定変更時555G、天井ART継続率。記事の推測注意書きを保持。
- スロスター当時スペック整理: `https://ameblo.jp/slostar/entry-11612735280.html` — 約32.5G/1000円、最大200G周期、平均約90G。
- 5号機クロニクル: `https://5goki.com/daiichi` — 機械割系列。
